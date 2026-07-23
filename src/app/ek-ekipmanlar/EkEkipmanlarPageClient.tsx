'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Settings, Truck, Disc, Zap, Wrench, ShieldCheck, Phone, ChevronDown, PackageCheck } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { heroRichTextHandlers } from '@/i18n/richText';
import HeroAccentText from '@/components/common/HeroAccentText';
import { useTextDirection } from '@/i18n/useTextDirection';

const categoryKeys = ['hidrolik', 'dingil', 'fren', 'elektrik', 'aksesuar', 'yedekParca'] as const;
const bulletKeys = ['0', '1', '2', '3'] as const;
const statKeys = ['original', 'delivery', 'support'] as const;

const categoryIcons: Record<(typeof categoryKeys)[number], React.ReactNode> = {
    hidrolik: <ForceIcon className="w-8 h-8 text-primary" />,
    dingil: <Truck className="w-8 h-8 text-primary" />,
    fren: <Disc className="w-8 h-8 text-primary" />,
    elektrik: <Zap className="w-8 h-8 text-primary" />,
    aksesuar: <Settings className="w-8 h-8 text-primary" />,
    yedekParca: <Wrench className="w-8 h-8 text-primary" />,
};

const statIcons: Record<(typeof statKeys)[number], React.ReactNode> = {
    original: <ShieldCheck className="w-10 h-10" />,
    delivery: <Truck className="w-10 h-10" />,
    support: <Phone className="w-10 h-10" />,
};

