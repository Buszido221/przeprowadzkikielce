# KOMPLEKSOWY PROMPT NAPRAWCZY — WHM PRZEPROWADZKI

## Rola i sposób pracy

Pracujesz na aktualnym projekcie Astro strony `przeprowadzkikielce.pl`. Masz wykonać kontrolowaną przebudowę istniejącego kodu. Nie buduj nowej strony od zera, nie zmieniaj technologii, nie usuwaj działających funkcji i nie twórz równoległego systemu komponentów.

Wykonaj całość tego zadania w jednym spójnym procesie. Najpierw przeczytaj aktualny kod, następnie wprowadź zmiany, uruchom build i wykonaj kontrolę regresji. Nie ograniczaj się do opisania planu. Masz rzeczywiście zmodyfikować projekt.

Jeżeli w projekcie występuje konflikt pomiędzy starszą dokumentacją a niniejszym poleceniem, obowiązuje następująca kolejność źródeł prawdy:

1. niniejszy prompt;
2. `docs/WHM_KIERUNEK_WIZUALNY_I_PLAN_POPRAWEK.md`;
3. `docs/WHM_REALIZACJE_LONG_FORM_SOURCE.md`;
4. `docs/WHM_REBUILD_CONTEXT.md`, wyłącznie w zakresie niesprzecznym z tym promptem;
5. aktualny kod projektu.

Dokument `docs/WHM_SOURCE_OF_TRUTH.md` zawiera nieaktualne informacje o osobnych landing page’ach, magazynach w budowie i zdjęciach-placeholderach. Nie traktuj go jako aktualnego źródła prawdy. Oznacz go wyraźnie jako archiwalny albo usuń z aktywnej dokumentacji, nie tracąc przy tym wartościowych historycznych danych.

---

## Cel zadania

Masz naprawić wszystkie problemy możliwe do rozwiązania w samym kodzie bez:

- nowych zdjęć od użytkownika;
- danych dostępowych EmailJS;
- dostępu do kont Google Analytics, Google Ads i Search Console;
- publikowania projektu na domenie produkcyjnej;
- wymyślania danych, realizacji, klientów lub statystyk.

Najważniejsze cele:

1. scalić `/kontakt/` i `/wycena/` w jedną jednoznaczną ścieżkę;
2. poprawić nieestetyczne wyrównanie i geometrię treści widoczne szczególnie na tabletach i mniejszych desktopach;
3. wyśrodkować krótkie treści sprzedażowe, nagłówki i CTA w sposób kontrolowany;
4. poprawić responsywność sekcji dwukolumnowych;
5. naprawić istniejące błędy strony głównej i `/realizacje/`;
6. przygotować EmailJS i analitykę do późniejszego podłączenia przez zmienne środowiskowe;
7. uporządkować Consent Mode, baner cookies i politykę prywatności;
8. poprawić fonty, preload, wymiary obrazów i podstawową wydajność;
9. nie naruszyć SEO, routingu, formularzy, danych strukturalnych ani migracji `/lp/`;
10. pozostawić projekt gotowy do późniejszej podmiany fotografii i wpisania prawdziwych identyfikatorów usług zewnętrznych.

---

# CZĘŚĆ I — NADRZĘDNE ZAŁOŻENIA MARKI

## 1. Marka i odbiorcy

WHM jest profesjonalną, ale przystępną firmą przeprowadzkową. Obsługuje:

- osoby prywatne;
- mieszkania i domy;
- firmy i biura;
- instytucje publiczne;
- archiwa i biblioteki;
- obiekty kultury;
- transporty ciężkie i specjalistyczne;
- magazynowanie.

Strona ma pokazywać porządek, odpowiedzialność, prawdziwe doświadczenie, sprzęt i organizację. Nie może wyglądać jak zimna korporacja ani jak przypadkowy przewoźnik.

## 2. Główna konwersja

Najważniejszą konwersją B2C jest telefon.

Poprawny, potwierdzony numer:

```text
+48 720 719 022
tel:+48720719022
```

Numer ma pochodzić wyłącznie z `src/data/site.ts`. Usuń twardo wpisane warianty numeru z komponentów, komunikatów błędów i stron, zastępując je danymi centralnymi tam, gdzie jest to technicznie możliwe.

Kolejność kanałów kontaktu:

1. telefon;
2. SMS;
3. e-mail;
4. prosty formularz.

## 3. Zakazane działania

Nie wolno:

- dodawać stocków;
- generować obrazów AI udających realizacje WHM;
- wymieniać istniejących zdjęć na materiały z internetu;
- wymyślać danych EmailJS lub Google;
- tworzyć fikcyjnych opinii, ocen, klientów lub liczb;
- ponownie tworzyć katalogu `/lp/`;
- tworzyć osobnej podstrony dla transportu lodówki lub AGD;
- tworzyć nowych cienkich stron SEO dla pojedynczych przedmiotów;
- zmieniać domeny canonical;
- usuwać istniejących przekierowań 301;
- publikować projektu;
- wprowadzać filmu do hero;
- przebudowywać projektu od zera;
- stosować glassmorphism, jaskrawe gradienty, duże obłe karty SaaS lub rozbudowane animacje;
- wyśrodkowywać pól formularza, tabel, list technicznych, długich artykułów i polityki prywatności w sposób pogarszający czytelność.

