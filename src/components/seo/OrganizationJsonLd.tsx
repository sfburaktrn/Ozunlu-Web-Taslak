import { getSiteUrl } from '@/i18n/seo';
import type { Locale } from '@/i18n/routing';

type Props = {
    locale: Locale;
};

export default function OrganizationJsonLd({ locale }: Props) {
    const siteUrl = getSiteUrl();

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Özünlü Damper',
        url: `${siteUrl}/${locale === 'tr' ? '' : locale}`.replace(/\/$/, '') || siteUrl,
        logo: `${siteUrl}/ozunlu-logo-new.png`,
        foundingDate: '1977',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Yayla, Habibler Pirinççi Köyü Yolu No:62',
            addressLocality: 'Sultangazi',
            addressRegion: 'İstanbul',
            postalCode: '34270',
            addressCountry: 'TR',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+90-212-594-00-44',
            contactType: 'customer service',
            availableLanguage: ['tr', 'en', 'de', 'bg', 'ro', 'ar', 'fr', 'es', 'ru', 'uk'],
        },
        sameAs: [
            'https://www.linkedin.com/company/ozunlu-damper/',
            'https://www.facebook.com/OzunluDamper/',
            'https://www.instagram.com/ozunludamper/',
            'https://www.youtube.com/@ozunludamper588',
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
