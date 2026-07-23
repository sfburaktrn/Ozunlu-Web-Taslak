'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useTextDirection } from '@/i18n/useTextDirection';

const HERO_VIDEO = '/videos/ozunlu-karla-mucadele-cta.mp4';
const HERO_POSTER = '/images/karla-mucadele/ozunlu-karla-mucadele-cta-poster.webp';

export default function KarlaHero() {
    const t = useTranslations('karlaMucadele.hero');
    const tCommon = useTranslations('common');
    const textDir = useTextDirection();
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        video.defaultMuted = true;
        video.muted = true;
        video.setAttribute('playsinline', '');

        const play = () => {
            video.play().catch(() => undefined);
        };
        video.addEventListener('canplay', play);
        play();

        return () => {
            video.removeEventListener('canplay', play);
        };
    }, []);

    return (
        <section className="relative isolate min-h-[100svh] w-full overflow-hidden bg-black">
            <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full object-cover"
                src={HERO_VIDEO}
                poster={HERO_POSTER}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden
            />
            {/* Ana sayfa tarzı hafif gölge */}
            <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/35"
            />

            <div
                dir={textDir}
                className="relative z-10 flex min-h-[100svh] flex-col justify-end px-5 pb-16 pt-[88px] sm:px-8 md:justify-center md:px-12 md:pb-24 lg:px-20"
            >
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-3xl"
                >
                    <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-white/80 drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)] sm:text-xs">
                        {t('eyebrow')}
                    </p>
                    <h1 className="text-[clamp(2.4rem,8vw,4.75rem)] font-black leading-[0.95] tracking-tight text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.75)]">
                        {t('title')}
                    </h1>
                    <p className="mt-5 max-w-xl text-base leading-relaxed text-white/95 drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)] sm:text-lg md:text-xl">
                        {t('subtitle')}
                    </p>
                    <Link
                        href="/iletisim"
                        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-base font-bold text-[#000552] shadow-lg transition-all hover:-translate-y-0.5 hover:bg-white/95"
                    >
                        {tCommon('cta.teklifAlin')}
                        <ArrowRight className="h-5 w-5 icon-directional" />
                    </Link>
                </motion.div>
            </div>

            <motion.div
                aria-hidden
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/50"
            >
                <ChevronDown size={22} />
            </motion.div>
        </section>
    );
}
