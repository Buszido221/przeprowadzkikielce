# Przekazanie Google Ads, GA4 i Search Console

Dokument jest checklistą operacyjną. Repozytorium nie zmienia kont reklamowych ani analitycznych.

## Kampania / grupa reklam → finalny URL

| Obszar kampanii | Grupa / intencja | Finalny URL |
|---|---|---|
| Przeprowadzki B2C | przeprowadzki Kielce | `/przeprowadzki/` |
| Przeprowadzki B2C | cena przeprowadzki | `/przeprowadzki/` |
| Przeprowadzki B2C | transport AGD / lodówki w ramach przeprowadzki | `/przeprowadzki/` |
| Transport mebli | transport mebli Kielce | `/transport-mebli-kielce/` |
| Pakowanie | pakowanie do przeprowadzki | `/pakowanie-i-zabezpieczanie/` |
| Instrumenty | transport pianina / fortepianu | `/transport-pianin-i-fortepianow-kielce/` |
| Transport specjalistyczny | gabaryty, serwery, piece, ciężkie wyposażenie | `/transport-specjalistyczny/` |
| Opróżnianie | opróżnianie mieszkania / wywóz starych mebli | `/oproznianie-mieszkan-i-wywoz-mebli/` |
| B2B | przeprowadzki firm i instytucji | `/przeprowadzki-firm-i-instytucji/` |
| B2B szerokie | relokacje, archiwa, laboratoria, zarządcy | `/dla-firm/` |
| Magazyny | magazynki Kielce / Masłów | `/magazyny-kielce/` |

Nie kierować nowych reklam do `/lp/`. Parametry UTM, `gclid`, `gbraid` i `wbraid` są zachowywane w sesji i dołączane do formularza bez danych osobowych w zdarzeniach analitycznych.

## Kontrakt zdarzeń GA4

| Zdarzenie | Moment | Parametry bez PII |
|---|---|---|
| `phone_click` | kliknięcie linku `tel:` | `link_location`, `page_path` |
| `email_click` | kliknięcie linku `mailto:` | `link_location`, `page_path` |
| `cta_click` | CTA niebędące telefonem/e-mailem | `cta_location`, `page_path` |
| `form_start` | pierwsza edycja pola | `service_type`, `form_location`, `form_context`, `page_path` |
| `form_submit_error` | błąd techniczny wysyłki | kontekst formularza, bez wpisanej treści |
| `generate_lead` | potwierdzona wysyłka EmailJS | `form_id`, `service_type`, `form_location`, `form_context`, `page_path` |
| `scroll_depth` | 25/50/75/100% | próg i `page_path` |
| `engaged_time` | 15/30/60 s aktywnej karty | próg i `page_path` |

Numer telefonu, e-mail, nazwisko, firma i treść wiadomości nie są wysyłane do GA4.

## Checklista GA4 / Google Ads

- [ ] Ustawić `PUBLIC_SITE_ENV=production` dopiero przy zatwierdzonym starcie.
- [ ] Sprawdzić baner zgody: przed akceptacją storage pozostaje `denied`.
- [ ] W DebugView potwierdzić nazwy i parametry zdarzeń bez PII.
- [ ] Oznaczyć `generate_lead` jako kluczowe zdarzenie dopiero po udanym teście EmailJS.
- [ ] Rozważyć `phone_click` jako mikro-konwersję; nie mieszać go z wysłanym leadem.
- [ ] Zaimportować właściwe zdarzenia do Google Ads bez dublowania konwersji.
- [ ] Zmienić finalne URL-e reklam zgodnie z tabelą i zachować aktualne UTM-y.
- [ ] Przetestować automatyczne tagowanie oraz przechwytywanie `gclid`/`gbraid`/`wbraid`.
- [ ] Nie publikować wartości pól formularza jako parametrów zdarzeń.

## Checklista Search Console

- [ ] Dodać / potwierdzić właściwość domenową przed startem.
- [ ] Po starcie przesłać `https://przeprowadzkikielce.pl/sitemap.xml`.
- [ ] Sprawdzić kilka stron w inspekcji URL: status 200, canonical własny, brak `noindex`.
- [ ] Sprawdzić stare adresy `/lp/`, `/magazyny/`, `/poradnik/` i gabaryty: pojedyncze 301.
- [ ] Monitorować 404, „strona z przekierowaniem”, duplikaty canonical i indeksowanie celów.
- [ ] Nie usuwać reguł 301 po krótkim okresie; utrzymywać je długoterminowo.
