'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const milestoneKeys = [
    { year: '1977', key: 'm1977' },
    { year: '1985', key: 'm1985' },
    { year: '1991', key: 'm1991' },
    { year: '2005', key: 'm2005' },
    { year: '2009', key: 'm2009' },
    { year: 'today', key: 'mToday', yearKey: 'yearToday' },
] as const;

export default function Timeline() {
    const t = useTranslations('corporate.timeline');

    return (
        <section className="py-16 bg-ozunlu-950 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5 skew-y-3 transform origin-top-left rtl:origin-top-right rtl:-skew-y-3" />

            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                    {t('title')} <span className="text-white">{t('titleHighlight')}</span>
                </h2>

                <div className="relative">
                    <div className="absolute start-0 md:start-1/2 md:-translate-x-1/2 rtl:md:translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-transparent via-white/20 to-transparent ms-4 md:ms-0" />

                    <div className="space-y-8">
                        {milestoneKeys.map((item, index) => {
                            const yearLabel = 'yearKey' in item ? t(item.yearKey) : item.year;
                            return (
                                <motion.div
                                    key={item.key}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    <div
                                        className={`w-full md:w-[45%] ps-12 md:ps-0 ${index % 2 === 0 ? 'md:text-end' : 'md:text-start'}`}
                                    >
                                        <div className="group relative p-5 md:p-6 bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-none hover:bg-white/[0.04] hover:border-white/20 transition-all duration-700">
                                            <span className="block text-4xl md:text-5xl font-black text-white/90 mb-2 tracking-tighter">
                                                {yearLabel}
                                            </span>
                                            <h4 className="text-lg md:text-xl font-bold text-gray-200 mb-2 uppercase tracking-widest text-sm">
                                                {t(`${item.key}.title`)}
                                            </h4>
                                            <p className="text-gray-400 leading-relaxed text-sm font-light border-t border-white/5 pt-3 group-hover:text-gray-300 transition-colors">
                                                {t(`${item.key}.desc`)}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="absolute start-0 md:start-1/2 md:-translate-x-1/2 rtl:md:translate-x-1/2 w-9 h-9 flex items-center justify-center">
                                        <div className="w-3 h-3 bg-white rounded-full ring-4 ring-black ring-opacity-50 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                                    </div>

                                    <div className="hidden md:block w-[45%]" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
