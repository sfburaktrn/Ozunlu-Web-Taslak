'use client';

import { motion } from 'framer-motion';
import { Shield, Award, Lightbulb, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { createRichTextHandlers } from '@/i18n/richText';

const valueRichTextHandlers = createRichTextHandlers({
    hardoxClassName: 'inline-block rounded-lg w-12 h-auto mx-0.5 align-middle',
    hardoxWidth: 72,
    hardoxHeight: 18,
});

const valueKeys = ['trust', 'quality', 'innovation', 'speed'] as const;
const icons = { trust: Shield, quality: Award, innovation: Lightbulb, speed: Zap };

export default function CorporateValues() {
    const t = useTranslations('corporate.values');

    return (
        <section className="py-24 bg-ozunlu-950 relative">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {valueKeys.map((key, index) => {
                        const Icon = icons[key];
                        return (
                            <motion.div
                                key={key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] rounded-2xl transition-all duration-500 hover:border-primary/30"
                            >
                                <div className="w-14 h-14 bg-primary text-white rounded-xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,255,255,0.15)] group-hover:scale-110 transition-transform duration-300">
                                    <Icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 tracking-wide">{t(`${key}.title`)}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4 group-hover:border-white/10 transition-colors">
                                    {t.rich(`${key}.desc`, valueRichTextHandlers)}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
