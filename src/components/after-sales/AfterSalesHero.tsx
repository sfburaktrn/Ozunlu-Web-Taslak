'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown, ShieldCheck, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { defaultRichTextHandlers } from '@/i18n/richText';
import { Link } from '@/i18n/navigation';

export default function AfterSalesHero() {
    const t = useTranslations('afterSales.hero');
    const tCommon = useTranslations('common');

    return (
        <section className="relative w-full h-[85vh] min-h-[600px] rounded-[2.5rem] overflow-hidden mx-auto max-w-full shadow-2xl group">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/satis-sonrasi-hero.png"
                    alt={t('imageAlt')}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-[2s] ease-out leading-none"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#000552]/95 via-[#000552]/50 to-transparent mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000552] via-transparent to-transparent opacity-60" />
            </div>

            <div className="relative h-full flex flex-col justify-center px-6 md:px-16 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="max-w-4xl"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold mb-8">
                        <ShieldCheck size={16} className="text-white" />
                        <span className="tracking-wider uppercase">{t('badge')}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
                        {t('titleLine1')} <br />
                        {t('titleLine2')}
                        <span className="block mt-2">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                                {t('titleLine3')}
                            </span>
                        </span>
                    </h1>

                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mb-10 font-light">
                        {t.rich('description', defaultRichTextHandlers)}
                    </p>

                    <Link
                        href="/iletisim"
                        className="inline-flex items-center gap-3 bg-white text-[#000552] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        {tCommon('cta.iletisimeGecin')} <ArrowRight size={18} />
                    </Link>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
            >
                <ChevronDown size={24} />
            </motion.div>
        </section>
    );
}
