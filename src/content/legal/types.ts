export type LegalSection = {
    title: string;
    paragraphs?: string[];
    items?: string[];
};

export type LegalDocument = {
    title: string;
    lastUpdated: string;
    intro: string;
    sections: LegalSection[];
};

export type LegalPageKey = 'kvkk' | 'privacyNotice' | 'cookiePolicy';
