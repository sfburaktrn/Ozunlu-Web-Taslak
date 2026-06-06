'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { heroRichTextHandlers } from '@/i18n/richText';
import { useTextDirection } from '@/i18n/useTextDirection';

export default function DamperHero() {
    const t = useTranslations('home.damperHero');
    const tCommon = useTranslations('common');
    const textDir = useTextDirection();

    return (
        <section className="py-12 bg-white">
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
                            src="/images/ozunlu-damper-performans.webp"
                            alt={t('imageAlt')}
                            fill
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, 1200px"
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                            quality={80}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent md:bg-gradient-to-r md:from-black/80 md:via-black/40 md:to-transparent" />
                    </div>

                    <div className="absolute top-6 left-6 z-20">
                        <span className="inline-block py-2 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-widest uppercase">
                            {t('category')}
                        </span>
                    </div>

                    <div className="relative h-full flex items-end md:items-center justify-start p-6 pb-6 md:p-16">
                        <div className="max-w-xl relative" dir={textDir}>
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="relative z-10 text-xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-6 leading-tight text-left"
                            >
                                {t('titleLine1')} <br />
                                <span className="text-primary">{t('titleLine2')}</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="text-xs md:text-lg text-gray-300 mb-6 md:mb-8 leading-relaxed max-w-md text-left"
                            >
                                {t.rich('description', heroRichTextHandlers)}
                            </motion.p>

                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}>
                                <Link
                                    href={{ pathname: '/damper', hash: 'teklif-formu' }}
                                    className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-[#000552] text-white rounded-full font-semibold text-sm md:text-base hover:bg-[#000552]/90 transition-all shadow-lg hover:shadow-xl group/link"
                                >
                                    {tCommon('cta.teklifAl')}
                                    <ArrowRight size={18} className="icon-directional group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
