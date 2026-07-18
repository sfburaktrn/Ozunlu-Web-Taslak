'use client';

import { motion, MotionValue } from 'framer-motion';
import { useTranslations } from 'next-intl';

/** Scroll ile ilerleyen sahnelerde alt ortada görünen "kaydır" göstergesi */
export default function ScrollHint({ opacity }: { opacity?: MotionValue<number> }) {
    const t = useTranslations('common');

    return (
        <motion.div
            style={{ opacity }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2.5 pointer-events-none select-none"
        >
            <span className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.35em] text-white/80 drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]">
                {t('scrollHint')}
            </span>
            <span className="relative h-10 w-[2px] overflow-hidden rounded-full bg-white/20">
                <motion.span
                    animate={{ y: ['-120%', '260%'] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute left-0 top-0 h-2/5 w-full rounded-full bg-white"
                />
            </span>
        </motion.div>
    );
}
