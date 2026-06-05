'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const careerImages = [1, 2, 3, 4];

export default function LifeAtOzunlu() {
    const t = useTranslations('career.life');

    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            <div className="absolute top-0 end-0 w-1/3 h-full bg-gradient-to-l from-white/[0.03] to-transparent pointer-events-none rtl:bg-gradient-to-r" />
            <div className="absolute bottom-0 start-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center mb-16">
                    <div className="w-full lg:w-1/2 text-start lg:ps-12 rtl:lg:order-2">
                        <div className="relative mb-12">
                            <h2 className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white/20 via-white/5 to-transparent leading-[0.9] tracking-tighter opacity-40 select-none absolute -top-16 -start-8 w-full z-0 whitespace-nowrap">
                                {t('watermark')}
                            </h2>
                            <h2 className="text-5xl md:text-7xl font-black text-white relative z-10 leading-tight">
                                {t('titleLine1')} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
                                    {t('titleLine2')}
                                </span>
                            </h2>
                            <div className="relative mt-8 h-2">
                                <motion.div
                                    initial={{ width: 0, opacity: 0 }}
                                    whileInView={{ width: '10rem', opacity: 0.6 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="absolute top-1/2 start-0 -translate-y-1/2 h-5 bg-white/40 blur-xl rounded-full pointer-events-none"
                                />
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '8rem' }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="absolute top-1/2 start-0 -translate-y-1/2 h-1.5 bg-gradient-to-r from-[#000080] to-transparent shadow-[0_0_15px_rgba(255,255,255,0.3)] rtl:bg-gradient-to-l"
                                />
                            </div>
                        </div>
                        <p className="text-2xl text-gray-300 font-light leading-relaxed">{t('description')}</p>
                    </div>
                    <div className="w-full lg:w-1/2 rtl:lg:order-1">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="relative aspect-square bg-ozunlu-800 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-500 group">
                                    <Image src="/career/career-1.jpg" alt={t('imageAlt', { n: 1 })} fill className="object-cover" />
                                </div>
                                <div className="relative aspect-[4/3] bg-ozunlu-900 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-500 group">
                                    <Image src="/career/career-2.jpg" alt={t('imageAlt', { n: 2 })} fill className="object-cover" />
                                </div>
                            </div>
                            <div className="space-y-4 pt-12">
                                <div className="relative aspect-[4/3] bg-ozunlu-900 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-500 group">
                                    <Image src="/career/career-3.jpg" alt={t('imageAlt', { n: 3 })} fill className="object-cover" />
                                </div>
                                <div className="relative aspect-square bg-ozunlu-800 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-500 group">
                                    <Image src="/career/career-4.jpg" alt={t('imageAlt', { n: 4 })} fill className="object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
