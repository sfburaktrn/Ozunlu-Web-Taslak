import type { Metadata } from 'next';
import { getPageKeywords } from './keywords';
import { localeHreflang, locales, type Locale } from './routing';
import { appPathnames, getLocalizedPathname, type AppPathname } from './pathnames';

const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
    'https://www.ozunlu.com';

type PageSeoKey =
    | 'home'
    | 'damper'
    | 'yariRomork'
    | 'ekEkipmanlar'
    | 'afterSales'
    | 'contact'
    | 'legalKvkk'
    | 'legalPrivacy'
    | 'legalCookie';

type SeoMessages = {
    seo: Record<
        PageSeoKey,
        {
            title: string;
            description: string;
        }
    >;
};

/** Maps internal page route to SEO message key */
export const pathnameToSeoKey: Record<AppPathname, PageSeoKey> = {
    '/': 'home',
    '/damper': 'damper',
    '/yari-romork': 'yariRomork',
    '/ek-ekipmanlar': 'ekEkipmanlar',
    '/satis-sonrasi': 'afterSales',
    '/iletisim': 'contact',
    '/kvkk': 'legalKvkk',
    '/aydinlatma-metni': 'legalPrivacy',
    '/cerez-politikasi': 'legalCookie',
};

export function getSiteUrl() {
    return siteUrl;
}

export function getLocalizedPath(locale: Locale, pathname: AppPathname) {
    return getLocalizedPathname(locale, pathname);
}

export function buildAlternateLanguages(pathname: AppPathname) {
    const languages: Record<string, string> = {};
    for (const locale of locales) {
        languages[localeHreflang[locale]] = `${siteUrl}${getLocalizedPathname(locale, pathname)}`;
    }
    languages['x-default'] = `${siteUrl}${getLocalizedPathname('tr', pathname)}`;
    return languages;
}

const defaultOgImage = `${siteUrl}/damper-hero.webp`;

function buildVerification(): Metadata['verification'] | undefined {
    const google = process.env.GOOGLE_SITE_VERIFICATION?.trim();
    const bing = process.env.BING_SITE_VERIFICATION?.trim();
    if (!google && !bing) return undefined;
    return {
        ...(google ? { google } : {}),
        ...(bing ? { other: { 'msvalidate.01': bing } } : {}),
    };
}

export function buildPageMetadata({
    locale,
    pathname,
    title,
    description,
    keywords,
}: {
    locale: Locale;
    pathname: AppPathname;
    title: string;
    description: string;
    keywords?: string;
}): Metadata {
    const canonical = `${siteUrl}${getLocalizedPathname(locale, pathname)}`;
    const verification = buildVerification();

    return {
        title,
        description,
        ...(keywords ? { keywords } : {}),
        metadataBase: new URL(siteUrl),
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-image-preview': 'large',
                'max-snippet': -1,
                'max-video-preview': -1,
            },
        },
        ...(verification ? { verification } : {}),
        alternates: {
            canonical,
            languages: buildAlternateLanguages(pathname),
        },
        openGraph: {
            title,
            description,
            url: canonical,
            locale: localeHreflang[locale],
            alternateLocale: locales
                .filter((l) => l !== locale)
                .map((l) => localeHreflang[l]),
            siteName: 'Özünlü Damper',
            type: 'website',
            images: [
                {
                    url: defaultOgImage,
                    width: 1920,
                    height: 1080,
                    alt: 'Özünlü Damper',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [defaultOgImage],
        },
        category: 'business',
    };
}

export function getPageMetadata(
    locale: Locale,
    pathname: AppPathname,
    pageKey: PageSeoKey,
    messages: SeoMessages,
): Metadata {
    const seo = messages.seo[pageKey];
    return buildPageMetadata({
        locale,
        pathname,
        title: seo.title,
        description: seo.description,
        keywords: getPageKeywords(locale, pageKey),
    });
}

export const indexableRoutes = appPathnames;
