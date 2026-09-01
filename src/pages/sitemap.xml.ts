import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { allRoutes } from '../data/routes';

const indexableRoutes = allRoutes.filter(
  (r) => r.robots !== 'noindex, follow' && r.status === 'ready'
);

const urls = indexableRoutes.map((r) => ({
  loc: `${site.domain}${r.slug.replace(/^\//, '')}`,
}));

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>
    <loc>${u.loc}</loc>
  </url>`).join('\n')}
</urlset>`;

export const GET: APIRoute = () => {
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
