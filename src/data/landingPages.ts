import { site } from './site';

export interface LandingPageData {
  slug: string;
  campaignEnabled: boolean;
  robots?: string;
  breadcrumbs?: { name: string; url: string }[];
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
  hero: {
    eyebrow: string;
    heading: string;
    lead: string;
    image: string;
    imageAlt: string;
    primaryCta: string;
    secondaryCta: string;
    proofPoints: string[];
  };
  trustStrip: string[];
  problemResult: {
    heading: string;
    text: string;
  };
  benefits: {
    heading: string;
    items: { title: string; desc: string }[];
  };
  gallery: {
    heading: string;
    images: { src: string; alt: string }[];
  };
  scope?: {
    heading: string;
    items: string[];
    footnote?: string;
  };
  factors?: {
    heading: string;
    items: string[];
  };
  whatWeAssess?: {
    heading: string;
    items: string[];
  };
  itemsList?: {
    heading: string;
    items: string[];
  };
  serviceVariants?: {
    heading: string;
    items: { title: string; desc: string }[];
  };
  exclusions?: {
    heading: string;
    items: string[];
    text?: string;
  };
  pszok?: {
    heading: string;
    text: string;
  };
  process: {
    heading: string;
    steps: { title: string; desc: string }[];
  };
  testimonials: number[];
  faq: { question: string; answer: string }[];
  finalCta: {
    heading: string;
    text: string;
  };
  relatedServices?: { label: string; href: string }[];
  formServiceType: string;
  formVariant: 'przeprowadzka' | 'firma' | 'pianino' | 'specjalistyczny' | 'gabarytowy' | 'lodowka' | 'agd' | 'pakowanie' | 'utylizacja' | 'meble';
  formPlaceholder?: string;
  formSubmitLabel?: string;
}

const d = site.domain;

