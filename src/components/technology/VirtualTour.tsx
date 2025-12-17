'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function VirtualTour() {
    return (
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-ozunlu-950">
            {/* Video Background Mockup */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/60 z-10" />
                {/* In real app, this would be a looping drone video */}
                <div className="w-full h-full bg-[url('/factory-drone-mock.jpg')] bg-cover bg-center grayscale" />
            </div>

            <div className="relative z-20 text-center px-4">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mx-auto mb-8 cursor-pointer hover:bg-white/20 transition-colors group">
                        <Play size={40} className="text-white fill-white group-hover:scale-110 transition-transform" />
                    </div>

                    <h2 className="text-4xl md:text-7xl font-black text-white mb-6">
                        SANAL <span className="text-white">FABRİKA</span> TURU
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
                        Teknolojinin kalbine yolculuk yapın. Ar-Ge merkezimizden robotik
                        kaynak hatlarına, Özünlü kalitesinin doğuşuna tanıklık edin.
                    </p>
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-0 w-full text-center z-20">
                <p className="text-sm font-bold tracking-widest text-white animate-pulse">
                    AŞAĞI KAYDIRIN
                </p>
            </div>
        </section>
    );
}
