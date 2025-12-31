'use client';

import { motion } from 'framer-motion';

export default function AfterSalesHero() {
    return (
        <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden flex items-center justify-center bg-ozunlu-950">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 opacity-60"
                    style={{
                        backgroundImage: `url('/satis-sonrasi/hero-bg-v3.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-ozunlu-950 via-ozunlu-950/80 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <span className="inline-block py-1 px-3 rounded-full border border-white/30 bg-white/10 text-xs font-bold tracking-[0.2em] text-white mb-6 backdrop-blur-sm uppercase">
                        7/24 Yanınızdayız
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-tight">
                        KESİNTİSİZ GÜÇ, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
                            SINIRSIZ DESTEK
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl font-light leading-relaxed">
                        Üretimden sahaya kadar uzanan yolculukta, Özünlü güvencesi her zaman yanınızda. Teknik dokümanlar, garanti şartları ve yetkili servis ağımızla işiniz asla yarım kalmaz.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
