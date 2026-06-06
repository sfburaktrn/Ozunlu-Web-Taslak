import { getSiteUrl } from '@/i18n/seo';
import type { Locale } from '@/i18n/routing';
import { localeHreflang } from '@/i18n/routing';
import { getPublicEmail } from '@/lib/siteEmails';

type Props = {
    locale: Locale;
};

export default function SiteJsonLd({ locale }: Props) {
    const siteUrl = getSiteUrl();
    const homeUrl =
        locale === 'tr' ? siteUrl : `${siteUrl}/${locale}`;
    const contactEmail = getPublicEmail('contact');

    const contactPoint: Record<string, unknown> = {
        '@type': 'ContactPoint',
        telephone: '+90-212-595-46-46',
        contactType: 'customer service',
        areaServed: 'TR',
        availableLanguage: ['tr', 'en', 'de', 'bg', 'ro', 'ar', 'fr', 'es', 'it', 'ru', 'uk'],
    };
    if (contactEmail) {
        contactPoint.email = contactEmail;
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': ['Organization', 'Manufacturer'],
                '@id': `${siteUrl}/#organization`,
                name: 'Özünlü Damper',
                alternateName: ['Ozunlu Damper', 'Özünlü Damper Karoser'],
                url: siteUrl,
                logo: `${siteUrl}/ozunlu-logo-new.png`,
                foundingDate: '1977',
                description:
                    'Hardox sertifikalı damper, yarı römork ve ağır ticari araç üst yapı üreticisi. Since 1977.',
                knowsAbout: [
                    'damper',
                    'tipper body',
                    'semi-trailer',
                    'Hardox steel',
                    'dump truck body',
                    'body builder',
                    'heavy commercial vehicle superstructure',
                    'hydraulic tipper',
                    'BPW axle',
                ],
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'Yayla, Habibler Pirinççi Köyü Yolu No:62',
                    addressLocality: 'Sultangazi',
                    addressRegion: 'İstanbul',
                    postalCode: '34270',
                    addressCountry: 'TR',
                },
                contactPoint,
                sameAs: [
                    'https://www.linkedin.com/company/ozunlu-damper/',
                    'https://www.facebook.com/OzunluDamper/',
                    'https://www.instagram.com/ozunludamper/',
                    'https://www.youtube.com/@ozunludamper588',
                ],
            },
            {
                '@type': 'WebSite',
                '@id': `${siteUrl}/#website`,
                url: siteUrl,
                name: 'Özünlü Damper',
                description: 'Damper, yarı römork ve üst yapı çözümleri — Since 1977',
                publisher: { '@id': `${siteUrl}/#organization` },
                inLanguage: Object.values(localeHreflang),
                potentialAction: {
                    '@type': 'ReadAction',
                    target: `${siteUrl}/llms.txt`,
                    name: 'LLM site description',
                },
            },
            {
                '@type': 'WebPage',
                '@id': `${homeUrl}/#webpage`,
                url: homeUrl,
                name: 'Özünlü Damper',
                isPartOf: { '@id': `${siteUrl}/#website` },
                about: { '@id': `${siteUrl}/#organization` },
                inLanguage: localeHreflang[locale],
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