---

# CZĘŚĆ II — SCALENIE `/KONTAKT/` I `/WYCENA/`

## 4. Wiążąca decyzja strukturalna

Adres `/wycena/` przestaje istnieć jako samodzielna strona.

Jedyną wspólną stroną kontaktu i zapytania będzie:

```text
/kontakt/
```

Dodaj precyzyjne przekierowania:

```text
/wycena/    /kontakt/    301
/wycena     /kontakt/    301
```

Nie przekierowuj `/wycena/` do strony głównej.

## 5. Nowa funkcja `/kontakt/`

`/kontakt/` ma łączyć:

- bezpośredni telefon;
- SMS;
- e-mail;
- godziny kontaktu;
- prosty formularz;
- adres operacyjny;
- wskazówki dojazdu;
- mniej eksponowany adres rejestrowy.

Strona pozostaje indeksowalna:

```text
robots: index, follow
canonical: https://przeprowadzkikielce.pl/kontakt/
```

Proponowane SEO:

```text
Title: Kontakt i wycena przeprowadzki | WHM Kielce
Description: Zadzwoń do WHM lub opisz przeprowadzkę. Telefon, SMS, e-mail, prosty formularz i dane kontaktowe WHM Przeprowadzki w Kielcach i Masłowie.
```

Zaktualizuj dane strukturalne `ContactPage`, `LocalBusiness` i breadcrumbs tak, aby wskazywały wyłącznie `/kontakt/`.

## 6. Docelowy układ `/kontakt/`

### Hero

Hero powinien być spokojny i jednoznaczny.

```text
Eyebrow: Kontakt z WHM
H1: Porozmawiajmy o Twojej przeprowadzce
Lead: Najszybciej ustalimy zakres przez telefon. Możesz również wysłać SMS, e-mail albo krótko opisać zlecenie w formularzu.
Primary CTA: Zadzwoń: +48 720 719 022
Secondary CTA: Napisz do nas
Secondary href: #formularz
```

Nie personalizuj kontaktu imieniem Mateusza. Mówi marka lub zespół WHM.

### Sekcja kontaktowa

Pod hero umieść czytelny blok bezpośredniego kontaktu:

- telefon;
- SMS;
- e-mail;
- godziny;
- informację o oddzwonieniu zwykle w ciągu 1–2 godzin w godzinach pracy;
- informację, że wiadomości wysłane późnym wieczorem są obsługiwane rano.

Telefon ma być najbardziej widocznym elementem.

### Sekcja formularza

Dodaj:

```html
id="formularz"
```

Użyj istniejącego wspólnego komponentu `LeadForm.astro`. Nie twórz drugiej implementacji formularza.

Pola:

- imię i nazwisko — wymagane;
- telefon lub e-mail — wymagany co najmniej jeden kanał;
- „W czym możemy pomóc?” — wymagane;
- opcjonalna firma tylko w kontekście B2B;
- zgoda i link do polityki prywatności.

Formularz ma komunikować:

> Zdjęcia możesz dosłać po zgłoszeniu SMS-em lub e-mailem.

### Dane lokalizacji

Pod formularzem albo w osobnej spokojnej sekcji pokaż:

- Lotnicza 60A, 26-001 Masłów Pierwszy;
- informację, że wizytę należy wcześniej uzgodnić telefonicznie;
- link do mapy;
- adres rejestrowy Nowy Świat 44a/14, 25-522 Kielce jako informację formalną, nie główny punkt kontaktu.

## 7. Aktualizacja linków

Znajdź wszystkie aktywne odwołania do `/wycena/` w `src/` i przepnij je zależnie od kontekstu:

- CTA formularzowe → `/kontakt/#formularz`;
- ogólny kontakt → `/kontakt/`;
- mobilny sticky CTA → `/kontakt/#formularz`;
- CTA „Umów bezpłatne oględziny” → `/kontakt/#formularz`;
- hero „Poproś o wycenę” → `/kontakt/#formularz`.

Aktualnie odwołania znajdują się w wielu komponentach i stronach, między innymi:

- Header;
- Footer;
- MobileStickyCta;
- SubpageHero;
- CaseStudyPage;
- strona główna;
- realizacje;
- usługi;
- Standard WHM;
- Jak to działa;
- O nas;
- Obszar działania;
- podstrony usługowe.

Po zmianie w aktywnym `src/` nie powinien zostać żaden link użytkowy do `/wycena/`.

## 8. Nawigacja po scaleniu

