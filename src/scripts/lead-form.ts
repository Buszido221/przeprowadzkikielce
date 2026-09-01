import { getCampaignFromStorage, captureCampaignParams, CAMPAIGN_KEYS } from '../lib/campaign';

function validatePhone(val: string): boolean {
  const cleaned = val.replace(/[\s\-()]/g, '');
  if (!cleaned) return false;
  if (/^\+\d{6,}$/.test(cleaned)) return true;
  if (/^\d{7,}$/.test(cleaned)) return true;
  return false;
}

function validateEmail(val: string): boolean {
  if (!val) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
}

function validateForm(form: HTMLFormElement): boolean {
  let valid = true;
  let firstError: HTMLElement | null = null;

  form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('[required]').forEach((field) => {
    const errorEl = form.querySelector(`[data-error-for="${field.name}"]`) as HTMLElement;
    let errorMsg = '';

    if (field.type === 'checkbox') {
      if (!(field as HTMLInputElement).checked) errorMsg = 'Wymagana zgoda';
    } else if (!field.value.trim()) {
      errorMsg = 'To pole jest wymagane';
    }

    if (errorEl) errorEl.textContent = errorMsg;
    field.classList.toggle('is-error', Boolean(errorMsg));
    field.setAttribute('aria-invalid', errorMsg ? 'true' : 'false');
    if (errorMsg && !firstError) {
      firstError = field;
      valid = false;
    }
  });

  const phoneInput = form.querySelector('input[name="phone"]') as HTMLInputElement;
  const emailInput = form.querySelector('input[name="email"]') as HTMLInputElement;
  const phoneVal = phoneInput?.value.trim() || '';
  const emailVal = emailInput?.value.trim() || '';

  const phoneError = form.querySelector('[data-error-for="phone"]') as HTMLElement;
  const emailError = form.querySelector('[data-error-for="email"]') as HTMLElement;

  if (!phoneVal && !emailVal) {
    if (phoneError) phoneError.textContent = 'Podaj telefon lub e-mail';
    if (emailError) emailError.textContent = 'Podaj telefon lub e-mail';
    phoneInput.classList.add('is-error');
    emailInput.classList.add('is-error');
    phoneInput.setAttribute('aria-invalid', 'true');
    emailInput.setAttribute('aria-invalid', 'true');
    if (!firstError) firstError = phoneInput;
    valid = false;
  } else {
    if (phoneVal && !validatePhone(phoneVal)) {
      if (phoneError) phoneError.textContent = 'Nieprawidłowy numer telefonu';
      phoneInput.classList.add('is-error');
      phoneInput.setAttribute('aria-invalid', 'true');
      if (!firstError) firstError = phoneInput;
      valid = false;
    } else {
      if (phoneError) phoneError.textContent = '';
      phoneInput.classList.remove('is-error');
      phoneInput.setAttribute('aria-invalid', 'false');
    }
    if (emailVal && !validateEmail(emailVal)) {
      if (emailError) emailError.textContent = 'Nieprawidłowy adres e-mail';
      emailInput.classList.add('is-error');
      emailInput.setAttribute('aria-invalid', 'true');
      if (!firstError) firstError = emailInput;
      valid = false;
    } else {
      if (emailError) emailError.textContent = '';
      emailInput.classList.remove('is-error');
      emailInput.setAttribute('aria-invalid', 'false');
    }
  }

  if (firstError) (firstError as HTMLElement).focus();
  return valid;
}

