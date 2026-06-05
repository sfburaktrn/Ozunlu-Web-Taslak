'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { defaultRichTextHandlers } from '@/i18n/richText';

export default function CorporateHero() {
    const t = useTranslations('corporate.hero');

    return (
        <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center bg-ozunlu-950">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/20 via-ozunlu-950 to-black" />
                <div
                    className="absolute inset-0 opacity-80"
                    style={{
                        backgroundImage: `url('/corporate/hero-bg.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full border border-white/20 bg-white/5 text-xs font-bold tracking-[0.2em] text-gray-300 mb-6 backdrop-blur-sm uppercase">
                        {t('badge')}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-tight">
                        {t('titleLine1')} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
                            {t('titleLine2')}
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                        {t.rich('description', defaultRichTextHandlers)}
                    </p>
                </motion.div>
            </div>

            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-ozunlu-950 to-transparent" />
        </section>
    );
}
