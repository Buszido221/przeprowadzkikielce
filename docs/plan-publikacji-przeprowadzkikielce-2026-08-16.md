# Plan dopracowania i publikacji przeprowadzkikielce.pl

Data audytu: 16 sierpnia 2026 r.  
Materiał: projekt Astro z archiwum `whm aktualne.zip`  
Domena nadrzędna: `https://przeprowadzkikielce.pl/`

## Decyzja publikacyjna

Projekt ma dobrą bazę techniczną SEO, ale **nie jest jeszcze gotowy do uruchomienia płatnego ruchu Google Ads**. Największym ryzykiem nie jest indeksowanie, lecz konwersja: formularze są wyłączone, nie istnieje działający mechanizm wysyłki, zdarzenie analityczne jest uruchamiane przy samej próbie wysłania, a tag konwersji Google Ads nie został wdrożony.

Rekomendowana decyzja:

- serwis organiczny można doprowadzić do publikacji po zamknięciu kwestii prawnych, treściowych i wydajnościowych;
- kampanie Google Ads należy uruchomić dopiero po przejściu bramki „Ads Ready” opisanej w tym dokumencie;
- `przeprowadzkikielce.pl` pozostaje jedyną domeną i źródłem prawdy;
- `whmprzeprowadzkikielce.pl` pozostaje poza zakresem projektu zgodnie z decyzją właściciela;
- `whmtransport.eu` nie jest traktowane jako aktywne źródło treści. Jeżeli domena nadal jest pod kontrolą, można opcjonalnie wykorzystać ją wyłącznie do odzyskania wartości starych adresów przez precyzyjne przekierowania 301.

## Zakres wykonanej analizy

Przejrzano:

- cały kod `src`, zasoby `public`, dokument źródła prawdy i konfigurację projektu;
- wszystkie 29 wygenerowanych dokumentów HTML;
- wszystkie 18 tras publicznych, 10 tras `/lp/`, `robots.txt` i `sitemap.xml`;
- metadane robots, canonical, title i H1 w gotowym buildzie;
- formularze, analitykę, zgodę cookies i potencjalny pomiar Google Ads;
- linkowanie wewnętrzne oraz odwołania do starych domen i adresów;
- zgodność zdjęć hero z intencją poszczególnych landingów;
- rozmiary głównych zasobów i sposób ładowania obrazów.

Świeży build produkcyjny Astro zakończył się powodzeniem: **29 stron wygenerowanych bez błędów**. W gotowym buildzie nie znaleziono uszkodzonych linków wewnętrznych.

## Stan obecny w liczbach

| Element | Stan |
|---|---:|
| Wygenerowane dokumenty HTML | 29 |
| Strony indeksowalne | 15 |
| Adresy w sitemapie | 15 |
| Landingi `/lp/` | 10 |
| Landingi oznaczone jako aktywne | 9 |
| Landingi z `noindex, follow` | 10/10 |
| Landingi obecne w sitemapie | 0 |
| Działające formularze na landingach w buildzie | 0 |
| Niedziałające linki wewnętrzne w buildzie | 0 |
| Pliki graficzne | 65 |
| Łączny ciężar katalogu obrazów | ok. 15,3 MB |

## Co jest zrobione prawidłowo

1. Konfiguracja Astro wskazuje właściwą domenę i wymusza końcowy ukośnik.
2. Wszystkie aktywne podstrony organiczne mają spójne, samowskazujące canonicale.
3. Wszystkie landingi reklamowe mają `noindex, follow`, własny canonical i nie znajdują się w menu głównym ani sitemapie.
4. Sitemap zawiera dokładnie 15 stron oznaczonych w projekcie jako `ready` oraz `index, follow`.
5. `robots.txt` pozwala na crawling całego serwisu i wskazuje prawidłową sitemapę.
6. NAP w kodzie jest spójny z dokumentem źródła prawdy:
   - WHM TRANSPORT MATEUSZ KONDERA;
   - Lotnicza 60A, 26-001 Masłów Pierwszy;
   - +48 720 719 022;
   - kontakt@whmprzeprowadzkikielce.pl.
7. W kodzie nie ma linków do usuniętego `whmtransport.eu`, starego adresu Sandomierska ani do strony WeNet. Domena występująca w adresie e-mail jest zgodna z zatwierdzonym NAP i nie jest błędem.
8. Zdjęcia hero landingów są prawdziwymi zdjęciami WHM i zasadniczo odpowiadają intencjom kampanii.

## Blokery P0 — przed publikacją i przed Google Ads

### 1. Formularze nie działają

W `src/data/services.ts` ustawiono `quoteFormEnabled = false`. W efekcie:

