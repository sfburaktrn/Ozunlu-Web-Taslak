'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Truck, Package, Settings } from 'lucide-react';
import Link from 'next/link';

const products = [
    {
        id: 1,
        title: 'Yarı Römork Damperi',
        description: 'Hardox çelik gövde, hidrolik sistem, 20-40m³ kapasite',
        icon: Truck,
        capacity: '20-40 m³',
        features: ['Hardox 450 Çelik', 'Hidrolik Sistem', 'Hafif Yapı'],
        link: '/products',
    },
    {
        id: 2,
        title: 'Çekici Damperi',
        description: 'Yüksek mukavemet, uzun ömür, özel tasarım seçenekleri',
        icon: Package,
        capacity: '15-25 m³',
        features: ['Özel Tasarım', 'Yüksek Dayanım', 'Kolay Bakım'],
        link: '/products',
    },
    {
        id: 3,
        title: 'Özel Üretim',
        description: 'Müşteri ihtiyaçlarına özel damper çözümleri',
        icon: Settings,
        capacity: 'Özel',
        features: ['Kişiye Özel', 'Ar-Ge Desteği', 'Hızlı Üretim'],
        link: '/products',
    },
];

export default function ProductsSection() {
    return (
        <section className="relative py-24 bg-black overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4"
                    >
                        <span className="text-white text-sm font-bold tracking-widest uppercase border border-primary/30 px-4 py-2 rounded-full">
                            Ürünlerimiz
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-white mb-6"
                    >
                        DAMPER <span className="text-white">ÇÖZÜMLERİ</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        Her ihtiyaca uygun, Hardox çelik kalitesinde damper sistemleri
                    </motion.p>
                </div>

                {/* Products Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative"
                        >
                            <div className="relative h-full bg-gradient-to-br from-ozunlu-900 to-ozunlu-950 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden">
                                {/* Steel Texture Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#3a4556] via-[#2d3748] to-[#1a202c]" />
                                <div className="absolute inset-0 opacity-40" style={{
                                    backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(255,255,255,0.02) 1px, rgba(255,255,255,0.02) 2px)',
                                    backgroundSize: '3px 3px',
                                }} />
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20" />

                                {/* Content */}
                                <div className="relative z-10 p-8">
                                    {/* Icon */}
                                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-primary/10 transition-all border border-white/20">
                                        <product.icon className="text-white" size={32} />
                                    </div>

                                    {/* Capacity Badge */}
                                    <div className="inline-block mb-4">
                                        <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-primary/10 text-white rounded-full border border-primary/30">
                                            {product.capacity}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-black text-white mb-3 group-hover:text-white transition-colors">
                                        {product.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-400 mb-6 leading-relaxed">
                                        {product.description}
                                    </p>

                                    {/* Features */}
                                    <ul className="space-y-2 mb-6">
                                        {product.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA Button */}
                                    <Link
                                        href={product.link}
                                        className="inline-flex items-center gap-2 text-white font-bold text-sm group-hover:gap-4 transition-all"
                                    >
                                        Detaylı İncele
                                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>

                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center"
                >
                    <Link
                        href="/products"
                        className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40"
                    >
                        Tüm Ürünleri Görüntüle
                        <ArrowRight size={20} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
