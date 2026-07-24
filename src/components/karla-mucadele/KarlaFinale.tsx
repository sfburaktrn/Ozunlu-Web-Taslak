'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useTextDirection } from '@/i18n/useTextDirection';

const FINALE_VIDEO = '/videos/ozunlu-karla-mucadele-finale.mp4';
const FINALE_VIDEO_MOBILE = '/videos/ozunlu-karla-mucadele-finale-mobile.mp4';
const FINALE_POSTER = '/images/karla-mucadele/ozunlu-karla-mucadele-finale-poster.webp';

/**
 * Tipografik manifesto — video zemin, hafif yazı okunabilirliği
 */
export default function KarlaFinale() {
    const t = useTranslations('karlaMucadele.finale');
    const textDir = useTextDirection();
    const videoRef = useRef<HTMLVideoElement>(null);

    const pillars = [t('pillars.0'), t('pillars.1'), t('pillars.2')];

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        video.defaultMuted = true;
        video.muted = true;
        video.setAttribute('playsinline', '');

        const pickSrc = () => {
            const mobile = window.matchMedia('(max-width: 767px)').matches;
            const next = mobile ? FINALE_VIDEO_MOBILE : FINALE_VIDEO;
            if (!video.src.endsWith(next)) {
                video.src = next;
                video.load();
            }
        };
        pickSrc();

        const play = () => {
            video.play().catch(() => undefined);
        };

        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) play();
                else video.pause();
            },
            { threshold: 0.3 },
        );
        io.observe(video);
        video.addEventListener('canplay', play);

        const mq = window.matchMedia('(max-width: 767px)');
        const onMq = () => pickSrc();
        mq.addEventListener('change', onMq);

        return () => {
            io.disconnect();
            video.removeEventListener('canplay', play);
            mq.removeEventListener('change', onMq);
        };
    }, []);

    return (
        <section id="karla-finale" className="relative bg-white py-4 md:py-8">
            <div className="container mx-auto px-3 sm:px-4">
                <div className="relative isolate min-h-[min(78svh,640px)] overflow-hidden rounded-[1.75rem] shadow-[0_24px_60px_rgba(0,5,82,0.18)] md:min-h-[min(72svh,700px)] md:rounded-[2.5rem]">
                    <div aria-hidden className="absolute inset-0 bg-[#0a0a0c]" />
                    <video
                        ref={videoRef}
                        className="absolute inset-0 h-full w-full object-contain object-center"
                        poster={FINALE_POSTER}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        aria-label={t('truckAlt')}
                    />

                    {/* Sadece yazı tarafında hafif okunabilirlik — metalik lacivert yok */}
                    <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/20 md:bg-gradient-to-r md:from-black/50 md:via-black/15 md:to-transparent"
                    />

                    <div className="relative z-10 flex h-full min-h-[min(78svh,640px)] items-end md:min-h-[min(72svh,700px)] md:items-center">
                        <div className="container mx-auto w-full px-6 py-14 sm:px-10 md:px-12 lg:px-16 lg:py-20">
                            <motion.div
                                dir={textDir}
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                                className="max-w-xl"
                            >
                                <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.3em] text-white/55 drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]">
                                    {t('eyebrow')}
                                </p>

                                <h2 className="font-[Georgia,'Times_New_Roman',serif] text-[clamp(2.5rem,7vw,4.75rem)] font-medium italic leading-[0.98] tracking-tight text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.55)]">
                                    <span className="block text-white/50">{t('line1')}</span>
                                    <span className="mt-1 block">{t('line2')}</span>
                                </h2>

                                <p className="mt-6 max-w-md text-base leading-relaxed text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] md:text-lg">
                                    {t('subtitle')}
                                </p>

                                <ul className="mt-9 flex flex-wrap items-center gap-x-0 gap-y-3">
                                    {pillars.map((label, i) => (
                                        <li key={label} className="flex items-center">
                                            {i > 0 && (
                                                <span
                                                    aria-hidden
                                                    className="mx-4 h-3 w-px bg-white/30 sm:mx-5"
                                                />
                                            )}
                                            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/80 drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)] sm:text-xs">
                                                {label}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/iletisim"
                                    className="group mt-11 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-base font-bold text-[#000552] shadow-lg transition-all hover:-translate-y-0.5 hover:bg-white/95"
                                >
                                    {t('cta')}
                                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 icon-directional" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
