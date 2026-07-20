'use client';

import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { defaultRichTextHandlers } from '@/i18n/richText';
import { Link } from '@/i18n/navigation';

const DESKTOP_POSTER = '/banner-hero-poster.webp';
const MOBILE_POSTER = '/banner-hero-poster-mobile.webp';
const DESKTOP_VIDEO = '/banner-video-new-opt.mp4';
const MOBILE_VIDEO = '/banner-video-mobile.mp4';

export default function HeroSection() {
    const t = useTranslations('home.hero');
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        video.defaultMuted = true;
        video.muted = true;
        video.setAttribute('muted', '');
        video.setAttribute('playsinline', '');
        video.setAttribute('webkit-playsinline', '');

        const tryPlay = () => {
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    // Autoplay blocked — poster remains visible until interaction
                });
            }
        };

        const onCanPlay = () => tryPlay();
        video.addEventListener('canplay', onCanPlay);

        const onVisibility = () => {
            if (document.visibilityState === 'visible') tryPlay();
        };
        document.addEventListener('visibilitychange', onVisibility);

        return () => {
            video.removeEventListener('canplay', onCanPlay);
            document.removeEventListener('visibilitychange', onVisibility);
        };
    }, []);

    return (
        <div className="viewport-screen relative min-h-[640px] w-full overflow-hidden bg-ozunlu-950">
            <div className="absolute inset-0 z-0">
                <picture className="absolute inset-0 block">
                    <source media="(max-width: 767px)" srcSet={MOBILE_POSTER} type="image/webp" />
                    <img
                        src={DESKTOP_POSTER}
                        alt=""
                        decoding="async"
                        fetchPriority="high"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </picture>

                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    poster={MOBILE_POSTER}
                    className="absolute inset-0 h-full w-full object-cover"
                >
                    <source src={MOBILE_VIDEO} media="(max-width: 767px)" type="video/mp4" />
                    <source src={DESKTOP_VIDEO} type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
            </div>

            <div className="relative z-10 flex h-full min-h-[640px] flex-col items-center justify-center text-center px-4 pt-16 pb-20">
                <div className="hero-fade-up">
                    <h1 className="text-[clamp(2.35rem,11vw,4.5rem)] font-black text-white mb-4 md:mb-6 tracking-tighter leading-[1.02] uppercase drop-shadow-[0_2px_14px_rgba(0,0,0,0.75)]">
                        {t('titleLine1')} <br />
                        <span className="text-white">{t('titleLine2')}</span>
                    </h1>
                </div>

                <div className="hero-fade-in mt-3 md:mt-6 max-w-[min(100%,42rem)]">
                    <p className="text-base sm:text-lg md:text-2xl text-gray-200 font-light tracking-wide drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                        {t.rich('subtitle', defaultRichTextHandlers)}
                    </p>
                </div>

                <div className="hero-fade-up-delayed flex w-full max-w-md flex-col sm:w-auto sm:max-w-none sm:flex-row gap-3 sm:gap-4 mt-8 md:mt-12">
                    <Link
                        href={{ pathname: '/damper', hash: 'teklif-formu' }}
                        className="group relative flex justify-center px-5 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/35 md:bg-white/30 border border-white/60 text-primary text-sm sm:text-base font-bold tracking-[0.12em] sm:tracking-widest uppercase overflow-hidden transition-[transform,background-color,border-color] duration-300 hover:bg-white/45 md:hover:scale-105 hover:border-white/70 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            {t('ctaDamper')} <ArrowRight size={18} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                        </span>
                    </Link>
                    <Link
                        href={{ pathname: '/yari-romork', hash: 'teklif-formu' }}
                        className="group relative flex justify-center px-5 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/35 md:bg-white/30 border border-white/60 text-primary text-sm sm:text-base font-bold tracking-[0.12em] sm:tracking-widest uppercase overflow-hidden transition-[transform,background-color,border-color] duration-300 hover:bg-white/45 md:hover:scale-105 hover:border-white/70 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            {t('ctaYariRomork')} <ArrowRight size={18} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                        </span>
                    </Link>
                </div>
            </div>

            <button
                type="button"
                className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center opacity-80 transition-opacity hover:opacity-100"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                aria-label={t('scroll')}
            >
                <div className="flex h-[50px] w-[30px] justify-center rounded-[15px] border-2 border-white/30 p-2">
                    <span className="hero-scroll-dot block h-3 w-1 rounded-full bg-white" />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-white/50">{t('scroll')}</p>
            </button>
        </div>
    );
}
