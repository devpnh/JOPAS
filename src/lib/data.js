// asset helper — funguje pod GitHub Pages base ('./')
const BASE = import.meta.env.BASE_URL;
export const asset = (p) => `${BASE}${p.replace(/^\//, '')}`;

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

export const FACTS = [
  { k: 'V regióne', v: 'vyše 20 rokov' },
  { k: 'Sídlo', v: 'Michalovce' },
  { k: 'Pôsobnosť', v: 'Košický a Prešovský kraj' },
];

export const BRANDS = ['Protherm', 'Viessmann', 'Vaillant', 'Korad', 'Korado'];

export const SERVICES = [
  { n: '01', icon: 'Droplet', title: 'Voda a rozvody', text: 'Nové rozvody vody, prípojky, opravy a výmena ventilov — vnútri domu aj po dvore. Tak, aby to roky držalo a nekvapkalo.' },
  { n: '02', icon: 'Waves', title: 'Kanalizácia', text: 'Vnútorná aj vonkajšia kanalizácia, od pripojenia po celý rozvod. Aby odtekalo, čo má, a nezapáchalo, čo nemá.' },
  { n: '03', icon: 'Thermometer', title: 'Kúrenie', text: 'Podlahové aj radiátorové. Navrhneme rozvod, namontujeme a oživíme. Opravíme aj staré ústredné kúrenie.' },
  { n: '04', icon: 'Flame', title: 'Kotly', text: 'Plynové, elektrické aj na tuhé palivo. Výmena starého za nový, napojenie a spustenie. Protherm, Viessmann, Vaillant.' },
  { n: '05', icon: 'ShowerHead', title: 'Sanita', text: 'Umývadlá, vane, sprchy, WC, batérie. Pri rekonštrukcii kúpeľne aj pri obyčajnej výmene. Sedí to a tesní to.' },
  { n: '06', icon: 'Wrench', title: 'Havárie a opravy', text: 'Prasknuté potrubie, zatekajúci spoj, kotol čo cez noc vypol. Nájdeme príčinu a opravíme ju.' },
];

// Realizácie — reálne fotky z pôvodného webu JOPAS.
export const PROJECTS = [
  { img: 'img/kurenie-1.jpg', cat: 'Kúrenie', caption: 'Kotol a ohrev teplej vody' },
  { img: 'img/voda-1.jpg', cat: 'Voda', caption: 'Domové rozvody vody' },
  { img: 'img/sanita-2.jpg', cat: 'Kanalizácia', caption: 'Vonkajšia kanalizácia' },
  { img: 'img/kurenie-3.jpg', cat: 'Kúrenie', caption: 'Rozvody ústredného kúrenia' },
  { img: 'img/voda-2.jpg', cat: 'Voda', caption: 'Vodovodné rozvody' },
  { img: 'img/sanita-3.jpg', cat: 'Sanita', caption: 'Montáž zariaďovacích predmetov' },
  { img: 'img/kurenie-4.jpg', cat: 'Kúrenie', caption: 'Kotolňa' },
  { img: 'img/voda-4.jpg', cat: 'Voda', caption: 'Prípojka vody' },
];

export const REVIEWS = [
  { text: 'Praskla nám voda pod kuchyňou a prišli ešte v ten istý deň. Opravili rýchlo, čisto a cenu povedali dopredu. Žiadne prekvapenie na konci.', name: 'Pán Kováč', city: 'Michalovce' },
  { text: 'Robili nám celé podlahové kúrenie v novostavbe. Poradili pri výbere kotla a termín dodržali do dňa. Konečne firma, čo spraví to, čo povie.', name: 'Rodina Hrešková', city: 'Sobrance' },
  { text: 'Menili starý kotol za nový. Slušní chlapi, po sebe upratali a vysvetlili, ako to ovládať. Vidno, že to robia roky.', name: 'Pani Tomková', city: 'Trebišov' },
];

export const CITIES = ['Michalovce', 'Sobrance', 'Trebišov', 'Vranov nad Topľou', 'Strážske', 'Humenné', 'Snina', 'Veľké Kapušany'];

export const WHY = [
  { title: 'Sme odtiaľto', text: 'Z Michaloviec, nie firma odniekiaľ. Robotu v regióne poznáme a vieme sa k vám dostať.' },
  { title: 'Cenu povieme dopredu', text: 'Po obhliadke dostanete cenu, ktorá platí. Bez dorábaných položiek na faktúre.' },
  { title: 'Príde ten, s kým ste sa dohodli', text: 'Žiadne odovzdávanie cudzím partiám. Robíme to, čo sme sľúbili, a stojíme si za tým.' },
  { title: 'Na prácu dávame záruku', text: 'Keď niečo namontujeme alebo opravíme, ručíme za to. Je to naša najlepšia reklama.' },
];

// Dokumenty (PDF) — prevzaté z pôvodného webu (EÚ projekt / prieskum trhu).
export const DOCS = [
  { title: 'Projekt – Vybavenie podniku', file: 'dokumenty/projekt-vybavenie-podniku.pdf' },
  { title: 'Záznam z prieskumu trhu', file: 'dokumenty/zaznam-z-prieskumu-trhu.pdf' },
];
