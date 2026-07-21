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
        <section className="pt-2 pb-12 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="group layout-fixed relative w-full overflow-hidden rounded-[1.5rem] border border-black/5 md:rounded-3xl lg:h-[600px]"
                >
                    {/* Mobil / tablet: üstte görsel — genişliği doldurur */}
                    <div className="relative h-[240px] overflow-hidden bg-[#1a1a1a] sm:h-[280px] md:h-[320px] lg:absolute lg:inset-0 lg:h-full">
                        <Image
                            src="/images/ozunlu-hafif-tasarim-damperli-yari-romork.webp"
                            alt={t('imageAlt')}
                            fill
                            loading="lazy"
                            sizes="(max-width: 1023px) 100vw, 1200px"
                            className="object-cover object-[center_45%] transition-transform duration-700 group-hover:scale-[1.02] sm:object-[center_40%] md:object-[center_38%] lg:object-[82%_center] lg:group-hover:scale-105"
                            quality={90}
                        />
                        {/* Desktop: soldan okunabilirlik gradient’i */}
                        <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-black/92 via-black/55 via-40% to-transparent lg:block" />
                    </div>

                    <div className="absolute left-4 top-4 z-30 sm:left-6 sm:top-6">
                        <span className="inline-block rounded-full border border-white/20 bg-black/45 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md sm:px-4 sm:py-2 sm:text-xs">
                            {t('category')}
                        </span>
                    </div>

                    {/* Mobil / tablet: yazı görselin altında; desktop: solda overlay */}
                    <div className="relative z-10 bg-[#0c0c0e] px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-7 lg:absolute lg:inset-0 lg:flex lg:items-center lg:justify-start lg:bg-transparent lg:p-12 xl:p-16">
                        <div
                            className="w-full max-w-lg text-left lg:max-w-[26rem] xl:max-w-[28rem] 2xl:max-w-[33rem]"
                            dir={textDir}
                        >
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="mb-3 text-[clamp(1.75rem,7vw,2.75rem)] font-bold leading-[1.08] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] lg:mb-6 lg:text-[2.5rem] xl:text-[3rem] 2xl:text-[3.75rem]"
                            >
                                {t('titleLine1')} <br />
                                <HeroAccentText onDark>{t('titleLine2')}</HeroAccentText>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="mb-5 max-w-[33rem] text-sm leading-relaxed text-gray-300 sm:text-base lg:mb-8 lg:text-lg lg:text-gray-200 lg:drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
                            >
                                {t.rich('description', heroRichTextHandlers)}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                <Link
                                    href={{ pathname: '/yari-romork', hash: 'teklif-formu' }}
                                    className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-primary px-6 py-3 text-base font-semibold text-white shadow-lg shadow-black/40 transition-all duration-300 hover:-translate-y-1 hover:bg-primary/90 md:px-8 md:py-4 md:text-lg"
                                >
                                    {tCommon('cta.teklifAl')}
                                    <ArrowRight size={16} className="icon-directional md:h-5 md:w-5" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
