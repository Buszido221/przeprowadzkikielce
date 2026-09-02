# SEO — checklist wdrożeniowy

## Automatycznie wykonane w kodzie

- [x] Centralny rejestr metadanych (`src/data/seo.ts`)
- [x] Jeden title, description, robots, canonical na stronę
- [x] Self-referencing canonical (HTTPS, bez www, z końcowym ukośnikiem)
- [x] Brak canonicala na stronie 404
- [x] Open Graph z rzeczywistymi wymiarami obrazów z manifestu
- [x] Twitter Card (summary_large_image)
- [x] `og:locale="pl_PL"`, `og:site_name="WHM Przeprowadzki"`
- [x] `<html lang="pl">`
- [x] `theme-color` ustawiony na ciemny kolor projektu
- [x] Favicon: `/favicon.svg`
- [x] Schema.org `@graph` z MovingCompany, WebSite, WebPage/Service/Article/SelfStorage, BreadcrumbList
- [x] Jeden `#business` na wszystkich stronach
- [x] Absolutne URL-e w `@id`, `url`, breadcrumbs
- [x] `areaServed` typowane (City, AdministrativeArea, Country)
- [x] `sameAs` tylko Facebook i Instagram
- [x] `hasMap` z potwierdzonym adresem Google Maps
- [x] `openingHoursSpecification` zgodne ze źródłem prawdy
- [x] Brak `aggregateRating`, `review`, `priceRange`, `geo`
- [x] Brak `datePublished`/`dateModified` w Article
- [x] FAQPage tylko dla pytań widocznych na stronie
- [x] Breadcrumb Schema zgodny z widocznym breadcrumbem
- [x] Sitemap generowana z rejestru (27 URL-i, bez polityki prywatności i 404)
- [x] `robots.txt` wskazuje sitemap, nie blokuje CSS/JS/obrazów
- [x] Staging: `noindex, nofollow, noarchive`
- [x] Produkcja: `index, follow` dla stron indeksowalnych
- [x] Polityka prywatności: `noindex, follow`
- [x] 404: `noindex, nofollow`
- [x] Brak linków do `/lp/`, `/wycena/`
- [x] Brak starych danych (Sandomierska, 150 000 zł, stary e-mail)
- [x] `npm run verify:seo` przechodzi
- [x] Build produkuje 29 stron HTML

## Ręcznie po wdrożeniu

- [ ] Potwierdź, że produkcja ma `PUBLIC_SITE_ENV=production`
- [ ] Sprawdź Profil Firmy Google: nazwa, adres, telefon, godziny, domena, kategorie
- [ ] Sprawdź, czy lokalizacja w Profilu Google jest publiczna czy po umówieniu
- [ ] Zaktualizuj stare wpisy w katalogach NAP (WeNet, itp.)
- [ ] Prześlij sitemap w Google Search Console
- [ ] Sprawdź przekierowania starych `/lp/` po wdrożeniu
- [ ] Rich Results Test na kluczowych stronach
- [ ] Schema Markup Validator na grafie
- [ ] Inspekcja raportu indeksowania i usuwania starych LP
- [ ] Przepięcie końcowych URL-i w Google Ads i Meta Ads
- [ ] Monitoring title i description przepisywanych przez Google

## Brakujące dane (do uzupełnienia)

- **Logo:** Plik `LOGO_WHM.svg` nie istnieje. Tymczasowo używany `favicon.svg`. Gdy logo będzie dostępne, dodaj do `public/images/` i zaktualizuj Header.
- **Współrzędne geo:** Nie dodane do Schema (brak potwierdzonych współrzędnych). Dodaj po potwierdzeniu z wiarygodnego źródła.
- **Daty publikacji case studies:** Nie dodane do Article schema (brak utrzymywanego źródła dat).
