# Raport QA przebudowy WHM

Data: 31 sierpnia 2026

## Zakres

Sprawdzono finalną architekturę 21 tras serwisu oraz stronę 404. Testy objęły build Astro, metadane, strukturę nagłówków, obrazy, linki, responsywność, konsolę, formularze, nawigację klawiaturą, analitykę stagingową i migrację `/lp/`.

## Wyniki automatyczne

| Kontrola | Wynik |
|---|---|
| Build staging | PASS |
| Liczba aktywnych katalogów `/lp/` w buildzie | 0 |
| Odwołania `/lp/` w kodzie stron | 0 |
| H1 na właściwej trasie | dokładnie 1 na każdej |
| Canonical | dokładnie 1 na każdej |
| Staging robots | `noindex, nofollow, noarchive` na wszystkich stronach HTML |
| Google/GA4 w HTML stagingu | 0 odwołań |
| Niedziałające linki lokalne | 0 |
| Niedziałające obrazy lokalne | 0 |
| Reguły przekierowań | 30 wariantów źródłowych |

## QA w przeglądarce

Na desktopie sprawdzono stronę główną i hub B2B. Na viewport mobile sprawdzono:

- `/przeprowadzki/`,
- `/transport-mebli-kielce/`,
- `/pakowanie-i-zabezpieczanie/`,
- `/transport-pianin-i-fortepianow-kielce/`,
- `/transport-specjalistyczny/`,
- `/oproznianie-mieszkan-i-wywoz-mebli/`,
- `/dla-firm/`,
- `/przeprowadzki-firm-i-instytucji/`,
- `/magazyny-kielce/`,
- `/realizacje/`,
- `/kontakt/`,
- `/wycena/`.

Każda z tych stron miała jeden H1, jeden canonical, właściwe stagingowe robots, co najmniej jeden link telefoniczny, zero błędnie załadowanych obrazów i zero poziomego overflow. Nie wykryto błędów ani ostrzeżeń w konsoli.

Menu mobilne zmienia `aria-expanded`, blokuje przewijanie tła, zamyka się klawiszem Escape i zwraca fokus do przycisku. Formularz przy pustej próbie wysłania ustawia fokus na imieniu, oznacza pięć wymaganych warunków i nie wykonuje wysyłki. Formularz B2B ma `data-context="business"` i opcjonalne pole firmy.

## Problem wykryty i usunięty

Drugorzędny przycisk w jasnym komponencie `ServiceHero` dziedziczył biały styl przeznaczony dla hero na ciemnym zdjęciu. Dodano osobny kontrastowy wariant dla jasnego tła i powtórzono kontrolę wizualną.

## Ryzyka i czynności wymagające zewnętrznej konfiguracji

1. Rzeczywista wysyłka EmailJS nie została przetestowana, ponieważ środowisko nie ma wymaganych zmiennych. To jedyna funkcjonalna blokada przed testem end-to-end leada.
2. Reguły `_redirects` muszą być wspierane lub odwzorowane przez docelowy hosting.
3. Produkcyjny consent i zdarzenia GA4 wymagają testu na zatwierdzonym środowisku z rzeczywistym tagiem.
4. Po uruchomieniu trzeba potwierdzić 301 na poziomie HTTP, nie tylko zawartość pliku.

## Ocena gotowości

Kod i treści są gotowe do kontrolowanego staging review. Produkcyjne uruchomienie wymaga osobnej decyzji, konfiguracji EmailJS, potwierdzenia hostingu i przejścia checklisty w `docs/PRODUCTION_LAUNCH_CHECKLIST.md`.
