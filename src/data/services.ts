import { site } from './site';

export const heroImages = [
  '/images/hero/hero-1.webp',
  '/images/hero/hero-2.webp',
  '/images/hero/hero-3.webp',
  '/images/hero/hero-4.webp',
];

/* ===================================================
   /przeprowadzki/
   =================================================== */

export const przeprowadzkiPage = {
  seo: {
    title: 'Usługi przeprowadzkowe w Kielcach | WHM Przeprowadzki',
    description: 'Przeprowadzki mieszkań, domów, firm i instytucji w Kielcach. Pakowanie, zabezpieczenie mienia, transport i wniesienie w standardzie WHM.',
    canonical: `${site.domain}przeprowadzki/`,
  },
  breadcrumbs: [{ label: 'Przeprowadzki' }],
  hero: {
    heading: 'Przeprowadzki w Kielcach - od planu do bezpiecznego wniesienia',
    lead: 'Możemy przejąć całą przeprowadzkę albo zająć się tylko wybranym etapem. Powiedz nam, co przewozisz i dokąd - a my zaproponujemy sposób działania dopasowany do Twojej sytuacji.',
  },
  serviceTypes: {
    eyebrow: 'Wybierz rodzaj przeprowadzki',
    heading: 'Każde zlecenie wymaga innego podejścia.',
    items: [
      {
        title: 'Przeprowadzki mieszkań i domów',
        desc: 'Pakowanie, zabezpieczenie mebli i wyposażenia, transport i ustawienie w nowym miejscu - wszystko pod jedną opieką.',
        href: '/przeprowadzki/',
        image: '/images/home-moving/przeprowadzki-domow-kielce-3.webp',
        alt: 'Zabezpieczone wyposażenie przygotowane do transportu przy domu',
      },
      {
        title: 'Przeprowadzki firm i instytucji',
        desc: 'Relokacje biur, dokumentacji i wyposażenia prowadzone etapowo, tak by Twoja firma mogła działać dalej.',
        href: '/przeprowadzki-firm-i-instytucji/',
        image: '/images/office-moving/przeprowadzki-biura-1.webp',
        alt: 'Relokacja biura prowadzona przez zespół WHM',
      },
      {
        title: 'Transport specjalistyczny',
        desc: 'Ciężkie, wartościowe i nietypowe przedmioty - najpierw oceniamy, potem bezpiecznie przewozimy.',
        href: '/transport-specjalistyczny/',
        image: '/images/transport-gabarytow/transport-gabarytow-kielce-7.webp',
        alt: 'Transport ciężkiego ładunku z wykorzystaniem sprzętu WHM',
      },
      {
        title: 'Pakowanie i zabezpieczanie',
        desc: 'Profesjonalne materiały i sposób zabezpieczenia dobrany do tego, co naprawdę przewozisz.',
        href: '/pakowanie-i-zabezpieczanie/',
        image: '/images/packing-services/pakowanie-przeprowadzki-kielce-3.webp',
        alt: 'Duży mebel zabezpieczony pokrowcem i pasami',
      },
    ],
  },
  scope: {
    eyebrow: 'Zakres usługi',
    heading: 'Co możemy przejąć',
    text: 'Przeprowadzka nie musi oznaczać jedynie transportu. Ty decydujesz, które etapy przejmuje WHM - resztą zajmujesz się sam.',
    items: [
      'Wspólne ustalenie planu działania',
      'Dostarczenie odpowiednich materiałów',
      'Pakowanie rzeczy',
      'Zabezpieczanie mebli i wyposażenia',
      'Demontaż wymagających tego elementów',
      'Wynoszenie',
      'Transport',
      'Wniesienie',
      'Ustawienie mienia tam, gdzie chcesz',
    ],
    image: '/images/hero/hero-4.webp',
    imageAlt: 'Pracownicy WHM podczas wynoszenia mebla',
  },
  standard: {
    eyebrow: 'Standard WHM',
    heading: 'Tak pracujemy przy każdej realizacji',
    text: 'Koce ochronne, pokrowce, pasy stabilizujące, wózki transportowe i windy załadunkowe to stały element naszej pracy. Dobre przygotowanie ogranicza ryzyko uszkodzeń i sprawia, że cały proces przebiega płynnie.',
    images: [
      { src: '/images/kielce-moving/przeprowadzki-kielce-4.webp', alt: 'Zabezpieczony i ustabilizowany ładunek w samochodzie WHM' },
      { src: '/images/kielce-moving/przeprowadzki-kielce-8.webp', alt: 'Przenoszenie dużego, zabezpieczonego elementu przez zespół WHM' },
    ],
  },
  process: {
    eyebrow: 'Jak przebiega współpraca',
    heading: 'Od kontaktu do zakończenia prac',
    steps: [
      { number: '01', title: 'Kontakt i opis zlecenia', desc: 'Zadzwoń, wyślij SMS albo wypełnij formularz wyceny.' },
      { number: '02', title: 'Poznajemy szczegóły', desc: 'Rozmawiamy o Twoim mieniu, dostępie, piętrach, sprzęcie i potrzebnych materiałach.' },
      { number: '03', title: 'Termin i sposób realizacji', desc: 'Dobieramy zespół, pojazd i harmonogram dopasowany do Twoich potrzeb.' },
      { number: '04', title: 'Zabezpieczenie i transport', desc: 'Pakujemy, zabezpieczamy, wynosimy i bezpiecznie przewozimy Twoje mienie.' },
      { number: '05', title: 'Wniesienie i zakończenie', desc: 'Wnosimy, ustawiamy i kończymy zgodnie z tym, co wspólnie ustaliliśmy.' },
    ],
  },
  faq: [
    {
      question: 'Czy WHM może zająć się samym transportem?',
      answer: 'Tak. Możemy przejąć cały proces albo tylko wybrany etap - w tym sam transport bez pakowania.',
    },
    {
      question: 'Czy można zlecić również pakowanie?',
      answer: 'Tak. Pakowanie, zabezpieczanie mebli i przygotowanie mienia do transportu może być częścią zlecenia - wystarczy, że powiesz nam o tym na etapie wyceny.',
    },
    {
      question: 'Od czego zależy zakres i wycena?',
      answer: 'Każdą przeprowadzkę wyceniamy indywidualnie, dzięki czemu płacisz za zakres, którego naprawdę potrzebujesz. Na wycenę wpływają ilość i rodzaj mienia, odległość, piętra, potrzebny sprzęt i dodatkowe usługi.',
    },
    {
      question: 'Czy nietypowe lub ciężkie elementy wymagają wcześniejszej oceny?',
      answer: 'Masz do przewiezienia coś ciężkiego lub nietypowego? Pokaż nam przedmiot i miejsce - znajdziemy najlepszy sposób. Potrzebujemy zdjęć, przybliżonych wymiarów i informacji o schodach w obu lokalizacjach.',
    },
  ],
};

/* ===================================================
   /pakowanie-i-zabezpieczanie/
   =================================================== */

/* ===================================================
   /przeprowadzki-firm-i-instytucji/
   =================================================== */

