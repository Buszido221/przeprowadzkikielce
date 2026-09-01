export type RouteCategory = 'main' | 'service' | 'ecosystem' | 'content' | 'contact' | 'legal' | 'landing';
export type RouteStatus = 'draft' | 'ready';
export type RobotsDirective =
  | 'index, follow'
  | 'noindex, follow'
  | 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

export interface Route {
  name: string;
  slug: string;
  category: RouteCategory;
  status: RouteStatus;
  robots: RobotsDirective;
  inMenu: boolean;
  inFooter: boolean;
  workingTitle: string;
  plannedImage?: string;
}

export const publicRoutes: Route[] = [
  {
    name: 'Strona główna',
    slug: '/',
    category: 'main',
    status: 'ready',
    robots: 'index, follow',
    inMenu: false,
    inFooter: false,
    workingTitle: 'WHM Przeprowadzki - Kielce i okolice',
    plannedImage: 'hero-1(3).webp',
  },
  {
    name: 'Przeprowadzki',
    slug: '/przeprowadzki/',
    category: 'service',
    status: 'ready',
    robots: 'index, follow',
    inMenu: true,
    inFooter: true,
    workingTitle: 'Przeprowadzki - WHM Przeprowadzki',
    plannedImage: 'przeprowadzki-kielce-1(1).webp',
  },
  {
    name: 'Przeprowadzki firm i instytucji',
    slug: '/przeprowadzki-firm-i-instytucji/',
    category: 'service',
    status: 'ready',
    robots: 'index, follow',
    inMenu: true,
    inFooter: true,
    workingTitle: 'Przeprowadzki firm i instytucji - WHM Przeprowadzki',
    plannedImage: 'przeprowadzki-instytucji-4(1).webp',
  },
  {
    name: 'Pakowanie i zabezpieczanie',
    slug: '/pakowanie-i-zabezpieczanie/',
    category: 'service',
    status: 'ready',
    robots: 'index, follow',
    inMenu: true,
    inFooter: true,
    workingTitle: 'Pakowanie i zabezpieczanie - WHM Przeprowadzki',
    plannedImage: 'pakowanie-przeprowadzki-kielce-3(1).webp',
  },
  {
    name: 'Transport specjalistyczny',
    slug: '/transport-specjalistyczny/',
    category: 'service',
    status: 'ready',
    robots: 'index, follow',
    inMenu: true,
    inFooter: true,
    workingTitle: 'Transport specjalistyczny - WHM Przeprowadzki',
    plannedImage: 'transport-gabarytow-kielce-7(1).webp',
  },
  {
    name: 'Transport pianin i fortepianów',
    slug: '/transport-pianin-i-fortepianow-kielce/',
    category: 'service',
    status: 'ready',
    robots: 'index, follow',
    inMenu: true,
    inFooter: true,
    workingTitle: 'Transport pianin i fortepianów Kielce - WHM Przeprowadzki',
    plannedImage: 'transport-pianin-i-fortepianow-kielce-3(1).webp',
  },
  {
    name: 'Transport gabarytowy',
    slug: '/transport-gabarytowy-kielce/',
    category: 'service',
    status: 'ready',
    robots: 'index, follow',
    inMenu: true,
    inFooter: true,
    workingTitle: 'Transport gabarytowy Kielce - WHM Przeprowadzki',
    plannedImage: 'transport-gabarytow-kielce-5(1).webp',
  },
  {
    name: 'Magazyny',
    slug: '/magazyny/',
    category: 'ecosystem',
    status: 'draft',
    robots: 'noindex, follow',
    inMenu: true,
    inFooter: true,
    workingTitle: 'Magazyny WHM - bezpieczne przechowywanie mienia',
  },
  {
    name: 'Standard WHM',
    slug: '/standard-whm/',
    category: 'content',
    status: 'ready',
    robots: 'index, follow',
    inMenu: true,
    inFooter: true,
    workingTitle: 'Standard WHM - jak pracujemy',
    plannedImage: 'przeprowadzki-kielce-4(1).webp',
  },
  {
    name: 'WHM Shop',
    slug: '/whm-shop/',
    category: 'ecosystem',
    status: 'ready',
    robots: 'index, follow',
    inMenu: true,
    inFooter: true,
    workingTitle: 'WHM Shop - materiały do przeprowadzki',
    plannedImage: 'kartony-do-przeprowadzki-3(1).webp',
  },
  {
    name: 'Realizacje',
    slug: '/realizacje/',
    category: 'content',
    status: 'ready',
    robots: 'index, follow',
    inMenu: true,
    inFooter: true,
    workingTitle: 'Realizacje - WHM Przeprowadzki',
    plannedImage: 'przeprowadzki-kielce-5(1).webp',
  },
  {
    name: 'Jak to działa',
    slug: '/jak-to-dziala/',
    category: 'content',
    status: 'ready',
    robots: 'index, follow',
    inMenu: true,
    inFooter: true,
    workingTitle: 'Jak to działa - proces współpracy z WHM',
    plannedImage: 'pakowanie-przeprowadzki-kielce-1(1).webp',
  },
  {
    name: 'Poradnik',
    slug: '/poradnik/',
    category: 'content',
    status: 'ready',
    robots: 'index, follow',
    inMenu: false,
    inFooter: true,
    workingTitle: 'Poradnik przeprowadzkowy - WHM Przeprowadzki',
  },
  {
    name: 'O nas',
    slug: '/o-nas/',
    category: 'content',
    status: 'ready',
    robots: 'index, follow',
    inMenu: true,
    inFooter: true,
    workingTitle: 'O nas - WHM Przeprowadzki',
    plannedImage: 'pakowanie-przeprowadzki-kielce-5(1).webp',
  },
  {
    name: 'Wycena',
    slug: '/wycena/',
    category: 'contact',
    status: 'ready',
    robots: 'noindex, follow',
    inMenu: true,
    inFooter: true,
    workingTitle: 'Zapytaj o wycenę - WHM Przeprowadzki',
  },
  {
    name: 'Kontakt',
    slug: '/kontakt/',
    category: 'contact',
    status: 'ready',
    robots: 'index, follow',
    inMenu: true,
    inFooter: true,
    workingTitle: 'Kontakt - WHM Przeprowadzki',
  },
  {
    name: 'Polityka prywatności',
    slug: '/polityka-prywatnosci/',
    category: 'legal',
    status: 'ready',
    robots: 'noindex, follow',
    inMenu: false,
    inFooter: true,
    workingTitle: 'Polityka prywatności - WHM Przeprowadzki',
  },
];

