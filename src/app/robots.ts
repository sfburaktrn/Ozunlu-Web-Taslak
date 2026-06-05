import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/i18n/seo';

const siteUrl = getSiteUrl();
const isProduction = process.env.NODE_ENV === 'production';

/** AI / LLM crawlers — açıkça izin ver */
const aiCrawlers = [
    'GPTBot',
    'ChatGPT-User',
    'ClaudeBot',
    'anthropic-ai',
    'Google-Extended',
    'PerplexityBot',
    'Applebot-Extended',
    'cohere-ai',
    'Meta-ExternalAgent',
    'Bytespider',
    'CCBot',
];

type RobotsRule = NonNullable<Extract<MetadataRoute.Robots['rules'], readonly unknown[]>[number]>;

function aiBotRules(): RobotsRule[] {
    return aiCrawlers.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: ['/api/'],
    }));
}

export default function robots(): MetadataRoute.Robots {
    if (!isProduction) {
        return {
            rules: { userAgent: '*', disallow: '/' },
            sitemap: `${siteUrl}/sitemap.xml`,
        };
    }

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/_next/'],
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: ['/api/'],
            },
            ...aiBotRules(),
        ],
        sitemap: `${siteUrl}/sitemap.xml`,
        host: new URL(siteUrl).host,
    };
}
