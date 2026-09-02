import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

function readEnvironment() {
  const fileValues = {};
  for (const filename of ['.env', '.env.local', '.env.production', '.env.production.local']) {
    const path = resolve(filename);
    if (!existsSync(path)) continue;
    for (const line of readFileSync(path, 'utf8').split(/\r?\n/)) {
      const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (!match) continue;
      fileValues[match[1]] = match[2].replace(/^(['"])(.*)\1$/, '$2');
    }
  }
  return { ...fileValues, ...process.env };
}

const env = readEnvironment();
const siteEnvironment = env.PUBLIC_SITE_ENV || 'staging';
const errors = [];

if (!['staging', 'production'].includes(siteEnvironment)) {
  errors.push('PUBLIC_SITE_ENV musi mieć wartość staging albo production.');
}

if (siteEnvironment === 'production') {
  if (!/^GTM-[A-Z0-9]+$/.test(env.PUBLIC_GTM_ID || '')) {
    errors.push('PUBLIC_GTM_ID jest wymagany na produkcji i musi mieć format GTM-XXXXXXXX.');
  }
  for (const key of ['PUBLIC_EMAILJS_SERVICE_ID', 'PUBLIC_EMAILJS_TEMPLATE_ID', 'PUBLIC_EMAILJS_PUBLIC_KEY']) {
    if (!(env[key] || '').trim()) errors.push(`${key} jest wymagany na produkcji.`);
  }
}

if (errors.length) {
  console.error('Błąd konfiguracji środowiska:\n- ' + errors.join('\n- '));
  process.exit(1);
}

console.log(`Konfiguracja środowiska ${siteEnvironment}: OK`);
