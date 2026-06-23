export const PHONE = '+421 915 900 595';
export const PHONE_HREF = 'tel:+421915900595';
export const EMAIL = 'jopas.sro@gmail.com';

export const NAV = [
  { label: 'Služby', href: '#sluzby' },
  { label: 'Realizácie', href: '#realizacie' },
  { label: 'Recenzie', href: '#recenzie' },
  { label: 'Oblasti', href: '#oblasti' },
  { label: 'Prečo JOPAS', href: '#preco' },
  { label: 'Kontakt', href: '#kontakt' },
];

// Krátke fakty do hero „spec" stĺpca — vecné, bez výmyslov.
export const FACTS = [
  { k: 'V regióne', v: 'vyše 20 rokov' },
  { k: 'Sídlo', v: 'Michalovce' },
  { k: 'Pôsobnosť', v: 'Košický a Prešovský kraj' },
  { k: 'Cena', v: 'dohodnutá vopred' },
];

export const BRANDS = ['Protherm', 'Viessmann', 'Vaillant', 'Korad', 'Korado'];

export const SERVICES = [
  {
    n: '01', icon: 'Droplet', title: 'Voda a rozvody',
    text: 'Nové rozvody vody, prípojky, opravy a výmena ventilov — vnútri domu aj po dvore. Spravíme to tak, aby to roky držalo a nekvapkalo.',
  },
  {
    n: '02', icon: 'Waves', title: 'Kanalizácia',
    text: 'Vnútorná aj vonkajšia kanalizácia, od pripojenia po celý rozvod. Aby odtekalo, čo má, a nezapáchalo, čo nemá.',
  },
  {
    n: '03', icon: 'Thermometer', title: 'Kúrenie',
    text: 'Podlahové aj radiátorové. Navrhneme rozvod, namontujeme a oživíme. Opravíme aj staré ústredné kúrenie, keď prestane hriať.',
  },
  {
    n: '04', icon: 'Flame', title: 'Kotly',
    text: 'Plynové, elektrické aj na tuhé palivo. Výmena starého za nový, napojenie a spustenie. Protherm, Viessmann, Vaillant — dodáme aj namontujeme.',
  },
  {
    n: '05', icon: 'ShowerHead', title: 'Sanita',
    text: 'Umývadlá, vane, sprchy, WC, batérie. Pri rekonštrukcii kúpeľne aj pri obyčajnej výmene. Sedí to, tesní to a funguje to.',
  },
  {
    n: '06', icon: 'Wrench', title: 'Havárie a opravy',
    text: 'Prasknuté potrubie, zatekajúci spoj, kotol čo cez noc vypol. Nájdeme príčinu a opravíme ju skôr, než narobí škodu.',
  },
];

// Realizácie ako reálny „log" — varíruje veľkosť, technické metadáta.
export const PROJECTS = [
  { id: 'R-01', tone: 'copper', size: 'tall', type: 'Výmena kotla', city: 'Michalovce', year: '2024', text: 'Starý plynový kotol za nový Vaillant — demontáž, napojenie, spustenie. Hotové za dva dni.' },
  { id: 'R-02', tone: 'steel', size: 'wide', type: 'Podlahové kúrenie', city: 'Sobrance', year: '2023', text: 'Kompletný rozvod podlahového kúrenia v novostavbe vrátane rozdeľovačov a tlakovej skúšky.' },
  { id: 'R-03', tone: 'petrol', size: 'std', type: 'Rekonštrukcia kúpeľne', city: 'Trebišov', year: '2023', text: 'Nové rozvody vody a odpadu, vaňa, sprcha, WC a batérie — na kľúč.' },
  { id: 'R-04', tone: 'graphite', size: 'std', type: 'Rozvody vody a kanalizácia', city: 'Michalovce', year: '2022', text: 'Celý nový rozvod vody a kanalizácie v rodinnom dome, vnútri aj po pozemku.' },
  { id: 'R-05', tone: 'copper', size: 'wide', type: 'Radiátory Korado', city: 'Strážske', year: '2024', text: 'Výmena starých radiátorov za Korado vrátane ventilov a regulácie.' },
];

export const REVIEWS = [
  { text: 'Praskla nám voda pod kuchyňou a prišli ešte v ten istý deň. Opravili rýchlo, čisto a cenu povedali dopredu. Žiadne prekvapenie na konci.', name: 'Pán Kováč', city: 'Michalovce' },
  { text: 'Robili nám celé podlahové kúrenie v novostavbe. Poradili pri výbere kotla a termín dodržali do dňa. Konečne firma, čo spraví to, čo povie.', name: 'Rodina Hrešková', city: 'Sobrance' },
  { text: 'Menili starý kotol za nový. Slušní chlapi, po sebe upratali a vysvetlili, ako to ovládať. Vidno, že to robia roky.', name: 'Pani Tomková', city: 'Trebišov' },
];

export const CITIES = ['Michalovce', 'Sobrance', 'Trebišov', 'Vranov nad Topľou', 'Strážske', 'Humenné', 'Snina', 'Veľké Kapušany'];

// Prečo JOPAS — vecné body, žiadne klišé.
export const WHY = [
  { n: '01', title: 'Sme odtiaľto', text: 'Z Michaloviec, nie firma odniekiaľ. Robotu v regióne poznáme a vieme sa k vám dostať.' },
  { n: '02', title: 'Cenu povieme dopredu', text: 'Po obhliadke dostanete cenu, ktorá platí. Bez dorábaných položiek na faktúre.' },
  { n: '03', title: 'Príde ten, s kým ste sa dohodli', text: 'Žiadne odovzdávanie cudzím partiám. Robíme to, čo sme sľúbili, a stojíme si za tým.' },
  { n: '04', title: 'Na prácu dávame záruku', text: 'Keď niečo namontujeme alebo opravíme, ručíme za to. Je to naša najlepšia reklama.' },
];
