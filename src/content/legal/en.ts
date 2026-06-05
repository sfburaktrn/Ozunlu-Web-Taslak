import type { LegalDocument, LegalPageKey } from './types';
import { formatLegalEmailRef, getLegalContactEmail } from '@/lib/siteEmails';

const company =
    'ÖZÜNLÜ DAMPER KAROSER VE ÇELİK KONSTRÜKSİYON SANAYİ VE TİCARET LİMİTED ŞİRKETİ';
const shortName = 'Özünlü Damper';
const address =
    'Yayla, Habibler Pirinççi Köyü Yolu No:62, 34270 Sultangazi / Istanbul, Turkey';
const email = getLegalContactEmail();
const emailRef = formatLegalEmailRef('en');
const phone = '+90 (212) 595 46 46';

export const legalEn: Record<LegalPageKey, LegalDocument> = {
    kvkk: {
        title: 'Personal Data Protection Policy (KVKK)',
        lastUpdated: '5 June 2025',
        intro: `As ${company} (“${shortName}” or the “Company”), we process your personal data as data controller in accordance with Turkish Law No. 6698 on the Protection of Personal Data (“KVKK”), ensuring lawfulness, fairness, accuracy, purpose limitation, data minimisation and appropriate retention.`,
        sections: [
            {
                title: '1. Data Controller',
                paragraphs: [
                    `Data Controller: ${company}`,
                    `Address: ${address}`,
                    `Phone: ${phone}`,
                    email ? `Email: ${email}` : 'Email: (to be configured)',
                ],
            },
            {
                title: '2. Categories of Personal Data Processed',
                items: [
                    'Identity data (name, surname, title)',
                    'Contact data (phone, email, address)',
                    'Customer transaction data (quotes, orders, invoices, warranty records)',
                    'Financial data (payment and billing information)',
                    'Transaction security data (IP address, logs, cookie data)',
                    'Marketing and preference data (where explicit consent is given)',
                    'HR application data (CV, education, experience)',
                ],
            },
            {
                title: '3. Purposes of Processing',
                items: [
                    'Providing quotes, sales and after-sales services for our products',
                    'Customer relationship management, technical support and authorised service network operations',
                    'Contract performance, invoicing and accounting',
                    'Compliance with legal obligations',
                    'Responding to enquiries and corporate correspondence',
                    'HR processes and job application evaluation',
                    'Website security, performance analysis and user experience improvement',
                    'Marketing communications where explicit consent is obtained',
                ],
            },
            {
                title: '4. Transfer of Personal Data',
                paragraphs: [
                    'Your data may be shared with business partners, suppliers, our authorised service network, legally authorised public institutions, and audit/advisory firms within the limits of KVKK Articles 8 and 9.',
                    'Where international transfer is required, appropriate safeguards under KVKK Article 9 and Board decisions are applied.',
                ],
            },
            {
                title: '5. Collection Methods and Legal Bases',
                paragraphs: [
                    'Data is collected via our website, contact and quote forms, email, phone, events, contracts, service records and similar channels.',
                ],
                items: [
                    'Explicitly provided for by law',
                    'Necessary for contract establishment or performance',
                    'Compliance with legal obligations',
                    'Establishment, exercise or protection of a right',
                    'Legitimate interests (without prejudice to fundamental rights)',
                    'Your explicit consent (marketing and non-essential cookies)',
                ],
            },
            {
                title: '6. Retention Periods',
                paragraphs: [
                    'Data is retained for the period required by the processing purpose and applicable statutory limitation periods, then deleted, destroyed or anonymised.',
                ],
            },
            {
                title: '7. Your Rights under KVKK',
                paragraphs: ['Under Article 11 of KVKK, you have the right to:'],
                items: [
                    'Learn whether your personal data is processed',
                    'Request information if processed',
                    'Learn the purpose of processing and whether it is used accordingly',
                    'Know third parties to whom data is transferred domestically or abroad',
                    'Request correction of incomplete or inaccurate data',
                    'Request deletion or destruction under Article 7 conditions',
                    'Request notification of correction/deletion to third parties',
                    'Object to adverse results from exclusively automated processing',
                    'Claim compensation for damage arising from unlawful processing',
                ],
            },
            {
                title: '8. How to Apply',
                paragraphs: [
                    `You may submit requests regarding your rights to ${email} or in writing to ${address}. Requests are answered free of charge within 30 days at the latest.`,
                    'If your request is rejected, inadequately answered or not answered in time, you may complain to the Turkish Personal Data Protection Authority.',
                ],
            },
        ],
    },
    privacyNotice: {
        title: 'Privacy Notice (Clarification Text)',
        lastUpdated: '5 June 2025',
        intro: `At ${company}, we take the security of your personal data seriously. This Privacy Notice is prepared pursuant to KVKK Article 10 to inform you about how your data is processed and your rights.`,
        sections: [
            {
                title: '1. Identity of the Data Controller',
                paragraphs: [
                    `${company}`,
                    `${address}`,
                    email ? `Tel: ${phone} | Email: ${email}` : `Tel: ${phone}`,
                ],
            },
            {
                title: '2. What Data Do We Process?',
                paragraphs: [
                    'Through contact and quote forms, phone calls, emails, sales and service processes and job applications, we may process identity, contact, customer transaction, financial, security and request/complaint data.',
                ],
            },
            {
                title: '3. Why Do We Process Your Data?',
                items: [
                    'Quote, sales, delivery and after-sales service processes',
                    'Customer satisfaction, technical support and warranty operations',
                    'Legal compliance',
                    'Responding to your enquiries',
                    'Evaluating job applications',
                    'Website security and service quality improvement',
                ],
            },
            {
                title: '4. Who May Receive Your Data?',
                paragraphs: [
                    'Your data may be shared with logistics, IT, accounting and legal advisers, authorised service partners and legally authorised public bodies.',
                ],
            },
            {
                title: '5. How Is Data Collected?',
                paragraphs: [
                    'Data is collected through electronic forms, contracts, call centre, email, face-to-face meetings and website cookies.',
                ],
            },
            {
                title: '6. Your Rights',
                paragraphs: [
                    `To exercise your rights under KVKK Article 11, contact us via ${emailRef}. For details, please see our Personal Data Protection Policy.`,
                ],
            },
        ],
    },
    cookiePolicy: {
        title: 'Cookie Policy',
        lastUpdated: '5 June 2025',
        intro: `${shortName} (www.ozunlu.com) uses cookies to provide a better experience, measure site performance and ensure security. This Cookie Policy explains which cookies we use and how you can manage your preferences.`,
        sections: [
            {
                title: '1. What Are Cookies?',
                paragraphs: [
                    'Cookies are small text files stored on your browser by websites you visit. They help remember preferences, maintain sessions and generate usage statistics.',
                ],
            },
            {
                title: '2. Types of Cookies We Use',
                items: [
                    'Strictly Necessary Cookies: Required for core website functions including session management, security and language preference.',
                    'Performance / Analytics Cookies: Help us analyse visitor numbers, page views and traffic sources anonymously (e.g. Google Analytics).',
                    'Functional Cookies: Remember your preferred language, region or form inputs.',
                    'Marketing Cookies: With your consent, enable relevant content and advertising.',
                ],
            },
            {
                title: '3. Legal Basis',
                paragraphs: [
                    'Essential cookies are used on the basis of legitimate interest and contract performance. Non-essential cookies require your consent via browser settings or our cookie preference panel.',
                ],
            },
            {
                title: '4. Third-Party Cookies',
                paragraphs: [
                    'We may use third-party cookies from Google Analytics, Google Maps (contact page embed) and social media platforms, subject to their respective privacy policies.',
                ],
            },
            {
                title: '5. Managing Cookies',
                paragraphs: [
                    'You can delete, block or allow specific cookies in your browser settings. Disabling cookies may affect some website functionality.',
                ],
                items: [
                    'Chrome: Settings → Privacy and security → Cookies',
                    'Firefox: Settings → Privacy & Security → Cookies and Site Data',
                    'Safari: Preferences → Privacy → Cookies',
                    'Edge: Settings → Cookies and site permissions',
                ],
            },
            {
                title: '6. Retention',
                paragraphs: [
                    'Session cookies are deleted when you close your browser. Persistent cookies may remain on your device from a few days up to 24 months depending on type.',
                ],
            },
            {
                title: '7. Contact',
                paragraphs: [
                    email
                        ? `For questions about this Cookie Policy, contact us at ${email} or ${phone}.`
                        : `For questions about this Cookie Policy, contact us at ${phone} or via ${emailRef}.`,
                ],
            },
        ],
    },
};
