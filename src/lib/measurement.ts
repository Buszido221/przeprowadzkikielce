import { hasMeasurementConsent } from './consent';

export const MEASUREMENT_EVENTS = [
  'phone_click',
  'sms_click',
  'email_click',
  'cta_click',
  'whm_shop_click',
  'lead_form_start',
  'lead_form_validation_error',
  'lead_form_submit_error',
  'generate_lead',
] as const;

export type MeasurementEvent = (typeof MEASUREMENT_EVENTS)[number];

export interface MeasurementPayload {
  event: MeasurementEvent;
  interaction_location?: string;
  destination_type?: 'phone' | 'sms' | 'email' | 'internal_form' | 'internal_page' | 'external_shop' | 'external';
  cta_id?: string;
  form_id?: string;
  service_type: string;
  form_location?: string;
  lead_context: 'b2c' | 'b2b';
  error_type?: string;
  lead_id?: string;
  event_id?: string;
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown> | IArguments>;
  }
}

export function pushMeasurementEvent(payload: MeasurementPayload): boolean {
  if (typeof window === 'undefined' || !hasMeasurementConsent()) return false;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ ...payload });
  return true;
}
