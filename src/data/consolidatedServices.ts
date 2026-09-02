export interface ConsolidatedServicePage {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  lead: string;
  heroImage: string;
  heroAlt: string;
  intro: {
    heading: string;
    paragraphs: string[];
  };
  trust: { title: string; desc: string }[];
  scope: {
    heading: string;
    description: string;
    groups: { title: string; items: string[] }[];
  };
  standard: {
    heading: string;
    text: string;
    images: { src: string; alt: string; caption: string }[];
  };
  process: { number: string; title: string; desc: string }[];
  gallery: { src: string; alt: string }[];
  testimonialAuthors: string[];
  faq: { question: string; answer: string }[];
  related: { label: string; href: string; text: string }[];
  form: {
    id: string;
    serviceType: string;
    placeholder: string;
  };
  finalCta: { heading: string; text: string };
  exclusions?: {
    heading: string;
    text: string;
    items: string[];
  };
}

export const transportMebliPage: ConsolidatedServicePage = {
  slug: '/transport-mebli-kielce/',
  title: 'Transport mebli Kielce z wniesieniem i montażem | WHM',
  description: 'Transport mebli w Kielcach z zabezpieczeniem, wyniesieniem, wniesieniem oraz uzgodnionym demontażem i ponownym montażem przez jeden zespół.',
  eyebrow: 'Transport mebli • Kielce i województwo świętokrzyskie',
  heading: 'Mebel bezpiecznie od miejsca odbioru do właściwego pomieszczenia',
  lead: 'Kanapa, szafa, stół lub większy zestaw — zabezpieczamy, wynosimy, przewozimy i wnosimy. Gdy droga tego wymaga, uzgadniamy demontaż i ponowny montaż.',
  heroImage: '/images/transport-mebli/transport-mebli-kielce-1.webp',
  heroAlt: 'Zabezpieczony mebel przygotowany do transportu przez zespół WHM',
  intro: {
    heading: 'Transport mebla zaczyna się przed samochodem',
    paragraphs: [
      'Najpierw trzeba ocenić drzwi, klatkę schodową, windę i drogę do miejsca postoju. Dopiero wtedy wiadomo, ile osób i jakie zabezpieczenia będą potrzebne.',
      'Przed realizacją pytamy o rodzaj i wymiary mebli, piętra, dostępność windy, możliwość podjazdu oraz miejsce, w którym mebel ma zostać ustawiony. Dzięki temu zespół przyjeżdża przygotowany do uzgodnionego zakresu.',
    ],
  },
  trust: [
    { title: 'Zabezpieczenia w standardzie', desc: 'Koce, gumy, dedykowane pokrowce i pasy dobierane do mebla.' },
    { title: 'Jedna odpowiedzialność', desc: 'Wyniesienie, transport, wniesienie i uzgodniony montaż w jednym zleceniu.' },
    { title: 'Rzeczywiste warunki', desc: 'Zakres ustalamy po poznaniu mebla i drogi w obu lokalizacjach.' },
  ],
  scope: {
    heading: 'Zakres dopasowany do konkretnego mebla',
    description: 'Możemy obsłużyć pojedynczy zakup, komplet wyposażenia albo większą zmianę umeblowania.',
    groups: [
      {
        title: 'Co przewozimy',
        items: ['Kanapy, sofy i narożniki', 'Szafy, regały i witryny', 'Stoły, biurka i krzesła', 'Łóżka, materace i stelaże'],
      },
      {
        title: 'Co może obejmować usługa',
        items: ['Ocena warunków dostępu', 'Zabezpieczenie przed wynoszeniem', 'Załadunek i stabilizacja', 'Wniesienie i ustawienie'],
      },
      {
        title: 'Demontaż i montaż',
        items: ['Ocena potrzeby demontażu', 'Uporządkowanie elementów', 'Transport części w zabezpieczeniu', 'Ponowny montaż w ustalonym zakresie'],
      },
      {
        title: 'Skąd odbieramy',
        items: ['Mieszkania i domy', 'Sklepy i magazyny', 'Firmy i biura', 'Adresy sprzedających prywatnych'],
      },
    ],
  },
  standard: {
    heading: 'Ochrona powierzchni i stabilizacja na czas jazdy',
    text: 'Nie zabezpieczamy mebli folią stretch. Używamy wielorazowych koców, gum i dedykowanych pokrowców, a w suchej przestrzeni ładunkowej stabilizujemy mienie pasami.',
    images: [
      { src: '/images/transport-mebli/transport-mebli-kielce-2.webp', alt: 'Meble przygotowane do bezpiecznego przewozu', caption: 'Zabezpieczenie dobrane do powierzchni mebla' },
      { src: '/images/furniture-assembly/montaz-demontaz-mebli-1.webp', alt: 'Demontaż mebla przed transportem', caption: 'Demontaż, gdy wymaga go bezpieczne wyniesienie' },
      { src: '/images/kielce-moving/przeprowadzki-kielce-4.webp', alt: 'Ustabilizowany ładunek w samochodzie WHM', caption: 'Stabilizacja w zabudowanej przestrzeni ładunkowej' },
    ],
  },
  process: [
    { number: '01', title: 'Opisujesz meble', desc: 'Podajesz rodzaj, liczbę, wymiary i oba adresy.' },
    { number: '02', title: 'Sprawdzamy dostęp', desc: 'Ustalamy piętra, windy, schody i możliwość podjazdu.' },
    { number: '03', title: 'Potwierdzamy zakres', desc: 'Określamy zabezpieczenia, wyniesienie, wniesienie i ewentualny demontaż.' },
    { number: '04', title: 'Realizujemy transport', desc: 'Zabezpieczamy, przenosimy, stabilizujemy i ustawiamy meble na miejscu.' },
  ],
  gallery: [
    { src: '/images/transport-mebli/transport-mebli-kielce-1.webp', alt: 'Zabezpieczony transport mebli realizowany przez WHM' },
    { src: '/images/transport-mebli/transport-mebli-kielce-2.webp', alt: 'Meble przygotowane do bezpiecznego przewozu' },
    { src: '/images/furniture-assembly/montaz-demontaz-mebli-2.webp', alt: 'Montaż mebla po zakończonym transporcie' },
    { src: '/images/kielce-moving/przeprowadzki-kielce-2.webp', alt: 'Zabezpieczone meble w samochodzie WHM' },
  ],
  testimonialAuthors: ['Zbigniew Pakuła', 'Wiola'],
  faq: [
    { question: 'Czy WHM przewozi pojedyncze meble?', answer: 'Tak. Możemy przewieźć pojedynczą kanapę, szafę, stół, komodę lub inny mebel, jeśli warunki umożliwiają bezpieczną realizację.' },
    { question: 'Czy usługa obejmuje wyniesienie i wniesienie?', answer: 'Tak. Zakres ustalamy po poznaniu pięter, wind, schodów, możliwości podjazdu i miejsca docelowego.' },
    { question: 'Czy możecie zdemontować mebel?', answer: 'Tak, jeżeli demontaż zostanie uzgodniony i konstrukcja mebla na to pozwala. Możemy również wykonać ponowny montaż w ustalonym zakresie.' },
    { question: 'Czy odbieracie meble ze sklepu lub od osoby prywatnej?', answer: 'Tak. Odbieramy meble ze wskazanego adresu i dostarczamy je do uzgodnionego miejsca wraz z ustalonym wyniesieniem i wniesieniem.' },
    { question: 'Od czego zależy cena transportu mebli?', answer: 'Od liczby, wymiarów i masy mebli, odległości, pięter, wind, podjazdu, zabezpieczeń oraz zakresu demontażu, wyniesienia i wniesienia.' },
  ],
  related: [
    { label: 'Przeprowadzki mieszkań i domów', href: '/przeprowadzki/', text: 'Pełny proces przeprowadzki pod opieką jednego zespołu.' },
    { label: 'Pakowanie i zabezpieczanie', href: '/pakowanie-i-zabezpieczanie/', text: 'Materiały i przygotowanie rzeczy do transportu.' },
    { label: 'Transport specjalistyczny', href: '/transport-specjalistyczny/', text: 'Dla ciężkich i nietypowych przedmiotów wymagających osobnej oceny.' },
  ],
  form: {
    id: 'transport-mebli-form',
    serviceType: 'Transport mebli',
    placeholder: 'Jakie meble trzeba przewieźć? Podaj adresy, piętra i dostęp do windy.',
  },
  finalCta: {
    heading: 'Opisz mebel i drogę w obu lokalizacjach',
    text: 'Zadzwoń lub zostaw kontakt. Zdjęcia możesz dosłać po zgłoszeniu SMS-em albo e-mailem.',
  },
};

