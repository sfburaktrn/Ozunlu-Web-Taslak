'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function MediaHero() {
    const t = useTranslations('mediaPage.hero');

    return (
        <div className="relative h-[85vh] w-full overflow-hidden bg-ozunlu-950">
            <div className="absolute inset-0 z-0">
                <video autoPlay loop muted playsInline className="h-full w-full object-cover opacity-80">
                    <source src="/banner-video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 pt-20">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-tight">
                        {t('title')}{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
                            {t('titleHighlight')}
                        </span>
                    </h1>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="max-w-2xl">
                    <p className="text-lg md:text-2xl text-gray-300 font-light">{t('description')}</p>
                </motion.div>
            </div>
        </div>
    );
}
