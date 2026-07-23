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
        <div className="viewport-screen relative left-1/2 w-screen min-w-0 max-w-none min-h-[640px] -translate-x-1/2 overflow-hidden bg-ozunlu-950 [@media(orientation:landscape)_and_(max-height:500px)]:h-[100dvh] [@media(orientation:landscape)_and_(max-height:500px)]:min-h-[100dvh] [@media(orientation:landscape)_and_(max-height:500px)]:w-[100dvw]">
            <div className="absolute inset-0 z-0 h-full w-full">
                <picture className="absolute inset-0 block h-full w-full">
                    {/* Kısa landscape’te mobil poster — masaüstü videosu yanları kesmesin */}
                    <source
                        media="(max-width: 1023px), (orientation: landscape) and (max-height: 500px)"
                        srcSet={MOBILE_POSTER}
                        type="image/webp"
                    />
                    <img
                        src={DESKTOP_POSTER}
                        alt=""
                        decoding="async"
                        fetchPriority="high"
                        className="absolute inset-0 h-full w-full object-cover object-center [@media(orientation:landscape)_and_(max-height:500px)]:object-[center_45%]"
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
                    className="absolute inset-0 h-full w-full object-cover object-center [@media(orientation:landscape)_and_(max-height:500px)]:object-[center_45%]"
                >
                    <source
                        src={MOBILE_VIDEO}
                        media="(max-width: 1023px), (orientation: landscape) and (max-height: 500px)"
                        type="video/mp4"
                    />
                    <source src={DESKTOP_VIDEO} type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
            </div>

            <div className="relative z-10 flex h-full min-h-[640px] w-full flex-col items-center justify-center px-4 pt-16 pb-24 text-center sm:px-6 [@media(orientation:landscape)_and_(max-height:500px)]:min-h-0 [@media(orientation:landscape)_and_(max-height:500px)]:px-6 [@media(orientation:landscape)_and_(max-height:500px)]:pt-12 [@media(orientation:landscape)_and_(max-height:500px)]:pb-8">
                <div className="hero-fade-up w-full max-w-[min(100%,56rem)]">
                    <h1 className="mb-4 text-[clamp(2.35rem,11vw,4.5rem)] font-black uppercase leading-[1.02] tracking-tighter text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.75)] md:mb-6 [@media(orientation:landscape)_and_(max-height:500px)]:mb-2 [@media(orientation:landscape)_and_(max-height:500px)]:text-[clamp(1.25rem,8.5vh,2.1rem)] [@media(orientation:landscape)_and_(max-height:500px)]:leading-[1.15] [@media(orientation:landscape)_and_(max-height:500px)]:tracking-tight">
                        {t('titleLine1')} <br />
                        <span className="text-white">{t('titleLine2')}</span>
                    </h1>
                </div>

                <div className="hero-fade-in mt-3 w-full max-w-[min(100%,42rem)] px-1 md:mt-6 [@media(orientation:landscape)_and_(max-height:500px)]:mt-1 [@media(orientation:landscape)_and_(max-height:500px)]:px-2">
                    <p className="text-base font-light tracking-wide text-gray-200 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] sm:text-lg md:text-2xl [@media(orientation:landscape)_and_(max-height:500px)]:text-sm [@media(orientation:landscape)_and_(max-height:500px)]:leading-snug">
                        {t.rich('subtitle', defaultRichTextHandlers)}
                    </p>
                </div>

                <div className="hero-fade-up-delayed mt-8 flex w-full max-w-md flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:gap-4 md:mt-12 [@media(orientation:landscape)_and_(max-height:500px)]:mt-3 [@media(orientation:landscape)_and_(max-height:500px)]:max-w-none [@media(orientation:landscape)_and_(max-height:500px)]:flex-row [@media(orientation:landscape)_and_(max-height:500px)]:flex-wrap [@media(orientation:landscape)_and_(max-height:500px)]:justify-center [@media(orientation:landscape)_and_(max-height:500px)]:gap-2">
                    <Link
                        href={{ pathname: '/damper', hash: 'teklif-formu' }}
                        className="group relative flex justify-center overflow-hidden rounded-full border border-white/60 bg-white/35 px-5 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-primary shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-[transform,background-color,border-color] duration-300 hover:border-white/70 hover:bg-white/45 sm:px-8 sm:py-4 sm:text-base sm:tracking-widest md:bg-white/30 md:hover:scale-105 [@media(orientation:landscape)_and_(max-height:500px)]:px-4 [@media(orientation:landscape)_and_(max-height:500px)]:py-2 [@media(orientation:landscape)_and_(max-height:500px)]:text-[11px] [@media(orientation:landscape)_and_(max-height:500px)]:tracking-[0.08em]"
                    >
                        <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                            {t('ctaDamper')}{' '}
                            <ArrowRight
                                size={16}
                                className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
                            />
                        </span>
                    </Link>
                    <Link
                        href={{ pathname: '/yari-romork', hash: 'teklif-formu' }}
                        className="group relative flex justify-center overflow-hidden rounded-full border border-white/60 bg-white/35 px-5 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-primary shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-[transform,background-color,border-color] duration-300 hover:border-white/70 hover:bg-white/45 sm:px-8 sm:py-4 sm:text-base sm:tracking-widest md:bg-white/30 md:hover:scale-105 [@media(orientation:landscape)_and_(max-height:500px)]:px-4 [@media(orientation:landscape)_and_(max-height:500px)]:py-2 [@media(orientation:landscape)_and_(max-height:500px)]:text-[11px] [@media(orientation:landscape)_and_(max-height:500px)]:tracking-[0.08em]"
                    >
                        <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                            {t('ctaYariRomork')}{' '}
                            <ArrowRight
                                size={16}
                                className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
                            />
                        </span>
                    </Link>
                </div>
            </div>

            {/* Landscape kısa ekranda gizle — butonlarla çakışmasın */}
            <button
                type="button"
                className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center opacity-80 transition-opacity hover:opacity-100 [@media(orientation:landscape)_and_(max-height:500px)]:hidden"
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
