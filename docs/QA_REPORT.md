# Raport QA przebudowy WHM

Data: 2 września 2026

## Zakres

Zweryfikowano projekt po zsynchronizowaniu z bazą `8007f8f`, która dodała finalny zestaw zdjęć i zaktualizowała analitykę. Test obejmuje 28 publicznych tras oraz stronę 404, SEO techniczne, linki i zasoby lokalne, migrację `/lp/`, responsywność, menu, formularze oraz środowiska staging/production.

## Wyniki

| Kontrola | Wynik |
|---|---|
| Build staging | PASS — 29 stron HTML |
| Aktywne katalogi `/lp/` | 0 |
| Publiczne trasy w QA przeglądarkowym | 28 × desktop 1440 px × mobile 390 px |
| H1 i canonical | dokładnie po 1 na każdej publicznej trasie |
| Staging robots | `noindex, nofollow, noarchive` |
| Requesty Google w stagingu | 0 |
| Niedziałające linki i ładowane zasoby lokalne | 0 |
| Pliki graficzne | 65; wszystkie 182 użycia `img` mają istniejący zasób; 0 placeholderów |
| Poziomy overflow | 0 na wszystkich testowanych trasach i viewportach |
| Błędy konsoli | 0 |
| Przekierowania migracyjne | 32 poprawne reguły 301, cele istnieją w buildzie |
| TypeScript | PASS po korekcie bezpiecznego indeksowania `CampaignRecord` |
| Build production z testową konfiguracją | PASS — 29 stron HTML |
| Consent Mode production | PASS — domyślne `denied`, zapis odrzucenia i pełnej zgody |

## Kontrole interakcji

- Menu mobilne zmienia `aria-expanded`, zamyka się klawiszem Escape i zwraca fokus do przycisku.
- Pusty formularz wskazuje wymagane pola i ustawia fokus na pierwszym błędzie.
- Formularz kontaktowy ma kontekst `consumer` mapowany na `b2c`.
- Formularz relokacji firm ma kontekst `business` mapowany na `b2b` i opcjonalne pole firmy/instytucji.
- Symulacja produkcyjna potwierdza widoczny banner bez decyzji, domyślne sygnały zgód `denied` oraz zapis wariantów „odrzuć” i „akceptuj wszystkie”.

## Problem wykryty i usunięty

Na `/realizacje/` długi przycisk powodował poziomy overflow 11 px na viewport 390 px. Dodano zawijanie tekstu i powtórzono test wszystkich tras. W świeżym `campaign.ts` usunięto również niebezpieczne rzutowania, które blokowały ścisłą kontrolę TypeScript.

## Pozostałe kroki zewnętrzne

1. Merytoryczna akceptacja przypisania zdjęć do konkretnych realizacji.
2. Rzeczywisty test EmailJS po ustawieniu zatwierdzonych wartości produkcyjnych.
3. Konfiguracja i test kontenera GTM, GA4, Google Ads i Meta.
4. Potwierdzenie przekierowań jako odpowiedzi HTTP 301 na docelowym hostingu.
5. Wdrożenie produkcyjne, domena i Search Console po osobnej akceptacji.

## Ocena gotowości

Kod, treści, architektura, SEO, zdjęcia i automatyczne QA są gotowe do review stagingowego. Start produkcyjny wymaga wykonania checklisty zewnętrznej i osobnej decyzji właściciela.
