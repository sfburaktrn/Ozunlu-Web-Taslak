'use client';

import { useEffect } from 'react';
import { setLenisInstance } from '@/lib/smoothScroll';

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
            setLenisInstance(lenis);
        });

        return () => {
            cancelled = true;
            setLenisInstance(null);
            lenis?.destroy();
        };
    }, []);

    return null;
}
