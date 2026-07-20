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
        <main className="min-h-[100svh] lg:h-[100svh] bg-[#eef0f4] pt-[52px] md:pt-[60px] px-3 sm:px-4 pb-4 md:pb-6 flex items-center overflow-x-hidden lg:overflow-hidden">
            <ContactForm />
        </main>
    );
}
