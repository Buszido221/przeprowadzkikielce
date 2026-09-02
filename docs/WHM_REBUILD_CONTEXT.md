<!-- AKTUALIZACJA 2026-09: /kontakt/ i /wycena/ zostały scalone w jedną stronę /kontakt/.
Stara /wycena/ przekierowuje 301 do /kontakt/. Poniższe odniesienia do osobnej strony wyceny są nieaktualne. -->

# WHM Przeprowadzki Kielce — główne źródło prawdy przebudowy

**Status dokumentu:** wiążący kontekst projektu  
**Data aktualizacji:** 30 sierpnia 2026  
**Repozytorium:** `Buszido221/przeprowadzkikielce`  
**Gałąź robocza:** `main`  
**Produkcja:** `https://przeprowadzkikielce.pl` — nie przepinać ani nie wdrażać bez osobnego polecenia

## 1. Po co istnieje ten dokument

Ten plik ma wyeliminować zgadywanie w nowych sesjach Codex. Zawiera najnowsze decyzje użytkownika dotyczące biznesu, treści, struktury, designu, SEO, analityki i sposobu wdrażania.

To nie jest pierwotny brief ani lista luźnych pomysłów. Jest to roboczy kontrakt projektu. Starsze audyty i pliki w repozytorium mogą opisywać wcześniejszy stan i nie mają pierwszeństwa przed decyzjami zapisanymi tutaj.

Codex ma przed każdą większą zmianą:

1. przeczytać ten dokument w całości;
2. sprawdzić aktualny kod, ponieważ część przebudowy infrastruktury mogła już zostać wykonana;
3. odróżnić stan wdrożony od planowanego;
4. kontynuować implementację, a nie ponawiać audyty bez wyraźnej potrzeby.

## 2. Stan projektu i uprawnienia

- Przekazany projekt był aktualną wersją strony pobraną bezpośrednio przed audytem.
- Stos: Astro, statyczny build; publikacja przez Bolt, pośrednio oparta na Netlify.
- Repozytorium używane do przebudowy jest duplikatem/testem możliwości Codex.
- Użytkownik zezwolił na wykonywanie całej pracy bezpośrednio na `main`.
- Dozwolone są edycje, testy, logiczne commity i push do `main` w tym repozytorium.
- Niedozwolone bez osobnego polecenia: produkcyjne wdrożenie, przepięcie domeny, edycja kampanii Google Ads, Search Console, GA4, EmailJS, DNS lub hostingu.
- Po zakończeniu i akceptacji użytkownik sam przepisze domenę `przeprowadzkikielce.pl` na przebudowaną wersję.
- Nie równamy projektu z ziemią. Przebudowujemy istniejący serwis etapami.

### Bezpieczny stan środowiska

Projekt ma domyślnie działać jako staging:

- `PUBLIC_SITE_ENV=staging`;
- wszystkie strony: `noindex, nofollow, noarchive`;
- brak ładowania GA4 i żądań do usług Google;
- symulacja production służy wyłącznie weryfikacji builda;
- po testach repozytorium ma wracać do bezpiecznego stanu staging.

Nie publikować przypadkowo indeksowalnego duplikatu produkcji.

## 3. Cel biznesowy

Serwis ma stać się pełnoprawną, estetyczną, nowoczesną i sprzedażową stroną WHM, zgodną z technicznym SEO. Ma pracować równocześnie dla dwóch torów:

- **B2C:** szybko przekształcić konkretną potrzebę w telefon lub prosty lead;
- **B2B:** udowodnić zdolność WHM do przejęcia odpowiedzialności za duże relokacje przedsiębiorstw i instytucji.

B2C pozostaje ważnym źródłem zleceń, lecz strategiczny kierunek rozwoju firmy to większy udział klientów biznesowych i projektów high-ticket. Jedna relokacja o wartości około 60 tys. zł może być biznesowo ważniejsza niż wiele małych zleceń. Strona musi więc pozwalać właściwej osobie ocenić skalę, zaplecze, proces i ryzyko współpracy z WHM.

Nie tworzymy dwóch obcych wizualnie marek. B2C i B2B korzystają z jednego systemu WHM, ale mówią innymi argumentami.

## 4. Pozycjonowanie i język sprzedażowy

### Punkt wyjścia klienta B2C

Typowy stan świadomości klienta to około 6/10: wie, że trzeba coś przewieźć, lecz często traktuje przeprowadzkę jak prosty transport i szuka najniższej ceny. Roadblockiem nie jest dla niego deklarowana jakość, tylko samo wykonanie przewozu.