export const firmaPage = {
  seo: {
    title: 'Przeprowadzki firm i instytucji Kielce | WHM',
    description: 'Przeprowadzki firm, biur i instytucji w Kielcach. Planowanie etapów, pakowanie, oznaczanie, zabezpieczenie wyposażenia, transport i wniesienie.',
    canonical: `${site.domain}przeprowadzki-firm-i-instytucji/`,
  },
  breadcrumbs: [
    { label: 'Przeprowadzki', href: '/przeprowadzki/' },
    { label: 'Firmy i instytucje' },
  ],
  hero: {
    heading: 'Przeprowadzki firm i instytucji zaplanowane wokół działania organizacji',
    lead: 'Przeniesienie biura, placówki czy archiwum wymaga czegoś więcej niż transportu. Zanim cokolwiek ruszymy, razem ustalimy kolejność, oznaczenie mienia i sposób, w jaki Twoja organizacja będzie mogła działać dalej.',
    ctaLabel: 'Omów przeprowadzkę',
    note: 'Plan i kolejność prac przygotowujemy wspólnie przed realizacją.',
  },
  needs: {
    eyebrow: 'Dwa rodzaje potrzeb',
    heading: 'Każda organizacja ma inną skalę i inne wymagania',
    items: [
      {
        title: 'Firmy i biura',
        text: 'Stanowiska pracy, meble biurowe, sprzęt, wyposażenie wspólnych przestrzeni - zajmujemy się demontażem uzgodnionych elementów, pakowaniem, transportem i wniesieniem do nowej lokalizacji.',
        links: [
          { label: 'Pakowanie i zabezpieczanie', href: '/pakowanie-i-zabezpieczanie/' },
          { label: 'Transport specjalistyczny', href: '/transport-specjalistyczny/' },
          { label: 'Poproś o wycenę', href: '/kontakt/#formularz' },
        ],
      },
      {
        title: 'Instytucje i placówki',
        text: 'Większa liczba elementów, dokumenty, zbiory, wyposażenie pomieszczeń - w takiej skali pracujemy etapami, oznaczamy przenoszone mienie i trzymamy się wspólnie ustalonej kolejności.',
        links: [
          { label: 'Pakowanie i zabezpieczanie', href: '/pakowanie-i-zabezpieczanie/' },
          { label: 'Poproś o wycenę', href: '/kontakt/#formularz' },
        ],
      },
    ],
  },
  scopeFirst: {
    eyebrow: 'Najpierw zakres, później transport',
    heading: 'Przed realizacją ustalamy szczegóły',
    text: 'Sposób przygotowania dobieramy do skali i warunków. Zanim ruszamy, wspólnie ustalamy:',
    items: [
      'Co dokładnie jest przenoszone',
      'Które elementy wymagają demontażu',
      'Co pakujesz we własnym zakresie, a co przejmuje WHM',
      'Jak wyglądają drogi dojścia',
      'Czy w budynkach znajdują się windy',
      'Gdzie mogą stanąć samochody',
      'Które pomieszczenia lub działy mają być obsługiwane jako pierwsze',
      'Gdzie poszczególne elementy mają trafić w nowej lokalizacji',
    ],
  },
  serviceScope: {
    eyebrow: 'Zakres obsługi',
    heading: 'Możliwe elementy usługi',
    text: 'Możesz zlecić nam pełny proces albo wybrane elementy. Poniższa lista pokazuje, z czego możemy złożyć Twoją realizację.',
    items: [
      'Ustalenie planu i etapów',
      'Przygotowanie materiałów',
      'Pakowanie',
      'Oznaczanie kartonów lub pojemników',
      'Zabezpieczenie mebli i wyposażenia',
      'Demontaż uzgodnionych elementów',
      'Wynoszenie',
      'Transport',
      'Wniesienie',
      'Rozmieszczenie zgodnie z wcześniejszymi ustaleniami',
    ],
  },
  downtime: {
    eyebrow: 'Ograniczenie przestoju',
    heading: 'Przeprowadzka dopasowana do rytmu Twojej organizacji',
    text: 'Kolejność prac możemy zaplanować tak, aby najważniejsze stanowiska, działy lub pomieszczenia były przenoszone w zaplanowanej kolejności. Termin i sposób realizacji dopasowujemy do skali zlecenia i Twoich oczekiwań.',
  },
  labeling: {
    eyebrow: 'Oznaczanie i kontrola rozmieszczenia',
    heading: 'Każdy element trafia tam, gdzie powinien',
    text: 'Przy większych realizacjach stosujemy numerowanie, opisy pomieszczeń, oznaczanie kartonów i pojemników oraz grupowanie wyposażenia. Miejsce docelowe każdego elementu ustalamy wspólnie, co pozwala uniknąć chaosu po wniesieniu.',
  },
  documents: {
    eyebrow: 'Dokumenty, książki i archiwa',
    heading: 'Przenoszenie zbiorów wymaga porządku, nie pośpiechu',
    text: 'Dokumenty, książki, segregatory, zbiory i wyposażenie archiwalne przenosimy z zachowaniem ustalonej kolejności. Odpowiednie pakowanie, oznaczanie i wcześniejsze ustalenie rozmieszczenia pozwalają uniknąć pomyłek i ograniczają ryzyko uszkodzeń.',
    image: '/images/institution-moving/przeprowadzki-instytucji-3.webp',
    imageAlt: 'Samochody WHM podczas realizacji przy obiekcie instytucjonalnym',
  },
  equipment: {
    eyebrow: 'Sprzęt i trudniejsze elementy',
    heading: 'Ciężkie i nietypowe wyposażenie? Daj nam znać wcześniej',
    text: 'Przy przeprowadzkach firm i instytucji mogą pojawić się ciężkie szafy, duże urządzenia, elementy wymagające demontażu, utrudniony dostęp, schody czy brak windy. Korzystamy między innymi z wózków, pasów, koców, pokrowców, wind załadunkowych oraz schodołazu Escalera - dobieramy sprzęt do konkretnej sytuacji.',
    link: { label: 'Transport specjalistyczny', href: '/transport-specjalistyczny/' },
  },
  process: {
    eyebrow: 'Proces współpracy',
    heading: 'Od kontaktu do rozmieszczenia mienia',
    steps: [
      { number: '01', title: 'Kontakt i wstępny opis', desc: 'Zadzwoń, wyślij SMS albo wypełnij formularz wyceny.' },
      { number: '02', title: 'Poznajemy skalę i warunki', desc: 'Rozmawiamy o wyposażeniu, piętrach, windach i możliwości podjazdu.' },
      { number: '03', title: 'Ustalamy zakres i kolejność', desc: 'Wspólnie określamy, które etapy przejmuje WHM i w jakiej kolejności.' },
      { number: '04', title: 'Przygotowanie materiałów i zabezpieczeń', desc: 'Dobieramy kartony, pojemniki, pokrowce i koce ochronne.' },
      { number: '05', title: 'Realizacja ustalonych etapów', desc: 'Pakujemy, wynosimy i transportujemy zgodnie z planem.' },
      { number: '06', title: 'Wniesienie i rozmieszczenie', desc: 'Wnosimy i ustawiamy mienie zgodnie z tym, co wspólnie ustaliliśmy.' },
    ],
  },
  photosOrganization: {
    eyebrow: 'Organizacja pracy',
    items: [
      { src: '/images/institution-moving/przeprowadzki-instytucji-3.webp', alt: 'Samochody WHM podczas realizacji przy obiekcie instytucjonalnym' },
      { src: '/images/institution-moving/przeprowadzki-instytucji-6.webp', alt: 'Uporządkowane zbiory zabezpieczone przed transportem' },
      { src: '/images/office-moving/przeprowadzki-biura-2.webp', alt: 'Zabezpieczone wyposażenie biura przygotowane do przeniesienia' },
    ],
  },
  photosEquipment: {
    eyebrow: 'Wyposażenie i gabaryty',
    items: [
      { src: '/images/office-moving/przeprowadzki-biura-4.webp', alt: 'Transport dużego elementu z wykorzystaniem sprzętu WHM' },
      { src: '/images/office-moving/przeprowadzki-biura-3.webp', alt: 'Wyposażone pomieszczenie biurowe podczas realizacji' },
    ],
  },
  faq: [
    {
      question: 'Czy WHM może przeprowadzić firmę etapami?',
      answer: 'Tak - kolejność i zakres prac ustalamy razem, dopasowując je do organizacji Twoich pomieszczeń i potrzeb.',
    },
    {
      question: 'Czy zajmujecie się pakowaniem wyposażenia biura?',
      answer: 'Tak. Pakowanie i zabezpieczanie może być częścią przeprowadzki albo osobnym zleceniem - zależy, czego potrzebujesz.',
    },
    {
      question: 'Czy WHM może zdemontować meble biurowe?',
      answer: 'Tak. Demontaż i ponowny montaż uzgodnionych elementów uwzględniamy w zakresie - wskaż je podczas wyceny.',
    },
    {
      question: 'Czy przewozicie dokumenty, książki i zbiory?',
      answer: 'Tak. Przygotowujemy je i przewozimy z zachowaniem ustalonej kolejności, po wcześniejszym uzgodnieniu sposobu pakowania i oznaczania.',
    },
    {
      question: 'Jak przygotować firmę do wyceny?',
      answer: 'Podaj lokalizacje, przybliżoną skalę wyposażenia, piętra, dostępność wind, możliwość podjazdu, elementy wymagające demontażu oraz oczekiwany zakres - resztę ustalimy wspólnie.',
    },
    {
      question: 'Czy transport ciężkiego wyposażenia wymaga wcześniejszej oceny?',
      answer: 'Tak. Masa, wymiary, droga transportowa i dostęp wpływają na dobór sprzętu i zespołu. Pokaż nam zdjęcia i wymiary, a ocenimy najlepszy sposób realizacji.',
    },
  ],
};

/* ===================================================
   /transport-specjalistyczny/
   =================================================== */

export const transportSpecPage = {
  seo: {
    title: 'Transport specjalistyczny Kielce | WHM',
    description: 'Transport ciężkich, delikatnych i nietypowych przedmiotów w Kielcach. Pianina, gabaryty, AGD, meble i wyposażenie wymagające wcześniejszej oceny.',
    canonical: `${site.domain}transport-specjalistyczny/`,
  },
  breadcrumbs: [
    { label: 'Transport specjalistyczny' },
  ],
  hero: {
    heading: 'Transport specjalistyczny zaczyna się od oceny, nie od podnoszenia',
    lead: 'Masa przedmiotu to tylko jeden z elementów. Sprawdzamy również jego wymiary, sposób zabezpieczenia, drogę transportową i warunki w obu lokalizacjach.',
    ctaLabel: 'Opisz przedmiot',
    note: 'Masz do przewiezienia coś ciężkiego lub nietypowego? Pokaż nam przedmiot i miejsce - znajdziemy najlepszy sposób.',
    image: '/images/transport-gabarytow/transport-gabarytow-kielce-1.webp',
  },
  categories: {
    eyebrow: 'Jakie przedmioty wymagają specjalnego podejścia',
    heading: 'Nie każdy przedmiot można przenieść standardową metodą',
    items: [
      'Pianina i fortepiany',
      'Ciężkie lub duże meble',
      'Lodówki i AGD',
      'Sejfy',
      'Piece i ciężkie urządzenia',
      'Wyposażenie techniczne lub laboratoryjne',
      'Przedmioty, których nie da się bezpiecznie przenieść standardową metodą',
    ],
  },
  services: {
    eyebrow: 'Dwie główne usługi',
    heading: 'Wybierz rodzaj transportu',
    items: [
      {
        title: 'Transport pianin i fortepianów',
        desc: 'Instrument klawiszowy wymaga oceny konstrukcji, drogi transportowej i zabezpieczenia.',
        href: '/transport-pianin-i-fortepianow-kielce/',
        image: '/images/transport-pianin-i-fortepianow/transport-pianin-i-fortepianow-kielce-3.webp',
        alt: 'Pianino zabezpieczone pokrowcami i pasami przed transportem',
      },
      {
        title: 'Ciężkie i nietypowe wyposażenie',
        desc: 'Ciężkie meble, urządzenia i nietypowe wyposażenie - oceniamy wymiary, masę i całą drogę transportową, zanim ruszymy.',
        href: '/kontakt/#formularz',
        image: '/images/transport-gabarytow/transport-gabarytow-kielce-7.webp',
        alt: 'Duży zabezpieczony przedmiot podnoszony przy użyciu specjalistycznego sprzętu',
      },
    ],
  },
  assessment: {
    eyebrow: 'Co oceniamy przed realizacją',
    heading: 'Dziesięć elementów, które sprawdzamy',
    items: [
      'Rodzaj przedmiotu',
      'Wymiary',
      'Przybliżoną masę',
      'Możliwości demontażu',
      'Liczba pięter',
      'Obecność i wymiary windy',
      'Szerokość drzwi oraz przejść',
      'Zakręty na klatce schodowej',
      'Odległość od wejścia do samochodu',
      'Warunki w miejscu docelowym',
    ],
  },
  equipment: {
    eyebrow: 'Sprzęt dobieramy do zadania',
    heading: 'Realne wyposażenie WHM',
    text: 'Koce i pokrowce ochronne, pasy transportowe, wózki, windy załadunkowe, schodołaz Escalera oraz zabezpieczenia przestrzeni ładunkowej - dobieramy je do konkretnego przedmiotu i warunków, z jakimi mamy do czynienia.',
    notice: 'W realizacjach WHM były między innymi szafy serwerowe o wysokości ponad 2 m przenoszone przez okno, piece, serwery i wyposażenie laboratoryjne. Każde kolejne zadanie oceniamy jednak osobno — znaczenie mają masa, wymiary, konstrukcja i droga transportowa.',
  },
  gallery: {
    eyebrow: 'Galeria zakresu specjalistycznego',
    heading: 'Tak wygląda zabezpieczenie i transport',
    items: [
      { src: '/images/transport-lodowki/transport-lodowki-kielce-1.webp', alt: 'Zabezpieczona lodówka przygotowana do transportu' },
      { src: '/images/transport-lodowki/transport-lodowki-kielce-2.webp', alt: 'Zabezpieczona lodówka przygotowana do przeniesienia' },
      { src: '/images/transport-mebli/transport-mebli-kielce-1.webp', alt: 'Mebel przygotowany do przewozu z zabezpieczeniem ochronnym' },
      { src: '/images/transport-gabarytow/transport-gabarytow-kielce-6.webp', alt: 'Wyposażenie wymagające ostrożnego przeniesienia przez zespół WHM' },
    ],
  },
  process: {
    eyebrow: 'Proces',
    heading: 'Od opisu do ustawienia na miejscu',
    steps: [
      { number: '01', title: 'Opis zlecenia', desc: 'Prześlij nam opis, zdjęcia, wymiary i lokalizacje.' },
      { number: '02', title: 'Ocena przedmiotu i warunków', desc: 'Oceniamy przedmiot oraz warunki w obu lokalizacjach.' },
      { number: '03', title: 'Zabezpieczenie i sprzęt', desc: 'Dobieramy sposób zabezpieczenia i potrzebny sprzęt.' },
      { number: '04', title: 'Potwierdzenie i termin', desc: 'Po potwierdzeniu możliwości realizacji ustalamy termin.' },
      { number: '05', title: 'Realizacja', desc: 'Zabezpieczamy, przenosimy, transportujemy i ustawiamy przedmiot na miejscu.' },
    ],
  },
  faq: [
    {
      question: 'Jakie informacje są potrzebne do oceny transportu?',
      answer: 'Rodzaj przedmiotu, wymiary, przybliżona masa, piętra, zdjęcia schodów i zakrętów, informacja o windzie, odległość od wejścia do samochodu oraz warunki w miejscu docelowym. Im więcej nam pokażesz, tym szybciej ocenimy możliwości.',
    },
    {
      question: 'Czy wystarczą zdjęcia klatki schodowej i przedmiotu?',
      answer: 'Tak, zdjęcia bardzo pomagają w wstępnej ocenie. Im dokładniejsze informacje prześlesz, tym precyzyjniej ocenimy możliwości i zaproponujemy najlepszy sposób.',
    },
    {
      question: 'Czy WHM korzysta ze schodołazu?',
      answer: 'Tak, korzystamy z elektrycznego schodołazu kroczącego Escalera. Jego użycie zależy jednak od konstrukcji schodów, wymiarów przedmiotu i warunków w obu lokalizacjach - szczegóły ustalamy po ocenie.',
    },
    {
      question: 'Czy każdy ciężki przedmiot można przewieźć schodołazem?',
      answer: 'Nie. Schodołaz nie pasuje do każdych schodów. Szerokość schodów, spoczniki, zakręty i konstrukcja przedmiotu wpływają na możliwość jego użycia. Ostateczną decyzję podejmujemy po ocenie.',
    },
    {
      question: 'Czy możliwy jest demontaż przedmiotu?',
      answer: 'Tak, jeśli konstrukcja na to pozwala. Powiedz nam o takiej potrzebie przed wyceną, a uwzględnimy demontaż i ponowny montaż w zakresie.',
    },
    {
      question: 'Czy transport specjalistyczny można połączyć z przeprowadzką?',
      answer: 'Tak. Transport ciężkiego lub nietypowego przedmiotu może być częścią większej przeprowadzki - wystarczy, że powiesz nam o nim na etapie wyceny.',
    },
  ],
  finalCta: {
    heading: 'Pokaż nam przedmiot i drogę transportową',
    text: 'Prześlij zdjęcia, wymiary, przybliżoną masę oraz informacje o schodach, windzie i możliwości podjazdu. Na tej podstawie ocenimy, jak najlepiej to zrealizować.',
    ctaLabel: 'Poproś o ocenę i wycenę',
  },
};

