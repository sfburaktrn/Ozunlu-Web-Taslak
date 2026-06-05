'use client';

import { motion } from 'framer-motion';
import { Factory, Globe, Award } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { defaultRichTextHandlers } from '@/i18n/richText';

const statKeys = ['production', 'global', 'quality'] as const;
const icons = { production: Factory, global: Globe, quality: Award };

export default function FacilitiesMap() {
    const t = useTranslations('corporate.facilities');

    return (
        <section className="py-24 bg-ozunlu-950 relative overflow-hidden border-t border-white/5">
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                }}
            />

            <div className="absolute inset-0 bg-gradient-to-b from-ozunlu-950 via-transparent to-ozunlu-950" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
                        {t('title')}{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
                            {t('titleHighlight')}
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg font-light">{t.rich('description', defaultRichTextHandlers)}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {statKeys.map((key, index) => {
                        const Icon = icons[key];
                        return (
                            <motion.div
                                key={key}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group relative p-8 bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500 rounded-sm hover:-translate-y-2"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-white/10 group-hover:border-white/20 group-hover:bg-white/10">
                                        <Icon size={32} className="text-gray-300 group-hover:text-white transition-colors" />
                                    </div>

                                    <h3 className="text-gray-500 font-bold tracking-widest text-xs uppercase mb-2">
                                        {t(`${key}.title`)}
                                    </h3>
                                    <div className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter">
                                        {t(`${key}.value`)}
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4 group-hover:text-gray-300 transition-colors">
                                        {t(`${key}.desc`)}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
