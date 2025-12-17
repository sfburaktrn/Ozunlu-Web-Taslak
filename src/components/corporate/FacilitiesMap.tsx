'use client';

import { motion } from 'framer-motion';

const locations = [
    { name: 'Ankara Merkez Fabrika', specs: '15.000 m2 • Ar-Ge & Yönetim' },
    { name: 'Eskişehir Üretim Üssü', specs: '25.000 m2 • Şasi & Gövde Üretimi' },
    { name: 'Aksaray Montaj Tesisi', specs: '10.000 m2 • Boya & Montaj' },
];

export default function FacilitiesMap() {
    return (
        <section className="py-24 bg-ozunlu-900 border-t border-white/5">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 text-center">
                    ÜRETİM <span className="text-white">GÜCÜMÜZ</span>
                </h2>

                <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                    {/* Map Graphic (Mockup) */}
                    <div className="w-full md:w-2/3 bg-ozunlu-950 aspect-video rounded-xl relative overflow-hidden border border-white/10 group">
                        {/* Placeholder for SVG map */}
                        <div className="absolute inset-0 flex items-center justify-center text-gray-700">
                            <span className="text-lg font-bold">INTERACTIVE TURKEY MAP MOCKUP</span>
                        </div>

                        {/* Simulated Pins */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-12 -translate-y-8">
                            <div className="w-4 h-4 bg-primary rounded-full animate-ping absolute" />
                            <div className="w-4 h-4 bg-primary rounded-full relative z-10" />
                            <div className="absolute left-6 -top-2 bg-black/80 text-white text-xs p-2 rounded whitespace-nowrap">
                                Ankara (Merkez)
                            </div>
                        </div>

                        <div className="absolute top-1/2 left-1/3 transform -translate-x-4">
                            <div className="w-3 h-3 bg-white rounded-full relative z-10" />
                            <div className="absolute left-5 -top-2 bg-black/80 text-white text-xs p-2 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                Eskişehir
                            </div>
                        </div>
                    </div>

                    {/* List */}
                    <div className="w-full md:w-1/3 space-y-6">
                        {locations.map((loc, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 bg-ozunlu-800 rounded-lg border-l-4 border-transparent hover:border-primary transition-all cursor-crosshair group"
                            >
                                <h4 className="text-xl font-bold text-white group-hover:text-white mb-1">{loc.name}</h4>
                                <p className="text-gray-400 text-sm">{loc.specs}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
