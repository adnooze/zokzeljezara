// Svi podaci o klubu na jednom mjestu — ovdje se ažuriraju rezultati, igračice i raspored.

export const klub = {
  ime: 'ŽOK „Željezara“ Zenica',
  liga: 'Superliga FBiH · Grupa Jug',
  sezona: '2026/27',
  email: 'zokzeljezaraze@hotmail.com',
  instagram: 'https://www.instagram.com/zok_zeljezara/',
  pratilaca: 1082,
  lokacije: ['Prva gimnazija, Zenica', 'OŠ „MĆĆ“, Blatuša'],
};

export type Pozicija = 'Primač' | 'Libero' | 'Korektor' | 'Tehničar' | 'Srednji bloker';

export interface Igracica {
  broj: number;
  ime: string;
  prezime: string;
  pozicija: Pozicija;
  kapiten?: boolean;
  /** putanja do slike u /public, npr. '/igracice/topalovic.webp' */
  foto?: string;
}

export const igracice: Igracica[] = [
  { broj: 7, ime: 'Ana Marija', prezime: 'Topalović', pozicija: 'Primač', kapiten: true, foto: '/igracice/topalovic.webp' },
  { broj: 6, ime: 'Martina', prezime: 'Vuković', pozicija: 'Primač', foto: '/igracice/vukovic.webp' },
  { broj: 8, ime: 'Vanja', prezime: 'Vasiljević', pozicija: 'Primač', foto: '/igracice/vasiljevic.webp' },
  { broj: 9, ime: 'Amina', prezime: 'Alić', pozicija: 'Primač', foto: '/igracice/alic.webp' },
  { broj: 1, ime: 'Irma', prezime: 'Šuvalić', pozicija: 'Srednji bloker', foto: '/igracice/suvalic.webp' },
  { broj: 12, ime: 'Asja', prezime: 'Durmo', pozicija: 'Srednji bloker', foto: '/igracice/durmo.webp' },
  { broj: 4, ime: 'Hanadi', prezime: 'Dedić', pozicija: 'Srednji bloker', foto: '/igracice/dedic.webp' },
  { broj: 2, ime: 'Adna', prezime: 'Ahmić', pozicija: 'Srednji bloker', foto: '/igracice/ahmic.webp' },
  { broj: 10, ime: 'Zerina', prezime: 'Šogolj', pozicija: 'Tehničar', foto: '/igracice/sogolj.webp' },
  { broj: 11, ime: 'Ajna', prezime: 'Purić', pozicija: 'Tehničar', foto: '/igracice/puric.webp' },
  { broj: 3, ime: 'Nejra', prezime: 'Hrnjić', pozicija: 'Korektor', foto: '/igracice/hrnjic.webp' },
  { broj: 5, ime: 'Una', prezime: 'Salković', pozicija: 'Korektor', foto: '/igracice/salkovic.webp' },
  { broj: 13, ime: 'Alma', prezime: 'Osmanbegović', pozicija: 'Libero', foto: '/igracice/osmanbegovic.webp' },
  { broj: 14, ime: 'Ajna', prezime: 'Rihić', pozicija: 'Libero', foto: '/igracice/rihic.webp' },
];

export const opisPozicije: Record<Pozicija, string> = {
  Primač: 'Prva linija prijema i napad sa krila — svaki servis protivnika pretvara u našu priliku.',
  Libero: 'Specijalistica za odbranu i prijem. Lopte koje svi otpišu, ona vrati u igru.',
  Korektor: 'Napadačica s desne strane. Kad treba ključni poen, lopta ide njoj.',
  Tehničar: 'Mozak ekipe — dijeli lopte, bira napad i diktira ritam svake akcije.',
  'Srednji bloker': 'Zid na mreži. Brzi napadi kroz sredinu i blok koji zaustavlja protivnice.',
};

export const strucniStab = [
  { uloga: 'Trener ekipe', ime: 'Suljo', prezime: 'Herceg' },
  { uloga: 'Predsjednica kluba', ime: 'Senada', prezime: 'Čerimović' },
];

export const clanskeKarte = [
  { iznos: 20, naziv: 'Navijačka', motiv: 'blush' },
  { iznos: 50, naziv: 'Srce kluba', motiv: 'hot' },
  { iznos: 100, naziv: 'Porodica', motiv: 'wine' },
] as const;

export interface Utakmica {
  kolo: string;
  /** datum kako ga prikazujemo */
  datum: string;
  /** ISO datum (prvi dan kola) — koristi se za odbrojavanje */
  iso: string;
  vrijeme?: string;
  protivnik: string;
  grad: string;
  domaci: boolean;
  dvorana?: string;
  status: 'odigrano' | 'najava' | 'odgodjeno';
  /** 'pobjeda' | 'poraz' — ostaviti prazno dok rezultat nije poznat */
  ishod?: 'pobjeda' | 'poraz';
  /** rezultat iz ugla domaćina, npr. '3:0' */
  rezultat?: string;
  setovi?: string[];
}

const DOM = 'Prva gimnazija, Zenica';

