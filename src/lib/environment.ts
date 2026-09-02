export const siteEnvironment = import.meta.env.PUBLIC_SITE_ENV === 'production' ? 'production' : 'staging';
export const isProduction = siteEnvironment === 'production';
export const isStaging = !isProduction;

export const gtmId = import.meta.env.PUBLIC_GTM_ID?.trim() ?? '';
export const hasValidGtmId = /^GTM-[A-Z0-9]+$/.test(gtmId);
export const measurementEnabled = isProduction && hasValidGtmId;
