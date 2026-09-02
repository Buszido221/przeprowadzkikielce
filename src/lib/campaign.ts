const STORAGE_KEY = 'whm_campaign_v2';
const MAX_VALUE_LENGTH = 250;

export const CAMPAIGN_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
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

export interface CampaignRecord {
  captured_at: string;
  landing_page: string;
  referrer: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  fbclid?: string;
  campaignid?: string;
  adgroupid?: string;
  creative?: string;
  device?: string;
  network?: string;
  matchtype?: string;
  keyword?: string;
}

export interface CampaignData {
  first_touch: CampaignRecord | null;
  last_touch: CampaignRecord | null;
}

function sanitize(val: string): string {
  return val.slice(0, MAX_VALUE_LENGTH);
}

function hasMarketingParams(search: URLSearchParams): boolean {
  for (const key of CAMPAIGN_KEYS) {
    if (search.get(key)) return true;
  }
  return false;
}

function buildRecord(search: URLSearchParams): CampaignRecord {
  const record: CampaignRecord = {
    captured_at: new Date().toISOString(),
    landing_page: window.location.pathname,
    referrer: document.referrer || '',
  };

  for (const key of CAMPAIGN_KEYS) {
    const val = search.get(key);
    if (val) record[key] = sanitize(val);
  }

  return record;
}

export function captureCampaignParams(): CampaignData {
  const search = new URLSearchParams(window.location.search);
  const stored = getCampaignFromStorage();

  if (hasMarketingParams(search)) {
    const record = buildRecord(search);
    const updated: CampaignData = {
      first_touch: stored.first_touch || record,
      last_touch: record,
    };
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // storage unavailable
    }
    return updated;
  }

  return stored;
}

export function getCampaignFromStorage(): CampaignData {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return { first_touch: null, last_touch: null };
    const parsed = JSON.parse(raw);
    if (typeof parsed !== 'object' || parsed === null) return { first_touch: null, last_touch: null };
    return {
      first_touch: parsed.first_touch || null,
      last_touch: parsed.last_touch || null,
    };
  } catch {
    return { first_touch: null, last_touch: null };
  }
}

export function getCampaignForForm(): Record<string, string> {
  const data = getCampaignFromStorage();
  const result: Record<string, string> = {};

  if (data.first_touch) {
    for (const key of CAMPAIGN_KEYS) {
      const val = data.first_touch[key];
      if (val) result[`ft_${key}`] = val;
    }
  }

  if (data.last_touch) {
    for (const key of CAMPAIGN_KEYS) {
      const val = data.last_touch[key];
      if (val) result[`lt_${key}`] = val;
    }
  }

  return result;
}
