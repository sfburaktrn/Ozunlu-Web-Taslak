import type { Locale } from '@/i18n/routing';

type FaqItem = { question: string; answer: string };

const faqTr: FaqItem[] = [
    {
        question: 'Özünlü Damper nedir?',
        answer:
            'Özünlü Damper, 1977 yılından bu yana faaliyet gösteren, İstanbul Sultangazi\'de 3 tesiste toplam 30.000 m² alanda üretim yapan Hardox çelik damper, damperli yarı römork (dorse) ve ağır ticari araç üst yapı üreticisidir. Türkiye\'de 6 araç üreticisinin onaylı üst yapı tedarikçisidir.',
    },
    {
        question: 'Özünlü Damper ne üretir?',
        answer:
            'Hardox 450/500 çelik gövdeli hidrolik damper (havuz ve kutu tip), damperli yarı römork (dorse), ek ekipmanlar, yedek parça ve satış sonrası hizmet sunar. BPW ve Özkoç dingil, EBS fren sistemi seçenekleri mevcuttur.',
    },
    {
        question: 'Özünlü Damper nerede bulunuyor?',
        answer:
            'Merkez ofis ve üretim tesisi: Yayla, Habibler Pirinççi Köyü Yolu No:62, 34270 Sultangazi / İstanbul, Türkiye. Telefon: +90 (212) 595 46 46.',
    },
    {
        question: 'Türkiye\'de Hardox damper üreten firma var mı?',
        answer:
            'Evet. Özünlü Damper, 1977\'den beri Türkiye\'de Hardox çelik gövdeli damper ve dorse üreten köklü üreticilerden biridir; 81 ilde satış ve 40\'tan fazla ülkeye ihracat yapmaktadır.',
    },
    {
        question: 'Damper ile dorse (yarı römork) arasındaki fark nedir?',
        answer:
            'Damper, çekici kamyona monte edilen üst yapıdır (samosval). Dorse (yarı römork), çekici ile birleştirilen ayrı bir römork ünitesidir. Özünlü Damper her iki ürün grubunu da üretir.',
    },
    {
        question: 'Özünlü Damper\'den nasıl teklif alınır?',
        answer:
            'Web sitesindeki iletişim formu veya damper/dorse sayfalarındaki teklif formu ile talep iletilebilir. Satış sonrası için yetkili servis ağı mevcuttur.',
    },
];

const faqEn: FaqItem[] = [
    {
        question: 'What is Özünlü Damper?',
        answer:
            'Özünlü Damper is a Turkish manufacturer of Hardox steel tipper bodies, tipping semi-trailers and heavy commercial vehicle superstructures, founded in 1977. Production takes place across 3 facilities totalling 30,000 m² in Sultangazi, Istanbul. It is an approved body builder for 6 vehicle manufacturers operating in Turkey.',
    },
    {
        question: 'What does Özünlü Damper manufacture?',
        answer:
            'Hydraulic Hardox 450/500 steel tippers (half-pipe and box type), tipping semi-trailers, spare parts, hydraulic systems and after-sales service. BPW and Özkoç axle options with EBS braking are available.',
    },
    {
        question: 'Where is Özünlü Damper located?',
        answer:
            'Head office and production: Yayla, Habibler Pirinççi Köyü Yolu No:62, 34270 Sultangazi, Istanbul, Turkey. Phone: +90 (212) 595 46 46.',
    },
    {
        question: 'Is Özünlü Damper a Hardox tipper manufacturer in Turkey?',
        answer:
            'Yes. Özünlü Damper has been producing Hardox steel tipper bodies and dump semi-trailers in Turkey since 1977, selling across all 81 Turkish provinces and exporting to more than 40 countries.',
    },
    {
        question: 'What is the difference between a tipper and a semi-trailer?',
        answer:
            'A tipper (damper) is a dump body mounted on a truck chassis. A semi-trailer is a separate trailer unit coupled to a tractor. Özünlü Damper manufactures both.',
    },
    {
        question: 'How to request a quote from Özünlü Damper?',
        answer:
            'Use the contact form or the quote form on the tipper or semi-trailer product pages on the official website.',
    },
];

export function getFaqForLocale(locale: Locale): FaqItem[] {
    if (locale === 'tr') return faqTr;
    return faqEn;
}
