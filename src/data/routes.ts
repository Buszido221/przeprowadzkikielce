export type RouteCategory =
  | 'main'
  | 'service'
  | 'business'
  | 'ecosystem'
  | 'content'
  | 'contact'
  | 'legal';

export type RobotsDirective = 'index, follow' | 'noindex, follow';

export interface Route {
  name: string;
  slug: string;
  category: RouteCategory;
  robots: RobotsDirective;
  title: string;
  description: string;
}

export const publicRoutes: Route[] = [
  {
    name: 'Strona główna',
    slug: '/',
    category: 'main',
    robots: 'index, follow',
    title: 'Przeprowadzki Kielce | WHM Przeprowadzki',
    description: 'Przeprowadzki mieszkań, domów, firm i instytucji w Kielcach. Pakowanie, transport specjalistyczny i magazynowanie w jednym systemie WHM.',
  },
  {
    name: 'Usługi',
    slug: '/uslugi/',
    category: 'main',
    robots: 'index, follow',
    title: 'Usługi przeprowadzkowe i transportowe | WHM Kielce',
    description: 'Poznaj skonsolidowane usługi WHM: przeprowadzki, transport mebli i pianin, pakowanie, transport specjalistyczny oraz opróżnianie mieszkań.',
  },
  {
    name: 'Przeprowadzki',
    slug: '/przeprowadzki/',
    category: 'service',
    robots: 'index, follow',
    title: 'Przeprowadzki Kielce – bezpieczna przeprowadzka | WHM',
    description: 'Przeprowadzki mieszkań i domów w Kielcach, województwie świętokrzyskim i całej Polsce. Pakowanie, zabezpieczenie, transport i montaż.',
  },
  {
    name: 'Transport mebli',
    slug: '/transport-mebli-kielce/',
    category: 'service',
    robots: 'index, follow',
    title: 'Transport mebli Kielce | Wyniesienie i montaż | WHM',
    description: 'Transport mebli w Kielcach z zabezpieczeniem, wyniesieniem, wniesieniem oraz uzgodnionym demontażem i montażem.',
  },
  {
    name: 'Pakowanie i zabezpieczanie',
    slug: '/pakowanie-i-zabezpieczanie/',
    category: 'service',
    robots: 'index, follow',
    title: 'Pakowanie do przeprowadzki Kielce | WHM',
    description: 'Pełne lub częściowe pakowanie do przeprowadzki w Kielcach. Materiały, pokrowce, koce, papier pakowy i oznaczanie mienia.',
  },
  {
    name: 'Transport pianin i fortepianów',
    slug: '/transport-pianin-i-fortepianow-kielce/',
    category: 'service',
    robots: 'index, follow',
    title: 'Transport pianin i fortepianów Kielce | WHM',
    description: 'Transport pianin i fortepianów w Kielcach po ocenie instrumentu i drogi. Zabezpieczenie, przeniesienie, stabilizacja i ustawienie.',
  },
  {
    name: 'Transport specjalistyczny',
    slug: '/transport-specjalistyczny/',
    category: 'service',
    robots: 'index, follow',
    title: 'Transport specjalistyczny Kielce | WHM',
    description: 'Transport ciężkich i nietypowych przedmiotów w Kielcach: urządzeń, serwerów, pieców, sejfów i wyposażenia laboratoryjnego.',
  },
  {
    name: 'Opróżnianie mieszkań i wywóz starych mebli',
    slug: '/oproznianie-mieszkan-i-wywoz-mebli/',
    category: 'service',
    robots: 'index, follow',
    title: 'Opróżnianie mieszkań i wywóz starych mebli | WHM',
    description: 'Opróżnianie mieszkań w Kielcach: wyniesienie i wywóz starych mebli oraz wyposażenia do PSZOK. Bez gruzu i odpadów budowlanych.',
  },
  {
    name: 'Dla firm',
    slug: '/dla-firm/',
    category: 'business',
    robots: 'index, follow',
    title: 'Relokacje dla firm i instytucji | WHM Kielce',
    description: 'Planowanie i realizacja relokacji dla firm, instytucji, archiwów, zarządców i laboratoriów. Oględziny, etapowanie i magazynowanie.',
  },
  {
    name: 'Przeprowadzki firm i instytucji',
    slug: '/przeprowadzki-firm-i-instytucji/',
    category: 'business',
    robots: 'index, follow',
    title: 'Przeprowadzki firm i instytucji Kielce | WHM',
    description: 'Przeprowadzki biur, firm i instytucji w Kielcach: wizja lokalna, plan, pakowanie, oznaczanie, transport i rozmieszczenie.',
  },
  {
    name: 'Magazyny Kielce',
    slug: '/magazyny-kielce/',
    category: 'ecosystem',
    robots: 'index, follow',
    title: 'Magazyny Kielce | Ogrzewane boksy 2–9 m² | WHM',
    description: 'Ogrzewane magazynki WHM od 2 do 9 m² w Masłowie koło Kielc. Przechowywanie dla osób prywatnych, firm i relokacji etapowych.',
  },
  {
    name: 'Standard WHM',
    slug: '/standard-whm/',
    category: 'content',
    robots: 'index, follow',
    title: 'Standard WHM | Jak zabezpieczamy przeprowadzki',
    description: 'Sprzęt, wielorazowe zabezpieczenia, planowanie i odpowiedzialność za cały proces przeprowadzki w Standardzie WHM.',
  },
  {
    name: 'Realizacje',
    slug: '/realizacje/',
    category: 'content',
    robots: 'index, follow',
    title: 'Realizacje WHM — przeprowadzki firm, instytucji i transport specjalistyczny',
    description: 'Zobacz prawdziwe realizacje WHM: relokacje instytucji, archiwów i teatrów, transport dzieł sztuki, fortepianów, serwerów oraz ciężkiego wyposażenia.',
  },
  {
    name: 'Relokacja Prokuratur Kielce',
    slug: '/realizacje/relokacja-prokuratur-kielce/',
    category: 'content',
    robots: 'index, follow',
    title: 'Relokacja Prokuratur Kielce-Wschód i Zachód | Realizacja WHM',
    description: 'WHM przeprowadziło relokację obu kieleckich prokuratur: cztery piętra, piwnica, archiwa, wyposażenie ponad stu pracowników i ciągłość działania instytucji.',
  },
  {
    name: 'Relokacja Teatru Żeromskiego',
    slug: '/realizacje/relokacja-teatru-zeromskiego-kielce/',
    category: 'content',
    robots: 'index, follow',
    title: 'Relokacja Teatru im. Stefana Żeromskiego | Realizacja WHM',
    description: 'WHM zebrało rozproszone zasoby Teatru im. Stefana Żeromskiego i przeniosło je do historycznej siedziby: niemal 50 pełnych samochodów wyposażenia.',
  },
  {
    name: 'Relokacja TVP3 Kielce',
    slug: '/realizacje/relokacja-tvp3-kielce/',
    category: 'content',
    robots: 'index, follow',
    title: 'Relokacja TVP3 Kielce i archiwum 8000 pozycji | WHM',
    description: 'Relokacja TVP3 Kielce do nowej siedziby: niemal 8000 pozycji archiwum, odtworzenie układu co do półki oraz demontaż starego studia i realizatorni.',
  },
  {
    name: 'Relokacja biblioteki Busko-Zdrój',
    slug: '/realizacje/relokacja-biblioteki-busko-zdroj/',
    category: 'content',
    robots: 'index, follow',
    title: 'Relokacja biblioteki w Busku-Zdroju — 40 000 pozycji | WHM',
    description: 'WHM przeniosło około 40 000 pozycji bibliotecznych pomiędzy dwiema lokalizacjami w Busku-Zdroju, zachowując kolejność księgozbioru w niespełna pięć dni.',
  },
  {
    name: 'Transport obrazu Zamek Szydłowieckich',
    slug: '/realizacje/transport-zabytkowego-obrazu-zamek-szydlowieckich/',
    category: 'content',
    robots: 'index, follow',
    title: 'Transport zabytkowego obrazu z Zamku Szydłowieckich | WHM',
    description: 'Zobacz, jak WHM przetransportowało około 4,3-metrowy zabytkowy obraz, którego nie wolno było pionować: podnośnik, demontaż okna i indywidualna trasa.',
  },
  {
    name: 'Transport fortepianów Zamek Szydłowieckich',
    slug: '/realizacje/transport-fortepianow-zamek-szydlowieckich/',
    category: 'content',
    robots: 'index, follow',
    title: 'Relokacja fortepianów w Zamku Szydłowieckich | WHM',
    description: 'Dwa fortepiany, ciasna winda i niestandardowa pozycja eksponatu. Zobacz wcześniejszą realizację WHM w Zamku Szydłowieckich.',
  },
  {
    name: 'Transport fortepianu Fazioli',
    slug: '/realizacje/transport-fortepianu-fazioli/',
    category: 'content',
    robots: 'index, follow',
    title: 'Nocny transport fortepianu Fazioli z Buska do Kielc | WHM',
    description: 'WHM odebrało koncertowy fortepian Fazioli z tężni w Busku-Zdroju i około 2:00 w nocy ustawiło go na scenie szkoły muzycznej w Kielcach.',
  },
  {
    name: 'Relokacje techniczne i ciężkie ładunki',
    slug: '/realizacje/relokacje-techniczne-i-ciezkie-ladunki/',
    category: 'content',
    robots: 'index, follow',
    title: 'Relokacje techniczne i transport ciężkich urządzeń | WHM',
    description: 'Szafy pancerne, piece 350–450 kg, serwery, zbiorniki azotu i sprzęt laboratoryjny. Zobacz doświadczenie WHM w relokacjach technicznych.',
  },
  {
    name: 'Jak to działa',
    slug: '/jak-to-dziala/',
    category: 'content',
    robots: 'index, follow',
    title: 'Jak wygląda przeprowadzka z WHM | Proces współpracy',
    description: 'Od pierwszej rozmowy i wyceny po zabezpieczenie, transport, wniesienie i ustawienie — poznaj proces współpracy z WHM.',
  },
  {
    name: 'O nas',
    slug: '/o-nas/',
    category: 'content',
    robots: 'index, follow',
    title: 'O WHM Przeprowadzki | Kielce i Masłów',
    description: 'WHM działa od 2019 roku. Poznaj zespół, bazę w Masłowie, zaplecze magazynowe, flotę i sposób pracy firmy.',
  },
  {
    name: 'Obszar działania',
    slug: '/obszar-dzialania/',
    category: 'content',
    robots: 'index, follow',
    title: 'Obszar działania WHM | Kielce, region i cała Polska',
    description: 'WHM realizuje przeprowadzki w Kielcach, województwie świętokrzyskim i na trasach ogólnopolskich.',
  },
  {
    name: 'Poradniki',
    slug: '/poradniki/',
    category: 'content',
    robots: 'index, follow',
    title: 'Poradniki przeprowadzkowe | WHM',
    description: 'Praktyczne wskazówki WHM dotyczące planowania, pakowania, oznaczania i przygotowania do przeprowadzki.',
  },
  {
    name: 'WHM Shop',
    slug: '/whm-shop/',
    category: 'ecosystem',
    robots: 'index, follow',
    title: 'WHM Shop | Materiały do przeprowadzek',
    description: 'Materiały używane przy przeprowadzkach: kartony, pokrowce, koce i akcesoria do zabezpieczania mienia.',
  },
  {
    name: 'Wycena',
    slug: '/wycena/',
    category: 'contact',
    robots: 'noindex, follow',
    title: 'Wycena przeprowadzki | WHM Kielce',
    description: 'Opisz przeprowadzkę lub transport. Wystarczy telefon albo e-mail i krótki opis zlecenia.',
  },
  {
    name: 'Kontakt',
    slug: '/kontakt/',
    category: 'contact',
    robots: 'index, follow',
    title: 'Kontakt | WHM Przeprowadzki Kielce',
    description: 'Telefon, e-mail, godziny kontaktu i adres operacyjny WHM Przeprowadzki w Masłowie Pierwszym.',
  },
  {
    name: 'Polityka prywatności',
    slug: '/polityka-prywatnosci/',
    category: 'legal',
    robots: 'noindex, follow',
    title: 'Polityka prywatności | WHM Przeprowadzki',
    description: 'Informacje o przetwarzaniu danych osobowych przez WHM TRANSPORT MATEUSZ KONDERA.',
  },
];

function routesFor(slugs: string[]): Route[] {
  return slugs.map((slug) => publicRoutes.find((route) => route.slug === slug)).filter(Boolean) as Route[];
}

export const mainNavigation = routesFor([
  '/przeprowadzki/',
  '/uslugi/',
  '/dla-firm/',
  '/standard-whm/',
  '/realizacje/',
  '/kontakt/',
]);

export const utilityNavigation = routesFor([
  '/magazyny-kielce/',
  '/poradniki/',
  '/o-nas/',
  '/obszar-dzialania/',
  '/whm-shop/',
]);

export const serviceNavigation = publicRoutes.filter((route) => route.category === 'service');
export const businessNavigation = publicRoutes.filter((route) => route.category === 'business');
export const brandNavigation = routesFor([
  '/standard-whm/',
  '/realizacje/',
  '/jak-to-dziala/',
  '/o-nas/',
  '/obszar-dzialania/',
  '/magazyny-kielce/',
  '/poradniki/',
]);

export function getRoute(slug: string): Route {
  const route = publicRoutes.find((item) => item.slug === slug);
  if (!route) throw new Error(`Missing route definition for ${slug}`);
  return route;
}
