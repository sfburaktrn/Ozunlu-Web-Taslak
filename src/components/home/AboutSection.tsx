'use client';

import { motion } from 'framer-motion';
import { Award, Users, Globe, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const stats = [
    { icon: Award, value: '45+', label: 'Yıllık Tecrübe' },
    { icon: Users, value: '500+', label: 'Mutlu Müşteri' },
    { icon: Globe, value: '50+', label: 'İhracat Ülkesi' },
    { icon: TrendingUp, value: '%100', label: 'Yerli Üretim' },
];

export default function AboutSection() {
    return (
        <section className="bg-white py-8">
            <div className="container mx-auto px-4">
                <div className="relative bg-[#f5f5f7] rounded-[2.5rem] py-24 overflow-hidden isolate shadow-sm">


                    <div className="container mx-auto px-4 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left Side - Content */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="inline-block mb-4">
                                    <span className="text-primary text-sm font-bold tracking-widest uppercase border border-primary/30 px-4 py-2 rounded-full">
                                        Hakkımızda
                                    </span>
                                </div>

                                <h2 className="text-4xl md:text-6xl font-black text-black mb-6 leading-tight">
                                    Hızlı Üretimle Gücü Tanımlıyoruz
                                </h2>

                                <div className="space-y-4 text-gray-600 text-lg leading-relaxed mb-8">
                                    <p>
                                        <span className="text-black font-bold">1977 yılından</span> bu yana, Türkiye’nin kalbi İstanbul’dan dünyaya uzanan üretim gücümüzle; farklı sektörlerin ihtiyaçlarına cevap veren, güvenilir ve uzun ömürlü üst yapı çözümleri sunuyoruz.
                                    </p>
                                    <p>
                                        <Image
                                            src="/hardox-logo.png"
                                            alt="Hardox"
                                            width={120}
                                            height={30}
                                            className="inline-block rounded-lg w-20 md:w-[120px] h-auto mr-2 align-middle"
                                        />
                                        çeliğin sunduğu yüksek mukavemeti, hızlı ve kontrollü üretim süreçlerimizle birleştiriyor; her ürünü yalnızca bir araç üst yapısı değil, operasyonel verimliliği artıran bir sistem olarak ele alıyoruz.
                                    </p>

                                </div>

                                <motion.a
                                    href="/corporate"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                                >
                                    Kurumsal
                                    <TrendingUp size={20} />
                                </motion.a>
                            </motion.div>

                            {/* Right Side - Stats Grid */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="grid grid-cols-2 gap-6"
                            >
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        className="relative group"
                                    >
                                        <div className="absolute inset-0 rounded-2xl bg-[#000552] shadow-lg" />

                                        {/* Content */}
                                        <div className="relative z-10 p-6">
                                            {/* Icon */}
                                            <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-all backdrop-blur-md border border-white/10 shadow-sm">
                                                <stat.icon className="text-white" size={28} />
                                            </div>

                                            {/* Value */}
                                            <div className="text-4xl font-black text-white mb-2 group-hover:scale-105 transition-transform origin-left">
                                                {stat.value}
                                            </div>

                                            {/* Label */}
                                            <div className="text-white/80 text-sm font-bold uppercase tracking-wider group-hover:text-white transition-colors">
                                                {stat.label}
                                            </div>
                                        </div>

                                        {/* Hover Glow Effect */}
                                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl" />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Bottom Accent Line */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="mt-16 h-1 bg-gray-200"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