Copy ma spokojnie pokazywać, że najniższa cena może prowadzić do dopłat, uszkodzeń, improwizacji i utraty czasu. Celem nie jest straszenie ani atakowanie konkurencji. Należy pokazać namacalne różnice:

- przygotowanie przed realizacją;
- właściwe zabezpieczenia;
- wyposażenie i wyszkolona ekipa;
- odpowiedzialność za demontaż, transport i montaż;
- przewidywalny proces;
- ubezpieczenie;
- prawdziwe realizacje.

Język ma być konkretny, ludzki i zrozumiały. Unikać pustych superlatywów, korporacyjnej waty, sztucznej „premiumowości” oraz nagromadzenia słów kluczowych.

### Zasady claims

- Można komunikować „setki przeprowadzek i transportów”, ale preferowane są konkretne dowody.
- Nie używać niezweryfikowanych liczników, nagród, certyfikatów ani nazw klientów.
- Nie używać absolutów typu „nie ma rzeczy niemożliwych” jako gwarancji. Można opisać kreatywne rozwiązanie konkretnej sytuacji.
- Nazwy prawdziwych realizacji wymienione w tym dokumencie mogą być używane publicznie.
- Nie personalizować marki Mateuszem w hero, CTA ani komunikatach typu „Mateusz oddzwoni”. Mówi WHM lub zespół.

## 5. Główna konwersja i obsługa leadów

### Priorytet

Główna konwersja B2C to telefon: **720 719 022**. Każda konwersja jest cenna, ale hierarchia CTA ma wspierać połączenie.

- Na mobile numer ma być stale łatwo dostępny, bez zasłaniania treści.
- Główne CTA: „Zadzwoń” lub równie bezpośredni komunikat.
- Drugie CTA: krótki formularz.
- Nie wstawiać wieloetapowego quizu.

### Realny standard odpowiedzi

Telefon obecnie odbiera Mateusz, lecz strona nie ma tego personalizować. Jeżeli połączenie nie zostanie odebrane, realny standard oddzwonienia to zwykle 1–2 godziny; po późnym telefonie — rano następnego dnia. Nie obiecywać „oddzwonimy w 15 minut”.

Zdjęcia klient może dosłać po kontakcie SMS-em lub e-mailem.

### Jeden wspólny formularz

Widoczne pola:

- imię i nazwisko — wymagane;
- numer telefonu lub e-mail — wymagany co najmniej jeden kanał;
- „W czym możemy pomóc?” — wymagane;
- zgoda na przetwarzanie danych — wymagana;
- firma/instytucja — opcjonalne wyłącznie w kontekście B2B.

Formularz ma być jednym komponentem i jednym źródłem logiki dla stron usług, wyceny i B2B. Nie powielamy implementacji.

## 6. Fakty o firmie — dozwolone źródła treści

### Dane podstawowe

- marka: WHM Przeprowadzki Kielce;
- działalność od 2019 roku;
- telefon: `720 719 022`;
- e-mail: `kontakt@whmprzeprowadzkikielce.pl`;
- baza i magazyny: Lotnicza 60A, 26-001 Masłów Pierwszy;
- adres rejestrowy: Nowy Świat 44a/14;
- godziny kontaktu: poniedziałek–piątek 8:00–20:00, sobota 8:00–18:00;
- zasięg obecny: Kielce, województwo świętokrzyskie i przeprowadzki ogólnopolskie;
- przeprowadzki międzynarodowe: etap późniejszy, obecnie nie promować jako głównej oferty.

### Zaplecze i standard WHM

Można komunikować następujące fakty:

- około 200 m² ogrzewanego magazynu podzielonego na boksy o różnych rozmiarach;
- w publicznym copy: **magazynki od 2 do 9 m²**;
- magazynki są gotowe i częściowo zajęte;
- busy przeprowadzkowe z zabudową meblarską i suchą przestrzenią ładunkową;
- pasy i uprzęże transportowe; przy sześciu osobach i sześciu uprzężach możliwe było przenoszenie ładunku do około 600 kg;
- dwa schodołazy;
- koce, gumy i dedykowane pokrowce szyte pod konkretne meble lub przedmioty;
- WHM nie zabezpiecza mebli folią stretch — używa realnie chroniących rozwiązań wielorazowych;
- setki plombowanych pojemników o pojemności około 70 l, dostępnych w najmie dla firm i instytucji przy relokacjach lokalnych;
- wielorazowe kartony o jednolitych wymiarach, pomagające zabezpieczyć mienie i wykorzystać kubaturę auta;
- materiały pakowe wysokiej klasy, w tym papier pakowy;
- ubezpieczenie do 1 mln zł;
- demontaż i montaż mebli nowych oraz używanych, gdy jest potrzebny do bezpiecznego transportu;
- doświadczenie w dziesiątkach, prawdopodobnie setkach transportów pianin i fortepianów w regionie, m.in. we współpracy z domami kultury, stroicielami i organizatorami targów.

