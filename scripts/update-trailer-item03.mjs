/**
 * Updates yariRomork.features.item03 copy across locale files.
 * Run: node scripts/update-trailer-item03.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const messagesDir = path.join(__dirname, '..', 'messages');

const COPY = {
  en: {
    title: 'Versatile Use',
    content:
      'High efficiency across different load types, from excavation and mining to aggregate transport; body options that adapt to the needs of every industry.',
  },
  de: {
    title: 'Vielseitiger Einsatz',
    content:
      'Hohe Effizienz bei unterschiedlichen Ladungsarten — vom Aushub und Bergbau bis zum Schüttguttransport; Aufbauvarianten, die sich den Anforderungen jeder Branche anpassen.',
  },
  fr: {
    title: 'Utilisation Polyvalente',
    content:
      "Haute efficacité pour différents types de charges, du terrassement et de l'exploitation minière au transport d'agrégats ; des options de caisse adaptées aux besoins de chaque secteur.",
  },
  es: {
    title: 'Uso Versátil',
    content:
      'Alta eficiencia en diferentes tipos de carga, desde excavación y minería hasta el transporte de áridos; opciones de caja que se adaptan a las necesidades de cada sector.',
  },
  it: {
    title: 'Utilizzo Versatile',
    content:
      "Elevata efficienza con diversi tipi di carico, dallo scavo e dall'attività mineraria al trasporto di inerti; opzioni di cassone che si adattano alle esigenze di ogni settore.",
  },
  ro: {
    title: 'Utilizare Versatilă',
    content:
      'Eficiență ridicată pentru diferite tipuri de încărcături, de la excavare și minerit până la transportul de agregate; opțiuni de benă adaptate nevoilor fiecărui sector.',
  },
  bg: {
    title: 'Универсална употреба',
    content:
      'Висока ефективност при различни видове товари — от изкопни работи и минно дело до превоз на инертни материали; варианти на коша, съобразени с нуждите на всеки сектор.',
  },
  ru: {
    title: 'Универсальное применение',
    content:
      'Высокая эффективность при перевозке различных грузов — от земляных работ и горнодобычи до щебня; варианты кузова под потребности каждой отрасли.',
  },
  uk: {
    title: 'Універсальне застосування',
    content:
      'Висока ефективність для різних типів вантажів — від земляних робіт і гірничодобування до перевезення щебеню; варіанти кузова відповідно до потреб кожної галузі.',
  },
  ar: {
    title: 'استخدام متعدد الأغراض',
    content:
      'كفاءة عالية مع مختلف أنواع الحمولات، من أعمال الحفر والتعدين إلى نقل الركام؛ خيارات صناديق تتكيف مع احتياجات كل قطاع.',
  },
};

for (const [locale, copy] of Object.entries(COPY)) {
  const filePath = path.join(messagesDir, `${locale}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  if (!data.yariRomork?.features) {
    console.warn(`${locale}: yariRomork.features missing, skipped`);
    continue;
  }
  data.yariRomork.features.item03Title = copy.title;
  data.yariRomork.features.item03Content = copy.content;
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log(`${locale}: item03 updated`);
}
