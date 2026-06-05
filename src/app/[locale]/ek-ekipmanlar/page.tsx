import type { Metadata } from 'next';
import { hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { getPageMetadata } from '@/i18n/seo';
import EkEkipmanlarPageClient from '@/app/ek-ekipmanlar/EkEkipmanlarPageClient';

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = params;
    if (!hasLocale(routing.locales, locale)) return {};
    const messages = (await import(`../../../../messages/${locale}.json`)).default;
    return getPageMetadata(locale, '/ek-ekipmanlar', 'ekEkipmanlar', messages);
}

export default function EkEkipmanlarPage({ params }: Props) {
    if (!hasLocale(routing.locales, params.locale)) notFound();
    setRequestLocale(params.locale);
    return <EkEkipmanlarPageClient />;
}
