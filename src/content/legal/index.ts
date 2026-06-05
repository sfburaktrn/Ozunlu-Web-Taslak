import type { Locale } from '@/i18n/routing';
import { legalEn } from './en';
import { legalTr } from './tr';
import type { LegalDocument, LegalPageKey } from './types';

const byLocale: Partial<Record<Locale, Record<LegalPageKey, LegalDocument>>> = {
    tr: legalTr,
    en: legalEn,
};

export function getLegalDocument(locale: Locale, page: LegalPageKey): LegalDocument {
    return byLocale[locale]?.[page] ?? legalEn[page];
}

export type { LegalPageKey, LegalDocument };
