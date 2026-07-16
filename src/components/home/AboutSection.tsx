'use client';

import { motion } from 'framer-motion';
import { Ruler, PencilRuler, Cog, BadgeCheck } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { heroRichTextHandlers } from '@/i18n/richText';
import { useTextDirection } from '@/i18n/useTextDirection';

export default function AboutSection() {
    const t = useTranslations('home.about');
    const textDir = useTextDirection();

    const cards = [
        { icon: Ruler, title: t('cards.arge') },
        { icon: PencilRuler, title: t('cards.ozelTasarim') },
        { icon: Cog, title: t('cards.uretimTeknolojisi') },
        { icon: BadgeCheck, title: t('cards.sertifikaliUretim') },
    ];

    return (
        <section className="bg-white py-8">
            <div className="container mx-auto px-4">
                <div className="relative bg-[#f5f5f7] rounded-[2.5rem] py-24 overflow-hidden isolate shadow-sm">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center layout-fixed">
                            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} dir={textDir}>
                                <div className="inline-block mb-4">
                                    <span className="typo-eyebrow inline-block border border-primary/30 px-4 py-2 rounded-full">
                                        {t('eyebrow')}
                                    </span>
                                </div>
                                <h2 className="typo-h2 mb-6">{t('title')}</h2>
                                <div className="space-y-4 typo-body mb-8">
                                    <p>{t.rich('paragraph1', heroRichTextHandlers)}</p>
                                    <p>{t.rich('paragraph2', heroRichTextHandlers)}</p>
                                </div>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="grid grid-cols-2 gap-6">
                                {cards.map((card, index) => (
                                    <motion.div key={card.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + index * 0.1 }} whileHover={{ scale: 1.05, y: -5 }} className="relative group">
                                        <div className="absolute inset-0 rounded-2xl bg-[#000552] shadow-lg" />
                                        <div className="relative z-10 p-6">
                                            <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-all backdrop-blur-md border border-white/10 shadow-sm">
                                                <card.icon className="text-white" size={28} />
                                            </div>
                                            <div className="typo-h3 text-white">{card.title}</div>
                                        </div>
                                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl" />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }} className="mt-16 h-1 bg-[#000552]" />
                    </div>
                </div>
            </div>
        </section>
    );
}
