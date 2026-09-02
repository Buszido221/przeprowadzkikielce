import { site } from '../data/site';
import { getSeo, getCanonicalUrl, BUSINESS_ID, WEBSITE_ID } from '../data/seo';
import { getImageAsset } from '../data/imageManifest';
import type { SeoPage, SchemaType } from '../data/seo';
import { publicAssetExists } from './public-assets';

const DOMAIN = 'https://przeprowadzkikielce.pl';

function imageUrl(path: string | undefined): string | undefined {
  if (!path || !publicAssetExists(path)) return undefined;
  return new URL(path, DOMAIN).href;
}

function imageObject(path: string | undefined, alt: string | undefined) {
  const url = imageUrl(path);
  if (!url) return undefined;
  const asset = getImageAsset(path!);
  return {
    '@type': 'ImageObject',
    url,
    width: asset?.width ?? 1200,
    height: asset?.height ?? 630,
    ...(alt ? { description: alt } : {}),
  };
}

function areaServed() {
  return [
    { '@type': 'City', name: 'Kielce' },
    { '@type': 'AdministrativeArea', name: 'Województwo świętokrzyskie' },
    { '@type': 'Country', name: 'Polska' },
  ];
}

function postalAddress(useRegistered = false) {
  const a = useRegistered ? site.registerredAddress : site.address;
  return {
    '@type': 'PostalAddress',
    streetAddress: a.street,
    postalCode: a.postalCode,
    addressLocality: a.city,
    addressRegion: 'Świętokrzyskie',
    addressCountry: 'PL',
  };
}

export function businessEntity() {
  return {
    '@type': 'MovingCompany',
    '@id': BUSINESS_ID,
    name: site.brand,
    legalName: site.legalName,
    url: DOMAIN,
    telephone: site.phoneRaw,
    email: site.email,
    taxID: site.nip,
    foundingDate: site.foundingDate,
    address: postalAddress(),
    areaServed: areaServed(),
    sameAs: [site.facebook, site.instagram],
    hasMap: site.googleMaps,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: site.phoneRaw,
      contactType: 'customer service',
      areaServed: 'PL',
      availableLanguage: ['Polish'],
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '18:00',
      },
    ],
  };
}

function websiteEntity() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: DOMAIN,
    name: site.brand,
    inLanguage: 'pl-PL',
    publisher: { '@id': BUSINESS_ID },
  };
}

function webpageEntity(seo: SeoPage) {
  const canonical = getCanonicalUrl(seo.slug);
  const types: Record<string, string> = {
    WebPage: 'WebPage',
    AboutPage: 'AboutPage',
    ContactPage: 'ContactPage',
    CollectionPage: 'CollectionPage',
  };
  return {
    '@type': types[seo.schemaType] ?? 'WebPage',
    '@id': `${canonical}#webpage`,
    url: canonical,
    name: seo.title,
    description: seo.description,
    inLanguage: 'pl-PL',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': BUSINESS_ID },
    ...(seo.ogImage ? { primaryImageOfPage: imageObject(seo.ogImage, seo.ogImageAlt) } : {}),
  };
}

function serviceEntity(seo: SeoPage) {
  const canonical = getCanonicalUrl(seo.slug);
  return {
    '@type': 'Service',
    '@id': `${canonical}#service`,
    name: seo.h1 ?? seo.title,
    serviceType: seo.intent,
    description: seo.description,
    url: canonical,
    provider: { '@id': BUSINESS_ID },
    areaServed: areaServed(),
    mainEntityOfPage: canonical,
  };
}

function articleEntity(seo: SeoPage) {
  const canonical = getCanonicalUrl(seo.slug);
  return {
    '@type': 'Article',
    '@id': `${canonical}#article`,
    headline: seo.h1 ?? seo.title,
    description: seo.description,
    url: canonical,
    inLanguage: 'pl-PL',
    author: { '@id': BUSINESS_ID },
    publisher: { '@id': BUSINESS_ID },
    mainEntityOfPage: canonical,
    about: { '@id': BUSINESS_ID },
    ...(seo.ogImage ? { image: imageObject(seo.ogImage, seo.ogImageAlt) } : {}),
  };
}

function selfStorageEntity(seo: SeoPage) {
  const canonical = getCanonicalUrl(seo.slug);
  return {
    '@type': 'SelfStorage',
    '@id': `${canonical}#selfstorage`,
    name: 'Magazyny WHM',
    description: seo.description,
    url: canonical,
    telephone: site.phoneRaw,
    address: postalAddress(),
    parentOrganization: { '@id': BUSINESS_ID },
    areaServed: areaServed(),
  };
}

function breadcrumbEntity(seo: SeoPage, items: { name: string; url?: string }[]) {
  const canonical = getCanonicalUrl(seo.slug);
  const list = [
    { name: 'Strona główna', url: DOMAIN },
    ...items.map((item) => ({ name: item.name, url: item.url })),
  ];
  return {
    '@type': 'BreadcrumbList',
    '@id': `${canonical}#breadcrumb`,
    itemListElement: list.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      ...(item.url ? { item: item.url } : {}),
    })),
  };
}

interface BuildSchemaOptions {
  slug: string;
  breadcrumbs?: { name: string; url?: string }[];
  itemList?: { name: string; url: string }[];
}

export function buildSchemaGraph(opts: BuildSchemaOptions): object {
  const seo = getSeo(opts.slug);
  const canonical = getCanonicalUrl(seo.slug);
  const graph: object[] = [businessEntity(), websiteEntity()];

  const breadcrumbItems = opts.breadcrumbs ?? [];
  graph.push(breadcrumbEntity(seo, breadcrumbItems));

  switch (seo.schemaType) {
    case 'Service':
      graph.push(serviceEntity(seo));
      break;
    case 'Article':
      graph.push(articleEntity(seo));
      break;
    case 'SelfStorage':
      graph.push(selfStorageEntity(seo));
      break;
    case 'CollectionPage':
      graph.push(webpageEntity(seo));
      if (opts.itemList && opts.itemList.length > 0) {
        graph.push({
          '@type': 'ItemList',
          name: seo.navName,
          itemListElement: opts.itemList.map((item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: item.name,
            url: item.url,
          })),
        });
      }
      break;
    default:
      graph.push(webpageEntity(seo));
      break;
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

export function buildFaqSchema(faq: { question: string; answer: string }[]): object | undefined {
  if (!faq || faq.length === 0) return undefined;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
