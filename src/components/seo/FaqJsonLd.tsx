import { getFaqForLocale } from '@/content/faqSchema';
import type { Locale } from '@/i18n/routing';

type Props = {
    locale: Locale;
};

export default function FaqJsonLd({ locale }: Props) {
    const items = getFaqForLocale(locale);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
            },
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
