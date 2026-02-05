'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronDown, Wrench, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AfterSalesHero() {
    return (
        <section className="relative w-full h-[85vh] min-h-[600px] rounded-[2.5rem] overflow-hidden mx-auto max-w-full shadow-2xl group">
            {/* Background with Zoom Effect */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/satis-sonrasi-hero.png"
                    alt="Satış Sonrası Hizmetler"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-[2s] ease-out leading-none"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#000552]/95 via-[#000552]/50 to-transparent mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000552] via-transparent to-transparent opacity-60" />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-center px-6 md:px-16 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold mb-8">
                        <ShieldCheck size={16} className="text-white" />
                        <span className="tracking-wider uppercase">ÖZÜNLÜ GÜVENCESİ</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
                        YOLUN HER <br />
                        ANINDA
                        <span className="block mt-2">
                            YANINIZDAYIZ
                        </span>
                    </h1>

                    <p className="text-lg md:text-lg text-gray-200 max-w-2xl font-light leading-relaxed mb-10">
                        Sadece satışta değil, satış sonrasında da en büyük destekçiniziz.
                        7/24 teknik servis, orijinal yedek parça ve uzman kadromuzla işiniz asla yarım kalmaz.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/iletisim"
                            className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all group/contact"
                        >
                            Bize Ulaşın
                            <ArrowRight size={20} className="group-hover/contact:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
}
