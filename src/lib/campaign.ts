const STORAGE_KEY = 'whm_campaign';

export const CAMPAIGN_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'gclid',
  'gbraid',
  'wbraid',
] as const;

export type CampaignParam = (typeof CAMPAIGN_KEYS)[number];

export interface CampaignData {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
}

export function captureCampaignParams(): CampaignData {
  const search = new URLSearchParams(window.location.search);
  const captured: CampaignData = {};

  for (const key of CAMPAIGN_KEYS) {
    const val = search.get(key);
    if (val) captured[key] = val;
  }

  if (Object.keys(captured).length > 0) {
    const existing = getCampaignFromStorage();
    const merged = { ...existing, ...captured };
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
    } catch {
      // storage unavailable - continue with in-memory data
    }
  }

  return getCampaignFromStorage();
}

export function getCampaignFromStorage(): CampaignData {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (typeof parsed !== 'object' || parsed === null) return {};
    return parsed as CampaignData;
  } catch {
    return {};
  }
}
