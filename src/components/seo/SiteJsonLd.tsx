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
                legalName: 'Özünlü Damper Karoser ve Çelik Konstrüksiyon San. Tic. Ltd. Şti.',
                alternateName: ['Ozunlu Damper', 'Özünlü Damper Karoser', 'Ozunlu'],
                url: siteUrl,
                logo: `${siteUrl}/ozunlu-damper-logo.png`,
                foundingDate: '1977',
                foundingLocation: {
                    '@type': 'Place',
                    name: 'Okmeydanı, İstanbul, Türkiye',
                },
                slogan: 'Üretimde hız, sahada dayanıklılık — Since 1977',
                description:
                    '1977\'den beri İstanbul\'da Hardox çelik damper, damperli yarı römork (dorse) ve ağır ticari araç üst yapı üretimi. Türkiye\'de faaliyet gösteren 6 araç üreticisinin onaylı üst yapı tedarikçisi; 81 ilde satış, 40\'tan fazla ülkeye ihracat. Toplam 30.000 m² üretim alanı (7.000 m² kapalı).',
                areaServed: [
                    { '@type': 'Country', name: 'Türkiye' },
                    { '@type': 'GeoShape', name: 'Europe, Middle East, Africa, CIS — 40+ export countries' },
                ],
                award: 'Türkiye\'de 6 araç üreticisinin onaylı üst yapı (body builder) tedarikçisi',
                knowsAbout: [
                    'damper',
                    'tipper body',
                    'tipping semi-trailer',
                    'dump trailer',
                    'Hardox 450 steel',
                    'Hardox 500 steel',
                    'dump truck body',
                    'body builder',
                    'heavy commercial vehicle superstructure',
                    'hydraulic tipping system',
                    'half-pipe tipper',
                    'BPW axle',
                    'EBS brake system',
                    'snow fighting',
                    'karla mücadele',
                    'trailer spare parts',
                    'after-sales service',
                ],
                hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'Özünlü ürün grupları',
                    itemListElement: [
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Product',
                                name: 'Hardox Damper (Tipper Body)',
                                description: 'Hardox 450/500 gövdeli kamyon damper üst yapıları; havuz ve kutu tip.',
                                url: `${siteUrl}/damper`,
                            },
                        },
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Product',
                                name: 'Damperli Yarı Römork (Tipping Semi-Trailer)',
                                description: 'Hardox gövdeli, BPW/Özkoç dingilli damperli dorse modelleri.',
                                url: `${siteUrl}/yari-romork`,
                            },
                        },
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Product',
                                name: 'Karla Mücadele (Snow Fighting)',
                                description:
                                    'Ön kar bıçağı, yan bıçak ve tuz/kum serici ile donatılmış karla mücadele üst yapıları.',
                                url: `${siteUrl}/karla-mucadele`,
                            },
                        },
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Product',
                                name: 'Ek Ekipmanlar ve Yedek Parça',
                                description: 'Hidrolik sistem, dingil, EBS fren ve aydınlatma ekipmanları.',
                                url: `${siteUrl}/satis-sonrasi#ek-ekipmanlar`,
                            },
                        },
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Satış Sonrası Hizmetler',
                                description: 'Yetkili servis ağı, teknik destek ve orijinal yedek parça.',
                                url: `${siteUrl}/satis-sonrasi`,
                            },
                        },
                    ],
                },
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