- W menu pozostaje „Kontakt” → `/kontakt/`.
- Przycisk w nagłówku może brzmieć „Napisz” → `/kontakt/#formularz`.
- Numer telefonu w nagłówku pozostaje bezpośrednim linkiem `tel:`.
- Mobilny pasek zmień z „Zadzwoń / Wycena” na „Zadzwoń / Napisz”.
- W stopce pozostaw tylko jeden link „Kontakt i formularz” albo „Kontakt”.
- Nie pokazuj jednocześnie linków „Kontakt” i „Poproś o wycenę” prowadzących do tej samej strony w tej samej kolumnie stopki.

## 9. Porządki danych i routingu

- Usuń stronę `src/pages/wycena/index.astro`.
- Usuń trasę `/wycena/` z `src/data/routes.ts`.
- Usuń `wycenaPage`, jeśli po scaleniu nie jest już potrzebna.
- Jeżeli tekst zgody formularza korzysta z `wycenaPage.consentText`, przenieś zgodę do neutralnego źródła, np. `formContent` lub `site`.
- Usuń martwe zmienne i flagi związane wyłącznie z osobną stroną wyceny.
- `/kontakt/` ma pozostać w sitemapie.
- `/wycena/` nie może trafić do sitemap.
- Dodaj przekierowania również do dokumentacji migracyjnej.

---

# CZĘŚĆ III — WYŚRODKOWANIE I GEOMETRIA TREŚCI

## 10. Problem potwierdzony nagraniem

W widoku o szerokości około 914 px:

- układy dwukolumnowe nadal zachowują się jak szeroki desktop;
- tekst zajmuje wąską część kolumny;
- obok treści powstają duże, przypadkowe puste pola;
- nagłówki i opisy są wizualnie przyklejone do jednej strony;
- sekcje wyglądają na niedokończone albo źle wyważone;
- zbyt małe bloki tekstowe pływają wewnątrz dużych sekcji;
- CTA nie zawsze znajduje się na wspólnej osi z nagłówkiem;
- rytm pomiędzy tekstem, zdjęciem i pustą przestrzenią jest niespójny.

Nie naprawiaj tego jednym globalnym `text-align: center`. Napraw jednocześnie wyrównanie, szerokości, breakpointy, pionowe centrowanie i odstępy.

## 11. Ogólna zasada centrowania

Wyśrodkuj krótkie treści marketingowe:

- eyebrow/label;
- H1 w hero;
- lead hero;
- H2 i opisy wprowadzające sekcji;
- krótkie H3 na kartach;
- krótkie opisy kart;
- CTA i grupy przycisków;
- sekcje faktów i parametrów;
- nagłówki formularzowych sekcji;
- nagłówki FAQ;
- końcowe CTA.

Stosuj:

```css
text-align: center;
margin-inline: auto;
```

oraz kontrolowane `max-width`, zamiast rozciągania tekstu na całą szerokość.

## 12. Elementy, których nie centrujemy mechanicznie

Zachowaj wyrównanie do lewej wewnątrz wyśrodkowanego kontenera dla:

- dłuższych akapitów case studies;
- artykułów i poradników;
- polityki prywatności;
- formularzy i etykiet pól;
- list technicznych;
- tabel;
- danych adresowych;
- szczegółowego opisu procesu;
- treści, której wyśrodkowanie utrudniłoby skanowanie.

W takich przypadkach centruj cały kontener za pomocą `margin-inline: auto`, ale nie centruj każdego wiersza tekstu.

## 13. Nagłówki sekcji

Domyślny `SectionHeading` powinien umożliwiać warianty:

```text
alignment="center" — domyślny dla marketingowych sekcji
alignment="left" — dla artykułów, formularzy i treści technicznych
```

Jeżeli komponent nie obsługuje wariantu, rozszerz go zamiast tworzyć drugi komponent.

Domyślne zasady dla wersji `center`:

```css
max-width: 48rem;
margin-inline: auto;
text-align: center;
```

Opis pod nagłówkiem:

```css
max-width: 42rem;
margin-inline: auto;
```

Nie ustawiaj ekstremalnie wąskich szerokości powodujących nieestetyczne łamanie zdań.

## 14. Hero podstron usługowych

W dwukolumnowym `ServiceHero`:

- wyśrodkuj tekst wewnątrz kolumny tekstowej;
- wyśrodkuj breadcrumbs;
- wyśrodkuj grupę CTA;
- ustaw `align-items: center` dla treści;
- zachowaj właściwy kontrast i czytelny max-width;
- pionowo wycentruj tekst względem zdjęcia;
- na mobile tekst i obraz przechodzą w jedną kolumnę;
- przy szerokości około 914 px układ nie może wyglądać jak ściśnięty desktop.

Nie zmieniaj service hero w pełnoekranowy banner bez zdjęcia. Zachowaj istniejący charakter: tekst + prawdziwa fotografia.

## 15. Breakpoint sekcji dwukolumnowych

Obecne sekcje przechodzą do dwóch kolumn zbyt wcześnie.

Zmień zachowanie `split-section`, formularzowych gridów, case proofów i podobnych układów:

