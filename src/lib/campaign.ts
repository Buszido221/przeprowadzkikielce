import { hasAdsConsent } from './consent';

export const CAMPAIGN_STORAGE_KEY = 'whm_campaign_v3';
const MAX_VALUE_LENGTH = 250;

export const CAMPAIGN_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_id',
  'utm_term',
  'utm_content',
  'gclid',
  'gbraid',
  'wbraid',
  'fbclid',
  'campaignid',
  'adgroupid',
  'creative',
  'device',
  'network',
  'matchtype',
  'keyword',
] as const;

export type CampaignParam = (typeof CAMPAIGN_KEYS)[number];

export const ATTRIBUTION_FIELDS = [
  'captured_at',
  'landing_page',
  'referrer',
  ...CAMPAIGN_KEYS,
] as const;

export interface CampaignRecord {
  captured_at: string;
  landing_page: string;
  referrer: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_id: string;
  utm_term: string;
  utm_content: string;
  gclid: string;
  gbraid: string;
  wbraid: string;
  fbclid: string;
  campaignid: string;
  adgroupid: string;
  creative: string;
  device: string;
  network: string;
  matchtype: string;
  keyword: string;
}

export interface CampaignData {
  first_touch: CampaignRecord | null;
  last_touch: CampaignRecord | null;
}

const CLICK_ID_KEYS = new Set<CampaignParam>(['gclid', 'gbraid', 'wbraid', 'fbclid']);

function sanitize(value: string, key?: CampaignParam): string {
  const cleaned = value.replace(/[\u0000-\u001F\u007F]/g, '').trim().slice(0, MAX_VALUE_LENGTH);
  if (key && CLICK_ID_KEYS.has(key) && !/^[A-Za-z0-9._~-]+$/.test(cleaned)) return '';
  return cleaned;
}

function buildRecord(search: URLSearchParams): CampaignRecord | null {
  const record: CampaignRecord = {
    captured_at: new Date().toISOString(),
    landing_page: sanitize(window.location.pathname),
    referrer: sanitize(document.referrer || ''),
    utm_source: '', utm_medium: '', utm_campaign: '', utm_id: '', utm_term: '', utm_content: '',
    gclid: '', gbraid: '', wbraid: '', fbclid: '', campaignid: '', adgroupid: '', creative: '',
    device: '', network: '', matchtype: '', keyword: '',
  };

  let hasSource = false;

  for (const key of CAMPAIGN_KEYS) {
    const val = search.get(key);
    if (!val) continue;
    const sanitized = sanitize(val, key);
    if (!sanitized) continue;
    record[key] = sanitized;
    hasSource = true;
  }

  return hasSource ? record : null;
}

export function captureCampaignParams(): CampaignData {
  if (!hasAdsConsent()) {
    clearCampaignStorage();
    return { first_touch: null, last_touch: null };
  }

  const search = new URLSearchParams(window.location.search);
  const stored = getCampaignFromStorage();
  const record = buildRecord(search);

  if (record) {
    const updated: CampaignData = {
      first_touch: stored.first_touch || record,
      last_touch: record,
    };
    try {
      sessionStorage.setItem(CAMPAIGN_STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // storage unavailable
    }
    return updated;
  }

  return stored;
}

export function getCampaignFromStorage(): CampaignData {
  if (!hasAdsConsent()) return { first_touch: null, last_touch: null };
  try {
    const raw = sessionStorage.getItem(CAMPAIGN_STORAGE_KEY);
    if (!raw) return { first_touch: null, last_touch: null };
    const parsed = JSON.parse(raw);
    if (typeof parsed !== 'object' || parsed === null) return { first_touch: null, last_touch: null };
    return {
      first_touch: normalizeStoredRecord(parsed.first_touch),
      last_touch: normalizeStoredRecord(parsed.last_touch),
    };
  } catch {
    return { first_touch: null, last_touch: null };
  }
}

export function getCampaignForForm(): Record<string, string> {
  const data = getCampaignFromStorage();
  const result: Record<string, string> = {};

  for (const touch of ['first_touch', 'last_touch'] as const) {
    const prefix = touch === 'first_touch' ? 'ft' : 'lt';
    for (const key of ATTRIBUTION_FIELDS) {
      result[`${prefix}_${key}`] = data[touch]?.[key] ?? '';
    }
  }

  return result;
}

function normalizeStoredRecord(value: unknown): CampaignRecord | null {
  if (!value || typeof value !== 'object') return null;
  const source = value as Record<string, unknown>;
  const record = {} as CampaignRecord;
  for (const field of ATTRIBUTION_FIELDS) {
    const raw = typeof source[field] === 'string' ? source[field] : '';
    record[field] = sanitize(raw, CAMPAIGN_KEYS.includes(field as CampaignParam) ? field as CampaignParam : undefined);
  }
  return record.captured_at && record.landing_page ? record : null;
}

export function clearCampaignStorage(): void {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.removeItem(CAMPAIGN_STORAGE_KEY);
  } catch {
    // Storage can be unavailable in privacy modes.
  }
}
