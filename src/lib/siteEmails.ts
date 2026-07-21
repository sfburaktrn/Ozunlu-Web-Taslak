/** Görünür iletişim adresleri (footer, iletişim sayfası, JSON-LD) */
export type PublicEmailKey = 'contact' | 'sales' | 'damper' | 'dorse';

const publicEmailDefaults: Record<PublicEmailKey, string> = {
    contact: 'info@ozunlu.com',
    sales: 'satisdestek@ozunlu.com',
    damper: 'satisdestek@ozunlu.com',
    dorse: 'satisdestek@ozunlu.com',
};

const publicEmailEnv: Record<PublicEmailKey, string | undefined> = {
    contact: process.env.NEXT_PUBLIC_EMAIL_CONTACT,
    sales: process.env.NEXT_PUBLIC_EMAIL_SALES,
    damper: process.env.NEXT_PUBLIC_EMAIL_DAMPER,
    dorse: process.env.NEXT_PUBLIC_EMAIL_DORSE,
};

function clean(value: string | undefined) {
    return value?.trim() || '';
}

export function getPublicEmail(key: PublicEmailKey): string {
    return clean(publicEmailEnv[key]) || publicEmailDefaults[key];
}

export function hasPublicEmail(key: PublicEmailKey): boolean {
    return getPublicEmail(key).length > 0;
}

/** KVKK / yasal metinlerde kullanım */
export function getLegalContactEmail(): string {
    return getPublicEmail('contact');
}

export function formatLegalEmailRef(locale: 'tr' | 'en'): string {
    const email = getLegalContactEmail();
    if (email) return email;
    return locale === 'tr'
        ? 'web sitemizdeki iletişim formu'
        : 'the contact form on our website';
}
