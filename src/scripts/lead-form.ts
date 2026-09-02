import { ATTRIBUTION_FIELDS, captureCampaignParams, getCampaignForForm } from '../lib/campaign';
import { pushMeasurementEvent } from '../lib/measurement';

function validatePhone(value: string): boolean {
  const cleaned = value.replace(/[\s\-()]/g, '');
  return /^\+?\d{7,}$/.test(cleaned);
}

function validateEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validateForm(form: HTMLFormElement): { valid: boolean; errorType: string } {
  let valid = true;
  let firstError: HTMLElement | null = null;
  let errorType = 'validation';

  form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('[required]').forEach((field) => {
    const errorElement = form.querySelector<HTMLElement>(`[data-error-for="${field.name}"]`);
    let message = '';
    if (field.type === 'checkbox' && !(field as HTMLInputElement).checked) message = 'Wymagana zgoda';
    else if (field.type !== 'checkbox' && !field.value.trim()) message = 'To pole jest wymagane';

    if (errorElement) errorElement.textContent = message;
    field.classList.toggle('is-error', Boolean(message));
    field.setAttribute('aria-invalid', message ? 'true' : 'false');
    if (message) {
      valid = false;
      if (!firstError) {
        firstError = field;
        errorType = field.name;
      }
    }
  });

  const phoneInput = form.querySelector<HTMLInputElement>('input[name="phone"]');
  const emailInput = form.querySelector<HTMLInputElement>('input[name="email"]');
  const phoneValue = phoneInput?.value.trim() ?? '';
  const emailValue = emailInput?.value.trim() ?? '';
  const phoneError = form.querySelector<HTMLElement>('[data-error-for="phone"]');
  const emailError = form.querySelector<HTMLElement>('[data-error-for="email"]');

  if (phoneInput && emailInput && !phoneValue && !emailValue) {
    if (phoneError) phoneError.textContent = 'Podaj telefon lub e-mail';
    if (emailError) emailError.textContent = 'Podaj telefon lub e-mail';
    phoneInput.classList.add('is-error');
    emailInput.classList.add('is-error');
    phoneInput.setAttribute('aria-invalid', 'true');
    emailInput.setAttribute('aria-invalid', 'true');
    firstError = firstError || phoneInput;
    errorType = 'contact_missing';
    valid = false;
  } else {
    if (phoneInput) {
      const invalidPhone = Boolean(phoneValue && !validatePhone(phoneValue));
      if (phoneError) phoneError.textContent = invalidPhone ? 'Nieprawidłowy numer telefonu' : '';
      phoneInput.classList.toggle('is-error', invalidPhone);
      phoneInput.setAttribute('aria-invalid', invalidPhone ? 'true' : 'false');
      if (invalidPhone) {
        firstError = firstError || phoneInput;
        errorType = 'phone_invalid';
        valid = false;
      }
    }
    if (emailInput) {
      const invalidEmail = Boolean(emailValue && !validateEmail(emailValue));
      if (emailError) emailError.textContent = invalidEmail ? 'Nieprawidłowy adres e-mail' : '';
      emailInput.classList.toggle('is-error', invalidEmail);
      emailInput.setAttribute('aria-invalid', invalidEmail ? 'true' : 'false');
      if (invalidEmail) {
        firstError = firstError || emailInput;
        errorType = 'email_invalid';
        valid = false;
      }
    }
  }

  firstError?.focus();
  return { valid, errorType };
}

