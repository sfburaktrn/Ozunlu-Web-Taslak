import { defineRouting } from 'next-intl/routing';
import { localizedPathnames } from './pathnames';

export const locales = ['tr', 'en', 'de', 'bg', 'ro', 'ar', 'fr', 'es', 'it', 'ru', 'uk'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'tr';

export const localeLabels: Record<Locale, string> = {
    tr: 'TR',
    en: 'EN',
    de: 'DE',
    bg: 'BG',
    ro: 'RO',
    ar: 'AR',
    fr: 'FR',
    es: 'ES',
    it: 'IT',
    ru: 'RU',
    uk: 'UA',
};

export const localeNames: Record<Locale, string> = {
    tr: 'Türkçe',
    en: 'English',
    de: 'Deutsch',
    bg: 'Български',
    ro: 'Română',
    ar: 'العربية',
    fr: 'Français',
    es: 'Español',
    it: 'Italiano',
    ru: 'Русский',
    uk: 'Українська',
};

export const localeHreflang: Record<Locale, string> = {
    tr: 'tr-TR',
    en: 'en',
    de: 'de-DE',
    bg: 'bg-BG',
    ro: 'ro-RO',
    ar: 'ar',
    fr: 'fr-FR',
    es: 'es-ES',
    it: 'it-IT',
    ru: 'ru-RU',
    uk: 'uk-UA',
};

export const routing = defineRouting({
    locales,
    defaultLocale,
    localePrefix: 'as-needed',
    // Tarayıcı diline göre / → /en yönlendirmesini kapat (SEO: ana dil TR, kök URL /)
    localeDetection: false,
    pathnames: localizedPathnames,
});
