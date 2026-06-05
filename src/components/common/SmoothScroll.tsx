'use client';

import { useEffect } from 'react';

export default function SmoothScroll() {
    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }

        let lenis: import('lenis').default | null = null;
        let cancelled = false;

        void import('lenis').then(({ default: Lenis }) => {
            if (cancelled) return;

            lenis = new Lenis({
                lerp: 0.09,
                smoothWheel: true,
                syncTouch: false,
                wheelMultiplier: 0.85,
                autoRaf: true,
            });
        });

        return () => {
            cancelled = true;
            lenis?.destroy();
        };
    }, []);

    return null;
}
