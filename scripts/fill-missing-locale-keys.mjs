/**
 * Fills missing locale keys: contact.form.{submitting,successTitle,successMessage,submitError},
 * proposal.submitError and common.languageSuggestion.* where absent.
 * Run: node scripts/fill-missing-locale-keys.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const messagesDir = path.join(__dirname, '..', 'messages');

const COPY = {
  en: {
    form: null, // already present
    suggestion: {
      message: 'Would you like to view the site in {language}?',
      switch: 'Switch language',
      dismiss: 'Close',
    },
  },
  de: {
    form: {
      submitting: 'Wird gesendet...',
      successTitle: 'Ihre Nachricht wurde übermittelt',
      successMessage: 'Wir melden uns so schnell wie möglich bei Ihnen.',
      submitError: 'Übermittlung fehlgeschlagen. Bitte versuchen Sie es erneut oder kontaktieren Sie uns telefonisch.',
    },
    suggestion: {
      message: 'Möchten Sie die Website auf {language} anzeigen?',
      switch: 'Sprache wechseln',
      dismiss: 'Schließen',
    },
  },
  fr: {
    form: {
      submitting: 'Envoi en cours...',
      successTitle: 'Votre message a été envoyé',
      successMessage: 'Nous vous répondrons dans les plus brefs délais.',
      submitError: "L'envoi a échoué. Veuillez réessayer ou nous contacter par téléphone.",
    },
    suggestion: {
      message: 'Souhaitez-vous afficher le site en {language} ?',
      switch: 'Changer de langue',
      dismiss: 'Fermer',
    },
  },
  es: {
    form: {
      submitting: 'Enviando...',
      successTitle: 'Su mensaje ha sido enviado',
      successMessage: 'Nos pondremos en contacto con usted lo antes posible.',
      submitError: 'El envío ha fallado. Inténtelo de nuevo o contáctenos por teléfono.',
    },
    suggestion: {
      message: '¿Le gustaría ver el sitio en {language}?',
      switch: 'Cambiar idioma',
      dismiss: 'Cerrar',
    },
  },
  it: {
    form: null, // already present
    suggestion: {
      message: 'Vuoi visualizzare il sito in {language}?',
      switch: 'Cambia lingua',
      dismiss: 'Chiudi',
    },
  },
  ro: {
    form: {
      submitting: 'Se trimite...',
      successTitle: 'Mesajul dumneavoastră a fost trimis',
      successMessage: 'Vă vom contacta cât mai curând posibil.',
      submitError: 'Trimiterea a eșuat. Vă rugăm să încercați din nou sau să ne contactați telefonic.',
    },
    suggestion: {
      message: 'Doriți să vizualizați site-ul în {language}?',
      switch: 'Schimbă limba',
      dismiss: 'Închide',
    },
  },
  bg: {
    form: {
      submitting: 'Изпращане...',
      successTitle: 'Вашето съобщение беше изпратено',
      successMessage: 'Ще се свържем с вас възможно най-скоро.',
      submitError: 'Изпращането е неуспешно. Моля, опитайте отново или се свържете с нас по телефона.',
    },
    suggestion: {
      message: 'Искате ли да разгледате сайта на {language}?',
      switch: 'Смени езика',
      dismiss: 'Затвори',
    },
  },
  ru: {
    form: {
      submitting: 'Отправка...',
      successTitle: 'Ваше сообщение отправлено',
      successMessage: 'Мы свяжемся с вами в ближайшее время.',
      submitError: 'Не удалось отправить. Пожалуйста, попробуйте ещё раз или свяжитесь с нами по телефону.',
    },
    suggestion: {
      message: 'Хотите просмотреть сайт на {language}?',
      switch: 'Сменить язык',
      dismiss: 'Закрыть',
    },
  },
  uk: {
    form: {
      submitting: 'Надсилання...',
      successTitle: 'Ваше повідомлення надіслано',
      successMessage: 'Ми зв’яжемося з вами якнайшвидше.',
      submitError: 'Не вдалося надіслати. Будь ласка, спробуйте ще раз або зателефонуйте нам.',
    },
    suggestion: {
      message: 'Бажаєте переглянути сайт {language}?',
      switch: 'Змінити мову',
      dismiss: 'Закрити',
    },
  },
  ar: {
    form: {
      submitting: 'جارٍ الإرسال...',
      successTitle: 'تم إرسال رسالتكم',
      successMessage: 'سنتواصل معكم في أقرب وقت ممكن.',
      submitError: 'فشل الإرسال. يرجى المحاولة مرة أخرى أو الاتصال بنا هاتفيًا.',
    },
    suggestion: {
      message: 'هل ترغب في عرض الموقع باللغة {language}؟',
      switch: 'تغيير اللغة',
      dismiss: 'إغلاق',
    },
  },
};

for (const [locale, copy] of Object.entries(COPY)) {
  const filePath = path.join(messagesDir, `${locale}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (copy.form) {
    data.contact.form.submitting ??= copy.form.submitting;
    data.contact.form.successTitle ??= copy.form.successTitle;
    data.contact.form.successMessage ??= copy.form.successMessage;
    data.contact.form.submitError ??= copy.form.submitError;
    data.proposal.submitError ??= copy.form.submitError;
  }

  data.common.languageSuggestion ??= copy.suggestion;

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log(`${locale}: filled`);
}
