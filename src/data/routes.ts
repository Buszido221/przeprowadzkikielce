export type RouteCategory =
  | 'main'
  | 'service'
  | 'business'
  | 'ecosystem'
  | 'content'
  | 'contact'
  | 'legal';

export interface Route {
  name: string;
  slug: string;
  category: RouteCategory;
}

export const publicRoutes: Route[] = [
  { name: 'Strona główna', slug: '/', category: 'main' },
  { name: 'Usługi', slug: '/uslugi/', category: 'main' },
  { name: 'Przeprowadzki', slug: '/przeprowadzki/', category: 'service' },
  { name: 'Transport mebli', slug: '/transport-mebli-kielce/', category: 'service' },
  { name: 'Pakowanie i zabezpieczanie', slug: '/pakowanie-i-zabezpieczanie/', category: 'service' },
  { name: 'Transport pianin i fortepianów', slug: '/transport-pianin-i-fortepianow-kielce/', category: 'service' },
  { name: 'Transport specjalistyczny', slug: '/transport-specjalistyczny/', category: 'service' },
  { name: 'Opróżnianie mieszkań i wywóz mebli', slug: '/oproznianie-mieszkan-i-wywoz-mebli/', category: 'service' },
  { name: 'Dla firm', slug: '/dla-firm/', category: 'business' },
  { name: 'Przeprowadzki firm i instytucji', slug: '/przeprowadzki-firm-i-instytucji/', category: 'business' },
  { name: 'Magazyny Kielce', slug: '/magazyny-kielce/', category: 'ecosystem' },
  { name: 'Standard WHM', slug: '/standard-whm/', category: 'content' },
  { name: 'Realizacje', slug: '/realizacje/', category: 'content' },
  { name: 'Relokacja Prokuratur Kielce', slug: '/realizacje/relokacja-prokuratur-kielce/', category: 'content' },
  { name: 'Relokacja Teatru Żeromskiego', slug: '/realizacje/relokacja-teatru-zeromskiego-kielce/', category: 'content' },
  { name: 'Relokacja TVP3 Kielce', slug: '/realizacje/relokacja-tvp3-kielce/', category: 'content' },
  { name: 'Relokacja biblioteki Busko-Zdrój', slug: '/realizacje/relokacja-biblioteki-busko-zdroj/', category: 'content' },
  { name: 'Transport obrazu Zamek Szydłowieckich', slug: '/realizacje/transport-zabytkowego-obrazu-zamek-szydlowieckich/', category: 'content' },
  { name: 'Transport fortepianów Zamek Szydłowieckich', slug: '/realizacje/transport-fortepianow-zamek-szydlowieckich/', category: 'content' },
  { name: 'Transport fortepianu Fazioli', slug: '/realizacje/transport-fortepianu-fazioli/', category: 'content' },
  { name: 'Relokacje techniczne i ciężkie ładunki', slug: '/realizacje/relokacje-techniczne-i-ciezkie-ladunki/', category: 'content' },
  { name: 'Jak to działa', slug: '/jak-to-dziala/', category: 'content' },
  { name: 'O nas', slug: '/o-nas/', category: 'content' },
  { name: 'Obszar działania', slug: '/obszar-dzialania/', category: 'content' },
  { name: 'Poradniki', slug: '/poradniki/', category: 'content' },
  { name: 'WHM Shop', slug: '/whm-shop/', category: 'ecosystem' },
  { name: 'Kontakt', slug: '/kontakt/', category: 'contact' },
  { name: 'Polityka prywatności', slug: '/polityka-prywatnosci/', category: 'legal' },
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