/* ===================================================
   /transport-pianin-i-fortepianow-kielce/
   =================================================== */

export const pianinaPage = {
  seo: {
    title: 'Transport pianin i fortepianów Kielce | WHM',
    description: 'Transport pianin i fortepianów w Kielcach. Ocena dojścia, zabezpieczenie instrumentu, dobór sprzętu, przenoszenie i stabilizacja w samochodzie.',
    canonical: `${site.domain}transport-pianin-i-fortepianow-kielce/`,
  },
  breadcrumbs: [
    { label: 'Transport specjalistyczny', href: '/transport-specjalistyczny/' },
    { label: 'Pianina i fortepiany' },
  ],
  hero: {
    heading: 'Transport pianina lub fortepianu wymaga planu dla całej drogi',
    lead: 'Instrument trzeba nie tylko podnieść. Zanim ruszymy, oceniamy jego konstrukcję, wymiary, schody, zakręty, miejsce podjazdu i warunki w lokalizacji docelowej - żeby zaplanować wszystko od A do Z.',
    ctaLabel: 'Wyceń transport instrumentu',
    image: '/images/hero/hero-2.webp',
  },
  why: {
    eyebrow: 'Dlaczego instrument wymaga indywidualnej oceny',
    heading: 'Instrument to nie jest po prostu ciężki przedmiot',
    items: [
      'Masa i środek ciężkości różnią się w zależności od typu instrumentu',
      'Wymiary wpływają na możliwość pokonania zakrętów i przejść',
      'Delikatna obudowa wymaga odpowiedniego zabezpieczenia',
      'Schody i zakręty mogą uniemożliwić standardowe przeniesienie',
      'Progi i nierówności wpływają na sposób przenoszenia',
      'Liczba osób i potrzebny sprzęt zależą od warunków',
      'Sposób unieruchomienia w pojeździe zależy od konstrukcji instrumentu',
    ],
  },
  clientInfo: {
    eyebrow: 'Co pomaga nam w ocenie',
    heading: 'Pomożemy szybciej, jeśli prześlesz:',
    items: [
      'Zdjęcia instrumentu',
      'Informację, czy jest to pianino, fortepian czy inny instrument klawiszowy',
      'Wymiary',
      'Przybliżoną masę, jeśli ją znasz',
      'Piętra w obu lokalizacjach',
      'Zdjęcia schodów i zakrętów',
      'Informacje o windzie',
      'Odległość od wejścia do miejsca postoju',
      'Te same informacje dla miejsca docelowego',
    ],
  },
  protection: {
    eyebrow: 'Zabezpieczenie instrumentu',
    heading: 'Jak chronimy instrument podczas transportu',
    text: 'Stosujemy dopasowane materiały ochronne, zabezpieczamy powierzchnie, unieruchamiamy ruchome elementy, wykorzystujemy pasy i stabilizujemy instrument w pojeździe. Sposób przygotowania zależy od konstrukcji - nie każde pianino i nie każdy fortepian zabezpieczamy tak samo.',
  },
  photos: {
    eyebrow: 'Prawdziwe zdjęcia realizacji',
    heading: 'Instrument zabezpieczony na różnych etapach',
    items: [
      { src: '/images/transport-pianin-i-fortepianow/transport-pianin-i-fortepianow-kielce-1.webp', alt: 'Pianino zabezpieczone pokrowcami i pasami przed wyniesieniem' },
      { src: '/images/transport-pianin-i-fortepianow/transport-pianin-i-fortepianow-kielce-2.webp', alt: 'Instrument owinięty materiałem ochronnym podczas przygotowania do transportu' },
      { src: '/images/transport-pianin-i-fortepianow/transport-pianin-i-fortepianow-kielce-4.webp', alt: 'Zabezpieczony instrument gotowy do przeniesienia przez zespół WHM' },
    ],
  },
  stairs: {
    eyebrow: 'Schody i trudny dostęp',
    heading: 'Sam ciężar nie rozstrzyga o możliwości realizacji',
    text: 'Szerokość schodów, spoczniki, zakręty i konstrukcja budynku mają znaczenie równie ważne jak masa instrumentu. Schodołaz nie może zostać użyty w każdych warunkach. Ostateczny sposób transportu dobieramy po ocenie - dlatego prosimy o zdjęcia.',
  },
  notIncluded: {
    eyebrow: 'Czego nie obejmuje usługa',
    heading: 'Nie wykonujemy:',
    items: [
      'Strojenia instrumentu',
      'Naprawy i renowacji',
      'Magazynowania instrumentów w warunkach specjalistycznych',
    ],
  },
  faq: [
    {
      question: 'Od czego zależy wycena transportu pianina?',
      answer: 'Od rodzaju instrumentu, jego wymiarów, przybliżonej masy, pięter, warunków na klatce schodowej, obecności windy, odległości od wejścia do samochodu oraz warunków w miejscu docelowym.',
    },
    {
      question: 'Czy potrzebne są zdjęcia klatki schodowej?',
      answer: 'Tak. Zdjęcia schodów, zakrętów i spoczników pomagają nam ocenić możliwość przeniesienia instrumentu. Im dokładniejsze zdjęcia, tym precyzyjniejsza ocena.',
    },
    {
      question: 'Czy pianino jest zabezpieczane przed wyniesieniem?',
      answer: 'Tak. Instrument zabezpieczamy dopasowanymi materiałami ochronnymi, pasami i pokrowcami zanim zaczniemy go przenosić. Sposób zabezpieczenia zależy od konstrukcji.',
    },
    {
      question: 'Czy schodołaz można wykorzystać na każdych schodach?',
      answer: 'Nie. Schodołaz nie pasuje do każdych schodów. Szerokość schodów, spoczniki, zakręty i konstrukcja budynku wpływają na możliwość jego użycia.',
    },
    {
      question: 'Czy WHM transportuje również fortepiany?',
      answer: 'Tak. Transportujemy pianina i fortepiany. Każdy instrument wymaga indywidualnej oceny konstrukcji, wymiarów i drogi transportowej.',
    },
    {
      question: 'Czy można połączyć transport instrumentu z przeprowadzką?',
      answer: 'Tak. Transport instrumentu może być częścią większej przeprowadzki - wystarczy, że powiesz nam o nim na etapie wyceny.',
    },
  ],
  finalCta: {
    heading: 'Wycenę zacznijmy od zdjęć instrumentu i drogi',
    text: 'Prześlij zdjęcia pianina lub fortepianu, schodów, wejścia oraz miejsca docelowego. Dodaj wymiary i informację o piętrach - a my zajmiemy się resztą.',
    ctaLabel: 'Poproś o wycenę',
  },
};

/* ===================================================
   Historyczne dane skonsolidowane w /transport-specjalistyczny/
   =================================================== */