- poniżej około 1024 px używaj jednej kolumny, jeżeli dwie kolumny tworzą wąskie bloki i puste przestrzenie;
- w zakresie 768–1023 px zachowuj szeroki, wyśrodkowany kontener tekstowy i zdjęcie pod nim;
- dopiero na rzeczywiście szerokim ekranie stosuj układ 2-kolumnowy;
- kolejność na mobile ma wynikać z argumentacji, nie wyłącznie z kolejności HTML;
- tekst nie może mieć mniej niż rozsądne 32–38 rem szerokości, jeśli obok pozostaje duża pusta przestrzeń;
- grafika nie może być sztucznie mała tylko po to, aby utrzymać dwie kolumny.

Wybierz breakpoint na podstawie faktycznego zachowania komponentu. Nie zakładaj automatycznie, że `768px` jest właściwe dla wszystkich sekcji.

## 16. Split sections

Dla krótkich marketingowych treści w `.split-section__content`:

```css
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
```

Listy wewnątrz takiej sekcji mogą pozostać wyrównane do lewej, ale ich blok ma być wyśrodkowany:

```css
width: min(100%, 32rem);
margin-inline: auto;
text-align: left;
```

Przyciski i linki CTA wyśrodkuj.

W sekcjach long-form użyj wariantu klasy, np. `.split-section--editorial`, który zachowa lewostronną treść.

## 17. Karty

W kartach marketingowych wyśrodkuj:

- tytuł;
- krótki opis;
- etykietę;
- link końcowy;
- niewielką ikonę.

Nie centruj skomplikowanych list parametrów realizacji, jeżeli obniża to czytelność. W kartach case studies dopuszczalne jest:

- wyśrodkowanie nazwy, lokalizacji i CTA;
- pozostawienie listy parametrów oraz „Wyzwanie / Rezultat” wyrównanych do lewej wewnątrz wyśrodkowanego bloku.

Karty w jednej siatce powinny mieć spójne wysokości części tekstowej bez sztucznego rozciągania całej strony.

## 18. Formularze

Wyśrodkuj:

- nagłówek sekcji formularza;
- krótki tekst wprowadzający;
- kontener formularza;
- alternatywny telefon pod formularzem;
- komunikat czasu odpowiedzi.

Nie wyśrodkuj:

- labeli;
- tekstu wpisywanego do pól;
- błędów walidacyjnych;
- zgody;
- danych technicznych.

Formularz powinien mieć maksymalną szerokość około 42–46rem i znajdować się na osi strony.

## 19. Długie treści i realizacje

Case studies mają zachować czytelną kolumnę tekstową:

```css
max-width: 46–52rem;
margin-inline: auto;
text-align: left;
```

Wyśrodkuj tytuł, lead, fakty otwierające i CTA. Nie wyśrodkuj wieloakapitowej historii realizacji.

## 20. Odstępy

Usuń wrażenie pustych, niedokończonych sekcji:

- zmniejsz nadmierne pionowe paddingi tam, gdzie sekcja ma mało treści;
- nie twórz dużej sekcji dla jednego zdania;
- zachowaj większy odstęp przy zmianie głównego rozdziału;
- na tabletach zmniejsz odstępy szybciej niż na desktopie;
- CTA nie może być odłączone od tekstu dużą pustą przestrzenią;
- zdjęcie i opis muszą wyglądać jak jedna kompozycja;
- nie zmniejszaj jednak całej strony do ciasnego landing page’a.

Proponowany rytm wyjściowy:

```text
desktop: 72–88 px między głównymi sekcjami
tablet: 56–64 px
mobile: 40–48 px
```

Dostosuj go do realnej treści, nie stosuj jednej wartości bez wyjątku.

---

# CZĘŚĆ IV — STRONA GŁÓWNA

## 21. Zachowaj wykonane zmiany

Nie cofaj:

- statycznego hero;
- lokalnego Manrope;
- paska dowodów;
- sekcji Standard WHM;
- wyróżnionych realizacji;
- statycznych opinii;
- kierunku B2B;
- spokojnej biało-grafitowej stylistyki;
- czerwonego CTA telefonu.

## 22. Napraw preload fontów

Aktualne linki preload Manrope trafiają do `<main>`, ponieważ nie zostały umieszczone w slocie `head`.

Przenieś je do `<head>` przez właściwy slot albo do wspólnego `Layout.astro`.

Po buildzie w wynikowym `dist/index.html`:

- preload musi znajdować się przed `</head>`;
- w `<main>` nie może być żadnego `<link rel="preload">`.

## 23. Uporządkuj Manrope

Projekt zawiera lokalne pliki Manrope oraz zależność `@fontsource/manrope`, ale kod nie używa paczki.

Wybierz jeden system. Preferowane rozwiązanie:

