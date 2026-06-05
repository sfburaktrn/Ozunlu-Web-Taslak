import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { getPageMetadata } from '@/i18n/seo';
import HomePageClient from './HomePageClient';

type Props = {
    params: { locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = params;
    if (!hasLocale(routing.locales, locale)) return {};
    const messages = (await import(`../../../messages/${locale}.json`)).default;
    return getPageMetadata(locale, '/', 'home', messages);
}

export default function HomePage({ params }: Props) {
    const { locale } = params;
    if (!hasLocale(routing.locales, locale)) notFound();
    setRequestLocale(locale);
    return (
        <>
            <link rel="preload" href="/banner-video-new.mp4" as="video" type="video/mp4" />
            <HomePageClient />
        </>
    );
}
