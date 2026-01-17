'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function DamperHero() {
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden border border-white/10 group"
                >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <Image
                            src="/images/ozunlu-damper-performans.png"
                            alt="Özünlü Damper Performans ve Dayanıklılık"
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                            quality={100}
                        />
                        {/* Gradient Overlay for Text Readability - Left aligned based on user request */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex items-center p-8 md:p-16">
                        <div className="max-w-xl">
                            {/* Watermark Text - Reverted for dark banner */}
                            <div className="absolute -top-24 -left-12 z-0 pointer-events-none select-none">
                                <span className="text-8xl md:text-[10rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-white/10 via-white/5 to-transparent leading-none tracking-tighter opacity-50 whitespace-nowrap">
                                    ÖZÜNLÜ
                                </span>
                            </div>

                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                            >
                                Gücünüze Güç <br />
                                <span className="text-primary">Katan Performans</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="text-lg text-gray-300 mb-8 leading-relaxed max-w-md"
                            >
                                En zorlu şartlarda bile üstün performans sunan damper sistemlerimiz ile işinize değer katıyoruz. Teknolojik üretim ve dayanıklı tasarım.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                <Link
                                    href="/teklif-al"
                                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-primary/20"
                                >
                                    Teklif Al
                                    <ArrowRight size={20} />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