export const gabarytyPage = {
  seo: {
    title: 'Transport gabarytowy Kielce | Ciężkie przedmioty WHM',
    description: 'Transport gabarytowy w Kielcach. Ciężkie meble, urządzenia i nietypowe wyposażenie po wcześniejszej ocenie wymiarów, masy i drogi transportowej.',
    canonical: `${site.domain}transport-specjalistyczny/`,
  },
  breadcrumbs: [
    { label: 'Transport specjalistyczny', href: '/transport-specjalistyczny/' },
    { label: 'Transport gabarytowy' },
  ],
  hero: {
    heading: 'Transport gabarytowy dopasowany do przedmiotu i warunków dostępu',
    lead: 'Wymiary, ciężar i droga transportowa tworzą jeden problem do rozwiązania. Zanim potwierdzimy realizację, oceniamy wszystkie te elementy razem - żeby zaplanować, a nie improwizować.',
    ctaLabel: 'Wyceń transport gabarytu',
    note: 'Pokaż nam przedmiot i drogę transportową - ocenimy, jak najlepiej to zrealizować.',
    image: '/images/transport-gabarytow/transport-gabarytow-kielce-7.webp',
  },
  examples: {
    eyebrow: 'Co może być gabarytem',
    heading: 'Przykłady przedmiotów wymagających specjalnego podejścia',
    items: [
      'Ciężkie meble',
      'Duże urządzenia',
      'Piece',
      'Sejfy',
      'Wyposażenie techniczne',
      'Elementy wymagające schodołazu',
      'Przedmioty wymagające niestandardowego sposobu wniesienia',
    ],
  },
  assessment: {
    eyebrow: 'Trzy elementy oceny',
    heading: 'Przedmiot, droga i sprzęt - oceniane razem',
    groups: [
      {
        title: 'Przedmiot',
        items: [
          'Rodzaj',
          'Wymiary',
          'Masa',
          'Konstrukcja',
          'Możliwość demontażu',
          'Miejsca bezpiecznego podparcia',
        ],
      },
      {
        title: 'Droga',
        items: [
          'Drzwi',
          'Korytarze',
          'Schody',
          'Zakręty',
          'Progi',
          'Wysokość',
          'Odległość od samochodu',
        ],
      },
      {
        title: 'Sprzęt',
        items: [
          'Wózki',
          'Pasy',
          'Zabezpieczenia',
          'Winda załadunkowa',
          'Schodołaz',
          'Dodatkowy sprzęt dobrany do warunków',
        ],
      },
    ],
  },
  escalera: {
    eyebrow: 'Schodołaz Escalera',
    heading: 'Narzędzie, które pomaga w wybranych realizacjach',
    text: 'Schodołaz Escalera to elektryczny schodołaz kroczący. Nie pasuje do każdych schodów, a jego użycie zależy od konstrukcji przedmiotu. Parametry producenta nie są równoznaczne z możliwością wykonania każdego transportu - warunki oceniamy przed potwierdzeniem zlecenia.',
    notice: 'WHM realizowało transporty przedmiotów ważących około 400 kg. Nie oznacza to automatycznej możliwości przewiezienia każdego przedmiotu o podobnej masie - znaczenie mają również wymiary, konstrukcja oraz droga transportowa.',
  },
  photos: {
    eyebrow: 'Zdjęcia realizacji',
    heading: 'Tak wygląda praca z ciężkimi i nietypowymi przedmiotami',
    items: [
      { src: '/images/transport-gabarytow/transport-gabarytow-kielce-5.webp', alt: 'Praca ze schodołazem podczas przenoszenia ciężkiego przedmiotu' },
      { src: '/images/transport-gabarytow/transport-gabarytow-kielce-6.webp', alt: 'Wyposażenie wymagające ostrożnego podejścia podczas transportu' },
      { src: '/images/transport-gabarytow/transport-gabarytow-kielce-3.webp', alt: 'Przenoszenie dużego zabezpieczonego przedmiotu przez zespół WHM' },
      { src: '/images/transport-pieca/transport-pieca-kielce-1.webp', alt: 'Ciężkie urządzenie przygotowane do przemieszczenia' },
    ],
  },
  extraEquipment: {
    eyebrow: 'Kiedy potrzebny jest dodatkowy sprzęt',
    heading: 'Standardowe wyniesienie nie zawsze wystarczy',
    text: 'W zależności od warunków mogą być potrzebne:',
    items: [
      'Schodołaz',
      'Winda załadunkowa',
      'Transport przez inne wejście',
      'Demontaż',
      'Dodatkowe zabezpieczenie',
      'Zewnętrzny sprzęt podnoszący',
    ],
    note: 'Dostępność każdego rozwiązania potwierdzamy po ocenie warunków.',
  },
  inquiry: {
    eyebrow: 'Jak przygotować zapytanie',
    heading: 'Pomożemy szybciej, jeśli prześlesz:',
    items: [
      'Zdjęcia przedmiotu',
      'Dokładne wymiary',
      'Masę lub model urządzenia',
      'Zdjęcia całej drogi',
      'Piętra',
      'Informacje o windzie',
      'Możliwość podjazdu',
      'Lokalizację odbioru i dostawy',
      'Informację, czy przedmiot można zdemontować',
    ],
  },
  faq: [
    {
      question: 'Co jest potrzebne do wyceny gabarytu?',
      answer: 'Zdjęcia przedmiotu, dokładne wymiary, masa lub model urządzenia, zdjęcia całej drogi transportowej, piętra, informacje o windzie, możliwość podjazdu oraz lokalizacje odbioru i dostawy. Im więcej nam pokażesz, tym szybciej Ci odpowiemy.',
    },
    {
      question: 'Czy WHM korzysta ze schodołazu?',
      answer: 'Tak, korzystamy z elektrycznego schodołazu kroczącego Escalera. Jego użycie zależy od konstrukcji schodów, wymiarów przedmiotu i warunków w obu lokalizacjach.',
    },
    {
      question: 'Czy każdy przedmiot można przewieźć po schodach?',
      answer: 'Nie. Wymiary, masa, konstrukcja przedmiotu oraz szerokość schodów, zakręty i spoczniki wpływają na możliwość przeniesienia. Ostateczną decyzję podejmujemy po ocenie.',
    },
    {
      question: 'Czy możliwy jest transport urządzenia ważącego kilkaset kilogramów?',
      answer: 'WHM realizowało transporty przedmiotów ważących około 400 kg. Każdy taki przedmiot wymaga jednak oceny wymiarów, konstrukcji i drogi transportowej - prześlij nam zdjęcia, a ocenimy możliwości.',
    },
    {
      question: 'Czy WHM organizuje dodatkowy sprzęt podnoszący?',
      answer: 'W wybranych realizacjach może być potrzebny dodatkowy sprzęt. Jego dostępność i zasadność potwierdzamy po ocenie warunków.',
    },
    {
      question: 'Czy przedmiot może wymagać demontażu?',
      answer: 'Tak. Jeśli konstrukcja na to pozwala, demontaż uzgodnionych elementów uwzględnimy w zakresie - powiedz nam o tym przed wyceną.',
    },
    {
      question: 'Czy transport gabarytu można połączyć z przeprowadzką?',
      answer: 'Tak. Transport gabarytu może być częścią większej przeprowadzki - wystarczy, że dasz nam znać na etapie wyceny.',
    },
  ],
  finalCta: {
    heading: 'Najpierw oceńmy, czy i jak można to wykonać',
    text: 'Wyślij zdjęcia przedmiotu, jego wymiary i możliwie dokładne informacje o drodze od miejsca odbioru do ustawienia w lokalizacji docelowej. Odezwiemy się z oceną.',
    ctaLabel: 'Poproś o ocenę i wycenę',
  },
};

/* ===================================================
   /magazyny/
   =================================================== */

export const magazynyPage = {
  seo: {
    title: 'Magazyny i przechowywanie mienia Kielce | WHM',
    description: 'Magazyny WHM w Masłowie koło Kielc. Suche i ogrzewane schowki do przechowywania mienia. Dostępność potwierdzamy indywidualnie.',
    canonical: `${site.domain}magazyny-kielce/`,
  },
  breadcrumbs: [{ label: 'Magazyny WHM' }],
  hero: {
    heading: 'Przechowywanie mienia w suchych i ogrzewanych schowkach',
    lead: 'Magazyny WHM rozszerzają przeprowadzkę o etap pomiędzy odbiorem a dostarczeniem mienia. Ogrzewane boksy od 2 do 9 m² przy ulicy Lotniczej 60A w Masłowie są gotowe i częściowo zajęte.',
    ctaLabel: 'Zapytaj o dostępność',
    ctaHref: '/kontakt/',
    heroImage: null as string | null,
  },
  status: 'Magazyny WHM w Masłowie są gotowe i częściowo zajęte. Dostępność boksu od 2 do 9 m² oraz możliwy termin przyjęcia mienia potwierdzamy indywidualnie.',
  asPart: {
    eyebrow: 'Magazyn jako część procesu',
    heading: 'Kiedy przechowywanie bywa przydatne',
    items: [
      'Terminy opuszczenia i odbioru nieruchomości nie pokrywają się',
      'Twój nowy lokal nie jest jeszcze gotowy',
      'Potrzebujesz czasowo zwolnić przestrzeń',
      'Firma przenosi wyposażenie etapami',
      'Część mienia ma zostać dostarczona później',
    ],
  },
  features: {
    eyebrow: 'Standard boksów',
    heading: 'Cechy magazynów WHM',
    items: [
      'Suche pomieszczenia',
      'Ogrzewane schowki',
      'Boksy od 2 do 9 m²',
      'Ochrona mienia przed wpływem warunków atmosferycznych',
      'Możliwość połączenia przechowywania z usługą przeprowadzkową',
      'Lokalizacja w Masłowie Pierwszym',
    ],
  },
  whatToStore: {
    eyebrow: 'Co można przechowywać',
    heading: 'Kategorie mienia, które możemy przyjąć',
    items: [
      'Meble',
      'Wyposażenie mieszkania lub domu',
      'Spakowane mienie',
      'Wyposażenie firmy',
      'Kartony z rzeczami',
      'Elementy oczekujące na dostarczenie do lokalizacji docelowej',
    ],
    note: 'Możliwość przyjęcia konkretnych rzeczy potwierdzamy przed realizacją - opisz nam, co chcesz przechować.',
  },
  process: {
    eyebrow: 'Przeprowadzka z etapem magazynowym',
    heading: 'Jak wygląda proces',
    steps: [
      { number: '01', title: 'Opis mienia i okresu', desc: 'Opisz nam mienie i planowany okres przechowywania.' },
      { number: '02', title: 'Ocena zakresu', desc: 'Oceniamy zakres przeprowadzki oraz potrzebną przestrzeń.' },
      { number: '03', title: 'Potwierdzenie dostępności', desc: 'Potwierdzamy dostępność i możliwy termin.' },
      { number: '04', title: 'Pakowanie i zabezpieczenie', desc: 'Mienie jest pakowane oraz zabezpieczane zgodnie z ustalonym zakresem.' },
      { number: '05', title: 'Transport i przyjęcie', desc: 'Transport możemy połączyć z przyjęciem do magazynu.' },
      { number: '06', title: 'Odbiór lub dostarczenie', desc: 'Termin późniejszego odbioru lub dostarczenia ustalamy wspólnie, gdy będziesz gotowy.' },
    ],
  },
  location: {
    eyebrow: 'Lokalizacja i wizyty',
    heading: 'Adres magazynów',
    address: 'Lotnicza 60A, 26-001 Masłów Pierwszy',
    visitNote: 'Wizyta w lokalizacji wymaga wcześniejszego kontaktu telefonicznego.',
    hoursNote: 'Godziny kontaktu: poniedziałek–piątek 8:00–20:00, sobota 8:00–18:00.',
  },
  faq: [
    {
      question: 'Gdzie znajdują się Magazyny WHM?',
      answer: 'Magazyny WHM znajdują się pod adresem Lotnicza 60A, 26-001 Masłów Pierwszy. Obiekt jest gotowy i częściowo zajęty.',
    },
    {
      question: 'Czy schowki są ogrzewane?',
      answer: 'Tak, boksy od 2 do 9 m² znajdują się w ogrzewanym obiekcie.',
    },
    {
      question: 'Czy można połączyć przeprowadzkę z magazynowaniem?',
      answer: 'Tak. Przechowywanie może być częścią przeprowadzki - transport połączymy z przyjęciem mienia do magazynu, żebyś nie musiał się o nic martwić.',
    },
    {
      question: 'Czy można przyjechać bez wcześniejszego kontaktu?',
      answer: 'Nie. Wizyta w lokalizacji wymaga wcześniejszego kontaktu telefonicznego - zadzwoń, a umówimy się na konkretny termin.',
    },
    {
      question: 'Jak sprawdzić dostępność miejsca?',
      answer: 'Zadzwoń do nas lub napisz - potwierdzimy dostępność schowków i możliwy termin przyjęcia mienia.',
    },
    {
      question: 'Czy WHM może później dostarczyć przechowywane mienie?',
      answer: 'Tak. Termin późniejszego odbioru lub dostarczenia ustalamy wspólnie - daj nam znać, gdy będziesz gotowy.',
    },
  ],
  finalCta: {
    heading: 'Zapytaj o dostępność i możliwy termin',
    text: 'Opisz rodzaj mienia, jego przybliżoną ilość oraz planowany okres przechowywania. Dostępność właściwego boksu potwierdzimy po kontakcie.',
  },
};

