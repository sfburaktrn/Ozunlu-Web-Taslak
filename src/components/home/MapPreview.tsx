'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function MapPreview() {
    return (
        <section className="relative py-32 bg-ozunlu-900 overflow-hidden">
            {/* Background Map Effect */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                {/* Simple radial gradient or SVG pattern could go here */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-white mb-8"
                >
                    3 KITADA <span className="text-primary">GÜVENİLİR ORTAK</span>
                </motion.h2>

                <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
                    Türkiye&apos;nin kalbinden dünyaya uzanan lojistik ağı.
                    Ankara, Eskişehir ve Aksaray üretim tesislerimizden 50&apos;den fazla ülkeye ihracat.
                </p>

                <Link
                    href="/contact"
                    className="inline-block px-10 py-5 bg-white text-black font-bold uppercase tracking-widest hover:bg-primary transition-colors duration-300 rounded"
                >
                    Global Ağımızı Keşfedin
                </Link>
            </div>
        </section>
    );
}
