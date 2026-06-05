'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import HardoxInline from '@/components/common/HardoxInline';

export default function ProductionPhilosophy() {
    const t = useTranslations('corporate.philosophy');

    return (
        <section className="py-24 bg-ozunlu-950 relative overflow-hidden">
            <div className="absolute top-0 end-0 w-1/3 h-full bg-gradient-to-l from-white/[0.03] to-transparent pointer-events-none rtl:bg-gradient-to-r" />
            <div className="absolute bottom-0 start-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 rtl:lg:order-2"
                    >
                        <div className="relative">
                            <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white/20 via-white/5 to-transparent leading-[0.9] tracking-tighter opacity-40 select-none absolute -top-12 -start-8 w-full z-0 whitespace-nowrap">
                                {t('watermark')}
                            </h2>
                            <h2 className="text-4xl md:text-5xl font-black text-white relative z-10 leading-tight">
                                {t('titleLine1')} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
                                    {t('titleLine2')}
                                </span>
                            </h2>
                            <div className="relative mt-8 h-2">
                                <motion.div
                                    initial={{ width: 0, opacity: 0 }}
                                    whileInView={{ width: '8rem', opacity: 0.6 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="absolute top-1/2 start-0 -translate-y-1/2 h-4 bg-white/40 blur-xl rounded-full pointer-events-none"
                                />
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '6rem' }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="absolute top-1/2 start-0 -translate-y-1/2 h-1 bg-gradient-to-r from-[#000080] to-transparent shadow-[0_0_10px_rgba(255,255,255,0.2)] rtl:bg-gradient-to-l"
                                />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-1/2 rtl:lg:order-1"
                    >
                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
                            <p>
                                {t.rich('p1', {
                                    strong: (chunks) => <strong className="text-white font-semibold">{chunks}</strong>,
                                })}
                            </p>
                            <p>
                                {t.rich('p2', {
                                    durability: (chunks) => (
                                        <span className="text-white border-b border-white/20 pb-0.5">{chunks}</span>
                                    ),
                                    performance: (chunks) => (
                                        <span className="text-white border-b border-white/20 pb-0.5">{chunks}</span>
                                    ),
                                    hardox: () => (
                                        <HardoxInline className="inline-block rounded-lg w-16 md:w-24 h-auto mx-1 align-middle" width={96} height={24} />
                                    ),
                                })}
                            </p>
                            <blockquote className="border-s-4 border-white/50 ps-6 py-2 italic text-gray-400 my-8">
                                &quot;{t('quote')}&quot;
                            </blockquote>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
