import dynamic from 'next/dynamic';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';

const SmoothScroll = dynamic(() => import('@/components/common/SmoothScroll'), { ssr: false });
import Footer from '@/components/Footer';
import LocaleAttributes from '@/components/common/LocaleAttributes';
import { routing, type Locale } from '@/i18n/routing';
import SiteJsonLd from '@/components/seo/SiteJsonLd';
import FaqJsonLd from '@/components/seo/FaqJsonLd';

type Props = {
    children: React.ReactNode;
    params: { locale: string };
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    setRequestLocale(locale);
    const messages = await getMessages();

    return (
        <NextIntlClientProvider messages={messages}>
            <SiteJsonLd locale={locale as Locale} />
            <FaqJsonLd locale={locale as Locale} />
            <LocaleAttributes />
            <SmoothScroll />
            <Navbar />
            {children}
            <Footer />
        </NextIntlClientProvider>
    );
}
