# Konfiguracja pomiaru i reklam po wdrożeniu kodu

Kod serwisu implementuje Basic Consent Mode. Przed zgodą nie pobiera Google Tag Managera ani skryptów Google lub Meta. Konfiguracja kont, tagów i zewnętrznych identyfikatorów pozostaje poza repozytorium.

## Środowisko produkcyjne

W systemie wdrożeniowym ustaw:

```dotenv
PUBLIC_SITE_ENV=production
PUBLIC_GTM_ID=GTM-XXXXXXXX
PUBLIC_EMAILJS_SERVICE_ID=...
PUBLIC_EMAILJS_TEMPLATE_ID=...
PUBLIC_EMAILJS_PUBLIC_KEY=...
```

Build produkcyjny odrzuca brakujący lub niepoprawny identyfikator GTM oraz niekompletną konfigurację EmailJS. Identyfikatory GA4, Google Ads i Meta Dataset/Pixel należy przechowywać w GTM, a nie w kodzie. Token Meta CAPI i inne sekrety nie mogą być zmiennymi `PUBLIC_*` ani trafić do repozytorium.

## Kategorie zgody i wymagania tagów

| Kategoria | Sygnał / warunek | Dozwolone tagi |
|---|---|---|
| Analityka | `analytics_storage=granted` | GA4 |
| Pomiar reklam | `ad_storage=granted` i `ad_user_data=granted` | Google Ads i Meta Pixel |
| Personalizacja | zawsze `ad_personalization=denied` | brak remarketingu personalizowanego |

GTM ładuje się, gdy użytkownik udzielił co najmniej jednej właściwej zgody. Każdy tag musi mieć dodatkowy warunek właściwej kategorii. W szczególności Google Consent Mode nie blokuje automatycznie Meta Pixel: wszystkie tagi Meta muszą mieć warunek `ads=true`/zgody na pomiar reklam. GA4 nie może uruchamiać się przy wariancie ads-only, a Ads i Meta nie mogą uruchamiać się przy analytics-only.

## Kontrakt `dataLayer`

Strona emituje po jednym obiekcie `dataLayer` dla interakcji. Zdarzenia nie są emitowane bez zgody analitycznej i reklamowej, nie są kolejkowane przed zgodą i nie zawierają danych osobowych.

| Event | Moment | Parametry |
|---|---|---|
| `phone_click` | kliknięcie `tel:` | `interaction_location`, `destination_type`, `cta_id`, `service_type`, `lead_context` |
| `sms_click` | kliknięcie `sms:` | jak wyżej |
| `email_click` | kliknięcie `mailto:` | jak wyżej |
| `cta_click` | kontrolowane CTA niekontaktowe | `cta_id`, `interaction_location`, `destination_type`, `service_type`, `lead_context` |
| `whm_shop_click` | przejście do `whmshop.pl` | jak dla CTA, z `destination_type=external_shop` |
| `lead_form_start` | pierwsza edycja formularza | `form_id`, `service_type`, `form_location`, `lead_context` |
| `lead_form_validation_error` | niepoprawna próba wysłania | parametry formularza, `error_type` |
| `lead_form_submit_error` | błąd EmailJS lub konfiguracji | parametry formularza, `error_type=emailjs` albo `configuration` |
| `generate_lead` | wyłącznie po sukcesie `emailjs.sendForm` | parametry formularza, `lead_id`, `event_id` |

`event_id` i `lead_id` są tym samym stabilnym UUID. Nie wolno dodawać do parametrów eventów imienia, telefonu, e-maila, firmy, wiadomości, adresu przeprowadzki ani pełnego URL-a z query.

## Mapowanie GA4 i Google Ads

W GTM utwórz zmienne Data Layer dla parametrów tabeli i mapuj event strony na event GA4 o tej samej nazwie. Nie twórz ręcznych zdarzeń `page_path`, `scroll_depth` ani `engaged_time`.

- `generate_lead`: bezpośredni tag konwersji Google Ads, zalecany jako Primary.
- `phone_click`: konwersja pomocnicza/mikro-konwersja, domyślnie Secondary.
- Import GA4 `generate_lead` do Google Ads: Secondary albo wyłączony, jeżeli bezpośrednia konwersja Ads jest Primary.
- Nie twórz dwóch konwersji Primary dla jednego wysłania formularza.

Dla rzeczywistych połączeń „Calls from website” skonfiguruj w Google Ads osobną konwersję połączeń z witryny, numer przekierowania Google i tag obsługujący podmianę numeru po zgodzie reklamowej. Ustaw połączenia trwające co najmniej 60 sekund jako oddzielną konwersję Primary. Jest to inny pomiar niż `phone_click` i wymaga działającego konta Ads oraz testowego połączenia.

## Mapowanie Meta Pixel

| Event Meta | Wyzwalacz GTM |
|---|---|
| `PageView` | uruchomienie tagu bazowego po załadowaniu GTM i zgodzie reklamowej |
| `ViewContent` | odsłona stron usług, B2B i realizacji, wyłącznie przy zgodzie reklamowej |
| `Contact` | `phone_click`, `sms_click` lub `email_click` |
| `Lead` | `generate_lead` |

Dla `Lead` ustaw `Meta eventID = {{event_id}}`. Nie włączaj automatycznego Advanced Matching i nie przekazuj PII z formularza do browser Pixel. Meta CAPI nie jest częścią obecnego wdrożenia; stabilny `event_id` umożliwi późniejszą deduplikację browser/server.

## Atrybucja formularza

Po zgodzie reklamowej kod zapisuje w `sessionStorage` rekord `whm_campaign_v3` z pełnym first touch i last touch. Obejmuje on czas przechwycenia, landing page, referrer, UTM-y oraz identyfikatory kliknięć. Bez zgody reklamowej rekord jest usuwany, a pola EmailJS pozostają puste. Wartości są odświeżane bezpośrednio przed wysłaniem formularza.

## Testy kont i tagów

1. W Tag Assistant sprawdź cztery kombinacje zgód i potwierdź, że uruchamiają się wyłącznie właściwe tagi.
2. W GA4 DebugView sprawdź nazwy, parametry oraz brak PII.
3. W podglądzie GTM potwierdź jeden event i jeden tag konwersji dla pojedynczego wysłania formularza.
4. W Meta Test Events i Pixel Helper sprawdź `PageView`, `ViewContent`, `Contact`, `Lead` oraz zgodność `eventID`.
5. Wyślij testowy formularz EmailJS, sprawdź wszystkie pola first/last touch i ten sam `lead_id` w EmailJS oraz `dataLayer`.
6. Wykonaj testowe połączenie przez numer przekierowania Google i sprawdź próg co najmniej 60 sekund.

Potrzebne zewnętrzne dane: identyfikator kontenera GTM, potwierdzony stream GA4 (obecny kandydat: `G-X0K3ND72TV`), identyfikator i etykiety konwersji Google Ads, konfiguracja „Calls from website”, identyfikator Meta Dataset/Pixel oraz trzy publiczne wartości EmailJS. Wszystkie sekrety pozostają poza repozytorium.
