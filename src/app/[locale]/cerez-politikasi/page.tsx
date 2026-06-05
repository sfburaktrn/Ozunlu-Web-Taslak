import type { Metadata } from 'next';
import { hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import LegalDocumentView from '@/components/legal/LegalDocumentView';
import { getLegalDocument } from '@/content/legal';
import { routing, type Locale } from '@/i18n/routing';
import { getPageMetadata } from '@/i18n/seo';

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = params;
    if (!hasLocale(routing.locales, locale)) return {};
    const messages = (await import(`../../../../messages/${locale}.json`)).default;
    return getPageMetadata(locale, '/cerez-politikasi', 'legalCookie', messages);
}

export default function CookiePolicyPage({ params }: Props) {
    if (!hasLocale(routing.locales, params.locale)) notFound();
    setRequestLocale(params.locale);
    const document = getLegalDocument(params.locale as Locale, 'cookiePolicy');
    return <LegalDocumentView document={document} />;
}