export const oproznianiePage: ConsolidatedServicePage = {
  slug: '/oproznianie-mieszkan-i-wywoz-mebli/',
  title: 'Opróżnianie mieszkań i wywóz mebli Kielce | WHM',
  description: 'Opróżnianie mieszkań w Kielcach: wyniesienie i wywóz uzgodnionych starych mebli oraz wyposażenia do PSZOK. Bez gruzu i odpadów budowlanych.',
  eyebrow: 'Opróżnianie mieszkań • Kielce i okolice',
  heading: 'Opróżnianie mieszkań i wywóz starych mebli',
  lead: 'Wynosimy uzgodnione meble i wyposażenie, ładujemy je i przewozimy do PSZOK. Przed terminem jasno potwierdzamy zakres oraz rzeczy, których usługa nie obejmuje.',
  heroImage: '/images/kielce-moving/przeprowadzki-kielce-5.webp',
  heroAlt: 'Zespół WHM podczas wynoszenia wyposażenia z mieszkania',
  intro: {
    heading: 'Jedna organizacja zamiast osobnej ekipy i transportu',
    paragraphs: [
      'Stara kanapa, ciężka szafa albo wyposażenie całego mieszkania wymagają ludzi, miejsca w samochodzie i odpowiedniego punktu przyjęcia. WHM może przejąć wyniesienie, załadunek i transport uzgodnionych mebli.',
      'Nie działamy jako zakład utylizacyjny. Stare meble i wyposażenie przewozimy do PSZOK, natomiast nie odbieramy gruzu, złomu ani odpadów budowlanych.',
    ],
  },
  trust: [
    { title: 'Jasny zakres', desc: 'Przed realizacją potwierdzamy, które przedmioty możemy odebrać.' },
    { title: 'Wyniesienie i transport', desc: 'Nie musisz osobno organizować ludzi i samochodu.' },
    { title: 'Przekazanie do PSZOK', desc: 'Uzgodnione meble i wyposażenie przewozimy do właściwego punktu.' },
  ],
  scope: {
    heading: 'Od pojedynczego mebla po całe pomieszczenie',
    description: 'Zakres dobieramy do liczby rzeczy, warunków dostępu i możliwości przyjęcia ich przez właściwy PSZOK.',
    groups: [
      { title: 'Meble wypoczynkowe', items: ['Kanapy i sofy', 'Fotele', 'Łóżka i materace', 'Narożniki'] },
      { title: 'Meble skrzyniowe', items: ['Szafy i komody', 'Regały', 'Stoły i biurka', 'Stare meble kuchenne po uzgodnieniu'] },
      { title: 'Skala usługi', items: ['Pojedynczy mebel', 'Wybrane pomieszczenie', 'Mieszkanie lub dom', 'Biuro albo lokal'] },
      { title: 'Możliwy zakres', items: ['Demontaż po uzgodnieniu', 'Wyniesienie', 'Załadunek i transport', 'Przekazanie do PSZOK'] },
    ],
  },
  standard: {
    heading: 'Najpierw zdjęcia i potwierdzenie zakresu',
    text: 'Oceniamy liczbę mebli, piętro, windę, dojście i możliwość podjazdu. Jeżeli potrzebny jest demontaż, ustalamy go przed terminem.',
    images: [
      { src: '/images/kielce-moving/przeprowadzki-kielce-5.webp', alt: 'Wynoszenie wyposażenia przez zespół WHM', caption: 'Zakres wyniesienia ustalony przed realizacją' },
      { src: '/images/kielce-moving/przeprowadzki-kielce-3.webp', alt: 'Przenoszenie zabezpieczonego mebla', caption: 'Bezpieczne przenoszenie przez budynek' },
      { src: '/images/kielce-moving/przeprowadzki-kielce-4.webp', alt: 'Ładunek ustabilizowany w samochodzie WHM', caption: 'Załadunek i transport jednym pojazdem' },
    ],
  },
  process: [
    { number: '01', title: 'Pokazujesz zakres', desc: 'Wysyłasz zdjęcia lub opis mebli, piętra, windy i podjazdu.' },
    { number: '02', title: 'Weryfikujemy rzeczy', desc: 'Potwierdzamy, co mieści się w usłudze i czego nie odbieramy.' },
    { number: '03', title: 'Ustalamy zespół i termin', desc: 'Dobieramy liczbę osób, pojazd i ewentualny demontaż.' },
    { number: '04', title: 'Wynosimy i przewozimy', desc: 'Ładujemy uzgodnione wyposażenie i transportujemy je do PSZOK.' },
  ],
  gallery: [
    { src: '/images/kielce-moving/przeprowadzki-kielce-5.webp', alt: 'Wynoszenie mebli z mieszkania przez zespół WHM' },
    { src: '/images/kielce-moving/przeprowadzki-kielce-3.webp', alt: 'Przenoszenie mebli przez zespół WHM' },
    { src: '/images/kielce-moving/przeprowadzki-kielce-8.webp', alt: 'Przenoszenie dużego elementu wyposażenia' },
  ],
  testimonialAuthors: ['Zbigniew Pakuła', 'Wiola'],
  exclusions: {
    heading: 'Czego ta usługa nie obejmuje',
    text: 'Jeżeli w opróżnianej przestrzeni znajdują się inne odpady, opisz je przed wyceną. Potwierdzimy, które elementy możemy odebrać.',
    items: ['Gruz', 'Złom', 'Odpady budowlane i poremontowe', 'Azbest i chemikalia', 'Odpady niebezpieczne', 'Nieuzgodnione odpady zmieszane'],
  },
  faq: [
    { question: 'Czy WHM może wywieźć pojedynczą kanapę?', answer: 'Tak. Podaj lokalizację, piętro, windę i prześlij zdjęcie przedmiotu.' },
    { question: 'Czy opróżniacie całe mieszkania?', answer: 'Tak. Możemy opróżnić wybrane pomieszczenie albo całe mieszkanie z uzgodnionych mebli i wyposażenia.' },
    { question: 'Czy wywozicie gruz albo złom?', answer: 'Nie. Usługa nie obejmuje gruzu, złomu ani odpadów budowlanych i poremontowych.' },
    { question: 'Co dzieje się z odebranymi meblami?', answer: 'Przewozimy je do PSZOK. Możliwość przyjęcia i potrzebne informacje potwierdzamy po poznaniu zakresu.' },
    { question: 'Czy trzeba przygotować meble do wyniesienia?', answer: 'Prześlij zdjęcia i opisz stan mebli. Jeżeli potrzebny jest demontaż, uwzględnimy go po wcześniejszym ustaleniu.' },
  ],
  related: [
    { label: 'Transport mebli', href: '/transport-mebli-kielce/', text: 'Gdy mebel ma trafić pod nowy adres, a nie do PSZOK.' },
    { label: 'Przeprowadzki', href: '/przeprowadzki/', text: 'Pełna zmiana mieszkania lub domu z zabezpieczeniem mienia.' },
    { label: 'Pakowanie i zabezpieczanie', href: '/pakowanie-i-zabezpieczanie/', text: 'Przygotowanie rzeczy, które zostają i jadą do nowego miejsca.' },
  ],
  form: {
    id: 'oproznianie-form',
    serviceType: 'Opróżnianie mieszkań i wywóz starych mebli',
    placeholder: 'Co trzeba wynieść? Podaj lokalizację, piętro, windę i możliwość podjazdu.',
  },
  finalCta: {
    heading: 'Pokaż, co trzeba wynieść',
    text: 'Zadzwoń lub zostaw kontakt. Zdjęcia pomogą nam potwierdzić zakres i przygotować wycenę.',
  },
};
