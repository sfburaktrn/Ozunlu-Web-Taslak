import type { Metadata } from 'next';
import { hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import AfterSalesHero from '@/components/after-sales/AfterSalesHero';
import ServicesGrid from '@/components/after-sales/ServicesGrid';
import DocumentLibrary from '@/components/after-sales/DocumentLibrary';
import AfterSalesMapPreview from '@/components/home/AfterSalesMapPreview';
import { routing } from '@/i18n/routing';
import { getPageMetadata } from '@/i18n/seo';

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = params;
    if (!hasLocale(routing.locales, locale)) return {};
    const messages = (await import(`../../../../messages/${locale}.json`)).default;
    return getPageMetadata(locale, '/satis-sonrasi', 'afterSales', messages);
}

export default function AfterSalesPage({ params }: Props) {
    if (!hasLocale(routing.locales, params.locale)) notFound();
    setRequestLocale(params.locale);
    return (
        <main className="min-h-screen bg-white pt-[50px] pb-12 md:pt-[60px] md:pb-24 px-4 sm:px-6">
            <AfterSalesHero />
            <ServicesGrid />
            <DocumentLibrary />
            <AfterSalesMapPreview />
        </main>
    );
}
