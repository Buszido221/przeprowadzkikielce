export interface ImageAsset {
  src: string;
  width: number;
  height: number;
  alt: string;
  displayRatio: '16/9' | '4/3' | '3/2' | '1/1' | 'natural';
  objectPosition?: string;
  category: string;
}

const manifest: Record<string, ImageAsset> = {
  // Hero
  '/images/hero/hero-1.webp': { src: '/images/hero/hero-1.webp', width: 1152, height: 581, alt: 'Samochód WHM Przeprowadzki przy realizacji zlecenia w Kielcach', displayRatio: '16/9', category: 'hero' },
  '/images/hero/hero-2.webp': { src: '/images/hero/hero-2.webp', width: 1152, height: 581, alt: 'Zabezpieczony instrument podczas transportu WHM', displayRatio: '16/9', category: 'hero' },
  '/images/hero/hero-3.webp': { src: '/images/hero/hero-3.webp', width: 1152, height: 581, alt: 'Zespół WHM podczas realizacji dla firmy', displayRatio: '16/9', category: 'hero' },
  '/images/hero/hero-4.webp': { src: '/images/hero/hero-4.webp', width: 1152, height: 581, alt: 'Pracownicy WHM podczas wynoszenia mebla', displayRatio: '16/9', category: 'hero' },

  // Kielce moving
  '/images/kielce-moving/przeprowadzki-kielce-1.webp': { src: '/images/kielce-moving/przeprowadzki-kielce-1.webp', width: 1536, height: 2048, alt: 'Samochód WHM podczas realizacji w Kielcach', displayRatio: '4/3', objectPosition: 'center top', category: 'kielce-moving' },
  '/images/kielce-moving/przeprowadzki-kielce-2.webp': { src: '/images/kielce-moving/przeprowadzki-kielce-2.webp', width: 1128, height: 2000, alt: 'Zabezpieczone meble w samochodzie WHM', displayRatio: '4/3', objectPosition: 'center top', category: 'kielce-moving' },
  '/images/kielce-moving/przeprowadzki-kielce-3.webp': { src: '/images/kielce-moving/przeprowadzki-kielce-3.webp', width: 768, height: 1024, alt: 'Przenoszenie zabezpieczonego mebla przez zespół WHM', displayRatio: '4/3', objectPosition: 'center top', category: 'kielce-moving' },
  '/images/kielce-moving/przeprowadzki-kielce-4.webp': { src: '/images/kielce-moving/przeprowadzki-kielce-4.webp', width: 768, height: 1024, alt: 'Zabezpieczony i ustabilizowany ładunek w samochodzie WHM', displayRatio: '4/3', objectPosition: 'center top', category: 'kielce-moving' },
  '/images/kielce-moving/przeprowadzki-kielce-5.webp': { src: '/images/kielce-moving/przeprowadzki-kielce-5.webp', width: 768, height: 1024, alt: 'Zespół WHM podczas wynoszenia wyposażenia z mieszkania', displayRatio: '4/3', objectPosition: 'center top', category: 'kielce-moving' },
  '/images/kielce-moving/przeprowadzki-kielce-6.webp': { src: '/images/kielce-moving/przeprowadzki-kielce-6.webp', width: 768, height: 1024, alt: 'Samochód WHM na trasie w regionie świętokrzyskim', displayRatio: '4/3', objectPosition: 'center top', category: 'kielce-moving' },
  '/images/kielce-moving/przeprowadzki-kielce-7.webp': { src: '/images/kielce-moving/przeprowadzki-kielce-7.webp', width: 768, height: 1024, alt: 'Załadunek wyposażenia do samochodu WHM', displayRatio: '4/3', objectPosition: 'center top', category: 'kielce-moving' },
  '/images/kielce-moving/przeprowadzki-kielce-8.webp': { src: '/images/kielce-moving/przeprowadzki-kielce-8.webp', width: 768, height: 1024, alt: 'Przenoszenie dużego zabezpieczonego elementu przez zespół WHM', displayRatio: '4/3', objectPosition: 'center top', category: 'kielce-moving' },

  // Home moving
  '/images/home-moving/przeprowadzki-domow-kielce-1.webp': { src: '/images/home-moving/przeprowadzki-domow-kielce-1.webp', width: 600, height: 800, alt: 'Przeprowadzka domu realizowana przez WHM', displayRatio: '4/3', objectPosition: 'center top', category: 'home-moving' },
  '/images/home-moving/przeprowadzki-domow-kielce-2.webp': { src: '/images/home-moving/przeprowadzki-domow-kielce-2.webp', width: 768, height: 1024, alt: 'Zabezpieczone wyposażenie przed domem', displayRatio: '4/3', objectPosition: 'center top', category: 'home-moving' },
  '/images/home-moving/przeprowadzki-domow-kielce-3.webp': { src: '/images/home-moving/przeprowadzki-domow-kielce-3.webp', width: 600, height: 800, alt: 'Zabezpieczone wyposażenie przygotowane do transportu przed domem', displayRatio: '4/3', objectPosition: 'center top', category: 'home-moving' },

  // Office moving
  '/images/office-moving/przeprowadzki-biura-1.webp': { src: '/images/office-moving/przeprowadzki-biura-1.webp', width: 600, height: 800, alt: 'Relokacja biura prowadzona przez zespół WHM', displayRatio: '4/3', objectPosition: 'center top', category: 'office-moving' },
  '/images/office-moving/przeprowadzki-biura-2.webp': { src: '/images/office-moving/przeprowadzki-biura-2.webp', width: 768, height: 1024, alt: 'Zabezpieczone wyposażenie biura przygotowane do przeniesienia', displayRatio: '4/3', objectPosition: 'center top', category: 'office-moving' },
  '/images/office-moving/przeprowadzki-biura-3.webp': { src: '/images/office-moving/przeprowadzki-biura-3.webp', width: 600, height: 800, alt: 'Wyposażone pomieszczenie biurowe podczas realizacji', displayRatio: '4/3', objectPosition: 'center top', category: 'office-moving' },
  '/images/office-moving/przeprowadzki-biura-4.webp': { src: '/images/office-moving/przeprowadzki-biura-4.webp', width: 600, height: 800, alt: 'Transport dużego elementu z wykorzystaniem sprzętu WHM', displayRatio: '4/3', objectPosition: 'center top', category: 'office-moving' },

  // Institution moving
  '/images/institution-moving/przeprowadzki-instytucji-3.webp': { src: '/images/institution-moving/przeprowadzki-instytucji-3.webp', width: 768, height: 1024, alt: 'Samochody WHM podczas realizacji przy obiekcie instytucjonalnym', displayRatio: '4/3', objectPosition: 'center top', category: 'institution-moving' },
  '/images/institution-moving/przeprowadzki-instytucji-4.webp': { src: '/images/institution-moving/przeprowadzki-instytucji-4.webp', width: 768, height: 1024, alt: 'Zabezpieczone wyposażenie instytucji podczas relokacji WHM', displayRatio: '4/3', objectPosition: 'center top', category: 'institution-moving' },
  '/images/institution-moving/przeprowadzki-instytucji-5.webp': { src: '/images/institution-moving/przeprowadzki-instytucji-5.webp', width: 768, height: 1024, alt: 'Transport szaf i wyposażenia biurowego przez zespół WHM', displayRatio: '4/3', objectPosition: 'center top', category: 'institution-moving' },
  '/images/institution-moving/przeprowadzki-instytucji-6.webp': { src: '/images/institution-moving/przeprowadzki-instytucji-6.webp', width: 768, height: 1024, alt: 'Zabezpieczone archiwa i dokumentacja podczas transportu', displayRatio: '4/3', objectPosition: 'center top', category: 'institution-moving' },

  // Packing services
  '/images/packing-services/pakowanie-przeprowadzki-kielce-1.webp': { src: '/images/packing-services/pakowanie-przeprowadzki-kielce-1.webp', width: 600, height: 800, alt: 'Dokładnie zabezpieczone elementy wyposażenia przed transportem', displayRatio: '4/3', objectPosition: 'center top', category: 'packing-services' },
  '/images/packing-services/pakowanie-przeprowadzki-kielce-2.webp': { src: '/images/packing-services/pakowanie-przeprowadzki-kielce-2.webp', width: 768, height: 1024, alt: 'Koce ochronne zabezpieczające meble podczas transportu', displayRatio: '4/3', objectPosition: 'center top', category: 'packing-services' },
  '/images/packing-services/pakowanie-przeprowadzki-kielce-3.webp': { src: '/images/packing-services/pakowanie-przeprowadzki-kielce-3.webp', width: 768, height: 1024, alt: 'Duży mebel zabezpieczony pokrowcem i pasami', displayRatio: '4/3', objectPosition: 'center top', category: 'packing-services' },
  '/images/packing-services/pakowanie-przeprowadzki-kielce-5.webp': { src: '/images/packing-services/pakowanie-przeprowadzki-kielce-5.webp', width: 600, height: 800, alt: 'Zabezpieczenie mienia przed przeprowadzką', displayRatio: '4/3', objectPosition: 'center top', category: 'packing-services' },
  '/images/packing-services/pakowanie-przeprowadzki-kielce-6.webp': { src: '/images/packing-services/pakowanie-przeprowadzki-kielce-6.webp', width: 768, height: 1024, alt: 'Oznaczone kartony przygotowane do transportu', displayRatio: '4/3', objectPosition: 'center top', category: 'packing-services' },

  // Moving boxes
  '/images/moving-boxes/kartony-do-przeprowadzki-1.webp': { src: '/images/moving-boxes/kartony-do-przeprowadzki-1.webp', width: 600, height: 800, alt: 'Kartony przeprowadzkowe ułożone i gotowe do pakowania', displayRatio: '4/3', objectPosition: 'center top', category: 'moving-boxes' },
  '/images/moving-boxes/kartony-do-przeprowadzki-2.webp': { src: '/images/moving-boxes/kartony-do-przeprowadzki-2.webp', width: 768, height: 1024, alt: 'Kartony przeprowadzkowe podczas realnej realizacji WHM', displayRatio: '4/3', objectPosition: 'center top', category: 'moving-boxes' },
  '/images/moving-boxes/kartony-do-przeprowadzki-3.webp': { src: '/images/moving-boxes/kartony-do-przeprowadzki-3.webp', width: 768, height: 1024, alt: 'Pojemniki transportowe WHM', displayRatio: '4/3', objectPosition: 'center top', category: 'moving-boxes' },
  '/images/moving-boxes/kartony-do-przeprowadzki-4.webp': { src: '/images/moving-boxes/kartony-do-przeprowadzki-4.webp', width: 768, height: 1024, alt: 'Oznaczone kartony przeprowadzkowe przygotowane do transportu', displayRatio: '4/3', objectPosition: 'center top', category: 'moving-boxes' },
  '/images/moving-boxes/pojemniki-przeprowadzkowe-1.webp': { src: '/images/moving-boxes/pojemniki-przeprowadzkowe-1.webp', width: 768, height: 1024, alt: 'Plombowane pojemniki transportowe WHM', displayRatio: '4/3', objectPosition: 'center top', category: 'moving-boxes' },
  '/images/moving-boxes/pojemniki-przeprowadzkowe-2.webp': { src: '/images/moving-boxes/pojemniki-przeprowadzkowe-2.webp', width: 768, height: 1024, alt: 'Pojemniki wspierające relokacje i magazynowanie', displayRatio: '4/3', objectPosition: 'center top', category: 'moving-boxes' },

  // Furniture assembly
  '/images/furniture-assembly/montaz-demontaz-mebli-1.webp': { src: '/images/furniture-assembly/montaz-demontaz-mebli-1.webp', width: 768, height: 1024, alt: 'Demontaż mebla przed transportem', displayRatio: '4/3', objectPosition: 'center top', category: 'furniture-assembly' },
  '/images/furniture-assembly/montaz-demontaz-mebli-2.webp': { src: '/images/furniture-assembly/montaz-demontaz-mebli-2.webp', width: 768, height: 1024, alt: 'Uporządkowane elementy mebla po demontażu przygotowane do transportu', displayRatio: '4/3', objectPosition: 'center top', category: 'furniture-assembly' },

  // Standard WHM
  '/images/standard-whm/dedykowane-pokrowce-1.webp': { src: '/images/standard-whm/dedykowane-pokrowce-1.webp', width: 600, height: 800, alt: 'Dedykowane pokrowce ochronne na meble', displayRatio: '4/3', objectPosition: 'center top', category: 'standard-whm' },
  '/images/standard-whm/koce-przeprowadzkowe-1.webp': { src: '/images/standard-whm/koce-przeprowadzkowe-1.webp', width: 600, height: 800, alt: 'Koce ochronne do zabezpieczania mebli podczas transportu', displayRatio: '4/3', objectPosition: 'center top', category: 'standard-whm' },
  '/images/standard-whm/zabezpieczenia-1.webp': { src: '/images/standard-whm/zabezpieczenia-1.webp', width: 768, height: 1024, alt: 'Pasy i zabezpieczenia stabilizujące ładunek', displayRatio: '4/3', objectPosition: 'center top', category: 'standard-whm' },
  '/images/standard-whm/zabezpieczenia-2.webp': { src: '/images/standard-whm/zabezpieczenia-2.webp', width: 768, height: 1024, alt: 'Wózki i przygotowanie mienia do wynoszenia', displayRatio: '4/3', objectPosition: 'center top', category: 'standard-whm' },
  '/images/standard-whm/sztywna-zabudowa-1.webp': { src: '/images/standard-whm/sztywna-zabudowa-1.webp', width: 768, height: 1024, alt: 'Sztywna zabudowa przestrzeni ładunkowej samochodu WHM', displayRatio: '4/3', objectPosition: 'center top', category: 'standard-whm' },

  // Transport mebli
  '/images/transport-mebli/transport-mebli-kielce-1.webp': { src: '/images/transport-mebli/transport-mebli-kielce-1.webp', width: 600, height: 800, alt: 'Zabezpieczony mebel przygotowany do transportu przez zespół WHM', displayRatio: '4/3', objectPosition: 'center top', category: 'transport-mebli' },
  '/images/transport-mebli/transport-mebli-kielce-2.webp': { src: '/images/transport-mebli/transport-mebli-kielce-2.webp', width: 768, height: 1024, alt: 'Meble przygotowane do bezpiecznego przewozu', displayRatio: '4/3', objectPosition: 'center top', category: 'transport-mebli' },

  // Transport pianin
  '/images/transport-pianin-i-fortepianow/transport-pianin-i-fortepianow-kielce-1.webp': { src: '/images/transport-pianin-i-fortepianow/transport-pianin-i-fortepianow-kielce-1.webp', width: 600, height: 800, alt: 'Pianino zabezpieczone pokrowcami i pasami przed wyniesieniem', displayRatio: '4/3', objectPosition: 'center top', category: 'transport-pianin' },
  '/images/transport-pianin-i-fortepianow/transport-pianin-i-fortepianow-kielce-2.webp': { src: '/images/transport-pianin-i-fortepianow/transport-pianin-i-fortepianow-kielce-2.webp', width: 768, height: 1024, alt: 'Instrument owinięty materiałem ochronnym podczas przygotowania', displayRatio: '4/3', objectPosition: 'center top', category: 'transport-pianin' },
  '/images/transport-pianin-i-fortepianow/transport-pianin-i-fortepianow-kielce-3.webp': { src: '/images/transport-pianin-i-fortepianow/transport-pianin-i-fortepianow-kielce-3.webp', width: 768, height: 1024, alt: 'Pianino zabezpieczone pokrowcami i pasami przed transportem', displayRatio: '4/3', objectPosition: 'center top', category: 'transport-pianin' },
  '/images/transport-pianin-i-fortepianow/transport-pianin-i-fortepianow-kielce-4.webp': { src: '/images/transport-pianin-i-fortepianow/transport-pianin-i-fortepianow-kielce-4.webp', width: 1024, height: 1365, alt: 'Zabezpieczony instrument gotowy do przeniesienia przez zespół WHM', displayRatio: '4/3', objectPosition: 'center top', category: 'transport-pianin' },

  // Transport gabarytow
  '/images/transport-gabarytow/transport-gabarytow-kielce-1.webp': { src: '/images/transport-gabarytow/transport-gabarytow-kielce-1.webp', width: 768, height: 1024, alt: 'Uprzęże transportowe i sprzęt WHM', displayRatio: '4/3', objectPosition: 'center top', category: 'transport-gabarytow' },
  '/images/transport-gabarytow/transport-gabarytow-kielce-3.webp': { src: '/images/transport-gabarytow/transport-gabarytow-kielce-3.webp', width: 768, height: 1024, alt: 'Przenoszenie dużego zabezpieczonego przedmiotu przez zespół WHM', displayRatio: '4/3', objectPosition: 'center top', category: 'transport-gabarytow' },
  '/images/transport-gabarytow/transport-gabarytow-kielce-4.webp': { src: '/images/transport-gabarytow/transport-gabarytow-kielce-4.webp', width: 768, height: 1024, alt: 'Przygotowanie drogi transportu przez zespół WHM', displayRatio: '4/3', objectPosition: 'center top', category: 'transport-gabarytow' },
  '/images/transport-gabarytow/transport-gabarytow-kielce-5.webp': { src: '/images/transport-gabarytow/transport-gabarytow-kielce-5.webp', width: 768, height: 1024, alt: 'Praca ze schodołazem podczas przenoszenia ciężkiego przedmiotu', displayRatio: '4/3', objectPosition: 'center top', category: 'transport-gabarytow' },
  '/images/transport-gabarytow/transport-gabarytow-kielce-6.webp': { src: '/images/transport-gabarytow/transport-gabarytow-kielce-6.webp', width: 768, height: 1024, alt: 'Wyposażenie wymagające ostrożnego przeniesienia przez zespół WHM', displayRatio: '4/3', objectPosition: 'center top', category: 'transport-gabarytow' },
  '/images/transport-gabarytow/transport-gabarytow-kielce-7.webp': { src: '/images/transport-gabarytow/transport-gabarytow-kielce-7.webp', width: 720, height: 900, alt: 'Duży zabezpieczony przedmiot podnoszony przy użyciu specjalistycznego sprzętu', displayRatio: '4/3', objectPosition: 'center top', category: 'transport-gabarytow' },

  // Transport lodowki
  '/images/transport-lodowki/transport-lodowki-kielce-1.webp': { src: '/images/transport-lodowki/transport-lodowki-kielce-1.webp', width: 600, height: 800, alt: 'Zabezpieczona lodówka przygotowana do transportu', displayRatio: '4/3', objectPosition: 'center top', category: 'transport-lodowki' },
  '/images/transport-lodowki/transport-lodowki-kielce-2.webp': { src: '/images/transport-lodowki/transport-lodowki-kielce-2.webp', width: 768, height: 1024, alt: 'Zabezpieczona lodówka przygotowana do przeniesienia', displayRatio: '4/3', objectPosition: 'center top', category: 'transport-lodowki' },

  // Transport pieca
  '/images/transport-pieca/transport-pieca-kielce-1.webp': { src: '/images/transport-pieca/transport-pieca-kielce-1.webp', width: 768, height: 1024, alt: 'Ciężkie urządzenie przygotowane do przemieszczenia', displayRatio: '4/3', objectPosition: 'center top', category: 'transport-pieca' },

  // Transport sejfu
  '/images/transport-sejfu/transport-sejfu-kielce-1.webp': { src: '/images/transport-sejfu/transport-sejfu-kielce-1.webp', width: 768, height: 1024, alt: 'Transport sejfu i szafy pancernej przez WHM', displayRatio: '4/3', objectPosition: 'center top', category: 'transport-sejfu' },

  // Shop materials
  '/images/shop-materials/sklep-z-materialami-1.webp': { src: '/images/shop-materials/sklep-z-materialami-1.webp', width: 768, height: 1024, alt: 'Materiały i akcesoria transportowe wykorzystywane podczas realizacji WHM', displayRatio: '4/3', objectPosition: 'center top', category: 'shop-materials' },

  // Guides
  '/images/guides/poradnik-jak-przygotowac-sie-do-przeprowadzki.webp': { src: '/images/guides/poradnik-jak-przygotowac-sie-do-przeprowadzki.webp', width: 627, height: 627, alt: 'Poradnik WHM — jak przygotować się do przeprowadzki', displayRatio: '1/1', category: 'guides' },

  // Realizacje - Prokuratury
  '/images/realizacje/prokuratury-kielce/przeprowadzka-prokuratury-1.webp': { src: '/images/realizacje/prokuratury-kielce/przeprowadzka-prokuratury-1.webp', width: 768, height: 1024, alt: 'Relokacja wyposażenia Prokuratury realizowana przez zespół WHM', displayRatio: '4/3', objectPosition: 'center top', category: 'realizacje' },

  // Realizacje - Teatr
  '/images/realizacje/teatr-zeromskiego/relokacja-teatru-1.webp': { src: '/images/realizacje/teatr-zeromskiego/relokacja-teatru-1.webp', width: 1024, height: 682, alt: 'Relokacja wyposażenia Teatru im. Żeromskiego przez WHM', displayRatio: '4/3', category: 'realizacje' },
  '/images/realizacje/teatr-zeromskiego/relokacja-teatru-2.webp': { src: '/images/realizacje/teatr-zeromskiego/relokacja-teatru-2.webp', width: 768, height: 1024, alt: 'Transport wyposażenia instytucji kultury przez WHM', displayRatio: '4/3', objectPosition: 'center top', category: 'realizacje' },

  // Realizacje - TVP3
  '/images/realizacje/tvp3-kielce/relokacja-tvp-kielce.webp': { src: '/images/realizacje/tvp3-kielce/relokacja-tvp-kielce.webp', width: 600, height: 400, alt: 'Relokacja wyposażenia i archiwum TVP3 Kielce przez WHM', displayRatio: '4/3', category: 'realizacje' },

  // Realizacje - Biblioteka
  '/images/realizacje/biblioteka-busko/biblioteka-busko-1.webp': { src: '/images/realizacje/biblioteka-busko/biblioteka-busko-1.webp', width: 500, height: 330, alt: 'Pojemniki transportowe WHM podczas relokacji biblioteki', displayRatio: '4/3', category: 'realizacje' },
  '/images/realizacje/biblioteka-busko/biblioteka-busko-2.webp': { src: '/images/realizacje/biblioteka-busko/biblioteka-busko-2.webp', width: 850, height: 638, alt: 'Relokacja księgozbioru biblioteki w Busku-Zdroju', displayRatio: '4/3', category: 'realizacje' },

  // Realizacje - Zamek
  '/images/realizacje/zamek-szydlowieckich/zamek-szydlowieckich-1.webp': { src: '/images/realizacje/zamek-szydlowieckich/zamek-szydlowieckich-1.webp', width: 1008, height: 756, alt: 'Transport zabytkowego obrazu z Zamku Szydłowieckich', displayRatio: '4/3', category: 'realizacje' },
  '/images/realizacje/zamek-szydlowieckich/zamek-szydlowieckich-2.webp': { src: '/images/realizacje/zamek-szydlowieckich/zamek-szydlowieckich-2.webp', width: 1008, height: 756, alt: 'Transport fortepianów w Zamku Szydłowieckich', displayRatio: '4/3', category: 'realizacje' },

  // Realizacje - Fazioli
  '/images/realizacje/fortepian-fazioli/fortepian-fazioli.webp': { src: '/images/realizacje/fortepian-fazioli/fortepian-fazioli.webp', width: 1200, height: 800, alt: 'Fortepian koncertowy Fazioli po transporcie nocnym', displayRatio: '4/3', category: 'realizacje' },
};

export function getImageAsset(src: string): ImageAsset | undefined {
  return manifest[src];
}

export default manifest;