- na wszystkich aktywnych landingach build zawiera zero formularzy;
- `/wycena/` pokazuje formularz z nieaktywnym przyciskiem;
- główne CTA serwisu wielokrotnie prowadzą do strony, na której nie można wysłać zapytania;
- po zmianie flagi na `true` formularz nadal nie zadziała, ponieważ nie ma `action`, endpointu ani kodu wysyłającego;
- zależność `@emailjs/browser` jest zainstalowana, ale nigdzie nieużywana.

To jest krytyczny błąd konwersji. Samo przełączenie flagi nie rozwiązuje problemu.

**Rekomendacja:** wdrożyć jeden wspólny, serwerowo walidowany endpoint leadowy i używać go zarówno na `/wycena/`, jak i na wszystkich `/lp/`. Przy statycznym Astro i hostingu Netlify najlepszym wariantem jest funkcja serwerowa, np. `/api/lead`, z sekretami wyłącznie po stronie serwera. EmailJS uruchamiany bezpośrednio w przeglądarce należy usunąć, jeżeli nie będzie częścią świadomie przyjętej architektury.

Minimalne wymagania endpointu:

- walidacja wymaganych pól po stronie serwera;
- normalizacja telefonu i adresów e-mail;
- honeypot, minimalny czas wypełnienia i ograniczenie liczby żądań;
- identyfikator zgłoszenia oraz zabezpieczenie przed podwójną wysyłką;
- zapis bezpiecznego logu technicznego bez nadmiarowych danych osobowych;
- odpowiedź 2xx dopiero po faktycznym przyjęciu zgłoszenia;
- czytelny stan „wysyłanie”, sukces i błąd z możliwością ponowienia;
- alternatywa telefon/SMS/e-mail, gdy endpoint jest niedostępny.

### 2. Pomiar konwersji daje fałszywe wyniki

`src/components/Analytics.astro` wysyła zdarzenie `form_submit` na każdy event `submit`. Oznacza to, że konwersja może zostać zaliczona przed walidacją, przed wysłaniem i nawet po błędzie serwera.