/* ===================================================
   /standard-whm/
   =================================================== */

export const standardPage = {
  seo: {
    title: 'Standard WHM | Jak realizujemy przeprowadzki',
    description: 'Poznaj Standard WHM: wcześniejsze ustalenie zakresu, profesjonalne zabezpieczenia, właściwy sprzęt, pakowanie i kontrolowane rozmieszczenie mienia.',
    canonical: `${site.domain}standard-whm/`,
  },
  breadcrumbs: [{ label: 'Standard WHM' }],
  hero: {
    heading: 'Standard WHM to sposób pracy, nie dodatkowy pakiet',
    lead: 'Jakość przeprowadzki wynika z decyzji podejmowanych przed transportem i podczas każdego etapu realizacji - od oceny warunków po zabezpieczenie oraz stabilizację mienia.',
    ctaLabel: 'Poproś o wycenę',
    image: '/images/standard-whm/zabezpieczenia-1.webp',
    imageAlt: 'Pasy i zabezpieczenia stabilizujące ładunek',
  },
  arrangements: {
    eyebrow: 'Najpierw ustalenia',
    heading: 'Zanim cokolwiek zostanie podniesione, ustalamy',
    items: [
      'Zakres usługi',
      'Rodzaj mienia',
      'Warunki dostępu',
      'Elementy wymagające demontażu',
      'Rzeczy delikatne lub ciężkie',
      'Kolejność działań',
      'Miejsce docelowe',
    ],
  },
  protection: {
    eyebrow: 'Zabezpieczenie dopasowane do mienia',
    heading: 'Różne przedmioty wymagają różnych zabezpieczeń',
    text: 'Kartony, koce, pokrowce, taśmy, pasy i materiały ochronne - każdy rodzaj zabezpieczenia dobieramy do wrażliwości, kształtu i masy konkretnego przedmiotu. Twoje rzeczy są dla nas ważne.',
    image: '/images/packing-services/pakowanie-przeprowadzki-kielce-1.webp',
    imageAlt: 'Dokładnie zabezpieczone elementy wyposażenia przed transportem',
  },
  disassembly: {
    eyebrow: 'Demontaż bez przypadkowego odkładania elementów',
    heading: 'Jeśli demontaż jest potrzebny, robimy to w uporządkowany sposób',
    text: 'Oceniamy, czy demontaż jest potrzebny. Zabezpieczamy powierzchnie, porządkujemy zdemontowane części i przygotowujemy je do transportu. Ponowny montaż wykonujemy, gdy został objęty zakresem. Nie wykonujemy napraw stolarskich ani renowacji.',
    image: '/images/furniture-assembly/montaz-demontaz-mebli-2.webp',
    imageAlt: 'Uporządkowane elementy mebla po demontażu przygotowane do transportu',
  },
  equipment: {
    eyebrow: 'Sprzęt dobrany do warunków',
    heading: 'Realne wyposażenie, nie obietnice',
    text: 'Wózki, pasy transportowe, windy załadunkowe, zabezpieczona przestrzeń ładunkowa oraz schodołaz Escalera przy odpowiednich warunkach. Sprzęt dobieramy do konkretnego zlecenia - nie odwrotnie.',
    image: '/images/transport-gabarytow/transport-gabarytow-kielce-1.webp',
    imageAlt: 'Profesjonalny sprzęt i zabezpieczony ładunek wewnątrz samochodu WHM',
  },
  packing: {
    eyebrow: 'Pakowanie i oznaczanie',
    heading: 'Mienie pakujemy logicznie, nie przypadkowo',
    items: [
      'Logiczne grupowanie rzeczy według pomieszczeń',
      'Prawidłowy dobór kartonów do rodzaju mienia',
      'Oznaczanie kartonów i pojemników',
      'Oddzielenie przedmiotów delikatnych',
      'Przygotowanie rzeczy potrzebnych od razu po przeprowadzce',
    ],
    image: '/images/moving-boxes/kartony-do-przeprowadzki-4.webp',
    imageAlt: 'Oznaczone kartony przeprowadzkowe przygotowane do transportu',
  },
  stabilization: {
    eyebrow: 'Stabilizacja w samochodzie',
    heading: 'Zabezpieczenie powierzchni to dopiero połowa',
    text: 'Samo zabezpieczenie powierzchni przedmiotu nie wystarcza. Mienie musi zostać również właściwie rozmieszczone i unieruchomione na czas transportu. Sposób stabilizacji dobieramy do rodzaju ładunku i warunków drogi, żeby Twoje rzeczy dotarły w takim stanie, w jakim zostały załadowane.',
  },
  forWhom: {
    eyebrow: 'Standard dla każdego zlecenia',
    heading: 'Te same zasady przygotowania obowiązują zawsze',
    items: [
      { label: 'Przeprowadzki mieszkań i domów', href: '/przeprowadzki/' },
      { label: 'Przeprowadzki firm i instytucji', href: '/przeprowadzki-firm-i-instytucji/' },
      { label: 'Pakowanie i zabezpieczanie', href: '/pakowanie-i-zabezpieczanie/' },
      { label: 'Transport specjalistyczny', href: '/transport-specjalistyczny/' },
    ],
  },
  notPromised: {
    eyebrow: 'Czego nie obiecujemy bez oceny',
    heading: 'Bez wcześniejszych informacji nie potwierdzamy',
    items: [
      'Możliwości transportu każdego ciężkiego przedmiotu',
      'Użycia schodołazu w każdych warunkach',
      'Konkretnego czasu realizacji',
      'Zakresu demontażu',
      'Dostępności magazynu',
      'Ostatecznej wyceny',
    ],
  },
  faq: [
    {
      question: 'Czy zabezpieczenia są częścią każdej realizacji?',
      answer: 'Tak. Zabezpieczenie mienia pokrowcami, kocami i pasami to stały element naszej pracy - nie trzeba o to osobno prosić.',
    },
    {
      question: 'Czy WHM może spakować całe mieszkanie lub biuro?',
      answer: 'Tak. Możemy przygotować do transportu całe wyposażenie albo tylko wybrane elementy - decydujesz, co przejmuje WHM.',
    },
    {
      question: 'Czy demontaż mebli trzeba ustalić wcześniej?',
      answer: 'Tak. Powiedz nam o potrzebie demontażu i ponownego montażu przed wyceną, a uwzględnimy to w zakresie.',
    },
    {
      question: 'Czy schodołaz może być użyty na każdych schodach?',
      answer: 'Nie. Schodołaz nie pasuje do każdych schodów. Szerokość schodów, spoczniki, zakręty i konstrukcja przedmiotu wpływają na możliwość jego użycia.',
    },
    {
      question: 'Od czego zależy dobór samochodu i sprzętu?',
      answer: 'Od ilości i rodzaju mienia, pięter, odległości oraz obecności przedmiotów nietypowych lub ciężkich. Opowiedz nam o swoim zleceniu, a dobierzemy odpowiedni zespół i pojazd.',
    },
    {
      question: 'Czy można zamówić tylko wybrany etap usługi?',
      answer: 'Tak. Możemy przejąć cały proces lub tylko wybrany etap - na przykład sam transport albo samo pakowanie. Ty decydujesz.',
    },
  ],
  finalCta: {
    heading: 'Dobra realizacja zaczyna się od właściwego zakresu',
    text: 'Opisz mienie, lokalizacje i warunki dostępu. Na tej podstawie ustalimy, jak przygotować Twoją przeprowadzkę w Standardzie WHM.',
  },
};

/* ===================================================
   /whm-shop/
   =================================================== */

export const shopPage = {
  seo: {
    title: 'WHM Shop | Materiały do przeprowadzek',
    description: 'WHM Shop to materiały używane przy profesjonalnych przeprowadzkach: kartony, pokrowce, koce i akcesoria do zabezpieczania mienia.',
    canonical: `${site.domain}whm-shop/`,
  },
  breadcrumbs: [{ label: 'WHM Shop' }],
  hero: {
    heading: 'Materiały przeprowadzkowe sprawdzone w prawdziwej pracy',
    lead: 'WHM Shop powstał z doświadczenia zdobywanego podczas przeprowadzek. Jeśli pakujesz się samodzielnie albo prowadzisz firmę przeprowadzkową - znajdziesz tu materiały przeznaczone do realnej pracy z mieniem.',
    ctaLabel: 'Przejdź do WHM Shop',
    ctaHref: 'https://www.whmshop.pl/',
    ctaSecondaryLabel: 'Zobacz kartony do przeprowadzki',
    ctaSecondaryHref: 'https://www.whmshop.pl/kartony-do-przeprowadzki',
    image: '/images/moving-boxes/kartony-do-przeprowadzki-3.webp',
  },
  experience: {
    eyebrow: 'Sklep zbudowany na doświadczeniu operacyjnym',
    heading: 'Materiały wybrane przez firmę, która z nich korzysta',
    text: 'WHM Shop jest rozwijany przez firmę, która sama używa tych materiałów podczas realizacji. Wybór produktów wynika z praktyki - nie z katalogu dostawcy.',
  },
  categories: {
    eyebrow: 'Główne kategorie potrzeb',
    heading: 'Co znajdziesz w WHM Shop',
    items: [
      'Kartony do przeprowadzek',
      'Pokrowce ochronne',
      'Koce przeprowadzkowe',
      'Gumy i pasy',
      'Materiały do pakowania oraz zabezpieczania',
    ],
  },
  boxes: {
    eyebrow: 'Kartony do samodzielnej przeprowadzki',
    heading: 'Właściwy karton ma znaczenie',
    items: [
      'Dobierz rozmiar do rodzaju rzeczy',
      'Pilnuj rozsądnej masy pojedynczego kartonu',
      'Oznaczaj zawartość',
      'Grupuj rzeczy według pomieszczeń',
      'Nie wypełniaj dużych kartonów wyłącznie ciężkimi przedmiotami',
    ],
    image: '/images/moving-boxes/kartony-do-przeprowadzki-1.webp',
    imageAlt: 'Kartony przeprowadzkowe ułożone i gotowe do pakowania',
    cta: { label: 'Zobacz kartony w WHM Shop', href: 'https://www.whmshop.pl/kartony-do-przeprowadzki' },
  },
  materials: {
    eyebrow: 'Materiały używane podczas pracy',
    heading: 'Akcesoria sprawdzone w codziennych realizacjach',
    image: '/images/shop-materials/sklep-z-materialami-1.webp',
    imageAlt: 'Materiały i akcesoria transportowe wykorzystywane podczas realizacji WHM',
  },
  vsService: {
    eyebrow: 'Materiały a usługa WHM',
    heading: 'Dwa scenariusze przygotowania mienia',
    options: [
      {
        title: 'Pakujesz samodzielnie',
        text: 'Zamawiasz kartony, pokrowce i inne materiały z WHM Shop. Pakujesz i zabezpieczasz mienie we własnym tempie.',
      },
      {
        title: 'Zlecasz pakowanie zespołowi WHM',
        text: 'Nasz zespół przejmuje pakowanie, zabezpieczanie i przygotowanie mienia do transportu w ramach usługi przeprowadzkowej.',
        link: { label: 'Pakowanie i zabezpieczanie', href: '/pakowanie-i-zabezpieczanie/' },
      },
    ],
  },
  forBusiness: {
    eyebrow: 'Dla firm przeprowadzkowych',
    heading: 'Materiały do codziennej pracy',
    text: 'WHM Shop jest również skierowany do przedsiębiorców, którzy potrzebują materiałów do codziennej pracy przeprowadzkowej i transportowej.',
    cta: { label: 'Przejdź do WHM Shop', href: 'https://www.whmshop.pl/' },
  },
  inUse: {
    eyebrow: 'Materiały w użyciu',
    heading: 'Kartony podczas realnej realizacji',
    image: '/images/moving-boxes/kartony-do-przeprowadzki-2.webp',
    imageAlt: 'Kartony przeprowadzkowe podczas realnej realizacji WHM',
  },
  faq: [
    {
      question: 'Czy WHM Shop jest częścią WHM?',
      answer: 'Tak. WHM Shop jest sklepem internetowym rozwijanym przez WHM Przeprowadzki - firmę przeprowadzkową z Kielc.',
    },
    {
      question: 'Gdzie można sprawdzić aktualne ceny?',
      answer: 'Aktualne ceny i dostępność produktów znajdziesz na stronie sklepu pod adresem whmshop.pl.',
    },
    {
      question: 'Czy w sklepie są dostępne kartony do przeprowadzki?',
      answer: 'Tak. Kartony do przeprowadzek są dostępne w WHM Shop, między innymi w dedykowanej kategorii kartonów.',
    },
    {
      question: 'Czy materiały można kupić bez zamawiania przeprowadzki?',
      answer: 'Tak. WHM Shop działa niezależnie - możesz kupić materiały bez zamawiania usługi przeprowadzkowej.',
    },
    {
      question: 'Czy WHM może również spakować mienie?',
      answer: 'Tak. Pakowanie i zabezpieczanie mienia może być częścią usługi przeprowadzkowej WHM - wystarczy, że powiesz nam o tym na etapie wyceny.',
    },
    {
      question: 'Czy oferta jest przeznaczona także dla firm przeprowadzkowych?',
      answer: 'Tak. WHM Shop jest skierowany również do przedsiębiorców, którzy potrzebują materiałów do codziennej pracy.',
    },
  ],
  finalCta: {
    heading: 'Przygotuj mienie samodzielnie albo powierz pakowanie WHM',
    primaryCta: { label: 'Kup materiały w WHM Shop', href: 'https://www.whmshop.pl/' },
    secondaryCta: { label: 'Zleć pakowanie WHM', href: '/pakowanie-i-zabezpieczanie/' },
  },
};

