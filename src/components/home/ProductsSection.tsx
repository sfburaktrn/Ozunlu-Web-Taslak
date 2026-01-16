'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Truck, Package, Settings, Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const products = [
    {
        id: 1,
        title: 'DAMPER',
        description: 'Hardox çelik gövde, hidrolik sistem, 20-40m³ kapasite',
        icon: Truck,
        capacity: '20-40 m³',
        features: ['Hardox 450 Çelik', 'Hidrolik Sistem', 'Hafif Yapı'],
        link: '/products',
        image: '/products/product-new-1.jpg',
        hasSpotlight: true, // Platform ve spot ışığı efekti için
    },
    {
        id: 2,
        title: 'DORSE',
        description: 'Yüksek mukavemet, uzun ömür, özel tasarım seçenekleri',
        icon: Package,
        capacity: '15-25 m³',
        features: ['Özel Tasarım', 'Yüksek Dayanım', 'Kolay Bakım'],
        link: '/products',
        image: '/products/product-new-2.jpg',
        hasSpotlight: true,
    },
    {
        id: 3,
        title: 'KAR KÜREME',
        description: 'Müşteri ihtiyaçlarına özel damper çözümleri',
        icon: Settings,
        capacity: 'Özel',
        features: ['Kişiye Özel', 'Ar-Ge Desteği', 'Hızlı Üretim'],
        link: '/products',
        image: '/products/product-new-3.jpg',
        hasSpotlight: true,
    },
    {
        id: 4,
        title: 'Uygun Başlık Gelecek',
        description: 'Maksimum dayanıklılık ve estetik tasarım',
        icon: Truck,
        capacity: '24-32 m³',
        features: ['Yüksek Performans', 'Aerodinamik', 'Güçlü Şasi'],
        link: '/products',
        image: '/products/product-new-4.jpg',
        hasSpotlight: true,
    },
    {
        id: 5,
        title: 'Uygun Başlık Gelecek',
        description: 'Zorlu şartlara uygun heavy duty çözümler',
        icon: Package,
        capacity: '20-30 m³',
        features: ['Heavy Duty', 'Aşınma Direnci', 'Güçlendirilmiş Taban'],
        link: '/products',
        image: '/products/product-new-5.png',
        hasSpotlight: true,
    },
    {
        id: 6,
        title: 'Uygun Başlık Gelecek',
        description: 'Şehir içi ve şantiye kullanımı için ideal',
        icon: Settings,
        capacity: '18-28 m³',
        features: ['Hızlı Boşaltma', 'Düşük Ağırlık', 'Uzun Ömür'],
        link: '/products',
        image: '/products/product-new-6.png',
        hasSpotlight: true,
    },
];

