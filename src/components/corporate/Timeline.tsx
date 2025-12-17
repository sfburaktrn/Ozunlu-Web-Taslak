'use client';

import { motion } from 'framer-motion';

const milestones = [
    { year: '1980', title: 'İlk Kıvılcım', desc: 'Ankara Ostim’de 50m2’lik atölye kuruluşu.' },
    { year: '1995', title: 'Seri Üretim', desc: 'İlk hidrolik damper seri üretim bandının devreye alınması.' },
    { year: '2005', title: 'Global Açılım', desc: 'Ortadoğu ve Balkanlara ilk ihracatın gerçekleştirilmesi.' },
    { year: '2015', title: 'Ar-Ge Merkezi', desc: 'Sanayi Bakanlığı onaylı Ar-Ge merkezinin kuruluşu.' },
    { year: '2023', title: 'Endüstri 4.0', desc: 'Tam otomasyonlu robotik kaynak hattının açılışı.' },
];

export default function Timeline() {
    return (
        <section className="py-24 bg-ozunlu-950 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5 skew-y-3 transform origin-top-left" />

            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-20 text-center">
                    ZAMANIN <span className="text-white">ÖTESİNDE</span>
                </h2>

                <div className="relative">
                    {/* Center Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-800" />

                    <div className="space-y-24">
                        {milestones.map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`flex items-center justify-between ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                            >
                                <div className={`w-[45%] ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                    <h3 className="text-5xl font-black text-white/10 absolute -mt-10 mx-auto left-0 right-0 w-full md:w-auto md:static md:mx-0 select-none">
                                        {item.year}
                                    </h3>
                                    <div className="relative z-10">
                                        <h4 className="text-2xl font-bold text-white mb-2">{item.title}</h4>
                                        <p className="text-gray-400">{item.desc}</p>
                                    </div>
                                </div>

                                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-ozunlu-950 z-20" />

                                <div className="w-[45%]" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
