import type { AppPathname } from './pathnames';

type SitemapRouteConfig = {
    priority: number;
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
};

export const sitemapRouteConfig: Record<AppPathname, SitemapRouteConfig> = {
    '/': { priority: 1, changeFrequency: 'weekly' },
    '/damper': { priority: 0.95, changeFrequency: 'weekly' },
    '/yari-romork': { priority: 0.95, changeFrequency: 'weekly' },
    '/karla-mucadele': { priority: 0.9, changeFrequency: 'weekly' },
    '/ek-ekipmanlar': { priority: 0.5, changeFrequency: 'monthly' },
    '/satis-sonrasi': { priority: 0.85, changeFrequency: 'monthly' },
    '/iletisim': { priority: 0.85, changeFrequency: 'monthly' },
    '/kvkk': { priority: 0.25, changeFrequency: 'yearly' },
    '/aydinlatma-metni': { priority: 0.25, changeFrequency: 'yearly' },
    '/cerez-politikasi': { priority: 0.25, changeFrequency: 'yearly' },
};
