'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function LeaderMessage() {
    const t = useTranslations('corporate.leader');

    return (
        <section className="py-16 bg-ozunlu-900 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-2/5 relative rtl:md:order-2"
                    >
                        <div className="relative aspect-[3/4] md:aspect-square rounded-lg overflow-hidden shadow-2xl">
                            <Image
                                src="/ufuk-ozunlu.jpg"
                                alt={t('imageAlt')}
                                fill
                                className="object-cover object-top"
                            />
                        </div>
                        <div className="absolute -bottom-8 -end-8 w-36 h-36 bg-primary/20 rounded-full blur-2xl" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-3/5 rtl:md:order-1"
                    >
                        <h2 className="text-white font-bold tracking-widest uppercase mb-4 text-sm border-b border-primary/50 inline-block pb-2">
                            {t('eyebrow')}
                        </h2>
                        <blockquote className="text-2xl md:text-3xl font-serif italic text-white leading-relaxed mb-8 opacity-90">
                            &ldquo;{t('quote')}&rdquo;
                        </blockquote>

                        <div className="flex items-center gap-4">
                            <div className="h-12 w-1 bg-primary rounded-full" />
                            <div>
                                <h3 className="text-xl font-bold text-white tracking-wide">{t('name')}</h3>
                                <p className="text-gray-400 text-sm uppercase tracking-wider">{t('role')}</p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <p className="text-gray-400 leading-relaxed text-base">{t('bio')}</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
