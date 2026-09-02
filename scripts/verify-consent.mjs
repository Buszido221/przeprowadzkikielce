import { createServer } from 'node:http';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { extname, join, normalize, resolve } from 'node:path';
import { chromium } from 'playwright';

const dist = resolve('dist');
const measurementHost = /(?:googletagmanager\.com|google-analytics\.com|doubleclick\.net|facebook\.com|connect\.facebook\.net)$/i;
const mime = { '.css': 'text/css', '.html': 'text/html', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.xml': 'application/xml' };

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const server = createServer((request, response) => {
  const pathname = new URL(request.url || '/', 'http://127.0.0.1').pathname;
  const relative = pathname === '/' ? 'index.html' : pathname.replace(/^\//, '');
  let file = normalize(join(dist, relative));
  if (!file.startsWith(dist)) {
    response.writeHead(403).end();
    return;
  }
  if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html');
  if (!existsSync(file) && !extname(file)) file = join(file, 'index.html');
  if (!existsSync(file)) {
    response.writeHead(404).end();
    return;
  }
  response.writeHead(200, { 'content-type': mime[extname(file)] || 'application/octet-stream' });
  response.end(readFileSync(file));
});

await new Promise((resolveReady) => server.listen(0, '127.0.0.1', resolveReady));
const address = server.address();
const baseUrl = `http://127.0.0.1:${address.port}`;

const browserCandidates = [
  process.env.BROWSER_PATH,
  chromium.executablePath(),
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
].filter(Boolean);
const executablePath = browserCandidates.find((candidate) => existsSync(candidate));
assert(executablePath, 'Nie znaleziono przeglądarki Chromium/Chrome/Edge do testu.');

const browser = await chromium.launch({ executablePath, headless: true });

async function newScenario(consent = null, emailStatus = 200) {
  const context = await browser.newContext();
  const requests = [];
  context.on('request', (request) => {
    if (measurementHost.test(new URL(request.url()).hostname)) requests.push(request.url());
  });
  await context.route(/googletagmanager\.com|google-analytics\.com|doubleclick\.net|facebook\.com|connect\.facebook\.net/, (route) => route.abort());
  await context.route('https://api.emailjs.com/**', (route) => route.fulfill({ status: emailStatus, contentType: 'application/json', body: emailStatus === 200 ? '{}' : '{"error":"test"}' }));
  if (consent) {
    await context.addInitScript((value) => {
      if (!localStorage.getItem('whm_consent_v3')) localStorage.setItem('whm_consent_v3', JSON.stringify(value));
    }, consent);
  }
  return { context, page: await context.newPage(), requests };
}

function consent(version, analytics, ads) {
  return { version, analytics, ads, updated_at: '2026-09-02T12:00:00.000Z' };
}

try {
  {
    const { context, page, requests } = await newScenario();
    await page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(150);
    assert(requests.length === 0, 'Brak decyzji wykonał request pomiarowy.');
    assert(await page.locator('#cookie-consent').evaluate((element) => element.classList.contains('cookie-consent--visible')), 'Banner nie pojawił się bez decyzji.');
    await page.click('#cookie-settings');
    assert(!(await page.isChecked('#consent-analytics')) && !(await page.isChecked('#consent-ads')), 'Checkboxy pierwszej decyzji nie są domyślnie wyłączone.');
    await context.close();
  }

  {
    const { context, page, requests } = await newScenario(consent(3, true, true));
    await page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
    await page.evaluate(() => sessionStorage.setItem('whm_campaign_v3', '{"first_touch":{},"last_touch":{}}'));
    await page.waitForTimeout(100);
    const allSignals = await page.evaluate(() => (window.dataLayer || []).filter((entry) => Object.prototype.toString.call(entry) === '[object Arguments]').map((entry) => Array.from(entry)));
    const allUpdate = allSignals.find((entry) => entry[0] === 'consent' && entry[1] === 'update');
    assert(allUpdate?.[2]?.analytics_storage === 'granted' && allUpdate?.[2]?.ad_storage === 'granted' && allUpdate?.[2]?.ad_user_data === 'granted' && allUpdate?.[2]?.ad_personalization === 'denied', 'Niepoprawne sygnały pełnej zgody.');
    const requestCountBeforeChange = requests.length;
    await page.click('#cookie-settings-link');
    await page.uncheck('#consent-analytics');
    await page.uncheck('#consent-ads');
    await Promise.all([
      page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
      page.click('#cookie-settings-save'),
    ]);
    await page.waitForTimeout(100);
    const state = await page.evaluate(() => ({ consent: JSON.parse(localStorage.getItem('whm_consent_v3')), campaign: sessionStorage.getItem('whm_campaign_v3') }));
    assert(state.consent.analytics === false && state.consent.ads === false, 'Zmiana ustawień nie zapisała nowego stanu.');
    assert(state.campaign === null, 'Wycofanie zgody reklamowej nie usunęło atrybucji.');
    assert(requests.length === requestCountBeforeChange, 'Przeładowanie po wycofaniu zgody ponownie uruchomiło pomiar.');
    await context.close();
  }

  {
    const { context, page, requests } = await newScenario();
    await page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
    await page.click('#cookie-reject');
    await page.locator('a[href^="tel:"]').first().click({ noWaitAfter: true });
    const events = await page.evaluate(() => (window.dataLayer || []).filter((entry) => entry && !Array.isArray(entry) && ['phone_click', 'cta_click'].includes(entry.event)));
    assert(requests.length === 0, 'Tylko niezbędne wykonało request pomiarowy.');
    assert(events.length === 0, 'Tylko niezbędne wysłało event biznesowy.');
    await context.close();
  }

  {
    const { context, page, requests } = await newScenario();
    await page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
    await page.click('#cookie-settings');
    await page.check('#consent-analytics');
    await page.click('#cookie-settings-save');
    await page.waitForTimeout(150);
    assert(requests.some((url) => url.includes('googletagmanager.com/gtm.js')), 'Analytics-only nie uruchomiło GTM.');
    const signals = await page.evaluate(() => (window.dataLayer || []).filter((entry) => Object.prototype.toString.call(entry) === '[object Arguments]').map((entry) => Array.from(entry)));
    const update = signals.find((entry) => entry[0] === 'consent' && entry[1] === 'update');
    assert(update?.[2]?.analytics_storage === 'granted' && update?.[2]?.ad_storage === 'denied' && update?.[2]?.ad_personalization === 'denied', 'Niepoprawne sygnały analytics-only.');
    await page.locator('a[href^="tel:"][data-cta-click]').first().click({ noWaitAfter: true });
    const events = await page.evaluate(() => (window.dataLayer || []).filter((entry) => entry?.event === 'phone_click' || entry?.event === 'cta_click'));
    assert(events.filter((entry) => entry.event === 'phone_click').length === 1, 'Kliknięcie telefonu nie emituje dokładnie jednego phone_click.');
    assert(events.filter((entry) => entry.event === 'cta_click').length === 0, 'Kliknięcie telefonu emituje dodatkowy cta_click.');
    await context.close();
  }

  {
    const { context, page, requests } = await newScenario();
    await page.goto(`${baseUrl}/?fbclid=Safe_123&utm_source=meta`, { waitUntil: 'domcontentloaded' });
    assert(await page.evaluate(() => sessionStorage.getItem('whm_campaign_v3')) === null, 'Atrybucja została zapisana przed zgodą reklamową.');
    await page.click('#cookie-settings');
    await page.check('#consent-ads');
    await page.click('#cookie-settings-save');
    await page.waitForTimeout(150);
    assert(requests.some((url) => url.includes('googletagmanager.com/gtm.js')), 'Ads-only nie uruchomiło GTM.');
    const signals = await page.evaluate(() => (window.dataLayer || []).filter((entry) => Object.prototype.toString.call(entry) === '[object Arguments]').map((entry) => Array.from(entry)));
    const update = signals.find((entry) => entry[0] === 'consent' && entry[1] === 'update');
    assert(update?.[2]?.analytics_storage === 'denied' && update?.[2]?.ad_storage === 'granted' && update?.[2]?.ad_user_data === 'granted' && update?.[2]?.ad_personalization === 'denied', 'Niepoprawne sygnały ads-only.');
    const stored = await page.evaluate(() => JSON.parse(sessionStorage.getItem('whm_campaign_v3')));
    assert(stored?.first_touch?.fbclid === 'Safe_123' && stored?.last_touch?.utm_source === 'meta', 'Atrybucja nie została przechwycona po zgodzie reklamowej.');
    await page.goto(`${baseUrl}/kontakt/`, { waitUntil: 'domcontentloaded' });
    const unchanged = await page.evaluate(() => JSON.parse(sessionStorage.getItem('whm_campaign_v3')));
    assert(unchanged?.first_touch?.utm_source === 'meta' && unchanged?.last_touch?.utm_source === 'meta', 'Wejście bez parametrów nadpisało atrybucję.');
    await page.goto(`${baseUrl}/?utm_source=google&utm_campaign=second`, { waitUntil: 'domcontentloaded' });
    const updated = await page.evaluate(() => JSON.parse(sessionStorage.getItem('whm_campaign_v3')));
    assert(updated?.first_touch?.utm_source === 'meta' && updated?.last_touch?.utm_source === 'google', 'First/last touch nie zachowuje poprawnej historii źródeł.');
    await context.close();
  }

  {
    const { context, page } = await newScenario(consent(3, false, false), 200);
    await page.goto(`${baseUrl}/kontakt/`, { waitUntil: 'domcontentloaded' });
    const form = page.locator('.lead-form__form').first();
    await form.locator('[name="customer_name"]').fill('Test Formularza');
    await form.locator('[name="phone"]').fill('720719022');
    await form.locator('[name="message"]').fill('Test techniczny formularza');
    await form.locator('[name="privacy_consent"]').check();
    await form.locator('button[type="submit"]').click();
    await form.locator('.lead-form__status.is-success').waitFor();
    const result = await page.evaluate(() => ({ leadId: document.querySelector('.lead-form__form input[name="lead_id"]')?.value, events: (window.dataLayer || []).filter((entry) => entry?.event === 'generate_lead') }));
    assert(Boolean(result.leadId), 'Formularz bez zgód nie wygenerował lead_id.');
    assert(result.events.length === 0, 'Formularz bez zgód wysłał generate_lead do dataLayer.');
    await context.close();
  }

  {
    const { context, page } = await newScenario(consent(3, true, true), 200);
    await page.goto(`${baseUrl}/kontakt/`, { waitUntil: 'domcontentloaded' });
    const form = page.locator('.lead-form__form').first();
    await form.locator('[name="customer_name"]').fill('Test Formularza');
    await form.locator('[name="phone"]').fill('720719022');
    await form.locator('[name="message"]').fill('Test techniczny formularza');
    await form.locator('[name="privacy_consent"]').check();
    await form.locator('button[type="submit"]').click();
    await form.locator('.lead-form__status.is-success').waitFor();
    await form.evaluate((element) => element.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true })));
    const result = await page.evaluate(() => ({ leadId: document.querySelector('.lead-form__form input[name="lead_id"]')?.value, events: (window.dataLayer || []).filter((entry) => entry?.event === 'generate_lead') }));
    assert(result.events.length === 1, 'Sukces EmailJS nie emituje dokładnie jednego generate_lead.');
    assert(result.events[0].lead_id === result.leadId && result.events[0].event_id === result.leadId, 'lead_id i event_id nie są identyczne z polem EmailJS.');
    await context.close();
  }

  {
    const { context, page } = await newScenario(consent(3, true, true), 500);
    await page.goto(`${baseUrl}/kontakt/`, { waitUntil: 'domcontentloaded' });
    const form = page.locator('.lead-form__form').first();
    await form.locator('[name="customer_name"]').fill('Test Formularza');
    await form.locator('[name="phone"]').fill('720719022');
    await form.locator('[name="message"]').fill('Test techniczny formularza');
    await form.locator('[name="privacy_consent"]').check();
    await form.locator('button[type="submit"]').click();
    await form.locator('.lead-form__status.is-error').waitFor();
    const result = await page.evaluate(() => ({ leadId: document.querySelector('.lead-form__form input[name="lead_id"]')?.value, success: (window.dataLayer || []).filter((entry) => entry?.event === 'generate_lead'), errors: (window.dataLayer || []).filter((entry) => entry?.event === 'lead_form_submit_error') }));
    assert(Boolean(result.leadId), 'Błąd EmailJS nie zachował lead_id do ponowienia.');
    assert(result.success.length === 0 && result.errors.length === 1 && result.errors[0].error_type === 'emailjs', 'Błąd EmailJS ma niepoprawne eventy.');
    await context.close();
  }

  console.log('Macierz zgód, requestów, atrybucji i formularza: OK');
} finally {
  await browser.close();
  await new Promise((resolveClosed) => server.close(resolveClosed));
}
