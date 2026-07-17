'use client';



import React from 'react';

import { motion } from 'framer-motion';

import Image from 'next/image';

import { ArrowRight, Settings, Truck, Disc, Zap, Wrench, ShieldCheck, Phone, ChevronDown, PackageCheck } from 'lucide-react';

import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';
import { heroRichTextHandlers } from '@/i18n/richText';
import HeroAccentText from '@/components/common/HeroAccentText';

const categoryKeys = ['hidrolik', 'dingil', 'fren', 'elektrik', 'aksesuar', 'yedekParca'] as const;

const bulletKeys = ['0', '1', '2', '3'] as const;

const statKeys = ['original', 'delivery', 'support'] as const;



const categoryIcons: Record<typeof categoryKeys[number], React.ReactNode> = {

    hidrolik: <ForceIcon className="w-8 h-8 text-primary" />,

    dingil: <Truck className="w-8 h-8 text-primary" />,

    fren: <Disc className="w-8 h-8 text-primary" />,

    elektrik: <Zap className="w-8 h-8 text-primary" />,

    aksesuar: <Settings className="w-8 h-8 text-primary" />,

    yedekParca: <Wrench className="w-8 h-8 text-primary" />,

};



const statIcons: Record<typeof statKeys[number], React.ReactNode> = {

    original: <ShieldCheck className="w-10 h-10" />,

    delivery: <Truck className="w-10 h-10" />,

    support: <Phone className="w-10 h-10" />,

};



export default function EkEkipmanlarPageClient() {

    const t = useTranslations('ekEkipmanlar');

    const tCommon = useTranslations('common');



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



    return (

        <main className="min-h-screen bg-[#F8F9FA] pt-[50px] pb-12 md:pt-[60px] md:pb-24 px-4 sm:px-6">

            <section className="relative w-full h-[85vh] min-h-[600px] rounded-[2.5rem] overflow-hidden mx-auto max-w-full shadow-2xl group mb-24">

                <div className="absolute inset-0 z-0">

                    <Image

                        src="/ek-ekipman-banner.png"

                        alt={t('hero.imageAlt')}

                        fill

                        className="object-cover object-center group-hover:scale-105 transition-transform duration-[2s] ease-out"

                        priority

                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/15 rtl:bg-gradient-to-l" />

                </div>



                <div className="relative z-10 w-full h-full flex flex-col justify-center px-6 md:px-16 lg:px-24">

                    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="max-w-4xl">

                        <motion.div

                            variants={fadeInUp}

                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold mb-8"

                        >

                            <PackageCheck size={16} className="text-white" />

                            <span className="tracking-wider uppercase">{t('hero.badge')}</span>

                        </motion.div>



                        <motion.h1

                            variants={fadeInUp}

                            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]"

                        >

                            {t('hero.titleLine1')} <br />

                            <HeroAccentText>{t('hero.titleLine2')}</HeroAccentText>

                        </motion.h1>



                        <motion.p

                            variants={fadeInUp}

                            className="text-sm md:text-lg font-normal leading-relaxed text-white max-w-3xl mb-10 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"

                        >

                            {t.rich('hero.description', heroRichTextHandlers)}

                        </motion.p>



                        <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">

                            <Link

                                href="/iletisim"

                                className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center gap-2"

                            >

                                {tCommon('cta.bizeUlasin')} <ArrowRight className="w-5 h-5 rtl:rotate-180" />

                            </Link>

                        </motion.div>

                    </motion.div>

                </div>



                <motion.div

                    initial={{ opacity: 0 }}

                    animate={{ opacity: 1 }}

                    transition={{ delay: 1, duration: 1 }}

                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"

                >

                    <ChevronDown size={32} />

                </motion.div>

            </section>



            <div className="max-w-[1600px] mx-auto mb-24">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {statKeys.map((key) => (

                        <div key={key} className="bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex items-center gap-6 group">

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



            <section className="mb-24">

                <div className="max-w-[1600px] mx-auto">

                    <div className="bg-[#F8F9FA] rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                        <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-lg">

                            <Image src="/images/ozunlu-yedek-parca-orijinal-ekipman.webp" alt={t('performance.imageAlt')} fill className="object-cover" />

                        </div>

                        <div className="w-full lg:w-1/2">

                            <h2 className="text-3xl md:text-[2.75rem] font-bold tracking-tight leading-[1.1] text-ozunlu-950 mb-6">

                                {t('performance.titleLine1')} <br />

                                <span className="text-primary">{t('performance.titleLine2')}</span>

                            </h2>

                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">

                                {t.rich('performance.description', heroRichTextHandlers)}

                            </p>



                            <ul className="space-y-4">

                                {bulletKeys.map((key) => (

                                    <li key={key} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">

                                        <div className="min-w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">

                                            <ShieldCheck className="w-4 h-4" />

                                        </div>

                                        <span className="text-base font-semibold text-gray-900">{t(`performance.bullets.${key}`)}</span>

                                    </li>

                                ))}

                            </ul>

                        </div>

                    </div>

                </div>

            </section>



            <section id="kategoriler" className="max-w-[1600px] mx-auto mb-24">

                <div className="text-center mb-16">

                    <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">{t('categories.title')}</h2>

                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">

                        {t('categories.subtitle')}

                    </p>

                </div>



                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {categoryKeys.map((key, index) => (

                        <Link key={key} href="/iletisim" className="block">

                            <motion.div

                                initial={{ opacity: 0, y: 30 }}

                                whileInView={{ opacity: 1, y: 0 }}

                                viewport={{ once: true }}

                                transition={{ delay: index * 0.1 }}

                                className="group relative h-[320px] bg-white rounded-[2rem] p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"

                            >

                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300">

                                    {categoryIcons[key]}

                                </div>



                                <div>

                                    <h3 className="text-2xl font-bold text-black mb-3">{t(`categories.${key}.title`)}</h3>

                                    <p className="text-gray-600 leading-relaxed">{t(`categories.${key}.desc`)}</p>

                                </div>



                                <div className="flex items-center gap-2 text-primary font-bold text-sm opacity-60 group-hover:opacity-100 transition-opacity">

                                    {tCommon('cta.bilgiAl')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform rtl:rotate-180" />

                                </div>

                            </motion.div>

                        </Link>

                    ))}

                </div>

            </section>



            <section id="contact" className="max-w-[1600px] mx-auto mb-24">
                <div className="relative rounded-[2.5rem] overflow-hidden min-h-[320px] md:min-h-[380px] shadow-2xl">
                    <Image
                        src="/images/ozunlu-yedek-parca-banner.webp"
                        alt={t('cta.title')}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 1600px) 100vw, 1600px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/55 to-black/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15" />

                    <div className="relative z-10 h-full flex flex-col justify-center px-8 py-14 md:px-16 md:py-20 max-w-3xl">
                        <span className="inline-flex w-fit mb-5 rounded-full border border-white/25 bg-black/35 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
                            {t('hero.badge')}
                        </span>
                        <h2 className="text-xl md:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]">
                            {t('cta.title')}
                        </h2>
                        <p className="text-base md:text-xl text-white/90 mb-8 max-w-xl leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
                            {t('cta.description')}
                        </p>
                        <div>
                            <Link
                                href="/iletisim"
                                className="inline-flex items-center gap-2 bg-white text-[#000552] hover:bg-white/95 px-8 py-4 rounded-xl font-bold text-base md:text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                {tCommon('cta.iletisimeGecin')}
                                <ArrowRight className="w-5 h-5 rtl:rotate-180" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </main>

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


