import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { getSiteUrl } from '@/i18n/seo';

export const metadata: Metadata = {
    metadataBase: new URL(getSiteUrl()),
    icons: {
        icon: '/ozunlu-logo.png',
        shortcut: '/ozunlu-logo.png',
        apple: '/ozunlu-logo.png',
    },
};

type Props = {
    children: ReactNode;
};

export default function RootLayout({ children }: Props) {
    return (
        <html lang="tr" suppressHydrationWarning>
            <body className="font-sans antialiased dark">{children}</body>
        </html>
    );
}
