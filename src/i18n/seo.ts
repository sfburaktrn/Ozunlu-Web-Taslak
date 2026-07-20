import type { Metadata } from 'next';
import { headers } from 'next/headers';

import { getPageKeywords } from './keywords';
import { localeHreflang, locales, type Locale } from './routing';
import { appPathnames, getLocalizedPathname, type AppPathname } from './pathnames';

/** Canonical production domain — used for sitemap, robots, JSON-LD, OG, canonicals. */
export const PRODUCTION_SITE_URL = 'https://www.ozunlu.com';

/**
 * SEO base URL resolution:
 * 1. NEXT_PUBLIC_SITE_URL — explicit override (e.g. https://www.ozunlu.com)
 * 2. Production builds — always PRODUCTION_SITE_URL (never *.vercel.app)
 * 3. Local dev — request host (localhost) when available
 * 4. Fallback — PRODUCTION_SITE_URL
 */
export function getSiteUrl(): string {
    const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, '');
    if (configured) return configured;

    if (process.env.NODE_ENV === 'production') {
        return PRODUCTION_SITE_URL;
    }

    const fromRequest = getSiteUrlFromHeaders();
    if (fromRequest) return fromRequest;

    return PRODUCTION_SITE_URL;
}

function getSiteUrlFromHeaders(): string | null {
    try {
        const h = headers();
        const host = (h.get('x-forwarded-host') ?? h.get('host'))?.split(',')[0]?.trim();
        if (!host || host.startsWith('localhost') || host.startsWith('127.0.0.1')) {
            return null;
        }
        const proto = h.get('x-forwarded-proto') ?? 'https';
        return `${proto}://${host}`;
    } catch {
        return null;
    }
}

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

export function getLocalizedPath(locale: Locale, pathname: AppPathname) {
    return getLocalizedPathname(locale, pathname);
}

function absoluteUrl(siteUrl: string, locale: Locale, pathname: AppPathname): string {
    return `${siteUrl}${getLocalizedPathname(locale, pathname)}`;
}

export function buildAlternateLanguages(
    siteUrl: string,
    pathname: AppPathname,
    currentLocale: Locale,
) {
    const languages: Record<string, string> = {};

    for (const locale of locales) {
        languages[localeHreflang[locale]] = absoluteUrl(siteUrl, locale, pathname);
    }

    languages['x-default'] = absoluteUrl(siteUrl, 'tr', pathname);
    languages[localeHreflang[currentLocale]] = absoluteUrl(siteUrl, currentLocale, pathname);

    return languages;
}

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
    const siteUrl = getSiteUrl();
    const canonical = absoluteUrl(siteUrl, locale, pathname);
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
            languages: buildAlternateLanguages(siteUrl, pathname, locale),
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
                    url: `${siteUrl}/images/ozunlu-turuncu-hardox-damper-kamyon.webp`,
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
            images: [`${siteUrl}/images/ozunlu-turuncu-hardox-damper-kamyon.webp`],
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
