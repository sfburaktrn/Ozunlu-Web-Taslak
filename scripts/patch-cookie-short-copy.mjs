import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const messagesDir = path.join(__dirname, '..', 'messages');

/** @type {Record<string, Record<string, string>>} */
const extras = {
    tr: {
        shortDescription: 'Deneyim ve analiz için çerez kullanıyoruz. Zorunlu olanlar site için gerekli; diğerleri onayınıza bağlıdır.',
        policyLinkShort: '<policy>Politika</policy>',
        settingsShort: 'Ayarlar',
        rejectShort: 'Reddet',
        acceptShort: 'Kabul et',
    },
    en: {
        shortDescription: 'We use cookies for experience and analytics. Essential ones are required; others need your consent.',
        policyLinkShort: '<policy>Policy</policy>',
        settingsShort: 'Settings',
        rejectShort: 'Reject',
        acceptShort: 'Accept',
    },
    de: {
        shortDescription: 'Wir verwenden Cookies für Nutzung und Analyse. Notwendige sind Pflicht; andere brauchen Ihre Einwilligung.',
        policyLinkShort: '<policy>Richtlinie</policy>',
        settingsShort: 'Einstellungen',
        rejectShort: 'Ablehnen',
        acceptShort: 'Akzeptieren',
    },
    fr: {
        shortDescription: 'Nous utilisons des cookies pour l’expérience et l’analyse. Les essentiels sont requis ; les autres nécessitent votre accord.',
        policyLinkShort: '<policy>Politique</policy>',
        settingsShort: 'Réglages',
        rejectShort: 'Refuser',
        acceptShort: 'Accepter',
    },
    es: {
        shortDescription: 'Usamos cookies para experiencia y análisis. Las esenciales son necesarias; el resto requiere su consentimiento.',
        policyLinkShort: '<policy>Política</policy>',
        settingsShort: 'Ajustes',
        rejectShort: 'Rechazar',
        acceptShort: 'Aceptar',
    },
    it: {
        shortDescription: 'Usiamo i cookie per esperienza e analisi. Quelli essenziali sono necessari; gli altri richiedono il consenso.',
        policyLinkShort: '<policy>Informativa</policy>',
        settingsShort: 'Impostazioni',
        rejectShort: 'Rifiuta',
        acceptShort: 'Accetta',
    },
    ro: {
        shortDescription: 'Folosim cookie-uri pentru experiență și analiză. Cele esențiale sunt necesare; restul necesită consimțământ.',
        policyLinkShort: '<policy>Politică</policy>',
        settingsShort: 'Setări',
        rejectShort: 'Respinge',
        acceptShort: 'Acceptă',
    },
    bg: {
        shortDescription: 'Използваме бисквитки за опит и анализ. Задължителните са нужни; останалите изискват съгласие.',
        policyLinkShort: '<policy>Политика</policy>',
        settingsShort: 'Настройки',
        rejectShort: 'Отхвърли',
        acceptShort: 'Приеми',
    },
    ru: {
        shortDescription: 'Мы используем cookie для удобства и аналитики. Обязательные нужны сайту; остальные — с вашего согласия.',
        policyLinkShort: '<policy>Политика</policy>',
        settingsShort: 'Настройки',
        rejectShort: 'Отклонить',
        acceptShort: 'Принять',
    },
    uk: {
        shortDescription: 'Ми використовуємо cookie для зручності та аналітики. Обов’язкові потрібні сайту; інші — за вашою згодою.',
        policyLinkShort: '<policy>Політика</policy>',
        settingsShort: 'Налаштування',
        rejectShort: 'Відхилити',
        acceptShort: 'Прийняти',
    },
    ar: {
        shortDescription: 'نستخدم ملفات تعريف الارتباط للتجربة والتحليل. الأساسية ضرورية؛ والباقي يحتاج موافقتك.',
        policyLinkShort: '<policy>السياسة</policy>',
        settingsShort: 'إعدادات',
        rejectShort: 'رفض',
        acceptShort: 'قبول',
    },
};

for (const locale of Object.keys(extras)) {
    const filePath = path.join(messagesDir, `${locale}.json`);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    data.common.cookieConsent = { ...data.common.cookieConsent, ...extras[locale] };
    fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`);
    console.log(`Patched ${locale}`);
}
