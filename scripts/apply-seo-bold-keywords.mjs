import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const dir = join(dirname(fileURLToPath(import.meta.url)), '..', 'messages');

const localeKeywords = {
  tr: [
    'yarı römork', 'satış sonrası', 'yetkili servis', 'ağır ticari araç', 'üst yapı',
    'hidrolik sistem', 'Hardox', 'mühendislik', 'Özkoç', 'damper', 'çelik', 'hidrolik', 'üretim', 'BPW',
  ],
  en: [
    'semi-trailer', 'after-sales', 'authorized service', 'heavy commercial vehicle', 'superstructure',
    'hydraulic system', 'Hardox', 'engineering', 'Özkoç', 'tipper', 'steel', 'hydraulic', 'production', 'BPW',
  ],
  de: [
    'Kundendienst', 'Schwerlastfahrzeug', 'Hydrauliksystem', 'Sattelanhänger', 'Stahlverarbeitung',
    'Hardox', 'Ingenieurwesen', 'Özkoç', 'Kipper', 'Aufbau', 'Hydraulik', 'BPW',
  ],
  bg: [
    'следпродажно обслужване', 'тежкотоварно превозно средство', 'хидравлична система',
    'полуремарке', 'надстройка', 'Hardox', 'самосвал', 'стомана', 'хидравлика', 'BPW',
  ],
  ro: [
    'service post-vânzare', 'vehicul comercial greu', 'sistem hidraulic', 'semiremorcă',
    'suprastructură', 'Hardox', 'basculantă', 'oțel', 'hidraulică', 'BPW',
  ],
  ar: [
    'ما بعد البيع', 'مركبة تجارية ثقيلة', 'نظام هيدروليكي', 'نصف مقطورة', 'هيكل علوي',
    'Hardox', 'قلاب', 'فولاذ', 'هيدروليك', 'BPW',
  ],
  fr: [
    'service après-vente', 'véhicule utilitaire lourd', 'système hydraulique', 'semi-remorque',
    'superstructure', 'Hardox', 'benne', 'acier', 'hydraulique', 'BPW',
  ],
  es: [
    'servicio posventa', 'vehículo comercial pesado', 'sistema hidráulico', 'semirremolque',
    'superestructura', 'Hardox', 'volquete', 'acero', 'hidráulica', 'BPW',
  ],
  ru: [
    'послепродажное обслуживание', 'тяжёлых коммерческих автомобилей', 'гидравлическ',
    'полуприцеп', 'надстройк', 'Hardox', 'самосвал', 'сталь', 'гидравлик', 'сервис', 'BPW', 'производств',
  ],
  uk: [
    'післяпродажне обслуговування', 'важких комерційних автомобілів', 'гідравлічн',
    'напівпричіп', 'надбудов', 'Hardox', 'самоскид', 'сталь', 'гідравлік', 'сервіс', 'BPW', 'виробництв',
  ],
};

const targetPaths = [
  'common.footer.about',
  'home.hero.subtitle',
  'home.about.paragraph1',
  'home.about.paragraph2',
  'home.damperHero.description',
  'home.trailerHero.description',
  'home.equipmentHero.description',
  'home.partners.description',
  'home.mapPreview.description',
  'home.products.subtitle',
  'home.products.items.damper.description',
  'home.products.items.dorse.description',
  'home.products.items.kar.description',
  'home.whyChooseUs.features.0',
  'home.whyChooseUs.features.1',
  'home.whyChooseUs.features.2',
  'home.whyChooseUs.features.3',
  'home.whyChooseUs.features.4',
  'home.whyChooseUs.features.5',
  'home.whyChooseUs.features.6',
  'damper.hero.description',
  'damper.features.item01Content',
  'damper.features.item02Content',
  'damper.features.item03Content',
  'yariRomork.hero.description',
  'yariRomork.features.item01Content',
  'yariRomork.features.item02Content',
  'yariRomork.features.item03Content',
  'ekEkipmanlar.hero.description',
  'ekEkipmanlar.performance.description',
  'afterSales.hero.description',
  'afterSales.services.servisAgi.description',
  'afterSales.services.yedekParca.description',
  'afterSales.services.garanti.description',
  'afterSales.services.teknikDestek.description',
  'afterSales.documents.description',
  'corporate.hero.description',
  'corporate.values.trust.desc',
  'corporate.values.quality.desc',
  'corporate.values.innovation.desc',
  'corporate.values.speed.desc',
  'corporate.facilities.description',
];

function getByPath(obj, path) {
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
}

function setByPath(obj, path, value) {
  const keys = path.split('.');
  let current = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    if (!current[keys[i]]) current[keys[i]] = {};
    current = current[keys[i]];
  }
  current[keys[keys.length - 1]] = value;
}

function stripStrong(text) {
  if (typeof text !== 'string') return text;
  return text
    .replace(/<\/?strong>/g, '')
    .replace(/hardox><\/hardox>/g, 'hardox></hardox>')
    .replace(/<h([^<]*)ardox><\/hardox>/g, '<hardox></hardox>')
    .replace(/h<strong>ardox><\/strong><\/hardox>/g, '<hardox></hardox>')
    .replace(/<h<strong>ardox><\/strong><\/hardox>/g, '<hardox></hardox>');
}

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function isSafeMatch(segment, idx, keywordLen) {
  const before = idx > 0 ? segment[idx - 1] : ' ';
  const after = idx + keywordLen < segment.length ? segment[idx + keywordLen] : ' ';
  const letter = /[a-zA-Zà-žÀ-Žа-яА-ЯёЁıİğĞşŞöÖüÜçÇ\u0600-\u06FF]/;
  if (letter.test(before) && letter.test(segment[idx])) return false;
  if (letter.test(segment[idx + keywordLen - 1]) && letter.test(after)) return false;
  return true;
}

function wrapKeywordsTagAware(text, keywords) {
  if (typeof text !== 'string') return text;

  const cleaned = stripStrong(text);
  const parts = cleaned.split(/(<[^>]+>)/g);

  for (let i = 0; i < parts.length; i++) {
    if (parts[i].startsWith('<')) continue;

    let segment = parts[i];
    if (segment.includes('<strong>')) continue;

    for (const keyword of keywords) {
      const lower = segment.toLowerCase();
      const kwLower = keyword.toLowerCase();
      let searchFrom = 0;

      while (searchFrom < lower.length) {
        const idx = lower.indexOf(kwLower, searchFrom);
        if (idx === -1) break;
        if (!isSafeMatch(segment, idx, keyword.length)) {
          searchFrom = idx + 1;
          continue;
        }
        const actual = segment.slice(idx, idx + keyword.length);
        segment =
          segment.slice(0, idx) +
          `<strong>${actual}</strong>` +
          segment.slice(idx + keyword.length);
        break;
      }
    }
    parts[i] = segment;
  }

  return parts.join('');
}

const locales = readdirSync(dir)
  .filter((f) => f.endsWith('.json'))
  .map((f) => f.replace('.json', ''));

for (const locale of locales) {
  const file = join(dir, `${locale}.json`);
  const data = JSON.parse(readFileSync(file, 'utf8'));
  const keywords = localeKeywords[locale];
  if (!keywords) {
    console.warn(`No keywords for ${locale}, skipping`);
    continue;
  }

  let count = 0;
  for (const path of targetPaths) {
    const value = getByPath(data, path);
    if (typeof value !== 'string') continue;
    const wrapped = wrapKeywordsTagAware(value, keywords);
    if (wrapped !== value) {
      setByPath(data, path, wrapped);
      count++;
    }
  }

  writeFileSync(file, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log(`${locale}.json — ${count} fields updated`);
}
