export const CONSENT_KEY = 'whm_consent_v3';
export const CONSENT_VERSION = 3;

export interface WhmConsent {
  version: 3;
  analytics: boolean;
  ads: boolean;
  updated_at: string;
}

export function getConsent(): WhmConsent | null {
  if (typeof window === 'undefined') return null;

  try {
    const value = window.localStorage.getItem(CONSENT_KEY);
    if (!value) return null;
    const parsed = JSON.parse(value) as Partial<WhmConsent>;
    if (
      parsed.version !== CONSENT_VERSION ||
      typeof parsed.analytics !== 'boolean' ||
      typeof parsed.ads !== 'boolean' ||
      typeof parsed.updated_at !== 'string'
    ) {
      return null;
    }
    return parsed as WhmConsent;
  } catch {
    return null;
  }
}

export function hasMeasurementConsent(): boolean {
  const consent = getConsent();
  return Boolean(consent?.analytics || consent?.ads);
}

export function hasAdsConsent(): boolean {
  return getConsent()?.ads === true;
}
