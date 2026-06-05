import type { MetadataRoute } from 'next';
import { indexableRoutes, getSiteUrl } from '@/i18n/seo';
import { getLocalizedPathname } from '@/i18n/pathnames';
import { localeHreflang, locales, type Locale } from '@/i18n/routing';
import type { AppPathname } from '@/i18n/pathnames';

const siteUrl = getSiteUrl();

export default function sitemap(): MetadataRoute.Sitemap {
    const entries: MetadataRoute.Sitemap = [];

    for (const route of indexableRoutes) {
        for (const locale of locales) {
            const url = `${siteUrl}${getLocalizedPathname(locale, route as AppPathname)}`;
            const languages: Record<string, string> = {};
            for (const altLocale of locales) {
                languages[localeHreflang[altLocale]] = `${siteUrl}${getLocalizedPathname(altLocale as Locale, route as AppPathname)}`;
            }
            languages['x-default'] = `${siteUrl}${getLocalizedPathname('tr', route as AppPathname)}`;

            entries.push({
                url,
                lastModified: new Date(),
                changeFrequency: route === '/' ? 'weekly' : 'monthly',
                priority: route === '/' ? 1 : 0.8,
                alternates: { languages },
            });
        }
    }

    return entries;
}