function generateLeadId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') return crypto.randomUUID();
  return `lead-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
}

function refreshAttributionFields(form: HTMLFormElement): void {
  captureCampaignParams();
  const currentValues = getCampaignForForm();
  for (const prefix of ['ft', 'lt']) {
    for (const field of ATTRIBUTION_FIELDS) {
      const name = `${prefix}_${field}`;
      const input = form.querySelector<HTMLInputElement>(`input[name="${name}"]`);
      if (input) input.value = currentValues[name] ?? '';
    }
  }
}

export function initLeadForms(): void {
  const forms = document.querySelectorAll<HTMLFormElement>('.lead-form__form');
  if (forms.length === 0) return;

  const serviceId = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID?.trim() ?? '';
  const templateId = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID?.trim() ?? '';
  const publicKey = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY?.trim() ?? '';
  const configured = Boolean(serviceId && templateId && publicKey);

  forms.forEach((form) => {
    if (form.dataset.initialized === 'true') return;
    form.dataset.initialized = 'true';

    const formId = form.id;
    const serviceType = form.dataset.serviceType || 'general';
    const formLocation = form.dataset.location || window.location.pathname;
    const leadContext = form.dataset.context === 'b2b' ? 'b2b' : 'b2c';
    const statusElement = form.querySelector<HTMLElement>('.lead-form__status');
    const submitButton = form.querySelector<HTMLButtonElement>('.lead-form__submit');
    const honeypot = form.querySelector<HTMLInputElement>('input[name="website"]');
    const submitLabel = submitButton?.dataset.label || 'Wyślij zapytanie';

    let formStarted = false;
    let submitting = false;
    let completed = false;
    let leadId = '';

    const setValue = (name: string, value: string) => {
      const input = form.querySelector<HTMLInputElement>(`input[name="${name}"]`);
      if (input) input.value = value;
    };

    setValue('page_url', `${window.location.origin}${window.location.pathname}`);
    setValue('page_title', document.title);
    setValue('landing_slug', window.location.pathname);
    setValue('referrer', document.referrer);
    refreshAttributionFields(form);

    const trackFormEvent = (
      event: 'lead_form_start' | 'lead_form_validation_error' | 'lead_form_submit_error',
      errorType?: string,
    ) => {
      pushMeasurementEvent({
        event,
        form_id: formId,
        service_type: serviceType,
        form_location: formLocation,
        lead_context: leadContext,
        ...(errorType ? { error_type: errorType } : {}),
      });
    };

    form.addEventListener('input', (event) => {
      if (event.target === honeypot || formStarted) return;
      formStarted = true;
      trackFormEvent('lead_form_start');
    });

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (honeypot?.value || submitting || completed) return;

      const validation = validateForm(form);
      if (!validation.valid) {
        trackFormEvent('lead_form_validation_error', validation.errorType);
        return;
      }

      if (!leadId) leadId = generateLeadId();
      setValue('lead_id', leadId);

      if (!configured) {
        if (statusElement) {
          statusElement.textContent = `Formularz nie jest obecnie skonfigurowany. Zadzwoń: ${form.dataset.phone || '720 719 022'}.`;
          statusElement.className = 'lead-form__status is-error';
        }
        trackFormEvent('lead_form_submit_error', 'configuration');
        return;
      }

      refreshAttributionFields(form);
      const now = new Date();
      setValue('submitted_at', now.toISOString());
      setValue('submitted_at_readable', now.toLocaleString('pl-PL'));

      submitting = true;
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.setAttribute('aria-busy', 'true');
        submitButton.textContent = 'Wysyłanie...';
      }
      if (statusElement) {
        statusElement.textContent = '';
        statusElement.className = 'lead-form__status';
      }

      try {
        const emailjs = (await import('@emailjs/browser')).default;
        await emailjs.sendForm(serviceId, templateId, form, publicKey);
        submitting = false;
        completed = true;

        if (statusElement) {
          statusElement.textContent = 'Dziękujemy. Zgłoszenie zostało wysłane. Skontaktujemy się na podany numer telefonu lub adres e-mail.';
          statusElement.className = 'lead-form__status is-success';
        }
        if (submitButton) {
          submitButton.removeAttribute('aria-busy');
          submitButton.textContent = 'Wysłano';
        }

        pushMeasurementEvent({
          event: 'generate_lead',
          form_id: formId,
          service_type: serviceType,
          form_location: formLocation,
          lead_context: leadContext,
          lead_id: leadId,
          event_id: leadId,
        });
      } catch {
        submitting = false;
        if (statusElement) {
          statusElement.textContent = `Nie udało się wysłać zgłoszenia. Zadzwoń pod numer ${form.dataset.phone || '720 719 022'} albo spróbuj ponownie za chwilę.`;
          statusElement.className = 'lead-form__status is-error';
        }
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.removeAttribute('aria-busy');
          submitButton.textContent = submitLabel;
        }
        trackFormEvent('lead_form_submit_error', 'emailjs');
      }
    });
  });
}

if (typeof document !== 'undefined') initLeadForms();
