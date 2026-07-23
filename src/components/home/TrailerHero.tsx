'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { heroRichTextHandlers } from '@/i18n/richText';
import { useTextDirection } from '@/i18n/useTextDirection';
import HeroAccentText from '@/components/common/HeroAccentText';

export default function TrailerHero() {
    const t = useTranslations('home.trailerHero');
    const tCommon = useTranslations('common');
    const textDir = useTextDirection();

    return (
        <section className="bg-white pt-2 pb-12">
            <div className="container mx-auto px-4">
                {/* Mobil: iki ayrı oval kart üst üste */}
                <div className="layout-fixed relative md:hidden">
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative h-[280px] overflow-hidden rounded-[1.75rem] border border-black/5 bg-[#ececee] shadow-[0_10px_28px_rgba(0,0,0,0.1)] sm:h-[300px]"
                    >
                        <Image
                            src="/images/ozunlu-hafif-tasarim-damperli-yari-romork.webp"
                            alt={t('imageAlt')}
                            fill
                            loading="lazy"
                            sizes="100vw"
                            className="object-cover object-[88%_42%] sm:object-[90%_40%]"
                            quality={90}
                        />
                        <div className="absolute left-4 top-4 z-20">
                            <span className="inline-block rounded-full border border-white/20 bg-black/45 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md sm:px-4 sm:py-2 sm:text-xs">
                                {t('category')}
                            </span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 48, scale: 0.94 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{
                            type: 'spring',
                            stiffness: 130,
                            damping: 18,
                            mass: 0.8,
                            delay: 0.5,
                        }}
                        className="relative z-20 -mt-[3.75rem] mx-3 flex flex-col justify-center rounded-[1.75rem] border border-white/30 bg-black/55 px-4 py-5 shadow-[0_16px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl backdrop-saturate-150 sm:-mt-16 sm:mx-4 sm:px-6 sm:py-6"
                    >
                        <div className="w-full text-left" dir={textDir}>
                            <motion.h2
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                                className="mb-3 text-[clamp(1.75rem,7vw,2.75rem)] font-bold leading-[1.08] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]"
                            >
                                {t('titleLine1')} <br />
                                <HeroAccentText onDark>{t('titleLine2')}</HeroAccentText>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.7, duration: 0.5 }}
                                className="mb-5 text-sm leading-relaxed text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)] sm:text-base"
                            >
                                {t.rich('description', heroRichTextHandlers)}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.78, duration: 0.45 }}
                            >
                                <Link
                                    href={{ pathname: '/yari-romork', hash: 'teklif-formu' }}
                                    className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-primary px-6 py-3 text-base font-semibold text-white shadow-lg shadow-black/40 transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90"
                                >
                                    {tCommon('cta.teklifAl')}
                                    <ArrowRight size={16} className="icon-directional" />
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Tablet + desktop / landscape laptop: birleşik kart */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="group layout-fixed relative hidden w-full overflow-hidden rounded-3xl border border-black/5 md:block lg:h-[600px]"
                >
                    <div className="relative h-[320px] overflow-hidden bg-[#1a1a1a] lg:absolute lg:inset-0 lg:h-full">
                        <Image
                            src="/images/ozunlu-hafif-tasarim-damperli-yari-romork.webp"
                            alt={t('imageAlt')}
                            fill
                            loading="lazy"
                            sizes="(max-width: 1023px) 100vw, 1200px"
                            className="object-cover object-[center_38%] transition-transform duration-700 group-hover:scale-[1.02] lg:object-[82%_center] lg:group-hover:scale-105"
                            quality={90}
                        />
                        <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-black/92 via-black/55 via-40% to-transparent lg:block" />
                    </div>

                    <div className="absolute left-6 top-6 z-30">
                        <span className="inline-block rounded-full border border-white/20 bg-black/45 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md">
                            {t('category')}
                        </span>
                    </div>

                    <div className="relative z-10 bg-[#0c0c0e] px-8 py-7 lg:absolute lg:inset-0 lg:flex lg:items-center lg:justify-start lg:bg-transparent lg:p-12 xl:p-16">
                        <div
                            className="w-full max-w-lg text-left lg:max-w-[26rem] xl:max-w-[28rem] 2xl:max-w-[33rem]"
                            dir={textDir}
                        >
                            <h2 className="mb-3 text-[clamp(1.75rem,7vw,2.75rem)] font-bold leading-[1.08] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] lg:mb-6 lg:text-[2.5rem] xl:text-[3rem] 2xl:text-[3.75rem]">
                                {t('titleLine1')} <br />
                                <HeroAccentText onDark>{t('titleLine2')}</HeroAccentText>
                            </h2>

                            <p className="mb-5 max-w-[33rem] text-base leading-relaxed text-gray-300 lg:mb-8 lg:text-lg lg:text-gray-200 lg:drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
                                {t.rich('description', heroRichTextHandlers)}
                            </p>

                            <Link
                                href={{ pathname: '/yari-romork', hash: 'teklif-formu' }}
                                className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-black/40 transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90"
                            >
                                {tCommon('cta.teklifAl')}
                                <ArrowRight size={20} className="icon-directional" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