export default function EkEkipmanlarPageClient({ embedded = false }: { embedded?: boolean }) {
    const t = useTranslations('ekEkipmanlar');
    const tCommon = useTranslations('common');
    const textDir = useTextDirection();

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: 'easeOut' },
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const Wrapper = embedded ? 'section' : 'main';

    return (
        <Wrapper
            id={embedded ? 'ek-ekipmanlar' : undefined}
            className={
                embedded
                    ? 'scroll-mt-20 bg-[#F8F9FA] py-12 md:py-20 px-3 sm:px-6'
                    : 'min-h-screen bg-[#F8F9FA] pt-[50px] pb-12 md:pt-[60px] md:pb-24 px-3 sm:px-6'
            }
        >
            {/* HERO — mobile: image + text stacked. Tablet+: overlay */}
            <section className="relative w-full rounded-[1.75rem] md:rounded-[2.5rem] overflow-hidden mx-auto max-w-full shadow-2xl group mb-16 md:mb-24 layout-fixed md:min-h-[680px] md:aspect-auto lg:aspect-auto lg:h-[min(85svh,820px)] lg:min-h-[620px]">
                <div className="relative aspect-[16/11] sm:aspect-[4/3] md:absolute md:inset-0 md:aspect-auto">
                    <Image
                        src="/ek-ekipman-banner.png"
                        alt={t('hero.imageAlt')}
                        fill
                        className="object-cover object-[70%_40%] scale-125 sm:object-[72%_38%] sm:scale-110 md:object-[95%_38%] md:scale-100 lg:object-[68%_center] group-hover:scale-[1.3] md:group-hover:scale-105 transition-transform duration-[2s] ease-out"
                        priority
                        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 100vw, 1400px"
                    />
                    <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-b from-black/60 via-black/25 to-black/45 md:block lg:bg-gradient-to-r lg:from-black/85 lg:via-black/55 lg:to-black/15 rtl:lg:bg-gradient-to-l" />
                </div>

                <div className="relative z-10 flex flex-col gap-4 bg-[#0c0c0e] px-4 pt-4 pb-5 sm:px-6 sm:py-6 md:absolute md:inset-0 md:gap-0 md:justify-between md:bg-transparent md:px-8 md:pt-7 md:pb-10 lg:justify-center lg:px-12 xl:px-20 lg:py-12">
                    <motion.div
                        dir={textDir}
                        initial="initial"
                        animate="animate"
                        variants={staggerContainer}
                        className="w-full max-w-[40rem] md:max-w-[22rem] xl:max-w-[32rem] 2xl:max-w-[40rem]"
                    >
                        <motion.div
                            variants={fadeInUp}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-bold mb-4 md:mb-5 md:drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)]"
                        >
                            <PackageCheck size={16} className="text-white" />
                            <span className="tracking-wider uppercase">{t('hero.badge')}</span>
                        </motion.div>

                        <motion.h1
                            variants={fadeInUp}
                            className="text-[clamp(2rem,9vw,3.25rem)] md:text-[2.15rem] xl:text-[3.5rem] 2xl:text-[4.5rem] font-bold tracking-tight leading-[1.02] text-white mb-2 md:mb-1.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] md:[text-shadow:0_1px_2px_rgba(0,0,0,0.9),0_2px_10px_rgba(0,0,0,0.55)]"
                        >
                            {t('hero.titleLine1')} <br />
                            <HeroAccentText onDark>{t('hero.titleLine2')}</HeroAccentText>
                        </motion.h1>

                        <motion.p
                            variants={fadeInUp}
                            className="text-sm sm:text-base md:text-[0.95rem] md:leading-snug xl:text-lg font-normal leading-relaxed text-gray-300 md:text-white max-w-[38rem] md:max-w-[22rem] xl:max-w-[32rem] md:[text-shadow:0_1px_2px_rgba(0,0,0,0.9),0_2px_8px_rgba(0,0,0,0.5)]"
                        >
                            {t.rich('hero.description', heroRichTextHandlers)}
                        </motion.p>
                    </motion.div>

                    <motion.div variants={fadeInUp} initial="initial" animate="animate" className="flex flex-wrap gap-4 self-start lg:mt-8">
                        <Link
                            href="/iletisim"
                            className="w-full sm:w-auto justify-center bg-white text-black hover:bg-gray-100 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all flex items-center gap-2"
                        >
                            {tCommon('cta.bizeUlasin')} <ArrowRight className="w-5 h-5 rtl:rotate-180" />
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce hidden md:block"
                >
                    <ChevronDown size={32} />
                </motion.div>
            </section>

            <div className="max-w-[1600px] mx-auto mb-16 md:mb-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                    {statKeys.map((key) => (
                        <div
                            key={key}
                            className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex items-center gap-4 md:gap-6 group sm:last:col-span-2 sm:last:w-[calc((100%-1rem)/2)] md:last:w-[calc((100%-1.5rem)/2)] sm:last:justify-self-center xl:last:col-span-1 xl:last:w-auto xl:last:justify-self-auto"
                        >
                            <div className="p-4 bg-primary/5 rounded-2xl text-primary group-hover:scale-110 transition-transform duration-300">
                                {statIcons[key]}
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-black mb-1">{t(`stats.${key}.value`)}</h4>
                                <p className="text-gray-500 text-sm uppercase tracking-wider font-bold">{t(`stats.${key}.label`)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <section className="mb-16 md:mb-24">
                <div className="max-w-[1600px] mx-auto">
                    <div className="bg-[#F8F9FA] rounded-[1.75rem] md:rounded-[3rem] p-5 sm:p-8 md:p-10 lg:p-16 flex flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-16 xl:gap-20">
                        <div className="w-full lg:w-1/2 relative aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/11] lg:aspect-auto lg:h-[500px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-lg order-1">
                            <Image
                                src="/images/ozunlu-yedek-parca-orijinal-ekipman.webp"
                                alt={t('performance.imageAlt')}
                                fill
                                className="object-cover object-[95%_center] lg:object-center"
                                sizes="(max-width: 1023px) 100vw, 50vw"
                            />
                        </div>

                        <div className="w-full lg:w-1/2 order-2">
                            <h2 className="text-3xl md:text-[1.85rem] md:leading-tight lg:text-[2.75rem] font-bold tracking-tight leading-[1.1] text-ozunlu-950 mb-6 md:mb-5 lg:mb-6">
                                {t('performance.titleLine1')} <br />
                                <span className="text-primary">{t('performance.titleLine2')}</span>
                            </h2>
                            <p className="text-lg md:text-[13px] md:leading-snug lg:text-lg text-gray-600 mb-8 md:mb-6 lg:mb-8 leading-relaxed">
                                {t.rich('performance.description', heroRichTextHandlers)}
                            </p>

                            <ul className="space-y-4 md:space-y-3 lg:space-y-4">
                                {bulletKeys.map((key) => (
                                    <li key={key} className="flex items-center gap-4 bg-white p-4 md:p-3 lg:p-4 rounded-xl shadow-sm">
                                        <div className="min-w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <ShieldCheck className="w-4 h-4" />
                                        </div>
                                        <span className="text-base md:text-sm lg:text-base font-semibold text-gray-900">
                                            {t(`performance.bullets.${key}`)}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="kategoriler" className="max-w-[1600px] mx-auto mb-16 md:mb-24">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">{t('categories.title')}</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t('categories.subtitle')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryKeys.map((key, index) => (
                        <Link key={key} href="/iletisim" className="block">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative min-h-[280px] md:min-h-[320px] bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                            >
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                                    {categoryIcons[key]}
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-black mb-3">{t(`categories.${key}.title`)}</h3>
                                    <p className="text-gray-600 leading-relaxed">{t(`categories.${key}.desc`)}</p>
                                </div>

                                <div className="flex items-center gap-2 text-primary font-bold text-sm opacity-60 group-hover:opacity-100 transition-opacity">
                                    {tCommon('cta.bilgiAl')}{' '}
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform rtl:rotate-180" />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </section>
        </Wrapper>
    );
}

function ForceIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M12 2v20" />
            <path d="M5 9l7-7 7 7" />
            <path d="M5 15l7 7 7-7" />
        </svg>
    );
}
