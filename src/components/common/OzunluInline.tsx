'use client';

type OzunluInlineProps = {
    className?: string;
    /** Koyu zeminde (hero vb.) */
    onDark?: boolean;
};

/** Metin akışına uygun kompakt wordmark — raster logo satır aralığını bozar */
export default function OzunluInline({
    className = '',
    onDark = false,
}: OzunluInlineProps) {
    return (
        <span
            title="Özünlü"
            className={`inline-flex translate-y-[-0.05em] items-center rounded-[0.2em] border px-[0.35em] py-[0.08em] text-[0.72em] font-black uppercase leading-none tracking-[0.06em] ${
                onDark
                    ? 'border-white/55 bg-[#000552]/75 text-white'
                    : 'border-[#000552]/35 bg-[#000552] text-white'
            } ${className}`}
        >
            Özünlü
        </span>
    );
}
