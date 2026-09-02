# Checklista kontrolowanego uruchomienia produkcyjnego

Aktualizacja: 2 września 2026

Repozytorium pozostaje stagingiem do osobnej akceptacji. Kod i materiały zostały zweryfikowane lokalnie; operacji na hostingu i kontach zewnętrznych nie wykonano.

## 1. Akceptacja i konfiguracja

- [ ] Potwierdzić zgodę na publikację zdjęć i przypisania realizacji z `docs/PHOTO_REPLACEMENT_MAP.md`.
- [ ] Ustawić na produkcji:

```text
PUBLIC_SITE_ENV=production
PUBLIC_GTM_ID=GTM-XXXXXXXX
PUBLIC_EMAILJS_SERVICE_ID=...
PUBLIC_EMAILJS_TEMPLATE_ID=...
PUBLIC_EMAILJS_PUBLIC_KEY=...
```

Identyfikatory GA4, Google Ads i Meta należy skonfigurować wewnątrz GTM. Sekrety nie mogą trafić do repozytorium ani zmiennych `PUBLIC_*`.

## 2. Test przed wdrożeniem

1. Uruchomić `npm run build` w trybie staging i `npm run verify:site`.
2. Zbudować lokalnie z kompletem testowych zmiennych produkcyjnych i ponownie uruchomić `npm run verify:site`.
3. Potwierdzić właściwe robots: staging zawsze `noindex, nofollow, noarchive`; produkcja `index, follow` poza polityką prywatności i 404.
4. W podglądzie GTM i DebugView sprawdzić domyślne sygnały zgody `denied`, zmianę po decyzji użytkownika, nazwy zdarzeń i brak PII.
5. Z rzeczywistą konfiguracją EmailJS wysłać po jednym zatwierdzonym leadzie testowym B2C i B2B.
6. Potwierdzić odbiór, polskie znaki, kontekst formularza, atrybucję kampanii i brak PII w analityce.

## 3. Wdrożenie

- [ ] Wdrożyć wskazany, zweryfikowany commit bez zmian bezpośrednio na hostingu.
- [ ] Nie przepinać domeny przed akceptacją właściciela.
- [ ] Potwierdzić obsługę `public/_redirects`; jeśli hosting jej nie wspiera, odwzorować identyczne reguły natywnie.
- [ ] Zweryfikować HTTPS, jeden wariant hosta, końcowe ukośniki, stronę 404 i cache zasobów.
- [ ] Zachować poprzednie wdrożenie jako punkt rollbacku.

## 4. Smoke test po wdrożeniu

- [ ] Telefon `720 719 022` działa w nagłówku, hero, formularzach, stopce i sticky CTA.
- [ ] Wszystkie adresy z `docs/URL_MIGRATION_MAP.md` mają oczekiwane statusy, a 32 reguły migracyjne zwracają HTTP 301.
- [ ] Formularze B2C i B2B wysyłają jedno zgłoszenie i pokazują komunikat sukcesu.
- [ ] Zdjęcia, menu mobilne, fokus, FAQ i kotwice działają na 390 px i desktopie.
- [ ] Produkcja nie ma `noindex` na trasach przeznaczonych do indeksacji.
- [ ] GA4, Ads i Meta uruchamiają się zgodnie z konfiguracją zgód i nie otrzymują PII.
- [ ] Sitemap została przesłana, a Search Console nie zgłasza nowej serii błędów 404.

Szczegóły kampanii i konfiguracji tagów: `docs/MEASUREMENT_AND_ADS_HANDOFF.md`.
