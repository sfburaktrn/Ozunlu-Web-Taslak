'use client';

import type { ReactNode } from 'react';

/** Lacivert vurgu — kutu/arka plan yok; sadece yumuşak ışık halesi */
export default function HeroAccentText({ children }: { children: ReactNode }) {
    return (
        <span
            className="text-primary"
            style={{
                textShadow:
                    '0 0 1px rgba(255,255,255,0.28), 0 1px 1px rgba(255,255,255,0.18)',
            }}
        >
            {children}
        </span>
    );
}
