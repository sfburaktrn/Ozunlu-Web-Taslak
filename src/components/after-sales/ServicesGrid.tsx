'use client';

import { motion } from 'framer-motion';
import { Wrench, ShieldCheck, Package, Headphones, type LucideIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { defaultRichTextHandlers } from '@/i18n/richText';

const serviceKeys = ['servisAgi', 'yedekParca', 'garanti', 'teknikDestek'] as const;

const serviceIcons: Record<(typeof serviceKeys)[number], LucideIcon> = {
    servisAgi: Wrench,
    yedekParca: Package,
    garanti: ShieldCheck,
    teknikDestek: Headphones,
};

export default function ServicesGrid() {
    const t = useTranslations('afterSales.services');

    return (
        <section id="hizmetler" className="bg-white py-8">
            <div className="container mx-auto px-4">
                <div className="relative bg-[#f5f5f7] rounded-[2.5rem] py-16 md:py-24 overflow-hidden isolate shadow-sm">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,5,82,0.04),_transparent_50%)] pointer-events-none" />

                    <div className="px-6 md:px-10 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-12 md:mb-16 max-w-2xl"
                        >
                            <h2 className="typo-h2 mb-4">
                                {t('title')}
                            </h2>
                            <p className="typo-body">
                                {t('subtitle')}
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                            {serviceKeys.map((key, index) => {
                                const Icon = serviceIcons[key];

                                return (
                                    <motion.div
                                        key={key}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.08 }}
                                        className="bg-white rounded-2xl p-7 border border-gray-200/80 shadow-sm hover:shadow-md hover:border-primary/15 transition-all duration-300 group"
                                    >
                                        <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                            <Icon size={20} strokeWidth={1.75} />
                                        </div>

                                        <h3 className="typo-h3 mb-2.5">
                                            {t(`${key}.title`)}
                                        </h3>

                                        <p className="typo-body-sm">
                                            {t.rich(`${key}.description`, defaultRichTextHandlers)}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
