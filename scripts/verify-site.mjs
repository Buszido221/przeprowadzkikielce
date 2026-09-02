import { createServer } from 'node:http';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, extname, join, normalize, relative, resolve } from 'node:path';
import { chromium } from 'playwright';

const dist = resolve('dist');
const siteOrigin = 'https://przeprowadzkikielce.pl';
const failures = [];
const report = (condition, message) => {
  if (!condition) failures.push(message);
};

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

function localTargetExists(raw, pageRoute) {
  let url;
  try {
    url = new URL(raw, `${siteOrigin}${pageRoute}`);
  } catch {
    return false;
  }
  if (url.origin !== siteOrigin) return true;
  const pathname = decodeURIComponent(url.pathname);
  if (pathname === '/') return existsSync(join(dist, 'index.html'));
  const direct = join(dist, pathname.replace(/^\//, ''));
  return existsSync(direct) || existsSync(join(direct, 'index.html'));
}

const htmlFiles = filesIn(dist, '.html');
const publicHtml = htmlFiles.filter((path) => !path.endsWith('404.html'));
const productionBuild = readFileSync(join(dist, 'index.html'), 'utf8').includes('id="cookie-consent"');
const builtHtml = htmlFiles.map((path) => readFileSync(path, 'utf8')).join('\n');
report(htmlFiles.length === 29, `Build ma ${htmlFiles.length} stron HTML zamiast 29.`);
report(!existsSync(join(dist, 'lp')), 'Build nadal zawiera katalog /lp/.');
report(!builtHtml.includes('data-planned-image='), 'Build zawiera placeholder brakującego zdjęcia.');

for (const path of htmlFiles) {
  const html = readFileSync(path, 'utf8');
  const route = routeForHtml(path);
  report((html.match(/<h1\b/gi) || []).length === 1, `${route}: oczekiwano dokładnie jednego H1.`);
  report((html.match(/<meta\s+name="robots"/gi) || []).length === 1, `${route}: niepoprawna liczba meta robots.`);
  const robots = html.match(/<meta\s+name="robots"\s+content="([^"]+)"/i)?.[1];
  const expectedRobots = productionBuild
    ? route === '/polityka-prywatnosci/' ? 'noindex, follow' : route === '/404.html' ? 'noindex, nofollow' : 'index, follow'
    : 'noindex, nofollow, noarchive';
  report(robots === expectedRobots, `${route}: robots to "${robots}", oczekiwano "${expectedRobots}".`);
  report((html.match(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi) || []).every((tag) => {
    try {
      JSON.parse(tag.replace(/^.*?>/, '').replace(/<\/script>$/i, ''));
      return true;
    } catch {
      return false;
    }
  }), `${route}: niepoprawny JSON-LD.`);

  if (path.endsWith('404.html')) continue;
  report((html.match(/<link\s+rel="canonical"/gi) || []).length === 1, `${route}: oczekiwano dokładnie jednego canonical.`);

  for (const tag of html.matchAll(/<(?:img|script|link)\b[^>]+(?:src|href)="([^"]+)"[^>]*>/gi)) {
    const target = tag[1];
    if (/^(?:data:|https?:|\/\/)/i.test(target)) continue;
    report(localTargetExists(target, route), `${route}: brak zasobu ${target}.`);
  }
  for (const tag of html.matchAll(/<a\b[^>]+href="([^"]+)"[^>]*>/gi)) {
    const target = tag[1];
    if (/^(?:#|mailto:|tel:|sms:|https?:|\/\/)/i.test(target)) continue;
    report(localTargetExists(target, route), `${route}: niedziałający link ${target}.`);
  }
}

const redirectLines = readFileSync(resolve('public/_redirects'), 'utf8')
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter((line) => line && !line.startsWith('#'));
report(redirectLines.length === 32, `Mapa przekierowań ma ${redirectLines.length} reguł zamiast 32.`);
for (const line of redirectLines) {
  const [source, target, status, ...extra] = line.split(/\s+/);
  report(Boolean(source && target) && status === '301' && extra.length === 0, `Niepoprawna reguła przekierowania: ${line}`);
  report(localTargetExists(target, '/'), `Przekierowanie ${source} prowadzi do brakującej trasy ${target}.`);
}

if (failures.length) {
  console.error(`Statyczne QA nie powiodło się:\n- ${failures.join('\n- ')}`);
  process.exit(1);
}

const mime = {
  '.css': 'text/css', '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json',
  '.pdf': 'application/pdf', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.xml': 'application/xml',
};
const server = createServer((request, response) => {
  const pathname = new URL(request.url || '/', 'http://127.0.0.1').pathname;
  let file = normalize(join(dist, pathname === '/' ? 'index.html' : pathname.replace(/^\//, '')));
  if (!file.startsWith(dist)) return response.writeHead(403).end();
  if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html');
  if (!existsSync(file) && !extname(file)) file = join(file, 'index.html');
  if (!existsSync(file)) return response.writeHead(404).end();
  response.writeHead(200, { 'content-type': mime[extname(file)] || 'application/octet-stream' });
  response.end(readFileSync(file));
});

await new Promise((ready) => server.listen(0, '127.0.0.1', ready));
const baseUrl = `http://127.0.0.1:${server.address().port}`;
const browserCandidates = [
  process.env.BROWSER_PATH,
  chromium.executablePath(),
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
].filter(Boolean);
const executablePath = browserCandidates.find((candidate) => existsSync(candidate));
if (!executablePath) throw new Error('Nie znaleziono przeglądarki Chromium/Chrome/Edge do QA.');

const routes = publicHtml.map(routeForHtml).sort();
const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
];
const browser = await chromium.launch({ executablePath, headless: true });
const measurementHost = /(?:googletagmanager\.com|google-analytics\.com|doubleclick\.net|facebook\.com|connect\.facebook\.net)$/i;
const handleExternal = (route) => {
  const host = new URL(route.request().url()).hostname;
  return measurementHost.test(host)
    ? route.fulfill({ status: 200, contentType: 'text/javascript', body: '' })
    : route.abort();
};

try {
  for (const viewport of viewports) {
    const context = await browser.newContext({ viewport });
    const measurementRequests = [];
    context.on('request', (request) => {
      if (measurementHost.test(new URL(request.url()).hostname)) measurementRequests.push(request.url());
    });
    await context.route(/^https?:\/\/(?!127\.0\.0\.1)/, handleExternal);
    for (const route of routes) {
      const page = await context.newPage();
      const errors = [];
      page.on('console', (message) => {
        if (message.type() === 'error') errors.push(message.text());
      });
      page.on('pageerror', (error) => errors.push(error.message));
      const response = await page.goto(`${baseUrl}${route}`, { waitUntil: 'domcontentloaded' });
      report(response?.status() === 200, `${viewport.name} ${route}: status ${response?.status()}.`);
      report(await page.locator('h1').count() === 1, `${viewport.name} ${route}: nie ma jednego H1.`);
      report(await page.locator('link[rel="canonical"]').count() === 1, `${viewport.name} ${route}: nie ma jednego canonical.`);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      report(overflow <= 1, `${viewport.name} ${route}: poziomy overflow ${overflow}px.`);
      report(errors.length === 0, `${viewport.name} ${route}: błędy konsoli: ${errors.join(' | ')}`);
      await page.close();
    }
    if (!productionBuild) report(measurementRequests.length === 0, `${viewport.name}: staging wykonał request pomiarowy.`);
    await context.close();
  }

  const context = await browser.newContext({ viewport: viewports[1] });
  const page = await context.newPage();
  await page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
  const toggle = page.locator('[aria-controls="mobile-nav"]');
  await toggle.click();
  report(await toggle.getAttribute('aria-expanded') === 'true', 'Menu mobilne nie ustawia aria-expanded=true.');
  await page.keyboard.press('Escape');
  report(await toggle.getAttribute('aria-expanded') === 'false', 'Menu mobilne nie zamyka się klawiszem Escape.');
  report(await toggle.evaluate((element) => element === document.activeElement), 'Menu mobilne nie zwraca fokusu do przycisku.');

  await page.goto(`${baseUrl}/kontakt/`, { waitUntil: 'domcontentloaded' });
  const form = page.locator('.lead-form__form').first();
  await form.locator('button[type="submit"]').click();
  report((await form.locator(':invalid').count()) > 0, 'Pusty formularz nie zgłasza wymaganych pól.');
  report((await form.getAttribute('data-context')) === 'consumer', 'Formularz kontaktowy nie ma kontekstu consumer.');
  report(await form.locator('[name="customer_name"]').evaluate((element) => element === document.activeElement), 'Walidacja nie ustawia fokusu na pierwszym błędzie.');

  await page.goto(`${baseUrl}/przeprowadzki-firm-i-instytucji/`, { waitUntil: 'domcontentloaded' });
  const businessForm = page.locator('.lead-form__form').first();
  report((await businessForm.getAttribute('data-context')) === 'business', 'Formularz relokacji nie ma kontekstu business.');
  report(await businessForm.locator('[name="company"]').count() === 1, 'Formularz B2B nie zawiera pola firmy.');
  report(!(await businessForm.locator('[name="company"]').getAttribute('required')), 'Pole firmy w formularzu B2B nie jest opcjonalne.');
  await context.close();

  if (productionBuild) {
    const consentContext = await browser.newContext();
    await consentContext.route(/^https?:\/\/(?!127\.0\.0\.1)/, handleExternal);
    const consentPage = await consentContext.newPage();
    await consentPage.goto(baseUrl, { waitUntil: 'domcontentloaded' });
    report(await consentPage.locator('#cookie-consent').evaluate((element) => element.classList.contains('cookie-consent--visible')), 'Produkcja nie pokazuje banera bez zapisanej decyzji.');
    const defaults = await consentPage.evaluate(() => (window.dataLayer || [])
      .filter((entry) => Object.prototype.toString.call(entry) === '[object Arguments]')
      .map((entry) => Array.from(entry)));
    const defaultSignal = defaults.find((entry) => entry[0] === 'consent' && entry[1] === 'default');
    report(defaultSignal?.[2]?.analytics_storage === 'denied' && defaultSignal?.[2]?.ad_storage === 'denied' && defaultSignal?.[2]?.ad_user_data === 'denied' && defaultSignal?.[2]?.ad_personalization === 'denied', 'Domyślne sygnały Consent Mode nie są denied.');
    await consentPage.click('#cookie-reject');
    const rejected = await consentPage.evaluate(() => JSON.parse(localStorage.getItem('whm_consent_v2')));
    report(rejected?.version === 2 && rejected.analytics === false && rejected.ads === false, 'Odrzucenie nie zapisuje obu zgód jako false.');
    await consentContext.close();

    const acceptContext = await browser.newContext();
    await acceptContext.route(/^https?:\/\/(?!127\.0\.0\.1)/, handleExternal);
    const acceptPage = await acceptContext.newPage();
    await acceptPage.goto(baseUrl, { waitUntil: 'domcontentloaded' });
    await acceptPage.click('#cookie-accept');
    const accepted = await acceptPage.evaluate(() => JSON.parse(localStorage.getItem('whm_consent_v2')));
    report(accepted?.version === 2 && accepted.analytics === true && accepted.ads === true, 'Pełna zgoda nie zapisuje obu kategorii jako true.');
    await acceptContext.close();
  } else {
    report(!builtHtml.includes('id="cookie-consent"'), 'Staging renderuje produkcyjny banner zgód.');
  }
} finally {
  await browser.close();
  await new Promise((closed) => server.close(closed));
}

if (failures.length) {
  console.error(`QA przeglądarkowe nie powiodło się:\n- ${failures.join('\n- ')}`);
  process.exit(1);
}

console.log(`Pełne QA: ${routes.length} tras × 2 viewporty, linki, zasoby, SEO, menu, formularz i 32 przekierowania: OK`);
