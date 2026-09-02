# WHM Przeprowadzki — Instrukcje dla agentów

## Stack
- Astro 5 (static output, no SSR)
- Manrope font (locally hosted in /public/fonts, no @fontsource)
- EmailJS for contact form (configured via env vars)
- Google Analytics 4 (configured via PUBLIC_GA4_ID env var)

## Pages
- /kontakt/ — unified contact + form page (redirects from /wycena/)
- All service pages include inline form sections with id="formularz"
- /wycena/ redirects 301 to /kontakt/

## Environment variables
See .env.example for all required vars.

## Build
- `npm run build` — production build
- Output: static HTML in dist/

## Key conventions
- SectionHeading accepts alignment="center" | "left" (default: left)
- Split sections use 1024px breakpoint (not 768px)
- All /wycena/ links must point to /kontakt/#formularz
- Cookie consent: Basic Consent Mode (analytics_storage only, no ad_storage)
