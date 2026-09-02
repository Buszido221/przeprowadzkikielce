import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { extname, join, resolve } from 'node:path';

function collectFiles(directory, extensions) {
  if (!existsSync(directory)) return [];
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return collectFiles(path, extensions);
    return extensions.has(extname(entry.name)) ? [path] : [];
  });
}

const sourceFiles = collectFiles(resolve('src'), new Set(['.astro', '.ts', '.js']));
const source = sourceFiles.map((path) => readFileSync(path, 'utf8')).join('\n');
const failures = [];

const forbidden = [
  ['stary klucz zgody', /whm_consent_v2/],
  ['stary klucz kampanii', /whm_campaign_v2/],
  ['biznesowe wywołanie gtag event', /gtag\s*\(\s*['"]event['"]/],
  ['iframe GTM noscript', /<noscript[\s\S]{0,500}googletagmanager/i],
  ['stary komponent GoogleTagHead', /GoogleTagHead/],
];

for (const [label, pattern] of forbidden) {
  if (pattern.test(source)) failures.push(`Wykryto: ${label}.`);
}

const campaign = readFileSync(resolve('src/lib/campaign.ts'), 'utf8');
for (const field of [
  'captured_at', 'landing_page', 'referrer', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_id',
  'utm_term', 'utm_content', 'gclid', 'gbraid', 'wbraid', 'fbclid', 'campaignid', 'adgroupid',
  'creative', 'device', 'network', 'matchtype', 'keyword',
]) {
  if (!campaign.includes(`'${field}'`) && !campaign.includes(`${field}:`)) {
    failures.push(`Brak pola atrybucji: ${field}.`);
  }
}

const gtm = readFileSync(resolve('src/components/GtmHead.astro'), 'utf8');
if (!/ad_personalization:\s*'denied'/.test(gtm)) failures.push('ad_personalization nie jest stale denied.');
if (!/consent\.analytics \|\| consent\.ads/.test(gtm)) failures.push('GTM nie jest bramkowany obiema kategoriami zgody.');

const formScript = readFileSync(resolve('src/scripts/lead-form.ts'), 'utf8');
if ((formScript.match(/event:\s*'generate_lead'/g) || []).length !== 1) {
  failures.push('Kod formularza musi zawierać dokładnie jeden emit generate_lead.');
}
if (!/event_id:\s*leadId/.test(formScript) || !/lead_id:\s*leadId/.test(formScript)) {
  failures.push('generate_lead nie używa tego samego lead_id i event_id.');
}

const measurement = readFileSync(resolve('src/lib/measurement.ts'), 'utf8');
for (const pii of ['customer_name', 'phone', 'email', 'company', 'message']) {
  if (new RegExp(`(?:^|\\n)\\s*${pii}\\??\\s*:`, 'm').test(measurement)) {
    failures.push(`Kontrakt dataLayer zawiera pole PII: ${pii}.`);
  }
}

const htmlFiles = collectFiles(resolve('dist'), new Set(['.html']));
const builtHtml = htmlFiles.map((path) => readFileSync(path, 'utf8')).join('\n');
for (const field of [
  'captured_at', 'landing_page', 'referrer', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_id',
  'utm_term', 'utm_content', 'gclid', 'gbraid', 'wbraid', 'fbclid', 'campaignid', 'adgroupid',
  'creative', 'device', 'network', 'matchtype', 'keyword',
]) {
  for (const prefix of ['ft', 'lt']) {
    if (!builtHtml.includes(`name="${prefix}_${field}"`)) failures.push(`Build nie zawiera pola ${prefix}_${field}.`);
  }
}
const production = builtHtml.includes('id="cookie-consent"');
if (production) {
  if (!builtHtml.includes('whm_consent_v3')) failures.push('Build produkcyjny nie zawiera managera zgód v3.');
  if (!builtHtml.includes('googletagmanager.com/gtm.js')) failures.push('Build produkcyjny nie zawiera warunkowego bootstrapa GTM.');
} else {
  if (builtHtml.includes('googletagmanager.com/gtm.js')) failures.push('Build staging zawiera odwołanie do GTM.');
  if (builtHtml.includes('id="cookie-consent"')) failures.push('Build staging zawiera produkcyjny banner zgód.');
}

if (failures.length) {
  console.error('Weryfikacja analityki nie powiodła się:\n- ' + failures.join('\n- '));
  process.exit(1);
}

console.log(`Kontrakt analityczny i build ${production ? 'production' : 'staging'}: OK`);