Jeżeli dokładna liczba, parametr polisy lub stan wyposażenia nie wynika z aktualnego kodu/dokumentu, nie doprecyzowywać go samodzielnie.

## 7. Realizacje i dowody B2B

Można publicznie używać prawdziwych nazw i historii:

### Teatr Stefana Żeromskiego w Kielcach

Realizacja instytucjonalna do opracowania jako case study na podstawie dostępnych materiałów. Nie dopisywać zakresu, dat ani efektów bez źródła.

### Prokuratura Rejonowa Kielce-Wschód i Kielce-Zachód

Kompletna relokacja obu prokuratur na czas remontu:

- cztery kondygnacje i piwnica;
- bardzo rozbudowane archiwum akt;
- dziesiątki szaf, komputery i wyposażenie pracowników;
- przeniesienie i poprawne rozdysponowanie wyposażenia;
- organizacja tak, aby praca instytucji nie została przerwana.

### Zamek Szydłowieckich

Relokacja pojemnika z wiekowym obrazem. Obraz musiał być stale utrzymywany w poziomie, więc został wyprowadzony przez okno — pionowe ustawienie mogło uszkodzić dzieło.

### Transporty specjalistyczne

- ponad dwumetrowe szafy serwerowe wprowadzane przez okno, ponieważ nie mieściły się w drzwiach;
- wielokrotne transporty pieców;
- transporty serwerów;
- transporty sprzętu laboratoryjnego;
- liczne pianina i fortepiany.

### Zasada case study

Realizacja nie może być tylko galerią. Docelowy format:

1. klient lub typ instytucji;
2. sytuacja i ograniczenia;
3. skala;
4. plan i zabezpieczenia;
5. przebieg;
6. efekt;
7. prawdziwe zdjęcia;
8. powiązane usługi i CTA.

Nie wymyślać brakujących szczegółów. Jeżeli stare materiały z `whmtransport.eu` nie są dostępne w repozytorium ani kontekście, bazować wyłącznie na potwierdzonych faktach.

## 8. Docelowa architektura informacji

### Warstwa marki

| Adres | Rola |
|---|---|
| `/` | Strona główna całej marki; przeprowadzki na pierwszym planie, B2B wyraźnie widoczne |
| `/uslugi/` | Czytelny katalog skonsolidowanych usług |
| `/standard-whm/` | Sprzęt, zabezpieczenia, organizacja i odpowiedzialność |
| `/realizacje/` | Realizacje i studia przypadków |
| `/o-nas/` | Firma od 2019 roku, zespół, baza, flota i doświadczenie |
| `/magazyny-kielce/` | Magazynowanie i boksy 2–9 m² |
| `/poradniki/` | Treści pomocnicze i rozwój SEO |
| `/obszar-dzialania/` | Kielce, województwo świętokrzyskie, cała Polska |
| `/kontakt/` | Dane firmy i bezpośredni kontakt |
| `/wycena/` | Wspólny prosty formularz; nie budować ponownie rozbudowanego quizu |

Adres magazynów należy dopasować do faktycznego stanu repozytorium i bezpiecznie przekierować ewentualny starszy `/magazyny/`.

### Skonsolidowany tor B2C

| Adres | Intencja |
|---|---|
| `/przeprowadzki/` | Główna usługa: przeprowadzki mieszkań i domów, wraz z typowymi elementami procesu |
| `/transport-mebli-kielce/` | Pojedyncze meble, zestawy, zakupy, używane meble, wyniesienie/wniesienie, demontaż/montaż |
| `/pakowanie-i-zabezpieczanie/` | Usługa dodatkowa lub samodzielna; profesjonalne materiały i pakowanie |
| `/transport-pianin-i-fortepianow-kielce/` | Dedykowana specjalistyczna intencja pianin i fortepianów |
| `/transport-specjalistyczny/` | Ciężkie, nietypowe i wymagające przedmioty, w tym właściwe przypadki gabarytowe |
| `/oproznianie-mieszkan-i-wywoz-mebli/` | Opróżnianie i wywóz wyposażenia do PSZOK |

Nie tworzyć osobnych stron dla:

- transportu lodówki;
- transportu AGD;
- samego demontażu/montażu jako typowego elementu przeprowadzki;
- każdej odmiany frazy i mikrousługi;
- transportu gabarytowego, jeśli intencję lepiej pokrywa transport specjalistyczny lub mebli.

AGD i lodówka są elementem przeprowadzki lub odpowiedniej szerszej usługi. Demontaż, montaż i pakowanie należy pokazywać jako część pełnej odpowiedzialności za proces, choć pakowanie może być też zamówione samodzielnie.

### Opróżnianie mieszkań

Oficjalna nazwa: **„Opróżnianie mieszkań i wywóz starych mebli”**.

- wyposażenie i stare meble trafiają do PSZOK;
- WHM nie odbiera gruzu, złomu ani odpadów budowlanych;
- nie przedstawiać WHM jako zakładu utylizacyjnego.

### Tor B2B

| Adres | Rola |
|---|---|
| `/dla-firm/` | Hub całego ekosystemu i zdolności WHM dla biznesu i instytucji |
| `/przeprowadzki-firm-i-instytucji/` | Konkretna usługa relokacji, strona sprzedażowa i SEO |

Nie budować pustych podstron B2B tylko po to, by rozbudować menu. Dodatkowa strona powstaje dopiero, gdy ma osobną intencję, materiał, dowody i sens sprzedażowy.

Grupy docelowe B2B:

- firmy i biura;
- instytucje publiczne;
- archiwa;
- deweloperzy;
- zarządcy nieruchomości;
- sklepy i magazyny;
- laboratoria.

Nie rozwijać obecnie partnerstwa z innymi firmami przeprowadzkowymi. Program WHM Move Partner zakończył się z braku zaangażowania i nie jest częścią bieżącej przebudowy.

## 9. Migracja `/lp/`

Katalog `/lp/` ma całkowicie zniknąć z docelowego projektu, ale nie wolno go po prostu skasować. Część adresów jest zaindeksowana, a wszystkie mogą mieć historię reklamową lub linki.

### Wiążący proces

1. zinwentaryzować wszystkie aktywne adresy `/lp/` w aktualnym kodzie;
2. przypisać każdy stary adres do jednej najbliższej intencji docelowej;
3. przenieść wartościowe treści, zdjęcia, argumenty sprzedażowe, formularz i CTA na właściwą stronę;
4. przebudować i przetestować stronę docelową;
5. dodać precyzyjne serwerowe przekierowanie 301;
6. usunąć stary adres z routingu, sitemap i linkowania wewnętrznego;
7. ustawić canonical strony docelowej na nią samą;
8. dopiero po pełnej migracji usunąć nieużywane dane, layouty, komponenty i CSS LP;
9. przygotować tabelę zmiany końcowych URL-i Google Ads; nie edytować konta bez polecenia;
10. przy uruchomieniu monitorować 404, przekierowania, indeksację i kampanie.

Nigdy nie przekierowywać wszystkich LP na `/`.

### Pierwsza konsolidacja

Pierwszym właściwym etapem przebudowy jest mocna strona `/przeprowadzki/`. Powinna wchłonąć właściwe treści i intencje z:

- `/przeprowadzki-mieszkan-i-domow/`;
- `/lp/przeprowadzki-kielce/`;
- LP o intencji cenowej przeprowadzki;
- LP transportu AGD;
- LP transportu lodówki.

Po przeniesieniu treści stare adresy mają otrzymać 301 do `/przeprowadzki/`, o ile bieżąca analiza semantyczna kodu nie wykaże dla któregoś lepszego, jednoznacznego celu.

Pozostałe LP należy mapować analogicznie do: mebli, pakowania, pianin, transportu specjalistycznego, opróżniania albo B2B.

## 10. Strona główna

Strona główna reprezentuje całą markę, lecz pierwszeństwo sprzedażowe mają przeprowadzki.

Docelowa kolejność:

1. hero z prawdziwą realizacją WHM;
2. jasna obietnica dotycząca przeprowadzek mieszkań, firm i wymagającego mienia;
3. CTA „Zadzwoń” i drugie CTA do wyceny;
4. najważniejsze skonsolidowane usługi B2C;
5. Standard WHM;
6. wybrane realizacje;
7. wyraźna sekcja „Rozwiązania dla firm” prowadząca do `/dla-firm/`;
8. transport specjalistyczny;
9. magazyny WHM i WHM Shop jako elementy ekosystemu;
10. prawdziwe opinie klientów;
11. proces realizacji;
12. FAQ;
13. końcowe CTA telefoniczne.

B2B ma być dobrze widoczne, ale nie może komplikować prostej ścieżki klienta detalicznego.

