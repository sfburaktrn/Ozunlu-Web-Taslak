'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useTextDirection } from '@/i18n/useTextDirection';
import { karlaHeroRichTextHandlers } from '@/i18n/richText';

const HERO_VIDEO = '/videos/ozunlu-karla-mucadele-kureme-hero.mp4';
const HERO_VIDEO_MOBILE = '/videos/ozunlu-karla-mucadele-kureme-hero-mobile.mp4';
const HERO_POSTER = '/images/karla-mucadele/ozunlu-karla-mucadele-kureme-hero-poster.webp';

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

        const pickSrc = () => {
            const mobile = window.matchMedia('(max-width: 767px)').matches;
            const next = mobile ? HERO_VIDEO_MOBILE : HERO_VIDEO;
            if (!video.src.endsWith(next)) {
                video.src = next;
                video.load();
            }
        };
        pickSrc();

        const play = () => {
            video.play().catch(() => undefined);
        };
        video.addEventListener('canplay', play);
        play();

        const mq = window.matchMedia('(max-width: 767px)');
        const onMq = () => pickSrc();
        mq.addEventListener('change', onMq);

        return () => {
            video.removeEventListener('canplay', play);
            mq.removeEventListener('change', onMq);
        };
    }, []);

    return (
        <section className="relative isolate min-h-[100svh] w-full overflow-hidden bg-black">
            <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full object-cover"
                poster={HERO_POSTER}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden
            />
            {/* Yumuşak okunabilirlik — yazı tarafına doğru uzayan fade, keskin kenar yok */}
            <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        textDir === 'rtl'
                            ? 'linear-gradient(to left, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.32) 22%, rgba(0,0,0,0.12) 42%, rgba(0,0,0,0.03) 58%, transparent 72%)'
                            : 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.32) 22%, rgba(0,0,0,0.12) 42%, rgba(0,0,0,0.03) 58%, transparent 72%)',
                }}
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
                    <p className="mt-5 max-w-xl text-base leading-snug text-white/95 drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)] sm:text-lg sm:leading-snug md:text-xl md:leading-[1.35]">
                        {t.rich('subtitle', karlaHeroRichTextHandlers)}
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

            {/* Sonraki bölüme yumuşak iniş — beyaz sayfa */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-36 bg-gradient-to-b from-transparent via-white/50 to-white md:h-48"
            />
        </section>
    );
}
