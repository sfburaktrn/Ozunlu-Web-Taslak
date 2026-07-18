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
    const tLabels = useTranslations('common.labels');
    const textDir = useTextDirection();

    return (
        <section className="pt-2 pb-12 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden border border-white/10 group layout-fixed"
                >
                    <div className="absolute inset-0">
                        <Image
                            src="/images/ozunlu-hafif-tasarim-damperli-yari-romork.webp"
                            alt={t('imageAlt')}
                            fill
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, 1200px"
                            className="object-cover object-[72%_center] md:object-[80%_center] group-hover:scale-105 transition-transform duration-700"
                            quality={90}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/25 md:bg-gradient-to-r md:from-black/92 md:via-black/55 md:via-40% md:to-transparent" />
                    </div>

                    <div className="absolute top-6 right-6 z-30">
                        <span className="inline-block py-2 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-widest uppercase">
                            {t('category')}
                        </span>
                    </div>

                    <div className="relative z-10 h-full flex flex-col justify-end md:justify-center items-start p-6 pb-6 md:p-12 lg:p-16">
                        <div className="absolute top-14 left-6 md:hidden z-0 pointer-events-none select-none">
                            <span className="text-6xl font-bold text-white/[0.07] leading-none tracking-tighter whitespace-nowrap">
                                {tLabels('ozunluWatermark')}
                            </span>
                        </div>

                        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl relative text-left" dir={textDir}>
                            <div className="hidden md:block absolute -top-16 left-0 z-0 pointer-events-none select-none">
                                <span className="md:text-[8rem] font-bold text-white/[0.07] leading-none tracking-tighter whitespace-nowrap">
                                    {tLabels('ozunluWatermark')}
                                </span>
                            </div>

                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-6 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]"
                            >
                                {t('titleLine1')} <br />
                                <HeroAccentText onDark>{t('titleLine2')}</HeroAccentText>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="relative z-10 text-sm sm:text-base md:text-xl text-gray-300 mb-6 md:mb-8 max-w-xl leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
                            >
                                {t.rich('description', heroRichTextHandlers)}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="relative z-10"
                            >
                                <Link
                                    href={{ pathname: '/yari-romork', hash: 'teklif-formu' }}
                                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary-600 text-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-black/40 border border-white/35"
                                >
                                    {tCommon('cta.teklifAl')}
                                    <ArrowRight size={16} className="md:w-5 md:h-5 icon-directional" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