- korzystaj z plików lokalnych w `public/fonts`;
- usuń nieużywaną zależność `@fontsource/manrope` z `package.json` i lockfile;
- ogranicz liczbę pobieranych wariantów do faktycznie używanych;
- preferuj 400, 600 i 800 albo font variable, jeśli można go wdrożyć bez ryzyka;
- zachowaj pełne polskie znaki;
- zachowaj `font-display: swap`;
- nie pobieraj fontów z Google podczas wizyty.

## 24. Popraw treść Standardu WHM

Rozdziel pasy mocujące od uprzęży transportowych.

Nie używaj sformułowania:

> „bez ryzyka uszkodzenia”

Zastąp je sformułowaniem:

> „ograniczając ryzyko uszkodzenia i przeciążenia zespołu”

Uprzęże służą do kontrolowanego przenoszenia ciężkich przedmiotów i rozkładania ciężaru. Pasy mocujące służą do stabilizacji ładunku w samochodzie. Nie łącz tych funkcji w jeden opis.

## 25. Popraw wyróżnioną realizację obrazu

Zmień parametr:

```text
Wjazd przez okno
```

na precyzyjny:

```text
Opuszczenie i wprowadzenie przez okno
```

Kontekst potwierdzony w źródle realizacji:

- obraz opuszczono z drugiego piętra zamku;
- przewieziono go około 400 metrów;
- następnie wprowadzono przez otwór okienny do Muzeum Instrumentów Ludowych;
- przez cały proces musiał pozostać w poziomie.

Nie zmieniaj pozostałych faktów bez źródła.

## 26. Opinie

Nie pokazuj automatycznie pięciu gwiazdek przy każdej opinii, jeżeli indywidualna ocena nie znajduje się w zatwierdzonych danych.

Bezpieczne rozwiązanie:

- usuń gwiazdki z poszczególnych kart;
- pozostaw autora i źródło „Google”;
- zachowaj link do profilu opinii, jeśli obecny link działa.

Nie twórz zbiorczej oceny ani liczby opinii bez potwierdzenia.

## 27. Obrazy na stronie głównej

Nie podmieniaj zdjęć bez materiałów użytkownika. Możesz jednak:

- poprawić deklarowane wymiary zgodnie z rzeczywistymi plikami;
- zachować `object-fit: cover` w kontrolowanych kadrach;
- usunąć rozciąganie;
- przygotować komponent na późniejsze `srcset` i `sizes`;
- dodać czytelne komentarze lub manifest przypisania zdjęć;
- używać neutralnych altów, jeśli związek zdjęcia z konkretną realizacją nie jest potwierdzony.

Nie opisuj fotografii jako zdjęcia z Prokuratury, Teatru, TVP, biblioteki lub Zamku, jeżeli plik nie ma potwierdzonego przypisania.

Jeżeli obecne fotografie w wyróżnionych case studies nie są potwierdzone, zmień alt i podpis na neutralny, ale pozostaw samą strukturę sekcji do późniejszej podmiany.

---

# CZĘŚĆ V — NAPRAWA `/REALIZACJE/`

## 28. Popraw język

Zmień:

```text
umietność
```

na:

```text
umiejętność
```

Zmień nagłówek:

```text
Setki transportów, każdy oceniany osobno
```

na:

```text
Dziesiątki transportów, każdy oceniany osobno
```

Zachowaj uczciwe copy mówiące, że WHM przewiozło dziesiątki, a prawdopodobnie setki pianin i fortepianów. Nie zamieniaj prawdopodobieństwa w bezwarunkowy fakt.

## 29. Napraw filtry

Dodaj pierwszy filtr:

```text
Wszystkie
data-filter="all"
```

Wymagania:

- „Wszystkie” jest aktywne po wejściu;
- aktywny przycisk ma klasę `is-active`;
- aktywny przycisk ma `aria-pressed="true"`;
- pozostałe mają `aria-pressed="false"`;
- po kliknięciu kategorii pokazują się właściwe karty;
- po kliknięciu „Wszystkie” wraca pełna lista;
- filtrowanie nie powoduje skoku całej strony;
- bez JavaScriptu wszystkie realizacje pozostają widoczne;
- focus jest czytelny;
- filtry są wygodne na mobile.

## 30. Centrowanie hubu realizacji

Wyśrodkuj:

- hero i CTA;
- wprowadzenie do sekcji;
- nagłówki sekcji;
- listę filtrów;
- etykiety i tytuły kart;
- końcowe CTA.

Zachowaj lewostronne, czytelne wyrównanie dłuższych leadów kart oraz wieloakapitowych tekstów wewnątrz wyśrodkowanych kontenerów.

## 31. Galerie case studies

Nie wymieniaj zdjęć bez dostarczonych materiałów. Zmień `aria-label="Galeria zdjęć z realizacji"` na neutralne sformułowanie tam, gdzie przypisanie nie jest potwierdzone, np.:

```text
Zdjęcia przedstawiające sposób pracy WHM
```

Podpisy nie mogą sugerować, że ogólne zdjęcie przedstawia konkretną realizację.

---

# CZĘŚĆ VI — EMAILJS

## 32. Nie wymyślaj danych