/* ===================================================
   /realizacje/
   =================================================== */

export const realizacjePage = {
  seo: {
    title: 'Realizacje przeprowadzkowe WHM | Kielce',
    description: 'Zobacz prawdziwe zdjęcia realizacji WHM: przeprowadzki mieszkań, domów, biur i instytucji oraz transport przedmiotów wymagających szczególnego przygotowania.',
    canonical: `${site.domain}realizacje/`,
  },
  breadcrumbs: [{ label: 'Realizacje' }],
  hero: {
    heading: 'Prawdziwe realizacje zamiast zdjęć stockowych',
    lead: 'Pokazujemy pracę wykonywaną przez WHM: przygotowanie mienia, zabezpieczenia, wykorzystany sprzęt, transport i organizację bardziej wymagających realizacji.',
    image: '/images/realizacje/zamek-szydlowieckich/zamek-szydlowieckich-2.webp',
  },
  categories: [
    { title: 'Przeprowadzki mieszkań i domów', desc: 'Zabezpieczone wyposażenie przygotowane do transportu przed domem.', image: '/images/home-moving/przeprowadzki-domow-kielce-3.webp', alt: 'Zabezpieczone wyposażenie przygotowane do transportu przed domem', href: '/przeprowadzki/' },
    { title: 'Przeprowadzki firm i biur', desc: 'Uporządkowane i zabezpieczone wyposażenie biurowe podczas realizacji.', image: '/images/office-moving/przeprowadzki-biura-2.webp', alt: 'Uporządkowane i zabezpieczone wyposażenie biurowe podczas realizacji', href: '/przeprowadzki-firm-i-instytucji/' },
    { title: 'Obsługa instytucji', desc: 'Praca zespołu WHM przy obiekcie instytucjonalnym.', image: '/images/institution-moving/przeprowadzki-instytucji-4.webp', alt: 'Zabezpieczone wyposażenie instytucji podczas relokacji WHM', href: '/przeprowadzki-firm-i-instytucji/' },
    { title: 'Pakowanie i zabezpieczanie', desc: 'Duży mebel zabezpieczony pokrowcem i pasami przed wyniesieniem.', image: '/images/packing-services/pakowanie-przeprowadzki-kielce-3.webp', alt: 'Duży mebel zabezpieczony pokrowcem i pasami przed wyniesieniem', href: '/pakowanie-i-zabezpieczanie/' },
    { title: 'Transport specjalistyczny', desc: 'Praca ze schodołazem podczas przenoszenia ciężkiego przedmiotu.', image: '/images/transport-gabarytow/transport-gabarytow-kielce-5.webp', alt: 'Praca ze schodołazem podczas przenoszenia ciężkiego przedmiotu', href: '/transport-specjalistyczny/' },
    { title: 'Transport pianin i fortepianów', desc: 'Zabezpieczony instrument gotowy do przeniesienia przez zespół WHM.', image: '/images/transport-pianin-i-fortepianow/transport-pianin-i-fortepianow-kielce-4.webp', alt: 'Zabezpieczony instrument gotowy do przeniesienia przez zespół WHM', href: '/transport-pianin-i-fortepianow-kielce/' },
  ],
  finalCta: {
    heading: 'Każde zlecenie zaczynamy od jego rzeczywistych warunków',
    text: 'Zdjęcia pokazują różne rodzaje pracy, ale sposób realizacji zawsze zależy od mienia, dostępu, pięter, możliwości podjazdu i tego, co wspólnie ustalimy.',
  },
};

/* ===================================================
   /jak-to-dziala/
   =================================================== */

export const jakToDzialaPage = {
  seo: {
    title: 'Jak wygląda przeprowadzka z WHM | Proces współpracy',
    description: 'Zobacz, jak przebiega współpraca z WHM: kontakt, ocena zakresu, przygotowanie, zabezpieczenie, transport, wniesienie i zakończenie realizacji.',
    canonical: `${site.domain}jak-to-dziala/`,
  },
  breadcrumbs: [{ label: 'Jak to działa' }],
  hero: {
    heading: 'Od pierwszego kontaktu do zakończenia przeprowadzki',
    lead: 'Im więcej istotnych informacji ustalimy przed realizacją, tym mniej decyzji trzeba podejmować w jej trakcie. Dlatego zaczynamy od rozmowy.',
    image: '/images/hero/hero-4.webp',
  },
  process: [
    {
      number: '01',
      title: 'Opis zlecenia',
      desc: 'Powiedz nam o rodzaju usługi, lokalizacji odbioru i dostawy, zakresie mienia, piętrach, windach, warunkach podjazdu, oczekiwanym terminie oraz nietypowych lub ciężkich elementach.',
    },
    {
      number: '02',
      title: 'Ocena zakresu',
      desc: 'Sprawdzamy, jakie informacje są jeszcze potrzebne i czy zlecenie wymaga dodatkowych zdjęć lub dokładniejszej oceny. Sposób przygotowania dopasowujemy do skali.',
    },
    {
      number: '03',
      title: 'Ustalenie odpowiedzialności',
      desc: 'Przed realizacją wspólnie ustalamy, co pakujesz samodzielnie, co przejmuje WHM, które meble wymagają demontażu, jakie materiały są potrzebne i gdzie mają trafić rzeczy w nowej lokalizacji.',
    },
    {
      number: '04',
      title: 'Przygotowanie i zabezpieczenie',
      desc: 'Kartony, koce, pokrowce, pasy i oznaczanie - każdy element przygotowujemy zgodnie z ustalonym zakresem i dobieramy zabezpieczenia do rodzaju Twojego mienia.',
      image: '/images/moving-boxes/kartony-do-przeprowadzki-4.webp',
      imageAlt: 'Oznaczone kartony przeprowadzkowe przygotowane do transportu',
    },
    {
      number: '05',
      title: 'Wynoszenie, transport i wniesienie',
      desc: 'Kolejność wynoszenia, rozmieszczenie oraz stabilizacja ładunku mają znaczenie dla bezpieczeństwa mienia i sprawnego przebiegu realizacji.',
      image: '/images/kielce-moving/przeprowadzki-kielce-4.webp',
      imageAlt: 'Zabezpieczony i ustabilizowany ładunek wewnątrz samochodu WHM',
    },
    {
      number: '06',
      title: 'Zakończenie',
      desc: 'Przeprowadzka kończy się po wykonaniu wspólnie ustalonych prac - wniesieniu, ustawieniu lub montażu uzgodnionych elementów.',
    },
  ],
  checklist: {
    eyebrow: 'Co przygotować do wyceny',
    heading: 'Im więcej informacji, tym precyzyjniejsza ocena',
    items: [
      'Lokalizację odbioru i dostawy',
      'Zakres mienia',
      'Piętra i informacje o windach',
      'Możliwość podjazdu',
      'Elementy wymagające demontażu',
      'Ciężkie lub nietypowe przedmioty',
      'Oczekiwany termin',
    ],
  },
  faq: [
    {
      question: 'Jakie informacje są potrzebne do wyceny?',
      answer: 'Lokalizacja odbioru i dostawy, zakres mienia, piętra, informacje o windach, możliwość podjazdu, elementy wymagające demontażu, ciężkie lub nietypowe przedmioty oraz oczekiwany termin. Nie musisz znać wszystkiego - resztę ustalimy wspólnie.',
    },
    {
      question: 'Czy trzeba przesłać zdjęcia?',
      answer: 'Zdjęcia pomagają w ocenie, szczególnie przy schodach, zakrętach i nietypowych przedmiotach. Nie zawsze są wymagane, ale ułatwiają precyzyjną wycenę.',
    },
    {
      question: 'Czy WHM może zapewnić materiały?',
      answer: 'Tak. Kartony, pokrowce, koce i inne materiały możemy dostarczyć w ramach zlecenia lub możesz je zamówić z WHM Shop.',
    },
    {
      question: 'Czy można zlecić tylko transport?',
      answer: 'Tak. Możemy przejąć cały proces lub tylko wybrany etap - w tym sam transport. Ty decydujesz, czego potrzebujesz.',
    },
    {
      question: 'Kiedy trzeba zgłosić ciężkie przedmioty?',
      answer: 'Jak najwcześniej. Ciężkie i nietypowe przedmioty wymagają oceny wymiarów, masy i drogi transportowej - im wcześniej nam o nich powiesz, tym lepiej się przygotujemy.',
    },
    {
      question: 'Czy przechowywanie może być częścią przeprowadzki?',
      answer: 'Tak. Przechowywanie może być częścią przeprowadzki. Dostępność magazynu potwierdzamy po kontakcie.',
    },
  ],
};

/* ===================================================
   Historyczne dane przeniesione do /poradniki/
   =================================================== */

