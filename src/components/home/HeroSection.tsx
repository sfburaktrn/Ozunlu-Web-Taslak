'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { defaultRichTextHandlers } from '@/i18n/richText';
import { Link } from '@/i18n/navigation';

export default function HeroSection() {
    const t = useTranslations('home.hero');
    const { scrollY } = useScroll();
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Safari / iOS: muted must be set in JS before play()
        video.defaultMuted = true;
        video.muted = true;
        video.setAttribute('muted', '');
        video.setAttribute('playsinline', '');
        video.setAttribute('webkit-playsinline', '');

        const tryPlay = () => {
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    // Autoplay blocked — retry on next interaction / visibility
                });
            }
        };

        tryPlay();
        video.addEventListener('loadeddata', tryPlay);
        video.addEventListener('canplay', tryPlay);

        const onVisibility = () => {
            if (document.visibilityState === 'visible') tryPlay();
        };
        document.addEventListener('visibilitychange', onVisibility);

        return () => {
            video.removeEventListener('loadeddata', tryPlay);
            video.removeEventListener('canplay', tryPlay);
            document.removeEventListener('visibilitychange', onVisibility);
        };
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden bg-ozunlu-950">
            <div className="absolute inset-0 z-0">
                {/* Poster fallback while video loads (esp. iOS) */}
                <Image
                    src="/banner-hero-poster.webp"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    quality={75}
                    className="object-cover"
                />
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster="/banner-hero-poster.webp"
                    className="absolute inset-0 h-full w-full object-cover"
                >
                    <source src="/banner-video-new.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
            </div>

            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
                <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeOut' }}>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-tight uppercase drop-shadow-[0_2px_14px_rgba(0,0,0,0.75)]">
                        {t('titleLine1')} <br />
                        <span className="text-white">{t('titleLine2')}</span>
                    </h1>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="mt-6 max-w-2xl">
                    <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                        {t.rich('subtitle', defaultRichTextHandlers)}
                    </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 1 }} className="flex flex-col sm:flex-row gap-4 mt-10 md:mt-12">
                    <Link
                        href={{ pathname: '/damper', hash: 'teklif-formu' }}
                        className="group relative px-8 py-4 rounded-full bg-white/20 backdrop-blur-2xl border border-white/50 text-primary font-bold tracking-widest uppercase overflow-hidden transition-all duration-300 hover:bg-white/35 hover:scale-105 hover:border-white/70 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            {t('ctaDamper')} <ArrowRight size={18} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                        </span>
                    </Link>
                    <Link
                        href={{ pathname: '/yari-romork', hash: 'teklif-formu' }}
                        className="group relative px-8 py-4 rounded-full bg-white/20 backdrop-blur-2xl border border-white/50 text-primary font-bold tracking-widest uppercase overflow-hidden transition-all duration-300 hover:bg-white/35 hover:scale-105 hover:border-white/70 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            {t('ctaYariRomork')} <ArrowRight size={18} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                        </span>
                    </Link>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
                style={{ opacity: useTransform(scrollY, [0, 200], [1, 0]) }}
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <div className="w-[30px] h-[50px] rounded-[15px] border-[2px] border-white/30 flex justify-center p-2">
                    <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }} className="w-1 h-3 bg-white rounded-full" />
                </div>
                <p className="text-white/50 text-xs uppercase tracking-widest mt-4 font-semibold animate-pulse">{t('scroll')}</p>
            </motion.div>
        </div>
    );
}
