# Mapa zdjęć — WHM Przeprowadzki

Aktualizacja: 2 września 2026

## Stan bieżący

Commit `668969b` usunął stare fotografie, a aktualny commit bazowy `8007f8f` dodał przygotowany zestaw 65 plików graficznych, w tym logo WHM. Build stagingowy generuje 182 elementy `img`; wszystkie wskazane pliki istnieją i żadna strona nie korzysta z pola zastępczego.

Komponent `SafeImage.astro` pozostaje zabezpieczeniem na przyszłość: sprawdza plik podczas builda, zachowuje proporcje przy jego braku i nie wysyła błędnego requestu. Brakujące obrazy nie trafiają też do Open Graph, Twitter Card ani pola `image` w danych strukturalnych.

## Aktywne grupy materiałów

| Zastosowanie | Katalog |
|---|---|
| Logo i hero | `/images/LOGO_WHM.svg`, `/images/hero/` |
| Przeprowadzki domów i mieszkań | `/images/home-moving/`, `/images/kielce-moving/` |
| Firmy i instytucje | `/images/office-moving/`, `/images/institution-moving/` |
| Pakowanie, meble i materiały | `/images/packing-services/`, `/images/furniture-assembly/`, `/images/moving-boxes/`, `/images/shop-materials/` |
| Instrumenty i ładunki specjalne | `/images/transport-pianin-i-fortepianow/`, `/images/transport-gabarytow/`, `/images/transport-pieca/`, `/images/transport-sejfu/` |
| Materiały pomocnicze | `/images/guides/`, `/images/testimonials/` |

## Przypisania wymagające akceptacji merytorycznej

| Miejsce | Plik |
|---|---|
| Relokacja Prokuratur Kielce | `/images/institution-moving/przeprowadzki-instytucji-4.webp` |
| Relokacja Teatru Żeromskiego | `/images/institution-moving/przeprowadzki-instytucji-2.webp` |
| Transport zabytkowego obrazu | `/images/transport-gabarytow/transport-gabarytow-kielce-6.webp` |

Przed uruchomieniem produkcji właściciel powinien potwierdzić, że powyższe fotografie pokazują wskazane realizacje i mają zgodę na publikację. Pełne przypisanie ścieżek znajduje się w `src/data/home.ts`, `src/data/services.ts`, `src/data/realizacje.ts` oraz `src/data/assets.ts`.

Po każdej zmianie materiałów należy uruchomić `npm run build` oraz `npm run verify:site` i sprawdzić kadry na szerokości 390 px oraz 1440 px.