Nie wpisuj fikcyjnych wartości:

- `PUBLIC_EMAILJS_SERVICE_ID`;
- `PUBLIC_EMAILJS_TEMPLATE_ID`;
- `PUBLIC_EMAILJS_PUBLIC_KEY`.

## 33. Przygotuj konfigurację

Dodaj `.env.example`:

```dotenv
PUBLIC_SITE_ENV=staging
PUBLIC_EMAILJS_SERVICE_ID=
PUBLIC_EMAILJS_TEMPLATE_ID=
PUBLIC_EMAILJS_PUBLIC_KEY=
PUBLIC_GA4_ID=
```

Nie commituj `.env`, `.env.production` ani prawdziwych wartości.

## 34. Formularz

Zachowaj:

- walidację telefonu lub e-maila;
- honeypot;
- opóźnienie antybotowe;
- realny sukces dopiero po odpowiedzi EmailJS;
- `form_start`;
- `form_submit_error`;
- `generate_lead` dopiero po sukcesie;
- UTM;
- `gclid`;
- `gbraid`;
- `wbraid`;
- referrer;
- URL podstrony;
- rozróżnienie B2C/B2B.

Usuń z `LeadForm.astro` nieużywane zmienne konfiguracyjne, jeżeli konfiguracja jest sprawdzana wyłącznie w `lead-form.ts`.

W komunikatach błędów korzystaj z centralnego numeru strony, a nie z ręcznie wpisanego ciągu, o ile architektura komponentu na to pozwala.

Jeśli EmailJS nie jest skonfigurowany:

- formularz nie może udawać sukcesu;
- pokaż jasny fallback z telefonem;
- projekt ma się nadal budować;
- staging nie może wysyłać prawdziwych leadów bez świadomej konfiguracji.

## 35. Nie zmieniaj architektury na serwerową w tym zadaniu

Nie twórz Netlify Function ani nowego backendu. Obecnym świadomym rozwiązaniem startowym jest EmailJS. Architektura serwerowa może zostać wdrożona później jako osobny etap.

---

# CZĘŚĆ VII — ANALITYKA, ZGODY I PRYWATNOŚĆ

## 36. GA4 przez zmienną środowiskową

Usuń twardo wpisany GA4 ID z komponentu i pobieraj go z:

```text
PUBLIC_GA4_ID
```

Nie wpisuj losowego identyfikatora. Jeżeli zmienna jest pusta, tag Google nie może się ładować.

Aktualny kod zawiera `G-X0K3ND72TV`, ale jego własność i poprawne połączenie z Google Ads wymagają późniejszego potwierdzenia na koncie. Nie uznawaj samej obecności identyfikatora w repozytorium za zakończony audyt.

## 37. Prosty i spójny tryb zgody

Na tym etapie zastosuj prosty Basic Consent Mode:

- przed zgodą nie ładuj skryptu Google Analytics;
- po „Akceptuję analitykę” załaduj GA4 i rozpocznij pomiar;
- po „Odrzucam” nie ładuj GA4;
- nie przyznawaj automatycznie `ad_storage`, `ad_user_data` ani `ad_personalization` pod banerem opisującym wyłącznie analitykę;
- zachowaj działanie strony po odrzuceniu;
- jeżeli `PUBLIC_GA4_ID` jest pusty, nie pokazuj niepotrzebnego banera analitycznego;
- dodaj możliwość późniejszej zmiany decyzji, np. link „Ustawienia cookies” w stopce.

Nie wdrażaj pełnego systemu reklamowego bez audytu konta Google Ads.

## 38. Zdarzenia

Zachowaj:

- `phone_click`;
- `email_click`;
- `cta_click`;
- `form_start`;
- `form_submit_error`;
- `generate_lead`;
- zaangażowanie jako zdarzenia diagnostyczne.

Dodaj:

```text
sms_click
```

dla linków `sms:`.

Zdarzenie ma zawierać:

- `link_location`;
- `page_path`;
- kontekst strony, jeśli jest dostępny.

Nie wysyłaj `generate_lead` przy samym kliknięciu przycisku ani nieudanej wysyłce formularza.

## 39. Polityka prywatności

Zaktualizuj opis analityki tak, aby był zgodny z wdrożonym Basic Consent Mode:

- Google Analytics ładuje się dopiero po zgodzie;
- po odrzuceniu analityka nie jest uruchamiana;
- użytkownik może zmienić decyzję;
- nie używaj bezwarunkowego twierdzenia, że wszystkie dane są anonimowe i nigdy nie mogą służyć identyfikacji;
- opisz EmailJS jako dostawcę obsługi formularza;
- pozostaw dokument do końcowej weryfikacji prawnej;
- zmień flagę lub komentarz sugerujący, że polityka została definitywnie zakończona, jeśli nadal wymaga sprawdzenia.

Nie wymyślaj szczegółów umów powierzenia ani lokalizacji przetwarzania, których nie ma w źródłach.

---