Jednocześnie w kodzie jest wyłącznie identyfikator GA4 `G-X0K3ND72TV`; nie ma identyfikatora `AW-...`, etykiety konwersji ani zdarzenia Google Ads. Google opisuje konwersję witryny jako połączenie Google tagu i event snippet uruchamianego w momencie właściwej konwersji, a nie przy samym kliknięciu przycisku: [Google Ads — użycie Google tagu do pomiaru konwersji](https://support.google.com/google-ads/answer/7548399?hl=en).

Docelowy model zdarzeń:

| Zdarzenie | Moment | Rola |
|---|---|---|
| `lead_form_start` | pierwsza interakcja z formularzem | diagnostyczne |
| `lead_submit_attempt` | próba wysłania poprawnego formularza | diagnostyczne, nie konwersja |
| `generate_lead` | dopiero po potwierdzeniu 2xx z endpointu | kluczowe zdarzenie GA4 |
| Google Ads lead conversion | równocześnie z potwierdzonym sukcesem | główna konwersja Ads |
| `phone_click` | kliknięcie numeru telefonu | konwersja pomocnicza/secondary |
| `sms_click` | kliknięcie linku SMS | diagnostyczne lub secondary |

Do zdarzenia sukcesu należy przekazywać anonimowy `lead_id`/`event_id`, typ usługi i slug landingu. Nie wolno wysyłać do zwykłych parametrów GA4 imienia, telefonu, adresu e-mail ani opisu zlecenia.

### 3. Brak atrybucji kampanii i grup reklam

Kod nie przechwytuje żadnego z parametrów: `gclid`, `gbraid`, `wbraid`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `campaignid`, `adgroupid`, `creative`, `device` i `network`.

Google auto-tagging dopisuje `GCLID` do adresu docelowego i wymaga, aby serwis akceptował parametry URL oraz nie gubił ich w przekierowaniach: [Google Ads — auto-tagging](https://support.google.com/google-ads/answer/3095550?hl=en). Parametry kampanii można dodać przez Final URL suffix i ValueTrack: [Google Ads — ValueTrack](https://support.google.com/google-ads/answer/6305348?hl=en-GB).

Formularz powinien zapisywać jako ukryte pola:

- pierwszy landing i aktualny `page_path`;
- `service_type` i unikalny `landing_slug`;
- komplet UTM;
- `gclid`, `gbraid`, `wbraid`, jeśli występują;
- identyfikator kampanii, grupy, kreacji, urządzenia i sieci;
- referrer;
- czas wysłania oraz wersję treści zgody.

Sposób i czas przechowywania identyfikatorów należy opisać w finalnej polityce prywatności.

### 4. Polityka prywatności jest jawnie robocza

W projekcie istnieje `privacyPolicyFinalized = false`, a publiczna treść mówi m.in. że:

- dokument czeka na finalizację;
- informacje o logach zostaną uzupełnione;
- informacje o analityce, cookies i dostawcach zostaną uzupełnione;
- data aktualizacji zostanie dodana później.

Takiej wersji nie należy publikować jako finalnego dokumentu przy działającym formularzu i Google Ads. Po wyborze endpointu, hostingu, dostawcy poczty/CRM, retencji, uploadu zdjęć i konfiguracji Google trzeba zaktualizować politykę oraz baner cookies. Treść powinna zostać zweryfikowana prawnie; ten audyt nie zastępuje opinii prawnika.

### 5. Nieaktywny landing utylizacji jest publikowany jako strona 200

`/lp/utylizacja-mebli-kielce/` ma status `draft` i `campaignEnabled: false`, ale Astro nadal generuje publiczną stronę 200 z komunikatem „kampania nieaktywna”. Google Ads uznaje strony „under construction” lub zwracające komunikat o braku treści za niespełniające wymagań miejsca docelowego: [Google Ads — destination not working](https://support.google.com/adspolicy/answer/16428019?hl=en).

**Decyzja:** do czasu potwierdzenia zakresu usługi i legalnego sposobu obsługi odpadów nie kierować tam reklam i nie generować tej trasy w buildzie. Adres powinien zwracać 404 albo 410. Jeżeli kampania kiedyś wróci, landing należy zbudować od nowa na potwierdzonych informacjach.

### 6. Landingi nie przedstawiają dowodów, które budują markę

Każdy aktywny landing ma jedynie:

- zdjęcie hero;
- krótki opis;
- listę standardu;
- cztery kroki;
- informacje potrzebne do wyceny;
- FAQ;
- telefon/e-mail.

Brakuje galerii realizacji, opinii, zdjęć zespołu lub sprzętu, konkretnego dowodu doświadczenia oraz linku do pełnej strony usługi. Jest to niezgodne z założeniem marki, według którego profesjonalizm ma być udowadniany, a nie deklarowany.

Do wspólnego `LandingLayout` należy dodać:

- 2–4 zdjęcia realizacji dopasowane do intencji landingu;
- sekcję „Jak zabezpieczamy ten typ mienia” ze zdjęciem sprzętu;
- 1–2 zweryfikowane opinie adekwatne do usługi, bez `AggregateRating` tworzonego na podstawie własnych cytatów;
- subtelny link „Zobacz pełny opis usługi” do odpowiedniej strony organicznej;
- formularz lub przewinięcie do formularza jako drugie CTA już nad foldem;
- mobilny pasek z dwiema akcjami: „Zadzwoń” i „Wyceń”.

### 7. Treści wymagają zatwierdzenia właściciela

Przed publikacją trzeba potwierdzić dokumentami lub faktycznym doświadczeniem co najmniej następujące twierdzenia:

- „Od 2019 roku”;
- „Setki przeprowadzek i transportów”;
- „przewieźliśmy już setki takich przedmiotów”;
- właściciel osobiście odpowiada na zapytania;
- komplet cytowanych opinii, nazwy autorów i zgodność z aktualnymi opiniami Google;
- bezpłatna wycena;
- „Bez ukrytych dodatków”;
- realizacje wieczorami i w weekendy;
- zakres montażu po relokacji firm;
- sformułowania absolutne typu „bez uszkodzeń”;
- możliwość transportu pianina „nawet po wąskich schodach”.

Sformułowania dotyczące schodów i gabarytów należy uzależnić od wcześniejszej oceny, zgodnie ze źródłem prawdy.

## Plan `robots.txt`

Obecny plik jest prawidłowy i powinien pozostać prosty:

```txt
User-agent: *
Allow: /

Sitemap: https://przeprowadzkikielce.pl/sitemap.xml
```

Najważniejsze decyzje:

- **nie dodawać** `Disallow: /lp/`;
- **nie blokować** CSS, JavaScriptu ani zdjęć;
- nie próbować wdrażać `noindex` w `robots.txt`;
- pozostawić landingi dostępne dla Googlebot i AdsBot;
- po wdrożeniu zweryfikować każdy final URL jako Google AdsBot desktop i mobile.

Google wyjaśnia, że strona z `noindex` musi pozostać crawlable, inaczej robot nie zobaczy dyrektywy: [Google Search Central — noindex](https://developers.google.com/search/docs/crawling-indexing/block-indexing). Google Ads wymaga równocześnie, aby AdsBot mógł pobrać stronę i otrzymywał stabilną odpowiedź 200: [Google Ads — strony niedostępne dla crawlera](https://support.google.com/google-ads/answer/9229701?hl=en).

Nie ma technicznej potrzeby dodawania osobnych sekcji `AdsBot-Google`, dopóki reguła ogólna pozwala na wszystko. Jeżeli w przyszłości `robots.txt` zostanie zaostrzony, trzeba dodać jawne wyjątki dla `AdsBot-Google` i `AdsBot-Google-Mobile`.

## Plan `sitemap.xml`

Aktualna logika wyboru URL-i jest poprawna: tylko trasy `ready` oraz `index, follow`. Należy zachować wykluczenie:

- wszystkich `/lp/`;
- `/wycena/` jako strony narzędziowej;
- `/polityka-prywatnosci/`;
- `/magazyny/`, dopóki pozostaje szkicem i `noindex`;
- stron 404, draftów i adresów przekierowujących.

Zmiany rekomendowane:

1. Usunąć `changefreq` i `priority`. Google jawnie je ignoruje: [Google Search Central — budowanie sitemapy](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).
2. Dodać `lastmod` wyłącznie wtedy, gdy projekt będzie przechowywał prawdziwą datę istotnej zmiany treści. Nie ustawiać jej na datę każdego deployu.
3. Zbudować jeden rejestr tras jako źródło dla:
   - sitemapy;
   - menu i stopki;
   - statusu publikacji;
   - robots meta;
   - raportu QA.
4. Obecnie `routes.ts`, `Header.astro` i `Footer.astro` mają osobne, ręczne listy. To grozi rozjazdem. Przykład: `/magazyny/` ma status `draft`, lecz jest na stałe obecne w menu i stopce.
5. Dodać test builda, który przerwie publikację, jeżeli:
   - URL z sitemapy nie ma pliku HTML;
   - URL z sitemapy nie ma `index, follow` i self-canonical;
   - indeksowalna gotowa trasa nie znajduje się w sitemapie;
   - `/lp/`, draft, noindex, redirect albo 4xx znajdzie się w sitemapie;
   - canonical zawiera inną domenę albo niewłaściwy trailing slash.

Docelowy, prosty wpis może wyglądać tak:

```xml
<url>
  <loc>https://przeprowadzkikielce.pl/przeprowadzki/</loc>
  <lastmod>2026-08-16</lastmod>
</url>
```

`lastmod` należy pominąć, jeśli nie można zagwarantować jego wiarygodności.

## Macierz Google Ads → `/lp/`

Zasada: jedna wyraźna intencja i jedna obietnica na grupę reklam. Ten sam final URL może obsługiwać kilka bardzo bliskich słów kluczowych w jednej grupie, ale nie należy mieszać B2C, firm, pianin, gabarytów i utylizacji.

| Intencja / grupa reklam | Final URL | Decyzja | Warunek uruchomienia |
|---|---|---|---|
| Przeprowadzki Kielce — ogólne B2C | `/lp/przeprowadzki-kielce/` | fala 1 | formularz, dowody, tracking; nie kierować tu zapytań firmowych |
| Cena / koszt przeprowadzki | `/lp/przeprowadzki-cena/` | fala 1 | potwierdzić bezpłatną wycenę i „bez ukrytych dodatków” |
| Przeprowadzki firm / biur / instytucji | `/lp/przeprowadzki-firm-kielce/` | fala 1 | dowody B2B, potwierdzony harmonogram i zakres montażu |
| Pianina / fortepiany | `/lp/transport-pianina-kielce/` | fala 1 | upload zdjęć, kwalifikacja schodów, dowody realizacji |
| Transport specjalistyczny | `/lp/transport-specjalistyczny-kielce/` | fala 1 | zawęzić do sejfów, pieców, maszyn, serwerów, laboratoriów itp. |
| Utylizacja mebli | `/lp/utylizacja-mebli-kielce/` | **wstrzymane** | brak reklam i brak strony 200 do czasu pełnego potwierdzenia usługi |
| Transport gabarytowy | `/lp/transport-gabarytowy-kielce/` | fala 2 | osobna grupa; rozdzielić od transportu specjalistycznego |
| Transport AGD | `/lp/transport-agd-kielce/` | fala 2 | poprawić `service_type`; określić zakres urządzeń |
| Transport lodówki | `/lp/transport-lodowki-kielce/` | test warunkowy | używać tylko przy osobnej grupie i wystarczającym wolumenie |
| Pakowanie | `/lp/pakowanie-przeprowadzki-kielce/` | fala 2 | doprecyzować usługę samodzielną vs część przeprowadzki |

### Rozdzielenie podobnych landingów

**Specjalistyczny vs gabarytowy**

- specjalistyczny: przedmioty o szczególnym ryzyku, masie lub wartości — sejfy, piece, serwery, maszyny, wyposażenie laboratoryjne;
- gabarytowy: duże meble i przedmioty, dla których głównym problemem są wymiary, schody, zakręty i wniesienie;
- zastosować wzajemne wykluczenia słów w grupach, aby kampanie nie licytowały się między sobą.

**AGD vs lodówka**

- osobny landing lodówki ma sens tylko wtedy, gdy istnieje osobna grupa reklam z wystarczającym ruchem;
- jeżeli nie, używać `/lp/transport-agd-kielce/` i pozostawić landing lodówki nieaktywny kampanijnie;
- jeśli oba są aktywne, grupa AGD powinna wykluczać frazy lodówkowe, a grupa lodówki — pralki, zmywarki, piekarniki itd.

### Rejestr final URL-i

W repozytorium warto dodać wersjonowany plik `ads/landing-pages.csv` z polami:

```text
campaign,ad_group,intent,final_url,status,conversion_action,owner,last_qa_at
```

To powinno być jedyne operacyjne źródło mapowania reklam na landing. Każda zmiana URL-u wymaga aktualizacji kampanii, testu przekierowań i ponownego QA AdsBot.

## Ocena każdego landingu

| Landing | Mocna strona | Problem do poprawy |
|---|---|---|
| Przeprowadzki Kielce | szeroka, czytelna oferta B2C | formularz oznacza tylko mieszkanie/dom; dodać realizacje i wyraźne CTA formularza |
| Cena | dobrze wyjaśnia czynniki wyceny bez publikowania ceny | potwierdzić „bezpłatnie” i „bez ukrytych dodatków”; dodać przykładowy zakres, nie wymyślone stawki |
| Firmy | odrębna intencja i proces | potwierdzić wieczory/weekendy i montaż; dodać dowody B2B, etapowanie i osobę kontaktową |
| Utylizacja | uczciwie nie udaje potwierdzonej usługi | nie może pozostać publiczną stroną 200 ani miejscem docelowym Ads |
| Pianina | dobre zdjęcie i właściwy proces oceny | „nawet po wąskich schodach” brzmi absolutnie; brak możliwości przesłania zdjęć |
| Specjalistyczny | odpowiada na trudne realizacje | za duże podobieństwo do gabarytowego; potrzebuje konkretnych kategorii i dowodów |
| Gabarytowy | czytelny nacisk na drogę transportową | złagodzić „bez uszkodzeń”; dodać kryteria wstępnej kwalifikacji |
| Lodówka | bardzo konkretna intencja | błędny `service_type = Transport gabarytowy`; „Powiem Ci” → „Powiemy Ci”; jasno zaznaczyć brak podłączania |
| AGD | przydatny szerszy wariant | błędny `service_type = Transport gabarytowy`; rozdzielić od lodówki i jasno opisać brak podłączania |
| Pakowanie | osobna usługa i dobry proces | hero słabo komunikuje pakowanie; potrzebne zdjęcia kartonów, materiałów i pracy zespołu |

Wszystkie landingi muszą dostać unikalny `service_type`, aby lead można było prawidłowo przypisać. Obecnie lodówka i AGD zapisują się jako „Transport gabarytowy”.

## Docelowy formularz

### Wspólne pola

- imię i nazwisko;
- telefon;
- e-mail opcjonalnie;
- miejscowość odbioru i docelowa;
- preferowany termin;
- opis zakresu;
- zgoda/klauzula informacyjna;
- ukryte dane kampanii i landingu.

### Pola warunkowe

| Typ usługi | Pola dodatkowe |
|---|---|
| Mieszkanie/dom | piętro, winda, podjazd, liczba pomieszczeń, pakowanie, demontaż/montaż |
| Firma/instytucja | typ obiektu, liczba stanowisk/pomieszczeń, etapowanie, preferowane okno pracy |
| Pianino/fortepian | typ instrumentu, orientacyjne wymiary/masa, piętra, schody, zakręty, zdjęcia |
| Specjalistyczny/gabarytowy | rodzaj, wymiary, masa, punkty chwytu, droga transportowa, zdjęcia |
| AGD/lodówka | rodzaj/model, wymiary, przygotowanie do transportu, schody/winda, zdjęcia |
| Pakowanie | liczba pomieszczeń, zakres pakowania, potrzebne materiały, termin |

### Zdjęcia

Obecne teksty wielokrotnie proszą o zdjęcia, lecz formularz ich nie przyjmuje. To trzeba naprawić przed reklamami dla pianin, gabarytów i transportu specjalistycznego.

Rekomendowany wariant:

- `input type="file"` z wielokrotnym wyborem;
- tylko jawnie dozwolone formaty zdjęć;
- limit liczby i rozmiaru ustalony po potwierdzeniu ograniczeń hostingu;
- walidacja MIME i rozmiaru po stronie serwera;
- przechowywanie w kontrolowanym zasobie z ograniczonym dostępem i okresem retencji;
- nazwy plików generowane po stronie serwera, bez zaufania do nazw użytkownika;
- alternatywny, jasno opisany kanał przesłania zdjęć po utworzeniu zgłoszenia.

Nie należy obiecywać WhatsAppa ani innego kanału, dopóki firma formalnie go nie potwierdzi.

## Consent Mode, cookies i Google tag

Projekt poprawnie ustawia cztery sygnały Consent Mode v2 jako `denied` przed konfiguracją GA4 i aktualizuje je po akceptacji. Po dodaniu Google Ads trzeba:

- dodać prawdziwy identyfikator Google Ads `AW-...`, bez wartości zastępczych;
- zaktualizować opis banera i politykę prywatności;
- zweryfikować default i update w Tag Assistant;
- sprawdzić zachowanie po akceptacji i odrzuceniu na każdej klasie strony;
- zdecydować, czy używany jest advanced czy basic consent mode i wdrożyć to konsekwentnie;
- rozważyć enhanced conversions dopiero po analizie prawnej, technicznej i potwierdzeniu zgód.

Google zaleca weryfikację wszystkich czterech sygnałów (`ad_storage`, `analytics_storage`, `ad_user_data`, `ad_personalization`) i ich aktualizacji w Tag Assistant: [Google — debugowanie Consent Mode](https://developers.google.com/tag-platform/security/guides/consent-debugging).

## Dalsze poprawki SEO i wydajności — P1

### Obrazy i Core Web Vitals

Najcięższe hero aktywnych landingów mają od ok. 154 KB do 482 KB. Część pionowych zdjęć 1536×2048 jest osadzana z nieprawdziwym rozmiarem `1920×1080`. Dodatkowo plik logo ma ok. 545 KB i jest używany także jako favicon, mimo że w `public/favicon.svg` istnieje osobny plik o rozmiarze poniżej 1 KB.

Plan:

- używać `/favicon.svg` jako faviconu;
- uprościć lub osobno wyeksportować lekkie logo nagłówka;
- przygotować kadry hero 16:9 zamiast ładować pełne pionowe fotografie;
- wdrożyć `srcset`/`sizes` albo komponent `Image` Astro z wariantami AVIF/WebP;
- ustawić prawdziwe width/height dla każdego wariantu;
- `fetchpriority="high"` zostawić tylko na jednym obrazie LCP;
- wszystkie zdjęcia poniżej folda ładować `loading="lazy"`;
- przetestować mobilny LCP, INP i CLS na 75. percentylu.

Aktualne progi dobrego Core Web Vitals to LCP ≤ 2,5 s, INP ≤ 200 ms i CLS ≤ 0,1: [web.dev — Web Vitals](https://web.dev/articles/vitals).

### Meta i udostępnianie

Wspólny layout nie generuje Open Graph ani Twitter Card. Dodać:

- `og:title`, `og:description`, `og:url`, `og:type`, `og:image`;
- `twitter:card`;
- jeden zatwierdzony obraz udostępniania 1200×630;
- parametry per strona tam, gdzie ma to sens.

Landingi `noindex` nie potrzebują być zoptymalizowane pod wyniki organiczne, ale poprawne metadane nadal pomagają przy udostępnianiu i kontroli jakości.

### Dane strukturalne

Podstrony używają danych `Service` i `BreadcrumbList`, ale strona główna nie ma jednego nadrzędnego bytu firmy. Dodać zweryfikowany JSON-LD `LocalBusiness` lub właściwy, najbliższy typ usługowy z:

- nazwą i nazwą prawną;
- oficjalnym URL-em;
- telefonem;
- adresem operacyjnym;
- godzinami kontaktu;
- logo/zdjęciem;
- profilem Google i `sameAs` tylko dla faktycznie potwierdzonych profili.

Nie dodawać wymyślonych współrzędnych, przedziału cenowego, oceny ani profili społecznościowych. Wdrożenie przetestować Rich Results Test: [Google Search Central — LocalBusiness](https://developers.google.com/search/docs/appearance/structured-data/local-business).

### Redirecty, host i nagłówki

W repozytorium nie ma `netlify.toml`, `_redirects` ani `_headers`. Jeżeli produkcja pozostaje na Netlify, dodać wersjonowaną konfigurację:

- jeden skok 301 z HTTP do HTTPS;
- jeden host kanoniczny: non-www;
- zachowanie ścieżki i parametrów kampanii;
- prawidłowa obsługa trailing slash;
- immutable cache dla fingerprintowanych `/_astro/*`;
- rozsądny cache obrazów;
- brak długiego cache HTML i `robots.txt` podczas uruchomienia;
- CSP, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` i ochronę osadzania dostosowaną do faktycznych integracji;
- prawdziwy status 404 dla nieistniejących adresów.

Jeżeli `whmtransport.eu` nadal można kontrolować, stary URL należy przekierować 301 do najbliższego odpowiednika na nowej domenie, a nie wszystkie adresy do strony głównej. Jeśli domena nie jest już dostępna, punkt ten pomija się.

### Widoczne szkice

- `/magazyny/` ma `draft` i `noindex`, ale znajduje się w menu, stopce i na stronie głównej. Trzeba wybrać: ukończyć i indeksować po potwierdzeniu gotowości albo usunąć z głównej nawigacji do czasu startu.
- `/wycena/` może pozostać `noindex`, ale musi działać. Nie należy dodawać go do sitemapy tylko dlatego, że jest ważnym CTA.
- polityka prywatności powinna pozostać `noindex`, ale musi być finalna i dostępna.

## Możliwości organiczne — P2

Ads landingów nie należy indeksować ani dopisywać do sitemapy. Jeśli dane z Search Console i plan słów kluczowych potwierdzą potencjał, można stworzyć osobną, indeksowalną stronę informacyjną dla intencji „ile kosztuje przeprowadzka w Kielcach”. Powinna wyjaśniać czynniki kosztu i przykładowe zakresy wyłącznie na zatwierdzonych danych, a następnie kierować do `/wycena/`.

Nie należy po prostu zdjąć `noindex` z `/lp/przeprowadzki-cena/`, ponieważ landing reklamowy i strona organiczna mają inne zadania oraz inny kontekst linkowania.

## Kolejność wdrożenia

### Etap 0 — decyzje biznesowe

- zatwierdzić listę aktywnych usług i grup reklam;
- zamrozić final URL-e kampanii;
- potwierdzić wszystkie twierdzenia i opinie;
- potwierdzić hosting, odbiorców leadów, retencję i kanał zdjęć;
- uzyskać prawdziwy identyfikator i etykietę konwersji Google Ads.

### Etap 1 — lead i zgodność

- wdrożyć endpoint formularza;
- podłączyć formularz `/wycena/` i wspólny formularz LP;
- wdrożyć upload zdjęć lub potwierdzony kanał alternatywny;
- poprawić `service_type` i dane kampanii;
- wdrożyć stany sukces/błąd;
- sfinalizować politykę i baner cookies.

### Etap 2 — tracking

- usunąć konwersję na surowym `submit`;
- uruchamiać `generate_lead` i event Ads dopiero po sukcesie endpointu;
- włączyć auto-tagging i Final URL suffix;
- przetestować UTM, GCLID/GBRAID/WBRAID i ValueTrack;
- zweryfikować Consent Mode w Tag Assistant;
- oznaczyć kliknięcia telefonu jako secondary do czasu wdrożenia wiarygodnego pomiaru połączeń.

### Etap 3 — landingi

- rozbudować wspólny szablon o dowody i drugie CTA;
- wprowadzić treści i pola warunkowe per usługa;
- skorygować wskazane roszczenia i nieścisłości;
- wyłączyć z builda utylizację;
- uruchomić falę 1, potem dopiero falę 2.

### Etap 4 — techniczne SEO

- uprościć sitemapę i dodać testy spójności;
- scentralizować rejestr tras;
- pozostawić otwarty crawling `/lp/`;
- dodać redirecty, nagłówki i cache;
- dodać Open Graph i zweryfikowane LocalBusiness;
- zoptymalizować obrazy i logo.

### Etap 5 — QA przedprodukcyjne

- build z czystej instalacji zależności;
- crawl wygenerowanego `dist`;
- test mobile i desktop wszystkich tras;
- test AdsBot wszystkich final URL-i z parametrami;
- test formularza sukces, błąd, podwójne kliknięcie, spam i upload;
- test konwersji oraz deduplikacji;
- Rich Results Test;
- PageSpeed/Lighthouse i WebPageTest na kluczowych LP;
- test polityki prywatności, zgód i odrzucenia cookies;
- test 404 oraz kanonicznych przekierowań.

### Etap 6 — publikacja i kontrola

- opublikować serwis bez uruchamiania reklam;
- sprawdzić odpowiedzi 200/301/404 z produkcji;
- przesłać sitemapę w Google Search Console;
- sprawdzić URL Inspection dla strony głównej i głównych usług;
- przeprowadzić test miejsca docelowego w Google Ads;
- wysłać rzeczywisty testowy lead z każdej klasy LP;
- dopiero po potwierdzeniu leadów i tagów uruchomić kampanie falami;
- po 24–48 godzinach sprawdzić odrzucenia Ads, status tagu i zgodność liczby leadów z CRM/skrzynką;
- po 7 i 30 dniach ocenić konwersję per grupa i nie łączyć danych podobnych landingów bez rozróżnienia sluga.

## Bramka „Ads Ready”

Reklamy mogą zostać włączone dopiero, gdy każdy final URL spełnia wszystkie warunki:

- [ ] zwraca stabilne 200 bez redirect chain;
- [ ] jest dostępny dla AdsBot desktop i mobile;
- [ ] ma `noindex, follow` i self-canonical bez parametrów;
- [ ] nie znajduje się w sitemapie i menu głównym;
- [ ] treść dokładnie odpowiada grupie reklam;
- [ ] pokazuje prawdziwe zdjęcia i dowody odpowiednie dla usługi;
- [ ] formularz przechodzi pełny test end-to-end;
- [ ] zapisuje slug, typ usługi i atrybucję kampanii;
- [ ] pozwala przekazać zdjęcia tam, gdzie wymaga tego wycena;
- [ ] konwersja uruchamia się raz i dopiero po sukcesie;
- [ ] telefon, SMS, e-mail, NAP i polityka są poprawne;
- [ ] polityka prywatności i Consent Mode są sfinalizowane;
- [ ] landing przeszedł test mobilny i wydajnościowy;
- [ ] w macierzy Ads ma właściciela i datę ostatniego QA.

## Backlog wdrożeniowy

| ID | Priorytet | Zadanie | Rozmiar | Kryterium odbioru |
|---|---|---|---|---|
| P0-01 | P0 | Serwerowy endpoint leadów | M | rzeczywisty lead dociera raz, błąd nie daje sukcesu |
| P0-02 | P0 | Formularze `/wycena/` i `/lp/` | M | poprawna walidacja, mobile, statusy i fallback |
| P0-03 | P0 | Upload zdjęć | M/L | zdjęcia trafiają bezpiecznie do właściwego leada |
| P0-04 | P0 | Atrybucja Ads | M | GCLID/UTM/ValueTrack widoczne przy leadzie |
| P0-05 | P0 | Pomiar konwersji po sukcesie | M | jedna konwersja na jedno przyjęte zgłoszenie |
| P0-06 | P0 | Finalna polityka i consent | M | brak tekstów roboczych; Tag Assistant bez błędów |
| P0-07 | P0 | Wyłączenie utylizacji z builda | S | URL zwraca 404/410 i nie jest używany w Ads |
| P0-08 | P0 | Zatwierdzenie roszczeń i opinii | S/M | każdy fakt ma potwierdzenie albo został złagodzony |
| P0-09 | P0 | Macierz Ads → LP | S | każdy ad group ma jeden final URL i status QA |
| P1-01 | P1 | Sekcje dowodów na LP | M | realizacje/opinie/sprzęt dopasowane do każdej intencji |
| P1-02 | P1 | Poprawa `service_type` i pól warunkowych | M | leady AGD/lodówki/gabarytów są rozdzielone |
| P1-03 | P1 | Centralny rejestr tras | M | sitemap/menu/status korzystają z jednego źródła |
| P1-04 | P1 | Testy sitemapy i meta | S/M | build blokuje niezgodności index/canonical/status |
| P1-05 | P1 | Optymalizacja obrazów i logo | M | responsywne warianty; poprawne wymiary; lepszy LCP |
| P1-06 | P1 | Redirecty, cache i nagłówki | S/M | jeden host/HTTPS, parametry zachowane, nagłówki sprawdzone |
| P1-07 | P1 | Open Graph i LocalBusiness | S/M | testy walidacyjne bez błędów krytycznych |
| P1-08 | P1 | Decyzja o `/magazyny/` | S | strona gotowa i indeksowana albo usunięta z nawigacji |
| P2-01 | P2 | Indeksowalny content o kosztach | M | osobna strona oparta na danych, jeśli potwierdza ją analiza popytu |
| P2-02 | P2 | Enhanced/offline conversions | M/L | wdrożone po analizie prawnej i jakości danych |
| P2-03 | P2 | Dokumentacja projektu | S | README opisuje build, deploy, env, tracking i QA |

## Ostateczna rekomendacja

Nie należy teraz kierować reklam na istniejące `/lp/`. Ich struktura indeksowania jest poprawna, lecz lejek leadowy i pomiar nie istnieją. Najpierw trzeba zamknąć P0: działający formularz, prawdziwy sukces konwersji, atrybucję, finalną politykę, usunięcie nieaktywnej utylizacji i potwierdzenie treści. Dopiero potem warto inwestować w kolejne landing pages i optymalizację stawek, ponieważ bez tych elementów kampania będzie generowała koszt bez wiarygodnego pomiaru i bez pełnej możliwości kontaktu.
