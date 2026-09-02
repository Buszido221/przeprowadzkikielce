# WHM Przeprowadzki — instrukcje dla agentów

## Stack
- Astro 5 (statyczny output, bez SSR)
- Manrope hostowany lokalnie w `/public/fonts`
- EmailJS dla wspólnego formularza kontaktowego
- Google Tag Manager (`PUBLIC_GTM_ID`) i produkcyjny `Analytics.astro` z Consent Mode
- staging bez kodu pomiarowego i z `noindex, nofollow, noarchive`

## Strony
- `/kontakt/` — wspólny kontakt i formularz; `/wycena/` przekierowuje tutaj 301
- strony usług zawierają sekcje wspólnego formularza z `id="formularz"`
- aktywne trasy i wewnętrzne linki `/lp/` są zabronione; historyczne adresy obsługuje `public/_redirects`

## Konfiguracja
- Aktualne zmienne środowiskowe są opisane w `.env.example`.
- `npm run build` tworzy statyczny serwis w `dist/`.
- `npm run verify:site` wykonuje pełne QA zbudowanego serwisu.

## Konwencje
- `SectionHeading` przyjmuje `alignment="center" | "left"` (domyślnie `left`).
- Sekcje dzielone używają breakpointu 1024 px.
- Linki wyceny prowadzą do `/kontakt/#formularz`.
- Brakujące pliki graficzne obsługuje `SafeImage.astro`; nie wolno zastępować prawdziwych zdjęć WHM stockami ani grafikami generowanymi.
