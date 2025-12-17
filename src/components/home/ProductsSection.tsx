'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Truck, Package, Settings, Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const products = [
    {
        id: 1,
        title: 'Yarı Römork Damperi',
        description: 'Hardox çelik gövde, hidrolik sistem, 20-40m³ kapasite',
        icon: Truck,
        capacity: '20-40 m³',
        features: ['Hardox 450 Çelik', 'Hidrolik Sistem', 'Hafif Yapı'],
        link: '/products',
        image: '/products/yarı-romork-damper.jpg', // Görsel yolunu buraya ekleyin
    },
    {
        id: 2,
        title: 'Çekici Damperi',
        description: 'Yüksek mukavemet, uzun ömür, özel tasarım seçenekleri',
        icon: Package,
        capacity: '15-25 m³',
        features: ['Özel Tasarım', 'Yüksek Dayanım', 'Kolay Bakım'],
        link: '/products',
        image: '/products/cekici-damper.jpg', // Görsel yolunu buraya ekleyin
    },
    {
        id: 3,
        title: 'Özel Üretim',
        description: 'Müşteri ihtiyaçlarına özel damper çözümleri',
        icon: Settings,
        capacity: 'Özel',
        features: ['Kişiye Özel', 'Ar-Ge Desteği', 'Hızlı Üretim'],
        link: '/products',
        image: '/products/ozel-uretim.jpg', // Görsel yolunu buraya ekleyin
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
                            whileHover={{ y: -8 }}
                            className="group relative"
                        >
                            <Link href={product.link} className="block h-full">
                                <div className="relative h-full bg-gradient-to-br from-ozunlu-900 to-ozunlu-950 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden group cursor-pointer">
                                    {/* Product Image */}
                                    <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-ozunlu-800 to-ozunlu-900">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                                        <Image
                                            src={product.image}
                                            alt={product.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            onError={(e) => {
                                                // Görsel yüklenemezse placeholder göster
                                                const target = e.target as HTMLImageElement;
                                                target.style.display = 'none';
                                                const placeholder = target.parentElement?.querySelector('.image-placeholder');
                                                if (placeholder) {
                                                    (placeholder as HTMLElement).style.display = 'flex';
                                                }
                                            }}
                                        />
                                        <div className="image-placeholder absolute inset-0 flex items-center justify-center bg-gradient-to-br from-ozunlu-800 to-ozunlu-900" style={{ display: 'none' }}>
                                            <product.icon className="text-white/20" size={80} />
                                        </div>
                                        
                                        {/* Capacity Badge - Image üzerinde */}
                                        <div className="absolute top-4 right-4 z-20">
                                            <span className="inline-flex items-center gap-2 bg-black/70 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/20">
                                                <product.icon size={14} />
                                                {product.capacity}
                                            </span>
                                        </div>

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-ozunlu-950 via-transparent to-transparent z-10" />
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10 p-6">
                                        {/* Title */}
                                        <h3 className="text-2xl font-black text-white mb-2 group-hover:text-white transition-colors">
                                            {product.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                                            {product.description}
                                        </p>

                                        {/* Features */}
                                        <ul className="space-y-2 mb-6">
                                            {product.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                                                    <Check size={14} className="text-white flex-shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* CTA Button */}
                                        <div className="inline-flex items-center gap-2 text-white font-bold text-sm group-hover:gap-4 transition-all border-b border-white/20 pb-1">
                                            Detaylı İncele
                                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>

                                    {/* Hover Glow Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                    
                                    {/* Shine Effect on Hover */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 animate-shine" />
                                    </div>
                                </div>
                            </Link>
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
