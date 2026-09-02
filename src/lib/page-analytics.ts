export interface PageAnalyticsContext {
  serviceType: string;
  leadContext: 'b2c' | 'b2b';
}

const PAGE_CONTEXTS: Array<{ prefix: string; serviceType: string; leadContext?: 'b2c' | 'b2b' }> = [
  { prefix: '/przeprowadzki-firm-i-instytucji/', serviceType: 'business_relocation', leadContext: 'b2b' },
  { prefix: '/dla-firm/', serviceType: 'business_services', leadContext: 'b2b' },
  { prefix: '/transport-pianin-i-fortepianow-kielce/', serviceType: 'piano_transport' },
  { prefix: '/transport-specjalistyczny/', serviceType: 'specialist_transport' },
  { prefix: '/transport-mebli-kielce/', serviceType: 'furniture_transport' },
  { prefix: '/oproznianie-mieszkan-i-wywoz-mebli/', serviceType: 'property_clearance' },
  { prefix: '/pakowanie-i-zabezpieczanie/', serviceType: 'packing' },
  { prefix: '/magazyny-kielce/', serviceType: 'storage' },
  { prefix: '/przeprowadzki/', serviceType: 'moving' },
  { prefix: '/realizacje/', serviceType: 'case_studies' },
];

export function getPageAnalyticsContext(pathname: string): PageAnalyticsContext {
  const normalizedPath = pathname.endsWith('/') ? pathname : `${pathname}/`;
  const match = PAGE_CONTEXTS.find(({ prefix }) => normalizedPath.startsWith(prefix));
  return {
    serviceType: match?.serviceType ?? 'general',
    leadContext: match?.leadContext ?? 'b2c',
  };
}
