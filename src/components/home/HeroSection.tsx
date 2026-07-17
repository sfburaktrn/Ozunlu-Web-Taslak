'use client';

import { useEffect, useRef, useState } from 'react';
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
    const [showVideo, setShowVideo] = useState(false);

    useEffect(() => {
        const desktop = window.matchMedia('(min-width: 768px)').matches;
        setShowVideo(desktop);
        if (!desktop) return;

        const video = videoRef.current;
        if (!video) return;
        video.play().catch(() => {});
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden bg-ozunlu-950">
            <div className="absolute inset-0 z-0">
                {showVideo ? (
                    <video
                        ref={videoRef}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        poster="/banner-hero-poster.webp"
                        className="h-full w-full object-cover"
                    >
                        <source src="/banner-video-new.mp4" type="video/mp4" />
                    </video>
                ) : (
                    <Image
                        src="/banner-hero-poster.webp"
                        alt=""
                        fill
                        priority
                        sizes="100vw"
                        quality={75}
                        className="object-cover"
                    />
                )}
            </div>

            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
                <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeOut' }}>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-tight uppercase relative z-10">
                        {t('titleLine1')} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
                            {t('titleLine2')}
                        </span>
                    </h1>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="mt-6 max-w-2xl">
                    <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide">{t.rich('subtitle', defaultRichTextHandlers)}</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 1 }} className="flex flex-col sm:flex-row gap-4 mt-10 md:mt-12">
                    <Link href={{ pathname: '/damper', hash: 'teklif-formu' }} className="group relative px-8 py-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-[#002349] font-bold tracking-widest uppercase overflow-hidden transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:border-white/40 shadow-lg shadow-black/10">
                        <span className="relative z-10 flex items-center gap-3">
                            {t('ctaDamper')} <ArrowRight size={18} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                        </span>
                    </Link>
                    <Link href={{ pathname: '/yari-romork', hash: 'teklif-formu' }} className="group relative px-8 py-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-[#002349] font-bold tracking-widest uppercase overflow-hidden transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:border-white/40 shadow-lg shadow-black/10">
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
