import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, extname, join, relative, resolve } from 'node:path';

const dist = resolve('dist');
const DOMAIN = 'https://przeprowadzkikielce.pl';
const failures = [];
const warnings = [];
const report = (condition, message) => { if (!condition) failures.push(message); };
const warn = (condition, message) => { if (!condition) warnings.push(message); };

function filesIn(directory, extension) {
  if (!existsSync(directory)) return [];
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? filesIn(path, extension) : extname(path) === extension ? [path] : [];
  });
}

function routeForHtml(path) {
  const local = relative(dist, path).replaceAll('\\', '/');
  if (local === 'index.html') return '/';
  if (local === '404.html') return '/404.html';
  return `/${dirname(local).replaceAll('\\', '/')}/`;
}

const htmlFiles = filesIn(dist, '.html');

// 1. Page count
report(htmlFiles.length === 29, `Expected 29 HTML pages, got ${htmlFiles.length}.`);

// 2. Sitemap check
const sitemapPath = join(dist, 'sitemap.xml');
report(existsSync(sitemapPath), 'sitemap.xml not found in dist.');
if (existsSync(sitemapPath)) {
  const sitemap = readFileSync(sitemapPath, 'utf8');
  const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  report(sitemapUrls.length === 27, `Sitemap should have 27 URLs, got ${sitemapUrls.length}.`);
  report(!sitemap.includes('/polityka-prywatnosci/'), 'Sitemap contains polityka-prywatnosci (should be noindex).');
  report(!sitemap.includes('/404'), 'Sitemap contains 404.');
  report(!sitemap.includes('/lp/'), 'Sitemap contains /lp/ URLs.');
  report(!sitemap.includes('/wycena/'), 'Sitemap contains /wycena/.');
  for (const url of sitemapUrls) {
    report(url.startsWith('https://przeprowadzkikielce.pl/'), `Sitemap URL is not absolute HTTPS: ${url}`);
    report(url.endsWith('/'), `Sitemap URL missing trailing slash: ${url}`);
  }
}

// 3. Per-page checks
const titles = new Map();
const descriptions = new Map();
const h1s = new Map();
const canonicals = new Map();

