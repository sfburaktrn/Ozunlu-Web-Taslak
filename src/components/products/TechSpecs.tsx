'use client';

import { motion } from 'framer-motion';
import { Timer, Scale, ShieldCheck, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';

const specKeys = ['unload', 'weight', 'hardox', 'balance'] as const;
const icons = { unload: Timer, weight: Scale, hardox: ShieldCheck, balance: Zap };

export default function TechSpecs() {
    const t = useTranslations('productsPage.techSpecs');

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12">
            {specKeys.map((key, index) => {
                const Icon = icons[key];
                return (
                    <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-ozunlu-900/50 p-6 rounded-lg border border-white/5 hover:border-primary/50 transition-colors group"
                    >
                        <div className="w-12 h-12 bg-ozunlu-800 rounded-full flex items-center justify-center mb-4 text-white group-hover:bg-primary group-hover:text-white transition-colors">
                            <Icon size={24} />
                        </div>
                        <h4 className="text-white font-bold mb-2">{t(`${key}.title`)}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{t(`${key}.desc`)}</p>
                    </motion.div>
                );
            })}
        </div>
    );
}
