'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const articleKeys = ['a1', 'a2', 'a3'] as const;
const articleImages = ['/hardox-logo.png', '/news/news-photo-1.jpeg', '/products/gallery-3.jpg'];

export default function IndustryInsights() {
    const t = useTranslations('mediaPage.insights');

    return (
        <section className="py-24 bg-ozunlu-900 border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter leading-tight">
                            {t('title')}{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
                                {t('titleHighlight')}
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-xl leading-relaxed">{t('description')}</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {articleKeys.map((key, index) => (
                        <motion.article
                            key={key}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group flex flex-col h-full bg-ozunlu-950 rounded-xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300"
                        >
                            <div className="relative aspect-[16/9] overflow-hidden">
                                <div className="absolute inset-0 bg-gray-800" />
                                <Image
                                    src={articleImages[index]}
                                    alt={t(`articles.${key}.title`)}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-ozunlu-950 via-transparent to-transparent opacity-60 z-10" />
                                <div className="absolute top-4 start-4 z-20">
                                    <span className="bg-primary/90 text-white text-[10px] font-bold px-3 py-1 rounded backdrop-blur-md">
                                        {t(`articles.${key}.category`)}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-medium uppercase tracking-wider">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {t(`articles.${key}.date`)}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        {t(`articles.${key}.readTime`)}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors leading-snug">
                                    {t(`articles.${key}.title`)}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {t(`articles.${key}.excerpt`)}
                                </p>

                                <div className="flex items-center text-white font-bold text-xs uppercase tracking-widest mt-auto">
                                    {t('readMore')}{' '}
                                    <ArrowRight className="w-3 h-3 ms-2 icon-directional group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