export const landingPages: LandingPageData[] = [
  {
    slug: 'przeprowadzki-firm-kielce',
    campaignEnabled: true,
    breadcrumbs: [
      { name: 'Strona główna', url: `${d}` },
      { name: 'Przeprowadzki firm i instytucji', url: `${d}przeprowadzki-firm-i-instytucji/` },
      { name: 'Przeprowadzki firm Kielce', url: `${d}lp/przeprowadzki-firm-kielce/` },
    ],
    relatedServices: [
      { label: 'Pakowanie i zabezpieczanie', href: '/lp/pakowanie-przeprowadzki-kielce/' },
      { label: 'Transport specjalistyczny', href: '/lp/transport-specjalistyczny-kielce/' },
    ],
    seo: {
      title: 'Przeprowadzki firm i biur Kielce | Relokacje WHM',
      description: 'Relokacje biur, firm i instytucji w Kielcach. Etapowanie, pakowanie, oznaczanie, transport i rozmieszczenie wyposażenia zgodnie z planem.',
      canonical: `${d}lp/przeprowadzki-firm-kielce/`,
    },
    hero: {
      eyebrow: 'Relokacje firm i instytucji • Kielce',
      heading: 'Przeprowadzki firm i biur Kielce - sprawna relokacja',
      lead: 'Etapowanie, pakowanie, oznaczanie i rozmieszczenie wyposażenia - planujemy relokację wokół działania organizacji.',
      image: '/images/office-moving/przeprowadzki-biura-1.webp',
      imageAlt: 'Relokacja biura prowadzona przez zespół WHM',
      primaryCta: 'Umów rozmowę o relokacji',
      secondaryCta: 'Zadzwoń do WHM',
      proofPoints: [
        'Możliwość etapowania prac',
        'Oznaczanie kartonów, pojemników i pomieszczeń',
        'Obsługa wyposażenia biurowego, dokumentów i ciężkich elementów',
      ],
    },
    trustStrip: [
      'Działamy od 2019 roku',
      'Zabezpieczenia w standardzie',
      'Prawdziwy sprzęt WHM',
      'Kontakt bezpośrednio z właścicielem',
    ],
    problemResult: {
      heading: 'Największym kosztem relokacji nie zawsze jest transport. Często jest nim chaos i przestój.',
      text: 'Stanowiska pracy, dokumenty, wyposażenie wspólnych przestrzeni i ciężkie elementy muszą zostać przeniesione w odpowiedniej kolejności. Przed realizacją wspólnie ustalamy priorytety, oznaczenia i miejsca docelowe.',
    },
    benefits: {
      heading: 'Co zyskujesz przy relokacji z WHM',
      items: [
        { title: 'Mniejszy przestój', desc: 'Kolejność prac dopasowujemy do priorytetów organizacji.' },
        { title: 'Kontrola rozmieszczenia', desc: 'Oznaczamy mienie według pomieszczeń, działów lub ustalonego systemu.' },
        { title: 'Jeden zakres odpowiedzialności', desc: 'Pakowanie, demontaż, transport i ustawienie mogą zostać objęte jednym planem.' },
        { title: 'Sprzęt do trudniejszych elementów', desc: 'Windy załadunkowe, wózki, pasy i Escalera po ocenie warunków.' },
      ],
    },
    gallery: {
      heading: 'Relokacje biur i instytucji',
      images: [
        { src: '/images/office-moving/przeprowadzki-biura-1.webp', alt: 'Relokacja biura prowadzona przez WHM' },
        { src: '/images/office-moving/przeprowadzki-biura-2.webp', alt: 'Zabezpieczone wyposażenie biurowe' },
        { src: '/images/office-moving/przeprowadzki-biura-3.webp', alt: 'Pakowanie dokumentacji biurowej' },
        { src: '/images/office-moving/przeprowadzki-biura-4.webp', alt: 'Wynoszenie mebli biurowych' },
        { src: '/images/institution-moving/przeprowadzki-instytucji-1.webp', alt: 'Przeprowadzka instytucji' },
        { src: '/images/institution-moving/przeprowadzki-instytucji-3.webp', alt: 'Transport wyposażenia instytucji' },
      ],
    },
    scope: {
      heading: 'Zakres relokacji',
      items: [
        'biura i stanowiska pracy',
        'meble i wyposażenie wspólnych przestrzeni',
        'dokumenty, książki, segregatory i zbiory',
        'archiwa i pojemniki oznaczane według ustalonego systemu',
        'ciężkie szafy i wyposażenie techniczne',
        'pakowanie, demontaż, transport, wniesienie i rozmieszczenie',
        'realizacja całościowa lub etapowa',
      ],
    },
    process: {
      heading: 'Jak przebiega relokacja',
      steps: [
        { title: 'Rozmowa o skali i ograniczeniach', desc: 'Powiedz, jakie wyposażenie przenosisz i jak pracuje Twój zespół.' },
        { title: 'Ustalenie etapów i oznaczeń', desc: 'Planujemy priorytety, kolejność i system oznaczania.' },
        { title: 'Dobór materiałów i sprzętu', desc: 'Przygotowujemy zespół, pojazdy i zabezpieczenia.' },
        { title: 'Realizacja według planu', desc: 'Pakujemy, zabezpieczamy, przewozimy i wnosimy w ustalonej kolejności.' },
        { title: 'Rozmieszczenie na miejscu', desc: 'Wnosimy, ustawiamy i montujemy - biuro jest gotowe do pracy.' },
      ],
    },
    testimonials: [5],
    faq: [
      { question: 'Czy przeprowadzka może odbywać się etapami?', answer: 'Tak, kolejność i zakres można dostosować do pracy organizacji.' },
      { question: 'Czy WHM pakuje dokumenty i wyposażenie?', answer: 'Tak, sposób pakowania i oznaczenia ustalamy przed realizacją.' },
      { question: 'Czy można uwzględnić demontaż mebli biurowych?', answer: 'Tak, jeśli zostanie wskazany w zakresie.' },
      { question: 'Jak przygotować firmę do wyceny?', answer: 'Podaj lokalizacje, skalę wyposażenia, piętra, windy, możliwość podjazdu, oczekiwany termin oraz elementy ciężkie lub nietypowe.' },
      { question: 'Czy potrzebna jest wizja lokalna?', answer: 'Przy większych lub bardziej złożonych realizacjach sposób oceny ustalamy po pierwszej rozmowie.' },
    ],
    finalCta: {
      heading: 'Zacznijmy od skali, terminów i kolejności prac',
      text: 'Opisz organizację, lokalizacje i najważniejsze ograniczenia. Mateusz skontaktuje się, aby ustalić następny krok.',
    },
    formServiceType: 'Przeprowadzka firmy lub instytucji',
    formVariant: 'firma',
    formPlaceholder: 'Opisz krótko zakres relokacji',
    formSubmitLabel: 'Poproś o wycenę relokacji',
  },
  {
    slug: 'transport-pianina-kielce',
    campaignEnabled: true,
    breadcrumbs: [
      { name: 'Strona główna', url: `${d}` },
      { name: 'Transport pianin i fortepianów', url: `${d}transport-pianin-i-fortepianow-kielce/` },
      { name: 'Transport pianina Kielce', url: `${d}lp/transport-pianina-kielce/` },
    ],
    relatedServices: [
      { label: 'Transport specjalistyczny', href: '/lp/transport-specjalistyczny-kielce/' },
      { label: 'Transport gabarytowy', href: '/lp/transport-gabarytowy-kielce/' },
    ],
    seo: {
      title: 'Transport pianina i fortepianu Kielce | WHM',
      description: 'Transport pianin i fortepianów w Kielcach po ocenie instrumentu, schodów, przejść i dostępu. Zabezpieczenie, przeniesienie i ustawienie.',
      canonical: `${d}lp/transport-pianina-kielce/`,
    },
    hero: {
      eyebrow: 'Transport pianin i fortepianów • Kielce',
      heading: 'Transport pianin i fortepianów Kielce',
      lead: 'Oceniamy instrument, schody, przejścia i dostęp. Dopiero wtedy dobieramy zabezpieczenia i sprzęt.',
      image: '/images/transport-pianin-i-fortepianow/transport-pianin-i-fortepianow-kielce-1.webp',
      imageAlt: 'Pianino zabezpieczone przed transportem przez WHM',
      primaryCta: 'Wyślij opis instrumentu i warunków',
      secondaryCta: 'Porozmawiaj o transporcie',
      proofPoints: [
        'Doświadczenie w transporcie instrumentów',
        'Pokrowce, pasy, wózki i Escalera po ocenie warunków',
        'Zdjęcia pomagają szybciej ocenić możliwość realizacji',
      ],
    },
    trustStrip: [
      'Działamy od 2019 roku',
      'Zabezpieczenia w standardzie',
      'Prawdziwy sprzęt WHM',
      'Kontakt bezpośrednio z właścicielem',
    ],
    problemResult: {
      heading: 'Instrument to nie po prostu ciężki mebel',
      text: 'Duża masa łączy się z delikatną konstrukcją, wykończeniem i nierównomiernym środkiem ciężkości. Równie ważna jak sam instrument jest droga od miejsca ustawienia do samochodu oraz warunki w lokalizacji docelowej.',
    },
    benefits: {
      heading: 'Jak przewożimy instrumenty',
      items: [
        { title: 'Ocena przed podnoszeniem', desc: 'Analizujemy instrument i drogę transportową.' },
        { title: 'Zabezpieczenie dopasowane do konstrukcji', desc: 'Pokrowce, koce, pasy i stabilizacja.' },
        { title: 'Sprzęt używany tylko wtedy, gdy warunki na to pozwalają', desc: 'Escalera i wózki po ocenie schodów i zakrętów.' },
        { title: 'Ustawienie w uzgodnionym miejscu', desc: 'Instrument trafia dokładnie tam, gdzie ma stać.' },
      ],
    },
    whatWeAssess: {
      heading: 'Co sprawdzamy przed transportem',
      items: [
        'typ i przybliżone wymiary instrumentu',
        'piętra i windy',
        'szerokość drzwi i przejść',
        'zakręty oraz spoczniki',
        'nawierzchnię i odległość do samochodu',
        'warunki w miejscu docelowym',
      ],
    },
    gallery: {
      heading: 'Transport pianin i fortepianów w realizacji',
      images: [
        { src: '/images/transport-pianin-i-fortepianow/transport-pianin-i-fortepianow-kielce-1.webp', alt: 'Pianino zabezpieczone przed transportem' },
        { src: '/images/transport-pianin-i-fortepianow/transport-pianin-i-fortepianow-kielce-2.webp', alt: 'Transport pianina przez zespół WHM' },
        { src: '/images/transport-pianin-i-fortepianow/transport-pianin-i-fortepianow-kielce-3.webp', alt: 'Zabezpieczony instrument w samochodzie' },
        { src: '/images/transport-pianin-i-fortepianow/transport-pianin-i-fortepianow-kielce-4.webp', alt: 'Ustawienie pianina na miejscu' },
      ],
    },
    process: {
      heading: 'Jak przebiega transport instrumentu',
      steps: [
        { title: 'Przesyłasz opis i zdjęcia', desc: 'Podajesz lokalizacje, wymiary i zdjęcia, jeśli formularz obsługuje załączniki.' },
        { title: 'Oceniamy instrument i drogę', desc: 'Sprawdzamy schody, zakręty, drzwi i dostęp.' },
        { title: 'Potwierdzamy możliwość realizacji', desc: 'Dobieramy sprzęt i zespół do warunków.' },
        { title: 'Ustalamy zakres i termin', desc: 'Potwierdzamy szczegóły i datę.' },
        { title: 'Zabezpieczamy i przewozimy', desc: 'Przenosimy, transportujemy i ustawiamy instrument na miejscu.' },
      ],
    },
    testimonials: [3],
    faq: [
      { question: 'Czy schodołaz można zastosować na każdych schodach?', answer: 'Nie. Możliwość użycia zależy od szerokości, zakrętów, spoczników i konstrukcji instrumentu.' },
      { question: 'Jakie zdjęcia są potrzebne?', answer: 'Instrument, schody, zakręty, drzwi, wejście oraz miejsce docelowe.' },
      { question: 'Czy przewozicie fortepiany?', answer: 'Tak, ale każdy fortepian i droga wymagają wcześniejszej oceny.' },
      { question: 'Czy sama masa wystarczy do wyceny?', answer: 'Nie. Potrzebne są również wymiary, lokalizacje i warunki dostępu.' },
      { question: 'Czy po transporcie stroicie instrument?', answer: 'Zakres WHM obejmuje transport i ustawienie. Dodatkowe usługi należy ustalić osobno.' },
    ],
    finalCta: {
      heading: 'Pokaż nam instrument i drogę transportową',
      text: 'Opisz instrument, podaj lokalizacje i prześlij zdjęcia. Powiemy, jak to zorganizujemy.',
    },
    formServiceType: 'Transport pianina lub fortepianu',
    formVariant: 'pianino',
    formPlaceholder: 'Pianino czy fortepian? Możesz podać szczegóły',
    formSubmitLabel: 'Zapytaj o transport pianina',
  },
  {
    slug: 'transport-specjalistyczny-kielce',
    campaignEnabled: true,
    breadcrumbs: [
      { name: 'Strona główna', url: `${d}` },
      { name: 'Transport specjalistyczny', url: `${d}transport-specjalistyczny/` },
      { name: 'Transport specjalistyczny Kielce', url: `${d}lp/transport-specjalistyczny-kielce/` },
    ],
    relatedServices: [
      { label: 'Transport gabarytowy', href: '/lp/transport-gabarytowy-kielce/' },
      { label: 'Przeprowadzki', href: '/przeprowadzki/' },
    ],
    seo: {
      title: 'Transport specjalistyczny Kielce | Ciężkie przedmioty WHM',
      description: 'Transport sejfów, pieców, urządzeń i ciężkiego wyposażenia w Kielcach. Ocena przedmiotu i drogi, zabezpieczenia oraz właściwy sprzęt.',
      canonical: `${d}lp/transport-specjalistyczny-kielce/`,
    },
    hero: {
      eyebrow: 'Transport ciężkich i nietypowych przedmiotów • Kielce',
      heading: 'Transport specjalistyczny Kielce - ciężkie i nietypowe przedmioty',
      lead: 'Sejfy, piece, ciężkie urządzenia - sprawdzamy warunki i dobieramy sposób transportu do przedmiotu.',
      image: '/images/transport-gabarytow/transport-gabarytow-kielce-1.webp',
      imageAlt: 'Transport ciężkiego przedmiotu z użyciem sprzętu WHM',
      primaryCta: 'Opisz przedmiot i warunki',
      secondaryCta: 'Zadzwoń i omów transport',
      proofPoints: [
        'Ocena przed realizacją',
        'Realny sprzęt WHM',
        'Zabezpieczenie i stabilizacja dopasowane do przedmiotu',
      ],
    },
    trustStrip: [
      'Działamy od 2019 roku',
      'Zabezpieczenia w standardzie',
      'Prawdziwy sprzęt WHM',
      'Kontakt bezpośrednio z właścicielem',
    ],
    problemResult: {
      heading: 'W transporcie specjalistycznym improwizacja jest ryzykiem',
      text: 'Sejf, piec, urządzenie techniczne czy wyposażenie laboratoryjne może wymagać zupełnie innego zespołu i sprzętu. Dlatego przed potwierdzeniem realizacji sprawdzamy nie tylko sam przedmiot, ale również całą drogę transportową.',
    },
    benefits: {
      heading: 'Jak pracujemy przy transporcie specjalistycznym',
      items: [
        { title: 'Właściwa kwalifikacja', desc: 'Oceniamy, czy i jak zlecenie może zostać wykonane.' },
        { title: 'Sprzęt dobrany do warunków', desc: 'Wózki, pasy, windy załadunkowe i Escalera, gdy można ich bezpiecznie użyć.' },
        { title: 'Ochrona przedmiotu i otoczenia', desc: 'Sposób zabezpieczenia dobieramy do konstrukcji i trasy.' },
        { title: 'Jasne ustalenia przed terminem', desc: 'Zakres potwierdzamy po zebraniu potrzebnych danych.' },
      ],
    },
    itemsList: {
      heading: 'Co transportujemy',
      items: [
        'sejfy i szafy na broń',
        'piece i ciężkie urządzenia',
        'duże meble',
        'sprzęt techniczny',
        'wyposażenie laboratoryjne',
        'duże AGD',
        'inne ciężkie lub nieporęczne przedmioty po wcześniejszej ocenie',
      ],
    },
    gallery: {
      heading: 'Realizacje transportu specjalistycznego',
      images: [
        { src: '/images/transport-sejfu/transport-sejfu-kielce-1.webp', alt: 'Transport sejfu przez WHM' },
        { src: '/images/transport-pieca/transport-pieca-kielce-1.webp', alt: 'Transport pieca przez WHM' },
        { src: '/images/transport-gabarytow/transport-gabarytow-kielce-3.webp', alt: 'Zabezpieczony ciężki ładunek' },
        { src: '/images/transport-gabarytow/transport-gabarytow-kielce-5.webp', alt: 'Transport gabarytu sprzętem WHM' },
        { src: '/images/transport-agd/transport-agd-kielce-1.webp', alt: 'Transport dużego AGD' },
      ],
    },
    process: {
      heading: 'Jak przebiega transport specjalistyczny',
      steps: [
        { title: 'Opisujesz przedmiot', desc: 'Przesyłasz zdjęcia, wymiary, masę i informacje o warunkach dostępu.' },
        { title: 'Oceniamy drogę', desc: 'Sprawdzamy drzwi, schody, zakręty, windy i podjazd.' },
        { title: 'Dobieramy sprzęt', desc: 'Wózki, pasy, winda załadunkowa lub Escalera - gdy można bezpiecznie użyć.' },
        { title: 'Zabezpieczamy i przewozimy', desc: 'Przedmiot i otoczenie zabezpieczamy, przenosimy i stabilnie transportujemy.' },
        { title: 'Ustawiamy na miejscu', desc: 'Przedmiot trafia tam, gdzie ma stać - stabilnie i bezpiecznie.' },
      ],
    },
    testimonials: [0],
    faq: [
      { question: 'Czy każdy ciężki przedmiot da się przewieźć?', answer: 'Nie zawsze. Masa, wymiary i droga transportowa muszą ze sobą współgrać. Dlatego zaczynamy od oceny.' },
      { question: 'Czy WHM korzysta ze schodołazu?', answer: 'Tak, używamy elektrycznego schodołazu kroczącego Escalera. Czy zadziała w Twoim przypadku - oceniamy na podstawie zdjęć schodów.' },
      { question: 'Czy transport specjalistyczny można połączyć z przeprowadzką?', answer: 'Tak. Ciężki przedmiot może jechać razem z resztą mienia, jeśli logistyka na to pozwala.' },
      { question: 'Czy potrzebne są zdjęcia?', answer: 'Tak. Zdjęcia przedmiotu, schodów, zakrętów i wejścia pomagają ocenić możliwość realizacji bez wizji lokalnej.' },
    ],
    finalCta: {
      heading: 'Prześlij dane potrzebne do realnej oceny transportu',
      text: 'Opisz przedmiot, podaj wymiary i lokalizacje. Powiemy, jak to zorganizujemy.',
    },
    formServiceType: 'Inny transport specjalistyczny',
    formVariant: 'specjalistyczny',
    formPlaceholder: 'Jaki przedmiot trzeba przewieźć?',
    formSubmitLabel: 'Poproś o wycenę transportu',
  },
  {
    slug: 'transport-gabarytowy-kielce',
    campaignEnabled: true,
    breadcrumbs: [
      { name: 'Strona główna', url: `${d}` },
      { name: 'Transport gabarytowy', url: `${d}transport-gabarytowy-kielce/` },
      { name: 'Transport gabarytowy Kielce', url: `${d}lp/transport-gabarytowy-kielce/` },
    ],
    relatedServices: [
      { label: 'Transport specjalistyczny', href: '/lp/transport-specjalistyczny-kielce/' },
      { label: 'Przeprowadzki', href: '/przeprowadzki/' },
      { label: 'Transport mebli', href: '/lp/transport-mebli-kielce/' },
    ],
    seo: {
      title: 'Transport gabarytowy Kielce | Wyceń przewóz z WHM',
      description: 'Transport dużych i ciężkich przedmiotów w Kielcach. Oceniamy wymiary, masę, schody, drzwi, podjazd i warunki w obu lokalizacjach.',
      canonical: `${d}lp/transport-gabarytowy-kielce/`,
    },
    hero: {
      eyebrow: 'Transport gabarytowy • Kielce',
      heading: 'Transport gabarytowy Kielce - duże meble i ciężkie przedmioty',
      lead: 'Sprawdzamy wymiary, masę, schody, drzwi i dostęp. Na tej podstawie dobieramy zespół i zabezpieczenia.',
      image: '/images/transport-gabarytow/transport-gabarytow-kielce-7.webp',
      imageAlt: 'Transport gabarytu z wykorzystaniem sprzętu WHM',
      primaryCta: 'Wyceń transport gabarytu',
      secondaryCta: 'Porozmawiaj o warunkach',
      proofPoints: [
        'Ocena całej drogi transportowej',
        'Sprzęt dobierany do gabarytu i warunków',
        'Możliwość połączenia z większą przeprowadzką',
      ],
    },
    trustStrip: [
      'Działamy od 2019 roku',
      'Zabezpieczenia w standardzie',
      'Prawdziwy sprzęt WHM',
      'Kontakt bezpośrednio z właścicielem',
    ],
    problemResult: {
      heading: 'Najtrudniejszy odcinek często znajduje się między przedmiotem a samochodem',
      text: 'Wąskie drzwi, zakręty, schody, brak windy i długa droga od wejścia potrafią mieć większe znaczenie niż liczba kilometrów. Dlatego potrzebujemy informacji o obu lokalizacjach, nie tylko o samym przedmiocie.',
    },
    benefits: {
      heading: 'Jak pracujemy przy gabarytach',
      items: [
        { title: 'Sprawdzamy trasę', desc: 'Nie tylko rozmiar przedmiotu, ale całą drogę.' },
        { title: 'Dobieramy zabezpieczenia', desc: 'Do powierzchni, masy i konstrukcji.' },
        { title: 'Oceniamy demontaż', desc: 'Sprawdzamy możliwość demontażu i ponownego montażu.' },
        { title: 'Ustalamy miejsce docelowe', desc: 'Wiem, gdzie przedmiot ma trafić, zanim zaczniemy przenoszenie.' },
      ],
    },
    gallery: {
      heading: 'Realizacje transportu gabarytowego',
      images: [
        { src: '/images/transport-gabarytow/transport-gabarytow-kielce-1.webp', alt: 'Transport gabarytu przez WHM' },
        { src: '/images/transport-gabarytow/transport-gabarytow-kielce-3.webp', alt: 'Zabezpieczony ciężki ładunek' },
        { src: '/images/transport-gabarytow/transport-gabarytow-kielce-4.webp', alt: 'Przenoszenie gabarytu' },
        { src: '/images/transport-gabarytow/transport-gabarytow-kielce-5.webp', alt: 'Transport gabarytu sprzętem WHM' },
        { src: '/images/transport-gabarytow/transport-gabarytow-kielce-6.webp', alt: 'Zabezpieczony przedmiot w pojeździe' },
        { src: '/images/transport-gabarytow/transport-gabarytow-kielce-7.webp', alt: 'Transport dużego przedmiotu' },
      ],
    },
    process: {
      heading: 'Jak przebiega transport gabarytu',
      steps: [
        { title: 'Przesyłasz zdjęcia i wymiary', desc: 'Sfotografuj przedmiot i całą drogę - od mieszkania po wejście do budynku.' },
        { title: 'Oceniamy i planujemy', desc: 'Sprawdzamy, czy i jak można to zrobić, i dobieramy sprzęt.' },
        { title: 'Zabezpieczamy i przewozimy', desc: 'Przedmiot owijamy, przenosimy i bezpiecznie transportujemy.' },
        { title: 'Ustawiamy na miejscu', desc: 'Gabaryt trafia tam, gdzie ma stać - stabilnie i bez uszkodzeń.' },
      ],
    },
    testimonials: [0],
    faq: [
      { question: 'Jakie dane są potrzebne?', answer: 'Rodzaj, wymiary, przybliżona masa, lokalizacje, piętra, windy, zdjęcia wejść, schodów i zakrętów.' },
      { question: 'Czy każdy gabaryt można przewieźć?', answer: 'Nie. Możliwość realizacji potwierdzamy po ocenie przedmiotu i warunków.' },
      { question: 'Czy używacie schodołazu?', answer: 'Tak, jeśli konstrukcja schodów i przedmiotu pozwala na bezpieczne użycie.' },
      { question: 'Czy możliwy jest demontaż?', answer: 'Tak, jeżeli konstrukcja na to pozwala i zostanie to uwzględnione w zakresie.' },
    ],
    finalCta: {
      heading: 'Pokaż nam przedmiot, wejścia i schody. Ocenimy najlepszy sposób.',
      text: 'Opisz gabaryt, podaj wymiary i prześlij zdjęcia drogi. Powiemy, jak to zorganizujemy.',
    },
    formServiceType: 'Transport gabarytowy',
    formVariant: 'gabarytowy',
    formPlaceholder: 'Co trzeba przewieźć i wnieść?',
    formSubmitLabel: 'Wyceń transport gabarytu',
  },
  {
    slug: 'transport-lodowki-kielce',
    campaignEnabled: true,
    breadcrumbs: [
      { name: 'Strona główna', url: `${d}` },
      { name: 'Transport specjalistyczny', url: `${d}transport-specjalistyczny/` },
      { name: 'Transport lodówki Kielce', url: `${d}lp/transport-lodowki-kielce/` },
    ],
    relatedServices: [
      { label: 'Przeprowadzki', href: '/przeprowadzki/' },
      { label: 'Transport specjalistyczny', href: '/lp/transport-specjalistyczny-kielce/' },
    ],
    seo: {
      title: 'Transport lodówki Kielce | Wyniesienie i wniesienie WHM',
      description: 'Transport lodówki w Kielcach z zabezpieczeniem, stabilizacją, wyniesieniem i wniesieniem. Podaj model, lokalizacje, piętra i dostępność wind.',
      canonical: `${d}lp/transport-lodowki-kielce/`,
    },
    hero: {
      eyebrow: 'Transport lodówki • Kielce',
      heading: 'Transport lodówki Kielce - przewóz i wniesienie',
      lead: 'Zabezpieczamy, wynosimy, stabilizujemy w pojeździe i wnosimy do wskazanego miejsca.',
      image: '/images/transport-lodowki/transport-lodowki-kielce-1.webp',
      imageAlt: 'Zabezpieczona lodówka przygotowana do transportu przez WHM',
      primaryCta: 'Wyceń transport lodówki',
      secondaryCta: 'Zadzwoń i podaj szczegóły',
      proofPoints: [
        'Zabezpieczenie powierzchni urządzenia',
        'Stabilizacja podczas transportu',
        'Wniesienie i ustawienie w uzgodnionym miejscu',
      ],
    },
    trustStrip: [
      'Działamy od 2019 roku',
      'Zabezpieczenia w standardzie',
      'Prawdziwy sprzęt WHM',
      'Kontakt bezpośrednio z właścicielem',
    ],
    problemResult: {
      heading: 'Bezpieczny transport zaczyna się przed wyniesieniem urządzenia',
      text: 'Znaczenie mają rozmiar lodówki, piętra, windy, schody, odległość do samochodu oraz przygotowanie urządzenia. Zbieramy te informacje przed realizacją, żeby właściwie dobrać zespół i zabezpieczenia.',
    },
    benefits: {
      heading: 'Jak transportujemy lodówki',
      items: [
        { title: 'Zabezpieczenie powierzchni', desc: 'Ochrona przed zarysowaniami i uszkodzeniami.' },
        { title: 'Ostrożne przenoszenie', desc: 'Przez drzwi i schody, z odpowiednim sprzętem.' },
        { title: 'Stabilizacja w pojeździe', desc: 'Pasy i zabezpieczenia na czas jazdy.' },
        { title: 'Wniesienie i ustawienie', desc: 'Lodówka trafia do uzgodnionego miejsca.' },
      ],
    },
    gallery: {
      heading: 'Realizacje transportu lodówek',
      images: [
        { src: '/images/transport-lodowki/transport-lodowki-kielce-1.webp', alt: 'Zabezpieczona lodówka przed transportem' },
        { src: '/images/transport-lodowki/transport-lodowki-kielce-2.webp', alt: 'Transport lodówki przez WHM' },
      ],
    },
    process: {
      heading: 'Jak przebiega transport lodówki',
      steps: [
        { title: 'Opisujesz lodówkę i drogę', desc: 'Podajesz model lub wymiary, piętra i zdjęcia schodów.' },
        { title: 'Planujemy przenoszenie', desc: 'Sprawdzamy drogę i dobieramy sprzęt.' },
        { title: 'Zabezpieczamy i przewozimy', desc: 'Lodówkę owijamy, wynosimy i bezpiecznie transportujemy.' },
        { title: 'Ustawiamy na miejscu', desc: 'Lodówka stoi tam, gdzie chcesz - gotowa do podłączenia.' },
      ],
    },
    testimonials: [2],
    faq: [
      { question: 'Jak przygotować lodówkę?', answer: 'Przed realizacją ustalimy sposób przygotowania odpowiedni do danego urządzenia. Przekaż model i informację, czy lodówka jest już odłączona.' },
      { question: 'Czy przewozicie lodówki po schodach?', answer: 'Tak, po wcześniejszej ocenie warunków.' },
      { question: 'Czy lodówkę można przewieźć razem z innymi rzeczami?', answer: 'Tak, transport może być częścią większej przeprowadzki.' },
      { question: 'Czy podłączacie urządzenie?', answer: 'Nasza usługa obejmuje transport i ustawienie. Podłączenie najlepiej zlecić instalatorowi.' },
    ],
    finalCta: {
      heading: 'Podaj model, lokalizacje i warunki dostępu',
      text: 'Opisz lodówkę i drogę. Powiemy, jak to zorganizujemy.',
    },
    formServiceType: 'Transport gabarytowy',
    formVariant: 'lodowka',
    formPlaceholder: 'Możesz podać rodzaj lodówki i piętro',
    formSubmitLabel: 'Wyceń transport lodówki',
  },
  {
    slug: 'transport-agd-kielce',
    campaignEnabled: true,
    breadcrumbs: [
      { name: 'Strona główna', url: `${d}` },
      { name: 'Transport specjalistyczny', url: `${d}transport-specjalistyczny/` },
      { name: 'Transport AGD Kielce', url: `${d}lp/transport-agd-kielce/` },
    ],
    relatedServices: [
      { label: 'Transport specjalistyczny', href: '/lp/transport-specjalistyczny-kielce/' },
    ],
    seo: {
      title: 'Transport AGD Kielce | Pralki, lodówki i zmywarki WHM',
      description: 'Transport dużego AGD w Kielcach. Zabezpieczenie, przeniesienie, stabilizacja w pojeździe oraz wniesienie do wskazanej lokalizacji.',
      canonical: `${d}lp/transport-agd-kielce/`,
    },
    hero: {
      eyebrow: 'Transport dużego AGD • Kielce',
      heading: 'Transport AGD Kielce - lodówki, pralki i duże urządzenia',
      lead: 'Zabezpieczamy urządzenie, dobieramy sposób przenoszenia i wnosimy do uzgodnionego miejsca.',
      image: '/images/transport-agd/transport-agd-kielce-1.webp',
      imageAlt: 'Zabezpieczony sprzęt AGD przygotowany do transportu przez WHM',
      primaryCta: 'Wyceń transport AGD',
      secondaryCta: 'Zadzwoń i opisz urządzenia',
      proofPoints: [
        'Transport pojedynczego urządzenia lub kilku sztuk',
        'Możliwość połączenia z przeprowadzką',
        'Zabezpieczenie i stabilizacja w pojeździe',
      ],
    },
    trustStrip: [
      'Działamy od 2019 roku',
      'Zabezpieczenia w standardzie',
      'Prawdziwy sprzęt WHM',
      'Kontakt bezpośrednio z właścicielem',
    ],
    problemResult: {
      heading: 'Duże AGD wymaga czegoś więcej niż wolnego miejsca w samochodzie',
      text: 'Wymiary, masa, delikatne elementy, schody i sposób przygotowania urządzenia wpływają na bezpieczne przeniesienie. Dlatego przed transportem pytamy o sprzęt oraz warunki w obu lokalizacjach.',
    },
    benefits: {
      heading: 'Jak transportujemy AGD',
      items: [
        { title: 'Zabezpieczenie urządzeń', desc: 'Materiały ochronne dobrane do rodzaju sprzętu.' },
        { title: 'Ostrożne przenoszenie', desc: 'Przez drzwi i schody, z odpowiednim sprzętem.' },
        { title: 'Stabilizacja w pojeździe', desc: 'Pasy i zabezpieczenia na czas jazdy.' },
        { title: 'Wniesienie i ustawienie', desc: 'Urządzenie trafia do uzgodnionego miejsca.' },
      ],
    },
    scope: {
      heading: 'Zakres transportu AGD',
      items: [
        'lodówki',
        'pralki',
        'zmywarki',
        'kuchenki i piekarniki',
        'inne duże urządzenia po wcześniejszym uzgodnieniu',
        'wyniesienie, zabezpieczenie, transport, wniesienie i ustawienie',
        'bez podłączania instalacji, jeśli usługa nie została potwierdzona',
      ],
    },
    gallery: {
      heading: 'Realizacje transportu AGD',
      images: [
        { src: '/images/transport-agd/transport-agd-kielce-1.webp', alt: 'Zabezpieczony sprzęt AGD przed transportem' },
        { src: '/images/transport-agd/transport-agd-kielce-2.webp', alt: 'Transport AGD przez WHM' },
      ],
    },
    process: {
      heading: 'Jak przebiega transport AGD',
      steps: [
        { title: 'Opisujesz urządzenie i drogę', desc: 'Podajesz rodzaj AGD, wymiary i zdjęcia schodów i wejścia.' },
        { title: 'Planujemy przenoszenie', desc: 'Sprawdzamy drogę i dobieramy odpowiedni sprzęt.' },
        { title: 'Zabezpieczamy i przewozimy', desc: 'Urządzenie owijamy, wynosimy i bezpiecznie transportujemy.' },
        { title: 'Ustawiamy na miejscu', desc: 'AGD stoi tam, gdzie chcesz - gotowe do podłączenia.' },
      ],
    },
    testimonials: [2],
    faq: [
      { question: 'Czy transportujecie pojedyncze urządzenie?', answer: 'Tak, zakres może obejmować jedno urządzenie albo kilka sztuk.' },
      { question: 'Czy AGD może być częścią przeprowadzki?', answer: 'Tak.' },
      { question: 'Czy urządzenia muszą być odłączone?', answer: 'Sposób przygotowania ustalamy przed realizacją. Nie świadczymy usług hydraulicznych, gazowych ani elektrycznych.' },
      { question: 'Co podać do wyceny?', answer: 'Rodzaj i liczbę urządzeń, lokalizacje, piętra, windy, termin i informacje o dostępie.' },
    ],
    finalCta: {
      heading: 'Opisz urządzenia i drogę między nimi a samochodem',
      text: 'Podaj rodzaj AGD, lokalizacje i warunki dostępu. Powiemy, jak to zorganizujemy.',
    },
    formServiceType: 'Transport gabarytowy',
    formVariant: 'agd',
    formPlaceholder: 'Jakie urządzenie trzeba przewieźć?',
    formSubmitLabel: 'Wyceń transport AGD',
  },
  {
    slug: 'pakowanie-przeprowadzki-kielce',
    campaignEnabled: true,
    breadcrumbs: [
      { name: 'Strona główna', url: `${d}` },
      { name: 'Pakowanie i zabezpieczanie', url: `${d}pakowanie-i-zabezpieczanie/` },
      { name: 'Pakowanie do przeprowadzki Kielce', url: `${d}lp/pakowanie-przeprowadzki-kielce/` },
    ],
    relatedServices: [
      { label: 'Przeprowadzki', href: '/przeprowadzki/' },
      { label: 'Transport mebli', href: '/lp/transport-mebli-kielce/' },
    ],
    seo: {
      title: 'Pakowanie do przeprowadzki Kielce | Materiały i pomoc WHM',
      description: 'Pełne lub częściowe pakowanie do przeprowadzki w Kielcach. Materiały, zabezpieczenie rzeczy, oznaczanie kartonów i przygotowanie do transportu.',
      canonical: `${d}lp/pakowanie-przeprowadzki-kielce/`,
    },
    hero: {
      eyebrow: 'Pakowanie do przeprowadzki • Kielce',
      heading: 'Pakowanie do przeprowadzki Kielce - zabezpieczenie mienia',
      lead: 'Kartony, pokrowce i materiały ochronne dobrane do rodzaju mienia. Pakujemy całość lub wybrane elementy.',
      image: '/images/packing-services/pakowanie-przeprowadzki-kielce-3.webp',
      imageAlt: 'Zabezpieczanie mebli pokrowcami i pasami przez WHM',
      primaryCta: 'Wyceń zakres pakowania',
      secondaryCta: 'Porozmawiaj o pakowaniu',
      proofPoints: [
        'Pełne lub częściowe pakowanie',
        'Materiały dobrane do rodzaju mienia',
        'Oznaczanie i grupowanie rzeczy',
      ],
    },
    trustStrip: [
      'Działamy od 2019 roku',
      'Zabezpieczenia w standardzie',
      'Prawdziwy sprzęt WHM',
      'Kontakt bezpośrednio z właścicielem',
    ],
    problemResult: {
      heading: 'Pakowanie to nie tylko wkładanie rzeczy do kartonów',
      text: 'Delikatne przedmioty, wyposażenie kuchni, elektronika, meble i rzeczy potrzebne od razu po przeprowadzce wymagają różnego przygotowania. Dobrze zaplanowane pakowanie ułatwia zarówno transport, jak i odnalezienie rzeczy na miejscu.',
    },
    benefits: {
      heading: 'Co zyskujesz, zlecając pakowanie WHM',
      items: [
        { title: 'Oszczędzasz czas', desc: 'Przejmujemy cały zakres albo wybrane pomieszczenia.' },
        { title: 'Mniej przypadkowych uszkodzeń', desc: 'Zabezpieczenia dobieramy do rodzaju mienia.' },
        { title: 'Łatwiejsze rozpakowanie', desc: 'Grupujemy i oznaczamy kartony.' },
        { title: 'Jeden proces', desc: 'Pakowanie można połączyć z transportem, wniesieniem i montażem.' },
      ],
    },
    scope: {
      heading: 'Zakres pakowania',
      items: [
        'przygotowanie materiałów',
        'pakowanie wyposażenia mieszkań, domów i biur',
        'zabezpieczanie mebli',
        'pakowanie rzeczy delikatnych',
        'oznaczanie kartonów i pojemników',
        'grupowanie według pomieszczeń',
        'przygotowanie całego mienia lub wybranych elementów',
        'pakowanie jako osobna usługa albo część przeprowadzki',
      ],
    },
    gallery: {
      heading: 'Realizacje pakowania',
      images: [
        { src: '/images/packing-services/pakowanie-przeprowadzki-kielce-1.webp', alt: 'Zabezpieczone elementy wyposażenia' },
        { src: '/images/packing-services/pakowanie-przeprowadzki-kielce-2.webp', alt: 'Pakowanie delikatnych rzeczy' },
        { src: '/images/packing-services/pakowanie-przeprowadzki-kielce-3.webp', alt: 'Zabezpieczanie mebli pokrowcami' },
        { src: '/images/packing-services/pakowanie-przeprowadzki-kielce-4.webp', alt: 'Pojemniki transportowe przygotowane do załadunku' },
        { src: '/images/packing-services/pakowanie-przeprowadzki-kielce-5.webp', alt: 'Oznaczanie kartonów' },
        { src: '/images/moving-boxes/kartony-do-przeprowadzki-3.webp', alt: 'Kartony przeprowadzkowe' },
      ],
    },
    process: {
      heading: 'Jak przebiega pakowanie',
      steps: [
        { title: 'Opowiadasz, co pakujemy', desc: 'Powiedz, co chcesz zlecić nam, a co pakujesz samodzielnie.' },
        { title: 'Przygotowujemy materiały', desc: 'Przywozimy kartony, pokrowce, koce i materiały ochronne.' },
        { title: 'Pakujemy i oznaczamy', desc: 'Każdy karton jest zabezpieczony, opisany i gotowy do transportu.' },
        { title: 'Gotowe do drogi', desc: 'Spakowane mienie ustawiamy w kolejności wniesienia do nowego miejsca.' },
      ],
    },
    testimonials: [1, 2],
    faq: [
      { question: 'Czy WHM może spakować całe mieszkanie?', answer: 'Tak.' },
      { question: 'Czy mogę zlecić tylko kuchnię albo rzeczy delikatne?', answer: 'Tak, zakres może obejmować wybrane pomieszczenia lub przedmioty.' },
      { question: 'Czy zapewniacie materiały?', answer: 'Tak, dobór i ilość materiałów ustalamy na podstawie zakresu.' },
      { question: 'Czy pakowanie może obejmować demontaż mebli?', answer: 'Tak, jeśli zostanie uzgodniony przed wyceną.' },
      { question: 'Czy pakowanie można zamówić bez transportu?', answer: 'Tak, po wcześniejszym ustaleniu zakresu i terminu.' },
    ],
    finalCta: {
      heading: 'Powiedz, ile rzeczy mamy przygotować. Dobierzemy właściwy zakres i materiały.',
      text: 'Opisz, co chcesz zlecić. Zaplanujemy pakowanie i materiały za Ciebie.',
    },
    formServiceType: 'Pakowanie i zabezpieczanie',
    formVariant: 'pakowanie',
    formPlaceholder: 'Opisz zakres pakowania',
    formSubmitLabel: 'Wyceń pakowanie',
  },
  {
    slug: 'utylizacja-mebli-kielce',
    campaignEnabled: true,
    breadcrumbs: [
      { name: 'Strona główna', url: `${d}` },
      { name: 'Przeprowadzki', url: `${d}przeprowadzki/` },
      { name: 'Wywóz starych mebli Kielce', url: `${d}lp/utylizacja-mebli-kielce/` },
    ],
    relatedServices: [
      { label: 'Przeprowadzki', href: '/przeprowadzki/' },
      { label: 'Pakowanie do przeprowadzki', href: '/lp/pakowanie-przeprowadzki-kielce/' },
    ],
    seo: {
      title: 'Wywóz starych mebli Kielce | Opróżnianie mieszkań WHM',
      description: 'Wywóz kanap i starych mebli oraz opróżnianie mieszkań, biur, lokali i hal w Kielcach. Wyniesienie, załadunek i legalne przekazanie wyposażenia.',
      canonical: `${d}lp/utylizacja-mebli-kielce/`,
    },
    hero: {
      eyebrow: 'Wywóz mebli i opróżnianie nieruchomości • Kielce',
      heading: 'Wywóz starych mebli Kielce - opróżnianie mieszkań i lokali',
      lead: 'Wynosimy stare meble, ładujemy i przewozimy do właściwego punktu. Od pojedynczej kanapy po całe mieszkanie.',
      image: '/images/kielce-moving/przeprowadzki-kielce-5.webp',
      imageAlt: 'Wynoszenie mebli z mieszkania przez zespół WHM',
      primaryCta: 'Wyceń wywóz mebli',
      secondaryCta: 'Zadzwoń: 720 719 022',
      proofPoints: [
        'Wyniesienie, załadunek i transport w jednym zakresie',
        'Od pojedynczej kanapy po całe pomieszczenia',
        'Jasno określamy, co możemy odebrać',
      ],
    },
    trustStrip: [
      'WHM działa od 2019 roku',
      'Bezpośredni kontakt z właścicielem',
      'Wyniesienie i transport bez szukania osobnej ekipy',
      'Zakres potwierdzany przed realizacją',
    ],
    problemResult: {
      heading: 'Nie musisz organizować osobno wynoszenia, samochodu i miejsca przekazania mebli',
      text: 'Stara kanapa, ciężka szafa albo wyposażenie całego mieszkania wymagają ludzi, miejsca w samochodzie i właściwego sposobu przekazania. WHM może przejąć cały uzgodniony proces: wyniesienie, załadunek, transport i dostarczenie odebranych przedmiotów do właściwego punktu.',
    },
    itemsList: {
      heading: 'Meble i wyposażenie objęte usługą po potwierdzeniu zakresu',
      items: [
        'kanapy, sofy i fotele',
        'szafy, komody i regały',
        'stoły, biurka i krzesła',
        'łóżka i materace',
        'stare meble kuchenne po wcześniejszym ustaleniu demontażu',
        'wyposażenie mieszkań, domów i pojedynczych pomieszczeń',
        'meble oraz wyposażenie biur, lokali, magazynów i hal',
        'inne przedmioty po wcześniejszej ocenie zdjęć i opisu',
      ],
    },
    serviceVariants: {
      heading: 'Zakres dopasowany do ilości wyposażenia',
      items: [
        { title: 'Pojedynczy mebel', desc: 'Stara kanapa, szafa, łóżko, materac albo kilka elementów, których nie możesz wynieść i przewieźć samodzielnie.' },
        { title: 'Pokój lub mieszkanie', desc: 'Opróżnienie wybranego pomieszczenia albo całego mieszkania z uzgodnionych mebli i wyposażenia.' },
        { title: 'Biuro lub dawna siedziba firmy', desc: 'Wynoszenie i wywóz niepotrzebnych mebli biurowych oraz wyposażenia według wcześniej ustalonego zakresu.' },
        { title: 'Lokal, magazyn lub hala', desc: 'Opróżnianie większych przestrzeni z uzgodnionego wyposażenia. Zakres, sposób zagospodarowania i możliwość realizacji potwierdzamy po ocenie.' },
      ],
    },
    benefits: {
      heading: 'Jedno zgłoszenie zamiast kilku osobnych organizacji',
      items: [
        { title: 'Nie organizujesz ekipy do wynoszenia', desc: 'WHM dobiera liczbę osób do zakresu i warunków.' },
        { title: 'Nie szukasz osobnego transportu', desc: 'Załadunek i przewóz są częścią uzgodnionej usługi.' },
        { title: 'Wiesz, czego usługa nie obejmuje', desc: 'Wykluczenia potwierdzamy przed terminem.' },
        { title: 'Możesz pokazać zakres na zdjęciach', desc: 'Ułatwia to ocenę liczby mebli, pięter i dostępu.' },
      ],
    },
    gallery: {
      heading: 'Wynoszenie i transport mebli - realizacje WHM',
      images: [
        { src: '/images/kielce-moving/przeprowadzki-kielce-5.webp', alt: 'Wynoszenie mebli z mieszkania przez zespół WHM' },
        { src: '/images/kielce-moving/przeprowadzki-kielce-3.webp', alt: 'Przenoszenie zabezpieczonych mebli przez zespół WHM' },
        { src: '/images/kielce-moving/przeprowadzki-kielce-4.webp', alt: 'Ustabilizowany ładunek w samochodzie WHM' },
        { src: '/images/kielce-moving/przeprowadzki-kielce-8.webp', alt: 'Przenoszenie dużego elementu przez zespół WHM' },
      ],
    },
    exclusions: {
      heading: 'Ta usługa nie obejmuje wszystkich rodzajów odpadów',
      items: [
        'gruzu',
        'złomu',
        'odpadów poremontowych i budowlanych',
        'azbestu',
        'chemikaliów i odpadów niebezpiecznych',
        'nieuzgodnionych odpadów zmieszanych',
      ],
      text: 'Jeśli w opróżnianej przestrzeni znajdują się różne rodzaje odpadów, opisz je przed wyceną. Potwierdzimy, które elementy możemy odebrać w ramach usługi.',
    },
    pszok: {
      heading: 'Meble przekazujemy zgodnie z zasadami właściwego punktu przyjęcia',
      text: 'Odpady wielkogabarytowe, w tym stare meble, mogą podlegać zasadom i limitom właściwym dla miejsca ich pochodzenia. Po poznaniu zakresu potwierdzamy sposób przekazania oraz informujemy, jeśli potrzebne są dodatkowe dane albo upoważnienie właściciela nieruchomości.',
    },
    scope: {
      heading: 'Ostateczny zakres potwierdzamy przed realizacją',
      items: [
        'wyniesienie uzgodnionych mebli i wyposażenia',
        'załadunek i transport do właściwego punktu przyjęcia',
        'demontaż po wcześniejszym ustaleniu, jeśli jest potrzebny',
        'przekazanie odpadów wielkogabarytowych do PSZOK albo innego właściwego punktu',
        'potwierdzenie zakresu i sposobu zagospodarowania przed terminem',
      ],
      footnote: 'Nie odbieramy gruzu, złomu, odpadów budowlanych, niebezpiecznych ani nieuzgodnionych odpadów zmieszanych.',
    },
    process: {
      heading: 'Od zdjęć do opróżnionej przestrzeni',
      steps: [
        { title: 'Pokazujesz zakres', desc: 'Wysyłasz zdjęcia albo opisujesz meble, lokalizację, piętro, windę i możliwość podjazdu.' },
        { title: 'Weryfikujemy przedmioty i warunki', desc: 'Sprawdzamy, czy wszystkie elementy mieszczą się w zakresie usługi oraz jaki zespół i pojazd będą potrzebne.' },
        { title: 'Ustalamy sposób przekazania', desc: 'Potwierdzamy, gdzie zgodnie z rodzajem i pochodzeniem mogą zostać przekazane odebrane przedmioty oraz czy potrzebne będą dodatkowe informacje lub upoważnienie klienta.' },
        { title: 'Potwierdzamy zakres, wycenę i termin', desc: 'Przed realizacją klient wie, które elementy zostaną odebrane i czego usługa nie obejmuje.' },
        { title: 'Wynosimy i transportujemy', desc: 'Znosimy uzgodnione meble, ładujemy je i przewozimy do właściwego punktu przyjęcia.' },
      ],
    },
    testimonials: [0, 2],
    faq: [
      { question: 'Czy WHM może wywieźć pojedynczą kanapę?', answer: 'Tak. Usługa może obejmować pojedynczą kanapę, szafę, łóżko lub kilka starych mebli. Podaj lokalizację, piętro, windę i zdjęcie przedmiotu.' },
      { question: 'Czy opróżniacie całe mieszkania?', answer: 'Tak. Możemy opróżnić wybrane pomieszczenie albo całe mieszkanie z uzgodnionych mebli i wyposażenia.' },
      { question: 'Czy obsługujecie biura, firmy i hale?', answer: 'Tak. Opróżniamy biura, dawne siedziby firm, lokale, magazyny i hale z mebli oraz wyposażenia objętego potwierdzonym zakresem. Przy większych zleceniach najpierw oceniamy skalę i sposób przekazania przedmiotów.' },
      { question: 'Czy wywozicie gruz albo złom?', answer: 'Nie. Ta usługa nie obejmuje gruzu, złomu ani odpadów budowlanych i poremontowych.' },
      { question: 'Co dzieje się z odebranymi meblami?', answer: 'Przekazujemy je do właściwego punktu przyjęcia, w tym PSZOK, jeśli pozwalają na to rodzaj, pochodzenie i aktualne zasady. Sposób potwierdzamy po poznaniu zlecenia.' },
      { question: 'Czy trzeba przygotować meble do wyniesienia?', answer: 'Opisz ich stan i prześlij zdjęcia. Jeżeli potrzebny jest demontaż, uwzględnimy go w zakresie po wcześniejszym ustaleniu.' },
      { question: 'Od czego zależy cena wywozu?', answer: 'Od liczby i rodzaju mebli, piętra, windy, drogi do samochodu, możliwości podjazdu, potrzebnego demontażu, liczby osób oraz miejsca przekazania.' },
    ],
    finalCta: {
      heading: 'Pokaż, co trzeba wynieść. Ustalimy zakres wywozu.',
      text: 'Prześlij zdjęcia lub opisz meble, lokalizację, piętro, windę i możliwość podjazdu. Jeśli w pomieszczeniu znajdują się inne rodzaje odpadów, wymień je przed wyceną.',
    },
    formServiceType: 'Wywóz mebli i opróżnianie nieruchomości',
    formVariant: 'utylizacja',
    formPlaceholder: 'Jakie meble lub wyposażenie trzeba wynieść?',
    formSubmitLabel: 'Wyceń wywóz mebli',
  },
  {
    slug: 'transport-mebli-kielce',
    campaignEnabled: true,
    breadcrumbs: [
      { name: 'Strona główna', url: `${d}` },
      { name: 'Transport gabarytowy', url: `${d}transport-gabarytowy-kielce/` },
      { name: 'Transport mebli Kielce', url: `${d}lp/transport-mebli-kielce/` },
    ],
    relatedServices: [
      { label: 'Przeprowadzki', href: '/przeprowadzki/' },
      { label: 'Transport gabarytowy', href: '/lp/transport-gabarytowy-kielce/' },
      { label: 'Pakowanie i zabezpieczanie', href: '/lp/pakowanie-przeprowadzki-kielce/' },
    ],
    seo: {
      title: 'Transport mebli Kielce | Wyniesienie i wniesienie | WHM',
      description: 'Transport mebli w Kielcach z zabezpieczeniem, wyniesieniem, przewozem i wniesieniem. Kanapy, szafy, stoły i pojedyncze meble. Opisz zlecenie.',
      canonical: `${d}lp/transport-mebli-kielce/`,
    },
    hero: {
      eyebrow: 'Transport mebli • Kielce i województwo świętokrzyskie',
      heading: 'Transport mebli Kielce - przewóz, wyniesienie i wniesienie',
      lead: 'Kanapa, szafa, stół lub całe wyposażenie - zabezpieczamy, wynosimy, przewozimy i wnosimy na miejsce.',
      image: '/images/transport-mebli/transport-mebli-kielce-1.webp',
      imageAlt: 'Zabezpieczony transport mebli realizowany przez WHM w Kielcach',
      primaryCta: 'Opisz meble i poproś o wycenę',
      secondaryCta: 'Zadzwoń: 720 719 022',
      proofPoints: [
        'Zabezpieczenia są częścią realizacji',
        'Wyniesienie i wniesienie w uzgodnionym zakresie',
        'Możliwy demontaż i ponowny montaż mebli',
      ],
    },
    trustStrip: [
      'Działamy od 2019 roku',
      'Zabezpieczenia w standardzie',
      'Własny sprzęt transportowy',
      'Kontakt bezpośrednio z właścicielem',
    ],
    problemResult: {
      heading: 'Transport mebla nie zaczyna się przy samochodzie',
      text: 'Najpierw trzeba bezpiecznie wynieść mebel z budynku, przeprowadzić go przez drzwi, klatkę schodową lub windę, zabezpieczyć na czas przewozu, a następnie wnieść go do właściwego pomieszczenia. Dlatego przed realizacją pytamy o wymiary, piętra, dostępność wind, możliwość podjazdu oraz ewentualną potrzebę demontażu.',
    },
    benefits: {
      heading: 'Co zyskujesz, zlecając transport mebli WHM',
      items: [
        { title: 'Bezpieczniejsze przenoszenie', desc: 'Oceniamy przejścia, schody, windy i drogę pomiędzy budynkiem a samochodem.' },
        { title: 'Zabezpieczenie na czas przewozu', desc: 'Dobieramy pokrowce, koce, folię, pasy i sposób stabilizacji odpowiedni do przewożonego mebla.' },
        { title: 'Wyniesienie i wniesienie', desc: 'Zakres może obejmować przeniesienie mebla od miejsca odbioru do wskazanego pomieszczenia.' },
        { title: 'Demontaż i montaż', desc: 'Jeśli mebel wymaga rozłożenia, możemy uwzględnić demontaż i ponowny montaż po wcześniejszym uzgodnieniu.' },
      ],
    },
    itemsList: {
      heading: 'Jakie meble możemy przewieźć',
      items: [
        'kanapy, sofy i narożniki',
        'szafy, regały i witryny',
        'komody i ciężkie meble drewniane',
        'stoły, biurka i krzesła',
        'łóżka, materace i stelaże',
        'meble kupione w sklepie lub od osoby prywatnej',
        'pojedyncze meble wymagające wyniesienia i wniesienia',
        'większą liczbę mebli w ramach przeprowadzki lub zmiany wyposażenia',
      ],
    },
    gallery: {
      heading: 'Transport i zabezpieczanie mebli przez WHM',
      images: [
        { src: '/images/transport-mebli/transport-mebli-kielce-1.webp', alt: 'Transport zabezpieczonych mebli przez WHM w Kielcach' },
        { src: '/images/transport-mebli/transport-mebli-kielce-2.webp', alt: 'Meble przygotowane do bezpiecznego przewozu' },
        { src: '/images/furniture-assembly/montaz-demontaz-mebli-1.webp', alt: 'Demontaż mebli przed transportem' },
        { src: '/images/furniture-assembly/montaz-demontaz-mebli-2.webp', alt: 'Montaż mebli po zakończonym transporcie' },
        { src: '/images/kielce-moving/przeprowadzki-kielce-2.webp', alt: 'Zabezpieczone meble w samochodzie WHM' },
        { src: '/images/kielce-moving/przeprowadzki-kielce-4.webp', alt: 'Ustabilizowany ładunek mebli w pojeździe WHM' },
      ],
    },
    scope: {
      heading: 'Zakres transportu dopasujemy do Twojego zlecenia',
      items: [
        'ocena wymiarów i warunków dostępu',
        'zabezpieczenie mebli przed przenoszeniem',
        'zabezpieczenie drzwi, narożników lub delikatnych powierzchni, jeśli wymaga tego sytuacja',
        'demontaż uzgodnionych elementów',
        'wynoszenie',
        'załadunek i stabilizacja w pojeździe',
        'transport',
        'wniesienie',
        'ponowny montaż w uzgodnionym zakresie',
        'ustawienie mebla we wskazanym miejscu',
      ],
      footnote: 'Ostateczny zakres zależy od rodzaju mebli, ich wymiarów, warunków dostępu oraz możliwości bezpiecznego wykonania prac.',
    },
    process: {
      heading: 'Jak wygląda transport mebli z WHM',
      steps: [
        { title: 'Opisujesz meble', desc: 'Podajesz rodzaj, liczbę, przybliżone wymiary, lokalizacje i preferowany termin.' },
        { title: 'Sprawdzamy dostęp', desc: 'Pytamy o piętra, windy, schody, szerokość przejść i możliwość podjazdu.' },
        { title: 'Ustalamy zakres', desc: 'Potwierdzamy wyniesienie, wniesienie, zabezpieczenia oraz ewentualny demontaż i montaż.' },
        { title: 'Dobieramy ekipę i pojazd', desc: 'Zakres realizacji dopasowujemy do wielkości mebli i warunków w obu lokalizacjach.' },
        { title: 'Realizujemy transport', desc: 'Zabezpieczamy, przenosimy, stabilizujemy w pojeździe, przewozimy i ustawiamy meble w uzgodnionym miejscu.' },
      ],
    },
    testimonials: [0, 2],
    faq: [
      { question: 'Czy WHM przewozi pojedyncze meble?', answer: 'Tak. Możemy przewieźć pojedynczą kanapę, szafę, stół, komodę lub inny mebel, jeśli warunki umożliwiają bezpieczną realizację.' },
      { question: 'Czy usługa obejmuje wyniesienie i wniesienie?', answer: 'Tak, wyniesienie i wniesienie może być częścią zlecenia. Przed wyceną ustalamy piętra, dostępność wind, schody, odległość od wejścia do samochodu oraz inne warunki dostępu.' },
      { question: 'Czy możecie zdemontować mebel przed transportem?', answer: 'Tak, jeśli demontaż zostanie uzgodniony przed realizacją. Po przewozie możemy również wykonać ponowny montaż w ustalonym zakresie.' },
      { question: 'Czy przewozicie meble kupione od osoby prywatnej?', answer: 'Tak. Możemy odebrać mebel ze wskazanej lokalizacji i dostarczyć go pod podany adres wraz z ustalonym zakresem wyniesienia i wniesienia.' },
      { question: 'Od czego zależy cena transportu mebli?', answer: 'Cena zależy między innymi od liczby i rodzaju mebli, ich wymiarów i ciężaru, odległości, pięter, wind, możliwości podjazdu, potrzebnych zabezpieczeń oraz zakresu demontażu, wyniesienia i wniesienia.' },
      { question: 'Czy przewozicie meble poza Kielcami?', answer: 'Tak. Realizujemy również transport mebli na terenie województwa świętokrzyskiego oraz przewozy międzymiastowe po wcześniejszym ustaleniu zakresu.' },
      { question: 'Jakie informacje są potrzebne do wyceny?', answer: 'Podaj rodzaj i liczbę mebli, przybliżone wymiary, miejscowość odbioru i dostawy, piętra, dostępność wind, możliwość podjazdu oraz informację, czy potrzebny jest demontaż lub montaż.' },
    ],
    finalCta: {
      heading: 'Opisz meble i warunki dostępu. Dobierzemy właściwy sposób transportu.',
      text: 'Nie musisz znać wszystkich parametrów. Podaj to, co wiesz, a brakujące informacje ustalimy przed przygotowaniem wyceny.',
    },
    formServiceType: 'Transport mebli',
    formVariant: 'meble',
    formPlaceholder: 'Jakie meble trzeba przewieźć?',
    formSubmitLabel: 'Wyceń transport mebli',
  },
];

export function getLandingPage(slug: string): LandingPageData | undefined {
  return landingPages.find((p) => p.slug === slug);
}
