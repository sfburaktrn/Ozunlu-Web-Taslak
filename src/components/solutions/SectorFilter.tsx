'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Truck, HardHat, Recycle } from 'lucide-react';

const sectors = [
    {
        id: 'construct',
        title: 'İNŞAAT & HAFRİYAT',
        icon: HardHat,
        description: 'Zorlu şantiye koşulları için maksimum dayanıklılık.',
        features: ['Hardox 450/500 Gövde', 'Yüksek Tonaj Kapasitesi', 'Otomatik Yağlama'],
        image: '/sector-construct-mock.jpg'
    },
    {
        id: 'logistics',
        title: 'LOJİSTİK & UZUN YOL',
        icon: Truck,
        description: 'Uzun mesafeler için hafiflik ve yakıt tasarrufu.',
        features: ['Alüminyum Şasi Opsiyonu', 'Aerodinamik Kapak', 'Avrupa Standartları'],
        image: '/sector-logistics-mock.jpg'
    },
    {
        id: 'recycle',
        title: 'GERİ DÖNÜŞÜM',
        icon: Recycle,
        description: 'Hurda ve atık taşımacılığı için özel hacimli çözümler.',
        features: ['Güçlendirilmiş Taban', 'Sızdırmaz Kapak', 'Yüksek Hacim (40-60 m³)'],
        image: '/sector-recycle-mock.jpg'
    }
];

export default function SectorFilter() {
    const [activeSector, setActiveSector] = useState(sectors[0]);

    return (
        <section className="py-24 bg-ozunlu-950">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-16">
                    HER SEKTÖR İÇİN <span className="text-white">MÜKEMMEL ÇÖZÜM</span>
                </h2>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Tabs */}
                    <div className="w-full md:w-1/3 space-y-4">
                        {sectors.map((sector) => (
                            <button
                                key={sector.id}
                                onClick={() => setActiveSector(sector)}
                                className={`w-full p-6 rounded-xl text-left transition-all duration-300 border-2 group relative overflow-hidden ${activeSector.id === sector.id
                                        ? 'bg-ozunlu-900 border-primary shadow-[0_0_30px_rgba(0,5,82,0.1)]'
                                        : 'bg-transparent border-white/10 hover:border-white/30'
                                    }`}
                            >
                                <div className="relative z-10 flex items-center gap-4">
                                    <div className={`p-3 rounded-lg transition-colors ${activeSector.id === sector.id ? 'bg-primary text-white' : 'bg-ozunlu-800 text-gray-400'}`}>
                                        <sector.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className={`font-bold text-lg ${activeSector.id === sector.id ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                                            {sector.title}
                                        </h3>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Content Display */}
                    <div className="w-full md:w-2/3">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSector.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="bg-ozunlu-900 border border-white/10 rounded-2xl p-8 h-full relative overflow-hidden"
                            >
                                {/* Background Gradient */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

                                <div className="relative z-10">
                                    <h3 className="text-3xl font-bold text-white mb-4">{activeSector.title} Çözümleri</h3>
                                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                        {activeSector.description}
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-6 mb-10">
                                        {activeSector.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <div className="w-2 h-2 bg-primary rounded-full" />
                                                <span className="text-gray-200 font-medium">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <button className="flex items-center gap-3 text-white font-bold uppercase tracking-widest hover:gap-6 transition-all group">
                                        İlgili Ürünleri İncele
                                        <ArrowRight className="group-hover:text-white transition-colors" />
                                    </button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
