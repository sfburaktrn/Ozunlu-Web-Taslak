/**
 * Updates home.whyChooseUs.features["2"] across locale files (ECE/ADR -> ECE & EU regulations).
 * Run: node scripts/update-why-choose-feature2.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const messagesDir = path.join(__dirname, '..', 'messages');

const COPY = {
  en: 'Full compliance with all legal requirements and European safety standards, led by ECE and EU regulations',
  de: 'Volle Einhaltung aller gesetzlichen Vorgaben und europäischer Sicherheitsstandards, allen voran der ECE- und EU-Vorschriften',
  fr: "Conformité totale à toutes les exigences légales et aux normes de sécurité européennes, en premier lieu les réglementations ECE et UE",
  es: 'Cumplimiento total de todos los requisitos legales y estándares europeos de seguridad, encabezados por las normativas ECE y de la UE',
  it: 'Piena conformità a tutti i requisiti di legge e agli standard europei di sicurezza, a partire dalle normative ECE e UE',
  ro: 'Conformitate deplină cu toate cerințele legale și standardele europene de siguranță, în frunte cu reglementările ECE și UE',
  bg: 'Пълно съответствие с всички законови изисквания и европейските стандарти за безопасност, начело с регламентите ECE и ЕС',
  ru: 'Полное соответствие всем законодательным требованиям и европейским стандартам безопасности, прежде всего регламентам ECE и ЕС',
  uk: 'Повна відповідність усім законодавчим вимогам та європейським стандартам безпеки, насамперед регламентам ECE та ЄС',
  ar: 'امتثال كامل لجميع المتطلبات القانونية ومعايير السلامة الأوروبية، وفي مقدمتها لوائح ECE والاتحاد الأوروبي',
};

for (const [locale, text] of Object.entries(COPY)) {
  const filePath = path.join(messagesDir, `${locale}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  if (!data.home?.whyChooseUs?.features) {
    console.warn(`${locale}: features missing, skipped`);
    continue;
  }
  data.home.whyChooseUs.features['2'] = text;
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log(`${locale}: feature 2 updated`);
}
