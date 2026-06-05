import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/common/SmoothScroll';
import LocaleAttributes from '@/components/common/LocaleAttributes';
import { routing, type Locale } from '@/i18n/routing';
import OrganizationJsonLd from '@/components/seo/OrganizationJsonLd';

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
            <OrganizationJsonLd locale={locale as Locale} />
            <LocaleAttributes />
            <SmoothScroll>
                <Navbar />
                {children}
                <Footer />
            </SmoothScroll>
        </NextIntlClientProvider>
    );
}
