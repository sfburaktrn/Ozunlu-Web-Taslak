import type { Locale } from '@/i18n/routing';
import { phoneCountryList } from '@/data/phoneCountryList';

export type PhoneCountry = {
    code: string;
    dial: string;
    name: string;
    placeholder: string;
};

export const phoneCountries: PhoneCountry[] = [...phoneCountryList];

const countryByCode = new Map(phoneCountries.map((country) => [country.code, country]));

const countriesByDial = new Map<string, PhoneCountry[]>();
for (const country of phoneCountries) {
    const existing = countriesByDial.get(country.dial) ?? [];
    existing.push(country);
    countriesByDial.set(country.dial, existing);
}

const countriesByDialLength = [...phoneCountries].sort((a, b) => b.dial.length - a.dial.length);

export const localeDefaultCountry: Record<Locale, string> = {
    tr: 'TR',
    en: 'GB',
    de: 'DE',
    fr: 'FR',
    es: 'ES',
    it: 'IT',
    ro: 'RO',
    bg: 'BG',
    ru: 'RU',
    uk: 'UA',
    ar: 'SA',
};

const dialDefaultCountry: Record<string, string> = {
    '+1': 'US',
    '+7': 'RU',
    '+44': 'GB',
    '+61': 'AU',
    '+212': 'MA',
    '+262': 'RE',
    '+358': 'FI',
    '+590': 'GP',
    '+599': 'CW',
};

export function getCountryByCode(code: string): PhoneCountry {
    return countryByCode.get(code) ?? countryByCode.get('TR')!;
}

export function getDefaultCountryForLocale(locale: Locale): PhoneCountry {
    return getCountryByCode(localeDefaultCountry[locale]);
}

function resolveCountryForDial(dial: string, preferredCode?: string): PhoneCountry {
    const matches = countriesByDial.get(dial) ?? [];
    if (preferredCode) {
        const preferred = matches.find((country) => country.code === preferredCode);
        if (preferred) return preferred;
    }

    const defaultCode = dialDefaultCountry[dial];
    if (defaultCode) {
        const fallback = matches.find((country) => country.code === defaultCode);
        if (fallback) return fallback;
    }

    return matches[0] ?? getCountryByCode('TR');
}

export function parsePhoneValue(
    value: string,
    preferredCode?: string
): { country: PhoneCountry; national: string } | null {
    const trimmed = value.trim();
    if (!trimmed) return null;

    const normalized = trimmed.startsWith('+') ? trimmed : `+${trimmed.replace(/\D/g, '')}`;

    for (const country of countriesByDialLength) {
        if (normalized.startsWith(country.dial)) {
            return {
                country: resolveCountryForDial(country.dial, preferredCode),
                national: normalized.slice(country.dial.length).trim(),
            };
        }
    }

    return null;
}

export function formatPhoneValue(country: PhoneCountry, national: string): string {
    const digits = national.replace(/\s+/g, ' ').trim();
    if (!digits) return '';
    return `${country.dial} ${digits}`;
}

export function filterPhoneCountries(query: string): PhoneCountry[] {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return phoneCountries;

    const digits = normalized.replace(/[^\d+]/g, '');

    return phoneCountries.filter((country) => {
        if (country.name.toLowerCase().includes(normalized)) return true;
        if (country.code.toLowerCase().includes(normalized)) return true;
        if (digits && country.dial.includes(digits)) return true;
        return false;
    });
}

export const phoneSearchLabels: Record<Locale, { search: string; empty: string }> = {
    tr: { search: 'Ülke veya kod ara...', empty: 'Sonuç bulunamadı' },
    en: { search: 'Search country or code...', empty: 'No results found' },
    de: { search: 'Land oder Vorwahl suchen...', empty: 'Keine Ergebnisse' },
    fr: { search: 'Rechercher un pays ou un indicatif...', empty: 'Aucun résultat' },
    es: { search: 'Buscar país o código...', empty: 'Sin resultados' },
    it: { search: 'Cerca paese o prefisso...', empty: 'Nessun risultato' },
    ro: { search: 'Caută țară sau prefix...', empty: 'Niciun rezultat' },
    bg: { search: 'Търсене на държава или код...', empty: 'Няма резултати' },
    ru: { search: 'Поиск страны или кода...', empty: 'Ничего не найдено' },
    uk: { search: 'Пошук країни або коду...', empty: 'Нічого не знайдено' },
    ar: { search: 'ابحث عن دولة أو رمز...', empty: 'لا توجد نتائج' },
};