export const poradnikPage = {
  seo: {
    title: 'Jak przygotować się do przeprowadzki | Poradnik WHM',
    description: 'Praktyczny poradnik WHM: planowanie przeprowadzki, pakowanie kartonów, oznaczanie rzeczy, przygotowanie mebli i organizacja dnia transportu.',
    canonical: `${site.domain}poradniki/`,
  },
  breadcrumbs: [{ label: 'Poradnik' }],
  hero: {
    heading: 'Jak przygotować się do przeprowadzki bez niepotrzebnego chaosu',
    lead: 'Najwięcej problemów w dniu przeprowadzki wynika z decyzji pozostawionych na ostatnią chwilę. Ten poradnik pomoże Ci uporządkować przygotowania krok po kroku.',
  },
  nav: [
    { label: 'Kilka tygodni przed', href: '#tygodnie-przed' },
    { label: 'Pakowanie', href: '#pakowanie' },
    { label: 'Meble i większe elementy', href: '#meble' },
    { label: 'Rzeczy potrzebne od razu', href: '#rzeczy-od-razu' },
    { label: 'Dzień przeprowadzki', href: '#dzien' },
    { label: 'Po wniesieniu', href: '#po-wniesieniu' },
  ],
  sections: [
    {
      id: 'tygodnie-przed',
      heading: 'Kilka tygodni przed',
      items: [
        'Określ orientacyjny zakres mienia',
        'Zdecyduj, co zabierasz ze sobą',
        'Oddaj lub usuń rzeczy, których nie potrzebujesz',
        'Ustal termin przeprowadzki',
        'Sprawdź, jak wygląda dostęp w obu lokalizacjach',
        'Zgłoś nam ciężkie i nietypowe elementy',
      ],
    },
    {
      id: 'pakowanie',
      heading: 'Pakowanie',
      items: [
        'Używaj kartonów odpowiednich do zawartości',
        'Ciężkie rzeczy dziel pomiędzy mniejsze opakowania',
        'Zabezpiecz delikatne elementy',
        'Nie zostawiaj pustej przestrzeni, w której przedmioty mogłyby się przemieszczać',
        'Nie przeciążaj kartonów',
        'Zamykaj i oznaczaj opakowania',
      ],
      image: '/images/moving-boxes/kartony-do-przeprowadzki-1.webp',
      imageAlt: 'Kartony przeprowadzkowe ułożone i gotowe do pakowania',
    },
    {
      id: 'oznaczanie',
      heading: 'Oznaczanie',
      items: [
        'Wpisz pomieszczenie docelowe',
        'Zaznacz delikatną zawartość',
        'Oznacz kartony potrzebne jako pierwsze',
        'Stosuj spójny sposób opisywania',
      ],
      image: '/images/packing-services/pakowanie-przeprowadzki-kielce-6.webp',
      imageAlt: 'Oznaczone kartony przygotowane do transportu',
    },
    {
      id: 'meble',
      heading: 'Meble i duże przedmioty',
      items: [
        'Nie demontuj elementów bez planu ich ponownego złożenia',
        'Zabezpiecz okucia i ruchome części',
        'Daj nam znać o trudnych gabarytach',
        'Pokaż nam wcześniej schody, zakręty i wąskie drzwi',
      ],
    },
    {
      id: 'rzeczy-od-razu',
      heading: 'Rzeczy potrzebne od razu',
      intro: 'Przygotuj osobną torbę lub karton z rzeczami, których będziesz potrzebować jako pierwszych:',
      items: [
        'Dokumenty',
        'Leki',
        'Ładowarki',
        'Podstawowe kosmetyki',
        'Ubrania na zmianę',
        'Klucze',
        'Rzeczy potrzebne dzieciom lub zwierzętom',
      ],
    },
    {
      id: 'dzien',
      heading: 'Dzień przeprowadzki',
      items: [
        'Zapewnij dostęp do obu lokalizacji',
        'Ustal miejsce postoju samochodu',
        'Zabezpiecz zwierzęta',
        'Trzymaj dokumenty i rzeczy osobiste przy sobie',
        'Wskaż elementy szczególnie delikatne',
        'Potwierdź miejsce docelowe dla najważniejszych rzeczy',
      ],
    },
    {
      id: 'po-wniesieniu',
      heading: 'Po wniesieniu',
      items: [
        'Najpierw ustaw duże elementy',
        'Sprawdź oznaczenia kartonów',
        'Rozpakuj rzeczy potrzebne od razu',
        'Nie usuwaj zabezpieczeń z delikatnych elementów w przypadkowym miejscu',
      ],
    },
  ],
  ebookUrl: null as string | null,
  ebookImage: null as string | null,
  ebookImageAlt: 'Poradnik WHM - darmowy e-book o przygotowaniu do przeprowadzki',
  links: [
    { label: 'Pakowanie i zabezpieczanie', href: '/pakowanie-i-zabezpieczanie/' },
    { label: 'WHM Shop', href: '/whm-shop/' },
    { label: 'Poproś o wycenę', href: '/kontakt/#formularz' },
  ],
};

/* ===================================================
   /o-nas/
   =================================================== */

export const oNasPage = {
  seo: {
    title: 'O WHM Przeprowadzki | Kielce i Masłów',
    description: 'Poznaj WHM Przeprowadzki — zespół rozwijający od 2019 roku usługi przeprowadzkowe, transport specjalistyczny i przechowywanie mienia.',
    canonical: `${site.domain}o-nas/`,
  },
  breadcrumbs: [{ label: 'O nas' }],
  hero: {
    heading: 'WHM rozwija się razem z odpowiedzialnością za mienie klientów',
    lead: 'Od 2019 roku przeszliśmy drogę od lokalnych usług transportowych do rozbudowanej obsługi przeprowadzek, transportu specjalistycznego, materiałów i przechowywania. Każda realizacja nauczyła nas czegoś nowego.',
    image: '/images/hero/hero-1.webp',
  },
  development: {
    eyebrow: 'Od transportu do pełnej obsługi',
    heading: 'Rozwój zakresu usług',
    text: 'WHM zaczynało od lokalnych usług transportowych. Z każdym rokiem zakres rósł - od prostych przewozów, przez przeprowadzki mieszkań i domów, po obsługę firm, instytucji oraz transport specjalistyczny. Dziś WHM to ekosystem obejmujący przeprowadzki, materiały i przechowywanie mienia.',
  },
  standard: {
    eyebrow: 'Dlaczego powstał Standard WHM',
    heading: 'Jakość wynika z doświadczenia',
    text: 'Wraz z bardziej wymagającymi realizacjami rozwijały się materiały, zabezpieczenia, sprzęt, planowanie i specjalizacja. Standard WHM to zbiór zasad pracy wypracowanych podczas realnych zleceń - nie deklaracja marketingowa.',
    link: { label: 'Poznaj Standard WHM', href: '/standard-whm/' },
  },
  ecosystem: {
    eyebrow: 'Jeden ekosystem',
    heading: 'Trzy powiązane elementy',
    items: [
      { title: 'WHM Przeprowadzki', desc: 'Usługi przeprowadzkowe i transportowe dla osób prywatnych, firm i instytucji.', href: '/przeprowadzki/' },
      { title: 'WHM Shop', desc: 'Sklep z materiałami przeprowadzkowymi, powstały z doświadczenia operacyjnego.', href: '/whm-shop/' },
      { title: 'Magazyny WHM', desc: 'Ogrzewane boksy od 2 do 9 m² w gotowym obiekcie w Masłowie. Dostępność potwierdzamy po kontakcie.', href: '/magazyny-kielce/' },
    ],
  },
  local: {
    eyebrow: 'Lokalnie i odpowiedzialnie',
    heading: 'Związek z Kielcami i regionem',
    text: 'WHM działa w Kielcach i regionie świętokrzyskim. Nowa lokalizacja operacyjna w Masłowie Pierwszym rozszerza nasze możliwości przechowywania mienia i organizacji realizacji.',
    image: '/images/kielce-moving/przeprowadzki-kielce-1.webp',
    imageAlt: 'Samochód WHM podczas realizacji w Kielcach',
  },
  companyData: {
    eyebrow: 'Dane firmy',
    heading: 'WHM TRANSPORT MATEUSZ KONDERA',
    owner: 'Mateusz Kondera',
    nip: '9591920724',
    operationalAddress: 'Lotnicza 60A, 26-001 Masłów Pierwszy',
    registeredAddress: 'Nowy Świat 44a/14, 25-522 Kielce',
    phone: '+48 720 719 022',
    email: 'kontakt@whmprzeprowadzkikielce.pl',
  },
};

/* ===================================================
   Shared form data (used by /kontakt/ and service pages)
   =================================================== */

export const quoteFormEnabled = true;

export const consentText =
  'Wyrażam zgodę na wykorzystanie podanych danych w celu obsługi mojego zapytania. Szczegóły znajdują się w polityce prywatności.';

/* ===================================================
   /kontakt/
   =================================================== */

export const kontaktPage = {
  seo: {
    title: 'Kontakt i wycena | WHM Przeprowadzki Kielce',
    description:
      'Skontaktuj się z WHM Przeprowadzki. Telefon, SMS, e-mail, godziny kontaktu, adres operacyjny w Masłowie Pierwszym oraz formularz wyceny przeprowadzki.',
    canonical: `${site.domain}kontakt/`,
  },
  breadcrumbs: [{ label: 'Kontakt' }],
  hero: {
    heading: 'Porozmawiajmy o zakresie Twojej przeprowadzki',
    lead: 'Zadzwoń, napisz SMS-a, wyślij e-mail albo wypełnij formularz wyceny. Jeśli chcesz odwiedzić naszą lokalizację operacyjną, skontaktuj się wcześniej telefonicznie.',
  },
  contact: {
    phone: '+48 720 719 022',
    phoneRaw: '+48720719022',
    email: 'kontakt@whmprzeprowadzkikielce.pl',
    operationalAddress: 'Lotnicza 60A, 26-001 Masłów Pierwszy',
    registeredAddress: 'Nowy Świat 44a/14, 25-522 Kielce',
    hoursWeekdays: '8:00–20:00',
    hoursSaturday: '8:00–18:00',
    visitNote: 'Wizyta w lokalizacji operacyjnej wymaga wcześniejszego kontaktu telefonicznego.',
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Lotnicza+60A+26-001+Masłów+Pierwszy',
  },
};

/* ===================================================
   /polityka-prywatnosci/
   =================================================== */

export const privacyPolicyFinalized = true;

