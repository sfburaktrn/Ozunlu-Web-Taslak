'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

type HardoxInlineProps = {
    className?: string;
    width?: number;
    height?: number;
};

export default function HardoxInline({
    className = 'inline-block rounded-lg w-20 md:w-[120px] h-auto mx-1 align-middle',
    width = 120,
    height = 30,
}: HardoxInlineProps) {
    const t = useTranslations('common.labels');

    return (
        <Image
            src="/hardox-logo.png"
            alt={t('hardoxAlt')}
            title="Hardox In My Body"
            width={width}
            height={height}
            className={className}
        />
    );
}
