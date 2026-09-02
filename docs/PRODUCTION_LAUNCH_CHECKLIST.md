# Checklista kontrolowanego uruchomienia produkcyjnego

Repozytorium pozostaje stagingiem do osobnej akceptacji. Poniższe kroki nie zostały wykonane na usługach zewnętrznych.

## 1. Zmienne środowiskowe

W stagingu pozostawić `PUBLIC_SITE_ENV=staging` albo nie ustawiać tej zmiennej. W produkcji ustawić dokładnie:

```text
PUBLIC_SITE_ENV=production
PUBLIC_EMAILJS_SERVICE_ID=...
PUBLIC_EMAILJS_TEMPLATE_ID=...
PUBLIC_EMAILJS_PUBLIC_KEY=...
```

Nie umieszczać prywatnych kluczy ani danych klientów w repozytorium. Klucz publiczny EmailJS jest przeznaczony do klienta, ale powinien być ograniczony konfiguracją dostawcy.

## 2. Test przed wdrożeniem

1. Zbudować projekt w trybie staging i potwierdzić `noindex, nofollow, noarchive` oraz brak requestów Google.
2. Zbudować lokalnie z `PUBLIC_SITE_ENV=production` i potwierdzić:
   - docelowe robots dla zwykłych stron,
   - `noindex, follow` dla `/kontakt/` i polityki prywatności,
   - obecność tagu Google wyłącznie w produkcji,
   - jeden canonical, jeden H1 i poprawny JSON-LD,
   - działanie zgody cookies.
3. Z rzeczywistą konfiguracją EmailJS wysłać pojedynczy testowy lead B2C i B2B, używając danych testowych zatwierdzonych do transmisji.
4. Potwierdzić odbiór, kodowanie polskich znaków, kontekst formularza, UTM-y i brak PII w GA4.

## 3. Wdrożenie

- [ ] Wdrożyć zweryfikowany commit bez zmian robionych bezpośrednio na hostingu.
- [ ] Nie przepinać domeny przed akceptacją właściciela projektu.
- [ ] Potwierdzić obsługę pliku `_redirects` przez wybrany hosting.
- [ ] Jeżeli hosting nie wspiera tego formatu, przenieść te same reguły do jego natywnej konfiguracji bez zmiany mapy.
- [ ] Zweryfikować certyfikat HTTPS, jeden wariant hosta i końcowe ukośniki.
- [ ] Sprawdzić stronę 404 oraz nagłówki cache dla obrazów i zasobów `_astro`.

## 4. Smoke test po wdrożeniu

- [ ] Telefon `720 719 022` działa w headerze, hero, formularzu, stopce i sticky CTA.
- [ ] Wszystkie trasy z `docs/URL_MIGRATION_MAP.md` zwracają oczekiwane statusy.
- [ ] Formularz B2C i B2B wysyła oraz pokazuje komunikat sukcesu.
- [ ] Obrazy, menu mobilne, fokus, FAQ i anchor links działają.
- [ ] Brak poziomego scrolla na 390 px i typowym desktopie.
- [ ] Produkcja nie zawiera `noindex` na stronach przeznaczonych do indeksacji.
- [ ] GA4 ładuje się zgodnie ze zgodą; staging nadal nie ładuje Google.

## 5. Po starcie

- [ ] Zaktualizować Google Ads według `docs/MEASUREMENT_AND_ADS_HANDOFF.md`.
- [ ] Przesłać sitemap i monitorować Search Console.
- [ ] Obserwować błędy EmailJS, 404 i przekierowania.
- [ ] Zachować poprzednie wdrożenie jako punkt bezpiecznego rollbacku.
- [ ] Nie usuwać zabezpieczenia stagingu z innych środowisk.
