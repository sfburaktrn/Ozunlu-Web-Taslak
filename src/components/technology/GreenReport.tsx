'use client';

import { motion } from 'framer-motion';
import { Leaf, Wind, Sun } from 'lucide-react';

const stats = [
    { icon: Leaf, value: '%40', label: 'GERİ DÖNÜŞTÜRÜLEBİLİR MALZEME', desc: 'Üretim süreçlerimizde atık yönetimini maksimum seviyede tutuyoruz.' },
    { icon: Sun, value: '2.5 MW', label: 'GÜNEŞ ENERJİSİ', desc: 'Tesislerimizin enerji ihtiyacının %85’ini kendi GES santralimizden karşılıyoruz.' },
    { icon: Wind, value: 'Sıfır', label: 'KARBON SALINIMI HEDEFİ', desc: '2030 yılına kadar karbon nötr bir üretim tesisi olma yolunda ilerliyoruz.' }
];

export default function GreenReport() {
    return (
        <section className="py-24 bg-ozunlu-900">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                            DOĞAYA <span className="text-white">SAYGI</span>, GELECEĞE <span className="text-white">YATIRIM</span>
                        </h2>
                        <div className="h-2 w-32 bg-green-500 rounded-full" />
                    </div>
                    <div className="w-full md:w-1/2">
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Ağır sanayi, ağır sorumluluk gerektirir. Biz sadece çelik işlemiyoruz;
                            gelecek nesillere yaşanabilir bir dünya bırakmak için &quot;Yeşil Üretim&quot;
                            standartlarını benimsiyoruz.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-ozunlu-950 p-8 rounded-2xl border border-green-900/30 hover:border-green-500/50 transition-colors group"
                        >
                            <div className="w-16 h-16 bg-green-900/20 rounded-full flex items-center justify-center mb-6 text-green-500 group-hover:scale-110 transition-transform">
                                <stat.icon size={32} />
                            </div>
                            <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                            <h3 className="text-sm font-bold text-green-500 tracking-widest mb-4">{stat.label}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{stat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