export const utakmice: Utakmica[] = [
  { kolo: 'I', datum: '19/20.9.2026.', iso: '2026-09-19', protivnik: 'OK „Čelik-R“', grad: 'Zenica', domaci: false, status: 'odigrano', ishod: 'pobjeda' },
  { kolo: 'II', datum: 'Srijeda, 7.10.2026.', iso: '2026-10-07', vrijeme: '18:30', protivnik: 'OK „Astra“', grad: 'Sarajevo', domaci: true, dvorana: DOM, status: 'odigrano', ishod: 'pobjeda' },
  { kolo: 'III', datum: '4.10.2026.', iso: '2026-10-04', protivnik: 'OK „Breza 1934“', grad: 'Breza', domaci: false, status: 'odigrano', ishod: 'pobjeda', rezultat: '1:3' },
  { kolo: 'IV', datum: 'Subota, 10.10.2026.', iso: '2026-10-10', vrijeme: '14:00', protivnik: 'ŽOK „Kakanj“', grad: 'Kakanj', domaci: true, dvorana: DOM, status: 'odigrano', ishod: 'pobjeda' },
  { kolo: 'V', datum: 'Termin naknadno', iso: '2026-10-17', protivnik: 'ŽOK „Bosna“', grad: 'Sarajevo', domaci: false, status: 'odgodjeno' },
  { kolo: 'VI', datum: 'Subota, 24.10.2026.', iso: '2026-10-24', vrijeme: '13:00', protivnik: 'OK „Student“', grad: 'Mostar', domaci: true, dvorana: DOM, status: 'odigrano', ishod: 'pobjeda' },
  { kolo: 'VII', datum: 'Subota, 31.10.2026.', iso: '2026-10-31', vrijeme: '16:00', protivnik: 'OK „Ilidža“', grad: 'Ilidža', domaci: false, dvorana: 'Sportska dvorana Hrasnica', status: 'odigrano', ishod: 'poraz', rezultat: '3:0', setovi: ['25:14', '25:19', '25:20'] },
  { kolo: 'VIII', datum: '7/8.11.2026.', iso: '2026-11-07', protivnik: 'OK „Novi Grad“', grad: 'Sarajevo', domaci: true, dvorana: DOM, status: 'najava' },
  { kolo: 'IX', datum: '14/15.11.2026.', iso: '2026-11-14', protivnik: 'ŽOK „Bihać“', grad: 'Bihać', domaci: false, status: 'najava' },
  { kolo: 'X', datum: '21/22.11.2026.', iso: '2026-11-21', protivnik: 'SOK „Mostar“', grad: 'Mostar', domaci: false, status: 'najava' },
  { kolo: 'XI', datum: '28/29.11.2026.', iso: '2026-11-28', protivnik: 'HOK „Čapljina“', grad: 'Čapljina', domaci: true, dvorana: DOM, status: 'najava' },
  { kolo: 'XII', datum: '5/6.12.2026.', iso: '2026-12-05', protivnik: 'OK „Čelik-R“', grad: 'Zenica', domaci: true, dvorana: DOM, status: 'najava' },
  { kolo: 'XIII', datum: '12/13.12.2026.', iso: '2026-12-12', protivnik: 'OK „Astra“', grad: 'Sarajevo', domaci: false, status: 'najava' },
  { kolo: 'XIV', datum: '19/20.12.2026.', iso: '2026-12-19', protivnik: 'OK „Breza 1934“', grad: 'Breza', domaci: true, dvorana: DOM, status: 'najava' },
  { kolo: 'XV', datum: '20/21.2.2027.', iso: '2027-02-20', protivnik: 'ŽOK „Kakanj“', grad: 'Kakanj', domaci: false, status: 'najava' },
  { kolo: 'XVI', datum: '27/28.2.2027.', iso: '2027-02-27', protivnik: 'ŽOK „Bosna“', grad: 'Sarajevo', domaci: true, dvorana: DOM, status: 'najava' },
  { kolo: 'XVII', datum: '6/7.3.2027.', iso: '2027-03-06', protivnik: 'OK „Student“', grad: 'Mostar', domaci: false, status: 'najava' },
  { kolo: 'XVIII', datum: '13/14.3.2027.', iso: '2027-03-13', protivnik: 'OK „Ilidža“', grad: 'Ilidža', domaci: true, dvorana: DOM, status: 'najava' },
  { kolo: 'XIX', datum: '20/21.3.2027.', iso: '2027-03-20', protivnik: 'OK „Novi Grad“', grad: 'Sarajevo', domaci: false, status: 'najava' },
  { kolo: 'XX', datum: '27/28.3.2027.', iso: '2027-03-27', protivnik: 'ŽOK „Bihać“', grad: 'Bihać', domaci: true, dvorana: DOM, status: 'najava' },
  { kolo: 'XXI', datum: '3/4.4.2027.', iso: '2027-04-03', protivnik: 'SOK „Mostar“', grad: 'Mostar', domaci: true, dvorana: DOM, status: 'najava' },
  { kolo: 'XXII', datum: '10/11.4.2027.', iso: '2027-04-10', protivnik: 'HOK „Čapljina“', grad: 'Čapljina', domaci: false, status: 'najava' },
];

export const odigrane = utakmice.filter((u) => u.status === 'odigrano');
export const nadolazece = utakmice.filter((u) => u.status === 'najava');
export const odgodjene = utakmice.filter((u) => u.status === 'odgodjeno');
export const pobjede = odigrane.filter((u) => u.ishod === 'pobjeda').length;
export const porazi = odigrane.filter((u) => u.ishod === 'poraz').length;

/** Inicijali protivnika za mali grb, npr. OK „Novi Grad“ → NG */
export function inicijali(naziv: string) {
  const ime = naziv.match(/„(.+)“/)?.[1] ?? naziv;
  const rijeci = ime.replace(/[-\d]/g, ' ').split(/\s+/).filter(Boolean);
  return rijeci.length > 1 ? (rijeci[0][0] + rijeci[1][0]).toUpperCase() : ime.slice(0, 2).toUpperCase();
}
