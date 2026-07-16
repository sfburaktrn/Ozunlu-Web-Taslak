import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { headers } from 'next/headers';
import { Manrope } from 'next/font/google';
import { getSiteUrl } from '@/i18n/seo';
import { routing } from '@/i18n/routing';

const manrope = Manrope({
    subsets: ['latin', 'latin-ext'],
    display: 'swap',
    variable: '--font-manrope',
    weight: ['400', '500', '600', '700', '800'],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: 'Özünlü Damper | Hardox Damper & Yarı Römork Üreticisi – Since 1977',
        template: '%s',
    },
    description:
        'Hardox sertifikalı damper, yarı römork ve ağır ticari araç üst yapı çözümleri. 1977\'den bu yana Türkiye\'nin güvenilir üreticisi.',
    applicationName: 'Özünlü Damper',
    creator: 'Özünlü Damper',
    publisher: 'Özünlü Damper',
    formatDetection: {
        telephone: true,
        email: true,
        address: true,
    },
    icons: {
        icon: '/ozunlu-logo.png',
        shortcut: '/ozunlu-logo.png',
        apple: '/ozunlu-logo.png',
    },
    alternates: {
        types: {
            'text/plain': [{ url: '/llms.txt', title: 'LLM Site Description' }],
        },
    },
    other: {
        'llms-txt': '/llms.txt',
        'llms-full-txt': '/llms-full.txt',
    },
    ...(process.env.GOOGLE_SITE_VERIFICATION
        ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
        : {}),
};

type Props = {
    children: ReactNode;
};

export default function RootLayout({ children }: Props) {
    const locale = headers().get('x-next-intl-locale') ?? routing.defaultLocale;
    const dir = locale === 'ar' ? 'rtl' : 'ltr';

    return (
        <html lang={locale} dir={dir} suppressHydrationWarning className={manrope.variable}>
            <body className={`${manrope.className} font-sans antialiased dark`}>{children}</body>
        </html>
    );
}
