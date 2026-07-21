'use client';

import type { ReactNode } from 'react';
import { heroOnDarkAccentTextClass } from '@/components/common/heroAccentStyles';

type HeroAccentTextProps = {
    children: ReactNode;
    /** Koyu hero görsellerinde açık gri vurgu (#e5e7eb) */
    onDark?: boolean;
    className?: string;
};

/** Lacivert vurgu — kutu/arka plan yok; sadece yumuşak ışık halesi */
export default function HeroAccentText({ children, onDark = false, className = '' }: HeroAccentTextProps) {
    return (
        <span
            className={`${onDark ? heroOnDarkAccentTextClass : 'text-primary'} ${className}`.trim()}
            style={{
                textShadow: onDark
                    ? '0 1px 2px rgba(0,0,0,0.85), 0 2px 10px rgba(0,0,0,0.45)'
                    : '0 0 1px rgba(255,255,255,0.28), 0 1px 1px rgba(255,255,255,0.18)',
            }}
        >
            {children}
        </span>
    );
}
