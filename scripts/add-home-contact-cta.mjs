/**
 * Adds home.contactCta copy to all locale message files.
 * Run: node scripts/add-home-contact-cta.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const messagesDir = path.join(__dirname, '..', 'messages');

const COPY = {
  tr: {
    badge: 'Özünlü',
    title: 'Filonuz İçin Doğru Çözümü Birlikte Bulalım',
    description:
      "45 yılı aşkın deneyimimizle damper, yarı römork ve ekipman ihtiyaçlarınıza özel çözümler sunuyoruz.",
    imageAlt: 'Özünlü damperli yarı römork ve çekici',
  },
  en: {
    badge: 'Özünlü',
    title: "Let's Find the Right Solution for Your Fleet Together",
    description:
      'With over 45 years of experience, we deliver tailored solutions for your tipper, semi-trailer and equipment needs.',
    imageAlt: 'Özünlü tipper semi-trailer and truck',
  },
  de: {
    badge: 'Özünlü',
    title: 'Finden wir gemeinsam die richtige Lösung für Ihre Flotte',
    description:
      'Mit über 45 Jahren Erfahrung bieten wir maßgeschneiderte Lösungen für Ihren Bedarf an Kippern, Sattelanhängern und Ausrüstung.',
    imageAlt: 'Özünlü Kippsattelanhänger und Lkw',
  },
  fr: {
    badge: 'Özünlü',
    title: 'Trouvons ensemble la bonne solution pour votre flotte',
    description:
      "Avec plus de 45 ans d'expérience, nous proposons des solutions sur mesure pour vos besoins en bennes, semi-remorques et équipements.",
    imageAlt: 'Semi-remorque benne et camion Özünlü',
  },
  es: {
    badge: 'Özünlü',
    title: 'Encontremos juntos la solución adecuada para su flota',
    description:
      'Con más de 45 años de experiencia, ofrecemos soluciones a medida para sus necesidades de volquetes, semirremolques y equipamiento.',
    imageAlt: 'Semirremolque volquete y camión Özünlü',
  },
  it: {
    badge: 'Özünlü',
    title: 'Troviamo insieme la soluzione giusta per la vostra flotta',
    description:
      'Con oltre 45 anni di esperienza, offriamo soluzioni su misura per le vostre esigenze di ribaltabili, semirimorchi e attrezzature.',
    imageAlt: 'Semirimorchio ribaltabile e camion Özünlü',
  },
  ro: {
    badge: 'Özünlü',
    title: 'Să găsim împreună soluția potrivită pentru flota dumneavoastră',
    description:
      'Cu o experiență de peste 45 de ani, oferim soluții personalizate pentru nevoile dumneavoastră de basculante, semiremorci și echipamente.',
    imageAlt: 'Semiremorcă basculantă și camion Özünlü',
  },
  bg: {
    badge: 'Özünlü',
    title: 'Нека заедно намерим правилното решение за вашия автопарк',
    description:
      'С над 45 години опит предлагаме персонализирани решения за вашите нужди от самосвали, полуремаркета и оборудване.',
    imageAlt: 'Самосвално полуремарке и камион Özünlü',
  },
  ru: {
    badge: 'Özünlü',
    title: 'Найдём подходящее решение для вашего автопарка вместе',
    description:
      'Более 45 лет опыта позволяют нам предлагать индивидуальные решения для ваших потребностей в самосвалах, полуприцепах и оборудовании.',
    imageAlt: 'Самосвальный полуприцеп и тягач Özünlü',
  },
  uk: {
    badge: 'Özünlü',
    title: 'Знайдімо разом правильне рішення для вашого автопарку',
    description:
      'Маючи понад 45 років досвіду, ми пропонуємо індивідуальні рішення для ваших потреб у самоскидах, напівпричепах та обладнанні.',
    imageAlt: 'Самоскидний напівпричіп і тягач Özünlü',
  },
  ar: {
    badge: 'Özünlü',
    title: 'لنجد معًا الحل المناسب لأسطولكم',
    description:
      'بخبرة تتجاوز 45 عامًا، نقدم حلولًا مخصصة لاحتياجاتكم من القلابات وأنصاف المقطورات والمعدات.',
    imageAlt: 'نصف مقطورة قلابة وشاحنة أوزونلو',
  },
};

for (const [locale, copy] of Object.entries(COPY)) {
  const filePath = path.join(messagesDir, `${locale}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  if (!data.home) {
    console.warn(`${locale}: home namespace missing, skipped`);
    continue;
  }
  data.home.contactCta = copy;
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log(`${locale}: home.contactCta written`);
}
