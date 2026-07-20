export type CookieCategory = 'necessary' | 'analytics' | 'marketing';

export type CookiePreferences = {
    necessary: true;
    analytics: boolean;
    marketing: boolean;
};

export type CookieConsentRecord = {
    version: number;
    decidedAt: string;
    preferences: CookiePreferences;
};

export const COOKIE_CONSENT_STORAGE_KEY = 'ozunlu-cookie-consent';
export const COOKIE_CONSENT_VERSION = 1;
export const COOKIE_CONSENT_EVENT = 'ozunlu-cookie-consent';

export const defaultRejectedPreferences = (): CookiePreferences => ({
    necessary: true,
    analytics: false,
    marketing: false,
});

export const allAcceptedPreferences = (): CookiePreferences => ({
    necessary: true,
    analytics: true,
    marketing: true,
});

export function readCookieConsent(): CookieConsentRecord | null {
    if (typeof window === 'undefined') return null;

    try {
        const raw = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
        if (!raw) return null;

        const parsed = JSON.parse(raw) as CookieConsentRecord;
        if (!parsed?.preferences || parsed.version !== COOKIE_CONSENT_VERSION) {
            return null;
        }

        return {
            version: COOKIE_CONSENT_VERSION,
            decidedAt: parsed.decidedAt,
            preferences: {
                necessary: true,
                analytics: Boolean(parsed.preferences.analytics),
                marketing: Boolean(parsed.preferences.marketing),
            },
        };
    } catch {
        return null;
    }
}

export function writeCookieConsent(preferences: CookiePreferences): CookieConsentRecord {
    const record: CookieConsentRecord = {
        version: COOKIE_CONSENT_VERSION,
        decidedAt: new Date().toISOString(),
        preferences: {
            necessary: true,
            analytics: preferences.analytics,
            marketing: preferences.marketing,
        },
    };

    if (typeof window !== 'undefined') {
        window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(record));
        window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT, { detail: record }));
    }

    return record;
}

export function hasAnalyticsConsent(record: CookieConsentRecord | null = readCookieConsent()) {
    return Boolean(record?.preferences.analytics);
}

export function hasMarketingConsent(record: CookieConsentRecord | null = readCookieConsent()) {
    return Boolean(record?.preferences.marketing);
}
