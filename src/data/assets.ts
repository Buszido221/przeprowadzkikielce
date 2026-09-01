export interface PlannedAsset {
  filename: string;
  path: string;
  purpose: string;
  assignedTo: string;
}

export const plannedImages: PlannedAsset[] = [
  {
    filename: 'hero-1.webp',
    path: '/images/hero/hero-1.webp',
    purpose: 'Zdjęcie główne strony startowej',
    assignedTo: '/',
  },
  {
    filename: 'przeprowadzki-kielce-1.webp',
    path: '/images/kielce-moving/przeprowadzki-kielce-1.webp',
    purpose: 'Zdjęcie główne strony Przeprowadzki',
    assignedTo: '/przeprowadzki/',
  },
  {
    filename: 'przeprowadzki-domow-kielce-3.webp',
    path: '/images/home-moving/przeprowadzki-domow-kielce-3.webp',
    purpose: 'Zdjęcie główne strony Przeprowadzki mieszkań i domów',
    assignedTo: '/przeprowadzki/',
  },
  {
    filename: 'przeprowadzki-instytucji-4.webp',
    path: '/images/institution-moving/przeprowadzki-instytucji-4.webp',
    purpose: 'Zdjęcie główne strony Przeprowadzki firm i instytucji',
    assignedTo: '/przeprowadzki-firm-i-instytucji/',
  },
  {
    filename: 'pakowanie-przeprowadzki-kielce-3.webp',
    path: '/images/packing-services/pakowanie-przeprowadzki-kielce-3.webp',
    purpose: 'Zdjęcie główne strony Pakowanie i zabezpieczanie',
    assignedTo: '/pakowanie-i-zabezpieczanie/',
  },
  {
    filename: 'transport-gabarytow-kielce-7.webp',
    path: '/images/transport-gabarytow/transport-gabarytow-kielce-7.webp',
    purpose: 'Zdjęcie główne strony Transport specjalistyczny',
    assignedTo: '/transport-specjalistyczny/',
  },
  {
    filename: 'transport-pianin-i-fortepianow-kielce-3.webp',
    path: '/images/transport-pianin-i-fortepianow/transport-pianin-i-fortepianow-kielce-3.webp',
    purpose: 'Zdjęcie główne strony Transport pianin i fortepianów',
    assignedTo: '/transport-pianin-i-fortepianow-kielce/',
  },
  {
    filename: 'transport-gabarytow-kielce-5.webp',
    path: '/images/transport-gabarytow/transport-gabarytow-kielce-5.webp',
    purpose: 'Zdjęcie główne strony Transport gabarytowy',
    assignedTo: '/transport-gabarytowy-kielce/',
  },
  {
    filename: 'przeprowadzki-kielce-4.webp',
    path: '/images/kielce-moving/przeprowadzki-kielce-4.webp',
    purpose: 'Zdjęcie główne strony Standard WHM',
    assignedTo: '/standard-whm/',
  },
  {
    filename: 'kartony-do-przeprowadzki-3.webp',
    path: '/images/moving-boxes/kartony-do-przeprowadzki-3.webp',
    purpose: 'Zdjęcie główne strony WHM Shop',
    assignedTo: '/whm-shop/',
  },
  {
    filename: 'przeprowadzki-kielce-5.webp',
    path: '/images/kielce-moving/przeprowadzki-kielce-5.webp',
    purpose: 'Zdjęcie główne strony Realizacje',
    assignedTo: '/realizacje/',
  },
  {
    filename: 'pakowanie-przeprowadzki-kielce-1.webp',
    path: '/images/packing-services/pakowanie-przeprowadzki-kielce-1.webp',
    purpose: 'Zdjęcie główne strony Jak to działa',
    assignedTo: '/jak-to-dziala/',
  },
  {
    filename: 'pakowanie-przeprowadzki-kielce-5.webp',
    path: '/images/packing-services/pakowanie-przeprowadzki-kielce-5.webp',
    purpose: 'Zdjęcie główne strony O nas',
    assignedTo: '/o-nas/',
  },
  {
    filename: 'LOGO_WHM.svg',
    path: '/images/LOGO_WHM.svg',
    purpose: 'Logo WHM Przeprowadzki',
    assignedTo: 'global',
  },
];

export function getPlannedImage(slug: string): PlannedAsset | undefined {
  return plannedImages.find((a) => a.assignedTo === slug);
}
