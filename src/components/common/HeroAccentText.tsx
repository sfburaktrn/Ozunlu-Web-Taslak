'use client';

import type { ReactNode } from 'react';
import { heroOnDarkAccentTextClass } from '@/components/common/heroAccentStyles';

type HeroAccentTextProps = {
    children: ReactNode;
    /** Koyu hero görsellerinde açık gri vurgu (#e5e7eb) */
    onDark?: boolean;
};

/** Lacivert vurgu — kutu/arka plan yok; sadece yumuşak ışık halesi */
export default function HeroAccentText({ children, onDark = false }: HeroAccentTextProps) {
    return (
        <span
            className={onDark ? heroOnDarkAccentTextClass : 'text-primary'}
            style={{
                textShadow:
                    '0 0 1px rgba(255,255,255,0.28), 0 1px 1px rgba(255,255,255,0.18)',
            }}
        >
            {children}
        </span>
    );
}