for (const path of htmlFiles) {
  const html = readFileSync(path, 'utf8');
  const route = routeForHtml(path);
  const is404 = path.endsWith('404.html');
  const isPrivacy = route === '/polityka-prywatnosci/';

  // One title
  const titleMatches = html.match(/<title>([^<]*)<\/title>/g);
  report(titleMatches?.length === 1, `${route}: expected exactly 1 title, got ${titleMatches?.length ?? 0}.`);
  if (titleMatches?.length === 1) {
    const title = titleMatches[0].replace(/<\/?title>/g, '');
    report(!titles.has(title), `${route}: duplicate title "${title}" also on ${titles.get(title) || ''}.`);
    titles.set(title, route);
    warn(title.length <= 65, `${route}: title is ${title.length} chars (>65).`);
  }

  // One description (except 404)
  if (!is404) {
    const descMatches = html.match(/<meta\s+name="description"\s+content="([^"]*)"/g);
    report(descMatches?.length === 1, `${route}: expected exactly 1 description, got ${descMatches?.length ?? 0}.`);
    if (descMatches?.length === 1) {
      const desc = descMatches[0].match(/content="([^"]*)"/)[1];
      report(!descriptions.has(desc), `${route}: duplicate description also on ${descriptions.get(desc) || ''}.`);
      descriptions.set(desc, route);
      warn(desc.length >= 120 && desc.length <= 160, `${route}: description is ${desc.length} chars (target 120-160).`);
    }
  }

  // One H1
  const h1Matches = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi);
  report(h1Matches?.length === 1, `${route}: expected exactly 1 H1, got ${h1Matches?.length ?? 0}.`);

  // One meta robots
  const robotsMatches = html.match(/<meta\s+name="robots"\s+content="([^"]*)"/g);
  report(robotsMatches?.length === 1, `${route}: expected exactly 1 meta robots, got ${robotsMatches?.length ?? 0}.`);

  // Canonical (not on 404)
  if (is404) {
    report(!html.includes('rel="canonical"'), `${route}: 404 should not have canonical.`);
  } else {
    const canonicalMatches = html.match(/<link\s+rel="canonical"\s+href="([^"]*)"/g);
    report(canonicalMatches?.length === 1, `${route}: expected exactly 1 canonical, got ${canonicalMatches?.length ?? 0}.`);
    if (canonicalMatches?.length === 1) {
      const canonicalUrl = canonicalMatches[0].match(/href="([^"]*)"/)[1];
      report(canonicalUrl.startsWith('https://'), `${route}: canonical is not HTTPS: ${canonicalUrl}`);
      report(!canonicalUrl.includes('www.'), `${route}: canonical contains www: ${canonicalUrl}`);
      report(canonicalUrl.endsWith('/'), `${route}: canonical missing trailing slash: ${canonicalUrl}`);
      report(!canonicalUrl.includes('?'), `${route}: canonical contains query params: ${canonicalUrl}`);
      report(!canonicals.has(canonicalUrl) || canonicals.get(canonicalUrl) === route, `${route}: duplicate canonical ${canonicalUrl} also on ${canonicals.get(canonicalUrl) || ''}.`);
      canonicals.set(canonicalUrl, route);
    }
  }

  // Robots directives
  if (robotsMatches?.length === 1) {
    const robots = robotsMatches[0].match(/content="([^"]*)"/)[1];
    if (is404) {
      report(robots === 'noindex, nofollow', `${route}: 404 robots should be "noindex, nofollow", got "${robots}".`);
    } else if (isPrivacy) {
      report(robots === 'noindex, follow', `${route}: privacy robots should be "noindex, follow", got "${robots}".`);
    }
    // For indexable pages, check production robots only if this is a production build
    if (!is404 && !isPrivacy && robots === 'noindex, nofollow, noarchive') {
      // staging build - OK
    } else if (!is404 && !isPrivacy && robots !== 'index, follow') {
      warn(false, `${route}: robots is "${robots}" for an indexable page.`);
    }
  }

  // JSON-LD validation
  const jsonLdScripts = [...html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
  for (const match of jsonLdScripts) {
    try {
      const json = JSON.parse(match[1].trim());
      // Check @graph contains #business
      if (json['@graph']) {
        const businessNode = json['@graph'].find((n) => n['@id']?.includes('#business'));
        if (businessNode) {
          report(businessNode['@id'] === 'https://przeprowadzkikielce.pl/#business', `${route}: business @id is "${businessNode['@id']}" (expected #business).`);
        }
        // Check all @id are absolute URLs
        for (const node of json['@graph']) {
          if (node['@id'] && !node['@id'].startsWith('https://')) {
            report(false, `${route}: @id is not absolute URL: ${node['@id']}`);
          }
        }
      }
    } catch (e) {
      report(false, `${route}: invalid JSON-LD: ${e.message}`);
    }
  }

  // No /lp/ links
  report(!html.includes('href="/lp/'), `${route}: contains link to /lp/.`);
  report(!html.includes('/wycena/'), `${route}: contains link to /wyceta/.`);

  // No legacy data
  report(!html.includes('Sandomierska'), `${route}: contains old address Sandomierska.`);
  report(!html.includes('150 000'), `${route}: contains old insurance amount 150 000.`);
  report(!html.includes('kontakt@przeprowadzkikielce.pl'), `${route}: contains old email.`);
}

// 4. Redirects check
const redirectLines = readFileSync(resolve('public/_redirects'), 'utf8')
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter((line) => line && !line.startsWith('#'));
report(redirectLines.length === 32, `Expected 32 redirect rules, got ${redirectLines.length}.`);

// Output
if (warnings.length) {
  console.log(`Warnings:\n- ${warnings.join('\n- ')}`);
}
if (failures.length) {
  console.error(`SEO validation failed:\n- ${failures.join('\n- ')}`);
  process.exit(1);
}
console.log(`SEO validation passed: ${htmlFiles.length} pages, ${canonicals.size} canonicals, sitemap OK, JSON-LD OK, no legacy data.`);
