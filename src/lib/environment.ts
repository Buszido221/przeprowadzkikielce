export const isProduction = import.meta.env.PUBLIC_SITE_ENV === 'production';
export const isStaging = !isProduction;
