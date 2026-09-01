export const site = {
  brand: 'WHM Przeprowadzki',
  legalName: 'WHM TRANSPORT MATEUSZ KONDERA',
  owner: 'Mateusz Kondera',
  nip: '9591920724',
  phone: '+48 720 719 022',
  phoneRaw: '+48720719022',
  email: 'kontakt@whmprzeprowadzkikielce.pl',
  domain: 'https://przeprowadzkikielce.pl/',
  tagline: 'Przeprowadzki, którym możesz zaufać.',

  address: {
    label: 'Adres operacyjny (biuro, sklep, magazyn)',
    street: 'Lotnicza 60A',
    postalCode: '26-001',
    city: 'Masłów Pierwszy',
    full: 'Lotnicza 60A, 26-001 Masłów Pierwszy',
  },

  registeredAddress: {
    label: 'Adres rejestrowy (wyłącznie dokumenty prawne)',
    street: 'Nowy Świat 44a/14',
    postalCode: '25-522',
    city: 'Kielce',
    full: 'Nowy Świat 44a/14, 25-522 Kielce',
  },

  hours: {
    weekdays: '8:00–20:00',
    saturday: '8:00–18:00',
    note: 'Wizyta w biurze, sklepie lub magazynie wymaga wcześniejszego kontaktu telefonicznego.',
  },
} as const;