export const politykaPage = {
  seo: {
    title: 'Polityka prywatności - WHM Przeprowadzki',
    description: 'Informacje o przetwarzaniu danych osobowych przez WHM TRANSPORT MATEUSZ KONDERA.',
    canonical: `${site.domain}polityka-prywatnosci/`,
  },
  breadcrumbs: [{ label: 'Polityka prywatności' }],
  hero: {
    heading: 'Polityka prywatności',
    lead: 'Informacje o przetwarzaniu danych osobowych przez WHM TRANSPORT MATEUSZ KONDERA.',
  },
  administrator: {
    name: 'WHM TRANSPORT MATEUSZ KONDERA',
    nip: '9591920724',
    registeredAddress: 'Nowy Świat 44a/14, 25-522 Kielce',
    email: 'kontakt@whmprzeprowadzkikielce.pl',
  },
  sections: [
    {
      heading: 'Administrator danych',
      content: 'Administratorem Twoich danych osobowych jest WHM TRANSPORT MATEUSZ KONDERA, NIP: 9591920724, adres rejestrowy: Nowy Świat 44a/14, 25-522 Kielce.',
    },
    {
      heading: 'Kontakt w sprawach danych',
      content: 'W sprawach dotyczących danych osobowych możesz kontaktować się pod adresem e-mail: kontakt@whmprzeprowadzkikielce.pl.',
    },
    {
      heading: 'Dane przekazywane przez formularz',
      content: 'Jeśli skorzystasz z formularza wyceny, przekazujesz swoje dane kontaktowe (imię i nazwisko, telefon, e-mail) oraz informacje dotyczące zlecenia (lokalizacje, zakres, warunki dostępu, opis mienia). Dane te wykorzystujemy wyłącznie w celu obsługi Twojego zapytania.',
    },
    {
      heading: 'Cel obsługi zapytania',
      content: 'Dane przekazane w formularzu są wykorzystywane do przygotowania wyceny, ustalenia zakresu prac i kontaktu w sprawie realizacji. Po zakończeniu obsługi zapytania dane mogą być przechowywane przez okres niezbędny do celów rozliczeniowych lub wynikających z przepisów.',
    },
    {
      heading: 'Dane techniczne i logi serwera',
      content: 'Serwer, na którym działa serwis, może automatycznie zbierać dane techniczne, takie jak adres IP, typ przeglądarki, system operacyjny i czas dostępu. Dane te służą do zapewnienia prawidłowego działania serwisu i nie są łączone z danymi osobowymi.',
    },
    {
      heading: 'Odnośniki do zewnętrznego WHM Shop',
      content: 'Serwis zawiera linki do zewnętrznego sklepu WHM Shop (whmshop.pl). WHM Shop jest osobnym serwisem i posiada własną politykę prywatności. WHM Przeprowadzki nie odpowiada za przetwarzanie danych przez WHM Shop.',
    },
    {
      heading: 'Prawa osoby, której dane dotyczą',
      content: 'Masz prawo dostępu do swoich danych, ich poprawiania, usunięcia, ograniczenia przetwarzania oraz wniesienia sprzeciwu. Aby skorzystać z tych praw, skontaktuj się pod adresem e-mail: kontakt@whmprzeprowadzkikielce.pl.',
    },
    {
      heading: 'Analityka, pomiar reklam i pliki cookies',
      content: 'Strona korzysta z Google Tag Manager do zarządzania skryptami śledzącymi. Działają trzy kategorie plików cookie: niezbędne (zawsze aktywne), analityczne (Google Analytics 4) oraz pomiar reklam (Google Ads, Meta Pixel). Skrypty analityczne i reklamowe ładują się dopiero po udzieleniu odpowiedniej zgody w banerze cookies. Po odrzuceniu zgody skrypty nie są uruchamiane. Użytkownik może zmienić decyzję w dowolnym momencie, korzystając z linku „Ustawienia cookies” w stopce. Dane analityczne są zbierane w celu agregacyjnym i służą do ulepszania treści oraz nawigacji. Pomiar reklam służy do mierzenia skuteczności kampanii reklamowych.',
    },
    {
      heading: 'Dostawcy usług',
      content: 'W celu świadczenia usług korzystamy z następujących dostawców: Google LLC (Google Tag Manager, Google Analytics 4, Google Ads - analityka i pomiar reklam), Meta Platforms (Meta Pixel - pomiar reklam), EmailJS (przesyłanie formularzy kontaktowych), hosting serwisu. Każdy z dostawców przetwarza dane wyłącznie w zakresie niezbędnym do realizacji usługi.',
    },
    {
      heading: 'Aktualizacje polityki',
      content: 'Niniejsza polityka może być aktualizowana. Data ostatniej aktualizacji: 2 września 2026 r.',
    },
  ],
};

export const pakowanePage = {
  seo: {
    title: 'Pakowanie i zabezpieczanie mienia | WHM Kielce',
    description: 'Pakowanie do przeprowadzki, zabezpieczenie mebli i wyposażenia oraz profesjonalne materiały przeprowadzkowe w Kielcach.',
    canonical: `${site.domain}pakowanie-i-zabezpieczanie/`,
  },
  breadcrumbs: [
    { label: 'Przeprowadzki', href: '/przeprowadzki/' },
    { label: 'Pakowanie i zabezpieczanie' },
  ],
  hero: {
    heading: 'Pakowanie i zabezpieczanie mienia przed przeprowadzką',
    lead: 'Odpowiednie zabezpieczenie ogranicza przypadkowe uszkodzenia, usprawnia wynoszenie i pozwala lepiej wykorzystać przestrzeń w samochodzie. Możesz się o to zatroszczyć samodzielnie albo powierzyć to nam.',
    ctaLabel: 'Zapytaj o pakowanie',
  },
  whatWePack: {
    eyebrow: 'Zakres pakowania',
    heading: 'Co możemy przygotować do transportu',
    items: [
      { title: 'Meble', desc: 'Szafy, komody, biurka, stoły, łóżka i regały.' },
      { title: 'Wyposażenie mieszkania', desc: 'Dywany, lampy, zasłony, drobne elementy wystroju.' },
      { title: 'Szkło i przedmioty delikatne', desc: 'Lustra, obrazy, ceramika, szklane półki i witryny.' },
      { title: 'Sprzęt domowy', desc: 'Lodówki, pralki, telewizory i mniejsze urządzenia.' },
      { title: 'Książki i dokumenty', desc: 'Segregatory, archiwa, biblioteczki domowe.' },
      { title: 'Elementy nietypowe', desc: 'Przedmioty wymagające indywidualnego podejścia do zabezpieczenia.' },
    ],
  },
  materials: {
    eyebrow: 'Materiały WHM',
    heading: 'Materiały dobieramy do rzeczy, nie odwrotnie',
    text: 'Każdy rodzaj mienia wymaga innego sposobu ochrony. Używamy materiałów dobranych do wrażliwości, kształtu i masy przewożonych przedmiotów - bo Twoje rzeczy tego zasługują.',
    items: [
      { name: 'Kartony przeprowadzkowe', desc: 'Wytrzymałe kartony w różnych rozmiarach do pakowania rzeczy osobistych i wyposażenia.' },
      { name: 'Przekładki i materiały ochronne', desc: 'Papier pakowy i przekładki do ochrony delikatnych powierzchni.' },
      { name: 'Koce ochronne', desc: 'Grube koce zabezpieczające meble i duże elementy przed zarysowaniami.' },
      { name: 'Pokrowce', desc: 'Dedykowane pokrowce na materace, sofy, fotele i inne meble tapicerowane.' },
      { name: 'Taśmy klejące i oznaczeniowe', desc: 'Taśmy do zabezpieczania i oznaczania paczek oraz kartonów.' },
      { name: 'Pasy stabilizujące', desc: 'Pasy zabezpieczające ładunek w samochodzie przed przesuwaniem.' },
    ],
    image: '/images/packing-services/pakowanie-przeprowadzki-kielce-1.webp',
    imageAlt: 'Dokładnie zabezpieczone elementy wyposażenia przed transportem',
  },
  process: {
    eyebrow: 'Sposób pracy',
    heading: 'Jak wygląda pakowanie przez WHM',
    steps: [
      { number: '01', title: 'Ustalenie zakresu', desc: 'Wspólnie określamy, co wymaga pakowania i jakiego rodzaju ochrony.' },
      { number: '02', title: 'Przygotowanie materiałów', desc: 'Dobieramy kartony, pokrowce, koce i inne zabezpieczenia.' },
      { number: '03', title: 'Grupowanie i oznaczanie', desc: 'Rzeczy grupujemy tematycznie i oznaczamy kartony.' },
      { number: '04', title: 'Zabezpieczenie', desc: 'Każdy element pakujemy lub owijamy odpowiednim materiałem.' },
      { number: '05', title: 'Przygotowanie do wyniesienia', desc: 'Spakowane mienie ustawiamy w kolejności wnoszenia.' },
      { number: '06', title: 'Stabilizacja w transporcie', desc: 'Ładunek zabezpieczamy pasami i klinujemy w samochodzie.' },
    ],
    image: '/images/moving-boxes/pojemniki-przeprowadzkowe-1.webp',
    imageAlt: 'Plombowane pojemniki transportowe WHM',
  },
  selfVsWhm: {
    eyebrow: 'Dwie drogi',
    heading: 'Pakujesz samodzielnie czy zlecasz to WHM?',
    options: [
      {
        title: 'Pakujesz samodzielnie',
        points: [
          'Kontrolujesz tempo i kolejność pakowania',
          'Możesz rozłożyć pakowanie na kilka dni',
          'Materiały możesz zamówić z WHM Shop',
          'Powiedz nam o przedmiotach wymagających specjalnego zabezpieczenia',
        ],
      },
      {
        title: 'Pakowanie przez WHM',
        points: [
          'Nasz zespół pakuje w dniu przeprowadzki lub wcześniej',
          'Materiały dobieramy do rodzaju Twojego mienia',
          'Meble zabezpieczamy przed wyniesieniem',
          'Mniejsze ryzyko uszkodzeń podczas przenoszenia',
        ],
      },
    ],
    image: '/images/packing-services/pakowanie-przeprowadzki-kielce-6.webp',
    imageAlt: 'Oznaczone kartony przygotowane do transportu',
  },
  shop: {
    eyebrow: 'WHM Shop',
    heading: 'Potrzebujesz materiałów do samodzielnego pakowania?',
    text: 'Kartony, taśmy i wybrane materiały przeprowadzkowe znajdziesz w WHM Shop - sklepie internetowym stworzonym przez firmę przeprowadzkową z myślą o trwałości i ochronie mienia.',
    cta: {
      label: 'Przejdź do WHM Shop',
      href: 'https://www.whmshop.pl/kartony-do-przeprowadzki',
    },
    image: '/images/moving-boxes/kartony-do-przeprowadzki-2.webp',
    imageAlt: 'Kartony przeprowadzkowe przygotowane do transportu',
  },
  faq: [
    {
      question: 'Czy WHM może dostarczyć materiały przed przeprowadzką?',
      answer: 'Tak. Kartony, pokrowce i inne materiały możemy dostarczyć wcześniej, żebyś mógł zacząć pakowanie we własnym tempie.',
    },
    {
      question: 'Czy można zlecić zapakowanie tylko wybranych rzeczy?',
      answer: 'Tak. Możemy przejąć pakowanie całości lub tylko wybranych elementów - decydujesz, co potrzebujesz.',
    },
    {
      question: 'Czy meble są zabezpieczane przed wyniesieniem?',
      answer: 'Tak. Meble zabezpieczamy pokrowcami i kocami zanim zostaną przeniesione na klatkę schodową - to nasz standard.',
    },
    {
      question: 'Jak oznaczać kartony?',
      answer: 'Kartony warto opisać krótko - nazwa pomieszczenia i zawartość. Jeśli pakowanie zlecasz nam, oznaczamy je za Ciebie.',
    },
    {
      question: 'Gdzie kupić kartony do samodzielnego pakowania?',
      answer: 'Kartony i materiały przeprowadzkowe znajdziesz w WHM Shop pod adresem whmshop.pl.',
    },
  ],
};
