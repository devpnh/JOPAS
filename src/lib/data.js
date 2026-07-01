// asset helper — funguje pod GitHub Pages base ('./')
const BASE = import.meta.env.BASE_URL;
export const asset = (p) => `${BASE}${p.replace(/^\//, '')}`;

export const PHONE = '+421 915 900 595';
export const PHONE_HREF = 'tel:+421915900595';
export const EMAIL = 'jopas.sro@gmail.com';

export const NAV = [
  { label: 'Služby', href: '#sluzby' },
  { label: 'Ako to prebieha', href: '#proces' },
  { label: 'Realizácie', href: '#realizacie' },
  { label: 'Recenzie', href: '#recenzie' },
  { label: 'Oblasti', href: '#oblasti' },
  { label: 'Kontakt', href: '#kontakt' },
];

// mikro-fakty do hero
export const FACTS = [
  { k: 'V regióne', v: 'vyše 20 rokov' },
  { k: 'Sídlo', v: 'Michalovce' },
  { k: 'Pôsobnosť', v: 'Košický a Prešovský kraj' },
];

// trust pás — count-up kde má číslo, inak text
export const STATS = [
  { num: 20, suffix: '+', label: 'rokov roboty v regióne' },
  { text: 'stovky', label: 'hotových realizácií' },
  { num: 2, label: 'kraje — Košický a Prešovský' },
  { num: 100, suffix: ' %', label: 'prác so zárukou' },
];

export const BRANDS = ['Protherm', 'Viessmann', 'Vaillant', 'Korad', 'Korado'];

// cinematic vizuály (Higgsfield) — atmosféra + predely
export const CINE = {
  heroVideo: asset('img/cinematic/hero.webm'),
  heroVideoMp4: asset('img/cinematic/hero.mp4'),
  heroPoster: asset('img/cinematic/hero.webp'),
  voda: asset('img/cinematic/voda.webp'),
  kurenie: asset('img/cinematic/kurenie.webp'),
  kotol: asset('img/cinematic/kotol.webp'),
  ruky: asset('img/cinematic/ruky.webp'),
  sanita: asset('img/cinematic/sanita.webp'),
  boiler2: asset('img/cinematic/boiler2.webp'),
};

// tint: 'steel' = voda, 'copper' = teplo/kúrenie
export const SERVICES = [
  { n: '01', title: 'Voda a rozvody', tint: 'steel', img: CINE.voda,
    text: 'Rozvody vody, prípojky, opravy a výmena ventilov — v dome aj po dvore.' },
  { n: '02', title: 'Kanalizácia', tint: 'steel', img: CINE.boiler2,
    text: 'Vnútorná aj vonkajšia kanalizácia, od pripojenia po kompletný rozvod.' },
  { n: '03', title: 'Kúrenie', tint: 'copper', img: CINE.kurenie,
    text: 'Podlahové aj radiátorové — návrh, montáž a oprava ústredného kúrenia.' },
  { n: '04', title: 'Kotly', tint: 'copper', img: CINE.kotol,
    text: 'Plynové, elektrické aj na tuhé palivo. Výmena, napojenie a spustenie — Protherm, Viessmann, Vaillant.' },
  { n: '05', title: 'Sanita', tint: 'steel', img: CINE.sanita,
    text: 'Umývadlá, vane, sprchy, WC a batérie — pri rekonštrukcii aj bežnej výmene.' },
  { n: '06', title: 'Havárie a opravy', tint: 'copper', img: CINE.ruky,
    text: 'Prasknuté potrubie, netesniaci spoj, nefunkčný kotol. Nájdeme príčinu a opravíme.' },
];

// Havarijný blok
export const EMERGENCY = {
  title: 'Havária? Volajte hneď.',
  text: 'Prasklo potrubie, vytápa vás voda alebo v zime nejde kúrenie? Zavolajte — ozveme sa hneď a prídeme, ako to najskôr pôjde. Dostupní cez deň, v súrnych prípadoch sa snažíme pomôcť aj mimo.',
};

// Ako to prebieha
export const PROCESS = [
  { n: '01', title: 'Zavoláte', text: 'Poviete, čo treba. Poradíme rovno do telefónu a dohodneme obhliadku.' },
  { n: '02', title: 'Prídeme a povieme cenu', text: 'Pozrieme robotu na mieste a dáme cenu, ktorá platí. Žiadne dorábané položky na faktúre.' },
  { n: '03', title: 'Dohodneme termín', text: 'Poviete kedy, my prídeme kedy sme sľúbili. Príde ten, s kým ste sa dohodli.' },
  { n: '04', title: 'Spravíme a dáme záruku', text: 'Odvedieme robotu poriadne, po sebe upraceme a na prácu dáme záruku.' },
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

export const CITIES = [
  { name: 'Michalovce', lat: 48.7547, lng: 21.9190, home: true },
  { name: 'Sobrance', lat: 48.7447, lng: 22.1817 },
  { name: 'Trebišov', lat: 48.6253, lng: 21.7197 },
  { name: 'Vranov nad Topľou', lat: 48.8881, lng: 21.6831 },
  { name: 'Strážske', lat: 48.8703, lng: 21.8389 },
  { name: 'Humenné', lat: 48.9389, lng: 21.9147 },
  { name: 'Snina', lat: 48.9886, lng: 22.1517 },
  { name: 'Veľké Kapušany', lat: 48.5436, lng: 22.0869 },
];

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
