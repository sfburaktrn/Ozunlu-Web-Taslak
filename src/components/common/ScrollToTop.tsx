'use client';

import { useEffect, useState } from 'react';
import {
    AnimatePresence,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { scrollToTop } from '@/lib/smoothScroll';

const SHOW_AFTER = 420;
const SIZE = 52;
const STROKE = 2.5;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function ScrollToTop() {
    const t = useTranslations('common.cta');
    const [visible, setVisible] = useState(false);

    const progress = useMotionValue(0);
    const smoothProgress = useSpring(progress, {
        stiffness: 55,
        damping: 22,
        mass: 0.55,
        restDelta: 0.001,
    });
    const strokeDashoffset = useTransform(
        smoothProgress,
        (value) => CIRCUMFERENCE * (1 - value)
    );

    useEffect(() => {
        const update = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            setVisible(scrollTop > SHOW_AFTER);
            progress.set(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);
        };

        update();
        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update, { passive: true });
        return () => {
            window.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
        };
    }, [progress]);

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    type="button"
                    aria-label={t('scrollToTop')}
                    title={t('scrollToTop')}
                    initial={{ opacity: 0, y: 16, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.92 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    onClick={scrollToTop}
                    className="fixed bottom-20 end-5 md:bottom-24 md:end-7 z-[60] group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2"
                >
                    <span className="relative flex h-[52px] w-[52px] items-center justify-center">
                        <svg
                            className="absolute inset-0 -rotate-90"
                            width={SIZE}
                            height={SIZE}
                            viewBox={`0 0 ${SIZE} ${SIZE}`}
                            aria-hidden
                        >
                            <circle
                                cx={SIZE / 2}
                                cy={SIZE / 2}
                                r={RADIUS}
                                fill="none"
                                stroke="rgba(0,5,82,0.14)"
                                strokeWidth={STROKE}
                            />
                            <motion.circle
                                cx={SIZE / 2}
                                cy={SIZE / 2}
                                r={RADIUS}
                                fill="none"
                                stroke="#000552"
                                strokeWidth={STROKE}
                                strokeLinecap="round"
                                strokeDasharray={CIRCUMFERENCE}
                                style={{ strokeDashoffset }}
                            />
                        </svg>

                        <span className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/55 bg-white/30 text-[#000552] shadow-[0_8px_28px_rgba(0,5,82,0.14)] backdrop-blur-2xl transition-all duration-300 group-hover:border-white/70 group-hover:bg-white/45 group-hover:shadow-[0_12px_32px_rgba(0,5,82,0.2)] group-hover:-translate-y-0.5">
                            <ArrowUp
                                size={18}
                                strokeWidth={2.25}
                                className="transition-transform duration-300 group-hover:-translate-y-0.5"
                            />
                        </span>
                    </span>
                </motion.button>
            )}
        </AnimatePresence>
    );
}
