'use client';

import { motion } from 'framer-motion';

export default function RDLab() {
    return (
        <section className="py-24 bg-ozunlu-950 border-t border-white/5">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                    AR-GE & <span className="text-white">INOVASYON</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-16">
                    Mühendislik sınırlarını zorluyoruz.
                    Gelişmiş simülasyon yazılımları ve dayanıklılık testleri ile mükemmeli hedefliyoruz.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 min-h-[400px]">
                    {/* Bento Grid Layout Mockups */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="col-span-2 row-span-2 bg-ozunlu-900 rounded-2xl p-8 flex flex-col justify-end text-left relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                        {/* Image Placeholder */}
                        <div className="absolute inset-0 bg-gray-800 opacity-50 group-hover:opacity-60 transition-opacity" />

                        <div className="relative z-20">
                            <h3 className="text-2xl font-bold text-white mb-2">Simülasyon Testleri</h3>
                            <p className="text-gray-300">FEA Analizleri ile risk sıfıra indirilir.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-ozunlu-800 rounded-2xl p-6 flex flex-col justify-center items-center text-center border border-white/5"
                    >
                        <span className="text-4xl font-bold text-white mb-2">50+</span>
                        <span className="text-sm text-gray-400 font-bold uppercase">Ar-Ge Mühendisi</span>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-ozunlu-800 rounded-2xl p-6 flex flex-col justify-center items-center text-center border border-white/5"
                    >
                        <span className="text-4xl font-bold text-white mb-2">12</span>
                        <span className="text-sm text-gray-400 font-bold uppercase">Patentli Tasarım</span>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="col-span-2 md:col-span-2 bg-ozunlu-900 rounded-2xl p-8 flex flex-col justify-end text-left relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                        {/* Image Placeholder */}
                        <div className="absolute inset-0 bg-gray-700 opacity-50 group-hover:opacity-60 transition-opacity" />

                        <div className="relative z-20">
                            <h3 className="text-xl font-bold text-white mb-1">Robotik Kaynak Teknolojisi</h3>
                            <p className="text-gray-300 text-sm">Hatasız üretim için %100 otomasyon.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
