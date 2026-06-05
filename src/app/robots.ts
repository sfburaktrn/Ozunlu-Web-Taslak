import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/i18n/seo';

const siteUrl = getSiteUrl();
const isProduction = process.env.NODE_ENV === 'production';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: isProduction ? '/' : undefined,
            disallow: isProduction ? undefined : '/',
        },
        sitemap: `${siteUrl}/sitemap.xml`,
        host: siteUrl,
    };
}
