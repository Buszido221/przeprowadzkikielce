# Mapa migracji adresów WHM

Ta mapa jest źródłem prawdy dla przekierowań przy uruchomieniu. Reguły techniczne znajdują się w `public/_redirects` i używają kodu 301.

## Docelowa architektura

| Intencja | Adres docelowy |
|---|---|
| Strona główna | `/` |
| Wszystkie usługi B2C | `/uslugi/` |
| Przeprowadzki mieszkań i domów, AGD, lodówki | `/przeprowadzki/` |
| Transport mebli | `/transport-mebli-kielce/` |
| Pakowanie i zabezpieczanie | `/pakowanie-i-zabezpieczanie/` |
| Pianina i fortepiany | `/transport-pianin-i-fortepianow-kielce/` |
| Transport ciężki, gabarytowy i specjalistyczny | `/transport-specjalistyczny/` |
| Opróżnianie i wywóz starych mebli | `/oproznianie-mieszkan-i-wywoz-mebli/` |
| Hub B2B | `/dla-firm/` |
| Relokacje firm i instytucji | `/przeprowadzki-firm-i-instytucji/` |
| Magazyny | `/magazyny-kielce/` |
| Standard i dowody pracy | `/standard-whm/`, `/realizacje/` |
| Informacje o marce i zasięgu | `/o-nas/`, `/obszar-dzialania/` |
| Poradniki | `/poradniki/` |
| Kontakt i formularz | `/kontakt/`, `/wycena/` |

## Przekierowania historyczne i reklamowe

| Adres źródłowy / rodzina | Cel | Uzasadnienie |
|---|---|---|
| `/przeprowadzki-mieszkan-i-domow/` | `/przeprowadzki/` | Ta sama intencja główna |
| `/lp/przeprowadzki-kielce/` | `/przeprowadzki/` | Landing przeprowadzkowy połączony z usługą |
| `/lp/przeprowadzki-cena/` | `/przeprowadzki/` | Sekcja czynników ceny jest na stronie usługi |
| `/lp/transport-agd-kielce/` | `/przeprowadzki/` | AGD jest elementem przeprowadzki, bez osobnej mikrousługi |
| `/lp/transport-lodowki-kielce/` | `/przeprowadzki/` | Lodówka jest elementem przeprowadzki, bez osobnej mikrousługi |
| `/lp/transport-mebli-kielce/` | `/transport-mebli-kielce/` | Pełna strona tej samej usługi |
| `/lp/pakowanie-przeprowadzki-kielce/` | `/pakowanie-i-zabezpieczanie/` | Pełna strona pakowania |
| `/lp/transport-pianina-kielce/` | `/transport-pianin-i-fortepianow-kielce/` | Najbliższy jednoznaczny cel |
| `/lp/transport-specjalistyczny-kielce/` | `/transport-specjalistyczny/` | Pełna strona tej samej usługi |
| `/lp/transport-gabarytowy-kielce/` | `/transport-specjalistyczny/` | Kontrolowana konsolidacja gabarytów |
| `/transport-gabarytowy-kielce/` | `/transport-specjalistyczny/` | Usunięcie duplikatu organicznego |
| `/lp/utylizacja-mebli-kielce/` | `/oproznianie-mieszkan-i-wywoz-mebli/` | Cel opisuje PSZOK i wyłączenia bez obietnicy utylizacji wszystkiego |
| `/lp/przeprowadzki-firm-kielce/` | `/przeprowadzki-firm-i-instytucji/` | Pełna strona relokacji B2B |
| `/magazyny/` | `/magazyny-kielce/` | Ujednolicenie nazwy i intencji lokalnej |
| `/poradnik/` | `/poradniki/` | Docelowy hub treści |

Każda reguła istnieje również w wariancie z końcowym ukośnikiem i bez niego. Nie ma przekierowań zbiorczych do strony głównej.

## Kontrola po wdrożeniu

1. Sprawdzić każdy adres źródłowy komendą HTTP i potwierdzić pojedynczy 301 do celu.
2. Wykluczyć pętle i łańcuchy przekierowań.
3. Potwierdzić 200 dla wszystkich celów i zgodność canonical z końcowym adresem.
4. Zaktualizować linki w reklamach oraz zapisać zmianę adresu w Search Console.
5. Monitorować 404 i ruch na starych adresach przez co najmniej kilka tygodni po starcie.
