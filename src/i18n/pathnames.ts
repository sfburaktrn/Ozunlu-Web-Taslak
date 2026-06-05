import type { Locale } from './routing';

/** Internal route keys used in Link href and app folder structure */
export const appPathnames = [
    '/',
    '/damper',
    '/yari-romork',
    '/ek-ekipmanlar',
    '/satis-sonrasi',
    '/iletisim',
    '/kurumsal',
    '/urunler',
    '/medya',
    '/kariyer',
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
        ru: '/',
        uk: '/',
    },
    '/damper': {
        tr: '/damper',
        en: '/tipper',
        de: '/kipper',
        bg: '/damper',
        ro: '/damper',
        ar: '/damper',
        fr: '/benne',
        es: '/volquete',
        ru: '/samosval',
        uk: '/samosval',
    },
    '/yari-romork': {
        tr: '/yari-romork',
        en: '/semi-trailer',
        de: '/sattelauflieger',
        bg: '/poluremork',
        ro: '/semiremorca',
        ar: '/muqtraila-nisfiya',
        fr: '/semi-remorque',
        es: '/semirremolque',
        ru: '/polupritsep',
        uk: '/napivprichep',
    },
    '/ek-ekipmanlar': {
        tr: '/ek-ekipmanlar',
        en: '/equipment',
        de: '/zubehoer',
        bg: '/ekipirovka',
        ro: '/echipamente',
        ar: '/malhaq',
        fr: '/equipements',
        es: '/equipamiento',
        ru: '/oborudovanie',
        uk: '/obladnannya',
    },
    '/satis-sonrasi': {
        tr: '/satis-sonrasi',
        en: '/after-sales',
        de: '/kundendienst',
        bg: '/sled-prodazhbi',
        ro: '/service-post-vanzare',
        ar: '/khdma-baada-albay',
        fr: '/service-apres-vente',
        es: '/postventa',
        ru: '/servis',
        uk: '/pislya-prodazhu',
    },
    '/iletisim': {
        tr: '/iletisim',
        en: '/contact',
        de: '/kontakt',
        bg: '/kontakt',
        ro: '/contact',
        ar: '/ittisal',
        fr: '/contact',
        es: '/contacto',
        ru: '/kontakty',
        uk: '/kontakty',
    },
    '/kurumsal': {
        tr: '/kurumsal',
        en: '/corporate',
        de: '/unternehmen',
        bg: '/za-kompaniyata',
        ro: '/corporate',
        ar: '/sharikat',
        fr: '/entreprise',
        es: '/empresa',
        ru: '/kompaniya',
        uk: '/kompaniya',
    },
    '/urunler': {
        tr: '/urunler',
        en: '/products',
        de: '/produkte',
        bg: '/produkti',
        ro: '/produse',
        ar: '/muntajat',
        fr: '/produits',
        es: '/productos',
        ru: '/produktsiya',
        uk: '/produkty',
    },
    '/medya': {
        tr: '/medya',
        en: '/media',
        de: '/medien',
        bg: '/media',
        ro: '/media',
        ar: '/iilam',
        fr: '/medias',
        es: '/medios',
        ru: '/media',
        uk: '/media',
    },
    '/kariyer': {
        tr: '/kariyer',
        en: '/careers',
        de: '/karriere',
        bg: '/kariera',
        ro: '/cariere',
        ar: '/wazaif',
        fr: '/carrieres',
        es: '/carreras',
        ru: '/kariera',
        uk: '/karyera',
    },
    '/kvkk': {
        tr: '/kvkk',
        en: '/kvkk',
        de: '/kvkk',
        bg: '/kvkk',
        ro: '/kvkk',
        ar: '/kvkk',
        fr: '/kvkk',
        es: '/kvkk',
        ru: '/kvkk',
        uk: '/kvkk',
    },
    '/aydinlatma-metni': {
        tr: '/aydinlatma-metni',
        en: '/privacy-notice',
        de: '/datenschutzhinweis',
        bg: '/izvestie-za-poveritelnost',
        ro: '/notificare-confidentialitate',
        ar: '/ishar-al-khususiya',
        fr: '/notice-confidentialite',
        es: '/aviso-privacidad',
        ru: '/uvedomlenie-o-konfidencialnosti',
        uk: '/povidomlennya-pro-konfidentsiynist',
    },
    '/cerez-politikasi': {
        tr: '/cerez-politikasi',
        en: '/cookie-policy',
        de: '/cookie-richtlinie',
        bg: '/politika-za-biskvitki',
        ro: '/politica-cookie',
        ar: '/siyasat-al-cookies',
        fr: '/politique-cookies',
        es: '/politica-cookies',
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
    const path = segments.length === 0 ? '/' : `/${segments.join('/')}`;

    for (const key of appPathnames) {
        if (localizedPathnames[key][locale] === path) {
            return key;
        }
    }
    return null;
}
