/**
 * Updates yariRomork.items.{l500,g22,m21}.description across locale files.
 * Run: node scripts/update-trailer-item-descriptions.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const messagesDir = path.join(__dirname, '..', 'messages');

const COPY = {
  en: {
    l500: '<hardox></hardox> steel body and reinforced chassis structure deliver long-lasting, high-performance transport in the toughest field conditions.',
    g22: 'High-volume body design and durable axle system make it the reliable solution for long-distance heavy-duty transport.',
    m21: 'Lightweight body structure enables more payload per trip and efficient transport with low operating costs.',
  },
  de: {
    l500: '<hardox></hardox>-Stahlaufbau und verstärkte Chassisstruktur sorgen für langlebigen, leistungsstarken Transport unter härtesten Einsatzbedingungen.',
    g22: 'Großvolumiges Aufbaudesign und robustes Achssystem machen ihn zur zuverlässigen Lösung für den Schwerlast-Ferntransport.',
    m21: 'Die leichte Aufbaustruktur ermöglicht mehr Nutzlast pro Fahrt und effizienten Transport bei niedrigen Betriebskosten.',
  },
  fr: {
    l500: "La caisse en acier <hardox></hardox> et la structure de châssis renforcée offrent un transport durable et performant dans les conditions de terrain les plus difficiles.",
    g22: "La caisse à grand volume et le système d'essieux robuste en font la solution fiable pour le transport lourd longue distance.",
    m21: "La structure de caisse allégée permet plus de charge utile par trajet et un transport efficace à faibles coûts d'exploitation.",
  },
  es: {
    l500: 'La caja de acero <hardox></hardox> y la estructura de chasis reforzada ofrecen un transporte duradero y de alto rendimiento en las condiciones de campo más exigentes.',
    g22: 'El diseño de caja de gran volumen y el sistema de ejes resistente lo convierten en la solución fiable para el transporte pesado de larga distancia.',
    m21: 'La estructura de caja aligerada permite más carga útil por viaje y un transporte eficiente con bajos costes operativos.',
  },
  it: {
    l500: "Il cassone in acciaio <hardox></hardox> e la struttura del telaio rinforzata garantiscono un trasporto duraturo e ad alte prestazioni nelle condizioni di cantiere più difficili.",
    g22: "Il design del cassone ad alto volume e il robusto sistema di assali lo rendono la soluzione affidabile per il trasporto pesante a lunga distanza.",
    m21: "La struttura del cassone alleggerita consente più carico utile per viaggio e un trasporto efficiente con bassi costi di esercizio.",
  },
  ro: {
    l500: 'Bena din oțel <hardox></hardox> și structura consolidată a șasiului asigură un transport durabil și performant în cele mai dure condiții de teren.',
    g22: 'Designul benei de mare volum și sistemul de axe durabil îl fac soluția de încredere pentru transportul greu pe distanțe lungi.',
    m21: 'Structura ușoară a benei permite mai multă sarcină utilă per cursă și un transport eficient cu costuri de operare reduse.',
  },
  bg: {
    l500: 'Кошът от стомана <hardox></hardox> и подсилената конструкция на шасито осигуряват дълготраен, високоефективен транспорт при най-тежките теренни условия.',
    g22: 'Дизайнът на коша с голям обем и издръжливата осова система го правят надеждното решение за тежкотоварен транспорт на дълги разстояния.',
    m21: 'Олекотената конструкция на коша позволява повече полезен товар на курс и ефективен транспорт с ниски експлоатационни разходи.',
  },
  ru: {
    l500: 'Кузов из стали <hardox></hardox> и усиленная конструкция шасси обеспечивают долговечные высокоэффективные перевозки в самых тяжёлых полевых условиях.',
    g22: 'Кузов большого объёма и надёжная осевая система делают его проверенным решением для тяжёлых перевозок на дальние расстояния.',
    m21: 'Облегчённая конструкция кузова позволяет перевозить больше груза за рейс и обеспечивает эффективные перевозки с низкими эксплуатационными затратами.',
  },
  uk: {
    l500: 'Кузов зі сталі <hardox></hardox> та посилена конструкція шасі забезпечують довговічні високоефективні перевезення в найважчих польових умовах.',
    g22: 'Кузов великого об’єму та надійна осьова система роблять його перевіреним рішенням для важких далеких перевезень.',
    m21: 'Полегшена конструкція кузова дозволяє перевозити більше вантажу за рейс і забезпечує ефективні перевезення з низькими експлуатаційними витратами.',
  },
  ar: {
    l500: 'يوفر صندوق الفولاذ <hardox></hardox> وهيكل الشاسيه المعزز نقلًا طويل الأمد وعالي الأداء في أقسى ظروف الميدان.',
    g22: 'يجعل تصميم الصندوق كبير السعة ونظام المحاور المتين منه الحل الموثوق للنقل الثقيل لمسافات طويلة.',
    m21: 'يتيح هيكل الصندوق خفيف الوزن حمولة أكبر في كل رحلة ونقلًا فعالًا بتكاليف تشغيل منخفضة.',
  },
};

for (const [locale, copy] of Object.entries(COPY)) {
  const filePath = path.join(messagesDir, `${locale}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const items = data.yariRomork?.items;
  if (!items) {
    console.warn(`${locale}: yariRomork.items missing, skipped`);
    continue;
  }
  for (const key of ['l500', 'g22', 'm21']) {
    if (items[key]) items[key].description = copy[key];
    else console.warn(`${locale}: item ${key} missing`);
  }
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log(`${locale}: descriptions updated`);
}