# CZĘŚĆ VIII — OBRAZY I WYDAJNOŚĆ MOŻLIWA BEZ NOWYCH ZDJĘĆ

## 40. Popraw wymiary

Nie deklaruj wymiarów innych niż rzeczywiste proporcje pliku.

Przykładowy aktualny problem:

- hero ma około `1440 × 726`, a HTML deklaruje `1920 × 1080`;
- wiele zdjęć pionowych `1536 × 2048` jest deklarowanych jako `600 × 400`.

Napraw atrybuty albo utwórz świadome, lokalne warianty kadrowane dla konkretnego komponentu. Nie rozciągaj zdjęć.

## 41. Przygotowanie pod późniejszą wymianę

Stwórz jeden czytelny manifest lub dokument, np.:

```text
docs/PHOTO_REPLACEMENT_MAP.md
```

Tabela powinna zawierać:

```text
aktualny plik | miejsce użycia | oczekiwane zdjęcie | wymagana proporcja | status potwierdzenia
```

Nie oznaczaj zdjęcia jako potwierdzonego bez danych użytkownika.

## 42. Podstawowa optymalizacja

Możesz:

- dodać poprawne `sizes` i `srcset`, jeżeli obecna architektura to umożliwia bez masowego przepisywania;
- ładować obrazy poniżej pierwszego ekranu przez `loading="lazy"`;
- zachować `fetchpriority="high"` tylko dla faktycznego LCP;
- użyć `decoding="async"` poniżej hero;
- użyć lekkiego `favicon.svg` zamiast dużego logo;
- skorygować OG image dimensions albo przygotować docelowe miejsce na grafikę 1200 × 630;
- nie preloadować wielu zdjęć.

Nie wykonuj agresywnej kompresji wszystkich materiałów bez kontroli wizualnej.

---

# CZĘŚĆ IX — DOKUMENTACJA I PORZĄDKI TECHNICZNE

## 43. `AGENTS.md`

Aktualny `AGENTS.md` nie przekazuje realnych zasad projektu. Zastąp go krótką, konkretną instrukcją dla kolejnych agentów:

- najpierw czytaj aktualne dokumenty źródłowe;
- nie wymyślaj danych;
- nie używaj stocków ani AI jako realizacji;
- zachowuj `/kontakt/` jako jedyną ścieżkę kontaktu;
- zachowuj telefon jako główną konwersję;
- nie przywracaj `/lp/`;
- każdą zmianę kończ buildem;
- nie publikuj bez zgody użytkownika;
- nie wykonuj destrukcyjnych zmian w zdjęciach;
- pamiętaj o stagingowym `noindex`.

## 44. Aktualizacja dokumentacji

Zaktualizuj:

- `docs/WHM_REBUILD_CONTEXT.md` — usuń aktywny podział `/kontakt/` i `/wycena/`;
- `docs/URL_MIGRATION_MAP.md` — dodaj `/wycena/ → /kontakt/`;
- `docs/PRODUCTION_LAUNCH_CHECKLIST.md` — jedna strona kontaktowa;
- `docs/WHM_KIERUNEK_WIZUALNY_I_PLAN_POPRAWEK.md` — jeden kontakt i formularz;
- dokumentację QA;
- README, jeżeli opisuje nieaktualny routing.

Nie przepisuj historycznych raportów tak, jakby nigdy nie istniały. Oznacz stare dokumenty audytowe jako historyczne, jeżeli są potrzebne jako zapis wcześniejszego stanu.

## 45. Zależności

- Usuń nieużywane `@fontsource/manrope`, jeżeli korzystasz z fontów z `public/fonts`.
- Przenieś Playwright do `devDependencies`.
- Oceń, czy bezpośrednia zależność `@rollup/rollup-linux-x64-gnu` jest rzeczywiście konieczna. Nie usuwaj jej, jeśli Bolt wymaga jej do builda; opisz decyzję.
- Zmień nazwę pakietu `@example/basics` na neutralną, np. `whm-przeprowadzki-kielce`.
- Zaktualizuj lockfile kontrolowanym poleceniem pakietowym.
- Nie wykonuj `npm audit fix --force`.

---

# CZĘŚĆ X — TESTY I KRYTERIA ODBIORU

## 46. Build

Po zmianach uruchom pełny build Astro.

Oczekiwany rezultat po usunięciu osobnej strony `/wycena/`:

- build kończy się powodzeniem;
- liczba generowanych stron zmniejsza się o jedną względem stanu początkowego;
- `/kontakt/` generuje się poprawnie;
- `/wycena/` nie generuje samodzielnego HTML;
- sitemap działa;
- nie ma brakujących importów.

## 47. Kontrola routingu

Sprawdź:

- wszystkie wewnętrzne linki;
- wszystkie obrazy;
- canonicale;
- sitemap;
- breadcrumbs;
- dane strukturalne;
- `/wycena/ → /kontakt/ 301`;
- stare `/lp/` nadal przekierowują do właściwych usług;
- brak pętli i łańcuchów przekierowań.

