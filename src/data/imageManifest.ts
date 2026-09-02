export type Orientation = 'portrait' | 'landscape' | 'square';

export interface ImageAsset {
  src: string;
  width: number;
  height: number;
  orientation: Orientation;
  alt: string;
  objectPosition?: string;
  category: string;
}

function orient(w: number, h: number): Orientation {
  const ratio = w / h;
  if (ratio > 1.05) return 'landscape';
  if (ratio < 0.95) return 'portrait';
  return 'square';
}

function img(src: string, width: number, height: number, alt: string, category: string, objectPosition?: string): ImageAsset {
  return { src, width, height, orientation: orient(width, height), alt, objectPosition, category };
}

const manifest: Record<string, ImageAsset> = {
  // Hero
  '/images/hero/hero-1.webp': img('/images/hero/hero-1.webp', 1152, 581, 'Samochód WHM Przeprowadzki przy realizacji zlecenia w Kielcach', 'hero'),
  '/images/hero/hero-2.webp': img('/images/hero/hero-2.webp', 1152, 581, 'Zabezpieczony instrument podczas transportu WHM', 'hero'),
  '/images/hero/hero-3.webp': img('/images/hero/hero-3.webp', 1152, 581, 'Zespół WHM podczas realizacji dla firmy', 'hero'),
  '/images/hero/hero-4.webp': img('/images/hero/hero-4.webp', 1152, 581, 'Pracownicy WHM podczas wynoszenia mebla', 'hero'),

  // Kielce moving
  '/images/kielce-moving/przeprowadzki-kielce-1.webp': img('/images/kielce-moving/przeprowadzki-kielce-1.webp', 1536, 2048, 'Samochód WHM podczas realizacji w Kielcach', 'kielce-moving', 'center top'),
  '/images/kielce-moving/przeprowadzki-kielce-2.webp': img('/images/kielce-moving/przeprowadzki-kielce-2.webp', 1128, 2000, 'Zabezpieczone meble w samochodzie WHM', 'kielce-moving', 'center top'),
  '/images/kielce-moving/przeprowadzki-kielce-3.webp': img('/images/kielce-moving/przeprowadzki-kielce-3.webp', 768, 1024, 'Przenoszenie zabezpieczonego mebla przez zespół WHM', 'kielce-moving', 'center top'),
  '/images/kielce-moving/przeprowadzki-kielce-4.webp': img('/images/kielce-moving/przeprowadzki-kielce-4.webp', 768, 1024, 'Zabezpieczony i ustabilizowany ładunek w samochodzie WHM', 'kielce-moving', 'center top'),
  '/images/kielce-moving/przeprowadzki-kielce-5.webp': img('/images/kielce-moving/przeprowadzki-kielce-5.webp', 768, 1024, 'Zespół WHM podczas wynoszenia wyposażenia z mieszkania', 'kielce-moving', 'center top'),
  '/images/kielce-moving/przeprowadzki-kielce-6.webp': img('/images/kielce-moving/przeprowadzki-kielce-6.webp', 768, 1024, 'Samochód WHM na trasie w regionie świętokrzyskim', 'kielce-moving', 'center top'),
  '/images/kielce-moving/przeprowadzki-kielce-7.webp': img('/images/kielce-moving/przeprowadzki-kielce-7.webp', 768, 1024, 'Załadunek wyposażenia do samochodu WHM', 'kielce-moving', 'center top'),
  '/images/kielce-moving/przeprowadzki-kielce-8.webp': img('/images/kielce-moving/przeprowadzki-kielce-8.webp', 768, 1024, 'Przenoszenie dużego zabezpieczonego elementu przez zespół WHM', 'kielce-moving', 'center top'),

  // Home moving
  '/images/home-moving/przeprowadzki-domow-kielce-1.webp': img('/images/home-moving/przeprowadzki-domow-kielce-1.webp', 600, 800, 'Przeprowadzka domu realizowana przez WHM', 'home-moving', 'center top'),
  '/images/home-moving/przeprowadzki-domow-kielce-2.webp': img('/images/home-moving/przeprowadzki-domow-kielce-2.webp', 768, 1024, 'Zabezpieczone wyposażenie przed domem', 'home-moving', 'center top'),
  '/images/home-moving/przeprowadzki-domow-kielce-3.webp': img('/images/home-moving/przeprowadzki-domow-kielce-3.webp', 600, 800, 'Zabezpieczone wyposażenie przygotowane do transportu przed domem', 'home-moving', 'center top'),

  // Office moving
  '/images/office-moving/przeprowadzki-biura-1.webp': img('/images/office-moving/przeprowadzki-biura-1.webp', 600, 800, 'Relokacja biura prowadzona przez zespół WHM', 'office-moving', 'center top'),
  '/images/office-moving/przeprowadzki-biura-2.webp': img('/images/office-moving/przeprowadzki-biura-2.webp', 768, 1024, 'Zabezpieczone wyposażenie biura przygotowane do przeniesienia', 'office-moving', 'center top'),
  '/images/office-moving/przeprowadzki-biura-3.webp': img('/images/office-moving/przeprowadzki-biura-3.webp', 600, 800, 'Wyposażone pomieszczenie biurowe podczas realizacji', 'office-moving', 'center top'),
  '/images/office-moving/przeprowadzki-biura-4.webp': img('/images/office-moving/przeprowadzki-biura-4.webp', 600, 800, 'Transport dużego elementu z wykorzystaniem sprzętu WHM', 'office-moving', 'center top'),

  // Institution moving
  '/images/institution-moving/przeprowadzki-instytucji-3.webp': img('/images/institution-moving/przeprowadzki-instytucji-3.webp', 768, 1024, 'Samochody WHM podczas realizacji przy obiekcie instytucjonalnym', 'institution-moving', 'center top'),
  '/images/institution-moving/przeprowadzki-instytucji-4.webp': img('/images/institution-moving/przeprowadzki-instytucji-4.webp', 768, 1024, 'Zabezpieczone wyposażenie instytucji podczas relokacji WHM', 'institution-moving', 'center top'),
  '/images/institution-moving/przeprowadzki-instytucji-5.webp': img('/images/institution-moving/przeprowadzki-instytucji-5.webp', 768, 1024, 'Transport szaf i wyposażenia biurowego przez zespół WHM', 'institution-moving', 'center top'),
  '/images/institution-moving/przeprowadzki-instytucji-6.webp': img('/images/institution-moving/przeprowadzki-instytucji-6.webp', 768, 1024, 'Zabezpieczone archiwa i dokumentacja podczas transportu', 'institution-moving', 'center top'),

  // Packing services
  '/images/packing-services/pakowanie-przeprowadzki-kielce-1.webp': img('/images/packing-services/pakowanie-przeprowadzki-kielce-1.webp', 600, 800, 'Dokładnie zabezpieczone elementy wyposażenia przed transportem', 'packing-services', 'center top'),
  '/images/packing-services/pakowanie-przeprowadzki-kielce-2.webp': img('/images/packing-services/pakowanie-przeprowadzki-kielce-2.webp', 768, 1024, 'Koce ochronne zabezpieczające meble podczas transportu', 'packing-services', 'center top'),
  '/images/packing-services/pakowanie-przeprowadzki-kielce-3.webp': img('/images/packing-services/pakowanie-przeprowadzki-kielce-3.webp', 768, 1024, 'Duży mebel zabezpieczony pokrowcem i pasami', 'packing-services', 'center top'),
  '/images/packing-services/pakowanie-przeprowadzki-kielce-5.webp': img('/images/packing-services/pakowanie-przeprowadzki-kielce-5.webp', 600, 800, 'Zabezpieczenie mienia przed przeprowadzką', 'packing-services', 'center top'),
  '/images/packing-services/pakowanie-przeprowadzki-kielce-6.webp': img('/images/packing-services/pakowanie-przeprowadzki-kielce-6.webp', 768, 1024, 'Oznaczone kartony przygotowane do transportu', 'packing-services', 'center top'),

  // Moving boxes
  '/images/moving-boxes/kartony-do-przeprowadzki-1.webp': img('/images/moving-boxes/kartony-do-przeprowadzki-1.webp', 600, 800, 'Kartony przeprowadzkowe ułożone i gotowe do pakowania', 'moving-boxes', 'center top'),
  '/images/moving-boxes/kartony-do-przeprowadzki-2.webp': img('/images/moving-boxes/kartony-do-przeprowadzki-2.webp', 768, 1024, 'Kartony przeprowadzkowe podczas realnej realizacji WHM', 'moving-boxes', 'center top'),
  '/images/moving-boxes/kartony-do-przeprowadzki-3.webp': img('/images/moving-boxes/kartony-do-przeprowadzki-3.webp', 768, 1024, 'Pojemniki transportowe WHM', 'moving-boxes', 'center top'),
  '/images/moving-boxes/kartony-do-przeprowadzki-4.webp': img('/images/moving-boxes/kartony-do-przeprowadzki-4.webp', 768, 1024, 'Oznaczone kartony przeprowadzkowe przygotowane do transportu', 'moving-boxes', 'center top'),
  '/images/moving-boxes/pojemniki-przeprowadzkowe-1.webp': img('/images/moving-boxes/pojemniki-przeprowadzkowe-1.webp', 768, 1024, 'Plombowane pojemniki transportowe WHM', 'moving-boxes', 'center top'),
  '/images/moving-boxes/pojemniki-przeprowadzkowe-2.webp': img('/images/moving-boxes/pojemniki-przeprowadzkowe-2.webp', 768, 1024, 'Pojemniki wspierające relokacje i magazynowanie', 'moving-boxes', 'center top'),

  // Furniture assembly
  '/images/furniture-assembly/montaz-demontaz-mebli-1.webp': img('/images/furniture-assembly/montaz-demontaz-mebli-1.webp', 768, 1024, 'Demontaż mebla przed transportem', 'furniture-assembly', 'center top'),
  '/images/furniture-assembly/montaz-demontaz-mebli-2.webp': img('/images/furniture-assembly/montaz-demontaz-mebli-2.webp', 768, 1024, 'Uporządkowane elementy mebla po demontażu przygotowane do transportu', 'furniture-assembly', 'center top'),

  // Standard WHM
  '/images/standard-whm/dedykowane-pokrowce-1.webp': img('/images/standard-whm/dedykowane-pokrowce-1.webp', 600, 800, 'Dedykowane pokrowce ochronne na meble', 'standard-whm', 'center top'),
  '/images/standard-whm/koce-przeprowadzkowe-1.webp': img('/images/standard-whm/koce-przeprowadzkowe-1.webp', 600, 800, 'Koce ochronne do zabezpieczania mebli podczas transportu', 'standard-whm', 'center top'),
  '/images/standard-whm/zabezpieczenia-1.webp': img('/images/standard-whm/zabezpieczenia-1.webp', 768, 1024, 'Pasy i zabezpieczenia stabilizujące ładunek', 'standard-whm', 'center top'),
  '/images/standard-whm/zabezpieczenia-2.webp': img('/images/standard-whm/zabezpieczenia-2.webp', 768, 1024, 'Wózki i przygotowanie mienia do wynoszenia', 'standard-whm', 'center top'),
  '/images/standard-whm/sztywna-zabudowa-1.webp': img('/images/standard-whm/sztywna-zabudowa-1.webp', 768, 1024, 'Sztywna zabudowa przestrzeni ładunkowej samochodu WHM', 'standard-whm', 'center top'),

  // Transport mebli
  '/images/transport-mebli/transport-mebli-kielce-1.webp': img('/images/transport-mebli/transport-mebli-kielce-1.webp', 600, 800, 'Zabezpieczony mebel przygotowany do transportu przez zespół WHM', 'transport-mebli', 'center top'),
  '/images/transport-mebli/transport-mebli-kielce-2.webp': img('/images/transport-mebli/transport-mebli-kielce-2.webp', 768, 1024, 'Meble przygotowane do bezpiecznego przewozu', 'transport-mebli', 'center top'),

  // Transport pianin
  '/images/transport-pianin-i-fortepianow/transport-pianin-i-fortepianow-kielce-1.webp': img('/images/transport-pianin-i-fortepianow/transport-pianin-i-fortepianow-kielce-1.webp', 600, 800, 'Pianino zabezpieczone pokrowcami i pasami przed wyniesieniem', 'transport-pianin', 'center top'),
  '/images/transport-pianin-i-fortepianow/transport-pianin-i-fortepianow-kielce-2.webp': img('/images/transport-pianin-i-fortepianow/transport-pianin-i-fortepianow-kielce-2.webp', 768, 1024, 'Instrument owinięty materiałem ochronnym podczas przygotowania', 'transport-pianin', 'center top'),
  '/images/transport-pianin-i-fortepianow/transport-pianin-i-fortepianow-kielce-3.webp': img('/images/transport-pianin-i-fortepianow/transport-pianin-i-fortepianow-kielce-3.webp', 768, 1024, 'Pianino zabezpieczone pokrowcami i pasami przed transportem', 'transport-pianin', 'center top'),
  '/images/transport-pianin-i-fortepianow/transport-pianin-i-fortepianow-kielce-4.webp': img('/images/transport-pianin-i-fortepianow/transport-pianin-i-fortepianow-kielce-4.webp', 1024, 1365, 'Zabezpieczony instrument gotowy do przeniesienia przez zespół WHM', 'transport-pianin', 'center top'),

  // Transport gabarytow
  '/images/transport-gabarytow/transport-gabarytow-kielce-1.webp': img('/images/transport-gabarytow/transport-gabarytow-kielce-1.webp', 768, 1024, 'Uprzęże transportowe i sprzęt WHM', 'transport-gabarytow', 'center top'),
  '/images/transport-gabarytow/transport-gabarytow-kielce-3.webp': img('/images/transport-gabarytow/transport-gabarytow-kielce-3.webp', 768, 1024, 'Przenoszenie dużego zabezpieczonego przedmiotu przez zespół WHM', 'transport-gabarytow', 'center top'),
  '/images/transport-gabarytow/transport-gabarytow-kielce-4.webp': img('/images/transport-gabarytow/transport-gabarytow-kielce-4.webp', 768, 1024, 'Przygotowanie drogi transportu przez zespół WHM', 'transport-gabarytow', 'center top'),
  '/images/transport-gabarytow/transport-gabarytow-kielce-5.webp': img('/images/transport-gabarytow/transport-gabarytow-kielce-5.webp', 768, 1024, 'Praca ze schodołazem podczas przenoszenia ciężkiego przedmiotu', 'transport-gabarytow', 'center top'),
  '/images/transport-gabarytow/transport-gabarytow-kielce-6.webp': img('/images/transport-gabarytow/transport-gabarytow-kielce-6.webp', 768, 1024, 'Wyposażenie wymagające ostrożnego przeniesienia przez zespół WHM', 'transport-gabarytow', 'center top'),
  '/images/transport-gabarytow/transport-gabarytow-kielce-7.webp': img('/images/transport-gabarytow/transport-gabarytow-kielce-7.webp', 720, 900, 'Duży zabezpieczony przedmiot podnoszony przy użyciu specjalistycznego sprzętu', 'transport-gabarytow', 'center top'),

  // Transport lodowki
  '/images/transport-lodowki/transport-lodowki-kielce-1.webp': img('/images/transport-lodowki/transport-lodowki-kielce-1.webp', 600, 800, 'Zabezpieczona lodówka przygotowana do transportu', 'transport-lodowki', 'center top'),
  '/images/transport-lodowki/transport-lodowki-kielce-2.webp': img('/images/transport-lodowki/transport-lodowki-kielce-2.webp', 768, 1024, 'Zabezpieczona lodówka przygotowana do przeniesienia', 'transport-lodowki', 'center top'),

  // Transport pieca
  '/images/transport-pieca/transport-pieca-kielce-1.webp': img('/images/transport-pieca/transport-pieca-kielce-1.webp', 768, 1024, 'Ciężkie urządzenie przygotowane do przemieszczenia', 'transport-pieca', 'center top'),

  // Transport sejfu
  '/images/transport-sejfu/transport-sejfu-kielce-1.webp': img('/images/transport-sejfu/transport-sejfu-kielce-1.webp', 768, 1024, 'Transport sejfu i szafy pancernej przez WHM', 'transport-sejfu', 'center top'),

  // Shop materials
  '/images/shop-materials/sklep-z-materialami-1.webp': img('/images/shop-materials/sklep-z-materialami-1.webp', 768, 1024, 'Materiały i akcesoria transportowe wykorzystywane podczas realizacji WHM', 'shop-materials', 'center top'),

  // Guides
  '/images/guides/poradnik-jak-przygotowac-sie-do-przeprowadzki.webp': img('/images/guides/poradnik-jak-przygotowac-sie-do-przeprowadzki.webp', 627, 627, 'Poradnik WHM — jak przygotować się do przeprowadzki', 'guides'),

  // Realizacje - Prokuratury
  '/images/realizacje/prokuratury-kielce/przeprowadzka-prokuratury-1.webp': img('/images/realizacje/prokuratury-kielce/przeprowadzka-prokuratury-1.webp', 768, 1024, 'Relokacja wyposażenia Prokuratury realizowana przez zespół WHM', 'realizacje', 'center top'),

  // Realizacje - Teatr
  '/images/realizacje/teatr-zeromskiego/relokacja-teatru-1.webp': img('/images/realizacje/teatr-zeromskiego/relokacja-teatru-1.webp', 1024, 682, 'Relokacja wyposażenia Teatru im. Żeromskiego przez WHM', 'realizacje'),
  '/images/realizacje/teatr-zeromskiego/relokacja-teatru-2.webp': img('/images/realizacje/teatr-zeromskiego/relokacja-teatru-2.webp', 768, 1024, 'Transport wyposażenia instytucji kultury przez WHM', 'realizacje', 'center top'),

  // Realizacje - TVP3
  '/images/realizacje/tvp3-kielce/relokacja-tvp-kielce.webp': img('/images/realizacje/tvp3-kielce/relokacja-tvp-kielce.webp', 600, 400, 'Relokacja wyposażenia i archiwum TVP3 Kielce przez WHM', 'realizacje'),

  // Realizacje - Biblioteka
  '/images/realizacje/biblioteka-busko/biblioteka-busko-1.webp': img('/images/realizacje/biblioteka-busko/biblioteka-busko-1.webp', 500, 330, 'Pojemniki transportowe WHM podczas relokacji biblioteki', 'realizacje'),
  '/images/realizacje/biblioteka-busko/biblioteka-busko-2.webp': img('/images/realizacje/biblioteka-busko/biblioteka-busko-2.webp', 850, 638, 'Relokacja księgozbioru biblioteki w Busku-Zdroju', 'realizacje'),

  // Realizacje - Zamek
  '/images/realizacje/zamek-szydlowieckich/zamek-szydlowieckich-1.webp': img('/images/realizacje/zamek-szydlowieckich/zamek-szydlowieckich-1.webp', 1008, 756, 'Transport zabytkowego obrazu z Zamku Szydłowieckich', 'realizacje'),
  '/images/realizacje/zamek-szydlowieckich/zamek-szydlowieckich-2.webp': img('/images/realizacje/zamek-szydlowieckich/zamek-szydlowieckich-2.webp', 1008, 756, 'Transport fortepianów w Zamku Szydłowieckich', 'realizacje'),

  // Realizacje - Fazioli
  '/images/realizacje/fortepian-fazioli/fortepian-fazioli.webp': img('/images/realizacje/fortepian-fazioli/fortepian-fazioli.webp', 1200, 800, 'Fortepian koncertowy Fazioli po transporcie nocnym', 'realizacje'),
};

export function getImageAsset(src: string): ImageAsset | undefined {
  return manifest[src];
}

export default manifest;
