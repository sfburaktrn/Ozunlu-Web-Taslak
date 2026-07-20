type CountryFlagProps = {
    code: string;
    className?: string;
};

function countryCodeToEmoji(code: string): string {
    return code
        .toUpperCase()
        .replace(/[^A-Z]/g, '')
        .slice(0, 2)
        .split('')
        .map((char) => String.fromCodePoint(127397 + char.charCodeAt(0)))
        .join('');
}

export default function CountryFlag({ code, className = 'text-base leading-none' }: CountryFlagProps) {
    return (
        <span className={`inline-flex items-center justify-center shrink-0 ${className}`} aria-hidden>
            {countryCodeToEmoji(code)}
        </span>
    );
}
