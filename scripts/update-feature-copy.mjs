/**
 * Updates damper.features.item02 and yariRomork.features.item02 copy across locale files.
 * Run: node scripts/update-feature-copy.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const messagesDir = path.join(__dirname, '..', 'messages');

const COPY = {
  en: {
    damperTitle: 'Reinforced Body Structure',
    damperContent:
      'High-strength steel body and reinforced floor structure prevent deformation under the heaviest excavation conditions; high tipping stability ensures safe unloading.',
    trailerTitle: 'Active Safety Systems',
    trailerContent:
      'While the EBS electronic braking system provides precise and balanced braking, the TPMS tire pressure monitoring system warns of potential risks in advance; driving assurance at European safety standards.',
  },
  de: {
    damperTitle: 'Verstärkte Aufbaustruktur',
    damperContent:
      'Hochfester Stahlaufbau und verstärkte Bodenstruktur verhindern Verformungen selbst unter härtesten Aushubbedingungen; hohe Kippstabilität sorgt für sicheres Entladen.',
    trailerTitle: 'Aktive Sicherheitssysteme',
    trailerContent:
      'Während das elektronische Bremssystem EBS präzises und ausgewogenes Bremsen ermöglicht, warnt das Reifendruckkontrollsystem TPMS frühzeitig vor möglichen Risiken; Fahrsicherheit nach europäischen Standards.',
  },
  fr: {
    damperTitle: 'Structure de Caisse Renforcée',
    damperContent:
      "La caisse en acier à haute résistance et la structure de plancher renforcée empêchent toute déformation dans les conditions de terrassement les plus difficiles ; la grande stabilité au bennage garantit un déchargement sûr.",
    trailerTitle: 'Systèmes de Sécurité Active',
    trailerContent:
      "Le système de freinage électronique EBS assure un freinage précis et équilibré, tandis que le système de surveillance de la pression des pneus TPMS signale les risques potentiels à l'avance ; une garantie de conduite aux normes de sécurité européennes.",
  },
  es: {
    damperTitle: 'Estructura de Caja Reforzada',
    damperContent:
      'La caja de acero de alta resistencia y la estructura de piso reforzada evitan la deformación en las condiciones de excavación más exigentes; la alta estabilidad de volteo garantiza una descarga segura.',
    trailerTitle: 'Sistemas de Seguridad Activa',
    trailerContent:
      'Mientras el sistema de frenado electrónico EBS proporciona un frenado preciso y equilibrado, el sistema de monitoreo de presión de neumáticos TPMS advierte de posibles riesgos con antelación; garantía de conducción según los estándares de seguridad europeos.',
  },
  it: {
    damperTitle: 'Struttura del Cassone Rinforzata',
    damperContent:
      "Il cassone in acciaio ad alta resistenza e la struttura del fondo rinforzata prevengono la deformazione nelle condizioni di scavo più gravose; l'elevata stabilità di ribaltamento garantisce uno scarico sicuro.",
    trailerTitle: 'Sistemi di Sicurezza Attiva',
    trailerContent:
      "Mentre il sistema frenante elettronico EBS garantisce una frenata precisa ed equilibrata, il sistema di monitoraggio della pressione degli pneumatici TPMS segnala in anticipo i potenziali rischi; sicurezza di guida secondo gli standard europei.",
  },
  ro: {
    damperTitle: 'Structură de Benă Consolidată',
    damperContent:
      'Bena din oțel de înaltă rezistență și structura consolidată a podelei previn deformarea în cele mai dure condiții de excavare; stabilitatea ridicată la basculare asigură o descărcare sigură.',
    trailerTitle: 'Sisteme de Siguranță Activă',
    trailerContent:
      'În timp ce sistemul electronic de frânare EBS asigură o frânare precisă și echilibrată, sistemul de monitorizare a presiunii în anvelope TPMS avertizează din timp asupra riscurilor potențiale; siguranță în conducere la standardele europene.',
  },
  bg: {
    damperTitle: 'Подсилена конструкция на коша',
    damperContent:
      'Кошът от високоякостна стомана и подсилената подова конструкция предотвратяват деформация при най-тежките изкопни условия; високата стабилност при разтоварване гарантира безопасно изсипване.',
    trailerTitle: 'Активни системи за безопасност',
    trailerContent:
      'Докато електронната спирачна система EBS осигурява прецизно и балансирано спиране, системата за следене на налягането в гумите TPMS предупреждава предварително за потенциални рискове; сигурност при шофиране по европейските стандарти за безопасност.',
  },
  ru: {
    damperTitle: 'Усиленная конструкция кузова',
    damperContent:
      'Кузов из высокопрочной стали и усиленная конструкция днища предотвращают деформацию в самых тяжёлых условиях земляных работ; высокая устойчивость при опрокидывании обеспечивает безопасную разгрузку.',
    trailerTitle: 'Активные системы безопасности',
    trailerContent:
      'Электронная тормозная система EBS обеспечивает точное и сбалансированное торможение, а система контроля давления в шинах TPMS заранее предупреждает о возможных рисках; уверенное вождение по европейским стандартам безопасности.',
  },
  uk: {
    damperTitle: 'Посилена конструкція кузова',
    damperContent:
      'Кузов із високоміцної сталі та посилена конструкція днища запобігають деформації в найважчих умовах земляних робіт; висока стійкість під час перекидання забезпечує безпечне розвантаження.',
    trailerTitle: 'Активні системи безпеки',
    trailerContent:
      'Електронна гальмівна система EBS забезпечує точне та збалансоване гальмування, а система контролю тиску в шинах TPMS заздалегідь попереджає про можливі ризики; впевнене водіння за європейськими стандартами безпеки.',
  },
  ar: {
    damperTitle: 'هيكل صندوق معزز',
    damperContent:
      'يمنع صندوق الفولاذ عالي المقاومة وهيكل الأرضية المعزز التشوه في أقسى ظروف أعمال الحفر؛ كما يضمن ثبات القلب العالي تفريغًا آمنًا.',
    trailerTitle: 'أنظمة السلامة النشطة',
    trailerContent:
      'بينما يوفر نظام الفرامل الإلكتروني EBS كبحًا دقيقًا ومتوازنًا، ينبه نظام مراقبة ضغط الإطارات TPMS إلى المخاطر المحتملة مسبقًا؛ ضمان قيادة وفق معايير السلامة الأوروبية.',
  },
};

for (const [locale, copy] of Object.entries(COPY)) {
  const filePath = path.join(messagesDir, `${locale}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (data.damper?.features) {
    data.damper.features.item02Title = copy.damperTitle;
    data.damper.features.item02Content = copy.damperContent;
  } else {
    console.warn(`${locale}: damper.features missing`);
  }

  if (data.yariRomork?.features) {
    data.yariRomork.features.item02Title = copy.trailerTitle;
    data.yariRomork.features.item02Content = copy.trailerContent;
  } else {
    console.warn(`${locale}: yariRomork.features missing`);
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log(`${locale}: updated`);
}
