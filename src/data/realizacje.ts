export interface CaseStudySection {
  heading: string;
  paragraphs: string[];
}

export interface CaseStudyGalleryImage {
  src: string;
  alt: string;
  caption: string;
}

export interface CaseStudyRelatedLink {
  label: string;
  href: string;
  text: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  lead: string;
  heroImage: string;
  heroAlt: string;
  category: string;
  facts: string[];
  sections: CaseStudySection[];
  conclusionHeading: string;
  conclusionText: string;
  gallery: CaseStudyGalleryImage[];
  relatedServices: CaseStudyRelatedLink[];
  relatedRealizacje: { label: string; href: string }[];
  salesHeading: string;
  salesText: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: '/realizacje/relokacja-prokuratur-kielce/',
    title: 'Relokacja prokuratur w Kielcach | Realizacja WHM',
    description: 'Relokacja Prokuratur Kielce-Wschód i Kielce-Zachód: cztery kondygnacje, piwnica, archiwa i wyposażenie ponad stu pracowników bez przerwy w działaniu.',
    eyebrow: 'Relokacja instytucji publicznej',
    heading: 'Dwie prokuratury, cztery kondygnacje i archiwum, którego porządku nie można było zgubić',
    lead: 'Relokacja Prokuratury Rejonowej Kielce-Wschód i Kielce-Zachód trwała około dwóch miesięcy i obejmowała wyposażenie ponad stu pracowników. Najważniejszym celem nie było wyłącznie opróżnienie budynku na czas remontu, lecz takie zorganizowanie całego procesu, aby praca instytucji nie została przerwana.',
    heroImage: '/images/realizacje/prokuratury-kielce/przeprowadzka-prokuratury-1.webp',
    heroAlt: 'Relokacja wyposażenia Prokuratury realizowana przez zespół WHM',
    category: 'Firmy i instytucje',
    facts: [
      'dwie instytucje: Prokuratura Rejonowa Kielce-Wschód i Kielce-Zachód',
      'około dwóch miesięcy regularnej pracy',
      'cztery kondygnacje i piwnica',
      'archiwum liczone w kilometrach bieżących akt',
      'dziesiątki szaf i komputerów',
      'wyposażenie ponad stu pracowników',
      'przeniesienie do lokalizacji tymczasowej na czas remontu',
      'poprawne rozdysponowanie mienia',
      'zachowanie ciągłości działania instytucji',
    ],
    sections: [
      {
        heading: 'Budynek miał zostać opróżniony. Instytucja nadal musiała działać',
        paragraphs: [
          'Przeprowadzka biura może oznaczać kilkanaście stanowisk, kilka szaf i jeden dzień pracy. W przypadku relokacji obu kieleckich prokuratur skala była zupełnie inna. Zakres obejmował cztery kondygnacje oraz piwnicę, w której znajdowało się rozbudowane archiwum liczone w kilometrach bieżących akt.',
          'Do przeniesienia były dziesiątki szaf, komputery, dokumentacja, wyposażenie pracowników oraz praktycznie cała zawartość budynku. Łącznie projekt dotyczył mienia wykorzystywanego przez ponad stu pracowników. Wszystko trzeba było wynieść, przewieźć i poprawnie rozdysponować w lokalizacji tymczasowej na czas remontu.',
          'Samo tempo nie mogło być jedynym kryterium. Przypadkowo ustawiona szafa, pomieszana dokumentacja albo źle przypisane wyposażenie oznaczałyby problemy organizacyjne po stronie instytucji. Dlatego przeprowadzka wymagała zachowania systemu, według którego poszczególne elementy miały trafić do właściwych miejsc.',
        ],
      },
      {
        heading: 'Największym ładunkiem była odpowiedzialność za ciągłość pracy',
        paragraphs: [
          'W instytucji publicznej nie można potraktować całego wyposażenia jak anonimowej zawartości magazynu. Dokumenty, stanowiska pracy i sprzęt muszą po relokacji wrócić do określonych jednostek i osób. Jednocześnie praca urzędu nie może zostać zatrzymana na czas całej przeprowadzki.',
          'Dlatego projekt został rozłożony na etapy i realizowany dzień po dniu przez około dwa miesiące. Zamiast jednorazowego, chaotycznego opróżnienia budynku powstał proces, w którym przenoszenie kolejnych części wyposażenia było podporządkowane funkcjonowaniu instytucji.',
          'WHM odpowiadało nie tylko za fizyczny transport, ale również za poprawne rozmieszczenie przewiezionego mienia. Zespół musiał kontrolować, skąd pochodzi dany element, dokąd ma trafić i w jakiej kolejności należy wykonywać prace, aby następne etapy nie blokowały poprzednich.',
        ],
      },
      {
        heading: 'Cztery piętra, piwnica i dziesiątki ciężkich elementów',
        paragraphs: [
          'Skala budynku oznaczała stałą pracę na wielu kondygnacjach. Szafy, komputery i wyposażenie biurowe wymagały zabezpieczenia oraz bezpiecznego prowadzenia przez ciągi komunikacyjne. Archiwum wymagało odrębnego podejścia, ponieważ jego wartość nie wynikała z ceny pojedynczego segregatora, lecz z kompletności i kolejności całego zasobu.',
          'Przy takich projektach nawet prosta czynność ma konsekwencje dla dalszej części realizacji. Kolejność wynoszenia wpływa na sposób załadunku. Sposób załadunku wpływa na kolejność rozładunku. Miejsce ustawienia wyposażenia wpływa na to, czy pracownicy mogą wznowić swoje obowiązki bez kolejnego przestawiania całych pomieszczeń.',
        ],
      },
      {
        heading: 'Rezultat: budynek opróżniony, mienie rozdysponowane, praca kontynuowana',
        paragraphs: [
          'Cały budynek został opróżniony z wyposażenia objętego zakresem, a mienie przewieziono i rozdysponowano w lokalizacji tymczasowej. Najważniejszy rezultat nie sprowadzał się jednak do liczby kursów czy przeniesionych szaf. Praca prokuratur mogła być kontynuowana bez przerwy.',
          'Realizacja pokazuje, że duża relokacja instytucji nie jest sumą pojedynczych transportów. Jest projektem operacyjnym, w którym trzeba połączyć ludzi, dokumentację, sprzęt, harmonogram i odpowiedzialność za działalność klienta.',
        ],
      },
    ],
    conclusionHeading: 'Co ta realizacja pokazuje?',
    conclusionText: 'Duża relokacja instytucji nie jest sumą pojedynczych transportów. Jest projektem operacyjnym, w którym trzeba połączyć ludzi, dokumentację, sprzęt, harmonogram i odpowiedzialność za działalność klienta.',
    gallery: [
      { src: '/images/realizacje/prokuratury-kielce/przeprowadzka-prokuratury-1.webp', alt: 'Zabezpieczone wyposażenie instytucji podczas relokacji WHM', caption: 'Zabezpieczenie i organizacja wyposażenia na czas relokacji' },
      { src: '/images/institution-moving/przeprowadzki-instytucji-5.webp', alt: 'Transport szaf i wyposażenia biurowego przez zespół WHM', caption: 'Przenoszenie szaf i wyposażenia między kondygnacjami' },
      { src: '/images/institution-moving/przeprowadzki-instytucji-6.webp', alt: 'Zabezpieczone archiwa i dokumentacja podczas transportu', caption: 'Archiwum liczone w kilometrach bieżących akt' },
    ],
    relatedServices: [
      { label: 'Przeprowadzki firm i instytucji', href: '/przeprowadzki-firm-i-instytucji/', text: 'Pełny proces relokacji biur, urzędów i instytucji.' },
      { label: 'Dla firm', href: '/dla-firm/', text: 'Planowanie i realizacja relokacji dla firm i instytucji.' },
      { label: 'Pakowanie i zabezpieczanie', href: '/pakowanie-i-zabezpieczanie/', text: 'Materiały, oznaczanie i przygotowanie mienia do transportu.' },
    ],
    relatedRealizacje: [
      { label: 'Relokacja Teatru im. Stefana Żeromskiego', href: '/realizacje/relokacja-teatru-zeromskiego-kielce/' },
      { label: 'Relokacja TVP3 Kielce', href: '/realizacje/relokacja-tvp3-kielce/' },
      { label: 'Relokacja biblioteki w Busku-Zdroju', href: '/realizacje/relokacja-biblioteki-busko-zdroj/' },
    ],
    salesHeading: 'Relokacja instytucji zaczyna się od planu, nie od podstawienia samochodu',
    salesText: 'Jeżeli projekt obejmuje wiele działów, archiwum, ciężkie wyposażenie lub pracę etapami, WHM może przeprowadzić oględziny i przygotować zakres realizacji. Ustalamy kolejność, zasoby, sposób oznaczania oraz elementy, których przeniesienie wymaga osobnej technologii.',
  },
  {
    slug: '/realizacje/relokacja-teatru-zeromskiego-kielce/',
    title: 'Relokacja Teatru Żeromskiego w Kielcach | WHM',
    description: 'WHM zebrało zasoby Teatru im. Stefana Żeromskiego z kilku lokalizacji w Kielcach i przeniosło je do historycznej siedziby — niemal 50 transportów.',
    eyebrow: 'Relokacja instytucji kultury',
    heading: 'Powrót Teatru im. Stefana Żeromskiego do historycznej siedziby',
    lead: 'Po wieloletnim remoncie zasoby teatru były rozproszone w kilku lokalizacjach na terenie Kielc. Zadaniem WHM było zebrać scenografię, kostiumy, wyposażenie techniczne, bibliotekę, dwa fortepiany i mienie poszczególnych działów, a następnie wprowadzić je do odnowionego budynku zgodnie z ustalonym harmonogramem.',
    heroImage: '/images/realizacje/teatr-zeromskiego/relokacja-teatru-1.webp',
    heroAlt: 'Relokacja wyposażenia Teatru im. Żeromskiego przez WHM',
    category: 'Kultura i dzieła sztuki',
    facts: [
      'kilka lokalizacji początkowych na terenie Kielc',
      'scenografia, kostiumy, technika, biblioteka i wyposażenie działów',
      'dwa fortepiany',
      'około 4–5 samochodów samych kostiumów',
      'trzy duże auta o łącznej kubaturze około 60–65 m³',
      'niemal 50 pełnych samochodów w głównych etapach i kursach pomiędzy nimi',
      'intensywne dni pracy trwające około 9–10 godzin',
      'powrót zasobów do historycznej siedziby po wieloletnim remoncie',
    ],
    sections: [
      {
        heading: 'To nie była przeprowadzka z jednego budynku do drugiego',
        paragraphs: [
          'Na czas remontu Teatr im. Stefana Żeromskiego korzystał z różnych przestrzeni. Część zasobów znajdowała się w Wojewódzkim Domu Kultury, część biblioteczna była przechowywana w innej lokalizacji, zaplecze magazynowe w kolejnej, a scenografia została rozdzielona pomiędzy różne miejsca.',
          'Powrót do historycznej siedziby oznaczał więc operację konsolidacyjną. Zespół nie mógł rozpocząć w jednym punkcie i zakończyć pracy po pojedynczym rozładunku. Trzeba było koordynować odbiory wielu kategorii mienia z kilku lokalizacji oraz kierować je do odpowiednich części odnowionego teatru.',
        ],
      },
      {
        heading: 'Każdy dział teatru oznaczał inny rodzaj mienia',
        paragraphs: [
          'Zakres obejmował elementy scenografii, wyposażenie akustyczne i oświetleniowe, gabloty, historyczne elementy wyposażenia, kostiumy, wyposażenie pralni, zasoby biblioteczne, dwa fortepiany oraz pozostałe mienie poszczególnych działów.',
          'Nie dało się zastosować jednego sposobu zabezpieczenia i jednego schematu pracy. Kostiumy wymagały innej organizacji niż fortepiany. Elementy techniczne wymagały innego prowadzenia niż gabloty. Scenografia często ograniczała wykorzystanie przestrzeni nie masą, lecz nietypowym kształtem i objętością.',
          'Same kostiumy zajęły około czterech lub pięciu samochodów. To dobrze pokazuje skalę projektu, mimo że stanowiły tylko jedną z wielu kategorii przewożonego mienia.',
        ],
      },
      {
        heading: 'Niemal 50 pełnych samochodów',
        paragraphs: [
          'WHM pracowało praktycznie całą dostępną wówczas flotą. W projekcie wykorzystywano trzy duże samochody dostawcze o łącznej kubaturze szacowanej na około 60–65 m³.',
          'W dwóch największych etapach relokacji, wraz z dodatkowymi kursami realizowanymi pomiędzy nimi, wykonano niemal 50 przejazdów pełnych samochodów. W zależności od rodzaju mienia pojazdy wypełniano do granicy dopuszczalnej ładowności albo do pełnego wykorzystania kubatury.',
          'Odległości w centrum Kielc nie były duże. Wyzwaniem była liczba operacji, odpowiednia kolejność i stałe utrzymanie przepływu pomiędzy punktami odbioru a odnowioną siedzibą.',
        ],
      },
      {
        heading: 'Praca w nowoczesnym, świeżo odnowionym obiekcie',
        paragraphs: [
          'Po remoncie teatr dysponował nową infrastrukturą, w tym windami towarowo-osobowymi, ruchomą sceną, zapadniami i zaawansowanym zapleczem technicznym. Wprowadzanie mienia do takiego obiektu wymagało nie tylko tempa, ale również kontroli drogi transportu i szacunku do nowo wykończonych przestrzeni.',
          'Typowy intensywny dzień pracy przy projekcie trwał około dziewięciu lub dziesięciu godzin. Wszystkie trzy samochody pozostawały w ciągłym użyciu, a harmonogram uzgadniano z osobami oddelegowanymi przez teatr do koordynowania relokacji.',
          'Sprawna współpraca z administracją instytucji miała bezpośredni wpływ na realizację. Przy takiej liczbie działów i lokalizacji decyzje musiały być podejmowane szybko, ale bez utraty kontroli nad całością.',
        ],
      },
      {
        heading: 'Rezultat: rozproszone zasoby wróciły do jednego teatru',
        paragraphs: [
          'WHM zebrało mienie teatru z wielu miejsc i wprowadziło je do odnowionej siedziby. Projekt fizycznie połączył rozproszone przez lata zasoby instytucji i stał się jednym z elementów przygotowania teatru do ponownego działania w historycznym budynku.',
          'Była to jedna z największych realizacji WHM. Jej skala nie wynikała z pojedynczego ciężkiego przedmiotu, lecz z połączenia niemal pięćdziesięciu pełnych transportów, różnorodnych kategorii wyposażenia, kilku lokalizacji początkowych i jednego precyzyjnie organizowanego miejsca docelowego.',
        ],
      },
    ],
    conclusionHeading: 'Co ta realizacja pokazuje?',
    conclusionText: 'Skala relokacji nie zawsze wynika z jednego ciężkiego przedmiotu. Czasem polega na połączeniu dziesiątek transportów, kilku lokalizacji początkowych i różnorodnych kategorii mienia w jednym precyzyjnie organizowanym miejscu docelowym.',
    gallery: [
      { src: '/images/realizacje/teatr-zeromskiego/relokacja-teatru-2.webp', alt: 'Transport wyposażenia instytucji kultury przez WHM', caption: 'Transport wyposażenia instytucji kultury' },
      { src: '/images/institution-moving/przeprowadzki-instytucji-3.webp', alt: 'Zabezpieczone elementy scenografii i wyposażenia', caption: 'Różne kategorie mienia wymagały różnych metod zabezpieczenia' },
      { src: '/images/transport-pianin-i-fortepianow/transport-pianin-i-fortepianow-kielce-3.webp', alt: 'Zabezpieczony fortepian podczas transportu WHM', caption: 'Dwa fortepiany wśród przewożonego mienia' },
    ],
    relatedServices: [
      { label: 'Przeprowadzki firm i instytucji', href: '/przeprowadzki-firm-i-instytucji/', text: 'Pełny proces relokacji instytucji i obiektów kultury.' },
      { label: 'Dla firm', href: '/dla-firm/', text: 'Planowanie i realizacja relokacji dla firm i instytucji.' },
      { label: 'Transport pianin i fortepianów', href: '/transport-pianin-i-fortepianow-kielce/', text: 'Transport instrumentów po ocenie instrumentu i drogi.' },
    ],
    relatedRealizacje: [
      { label: 'Relokacja Prokuratur Kielce-Wschód i Zachód', href: '/realizacje/relokacja-prokuratur-kielce/' },
      { label: 'Transport fortepianów w Zamku Szydłowieckich', href: '/realizacje/transport-fortepianow-zamek-szydlowieckich/' },
      { label: 'Nocny transport fortepianu Fazioli', href: '/realizacje/transport-fortepianu-fazioli/' },
    ],
    salesHeading: 'Wiele lokalizacji, wiele działów, jeden plan relokacji',
    salesText: 'WHM może zaplanować projekt, w którym mienie trzeba zebrać z kilku punktów, podzielić na strumienie i rozmieścić w jednej lokalizacji docelowej. Bezpłatne oględziny pozwalają ocenić dostęp, kubaturę, niezbędny sprzęt i kolejność etapów.',
  },
  {
    slug: '/realizacje/relokacja-tvp3-kielce/',
    title: 'Relokacja TVP3 Kielce i archiwum | WHM',
    description: 'Relokacja TVP3 Kielce: niemal 8000 pozycji archiwum odtworzonych co do półki, wyposażenie studia i demontaż realizatorni z podłogą techniczną.',
    eyebrow: 'Archiwum i infrastruktura techniczna',
    heading: 'Relokacja TVP3 Kielce — dwadzieścia lat materiałów odtworzone co do półki',
    lead: 'Przeprowadzka kieleckiego oddziału TVP3 obejmowała niemal osiem tysięcy pozycji archiwum, wyposażenie studia oraz demontaż realizatorni z podłogą techniczną. Każdy etap wymagał rozróżnienia tego, co należało zachować, przewieźć albo usunąć bez naruszenia czynnych instalacji.',
    heroImage: '/images/realizacje/tvp3-kielce/relokacja-tvp-kielce.webp',
    heroAlt: 'Relokacja wyposażenia i archiwum TVP3 Kielce przez WHM',
    category: 'Archiwa i księgozbiory',
    facts: [
      'niemal 8000 pozycji archiwum',
      'ponad 20 lat materiałów informacyjnych',
      'układ chronologiczny i alfabetyczny',
      'wykorzystanie praktycznie całego dostępnego zapasu pojemników',
      'odtworzenie archiwum z dokładnością do półki',
      'likwidacja starego studia',
      'zabezpieczenie szklanych stołów do transportu zewnętrznego',
      'podłoga techniczna podniesiona o około 30–40 cm',
      'około 12 km przewodów',
      'praca w sąsiedztwie czynnych instalacji',
    ],
    sections: [
      {
        heading: 'Archiwum, którego nie można było po prostu spakować',
        paragraphs: [
          'Największym wyzwaniem relokacji TVP3 Kielce nie była sama liczba przedmiotów. Była nim struktura archiwum obejmującego niemal osiem tysięcy pozycji.',
          'Znaczną część stanowiły chronologicznie uporządkowane materiały z codziennych wydań wiadomości — ponad dwadzieścia lat historii działalności oddziału. Drugą część tworzyły programy produkowane przez kielecką filię, uporządkowane alfabetycznie.',
          'Pomieszanie tych dwóch systemów oznaczałoby, że po przeprowadzce klient otrzymałby zbiór tysięcy materiałów wymagających ponownego katalogowania. Dlatego celem WHM nie był wyłącznie transport archiwum. Należało odtworzyć jego logikę w nowej siedzibie.',
        ],
      },
      {
        heading: 'Pojemniki opisane datami i literami',
        paragraphs: [
          'Do pakowania wykorzystano praktycznie cały dostępny wówczas zapas plastikowych pojemników WHM. Jednostki zawierające część chronologiczną oznaczano datami. Pojemniki z programami porządkowanymi alfabetycznie otrzymywały odpowiadające im oznaczenia literowe.',
          'System opisu został powiązany z kolejnością przenoszenia i rozładunku. Dzięki temu pojemnik nie był anonimową skrzynią, ale częścią większego układu, który miał zostać odtworzony w nowym miejscu.',
        ],
      },
      {
        heading: 'Planowanie z dokładnością do jednej półki',
        paragraphs: [
          'W nowej siedzibie część chronologiczna i alfabetyczna miały zostać ułożone na regałach w ramach jednej przestrzeni. Zespół musiał wcześniej obliczyć, w którym miejscu zakończy się pierwszy zbiór, aby kolejny rozpoczął się dokładnie tam, gdzie przewidywał plan.',
          'Obliczenia sprawdziły się z dokładnością do półki. To szczegół, który dobrze pokazuje różnicę pomiędzy przewiezieniem pudeł a relokacją uporządkowanego zasobu. Sukces projektu zależał od tego, czy po zakończeniu prac archiwum będzie gotowe do dalszego użytkowania.',
        ],
      },
      {
        heading: 'Likwidacja studia i przygotowanie wyposażenia do dalszego transportu',
        paragraphs: [
          'Drugą częścią projektu była likwidacja starego studia znanego widzom lokalnych programów i wiadomości. Elementy przeznaczone do usunięcia trafiały między innymi do kontenerów wielkogabarytowych zamówionych przez klienta.',
          'Nie wszystko miało jednak zostać zutylizowane. Duże szklane stoły ze studia należało zachować. WHM przygotowało je, zniosło, zabezpieczyło i przekazało do dalszego transportu do Olsztyna. Sam przejazd do Olsztyna wykonywał zewnętrzny przewoźnik klienta — rola WHM kończyła się na bezpiecznym przygotowaniu wyposażenia.',
        ],
      },
      {
        heading: 'Realizatornia, podłoga techniczna i około 12 kilometrów przewodów',
        paragraphs: [
          'Przy studiu znajdowała się realizatornia z podniesioną podłogą techniczną, położoną około 30–40 cm nad właściwym poziomem. Pomieszczenie miało zostać opróżnione wraz z demontażem podłogi aż do stanu określanego jako „gołe ściany”.',
          'Pod podłogą znajdowało się około 12 kilometrów przewodów: zasilających, teletechnicznych, światłowodów i innych instalacji. Większość była odłączona, ale część wiązek została oznaczona jako czynne. Tych elementów zespół nie mógł usunąć ani uszkodzić.',
          'Praca wymagała więc ciągłej weryfikacji. Nie wystarczyło demontować kolejnych fragmentów. Trzeba było rozpoznawać oznaczenia i oddzielać infrastrukturę przeznaczoną do likwidacji od instalacji, które nadal pracowały.',
        ],
      },
      {
        heading: 'Rezultat: uporządkowane archiwum i kontrolowane zamknięcie starej przestrzeni',
        paragraphs: [
          'Archiwum zostało przeniesione i odtworzone w nowej siedzibie zgodnie z dwoma systemami porządkowania. Zachowane elementy studia przygotowano do dalszego przewozu, pozostałe skierowano do usunięcia, a realizatornię zdemontowano bez naruszenia czynnych wiązek.',
          'Projekt połączył relokację dokumentacji, pakowanie systemowe, planowanie przestrzeni, zabezpieczenie delikatnego wyposażenia oraz demontaż infrastruktury technicznej. Każda z tych części wymagała innego sposobu pracy, ale wszystkie musiały zostać skoordynowane w ramach jednej realizacji.',
        ],
      },
    ],
    conclusionHeading: 'Co ta realizacja pokazuje?',
    conclusionText: 'Archiwum po przeprowadzce nadal musi być archiwum. Sukces nie polega na przewiezieniu pudeł, lecz na odtworzeniu uporządkowanego zasobu gotowego do dalszej pracy.',
    gallery: [
      { src: '/images/realizacje/tvp3-kielce/relokacja-tvp-kielce.webp', alt: 'Relokacja wyposażenia TVP3 Kielce przez WHM', caption: 'Pojemniki opisane datami i literami' },
      { src: '/images/office-moving/przeprowadzki-biura-3.webp', alt: 'Zabezpieczone wyposażenie techniczne studia', caption: 'Likwidacja studia i zabezpieczenie stołów' },
      { src: '/images/moving-boxes/kartony-do-przeprowadzki-1.webp', alt: 'Plastikowe pojemniki transportowe WHM', caption: 'Prawie cały zapas pojemników w użyciu' },
    ],
    relatedServices: [
      { label: 'Przeprowadzki firm i instytucji', href: '/przeprowadzki-firm-i-instytucji/', text: 'Relokacje archiwów, biur i instytucji z zachowaniem porządku.' },
      { label: 'Dla firm', href: '/dla-firm/', text: 'Planowanie i realizacja relokacji dla firm i instytucji.' },
      { label: 'Transport specjalistyczny', href: '/transport-specjalistyczny/', text: 'Demontaż i transport infrastruktury technicznej.' },
    ],
    relatedRealizacje: [
      { label: 'Relokacja Prokuratur Kielce-Wschód i Zachód', href: '/realizacje/relokacja-prokuratur-kielce/' },
      { label: 'Relokacja biblioteki w Busku-Zdroju', href: '/realizacje/relokacja-biblioteki-busko-zdroj/' },
      { label: 'Relokacje techniczne i ciężkie ładunki', href: '/realizacje/relokacje-techniczne-i-ciezkie-ladunki/' },
    ],
    salesHeading: 'Archiwum po przeprowadzce nadal musi być archiwum',
    salesText: 'WHM udostępnia firmom i instytucjom plombowane pojemniki transportowe, przygotowuje system oznaczeń i planuje kolejność rozładunku. Dzięki temu przeprowadzka nie kończy się stosem nieopisanych kartonów, lecz uporządkowanym zasobem gotowym do dalszej pracy.',
  },
  {
    slug: '/realizacje/relokacja-biblioteki-busko-zdroj/',
    title: 'Relokacja biblioteki w Busku-Zdroju | WHM',
    description: 'WHM przeniosło około 40 000 pozycji bibliotecznych pomiędzy dwiema lokalizacjami w Busku-Zdroju, zachowując kolejność księgozbioru w niespełna pięć dni.',
    eyebrow: 'Relokacja księgozbioru',
    heading: 'Około 40 000 pozycji przeniesionych w obrębie Buska-Zdroju',
    lead: 'Dwie lokalizacje znajdowały się w tym samym mieście, ale krótka trasa nie zmniejszała skali zadania. W niespełna pięć dni należało przenieść księgozbiór, czasopisma, ponad trzymetrowe regały i całe wyposażenie filii, zachowując kolejność potrzebną do planowanego skontrum.',
    heroImage: '/images/realizacje/biblioteka-busko/biblioteka-busko-2.webp',
    heroAlt: 'Relokacja księgozbioru biblioteki w Busku-Zdroju',
    category: 'Archiwa i księgozbiory',
    facts: [
      'dwie lokalizacje w obrębie Buska-Zdroju',
      'około 40 000 pozycji spisowych',
      'książki, czasopisma i pełne wyposażenie placówki',
      'ponad 3-metrowe regały metalowe',
      'niespełna pięć dni na realizację',
      'prawie 300 pojemników pracujących rotacyjnie',
      'dwa samochody kursujące na bieżąco',
      'adaptacja regałów do nowej przestrzeni',
      'zachowanie kolejności przed planowanym skontrum',
      'zakończenie przed zakładanym terminem',
    ],
    sections: [
      {
        heading: 'Lokalna trasa, instytucjonalna skala',
        paragraphs: [
          'Relokacja filii Pedagogicznej Biblioteki Wojewódzkiej odbywała się pomiędzy dwiema lokalizacjami w Busku-Zdroju. Sam przejazd był krótki. Największe wyzwanie stanowiła liczba materiałów oraz konieczność zachowania ich układu.',
          'Biblioteka obejmowała około 40 tysięcy pozycji spisowych, przede wszystkim książek. Do tego dochodziły czasopisma, ponad trzymetrowe regały metalowe, szafy, komputery, biurka oraz pozostałe wyposażenie placówki.',
          'W praktyce relokowano niemal całą zawartość biblioteki. Każdy błąd w kolejności książek mógł ujawnić się dopiero po rozpakowaniu, kiedy cofnięcie pomyłki wymagałoby ponownego przenoszenia wielu metrów księgozbioru.',
        ],
      },
      {
        heading: 'Kilka tygodni planowania i niespełna pięć dni na wykonanie',
        paragraphs: [
          'Pierwotny plan przeprowadzki był przygotowywany kilka tygodni wcześniej. Późniejsze zmiany decyzji organizacyjnych i inne okoliczności po stronie projektu wymusiły jednak znaczące skrócenie harmonogramu.',
          'Finalnie relokację trzeba było przeprowadzić w niespełna pięć dni. Presja czasu nie mogła oznaczać rezygnacji z porządku. Bez zachowania systemu biblioteka mogłaby zostać fizycznie przeniesiona, ale nie byłaby gotowa do dalszej pracy.',
        ],
      },
      {
        heading: 'Prawie 300 pojemników w ciągłej rotacji',
        paragraphs: [
          'WHM dostarczyło wcześniej prawie 300 plastikowych pojemników — niemal cały ówczesny zapas firmy. Jednoczesne spakowanie około 40 tysięcy pozycji wymagałoby jednak tysięcy pojemników.',
          'Zamiast czekać na spakowanie całości, zastosowano rotacyjny model pracy. Dwa samochody kursowały każdego dnia zgodnie z tempem pakowania i rozkładania księgozbioru. Po opróżnieniu pojemniki wracały do lokalizacji początkowej i ponownie trafiały do obiegu.',
          'Takie rozwiązanie pozwoliło wykorzystać dostępne zasoby wielokrotnie w ramach jednego projektu. Wymagało jednak zsynchronizowania pakowania, transportu, rozładunku i powrotu pustych pojemników, aby żadna część procesu nie czekała na pozostałe.',
        ],
      },
      {
        heading: 'Regały trzeba było dostosować do nowej przestrzeni',
        paragraphs: [
          'Ponad trzymetrowych regałów metalowych nie można było po prostu rozstawić w identycznym układzie. Nowe pomieszczenie miało inne wymiary, a część regałów należało przyciąć i dostosować.',
          'Miejsce docelowe znajdowało się jeszcze na końcowym etapie odświeżania lub remontu. Relokacja odbywała się więc równolegle z przygotowywaniem przestrzeni. Kolejność montażu regałów i dostarczania książek musiała uwzględniać realny stan pomieszczeń.',
        ],
      },
      {
        heading: 'Kolejność była warunkiem planowanego skontrum',
        paragraphs: [
          'Bezpośrednio po przeprowadzce planowano skontrum, czyli porównanie faktycznego stanu inwentarza z dokumentacją biblioteki. Zachowanie kolejności nie było więc wyłącznie kwestią wygody. Miało bezpośredni wpływ na możliwość przeprowadzenia kontroli księgozbioru.',
          'Zespół musiał pilnować układu regałów, partii pojemników i kolejności rozładunku. Każdy etap powinien wspierać następny zamiast tworzyć dodatkową pracę po zakończeniu transportu.',
        ],
      },
      {
        heading: 'Rezultat: realizacja zakończona przed zakładanym terminem',
        paragraphs: [
          'Pomimo skróconego harmonogramu, równoległych prac w miejscu docelowym, konieczności adaptacji regałów i ogromnej liczby pozycji WHM zakończyło realizację przed terminem zakładanym przez zleceniodawcę.',
          'Najważniejszym wynikiem było jednak zachowanie porządku księgozbioru. Biblioteka została przeniesiona jako uporządkowany system, a nie zbiór przypadkowo rozładowanych książek.',
        ],
      },
    ],
    conclusionHeading: 'Co ta realizacja pokazuje?',
    conclusionText: 'Duży księgozbiór wymaga systemu, nie tysięcy jednorazowych kartonów. Rotacyjny model pracy z pojemnikami wielokrotnego użytku pozwala prowadzić pakowanie równolegle z transportem i odtwarzaniem układu.',
    gallery: [
      { src: '/images/realizacje/biblioteka-busko/biblioteka-busko-1.webp', alt: 'Pojemniki transportowe WHM podczas relokacji biblioteki', caption: 'Prawie 300 pojemników w ciągłej rotacji' },
      { src: '/images/moving-boxes/kartony-do-przeprowadzki-2.webp', alt: 'Pakowanie książek do pojemników transportowych', caption: 'Księgozbiór pakowany z zachowaniem kolejności' },
      { src: '/images/packing-services/pakowanie-przeprowadzki-kielce-2.webp', alt: 'Zabezpieczone regały i wyposażenie biblioteki', caption: 'Ponad trzymetrowe regały dostosowane do nowej przestrzeni' },
    ],
    relatedServices: [
      { label: 'Przeprowadzki firm i instytucji', href: '/przeprowadzki-firm-i-instytucji/', text: 'Relokacje bibliotek, archiwów i instytucji z zachowaniem porządku.' },
      { label: 'Dla firm', href: '/dla-firm/', text: 'Planowanie i realizacja relokacji dla instytucji.' },
      { label: 'Pakowanie i zabezpieczanie', href: '/pakowanie-i-zabezpieczanie/', text: 'Pojemniki wielokrotnego użytku i system oznaczeń.' },
    ],
    relatedRealizacje: [
      { label: 'Relokacja TVP3 Kielce', href: '/realizacje/relokacja-tvp3-kielce/' },
      { label: 'Relokacja Prokuratur Kielce-Wschód i Zachód', href: '/realizacje/relokacja-prokuratur-kielce/' },
      { label: 'Relokacja Teatru im. Stefana Żeromskiego', href: '/realizacje/relokacja-teatru-zeromskiego-kielce/' },
    ],
    salesHeading: 'Duży księgozbiór wymaga systemu, nie tysięcy jednorazowych kartonów',
    salesText: 'W relokacjach lokalnych WHM może udostępnić pojemniki wielokrotnego użytku i zaplanować ich rotację. Rozwiązanie ogranicza ilość odpadów, ułatwia oznaczanie i pozwala prowadzić pakowanie równolegle z transportem oraz odtwarzaniem układu w nowym miejscu.',
  },
  {
    slug: '/realizacje/transport-zabytkowego-obrazu-zamek-szydlowieckich/',
    title: 'Transport obrazu z Zamku Szydłowieckich | WHM',
    description: 'Transport około 4,3-metrowego zabytkowego obrazu, którego nie wolno było pionować: demontaż okna, podnośnik i indywidualnie przygotowana trasa.',
    eyebrow: 'Transport dzieła sztuki',
    heading: 'Obraz, którego nie wolno było ustawić pionowo nawet na chwilę',
    lead: 'Kilkusetletnie dzieło miało około 4,3 m długości i znajdowało się na drugim piętrze Zamku Szydłowieckich. Standardowa droga przez klatkę schodową odpadała. WHM przygotowało operację obejmującą podnośnik koszowy, stałe utrzymanie konstrukcji w poziomie, częściowy demontaż zabezpieczeń oraz wprowadzenie obrazu do muzeum przez okno.',
    heroImage: '/images/realizacje/zamek-szydlowieckich/zamek-szydlowieckich-1.webp',
    heroAlt: 'Transport zabytkowego obrazu z Zamku Szydłowieckich',
    category: 'Kultura i dzieła sztuki',
    facts: [
      'kilkusetletni obraz',
      'konstrukcja długości około 4,3 m',
      'tuba o średnicy około 60 cm',
      'zabezpieczenia o średnicy około 80 cm',
      'drugie piętro Zamku Szydłowieckich',
      'bezwzględny zakaz pionowania',
      'wykorzystanie podnośnika koszowego i pasów',
      'około 400 m przejazdu',
      'częściowy demontaż zabezpieczeń',
      'demontaż okna i przęsła ogrodzenia',
      'wprowadzenie dzieła do piwnicy Muzeum Instrumentów Ludowych',
    ],
    sections: [
      {
        heading: 'Najważniejsza zasada: konstrukcja przez cały czas musi pozostać poziomo',
        paragraphs: [
          'WHM realizowało prace w Zamku Szydłowieckich w Szydłowcu co najmniej dwukrotnie. Podczas jednej z wizyt zadaniem zespołu było przemieszczenie kilkusetletniego obrazu znajdującego się na drugim piętrze zamku.',
          'Obraz był nawinięty na tekturową tubę o średnicy około 60 cm. Cała konstrukcja miała około 4,3 m długości. Zabezpieczenia obejmowały wykonane ze sklejki kręgi o średnicy około 80 cm.',
          'Problemem nie była wyłącznie długość. Obrazu nie wolno było pionować. Zmiana położenia mogła spowodować zsunięcie dzieła z tuby i jego uszkodzenie. W przypadku kilkusetletniego obiektu konsekwencją mogła być skomplikowana i kosztowna renowacja.',
          'To ograniczenie wykluczało standardowe zniesienie konstrukcji po schodach. Trasa musiała zostać zaprojektowana wokół dzieła, a nie odwrotnie.',
        ],
      },
      {
        heading: 'Drugie piętro, podnośnik koszowy i kontrolowane opuszczanie',
        paragraphs: [
          'WHM dobrało zespół, podnośnik koszowy oraz pasy transportowe o odpowiedniej długości. Każdy etap operacji miał zapewniać stabilność konstrukcji i utrzymanie jej w pozycji poziomej.',
          'Obraz został wyprowadzony z drugiego piętra na zewnątrz i kontrolowanie opuszczony na poziom gruntu. Zespół musiał jednocześnie prowadzić oba końce ponad czterometrowego ładunku, kontrolować pracę pasów oraz reagować na każdy ruch konstrukcji.',
          'W tej realizacji sprzęt nie zastępował doświadczenia ludzi. Podnośnik umożliwił pokonanie wysokości, ale bezpieczeństwo obrazu zależało od przygotowania punktów podparcia, tempa opuszczania oraz komunikacji zespołu.',
        ],
      },
      {
        heading: 'Tylko 400 metrów transportu i kilka kolejnych przeszkód',
        paragraphs: [
          'Po opuszczeniu obraz został bezpiecznie załadowany do samochodu WHM. Miejsce docelowe — Muzeum Instrumentów Ludowych — znajdowało się w odległości około 400 metrów.',
          'Krótki przejazd nie oznaczał jednak prostego zakończenia realizacji. Kręgi ze sklejki miały większą średnicę niż sama tuba, dlatego w miejscu docelowym część zabezpieczeń należało zdemontować.',
          'Następnie zdemontowano okno prowadzące do piwnicy muzeum. Na trasie trzeba było również usunąć jedno przęsło ogrodzenia. Dopiero po przygotowaniu całej drogi możliwe było delikatne wprowadzenie obrazu przez otwór okienny bez zmiany jego położenia.',
        ],
      },
      {
        heading: 'Plan obejmował nie jeden trudny moment, lecz cały łańcuch ograniczeń',
        paragraphs: [
          'Realizacja nie kończyła się na efektownym opuszczeniu obrazu z zamku. Każdy następny etap mógł zagrozić dziełu dokładnie w ten sam sposób: załadunek, krótki przejazd, demontaż zabezpieczeń, przeprowadzenie przez ogrodzenie i wprowadzenie do piwnicy.',
          'Dlatego plan musiał obejmować całą drogę od miejsca początkowego do finalnego ustawienia. Gdyby zespół rozwiązał tylko problem drugiego piętra, ale nie sprawdził średnicy zabezpieczeń albo wymiarów okna w muzeum, operacja zatrzymałaby się z cennym ładunkiem poza miejscem docelowym.',
        ],
      },
      {
        heading: 'Rezultat: dzieło trafiło do muzeum bez naruszenia wymaganej pozycji',
        paragraphs: [
          'Obraz został opuszczony z drugiego piętra, przewieziony do Muzeum Instrumentów Ludowych i wprowadzony do piwnicy przez przygotowany otwór okienny. Przez cały proces utrzymywano go w pozycji poziomej.',
          'To realizacja, która najlepiej pokazuje sposób myślenia WHM przy nietypowym transporcie: najpierw rozpoznać warunek, którego nie wolno złamać, następnie zaplanować wokół niego sprzęt, ludzi i drogę, a dopiero później rozpocząć przenoszenie.',
        ],
      },
    ],
    conclusionHeading: 'Co ta realizacja pokazuje?',
    conclusionText: 'Gdy standardowa droga nie istnieje, trzeba zaplanować nową. Najpierw rozpoznać warunek, którego nie wolno złamać, następnie zaplanować wokół niego sprzęt, ludzi i drogę, a dopiero później rozpocząć przenoszenie.',
    gallery: [
      { src: '/images/transport-gabarytow/transport-gabarytow-kielce-6.webp', alt: 'Transport specjalistyczny realizowany przez zespół WHM', caption: 'Podnośnik koszowy i kontrolowane opuszczanie' },
      { src: '/images/transport-gabarytow/transport-gabarytow-kielce-5.webp', alt: 'Zabezpieczony gabaryt podczas transportu WHM', caption: 'Konstrukcja długości około 4,3 m w pozycji poziomej' },
      { src: '/images/transport-gabarytow/transport-gabarytow-kielce-4.webp', alt: 'Przygotowanie drogi transportu przez zespół WHM', caption: 'Demontaż okna i przęsła ogrodzenia' },
    ],
    relatedServices: [
      { label: 'Transport specjalistyczny', href: '/transport-specjalistyczny/', text: 'Dla dzieł sztuki, urządzeń i gabarytów wymagających osobnej oceny.' },
      { label: 'Dla firm', href: '/dla-firm/', text: 'Planowanie i realizacja transportu w obiektach instytucjonalnych.' },
      { label: 'Przeprowadzki firm i instytucji', href: '/przeprowadzki-firm-i-instytucji/', text: 'Relokacje instytucji kultury i obiektów historycznych.' },
    ],
    relatedRealizacje: [
      { label: 'Transport fortepianów w Zamku Szydłowieckich', href: '/realizacje/transport-fortepianow-zamek-szydlowieckich/' },
      { label: 'Relokacja Teatru im. Stefana Żeromskiego', href: '/realizacje/relokacja-teatru-zeromskiego-kielce/' },
      { label: 'Relokacje techniczne i ciężkie ładunki', href: '/realizacje/relokacje-techniczne-i-ciezkie-ladunki/' },
    ],
    salesHeading: 'Gdy standardowa droga nie istnieje, trzeba zaprojektować nową',
    salesText: 'Przed transportem dzieła sztuki, urządzenia lub dużego gabarytu WHM może ocenić całą drogę, punkty podparcia, ograniczenia pozycji oraz potrzebny sprzęt. W większych projektach wykonujemy bezpłatne oględziny.',
  },
  {
    slug: '/realizacje/transport-fortepianow-zamek-szydlowieckich/',
    title: 'Transport fortepianów — Zamek Szydłowieckich | WHM',
    description: 'Dwa fortepiany i ciasna winda wymagająca niestandardowej pozycji instrumentu. Zobacz realizację WHM przeprowadzoną w Zamku Szydłowieckich.',
    eyebrow: 'Instrumenty w obiekcie historycznym',
    heading: 'Dwa fortepiany i winda, która wymusiła niestandardowe rozwiązanie',
    lead: 'Podczas wcześniejszej realizacji w Zamku Szydłowieckich WHM relokowało dwa fortepiany. Jeden należało przenieść do sąsiedniego pomieszczenia, drugi do pobliskiego Muzeum Instrumentów Ludowych. Największym ograniczeniem okazała się ciasna winda.',
    heroImage: '/images/realizacje/zamek-szydlowieckich/zamek-szydlowieckich-2.webp',
    heroAlt: 'Transport fortepianów w Zamku Szydłowieckich przez WHM',
    category: 'Pianina i fortepiany',
    facts: [
      'dwa fortepiany',
      'jeden przenoszony do sąsiedniego pomieszczenia',
      'drugi transportowany do Muzeum Instrumentów Ludowych',
      'ciasna winda',
      'masa jednego eksponatu około 250 kg lub nieco więcej',
      'niestandardowa, niestabilna pozycja na stronie klawiatury',
      'instrument był eksponatem oczekującym na renowację',
      'metody nie należy przedstawiać jako standardu dla użytkowanych instrumentów',
    ],
    sections: [
      {
        heading: 'Dwie krótkie trasy, dwa różne zadania',
        paragraphs: [
          'Transport instrumentu nie zawsze oznacza przejazd na drugi koniec kraju. Czasem najtrudniejszy odcinek ma kilka metrów i prowadzi przez windę, korytarz albo drzwi, których wymiarów nie da się zmienić.',
          'W Zamku Szydłowieckich jeden fortepian miał zostać przestawiony do sąsiedniego pomieszczenia. Drugi należało przygotować do przewozu do znajdującego się nieopodal Muzeum Instrumentów Ludowych.',
          'W obu przypadkach zespół pracował w historycznym obiekcie, w którym dostępna przestrzeń i istniejąca infrastruktura wyznaczały realne możliwości transportu.',
        ],
      },
      {
        heading: 'Standardowa pozycja nie mieściła się w windzie',
        paragraphs: [
          'Fortepiany zazwyczaj przygotowuje się do transportu w określonej pozycji na boku. W tym przypadku ciasna winda uniemożliwiała zastosowanie typowej metody.',
          'Ograniczenia przestrzenne wymusiły oparcie jednego z instrumentów na stronie klawiatury. Była to bardzo niestabilna pozycja dla eksponatu ważącego około 250 kg lub nieco więcej.',
          'Taka decyzja nie może zostać potraktowana jako uniwersalny sposób transportu fortepianu. Przewożony instrument był eksponatem oczekującym na renowację, a nie fortepianem wykorzystywanym na bieżąco do gry lub koncertów. W przypadku normalnie użytkowanego instrumentu podobne ustawienie mogłoby zaszkodzić wewnętrznym mechanizmom.',
        ],
      },
      {
        heading: 'Dostosowanie metody nie oznacza ignorowania ryzyka',
        paragraphs: [
          'Nietypowa pozycja została zastosowana dlatego, że odpowiadała jednocześnie warunkom architektonicznym oraz stanowi i przeznaczeniu konkretnego eksponatu. Zespół musiał kontrolować stabilność instrumentu i prowadzić go przez ograniczoną przestrzeń bez możliwości wykorzystania standardowego ułożenia.',
          'Ta realizacja pokazuje, dlaczego transport instrumentów powinien zaczynać się od oceny. Ten sam sposób, który jest dopuszczalny dla eksponatu oczekującego na renowację, nie musi być bezpieczny dla instrumentu koncertowego.',
        ],
      },
      {
        heading: 'Rezultat i właściwy wniosek',
        paragraphs: [
          'Oba fortepiany zostały przeniesione zgodnie z zakresem: jeden w obrębie zamku, drugi do Muzeum Instrumentów Ludowych.',
          'Najważniejszym wnioskiem nie jest to, że każdy fortepian można ustawić w dowolnej pozycji. Jest nim konieczność uwzględnienia masy, stabilności, stanu instrumentu, konstrukcji budynku i wymiarów drogi. Dopiero ich połączenie pozwala wybrać metodę, która jest możliwa i uzasadniona w konkretnym przypadku.',
        ],
      },
    ],
    conclusionHeading: 'Co ta realizacja pokazuje?',
    conclusionText: 'Każdy instrument i każdą drogę oceniamy osobno. Ten sam sposób, który jest dopuszczalny dla eksponatu oczekującego na renowację, nie musi być bezpieczny dla instrumentu koncertowego.',
    gallery: [
      { src: '/images/transport-pianin-i-fortepianow/transport-pianin-i-fortepianow-kielce-3.webp', alt: 'Zabezpieczony fortepian podczas transportu WHM', caption: 'Transport w obiekcie historycznym z ciasną windą' },
      { src: '/images/transport-pianin-i-fortepianow/transport-pianin-i-fortepianow-kielce-2.webp', alt: 'Przygotowanie fortepianu do transportu przez zespół WHM', caption: 'Niestandardowa pozycja wymuszona architekturą' },
      { src: '/images/transport-pianin-i-fortepianow/transport-pianin-i-fortepianow-kielce-4.webp', alt: 'Zabezpieczony instrument po transporcie', caption: 'Eksponat oczekujący na renowację' },
    ],
    relatedServices: [
      { label: 'Transport pianin i fortepianów', href: '/transport-pianin-i-fortepianow-kielce/', text: 'Transport instrumentów po ocenie instrumentu i drogi.' },
      { label: 'Transport specjalistyczny', href: '/transport-specjalistyczny/', text: 'Dla instrumentów i gabarytów wymagających osobnej oceny.' },
    ],
    relatedRealizacje: [
      { label: 'Transport zabytkowego obrazu z Zamku Szydłowieckich', href: '/realizacje/transport-zabytkowego-obrazu-zamek-szydlowieckich/' },
      { label: 'Nocny transport fortepianu Fazioli', href: '/realizacje/transport-fortepianu-fazioli/' },
      { label: 'Relokacja Teatru im. Stefana Żeromskiego', href: '/realizacje/relokacja-teatru-zeromskiego-kielce/' },
    ],
    salesHeading: 'Każdy instrument i każdą drogę oceniamy osobno',
    salesText: 'Przed transportem pianina lub fortepianu potrzebujemy informacji o instrumencie, piętrach, schodach, windzie, zakrętach i odległości od samochodu. Przy trudniejszych realizacjach oględziny pozwalają dobrać liczbę osób, sprzęt i właściwą pozycję transportową.',
  },
  {
    slug: '/realizacje/transport-fortepianu-fazioli/',
    title: 'Transport fortepianu Fazioli: Busko–Kielce | WHM',
    description: 'Nocny transport koncertowego fortepianu Fazioli z tężni w Busku-Zdroju do szkoły muzycznej w Kielcach, zakończony ustawieniem około godziny 2:00.',
    eyebrow: 'Instrument koncertowy',
    heading: 'Fazioli, koncert w tężni i transport zakończony około drugiej w nocy',
    lead: 'Gdy pierwotny przewoźnik nie mógł wykonać odbioru, WHM przejęło transport fortepianu koncertowego po wydarzeniu nagrywanym dla telewizji. Trzyosobowy zespół rozpoczął pracę dopiero po bisach, zabezpieczył instrument w nietypowej przestrzeni i nocą przewiózł go do szkoły muzycznej w Kielcach.',
    heroImage: '/images/realizacje/fortepian-fazioli/fortepian-fazioli.webp',
    heroAlt: 'Fortepian koncertowy Fazioli po transporcie nocnym',
    category: 'Pianina i fortepiany',
    facts: [
      'fortepian koncertowy marki Fazioli',
      'koncert w tężni solankowej w Busku-Zdroju',
      'wydarzenie nagrywane na potrzeby telewizji',
      'trzyosobowa ekipa WHM',
      'samochód z windą samozaładowczą',
      'rozpoczęcie pracy około 23:40–24:00',
      'podest o wysokości około 40 cm',
      'dedykowany pokrowiec, sanie i wózki transportowe',
      'nocny przejazd do Kielc',
      'przyjazd do szkoły muzycznej około 2:00',
      'około sześciu stopni do pokonania przy scenie',
      'ustawienie i pozostawienie zabezpieczonego instrumentu',
    ],
    sections: [
      {
        heading: 'Zlecenie przejęte po zmianie planu innego przewoźnika',
        paragraphs: [
          'Realizacja odbywała się latem. Współpracujący z WHM stroiciel fortepianów z Kielc planował początkowo transport z inną firmą. Jej kierowca został jednak skierowany do innego zadania, dlatego odbiór instrumentu przejęło WHM.',
          'Do Buska-Zdroju pojechała trzyosobowa ekipa samochodem wyposażonym w windę samozaładowczą. Fortepian marki Fazioli znajdował się wewnątrz tężni solankowej, gdzie odbywał się koncert nagrywany na potrzeby telewizji.',
        ],
      },
      {
        heading: 'Zespół był gotowy o 23:00. Publiczność poprosiła o bisy',
        paragraphs: [
          'Plan zakładał zakończenie wydarzenia około godziny 23:00. Ekipa WHM czekała już na zapleczu razem z zespołami odpowiedzialnymi za estradę, oświetlenie i realizację nagrania.',
          'Koncert przedłużył się, ponieważ publiczność domagała się bisów. Prace transportowe mogły rozpocząć się dopiero około 23:40–24:00, kiedy widzowie opuścili przestrzeń i samochód mógł wjechać do wnętrza tężni.',
          'W przypadku obsługi wydarzeń godzina rozpoczęcia transportu często zależy od przebiegu samego eventu. Zespół musi być gotowy, ale nie może rozpocząć demontażu wcześniej ani wywierać presji na organizatora.',
        ],
      },
      {
        heading: 'Fortepian stał na podświetlanym, przezroczystym podeście',
        paragraphs: [
          'Instrument znajdował się na efektownie oświetlonym podeście o wysokości około 40 cm. Najpierw założono dedykowany pokrowiec, przygotowano fortepian do transportu i przymocowano sanie transportowe.',
          'Następnie instrument zdjęto z podestu, ustawiono w pozycji transportowej, umieszczono na wózkach i przewieziono do samochodu. Po załadunku został ustabilizowany i zabezpieczony na czas nocnego przejazdu do Kielc.',
          'Każdy z tych etapów miał znaczenie. Pokrowiec chronił powierzchnię, sanie i wózki pozwalały kontrolować instrument podczas przenoszenia, a winda załadunkowa ograniczała ryzyko przy wprowadzaniu do przestrzeni ładunkowej.',
        ],
      },
      {
        heading: 'Około 2:00 w nocy pojawiło się ostatnie ograniczenie',
        paragraphs: [
          'Miejscem docelowym była szkoła muzyczna w Kielcach. Ochrona obiektu została wcześniej uprzedzona, że transport może przyjechać bardzo późno.',
          'WHM dotarło na miejsce około godziny 2:00 w nocy lub kilka minut wcześniej. Fortepian miał zostać ustawiony na scenie głównej auli. Budynek nie posiadał jednak odpowiedniego podestu ani rampy prowadzącej bezpośrednio na scenę.',
          'Do pokonania pozostało około sześciu stopni. Zespół wniósł instrument i ustawił go na scenie. Fortepian pozostał zabezpieczony, ponieważ w kolejnych dniach miał odebrać go pierwotnie planowany przewoźnik.',
        ],
      },
      {
        heading: 'Rezultat: przejęcie nagłego zadania bez obniżenia standardu',
        paragraphs: [
          'Realizacja połączyła szybką zmianę planu, oczekiwanie na zakończenie wydarzenia, pracę w nietypowej przestrzeni, nocny przejazd oraz ręczne pokonanie ostatnich stopni przy scenie.',
          'WHM nie dysponowało specjalistycznym pianoliftem opisywanym w późniejszej części materiału źródłowego — urządzenie należało do innego przewoźnika i nie może być przedstawiane jako zasób firmy. Atutem WHM w tej historii były dostępność, przygotowany zespół, odpowiednie zabezpieczenia, samochód z windą i zdolność bezpiecznego zakończenia pracy około drugiej w nocy.',
        ],
      },
    ],
    conclusionHeading: 'Co ta realizacja pokazuje?',
    conclusionText: 'Koncert się kończy. Odpowiedzialność za instrument nie kończy się. WHM obsługuje transporty pianin i fortepianów po wcześniejszej ocenie instrumentu oraz drogi, aby organizator wiedział, jak będzie wyglądał odbiór po wydarzeniu.',
    gallery: [
      { src: '/images/realizacje/fortepian-fazioli/fortepian-fazioli.webp', alt: 'Fortepian koncertowy Fazioli po transporcie nocnym', caption: 'Samochód z windą samozaładowczą' },
      { src: '/images/transport-pianin-i-fortepianow/transport-pianin-i-fortepianow-kielce-4.webp', alt: 'Zabezpieczony fortepian po transporcie nocnym', caption: 'Ustawienie na scenie około 2:00 w nocy' },
      { src: '/images/transport-pianin-i-fortepianow/transport-pianin-i-fortepianow-kielce-2.webp', alt: 'Przygotowanie instrumentu do transportu przez WHM', caption: 'Dedykowany pokrowiec, sanie i wózki transportowe' },
    ],
    relatedServices: [
      { label: 'Transport pianin i fortepianów', href: '/transport-pianin-i-fortepianow-kielce/', text: 'Transport instrumentów po ocenie instrumentu i drogi.' },
      { label: 'Transport specjalistyczny', href: '/transport-specjalistyczny/', text: 'Dla instrumentów koncertowych i gabarytów wymagających osobnej oceny.' },
    ],
    relatedRealizacje: [
      { label: 'Transport fortepianów w Zamku Szydłowieckich', href: '/realizacje/transport-fortepianow-zamek-szydlowieckich/' },
      { label: 'Transport zabytkowego obrazu z Zamku Szydłowieckich', href: '/realizacje/transport-zabytkowego-obrazu-zamek-szydlowieckich/' },
      { label: 'Realizacje WHM', href: '/realizacje/' },
    ],
    salesHeading: 'Koncert się kończy. Odpowiedzialność za instrument nie kończy się',
    salesText: 'WHM obsługuje transporty pianin i fortepianów po wcześniejszej ocenie instrumentu oraz drogi. Ustalamy piętra, schody, podesty, dostęp dla samochodu i godzinę pracy, aby organizator wiedział, jak będzie wyglądał odbiór po wydarzeniu.',
  },
  {
    slug: '/realizacje/relokacje-techniczne-i-ciezkie-ladunki/',
    title: 'Transport ciężkich urządzeń i serwerów | WHM Kielce',
    description: 'Realizacje WHM obejmujące piece 350–450 kg, szafy pancerne, serwery, zbiorniki azotu oraz sprzęt laboratoryjny wymagający specjalistycznego transportu.',
    eyebrow: 'Doświadczenie przekrojowe WHM',
    heading: 'Gdy przedmiot waży setki kilogramów, nie wystarczy wiedzieć, jak go podnieść',
    lead: 'WHM wielokrotnie transportowało szafy pancerne, piece na pellet, serwery, urządzenia laboratoryjne i inne ciężkie wyposażenie. Każdy taki projekt zaczyna się od masy i wymiarów, ale o powodzeniu decydują także środek ciężkości, droga, nośność podłoża, liczba osób, sposób asekuracji oraz precyzja ustawienia w miejscu docelowym.',
    heroImage: '/images/transport-gabarytow/transport-gabarytow-kielce-7.webp',
    heroAlt: 'Transport ciężkiego i nietypowego ładunku przez zespół WHM',
    category: 'Ciężkie i nietypowe ładunki',
    facts: [
      'powtarzalne transporty szaf pancernych i aktowych',
      'masy około 200 kg oraz 300–400 kg',
      'najcięższa wspomniana szafa około 880 kg według danych producenta',
      'piece na pellet o masie około 350–450 kg',
      'ponad dwumetrowe szafy serwerowe wprowadzane przez okno',
      'prace związane ze zbiornikami azotu w Centrum Onkologii na Czarnowie',
      'ciężki i wartościowy sprzęt laboratoryjny',
      'możliwość podnoszenia urządzeń na wysokość niemal 1,5 m',
      'rzeczywiste użycie schodołazu przy obciążeniach około 400 kg',
      'zespoły często liczące 4–5 osób przy dużych gabarytach',
      'przenoszenie do około 600 kg przez sześć osób korzystających z sześciu uprzęży',
      'doświadczenie z szafami na broń, serwerami i dużymi baliami ogrodowymi',
    ],
    sections: [
      {
        heading: 'Ciężar jest tylko jednym z parametrów',
        paragraphs: [
          'Przedmiot o masie 300 kg może być łatwiejszy do przemieszczenia niż znacznie lżejszy element o niestabilnym środku ciężkości. Wysoka szafa pancerna zachowuje się inaczej niż szeroki piec. Urządzenie laboratoryjne musi nie tylko dotrzeć do pomieszczenia, ale czasem również zostać ustawione na stojaku z bardzo małą tolerancją położenia.',
          'Dlatego WHM nie buduje planu wyłącznie wokół wartości podanej na tabliczce znamionowej. Pod uwagę trzeba wziąć wymiary, punkty podparcia, możliwość mocowania, szerokość drzwi, zakręty, schody, wysokość stropu, dostęp do windy i końcową pozycję urządzenia.',
        ],
      },
      {
        heading: 'Szafy pancerne od około 200 do około 880 kg',
        paragraphs: [
          'WHM wielokrotnie transportowało szafy pancerne i aktowe o masie około 200 kg oraz 300–400 kg. Najcięższa ze wspominanych szaf ważyła według danych producenta około 880 kg.',
          'Duża masa takich konstrukcji nie zawsze wynika z litej stali. Część szaf posiada ściany komorowe wypełnione gęstym betonem, co zwiększa ciężar i wpływa na rozkład masy.',
          'Przy wysokich szafach o korzystnym środku ciężkości elektryczny schodołaz WHM pracował wielokrotnie z obciążeniami około 350–400 kg. Firma nie traktuje jednak maksymalnego udźwigu urządzenia jako powodu do ograniczania zespołu. Przy dużych gabarytach do pracy kierowanych jest często czterech lub pięciu pracowników, którzy asekurują ładunek, kontrolują przechyły i chronią otoczenie.',
        ],
      },
      {
        heading: 'Piece na pellet o masie około 350–450 kg',
        paragraphs: [
          'WHM wielokrotnie wnosiło i wynosiło piece na pellet ważące około 350–450 kg, również do lub z piwnic. W takich warunkach masa łączy się z ograniczoną przestrzenią, schodami i brakiem możliwości swobodnego manewrowania.',
          'Elektryczny schodołaz pomaga przenosić obciążenie po stopniach, ale nadal wymaga właściwego ustawienia pieca, kontroli przechyłu i asekuracji przez zespół. Każda zmiana kierunku musi być zaplanowana wcześniej, ponieważ na podeście nie zawsze istnieje przestrzeń pozwalająca poprawić pozycję ciężkiego urządzenia.',
        ],
      },
      {
        heading: 'Serwery i ponad dwumetrowe szafy wprowadzane przez okno',
        paragraphs: [
          'Jedna z archiwalnych realizacji obejmowała ponad dwumetrowe szafy serwerowe, których nie można było wprowadzić przez żadne drzwi budynku. Rozwiązaniem stało się przygotowanie drogi przez okno.',
          'W podobnych projektach sama masa nie jest jedynym ryzykiem. Szafa jest wysoka, ma ograniczone możliwości przechylenia, a jej zawartość lub konstrukcja wymagają stabilnego prowadzenia. Zespół musi kontrolować pozycję na całej drodze i wcześniej sprawdzić, czy otwór oraz przestrzeń po drugiej stronie pozwolą bezpiecznie zakończyć operację.',
        ],
      },
      {
        heading: 'Zbiorniki azotu w Centrum Onkologii w Kielcach',
        paragraphs: [
          'Sprzęt WHM był wykorzystywany także przy pracach związanych ze zbiornikami azotu w Centrum Onkologii w Kielcach na Czarnowie. To przykład realizacji, w której ciężki element znajduje się w środowisku medycznym, a sposób pracy musi uwzględniać nie tylko transport, ale także otoczenie placówki.',
          'Realizacja potwierdza doświadczenie WHM w wykorzystywaniu schodołazu przy ciężkim wyposażeniu placówki medycznej.',
        ],
      },
      {
        heading: 'Sprzęt laboratoryjny ustawiany na docelowej wysokości',
        paragraphs: [
          'WHM transportowało również ciężki i wartościowy sprzęt laboratoryjny. Dodatkowe widły schodołazu pozwalają nie tylko przemieścić urządzenie, ale również podnieść je pionowo na wysokość niemal 1,5 m.',
          'Rozwiązanie było wykorzystywane przy ustawianiu maszyn laboratoryjnych na podwyższonych stojakach. W takich realizacjach sukces nie kończy się na wniesieniu sprzętu do pomieszczenia. Urządzenie trzeba ustawić na właściwej wysokości i w odpowiednim położeniu — według doświadczenia WHM nawet z dokładnością określaną jako milimetrowa.',
        ],
      },
      {
        heading: 'Sprzęt ma pomagać zespołowi, a nie zastępować ocenę ryzyka',
        paragraphs: [
          'Elektryczny schodołaz WHM ma deklarowany przez producenta udźwig przekraczający 500 kg. Firma nie testowała go do absolutnej granicy. W rzeczywistych realizacjach urządzenie pracowało z obciążeniami około 400 kg.',
          'Przy lżejszych gabarytach rzędu 150–200 kg technicznie możliwa może być praca jednego operatora, ale skład zespołu zawsze zależy od warunków. WHM przyjmuje zasadę, że przesadna pewność siebie przy ciężkich ładunkach tworzy niepotrzebne ryzyko.',
          'W innych realizacjach, przy wykorzystaniu sześciu uprzęży i pracy sześciu osób, zespół przenosił ładunek ważący do około 600 kg. Nie oznacza to uniwersalnej deklaracji udźwigu przy każdym zleceniu. Pokazuje jednak, że WHM potrafi łączyć sprzęt mechaniczny z właściwie dobranym zespołem i asekuracją ręczną.',
        ],
      },
      {
        heading: 'Rezultat przekrojowy: metoda dobierana do konkretnego ładunku',
        paragraphs: [
          'Doświadczenie WHM obejmuje także szafy na broń, duże balie ogrodowe, serwery oraz inne nietypowe gabaryty. Nie wszystkie te transporty są jedną realizacją i nie należy łączyć ich w fikcyjną historię jednego klienta.',
          'Razem pokazują jednak wspólny standard: oględziny lub dokładne rozpoznanie, sprawdzenie drogi, dobór sprzętu, przygotowanie punktów podparcia, asekuracja oraz kontrolowane ustawienie w miejscu docelowym.',
        ],
      },
    ],
    conclusionHeading: 'Co ta realizacja pokazuje?',
    conclusionText: 'Zanim podamy sposób i cenę, musimy poznać drogę. Metoda zawsze wynika z masy, wymiarów, środka ciężkości, drogi i nośności podłoża — nie z wartości na tabliczce znamionowej.',
    gallery: [
      { src: '/images/transport-gabarytow/transport-gabarytow-kielce-7.webp', alt: 'Transport ciężkiego ładunku przez zespół WHM', caption: 'Szafy pancerne, piece i serwery — metoda dobierana do ładunku' },
      { src: '/images/transport-sejfu/transport-sejfu-kielce-1.webp', alt: 'Transport sejfu i szafy pancernej przez WHM', caption: 'Szafy pancerne i sejfy od około 200 do około 880 kg' },
      { src: '/images/transport-pieca/transport-pieca-kielce-1.webp', alt: 'Transport pieca na pellet przez zespół WHM', caption: 'Piece na pellet o masie około 350–450 kg' },
    ],
    relatedServices: [
      { label: 'Transport specjalistyczny', href: '/transport-specjalistyczny/', text: 'Dla ciężkich i nietypowych przedmiotów wymagających osobnej oceny.' },
      { label: 'Dla firm', href: '/dla-firm/', text: 'Planowanie i realizacja relokacji technicznych dla firm.' },
      { label: 'Przeprowadzki firm i instytucji', href: '/przeprowadzki-firm-i-instytucji/', text: 'Relokacje wyposażenia technicznego w instytucjach i placówkach.' },
    ],
    relatedRealizacje: [
      { label: 'Transport zabytkowego obrazu z Zamku Szydłowieckich', href: '/realizacje/transport-zabytkowego-obrazu-zamek-szydlowieckich/' },
      { label: 'Relokacja TVP3 Kielce', href: '/realizacje/relokacja-tvp3-kielce/' },
      { label: 'Realizacje WHM', href: '/realizacje/' },
    ],
    salesHeading: 'Zanim podamy sposób i cenę, musimy poznać drogę',
    salesText: 'Prześlij wymiary, masę, zdjęcia przedmiotu, schodów, drzwi i miejsca docelowego. Przy trudniejszych projektach WHM wykona oględziny, aby dobrać sprzęt i zespół bez opierania realizacji na domysłach.',
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export const caseStudyCategories = [
  'Firmy i instytucje',
  'Archiwa i księgozbiory',
  'Kultura i dzieła sztuki',
  'Pianina i fortepiany',
  'Ciężkie i nietypowe ładunki',
];
