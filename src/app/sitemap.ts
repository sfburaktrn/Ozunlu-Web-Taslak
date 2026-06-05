import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/i18n/seo';
import { getLocalizedPathname, type AppPathname } from '@/i18n/pathnames';
import { localeHreflang, locales, type Locale } from '@/i18n/routing';
import { appPathnames } from '@/i18n/pathnames';
import { sitemapRouteConfig } from '@/i18n/sitemapConfig';

const siteUrl = getSiteUrl();

/** Stable date for last build — updated on each deploy */
const lastModified = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
    const entries: MetadataRoute.Sitemap = [];

    for (const route of appPathnames) {
        const config = sitemapRouteConfig[route as AppPathname];

        for (const locale of locales) {
            const url = `${siteUrl}${getLocalizedPathname(locale, route as AppPathname)}`;
            const languages: Record<string, string> = {};

            for (const altLocale of locales) {
                languages[localeHreflang[altLocale]] = `${siteUrl}${getLocalizedPathname(altLocale as Locale, route as AppPathname)}`;
            }
            languages['x-default'] = `${siteUrl}${getLocalizedPathname('tr', route as AppPathname)}`;

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
