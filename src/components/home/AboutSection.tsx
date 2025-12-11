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
        <section className="relative py-24 bg-gradient-to-b from-black via-ozunlu-950 to-black overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

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

                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                            GÜCÜN
                            <br />
                            <span className="text-primary">MÜHENDİSLİK</span> HALİ
                        </h2>

                        <div className="space-y-4 text-gray-300 text-lg leading-relaxed mb-8">
                            <p>
                                <span className="text-white font-bold">1980 yılından</span> bu yana, Türkiye&apos;nin kalbi Ankara&apos;dan
                                dünyaya uzanan bir mühendislik hikayesi yazıyoruz.
                            </p>
                            <p className="flex items-center flex-wrap gap-2">
                                <Image
                                    src="/hardox-logo.png"
                                    alt="Hardox"
                                    width={120}
                                    height={30}
                                    className="inline-block rounded-lg w-20 md:w-[120px] h-auto"
                                />
                                çelik işleme teknolojisinde <span className="text-primary font-bold">öncü</span> konumumuzla,
                                her damper sadece bir ürün değil, dayanıklılığın ve gücün sembolüdür.
                            </p>
                            <p>
                                <span className="text-white font-bold">Ar-Ge merkezimiz</span> ve <span className="text-white font-bold">robotik üretim hatlarımızla</span> yarının
                                teknolojisini bugün üretiyoruz.
                            </p>
                        </div>

                        <motion.a
                            href="/corporate"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-3 bg-primary text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
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
                                <div className="relative bg-gradient-to-br from-ozunlu-900 to-ozunlu-950 p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-all duration-300 h-full overflow-hidden">
                                    {/* Base Steel Layer */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#3a4556] via-[#2d3748] to-[#1a202c]" />

                                    {/* Steel Grain Texture */}
                                    <div className="absolute inset-0 opacity-60" style={{
                                        backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(255,255,255,0.02) 1px, rgba(255,255,255,0.02) 2px), repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.05) 1px, rgba(0,0,0,0.05) 2px)',
                                        backgroundSize: '3px 3px',
                                    }} />

                                    {/* Noise Texture */}
                                    <div className="absolute inset-0 opacity-40" style={{
                                        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                                        backgroundSize: '200px 200px',
                                    }} />

                                    {/* Brushed Metal Effect */}
                                    <div className="absolute inset-0 opacity-30" style={{
                                        backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, transparent 1px, transparent 2px, rgba(0,0,0,0.05) 3px, transparent 4px)',
                                    }} />

                                    {/* Metallic Shine */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent via-40% to-transparent" />
                                    <div className="absolute inset-0 bg-gradient-to-tl from-white/5 via-transparent to-black/30" />

                                    {/* Scratches */}
                                    <div className="absolute inset-0 opacity-20" style={{
                                        backgroundImage: 'linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.1) 49%, rgba(255,255,255,0.1) 51%, transparent 52%), linear-gradient(-45deg, transparent 48%, rgba(0,0,0,0.1) 49%, rgba(0,0,0,0.1) 51%, transparent 52%)',
                                        backgroundSize: '60px 60px, 80px 80px',
                                        backgroundPosition: '0 0, 20px 20px',
                                    }} />

                                    {/* Edge Highlight */}
                                    <div className="absolute inset-0 rounded-2xl" style={{
                                        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.3)',
                                    }} />

                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Icon */}
                                        <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-primary/10 transition-all backdrop-blur-md border border-white/20 shadow-lg">
                                            <stat.icon className="text-primary drop-shadow-[0_2px_8px_rgba(212,175,55,0.5)]" size={28} />
                                        </div>

                                        {/* Value - Engraved Effect */}
                                        <div className="text-4xl font-black text-white mb-2 group-hover:text-primary transition-colors" style={{
                                            textShadow: '0 3px 6px rgba(0,0,0,0.8), 0 -1px 1px rgba(255,255,255,0.15), 1px 1px 0 rgba(0,0,0,0.3), -1px -1px 0 rgba(255,255,255,0.1)',
                                            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))',
                                        }}>
                                            {stat.value}
                                        </div>

                                        {/* Label - Stamped Effect */}
                                        <div className="text-gray-200 text-sm font-bold uppercase tracking-wider" style={{
                                            textShadow: '0 2px 4px rgba(0,0,0,0.9), 0 -1px 0 rgba(255,255,255,0.1), 1px 1px 0 rgba(0,0,0,0.4)',
                                        }}>
                                            {stat.label}
                                        </div>
                                    </div>

                                    {/* Hover Glow Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                                </div>
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
                    className="mt-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
                />
            </div>
        </section>
    );
}