## 11. Wzorzec strony B2C

Każda główna strona usługowa powinna wykorzystywać spójny system, bez kopiowania całych implementacji:

1. konkretna usługa i obszar;
2. jednoznaczne wyjaśnienie oferty;
3. widoczny telefon i formularz;
4. najważniejsze korzyści;
5. zakres usługi;
6. sposób zabezpieczania mienia;
7. proces realizacji;
8. prawdziwe zdjęcia tej usługi;
9. powiązane realizacje;
10. prawdziwe opinie;
11. FAQ danej intencji;
12. wspólny prosty formularz;
13. końcowe CTA telefoniczne.

Nie każda strona musi wyglądać identycznie. System ma być spójny, ale rytm sekcji można dopasować do materiału i intencji.

## 12. Wzorzec B2B

Strona `/dla-firm/` ma sprzedawać odpowiedzialność za cały proces, a nie tani transport.

Powinna pokazywać:

1. odpowiedzialność za rozpoznanie, plan i wykonanie;
2. typy klientów oraz projektów;
3. przeprowadzki biur, firm i instytucji;
4. relokacje wyposażenia, archiwów i dokumentacji;
5. pakowanie, oznaczanie i zabezpieczenia;
6. transport specjalistyczny;
7. magazynowanie i pracę etapami;
8. flotę, sprzęt, pojemniki i zaplecze;
9. bezpłatną wizję lokalną przed większym projektem;
10. plan/harmonogram relokacji;
11. prawdziwe case studies;
12. jasny sposób komunikacji i odpowiedzialność projektową;
13. wspólny formularz w wariancie business oraz bezpośredni kontakt.

Nie publikować prostego cennika większych relokacji. W B2B sprzedawane są rozpoznanie, proces, ograniczenie przestoju i odpowiedzialność.

## 13. Kierunek wizualny

Obecna estetyka podoba się użytkownikowi i ma zostać rozwinięta, nie zastąpiona obcym projektem.

### Zachować i wzmocnić

- dużo przestrzeni i oddechu;
- prawdziwe, duże fotografie WHM;
- białe i neutralne tła;
- czerwony akcent marki;
- mocną, prostą typografię;
- nowoczesny, redakcyjny układ;
- ciemne sekcje końcowego CTA;
- Standard WHM;
- czytelne pokazanie sprzętu, zabezpieczeń i procesu;
- spójne przyciski, formularze, galerie, realizacje i CTA;
- subtelny ruch, jeśli pomaga odbiorowi i respektuje `prefers-reduced-motion`.

### Unikać

- zdjęć stockowych;
- czarno-złotej sztucznej „premiumowości”;
- generycznej estetyki SaaS i morza takich samych kart;
- nadmiaru ozdobników, gradientów i animacji;
- fałszywych liczników, scarcity i pilności;
- nieprawdziwych opinii;
- wizualnego rozdzielenia B2B i B2C na dwie marki;
- kopiowania LP jako drugiego systemu designu.

Dominujący czerwony akcent w dotychczasowych ustaleniach: marka około `#BF242F`, CTA około `#B91C1C`. Przed globalną zmianą należy sprawdzić aktualne tokeny w kodzie i skonsolidować je, zamiast mechanicznie nadpisywać działające style.

### Zdjęcia

- Używać prawdziwych zdjęć WHM; użytkownik będzie uzupełniał galerię o nowe materiały.
- Dobierać zdjęcia semantycznie do sekcji i usługi.
- Przygotować responsywne warianty, prawidłowe `width`/`height`, `srcset`/`sizes` lub mechanizm Astro.
- Alt ma opisywać faktyczną scenę, bez spamowania frazą „Kielce”.
- Nie pozostawiać odwołań do nieistniejących plików.

Wideo w hero lub pod nim jest pomysłem na przyszłość i nie wchodzi do obecnej przebudowy.

## 14. SEO techniczne i treściowe

### Zasady podstawowe

- jedna intencja = jedna mocna strona;
- nie budować stron wyłącznie dla wariantu słowa kluczowego;
- nie kanibalizować `/przeprowadzki/` osobnymi stronami AGD, lodówki i mieszkania/dom;
- jeden H1 na stronę;
- unikalne, naturalne title i meta description;
- self-referencing canonical;
- poprawne statusy i przekierowania 301;
- aktualna sitemap i robots;
- prawidłowe breadcrumbs i linkowanie wewnętrzne;
- semantyczny HTML i dostępność;
- brak uszkodzonych linków i obrazów;
- wydajne obrazy, fonty i JavaScript;
- podstrony lokalne tylko wtedy, gdy mają realną, unikalną wartość i dowody.

