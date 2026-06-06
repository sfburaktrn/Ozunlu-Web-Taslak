import type { Locale } from './routing';

type SuggestionCopy = {
    message: string;
    switch: string;
    dismiss: string;
};

/** Banner copy in the suggested language (shown while visitor is on the TR site). */
export const languageSuggestionCopy: Record<Exclude<Locale, 'tr'>, SuggestionCopy> = {
    en: {
        message: 'Would you like to view this site in English?',
        switch: 'View in English',
        dismiss: 'Close',
    },
    de: {
        message: 'Möchten Sie diese Website auf Deutsch anzeigen?',
        switch: 'Auf Deutsch anzeigen',
        dismiss: 'Schließen',
    },
    bg: {
        message: 'Искате ли да видите този сайт на български?',
        switch: 'На български',
        dismiss: 'Затвори',
    },
    ro: {
        message: 'Doriți să vizualizați acest site în română?',
        switch: 'Vizualizați în română',
        dismiss: 'Închide',
    },
    ar: {
        message: 'هل ترغب في عرض هذا الموقع بالعربية؟',
        switch: 'عرض بالعربية',
        dismiss: 'إغلاق',
    },
    fr: {
        message: 'Souhaitez-vous afficher ce site en français ?',
        switch: 'Afficher en français',
        dismiss: 'Fermer',
    },
    es: {
        message: '¿Desea ver este sitio en español?',
        switch: 'Ver en español',
        dismiss: 'Cerrar',
    },
    it: {
        message: 'Desideri visualizzare questo sito in italiano?',
        switch: 'Visualizza in italiano',
        dismiss: 'Chiudi',
    },
    ru: {
        message: 'Хотите просматривать этот сайт на русском?',
        switch: 'На русском',
        dismiss: 'Закрыть',
    },
    uk: {
        message: 'Бажаєте переглядати цей сайт українською?',
        switch: 'Українською',
        dismiss: 'Закрити',
    },
};

export const browserLangMap: Record<string, Exclude<Locale, 'tr'>> = {
    en: 'en',
    de: 'de',
    bg: 'bg',
    ro: 'ro',
    ar: 'ar',
    fr: 'fr',
    es: 'es',
    it: 'it',
    ru: 'ru',
    uk: 'uk',
};

export function detectSuggestedLocale(): Exclude<Locale, 'tr'> | null {
    if (typeof navigator === 'undefined') return null;

    const codes = [
        ...navigator.languages.map((lang) => lang.split('-')[0]?.toLowerCase()),
        navigator.language.split('-')[0]?.toLowerCase(),
    ].filter(Boolean) as string[];

    for (const code of codes) {
        const match = browserLangMap[code];
        if (match) return match;
    }

    return null;
}
