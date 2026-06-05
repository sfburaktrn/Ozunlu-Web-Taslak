import type { Metadata } from 'next';
import { hasLocale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import ContactForm from '@/components/contact/ContactForm';
import { routing } from '@/i18n/routing';
import { getPageMetadata } from '@/i18n/seo';

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = params;
    if (!hasLocale(routing.locales, locale)) return {};
    const messages = (await import(`../../../../messages/${locale}.json`)).default;
    return getPageMetadata(locale, '/iletisim', 'contact', messages);
}

export default function ContactPage({ params }: Props) {
    if (!hasLocale(routing.locales, params.locale)) notFound();
    setRequestLocale(params.locale);
    return (
        <main className="min-h-screen bg-white pt-24 md:pt-28 px-4 sm:px-6">
            <ContactForm />
        </main>
    );
}
