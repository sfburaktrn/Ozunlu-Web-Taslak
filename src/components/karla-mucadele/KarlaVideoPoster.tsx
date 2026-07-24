'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useTextDirection } from '@/i18n/useTextDirection';

const POSTER_VIDEO = '/videos/ozunlu-karla-mucadele-hero.mp4';
const POSTER_VIDEO_MOBILE = '/videos/ozunlu-karla-mucadele-hero-mobile.mp4';
const POSTER_IMAGE = '/images/karla-mucadele/ozunlu-karla-mucadele-hero-poster.webp';

export default function KarlaVideoPoster() {
    const t = useTranslations('karlaMucadele.poster');
    const tCommon = useTranslations('common');
    const textDir = useTextDirection();
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    const smooth = useSpring(scrollYProgress, {
        stiffness: 55,
        damping: 28,
        mass: 0.75,
        restDelta: 0.001,
    });

    // Girişte kart gibi büyür; çıkışta beyaza soft fade yok — tam kalır
    const stageScale = useTransform(smooth, [0, 0.18, 1], [0.86, 1, 1]);
    const stageRadius = useTransform(smooth, [0, 0.18, 1], ['1.75rem', '0rem', '0rem']);
    const videoScale = useTransform(smooth, [0.05, 0.92], [1, 1.28]);
    const copyOpacity = useTransform(smooth, [0, 0.1, 0.55, 0.72], [1, 1, 1, 0]);
    const copyY = useTransform(smooth, [0.55, 0.72], [0, -24]);
    const stagePad = useTransform(smooth, [0, 0.18, 1], [12, 0, 0]);

    useEffect(() => {
        const video = videoRef.current;
        const root = containerRef.current;
        if (!video || !root) return;
        video.defaultMuted = true;
        video.muted = true;
        video.setAttribute('playsinline', '');
        video.setAttribute('muted', '');
        video.setAttribute('webkit-playsinline', '');

        const pickSrc = () => {
            const mobile = window.matchMedia('(max-width: 767px)').matches;
            const next = mobile ? POSTER_VIDEO_MOBILE : POSTER_VIDEO;
            if (!video.src.endsWith(next)) {
                video.src = next;
                video.load();
            }
        };
        pickSrc();

        const play = () => {
            video.muted = true;
            video.play().catch(() => undefined);
        };

        // Sticky section görünürken oynat (video elementi transform’da IO kaçırabiliyor)
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) play();
                else video.pause();
            },
            { root: null, threshold: 0, rootMargin: '0px' },
        );
        io.observe(root);
        video.addEventListener('canplay', play);
        play();

        const mq = window.matchMedia('(max-width: 767px)');
        const onMq = () => {
            pickSrc();
            play();
        };
        mq.addEventListener('change', onMq);

        return () => {
            io.disconnect();
            video.removeEventListener('canplay', play);
            mq.removeEventListener('change', onMq);
        };
    }, []);

    return (
        <section id="karla-video-poster" className="relative bg-white">
            <div ref={containerRef} className="relative h-[200vh]">
                <motion.div
                    style={{ paddingLeft: stagePad, paddingRight: stagePad }}
                    className="sticky top-0 flex h-[100svh] w-full items-center justify-center overflow-hidden"
                >
                    <motion.div
                        style={{ scale: stageScale, borderRadius: stageRadius }}
                        className="relative h-full w-full overflow-hidden bg-black shadow-[0_24px_60px_rgba(0,5,82,0.18)] will-change-transform"
                    >
                        <motion.div
                            className="absolute inset-0"
                            style={{ scale: videoScale, transformOrigin: '50% 45%' }}
                        >
                            <video
                                ref={videoRef}
                                className="absolute inset-0 h-full w-full object-cover"
                                poster={POSTER_IMAGE}
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="auto"
                                aria-hidden
                            />
                        </motion.div>

                        <div
                            aria-hidden
                            className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15 md:bg-gradient-to-r md:from-black/45 md:via-black/10 md:to-transparent"
                        />

                        <motion.div
                            dir={textDir}
                            style={{ opacity: copyOpacity, y: copyY }}
                            className="relative z-10 flex h-full flex-col justify-end p-6 pb-20 sm:p-10 sm:pb-24 md:max-w-xl md:justify-center md:p-14 lg:p-20"
                        >
                            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.24em] text-white/85 drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]">
                                {t('eyebrow')}
                            </p>
                            <h2 className="text-3xl font-bold tracking-tight text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.7)] md:text-5xl">
                                {t('title')}
                            </h2>
                            <p className="mt-4 text-base leading-relaxed text-white/95 drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] md:text-lg">
                                {t('description')}
                            </p>
                            <Link
                                href="/iletisim"
                                className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-base font-bold text-[#000552] shadow-lg transition-all hover:-translate-y-0.5 hover:bg-white/95"
                            >
                                {tCommon('cta.iletisimeGecin')}
                                <ArrowRight className="h-5 w-5 icon-directional" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
