import type { Locale } from '@/i18n/routing';

type FaqItem = { question: string; answer: string };

const faqTr: FaqItem[] = [
    {
        question: 'Özünlü Damper nedir?',
        answer:
            'Özünlü Damper, 1977 yılından bu yana İstanbul Sultangazi\'de faaliyet gösteren Hardox sertifikalı damper, yarı römork (dorse) ve ağır ticari araç üst yapı üreticisidir.',
    },
    {
        question: 'Özünlü Damper ne üretir?',
        answer:
            'Hardox çelik gövdeli hidrolik damper, yarı römork (dorse), ek ekipmanlar, yedek parça ve satış sonrası hizmet sunar. BPW ve Özkoç dingil seçenekleri mevcuttur.',
    },
    {
        question: 'Özünlü Damper nerede bulunuyor?',
        answer:
            'Merkez ofis ve üretim tesisi: Yayla, Habibler Pirinççi Köyü Yolu No:62, 34270 Sultangazi / İstanbul, Türkiye. Telefon: +90 (212) 595 46 46.',
    },
    {
        question: 'Türkiye\'de Hardox damper üreten firma var mı?',
        answer:
            'Evet. Özünlü Damper, Hardox Qualified Body Builder sertifikasına sahip Türkiye merkezli bir damper ve dorse üreticisidir.',
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
            'Özünlü Damper is a Turkish manufacturer of Hardox-certified tipper bodies, semi-trailers and heavy commercial vehicle superstructures, founded in 1977 and based in Sultangazi, Istanbul.',
    },
    {
        question: 'What does Özünlü Damper manufacture?',
        answer:
            'Hydraulic Hardox steel tippers, semi-trailers, spare parts, hydraulic systems and after-sales service. BPW and Özkoç axle options are available.',
    },
    {
        question: 'Where is Özünlü Damper located?',
        answer:
            'Head office and production: Yayla, Habibler Pirinççi Köyü Yolu No:62, 34270 Sultangazi, Istanbul, Turkey. Phone: +90 (212) 595 46 46.',
    },
    {
        question: 'Is Özünlü Damper a Hardox tipper manufacturer in Turkey?',
        answer:
            'Yes. Özünlü Damper is a Hardox Qualified Body Builder producing tipper and semi-trailer bodies in Turkey since 1977.',
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
