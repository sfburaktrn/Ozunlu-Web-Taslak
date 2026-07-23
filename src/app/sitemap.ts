import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/i18n/seo';
import { getLocalizedPathname, type AppPathname } from '@/i18n/pathnames';
import { localeHreflang, locales, type Locale } from '@/i18n/routing';
import { appPathnames } from '@/i18n/pathnames';
import { sitemapRouteConfig } from '@/i18n/sitemapConfig';

const siteUrl = getSiteUrl();

/** Redirect-only / legacy routes — sitemap'te yayınlanmaz */
const SITEMAP_EXCLUDED: ReadonlySet<AppPathname> = new Set(['/ek-ekipmanlar']);

/** Stable date for last build — updated on each deploy */
const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
    const entries: MetadataRoute.Sitemap = [];

    for (const route of appPathnames) {
        if (SITEMAP_EXCLUDED.has(route)) continue;

        const config = sitemapRouteConfig[route];

        for (const locale of locales) {
            const url = `${siteUrl}${getLocalizedPathname(locale, route)}`;
            const languages: Record<string, string> = {};

            for (const altLocale of locales) {
                languages[localeHreflang[altLocale]] = `${siteUrl}${getLocalizedPathname(altLocale as Locale, route)}`;
            }
            languages['x-default'] = `${siteUrl}${getLocalizedPathname('tr', route)}`;

            entries.push({
                url,
                lastModified,
                changeFrequency: config.changeFrequency,
                priority: config.priority,
                alternates: { languages },
            });
        }
    }

    return entries;
}