### Dane strukturalne

Stosować wyłącznie typy poparte widoczną treścią i faktami, np.:

- `LocalBusiness`/odpowiedni bardziej szczegółowy typ;
- `Service`;
- `BreadcrumbList`;
- `FAQPage` tylko gdy FAQ jest widoczne na stronie;
- dane opinii tylko w zgodzie z wytycznymi i realnym źródłem.

Nie generować sztucznego schema ani ocen, których nie można obronić.

### Źródła E-E-A-T

Najważniejsze są prawdziwe realizacje, własne fotografie, konkretne zasoby, ubezpieczenie, zaplecze magazynowe, proces i opis odpowiedzialności. Copy ma budować wiarygodność przez dowody, nie przez częstotliwość użycia przymiotnika „profesjonalny”.

## 15. Nawigacja, routing i komponenty

Docelowo jeden rejestr tras lub jedno źródło danych powinno sterować odpowiednimi elementami nawigacji, stopki i sitemap, aby URL-i nie były ręcznie rozproszone po wielu plikach.

Nie wolno jednak pozwolić, aby długi refaktor techniczny ponownie zastąpił widoczną przebudowę. Centralizować wtedy, gdy wspiera aktualny etap migracji.

Po usunięciu wszystkich tras `/lp/`:

- usunąć nieużywany `SalesLandingLayout` lub przekształcić go tylko wtedy, gdy nadal ma uzasadnionych konsumentów;
- usunąć martwe dane landingów;
- usunąć nieużywane komponenty LP;
- przenieść potrzebne style do właściwego systemu;
- wyeliminować globalne kolizje selektorów;
- potwierdzić, że wygląd głównego serwisu się nie cofnął.

## 16. Aktualny stan formularzy i analityki

Poniższe elementy zostały według raportów Bolta wdrożone przed rozpoczęciem właściwej przebudowy. Codex musi je zweryfikować w bieżącym kodzie, nie implementować ponownie w ciemno.

### Formularz

- `src/components/forms/LeadForm.astro` — wspólny markup;
- `src/scripts/lead-form.ts` — jedna bundlowana logika klientowa;
- `src/components/LandingLeadForm.astro` — cienki wrapper kompatybilności;
- `/wycena/` używa tego samego komponentu;
- EmailJS wywoływany w jednym miejscu;
- walidacja: imię, wiadomość, zgoda oraz telefon lub e-mail;
- opcjonalne pole firmy tylko dla B2B;
- honeypot i blokada wielokrotnego wysłania;
- zachowane ukryte pola dla zgodności z historycznym template EmailJS;
- sukces UI i konwersja dopiero po powodzeniu EmailJS.

W testach przeglądarkowych poprawiono błąd, w którym blokada czasowa 1,5 s działała przed walidacją i odbierała użytkownikowi komunikaty. Sprawdzić, czy poprawka nadal znajduje się w kodzie.

### Atrybucja

Planowany/raportowany pojedynczy moduł: `src/lib/campaign.ts`.

Obsługiwane parametry:

- `utm_source`;
- `utm_medium`;
- `utm_campaign`;
- `utm_term`;
- `utm_content`;
- `gclid`;
- `gbraid`;
- `wbraid`.

Dane są łączone i przechowywane w `sessionStorage` pod `whm_campaign`; formularz działa z atrybucją niezależnie od zgody na GA4. Nie dodawać fingerprintingu ani marketingowego `localStorage`.

### Warstwa Google i eventy

Raportowana architektura:

- `src/components/GoogleTagHead.astro` — jedno źródło bootstrapa GA4 i Consent Mode dla obu layoutów;
- `src/components/CampaignAttribution.astro` — capture kampanii na wszystkich stronach;
- `src/components/Analytics.astro` — jedyne mapowanie lokalnych eventów do GA4;
- staging nie renderuje GoogleTagHead/Analytics;
- formularz i warstwa prezentacji nie wywołują bezpośrednio `gtag()`.

Docelowe eventy:

| Event | Źródło | GA4 | Konwersja |
|---|---|---|---|
| `phone_click` | kliknięcie `tel:` | tak, bez numeru telefonu w parametrach | kandydat na kluczowe zdarzenie |
| `email_click` | kliknięcie `mailto:` | tak, bez adresu w parametrach | nie |
| `form_start` | pierwsza interakcja z formularzem | tak | nie |
| `whm:form_success` | potwierdzony sukces EmailJS | mapowane na `generate_lead` | tak |
| `form_submit_error` | błąd EmailJS po walidacji | tak | nie |
| `cta_click` | kontrolowane CTA | tak | nie |
| `scroll_depth` | 25/50/75/100% | tak | nie |
| `engaged_time` | 15/30/60 s | tak | nie |

