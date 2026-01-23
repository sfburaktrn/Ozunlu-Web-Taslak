'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AfterSalesHero() {
    return (
        <section className="relative w-full h-[600px] md:h-[700px] rounded-[2.5rem] overflow-hidden mb-12 group mx-auto max-w-full shadow-2xl">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/satis-sonrasi-hero.png"
                    alt="Satış Sonrası Hizmetler"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    priority
                />
            </div>

            {/* Content - Aligned to Left */}
            <div className="relative h-full flex flex-col justify-start items-start px-6 pt-24 md:pt-32 md:px-16 lg:px-24">
                {/* Mobile Watermark */}
                <div className="absolute top-10 left-6 md:hidden z-0 pointer-events-none select-none">
                    <span className="text-6xl font-black text-white/5 leading-none tracking-tighter whitespace-nowrap">
                        ÖZÜNLÜ
                    </span>
                </div>

                <div className="max-w-3xl relative text-left z-10 w-full">
                    {/* Desktop Watermark */}
                    <div className="hidden md:block absolute -top-24 -left-10 z-0 pointer-events-none select-none">
                        <span className="md:text-[12rem] font-black text-white/5 leading-none tracking-tighter whitespace-nowrap">
                            ÖZÜNLÜ
                        </span>
                    </div>

                    <motion.h1
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="relative z-10 text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-[0.95] tracking-tight"
                    >
                        SATIŞ SONRASI <br />
                        <span className="text-[#000552]">HİZMETLER</span>
                    </motion.h1>
                </div>
            </div>
        </section>
    );
}
