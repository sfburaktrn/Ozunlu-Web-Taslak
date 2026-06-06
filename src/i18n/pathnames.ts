import type { Locale } from './routing';

/** Internal route keys used in Link href and app folder structure */
export const appPathnames = [
    '/',
    '/damper',
    '/yari-romork',
    '/ek-ekipmanlar',
    '/satis-sonrasi',
    '/iletisim',
    '/kvkk',
    '/aydinlatma-metni',
    '/cerez-politikasi',
] as const;

export type AppPathname = (typeof appPathnames)[number];

/** SEO-friendly localized URL slugs per locale */
export const localizedPathnames: Record<AppPathname, Record<Locale, string>> = {
    '/': {
        tr: '/',
        en: '/',
        de: '/',
        bg: '/',
        ro: '/',
        ar: '/',
        fr: '/',
        es: '/',
        it: '/',
        ru: '/',
        uk: '/',
    },
    '/damper': {
        tr: '/damper',
        en: '/tipper',
        de: '/kipper',
        bg: '/damper',
        ro: '/damper',
        ar: '/قلاب',
        fr: '/benne',
        es: '/volquete',
        it: '/ribaltabile',
        ru: '/samosval',
        uk: '/samosval',
    },
    '/yari-romork': {
        tr: '/yari-romork',
        en: '/semi-trailer',
        de: '/sattelauflieger',
        bg: '/poluremork',
        ro: '/semiremorca',
        ar: '/نصف-مقطورة',
        fr: '/semi-remorque',
        es: '/semirremolque',
        it: '/semirimorchio',
        ru: '/polupritsep',
        uk: '/napivprichep',
    },
    '/ek-ekipmanlar': {
        tr: '/ek-ekipmanlar',
        en: '/equipment',
        de: '/zubehoer',
        bg: '/ekipirovka',
        ro: '/echipamente',
        ar: '/معدات-إضافية',
        fr: '/equipements',
        es: '/equipamiento',
        it: '/equipaggiamento',
        ru: '/oborudovanie',
        uk: '/obladnannya',
    },
    '/satis-sonrasi': {
        tr: '/satis-sonrasi',
        en: '/after-sales',
        de: '/kundendienst',
        bg: '/sled-prodazhbi',
        ro: '/service-post-vanzare',
        ar: '/ما-بعد-البيع',
        fr: '/service-apres-vente',
        es: '/postventa',
        it: '/post-vendita',
        ru: '/servis',
        uk: '/pislya-prodazhu',
    },
    '/iletisim': {
        tr: '/iletisim',
        en: '/contact',
        de: '/kontakt',
        bg: '/kontakt',
        ro: '/contact',
        ar: '/اتصل-بنا',
        fr: '/contact',
        es: '/contacto',
        it: '/contatti',
        ru: '/kontakty',
        uk: '/kontakty',
    },
    '/kvkk': {
        tr: '/kvkk',
        en: '/kvkk',
        de: '/kvkk',
        bg: '/kvkk',
        ro: '/kvkk',
        ar: '/حماية-البيانات',
        fr: '/kvkk',
        es: '/kvkk',
        it: '/kvkk',
        ru: '/kvkk',
        uk: '/kvkk',
    },
    '/aydinlatma-metni': {
        tr: '/aydinlatma-metni',
        en: '/privacy-notice',
        de: '/datenschutzhinweis',
        bg: '/izvestie-za-poveritelnost',
        ro: '/notificare-confidentialitate',
        ar: '/إشعار-الخصوصية',
        fr: '/notice-confidentialite',
        es: '/aviso-privacidad',
        it: '/informativa-privacy',
        ru: '/uvedomlenie-o-konfidencialnosti',
        uk: '/povidomlennya-pro-konfidentsiynist',
    },
    '/cerez-politikasi': {
        tr: '/cerez-politikasi',
        en: '/cookie-policy',
        de: '/cookie-richtlinie',
        bg: '/politika-za-biskvitki',
        ro: '/politica-cookie',
        ar: '/سياسة-ملفات-تعريف-الارتباط',
        fr: '/politique-cookies',
        es: '/politica-cookies',
        it: '/politica-cookie',
        ru: '/politika-cookie',
        uk: '/polityka-cookie',
    },
};

export function getLocalizedPathname(locale: Locale, pathname: AppPathname): string {
    const slug = localizedPathnames[pathname][locale];
    if (locale === 'tr') {
        return slug;
    }
    return slug === '/' ? `/${locale}` : `/${locale}${slug}`;
}

/** Resolve public URL path back to internal AppPathname */
export function resolveInternalPathname(locale: Locale, segments: string[]): AppPathname | null {
    const decodedSegments = segments.map((segment) => {
        try {
            return decodeURIComponent(segment);
        } catch {
            return segment;
        }
    });
    const path = decodedSegments.length === 0 ? '/' : `/${decodedSegments.join('/')}`;

    for (const key of appPathnames) {
        if (localizedPathnames[key][locale] === path) {
            return key;
        }
    }
    return null;
}