Do GA4 nie przekazywać: imienia, telefonu, e-maila, wiadomości, nazwy firmy, pełnego URL z query ani wartości pól.

Identyfikator GA4 znaleziony w raportach: `G-X0K3ND72TV`. Bezpośredni tag Google Ads `AW-...` nie był obecny; konfigurację Google Ads i import konwersji trzeba później audytować w narzędziach zewnętrznych.

### Wyniki dotychczasowych testów

Ostatni raport runtime wskazywał:

- build staging przechodził;
- 29 stron treści + 404;
- brak błędów konsoli na testowanych trasach;
- zero requestów Google na stagingu;
- formularze inicjalizowały się na LP B2C, LP B2B i `/wycena/`;
- walidacja telefonu/e-maila i wymaganych pól działała;
- atrybucja ośmiu parametrów działała i zachowywała merge;
- `cta_click` działało po poprawce;
- test prawdziwej/mokowanej wysyłki EmailJS nie został wykonany, ponieważ brakowało zmiennych EmailJS w środowisku testowym;
- wykryto istniejący poziomy scroll około 26 px na mobilnym LP, związany ze starym kontenerem galerii.

Te wyniki nie zastępują ponownej weryfikacji po migracji stron.

## 17. Audyt analityczny przed produkcją

Użytkownik ma dostęp do wszystkich narzędzi, ale pełny audyt zewnętrzny nie został wykonany. Przed przełączeniem domeny przygotować i przejść checklistę:

### GA4

- Realtime/DebugView dla `phone_click`, `email_click`, `form_start`, `generate_lead`, błędu formularza, CTA, scroll i czasu;
- brak PII w parametrach;
- brak duplikacji eventów;
- oznaczenie właściwych kluczowych zdarzeń.

### Google Ads

- lista aktywnych akcji konwersji;
- źródło importu formularza i telefonu;
- eliminacja duplikatów;
- przypisanie grup reklam do nowych końcowych URL-i;
- zachowanie UTM, `gclid`, `gbraid`, `wbraid`;
- weryfikacja połączenia z GA4 i profilem firmy;
- nie uznawać CTR za dowód sprzedaży; mierzyć koszt wartościowego leada, wyceny, zlecenia, przychód i marżę.

### Search Console

- stan indeksacji wszystkich `/lp/`;
- dane wyświetleń i kliknięć starych URL-i;
- nowa sitemap po uruchomieniu;
- inspekcja najważniejszych adresów;
- monitoring 404, przekierowań i canonicali.

## 18. Kolejność właściwej przebudowy

### Etap A — bezpieczny baseline

- sprawdzić branch, status i istniejące zmiany;
- uruchomić build staging;
- potwierdzić pliki i zachowanie opisane w sekcji 16;
- wykonać tylko diagnostykę potrzebną do bezpiecznej implementacji;
- nie tworzyć kolejnego wielkiego raportu zamiast zmian.

### Etap B — `/przeprowadzki/` i pierwsza migracja

- przebudować `/przeprowadzki/` jako główną, kompletną stronę sprzedażową B2C;
- przenieść najlepsze treści, zdjęcia i funkcje z odpowiednich stron/LP;
- zastosować wspólny formularz i phone-first CTA;
- dodać 301 ze stron konsolidowanych;
- usunąć je z aktywnego routingu, linkowania i sitemap;
- sprawdzić desktop/mobile, SEO, formularz, obrazy i redirecty;
- commit.

### Etap C — pozostałe B2C

Kolejno przebudować i migrować:

- transport mebli;
- pakowanie i zabezpieczanie;
- pianina i fortepiany;
- transport specjalistyczny/gabarytowy;
- opróżnianie mieszkań i wywóz starych mebli.

Po każdej gotowej stronie przenieść właściwe LP i dodać indywidualne 301.

### Etap D — usunięcie systemu `/lp/`

Gdy zero aktywnych tras korzysta z `/lp/`:

- usunąć katalog tras;
- usunąć martwy layout, dane i komponenty;
- usunąć lub przenieść CSS bez zmiany zachowanego rezultatu wizualnego;
- potwierdzić brak linków `/lp/` w całym `src`, buildzie i sitemap;
- potwierdzić wszystkie redirecty.

### Etap E — wspólna rama i strona główna

