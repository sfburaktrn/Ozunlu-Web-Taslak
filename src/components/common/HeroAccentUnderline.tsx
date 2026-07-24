'use client';

import type { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    /** İkinci satırda biraz gecikmeli çizgi */
    delay?: 'first' | 'second';
};

/** Hero sloganında anahtar kelimenin altında ince çizgi animasyonu */
export default function HeroAccentUnderline({ children, delay = 'first' }: Props) {
    return (
        <span
            className={`hero-accent-underline ${
                delay === 'second' ? 'hero-accent-underline--late' : ''
            }`}
        >
            {children}
        </span>
    );
}
