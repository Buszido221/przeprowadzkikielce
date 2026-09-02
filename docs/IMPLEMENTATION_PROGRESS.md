# Dziennik wdrożenia przebudowy WHM

Aktualizacja: 2 września 2026

| Etap | Status | Commit / dowód |
|---|---|---|
| A. Bezpieczny baseline | zakończony | `d35b052` + baseline build |
| B. Główna strona `/przeprowadzki/` i konsolidacja | zakończony | `e361965` |
| C. Pozostałe strony B2C | zakończony | `e361965` |
| D. Usunięcie aktywnego systemu `/lp/` | zakończony | `055a693` |
| E. Wspólna rama i strona główna | zakończony | `e361965`, `9652723` |
| F. Wiarygodność marki i realizacje | zakończony | `9652723` |
| G. Tor B2B | zakończony | `9652723` |
| H. Magazyny | zakończony | `9652723` |
| I. SEO i jakość | zakończony | wspólny rejestr tras + finalny QA |
| J. Pełne QA | zakończony | `docs/QA_REPORT.md` |
| K. Pakiet uruchomieniowy | zakończony | dokumenty w `docs/` |
| L. Integracja nowych zdjęć i aktualnego GitHub | zakończony | baza `8007f8f`; 65 assetów; `SafeImage`; pełne QA 28 tras w 2 viewportach |

## Stan końcowy

- Docelowa nawigacja, stopka i sitemap korzystają z jednego rejestru tras.
- Główna konwersja B2C prowadzi do telefonu `720 719 022`; prosty wspólny formularz jest kanałem drugim.
- B2B ma osobny hub i stronę relokacji z bezpłatnymi oględzinami, planowaniem, etapami, archiwami, magazynowaniem oraz kontekstem firmy w formularzu.
- Mikrousługi AGD i lodówki są częścią `/przeprowadzki/`; transport gabarytowy jest częścią `/transport-specjalistyczny/`.
- Aktywne pliki tras `/lp/` zostały usunięte po migracji treści. Każdy historyczny adres ma precyzyjne 301 w `public/_redirects`.
- Magazyny są opisane jako gotowe, częściowo zajęte, ogrzewane boksy od 2 do 9 m².
- Staging domyślnie renderuje `noindex, nofollow, noarchive` i nie ładuje kodu Google.
- Aktualny zestaw 65 zdjęć i logo z `8007f8f` jest zachowany; wszystkie aktywne odwołania graficzne mają istniejący plik.

## Potwierdzone testy

- Build staging zakończony powodzeniem: 29 stron HTML (w tym 404), bez aktywnego katalogu `/lp/`.
- Każda właściwa trasa ma dokładnie jeden H1, jeden canonical i stagingowe robots.
- Brak odwołań do Google/GA4 na stagingu.
- Brak niedziałających lokalnych linków i obrazów w buildzie.
- Wszystkie 28 publicznych tras sprawdzone w przeglądarce na desktopie 1440 px i mobile 390 px; brak poziomego scrolla i błędów konsoli.
- Menu mobilne otwiera się, zamyka Escape i oddaje fokus przyciskowi.
- Walidacja formularza ustawia komunikaty oraz fokus na pierwszym błędzie; pole firma jest opcjonalne tylko w kontekście B2B.

## Świadomie pozostawione blokady zewnętrzne

- Brak zmiennych EmailJS uniemożliwia test rzeczywistej wysyłki. Formularz pokazuje bezpieczny komunikat z numerem telefonu i nie wysyła danych bez konfiguracji.
- Nie wdrożono serwisu produkcyjnie i nie zmieniono domeny, Google Ads, Search Console, GA4, EmailJS ani hostingu.
- Przypisanie zdjęć do nazwanych realizacji wymaga końcowego potwierdzenia merytorycznego właściciela.