export const landingRoutes: Route[] = [
  {
    name: 'LP - Przeprowadzki firm Kielce',
    slug: '/lp/przeprowadzki-firm-kielce/',
    category: 'landing',
    status: 'ready',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    inMenu: false,
    inFooter: false,
    workingTitle: 'Przeprowadzki firm Kielce - WHM Przeprowadzki',
  },
  {
    name: 'LP - Utylizacja mebli Kielce',
    slug: '/lp/utylizacja-mebli-kielce/',
    category: 'landing',
    status: 'ready',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    inMenu: false,
    inFooter: false,
    workingTitle: 'Utylizacja mebli Kielce - WHM Przeprowadzki',
  },
  {
    name: 'LP - Transport pianina Kielce',
    slug: '/lp/transport-pianina-kielce/',
    category: 'landing',
    status: 'ready',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    inMenu: false,
    inFooter: false,
    workingTitle: 'Transport pianina Kielce - WHM Przeprowadzki',
  },
  {
    name: 'LP - Transport specjalistyczny Kielce',
    slug: '/lp/transport-specjalistyczny-kielce/',
    category: 'landing',
    status: 'ready',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    inMenu: false,
    inFooter: false,
    workingTitle: 'Transport specjalistyczny Kielce - WHM',
  },
  {
    name: 'LP - Transport gabarytowy Kielce',
    slug: '/lp/transport-gabarytowy-kielce/',
    category: 'landing',
    status: 'ready',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    inMenu: false,
    inFooter: false,
    workingTitle: 'Transport gabarytowy Kielce - WHM',
  },
  {
    name: 'LP - Pakowanie przeprowadzki Kielce',
    slug: '/lp/pakowanie-przeprowadzki-kielce/',
    category: 'landing',
    status: 'ready',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    inMenu: false,
    inFooter: false,
    workingTitle: 'Pakowanie przeprowadzki Kielce - WHM',
  },
  {
    name: 'LP - Transport mebli Kielce',
    slug: '/lp/transport-mebli-kielce/',
    category: 'landing',
    status: 'ready',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    inMenu: false,
    inFooter: false,
    workingTitle: 'Transport mebli Kielce - WHM Przeprowadzki',
  },
];

export const allRoutes = [...publicRoutes, ...landingRoutes];

export function getMenuRoutes(): Route[] {
  return publicRoutes.filter((r) => r.inMenu);
}

export function getFooterRoutes(): Route[] {
  return publicRoutes.filter((r) => r.inFooter);
}
