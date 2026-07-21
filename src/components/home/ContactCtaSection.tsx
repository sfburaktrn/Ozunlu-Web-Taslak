'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useTextDirection } from '@/i18n/useTextDirection';

export default function ContactCtaSection() {
    const t = useTranslations('home.contactCta');
    const tCommon = useTranslations('common');
    const textDir = useTextDirection();

    return (
        <section className="bg-white py-4 md:py-8">
            <div className="container mx-auto px-3 sm:px-4">
                {/* Mobile + tablet: full-bleed photo, text top / button bottom, damper clear in middle */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="lg:hidden relative rounded-[1.75rem] md:rounded-[2.5rem] overflow-hidden aspect-[4/5] sm:aspect-[3/4] md:aspect-auto md:min-h-[600px] shadow-2xl layout-fixed"
                >
                    <Image
                        src="/images/ozunlu-turuncu-damperli-yari-romork-kirmizi-cekici-cta.webp"
                        alt={t('imageAlt')}
                        fill
                        className="object-cover object-[60%_38%] sm:object-[65%_36%] md:object-[72%_38%]"
                        sizes="(max-width: 1024px) 100vw, 900px"
                        priority={false}
                    />
                    {/* Soft readability only — no solid black bands */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/45" />

                    <div
                        dir={textDir}
                        className="relative z-10 flex h-full min-h-full flex-col justify-between px-5 pt-5 pb-8 sm:px-8 sm:pt-6 sm:pb-10 md:absolute md:inset-0 md:px-12 md:pt-8 md:pb-12 text-left"
                    >
                        <div className="max-w-[26rem] sm:max-w-[30rem] md:max-w-[34rem]">
                            <span className="inline-flex w-fit mb-4 sm:mb-5 rounded-full border border-white/25 bg-black/25 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white/95 backdrop-blur-sm">
                                {t('badge')}
                            </span>
                            <h2 className="text-[1.65rem] leading-tight sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
                                {t('title')}
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg text-white/95 max-w-xl leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                                {t('description')}
                            </p>
                        </div>

                        <div className="self-start">
                            <Link
                                href="/iletisim"
                                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-white text-[#000552] hover:bg-white/95 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base md:text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                {tCommon('cta.iletisimeGecin')}
                                <ArrowRight className="w-5 h-5 icon-directional" />
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Desktop: side overlay layout */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="hidden lg:block relative rounded-[2.5rem] overflow-hidden min-h-[400px] shadow-2xl layout-fixed"
                >
                    <Image
                        src="/images/ozunlu-turuncu-damperli-yari-romork-kirmizi-cekici-cta.webp"
                        alt={t('imageAlt')}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 1536px) 100vw, 1536px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/10" />

                    <div
                        dir={textDir}
                        className="relative z-10 flex h-full min-h-[400px] flex-col justify-center px-16 py-16 max-w-[30rem] xl:max-w-[36rem] text-left"
                    >
                        <span className="inline-flex w-fit mb-5 rounded-full border border-white/25 bg-black/35 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
                            {t('badge')}
                        </span>
                        <h2 className="text-4xl xl:text-5xl font-bold text-white mb-4 tracking-tight leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]">
                            {t('title')}
                        </h2>
                        <p className="text-xl text-white/90 mb-8 max-w-xl leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
                            {t('description')}
                        </p>
                        <div>
                            <Link
                                href="/iletisim"
                                className="inline-flex items-center gap-2 bg-white text-[#000552] hover:bg-white/95 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                {tCommon('cta.iletisimeGecin')}
                                <ArrowRight className="w-5 h-5 icon-directional" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
