/** Görünür iletişim adresleri (footer, iletişim sayfası, JSON-LD) */
export type PublicEmailKey = 'contact' | 'sales' | 'damper' | 'dorse';

const publicEmailEnv: Record<PublicEmailKey, string | undefined> = {
    contact: process.env.NEXT_PUBLIC_EMAIL_CONTACT,
    sales: process.env.NEXT_PUBLIC_EMAIL_SALES,
    damper: process.env.NEXT_PUBLIC_EMAIL_DAMPER,
    dorse: process.env.NEXT_PUBLIC_EMAIL_DORSE,
};

/** Form gönderim hedefleri (sunucu tarafı — API route) */
export type FormEmailKey = 'contact' | 'damper' | 'dorse';

const formEmailEnv: Record<FormEmailKey, string | undefined> = {
    contact: process.env.FORM_EMAIL_CONTACT,
    damper: process.env.FORM_EMAIL_DAMPER,
    dorse: process.env.FORM_EMAIL_DORSE,
};

function clean(value: string | undefined) {
    return value?.trim() || '';
}

export function getPublicEmail(key: PublicEmailKey): string {
    return clean(publicEmailEnv[key]);
}

export function getFormRecipient(key: FormEmailKey): string {
    return clean(formEmailEnv[key]) || clean(publicEmailEnv[key]);
}

export function hasPublicEmail(key: PublicEmailKey): boolean {
    return getPublicEmail(key).length > 0;
}

export function hasFormRecipient(key: FormEmailKey): boolean {
    return getFormRecipient(key).length > 0;
}

/** KVKK / yasal metinlerde kullanım */
export function getLegalContactEmail(): string {
    return getFormRecipient('contact') || getPublicEmail('contact');
}

export function formatLegalEmailRef(locale: 'tr' | 'en'): string {
    const email = getLegalContactEmail();
    if (email) return email;
    return locale === 'tr'
        ? 'web sitemizdeki iletişim formu'
        : 'the contact form on our website';
}
