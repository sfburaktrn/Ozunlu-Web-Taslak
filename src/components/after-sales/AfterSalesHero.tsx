'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown, ShieldCheck, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { defaultRichTextHandlers } from '@/i18n/richText';
import { Link } from '@/i18n/navigation';
import { useTextDirection } from '@/i18n/useTextDirection';

export default function AfterSalesHero() {
    const t = useTranslations('afterSales.hero');
    const tCommon = useTranslations('common');
    const textDir = useTextDirection();

    return (
        <section className="relative w-full h-[560px] md:h-[min(85svh,820px)] min-h-[500px] md:min-h-[620px] rounded-[1.75rem] md:rounded-[2.5rem] overflow-hidden mx-auto max-w-full shadow-2xl group layout-fixed">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/satis-sonrasi-hero.png"
                    alt={t('imageAlt')}
                    fill
                    className="object-cover object-[65%_28%] sm:object-[62%_32%] md:object-center group-hover:scale-105 transition-transform duration-[2s] ease-out leading-none"
                    priority
                    sizes="(max-width: 767px) 100vw, 1400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000552]/95 via-[#000552]/45 to-transparent md:bg-gradient-to-r md:from-[#000552]/95 md:via-[#000552]/50 md:to-transparent mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000552] via-transparent to-transparent opacity-60" />
            </div>

            <div className="relative h-full flex flex-col justify-end md:justify-between lg:justify-center gap-6 p-4 sm:p-6 md:px-12 md:pt-14 md:pb-12 lg:px-20 xl:px-24 lg:py-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    dir={textDir}
                    className="w-full max-w-[42rem]"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-bold mb-5 md:mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]">
                        <ShieldCheck size={16} className="text-white" />
                        <span className="tracking-wider uppercase">{t('badge')}</span>
                    </div>

                    <h1 className="text-[clamp(2.2rem,10vw,3.75rem)] font-black text-white mb-5 md:mb-8 leading-[0.95] tracking-tighter break-words [text-shadow:0_1px_2px_rgba(0,0,0,0.85),0_2px_12px_rgba(0,0,0,0.45)]">
                        {t('titleLine1')} <br />
                        {t('titleLine2')}
                        <span className="block mt-2">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 [text-shadow:none] drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
                                {t('titleLine3')}
                            </span>
                        </span>
                    </h1>

                    <p className="text-gray-200 text-sm sm:text-base md:text-xl leading-relaxed max-w-2xl mb-6 md:mb-0 font-light [text-shadow:0_1px_2px_rgba(0,0,0,0.85),0_2px_8px_rgba(0,0,0,0.4)]">
                        {t.rich('description', defaultRichTextHandlers)}
                    </p>

                    <Link
                        href="/iletisim"
                        className="mt-6 inline-flex w-full sm:w-auto justify-center items-center gap-3 bg-white text-[#000552] px-6 sm:px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 md:hidden"
                    >
                        {tCommon('cta.iletisimeGecin')} <ArrowRight size={18} />
                    </Link>
                </motion.div>

                <Link
                    href="/iletisim"
                    className="hidden md:inline-flex self-start items-center gap-3 bg-white text-[#000552] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 lg:mt-8"
                >
                    {tCommon('cta.iletisimeGecin')} <ArrowRight size={18} />
                </Link>
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