- uporządkować źródło nawigacji, header i footer;
- przebudować homepage zgodnie z sekcją 10;
- zachować oddech i rozpoznawalność obecnej strony;
- wprowadzić B2B jako wyraźny drugi tor.

### Etap F — wiarygodność marki

- `/standard-whm/`;
- `/realizacje/` i pierwsze pełne case studies;
- `/o-nas/`;
- `/obszar-dzialania/`;
- `/kontakt/`;
- opinie, baza, sprzęt, ubezpieczenie i proces.

### Etap G — B2B

- `/dla-firm/`;
- przebudowa `/przeprowadzki-firm-i-instytucji/`;
- realizacje biznesowe i instytucjonalne;
- wariant business wspólnego formularza;
- bezpłatne oględziny, plan i etapowanie;
- magazynowanie, pojemniki i ograniczenie przestoju.

### Etap H — magazyny

- docelowa strona magazynów Kielce;
- komunikat: ogrzewane boksy od 2 do 9 m²;
- realne zdjęcia, dostęp, bezpieczeństwo, warianty zastosowań i kontakt;
- nie podawać wymiarów pojedynczych boksów bez potwierdzenia;
- uwzględnić powiązanie z przeprowadzkami i B2B.

### Etap I — finalne SEO i jakość

- title, meta, H1, canonical, schema, breadcrumbs;
- linkowanie wewnętrzne;
- sitemap/robots;
- obrazy i brakujące assety;
- wydajność i dostępność;
- 404 i przekierowania;
- spójność komponentów i tokenów designu.

### Etap J — pełne QA

- build staging;
- symulacja production bez wdrożenia;
- desktop i mobile dla wszystkich kluczowych stron;
- nawigacja klawiaturą i widoczny focus;
- formularz w każdym kontekście;
- brak błędów konsoli i requestów Google na staging;
- brak poziomego scrolla;
- brak uszkodzonych obrazów i linków;
- poprawność wszystkich 301;
- regresja analityki bez PII.

### Etap K — pakiet uruchomieniowy

Przygotować, ale nie wykonywać bez zgody:

- tabelę `stary URL → nowy URL → status 301`;
- tabelę `kampania/grupa reklam → końcowy URL`;
- checklistę GA4/Google Ads/Search Console;
- listę zmiennych środowiskowych;
- instrukcję ustawienia production;
- raport nierozstrzygniętych ryzyk;
- numer ostatniego zweryfikowanego commita.

## 19. Standard pracy Codex

- Prowadź pracę autonomicznie i kończ kolejne etapy, zamiast pytać o zgodę na każdy plik.
- Najpierw ustal minimalny potrzebny stan kodu, potem implementuj.
- Testuj jako część każdego etapu; nie poświęcaj wielu osobnych tur wyłącznie na audyty, jeżeli użytkownik oczekuje przebudowy.
- Nie wymyślaj brakujących faktów. Jeżeli brak dotyczy drobnego copy, użyj bezpieczniejszego, ogólniejszego sformułowania. Jeżeli zmienia architekturę lub ryzyko biznesowe, oznacz blokadę.
- Korzystaj z istniejącego stosu, komponentów i zdjęć, gdy są dobre.
- Zachowuj dostępność, performance i SEO od początku, a nie jako warstwę nakładaną na końcu.
- Każdy większy etap kończ buildem, kontrolą w przeglądarce, diffem i logicznym commitem.
- Nie używaj force push, reset hard ani destrukcyjnego czyszczenia repozytorium.
- Nie modyfikuj zewnętrznych usług produkcyjnych w ramach pracy nocnej.

## 20. Definicja ukończenia całego projektu

Projekt jest gotowy do decyzji o przepięciu domeny dopiero wtedy, gdy:

- docelowe strony B2C są przebudowane i skonsolidowane;
- B2B ma pełnoprawny hub, usługę i dowody realizacji;
- strona główna i warstwa marki są spójne;
- magazyny komunikują realną ofertę 2–9 m²;
- zero aktywnych stron korzysta z `/lp/`;
- każdy stary URL ma właściwy 301;
- wspólny formularz działa w kontekście B2C i B2B;
- staging pozostaje nieindeksowalny i bez analityki Google;
- wszystkie kluczowe trasy przeszły QA desktop/mobile;
- SEO techniczne, obrazy, linki, schema i sitemap są poprawne;
- przygotowany jest pakiet uruchomieniowy;
- użytkownik otrzymał jasny raport i sam podejmuje decyzję o wdrożeniu/przepięciu domeny.

Refaktor formularza i analityki był fundamentem. Nie jest równoznaczny z zakończeniem przebudowy.