export function initLeadForms(): void {
  const forms = document.querySelectorAll<HTMLFormElement>('.lead-form__form');
  if (forms.length === 0) return;

  const SERVICE_ID = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID ?? '';
  const TEMPLATE_ID = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID ?? '';
  const PUBLIC_KEY = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY ?? '';
  const configured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

  forms.forEach((form) => {
    if (form.dataset.initialized === 'true') return;
    form.dataset.initialized = 'true';

    const formId = form.id;
    const serviceType = form.dataset.serviceType || '';
    const formLocation = form.dataset.location || '';
    const formContext = form.dataset.context || 'consumer';

    const statusEl = form.querySelector('.lead-form__status') as HTMLElement;
    const submitBtn = form.querySelector('.lead-form__submit') as HTMLButtonElement;
    const honeypot = form.querySelector('input[name="website"]') as HTMLInputElement;
    const submitLabel = submitBtn?.dataset.label || 'Wyślij zapytanie';

    let formStarted = false;
    const renderTime = Date.now();

    const pageUrlInput = form.querySelector('input[name="page_url"]') as HTMLInputElement;
    if (pageUrlInput) pageUrlInput.value = window.location.href;
    const pageTitleInput = form.querySelector('input[name="page_title"]') as HTMLInputElement;
    if (pageTitleInput) pageTitleInput.value = document.title;
    const slugInput = form.querySelector('input[name="landing_slug"]') as HTMLInputElement;
    if (slugInput) slugInput.value = window.location.pathname;
    const referrerInput = form.querySelector('input[name="referrer"]') as HTMLInputElement;
    if (referrerInput) referrerInput.value = document.referrer;
    const submittedAtInput = form.querySelector('input[name="submitted_at"]') as HTMLInputElement;
    const submittedReadableInput = form.querySelector('input[name="submitted_at_readable"]') as HTMLInputElement;

    captureCampaignParams();
    const campaign = getCampaignFromStorage();
    CAMPAIGN_KEYS.forEach((f) => {
      const input = form.querySelector(`input[name="${f}"]`) as HTMLInputElement;
      if (input && campaign[f]) input.value = campaign[f];
    });

    function trackEvent(eventName: string, params: Record<string, string> = {}): void {
      const detail = { event: eventName, formId, serviceType, formLocation, formContext, ...params };
      document.dispatchEvent(new CustomEvent('whm:analytics', { detail }));
    }

    form.addEventListener('input', () => {
      if (!formStarted) {
        formStarted = true;
        trackEvent('form_start');
      }
    });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (honeypot && honeypot.value) return;
      if (submitBtn.disabled) return;

      if (!validateForm(form)) return;

      const elapsed = Date.now() - renderTime;
      if (elapsed < 1500) return;

      if (!configured) {
        statusEl.textContent = 'Formularz nie jest jeszcze podłączony. Zadzwoń: 720 719 022.';
        statusEl.className = 'lead-form__status is-error';
        return;
      }

      submitBtn.disabled = true;
      submitBtn.setAttribute('aria-busy', 'true');
      submitBtn.textContent = 'Wysyłanie...';
      statusEl.textContent = '';
      statusEl.className = 'lead-form__status';

      const now = new Date();
      if (submittedAtInput) submittedAtInput.value = now.toISOString();
      if (submittedReadableInput) submittedReadableInput.value = now.toLocaleString('pl-PL');

      try {
        const emailjs = (await import('@emailjs/browser')).default;
        await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);

        statusEl.textContent = 'Dziękujemy. Zgłoszenie zostało wysłane. Skontaktujemy się na podany numer telefonu lub adres e-mail.';
        statusEl.className = 'lead-form__status is-success';
        submitBtn.textContent = 'Wysłano';

        document.dispatchEvent(new CustomEvent('whm:form_success', { detail: { formId, serviceType, formLocation, formContext } }));
      } catch {
        statusEl.textContent = 'Nie udało się wysłać zgłoszenia. Zadzwoń pod numer 720 719 022 albo spróbuj ponownie za chwilę.';
        statusEl.className = 'lead-form__status is-error';
        submitBtn.disabled = false;
        submitBtn.removeAttribute('aria-busy');
        submitBtn.textContent = submitLabel;

        trackEvent('form_submit_error', { service_type: serviceType });
      }
    });
  });
}

if (typeof document !== 'undefined') {
  initLeadForms();
}
