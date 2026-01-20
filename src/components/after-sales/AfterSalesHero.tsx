'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AfterSalesHero() {
    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
    };

    return (
        <motion.section
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="w-full max-w-[1600px] mx-auto bg-[#F5F5F7] rounded-[2.5rem] p-8 md:p-16 mb-8 relative overflow-hidden group"
        >
            <div className="relative z-10 max-w-3xl">
                <span className="inline-block py-2 px-4 rounded-full bg-white border border-black/5 text-xs font-bold tracking-widest uppercase text-black mb-6">
                    7/24 Yanınızdayız
                </span>
                <h1 className="text-4xl md:text-7xl font-bold text-black mb-6 leading-[0.9]">
                    Satış Sonrası <br /> <span className="text-black">Destek</span>
                </h1>
                <p className="text-lg md:text-xl text-black max-w-xl leading-relaxed">
                    Üretimden sahaya kadar uzanan yolculukta, Özünlü güvencesi her zaman yanınızda. Teknik dokümanlar, garanti şartları ve yetkili servis ağımızla işiniz asla yarım kalmaz.
                </p>
            </div>

            {/* Hero Image */}
            <div className="md:absolute md:top-1/2 md:-translate-y-1/2 md:right-[-5%] w-full md:w-[60%] h-[300px] md:h-[120%] mt-8 md:mt-0 relative pointer-events-none">
                <Image
                    src="/satis-sonrasi/hero-bg-v3.jpg"
                    alt="Satış Sonrası Destek"
                    fill
                    className="object-cover md:object-contain rounded-2xl md:rounded-none"
                />
            </div>
        </motion.section>
    );
}