export default function ProductsSection() {
    return (
        <section className="bg-white py-8">
            <div className="container mx-auto px-4">
                <div className="relative bg-[#f5f5f7] rounded-[2.5rem] py-24 overflow-hidden isolate shadow-sm">
                    {/* Background Grid Pattern */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `
                        linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
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
                                <span className="text-primary text-sm font-bold tracking-widest uppercase border border-primary/30 px-4 py-2 rounded-full">
                                    Ürünlerimiz
                                </span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-6xl font-black text-black mb-6"
                            >
                                ÜST YAPI <span className="text-primary">ÇÖZÜMLERİ</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-gray-600 text-lg max-w-2xl mx-auto"
                            >
                                Her ihtiyaca uygun, Hardox çelik kalitesinde üst yapı çözümleri
                            </motion.p>
                        </div>

                        {/* Products Grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                            {products.slice(0, 3).map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -8 }}
                                    className="group relative"
                                >
                                    <Link href="/urunler" className="block h-full">
                                        <div className="relative h-full rounded-2xl overflow-hidden group cursor-pointer">
                                            {/* Animated Gradient Background Lights - Simplified for Light Theme */}
                                            {product.hasSpotlight && (
                                                <>
                                                    {/* Main Gradient Background - White/Gray for card look */}
                                                    <div className="absolute inset-0 bg-white" />

                                                    {/* Animated Light Orbs */}
                                                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#000552] opacity-20 rounded-full blur-3xl animate-pulse"
                                                        style={{ animationDuration: '4s' }} />
                                                    <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#000552] opacity-30 rounded-full blur-3xl animate-pulse"
                                                        style={{ animationDuration: '5s', animationDelay: '1s' }} />
                                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#000552] opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity duration-1000" />

                                                    {/* Radial Gradient Lights */}
                                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 pointer-events-none"
                                                        style={{
                                                            background: 'radial-gradient(ellipse 100% 60% at 50% 100%, rgba(0, 5, 82, 0.5) 0%, rgba(0, 5, 82, 0.2) 30%, transparent 70%)',
                                                        }}
                                                    />
                                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 pointer-events-none"
                                                        style={{
                                                            background: 'radial-gradient(ellipse 80% 40% at 50% 0%, rgba(0, 5, 82, 0.3) 0%, transparent 60%)',
                                                        }}
                                                    />

                                                    {/* Side Light Accents */}
                                                    <div className="absolute top-1/4 left-0 w-32 h-32 bg-[#000552] opacity-15 rounded-full blur-2xl group-hover:opacity-25 transition-opacity" />
                                                    <div className="absolute top-1/4 right-0 w-32 h-32 bg-[#000552] opacity-15 rounded-full blur-2xl group-hover:opacity-25 transition-opacity" />

                                                    {/* Platform Base - Lighter for grid */}
                                                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-200 via-gray-100 to-gray-200 rounded-t-2xl shadow-sm">
                                                        {/* Platform Texture */}
                                                        <div className="absolute inset-0 opacity-20" style={{
                                                            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)',
                                                            backgroundSize: '8px 8px',
                                                        }} />

                                                        {/* Platform Edge Highlight */}
                                                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                                                        {/* Platform Shadow */}
                                                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-black/60 blur-2xl rounded-full" />
                                                    </div>

                                                    {/* Bottom Spot Light - Enhanced */}
                                                    <div
                                                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-40 pointer-events-none"
                                                        style={{
                                                            background: 'radial-gradient(ellipse 120% 80% at 50% 100%, rgba(0, 5, 82, 0.6) 0%, rgba(0, 5, 82, 0.3) 40%, transparent 80%)',
                                                        }}
                                                    />
                                                </>
                                            )}

                                            {/* Gradient Background for Non-Spotlight Products */}
                                            {!product.hasSpotlight && (
                                                <>
                                                    <div className="absolute inset-0 bg-gradient-to-br from-ozunlu-900 via-ozunlu-950 to-black" />
                                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-[#000552] opacity-10 rounded-full blur-3xl" />
                                                    <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#000552] opacity-5 rounded-full blur-3xl" />
                                                </>
                                            )}

                                            {/* Image Container - No Frame */}
                                            <div className={`relative ${product.hasSpotlight ? 'h-80' : 'h-64'} w-full flex items-end justify-center`}>
                                                {/* Transparent Background - No black box */}
                                                <div className="absolute inset-0 z-0" />

                                                {/* Product Image - Free Floating */}
                                                <div className="relative w-full h-full flex items-end justify-center z-20">
                                                    <Image
                                                        src={product.image}
                                                        alt={product.title}
                                                        fill
                                                        className={`object-contain object-bottom group-hover:scale-110 transition-transform duration-700`}
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                        onError={(e) => {
                                                            const target = e.target as HTMLImageElement;
                                                            target.style.display = 'none';
                                                            const placeholder = target.parentElement?.querySelector('.image-placeholder');
                                                            if (placeholder) {
                                                                (placeholder as HTMLElement).style.display = 'flex';
                                                            }
                                                        }}
                                                    />
                                                    <div className="image-placeholder absolute inset-0 flex items-center justify-center" style={{ display: 'none' }}>
                                                        <product.icon className="text-white/20" size={80} />
                                                    </div>
                                                </div>


                                            </div>

                                            {/* Content */}
                                            <div className="relative z-10 p-6">
                                                {/* Title */}
                                                <div className="flex items-center gap-2 mb-2 group-hover:translate-x-1 transition-transform">
                                                    <div className="relative w-20 h-5">
                                                        <Image
                                                            src="/ozunlu-logo.png"
                                                            alt="Özünlü"
                                                            fill
                                                            className="object-contain object-left"
                                                        />
                                                    </div>
                                                    <h3 className="text-xl font-black text-black group-hover:text-primary transition-colors pt-0.5">
                                                        {product.title}
                                                    </h3>
                                                </div>

                                                {/* Description */}
                                                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                                                    {product.description}
                                                </p>

                                                {/* Features */}
                                                <ul className="space-y-2 mb-6">
                                                    {product.features.map((feature, idx) => (
                                                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                                                            <Check size={14} className="text-primary flex-shrink-0" />
                                                            <span>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>

                                                {/* CTA Button */}
                                                <div className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-4 transition-all border-b border-primary/20 pb-1">
                                                    Detaylı İncele
                                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>

                                            {/* Enhanced Hover Light Effects */}
                                            {product.hasSpotlight && (
                                                <>
                                                    <div className="absolute inset-0 bg-gradient-to-br from-[#000552]/20 via-transparent to-[#000552]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                                    {/* Hover Light Pulse */}
                                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-48 bg-[#000552] opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none blur-3xl"
                                                        style={{
                                                            background: 'radial-gradient(ellipse at center, rgba(0, 5, 82, 0.4) 0%, transparent 70%)',
                                                        }}
                                                    />

                                                    {/* Shine Effect on Hover */}
                                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-shine" />
                                                    </div>
                                                </>
                                            )}
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
                                href="/urunler"
                                className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40"
                            >
                                TÜM ÜRÜNLER
                                <ArrowRight size={20} />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
