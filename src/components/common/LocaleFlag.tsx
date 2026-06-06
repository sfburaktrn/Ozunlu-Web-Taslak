import type { Locale } from '@/i18n/routing';

type LocaleFlagProps = {
    locale: Locale;
    className?: string;
};

export default function LocaleFlag({ locale, className = 'w-5 h-[14px]' }: LocaleFlagProps) {
    const base = `${className} rounded-[3px] overflow-hidden shrink-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.08)]`;

    switch (locale) {
        case 'tr':
            return (
                <svg className={base} viewBox="0 0 20 14" aria-hidden>
                    <rect width="20" height="14" fill="#E30A17" />
                    <circle cx="8.2" cy="7" r="3.2" fill="#fff" />
                    <circle cx="9.1" cy="7" r="2.6" fill="#E30A17" />
                    <polygon fill="#fff" points="12.2,7 13.8,7.55 13.1,6.1 13.1,7.9 13.8,6.45" />
                </svg>
            );
        case 'en':
            return (
                <svg className={base} viewBox="0 0 20 14" aria-hidden>
                    <rect width="20" height="14" fill="#012169" />
                    <path d="M0 0 L20 14 M20 0 L0 14" stroke="#fff" strokeWidth="2.4" />
                    <path d="M0 0 L20 14 M20 0 L0 14" stroke="#C8102E" strokeWidth="1.2" />
                    <path d="M10 0 V14 M0 7 H20" stroke="#fff" strokeWidth="4" />
                    <path d="M10 0 V14 M0 7 H20" stroke="#C8102E" strokeWidth="2.4" />
                </svg>
            );
        case 'de':
            return (
                <svg className={base} viewBox="0 0 20 14" aria-hidden>
                    <rect width="20" height="4.67" y="0" fill="#000" />
                    <rect width="20" height="4.67" y="4.67" fill="#DD0000" />
                    <rect width="20" height="4.66" y="9.34" fill="#FFCE00" />
                </svg>
            );
        case 'bg':
            return (
                <svg className={base} viewBox="0 0 20 14" aria-hidden>
                    <rect width="20" height="4.67" y="0" fill="#fff" />
                    <rect width="20" height="4.67" y="4.67" fill="#00966E" />
                    <rect width="20" height="4.66" y="9.34" fill="#D62612" />
                </svg>
            );
        case 'ro':
            return (
                <svg className={base} viewBox="0 0 20 14" aria-hidden>
                    <rect width="6.67" height="14" fill="#002B7F" />
                    <rect width="6.67" height="14" x="6.67" fill="#FCD116" />
                    <rect width="6.66" height="14" x="13.34" fill="#CE1126" />
                </svg>
            );
        case 'ar':
            return (
                <svg className={base} viewBox="0 0 20 14" aria-hidden>
                    <rect width="20" height="14" fill="#006C35" />
                    <rect x="3.5" y="5.8" width="9" height="1" fill="#fff" rx="0.2" />
                    <rect x="4.5" y="7.4" width="7" height="0.8" fill="#fff" rx="0.2" />
                    <path d="M13.5 9.2 L15.8 10.8 L15 8.2 L17 7 L14.5 6.8 L13.5 4.5 L12.5 6.8 L10 7 L11.8 8.2 L11 10.8 Z" fill="#fff" transform="scale(0.45) translate(14,4)" />
                </svg>
            );
        case 'fr':
            return (
                <svg className={base} viewBox="0 0 20 14" aria-hidden>
                    <rect width="6.67" height="14" fill="#002395" />
                    <rect width="6.67" height="14" x="6.67" fill="#fff" />
                    <rect width="6.66" height="14" x="13.34" fill="#ED2939" />
                </svg>
            );
        case 'es':
            return (
                <svg className={base} viewBox="0 0 20 14" aria-hidden>
                    <rect width="20" height="14" fill="#AA151B" />
                    <rect width="20" height="7" y="3.5" fill="#F1BF00" />
                </svg>
            );
        case 'it':
            return (
                <svg className={base} viewBox="0 0 20 14" aria-hidden>
                    <rect width="6.67" height="14" fill="#009246" />
                    <rect width="6.67" height="14" x="6.67" fill="#fff" />
                    <rect width="6.66" height="14" x="13.34" fill="#CE2B37" />
                </svg>
            );
        case 'ru':
            return (
                <svg className={base} viewBox="0 0 20 14" aria-hidden>
                    <rect width="20" height="4.67" y="0" fill="#fff" />
                    <rect width="20" height="4.67" y="4.67" fill="#0039A6" />
                    <rect width="20" height="4.66" y="9.34" fill="#D52B1E" />
                </svg>
            );
        case 'uk':
            return (
                <svg className={base} viewBox="0 0 20 14" aria-hidden>
                    <rect width="20" height="7" y="0" fill="#005BBB" />
                    <rect width="20" height="7" y="7" fill="#FFD500" />
                </svg>
            );
        default:
            return <span className={`${className} inline-block bg-gray-200 rounded-[3px]`} />;
    }
}
