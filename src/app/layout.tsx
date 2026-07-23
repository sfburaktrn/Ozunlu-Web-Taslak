import './globals.css';
import type { Metadata, Viewport } from 'next';
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
    adjustFontFallback: true,
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: 'Özünlü Damper | Damper ve Yarı Römork Üreticisi – Since 1977',
        template: '%s',
    },
    description:
        '1977\'den beri İstanbul\'da damper, damperli yarı römork ve ağır ticari araç üst yapı üretimi. 6 araç üreticisinin onaylı üst yapı tedarikçisi; 81 ile satış, 40+ ülkeye ihracat.',
    applicationName: 'Özünlü Damper',
    creator: 'Özünlü Damper',
    publisher: 'Özünlü Damper',
    formatDetection: {
        telephone: true,
        email: true,
        address: true,
    },
    icons: {
        icon: '/ozunlu-damper-logo.webp',
        shortcut: '/ozunlu-damper-logo.webp',
        apple: '/ozunlu-damper-logo.webp',
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

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    viewportFit: 'cover',
    themeColor: '#000552',
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
