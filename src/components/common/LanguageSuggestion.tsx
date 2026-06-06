'use client';

import { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { X } from 'lucide-react';
import { Link, usePathname } from '@/i18n/navigation';
import { localeNames, type Locale } from '@/i18n/routing';

const DISMISS_KEY = 'lang-suggest-dismissed';

const browserLangMap: Record<string, Locale> = {
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

export default function LanguageSuggestion() {
    const locale = useLocale() as Locale;
    const pathname = usePathname();
    const t = useTranslations('common.languageSuggestion');
    const [suggestedLocale, setSuggestedLocale] = useState<Locale | null>(null);

    useEffect(() => {
        if (locale !== 'tr') return;
        if (sessionStorage.getItem(DISMISS_KEY)) return;

        const browserLang = navigator.language.split('-')[0]?.toLowerCase();
        const match = browserLang ? browserLangMap[browserLang] : undefined;
        if (match && match !== 'tr') {
            setSuggestedLocale(match);
        }
    }, [locale]);

    if (!suggestedLocale) return null;

    const dismiss = () => {
        sessionStorage.setItem(DISMISS_KEY, '1');
        setSuggestedLocale(null);
    };

    return (
        <div
            role="status"
            className="fixed bottom-4 left-4 right-4 z-[120] mx-auto max-w-lg rounded-2xl border border-black/10 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-md md:left-auto md:right-6"
        >
            <div className="flex items-start gap-3">
                <p className="flex-1 text-sm text-black/80">
                    {t('message', { language: localeNames[suggestedLocale] })}
                </p>
                <button
                    type="button"
                    onClick={dismiss}
                    className="shrink-0 rounded-lg p-1 text-black/40 hover:bg-black/5 hover:text-black"
                    aria-label={t('dismiss')}
                >
                    <X size={16} />
                </button>
            </div>
            <div className="mt-2 flex gap-2">
                <Link
                    href={pathname}
                    locale={suggestedLocale}
                    onClick={dismiss}
                    className="rounded-lg bg-[#000552] px-4 py-2 text-xs font-semibold text-white hover:bg-[#000552]/90"
                >
                    {t('switch')}
                </Link>
                <button
                    type="button"
                    onClick={dismiss}
                    className="rounded-lg px-4 py-2 text-xs font-medium text-black/60 hover:bg-black/5"
                >
                    {t('dismiss')}
                </button>
            </div>
        </div>
    );
}