## 48. Kontrola formularzy

Bez prawdziwych danych EmailJS przetestuj:

- walidację imienia;
- wymaganie telefonu lub e-maila;
- walidację telefonu;
- walidację e-maila;
- wymaganie wiadomości;
- wymaganie zgody;
- komunikat braku konfiguracji;
- brak fałszywego sukcesu;
- brak błędów konsoli;
- działanie kilku instancji wspólnego formularza.

W końcowym raporcie jednoznacznie napisz, że realna dostawa wiadomości wymaga jeszcze wartości EmailJS.

## 49. Kontrola analityki

Bez `PUBLIC_GA4_ID`:

- tag Google nie ładuje się;
- projekt działa;
- nie ma błędów JavaScript.

Z testowym poprawnie sformatowanym identyfikatorem wyłącznie lokalnie lub przez zmienną środowiskową:

- analityka nie ładuje się przed zgodą;
- po akceptacji inicjalizuje się jeden raz;
- odrzucenie nie uruchamia GA;
- ustawienia można później zmienić;
- `phone_click`, `sms_click`, `email_click` i `generate_lead` mają poprawną logikę.

Nie commituj testowego identyfikatora.

## 50. Kontrola wizualna

Sprawdź co najmniej:

- 1440 × 900;
- 1280 × 800;
- 1024 × 768;
- około 914 × 838 — problem pokazany przez użytkownika;
- 768 × 1024;
- 390 × 844;
- 360 × 800;
- 320 × 568.

Na każdym widoku sprawdź:

- wyśrodkowanie nagłówków;
- szerokość leadów;
- pionowe centrowanie split sections;
- brak wielkich przypadkowych pustych pól;
- brak ściśniętych dwóch kolumn;
- kolejność zdjęć i tekstów;
- CTA;
- sticky mobile CTA;
- menu;
- formularz;
- stopkę;
- brak poziomego scrolla;
- widoczny focus;
- kontrast;
- brak zasłaniania treści przez baner zgody.

## 51. Kryteria akceptacji

Zadanie jest zakończone wyłącznie wtedy, gdy:

1. Istnieje jedna strona `/kontakt/` zawierająca formularz i dane firmy.
2. `/wycena/` przekierowuje 301 do `/kontakt/`.
3. Aktywny kod nie kieruje użytkowników do osobnej `/wycena/`.
4. Telefon `+48 720 719 022` pochodzi z centralnego źródła.
5. Krótkie treści marketingowe i CTA są estetycznie wyśrodkowane.
6. Długie treści i formularze zachowują czytelne wyrównanie do lewej w wyśrodkowanych kontenerach.
7. Widok około 914 px nie używa ściśniętych, nieestetycznych dwóch kolumn.
8. Strona główna zachowuje wykonany kierunek wizualny.
9. Preload fontu znajduje się w `<head>`.
10. Nie ma podwójnego systemu ładowania Manrope.
11. Filtry realizacji mają działające „Wszystkie”.
12. Literówka i zbyt kategoryczne „Setki transportów” zostały poprawione.
13. Niepotwierdzone zdjęcia nie są podpisane jako dokumentacja konkretnego klienta.
14. Formularz nie udaje wysłania bez EmailJS.
15. GA4 nie uruchamia się bez identyfikatora ani przed zgodą.
16. Dodano `sms_click`.
17. Build przechodzi.
18. Nie ma uszkodzonych linków ani obrazów.
19. Staging pozostaje `noindex, nofollow, noarchive`.
20. Nie dodano nowych niepotwierdzonych faktów.

---

# CZĘŚĆ XI — RAPORT KOŃCOWY

Po zakończeniu nie odpowiadaj ogólnym „wszystko gotowe”. Przedstaw raport zawierający:

1. listę zmodyfikowanych plików;
2. opis scalenia `/kontakt/` i `/wycena/`;
3. listę przepiętych CTA;
4. opis zasad centrowania treści;
5. informację o breakpointach;
6. opis zmian strony głównej;
7. opis zmian `/realizacje/`;
8. opis przygotowania EmailJS;
9. opis przygotowania GA4 i zgód;
10. wyniki builda;
11. wyniki kontroli linków;
12. wyniki kontroli desktop/mobile;
13. dokładną listę rzeczy, których nie dało się zakończyć bez danych użytkownika.

Lista rzeczy pozostających po tym zadaniu powinna obejmować wyłącznie realne zewnętrzne braki, między innymi:

- dostarczenie i przypisanie nowych zdjęć;
- wpisanie prawdziwych danych EmailJS;
- rzeczywisty test dostarczenia wiadomości;
- potwierdzenie właściwego GA4;
- połączenie konwersji z Google Ads;
- audyt Search Console;
- końcowa weryfikacja polityki prywatności;
- test redirectów na prawdziwym hostingu;
- publikacja po zatwierdzeniu stagingu.

Nie publikuj strony i nie zmieniaj domeny w ramach tego zadania.
