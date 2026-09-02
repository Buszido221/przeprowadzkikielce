# SEO — źródło prawdy

## Dane firmy

- **Marka:** WHM Przeprowadzki
- **Pełna nazwa prawna:** WHM TRANSPORT MATEUSZ KONDERA
- **Właściciel:** Mateusz Kondera
- **NIP:** 9591920724
- **Domena kanoniczna:** https://przeprowadzkikielce.pl/
- **Telefon wyświetlany:** +48 720 719 022
- **Telefon techniczny:** +48720719022
- **E-mail:** kontakt@whmprzeprowadzkikielce.pl
- **Adres operacyjny:** Lotnicza 60A, 26-001 Masłów Pierwszy
- **Adres rejestrowy:** Nowy Świat 44a/14, 25-522 Kielce
- **Godziny kontaktu:** Pn–Pt 08:00–20:00, Sob 08:00–18:00
- **Wizyta wymaga wcześniejszego kontaktu telefonicznego**
- **Działalność od:** 2019
- **Zasięg:** Kielce, województwo świętokrzyskie, przeprowadzki ogólnopolskie
- **Ubezpieczenie:** do 1 mln zł (warunki potwierdzane dla zlecenia)
- **Magazynki:** ogrzewane boksy 2–9 m², Masłów Pierwszy koło Kielc
- **Facebook:** https://www.facebook.com/whmprzeprowadzki/
- **Instagram:** https://www.instagram.com/whm_przeprowadzki/
- **Google Maps:** https://maps.app.goo.gl/G3BqHNabtfWtzAhk7
- **WHM Shop:** https://whmshop.pl/ (osobna domena)

## Zakazane dane

- Sandomierska 318A
- kontakt@przeprowadzkikielce.pl
- 150 000 zł
- przeprowadzki międzynarodowe
- wywóz gruzu, złomu, odpadów budowlanych
- sztuczne ceny, oceny, liczby opinii, współrzędne, daty realizacji

## Centralny rejestr SEO

Wszystkie metadane znajdują się w **`src/data/seo.ts`**. Funkcja `getSeo(slug)` zwraca obiekt `SeoPage` z polami: title, description, h1, robots, canonical, ogType, schemaType, ogImage, ogImageAlt, intent.

**Nie duplikuj** danych firmy, title, description ani canonical w plikach .astro, routes.ts, services.ts, consolidatedServices.ts ani realizacje.ts.

## Mapa tras i intencji

| Slug | Intencja | Schema type | Robots |
|------|----------|-------------|--------|
| `/` | firma przeprowadzkowa Kielce | WebPage | index, follow |
| `/uslugi/` | usługi przeprowadzkowe Kielce | CollectionPage | index, follow |
| `/przeprowadzki/` | przeprowadzki mieszkań i domów Kielce | Service | index, follow |
| `/transport-mebli-kielce/` | transport mebli Kielce | Service | index, follow |
| `/pakowanie-i-zabezpieczanie/` | pakowanie do przeprowadzki Kielce | Service | index, follow |
| `/transport-pianin-i-fortepianow-kielce/` | transport pianin Kielce | Service | index, follow |
| `/transport-specjalistyczny/` | transport specjalistyczny Kielce | Service | index, follow |
| `/oproznianie-mieszkan-i-wywoz-mebli/` | opróżnianie mieszkań Kielce | Service | index, follow |
| `/dla-firm/` | relokacje firm i instytucji Kielce | CollectionPage | index, follow |
| `/przeprowadzki-firm-i-instytucji/` | przeprowadzki biur i firm Kielce | Service | index, follow |
| `/magazyny-kielce/` | magazynki Kielce | SelfStorage | index, follow |
| `/standard-whm/` | standard i bezpieczeństwo przeprowadzki | WebPage | index, follow |
| `/realizacje/` | realizacje przeprowadzek Kielce | CollectionPage | index, follow |
| `/realizacje/relokacja-prokuratur-kielce/` | relokacja instytucji | Article | index, follow |
| `/realizacje/relokacja-teatru-zeromskiego-kielce/` | relokacja instytucji kultury | Article | index, follow |
| `/realizacje/relokacja-tvp3-kielce/` | relokacja archiwum | Article | index, follow |
| `/realizacje/relokacja-biblioteki-busko-zdroj/` | relokacja księgozbioru | Article | index, follow |
| `/realizacje/transport-zabytkowego-obrazu-zamek-szydlowieckich/` | transport dzieła sztuki | Article | index, follow |
| `/realizacje/transport-fortepianow-zamek-szydlowieckich/` | transport fortepianów | Article | index, follow |
| `/realizacje/transport-fortepianu-fazioli/` | transport fortepianu koncertowego | Article | index, follow |
| `/realizacje/relokacje-techniczne-i-ciezkie-ladunki/` | transport ciężkich ładunków | Article | index, follow |
| `/jak-to-dziala/` | proces przeprowadzki | WebPage | index, follow |
| `/o-nas/` | firma przeprowadzkowa WHM | AboutPage | index, follow |
| `/obszar-dzialania/` | obszar działania przeprowadzek | WebPage | index, follow |
| `/poradniki/` | poradniki przeprowadzkowe | CollectionPage | index, follow |
| `/whm-shop/` | materiały przeprowadzkowe | WebPage | index, follow |
| `/kontakt/` | kontakt przeprowadzki Kielce | ContactPage | index, follow |
| `/polityka-prywatnosci/` | polityka prywatności | WebPage | noindex, follow |
| `/404` | 404 | WebPage | noindex, nofollow |

## Identyfikatory Schema.org

- Firma: `https://przeprowadzkikielce.pl/#business`
- Witryna: `https://przeprowadzkikielce.pl/#website`
- Strona: `[canonical]#webpage`
- Breadcrumb: `[canonical]#breadcrumb`
- Usługa: `[canonical]#service`
- Artykuł: `[canonical]#article`
- Magazyny: `https://przeprowadzkikielce.pl/magazyny-kielce/#selfstorage`

## Zasady aktualizacji metadanych

1. Wszystkie zmiany w `src/data/seo.ts`
2. Nie dodawaj title/description w plikach .astro
3. Nie dodawaj ręcznych canonicali — Layout generuje je automatycznie
4. Nie dodawaj ręcznych skryptów JSON-LD — używaj `buildSchemaGraph()`
5. FAQ schema przez `buildFaqSchema()` — tylko dla pytań widocznych na stronie

## Dodawanie nowej usługi

1. Dodaj wpis w `seoPages` w `src/data/seo.ts`
2. Dodaj trasę w `src/data/routes.ts` (tylko name, slug, category)
3. Utwórz stronę w `src/pages/` używając `getSeo()` i `buildSchemaGraph()`
4. Uruchom `npm run verify:seo` po buildzie
