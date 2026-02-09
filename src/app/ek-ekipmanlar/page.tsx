'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Settings, Truck, Disc, Zap, Wrench, ShieldCheck, Phone, ChevronDown, PackageCheck } from 'lucide-react';
import GallerySection from '@/components/home/GallerySection';

export default function EkEkipmanlarPage() {
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const categories = [
        {
            title: "Hidrolik Sistemler",
            desc: "Güçlü ve dayanıklı hidrolik çözümler.",
            icon: <ForceIcon className="w-8 h-8 text-primary" />,
        },
        {
            title: "Dingil & Süspansiyon",
            desc: "Yol tutuşu ve konfor için premium markalar.",
            icon: <Truck className="w-8 h-8 text-primary" />,
        },
        {
            title: "Fren Sistemleri",
            desc: "Maksimum güvenlik sağlayan fren kitleri.",
            icon: <Disc className="w-8 h-8 text-primary" />,
        },
        {
            title: "Elektrik & Aydınlatma",
            desc: "Modern LED sistemler ve elektrik aksamı.",
            icon: <Zap className="w-8 h-8 text-primary" />,
        },
        {
            title: "Dorse Aksesuarları",
            desc: "Dolap, tank ve fonksiyonel eklemeler.",
            icon: <Settings className="w-8 h-8 text-primary" />,
        },
        {
            title: "Yedek Parça",
            desc: "Orijinal ve garantili yedek parça tedariği.",
            icon: <Wrench className="w-8 h-8 text-primary" />,
        }
    ];

    return (
        <main className="min-h-screen bg-[#F8F9FA] pt-[50px] pb-12 md:pt-[60px] md:pb-24 px-4 sm:px-6">

            {/* 1. HERO SECTION (CARD STYLE) */}
            <section className="relative w-full h-[85vh] min-h-[600px] rounded-[2.5rem] overflow-hidden mx-auto max-w-full shadow-2xl group mb-24">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/ek-ekipman-banner.png"
                        alt="Ekipman ve Yedek Parça"
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-[2s] ease-out"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 w-full h-full flex flex-col justify-center px-6 md:px-16 lg:px-24">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={staggerContainer}
                        className="max-w-4xl"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold mb-8">
                            <PackageCheck size={16} className="text-white" />
                            <span className="tracking-wider uppercase">GÜVENİLİR TEDARİKÇİNİZ</span>
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                            Ekipman ve <br />
                            <span className="text-primary">Yedek Parça</span> Çözümleri
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed mb-10 font-light">
                            İhtiyacınız olan tüm dorse ekipmanları ve yedek parçalar, Özünlü güvencesiyle tek adreste. Geniş stok ve hızlı teslimat.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                            <Link href="/iletisim" className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center gap-2">
                                Bize Ulaşın <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
                >
                    <ChevronDown size={32} />
                </motion.div>
            </section>

            {/* 2. STATS BAR (Separate Cards) */}
            <div className="max-w-[1600px] mx-auto mb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex items-center gap-6 group">
                        <div className="p-4 bg-primary/5 rounded-2xl text-primary group-hover:scale-110 transition-transform duration-300">
                            <ShieldCheck className="w-10 h-10" />
                        </div>
                        <div>
                            <h4 className="text-4xl font-black text-black mb-1">%100</h4>
                            <p className="text-gray-500 text-sm uppercase tracking-wider font-bold">Orijinal Ürün Garantisi</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex items-center gap-6 group">
                        <div className="p-4 bg-primary/5 rounded-2xl text-primary group-hover:scale-110 transition-transform duration-300">
                            <Truck className="w-10 h-10" />
                        </div>
                        <div>
                            <h4 className="text-4xl font-black text-black mb-1">Hızlı</h4>
                            <p className="text-gray-500 text-sm uppercase tracking-wider font-bold">Stoktan Teslimat</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex items-center gap-6 group">
                        <div className="p-4 bg-primary/5 rounded-2xl text-primary group-hover:scale-110 transition-transform duration-300">
                            <Phone className="w-10 h-10" />
                        </div>
                        <div>
                            <h4 className="text-4xl font-black text-black mb-1">Destek</h4>
                            <p className="text-gray-500 text-sm uppercase tracking-wider font-bold">Satış Öncesi & Sonrası</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. CATEGORIES GRID (Clean Cards) */}
            <section id="kategoriler" className="max-w-[1600px] mx-auto mb-24">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">Ürün Gruplarımız</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Sektörün lider markalarının en kaliteli ürünlerini sizinle buluşturuyoruz.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((cat, index) => (
                        <Link
                            key={index}
                            href="/iletisim"
                            className="block"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative h-[300px] bg-white rounded-[2rem] p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                            >
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                                    {cat.icon}
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-black mb-3">{cat.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {cat.desc}
                                    </p>
                                </div>

                                <div className="flex items-center gap-2 text-primary font-bold text-sm opacity-60 group-hover:opacity-100 transition-opacity">
                                    Bilgi Al <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* 5. CTA SECTION (Wide Card) */}
            <section id="contact" className="max-w-[1600px] mx-auto mb-24">
                <div className="bg-[#000552] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/5 pattern-grid-lg opacity-10" />
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Aradığınız Parçayı Bulamadınız mı?
                        </h2>
                        <p className="text-xl text-white/90 mb-10">
                            Uzman ekibimizle iletişime geçin, ihtiyacınız olan ürünü sizin için temin edelim.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="bg-white text-[#000552] hover:bg-gray-100 px-10 py-4 rounded-xl font-bold text-lg transition-all w-full sm:w-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                İletişime Geçin
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. FEATURE HIGHLIGHT (Clean Split) */}
            <section className="mb-24">
                <div className="max-w-[1600px] mx-auto">
                    <div className="bg-[#F8F9FA] rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-lg">
                            <Image
                                src="/ek-ekipman-yedek-parca.png"
                                alt="Kalite Standartları"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight">
                                Doğru Parça, <br />
                                <span className="text-primary">Maksimum Performans</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Aracınızın performansını korumak ve ömrünü uzatmak için doğru ekipman seçimi kritiktir. Özünlü olarak, sektörün en güvenilir markalarının ürünlerini stoklarımızdan anında teslim ediyoruz.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    "Orijinal ve Sertifikalı Ürünler",
                                    "Geniş Marka ve Model Seçeneği",
                                    "Uygun Fiyat ve Ödeme Koşulları",
                                    "Teknik Danışmanlık Hizmeti"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                                        <div className="min-w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <ShieldCheck className="w-4 h-4" />
                                        </div>
                                        <span className="text-base font-semibold text-gray-900">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. GALLERY SECTION */}
            <GallerySection />

        </main>
    );
}

// Custom Icon for 'Force/Hydraulic' representation
function ForceIcon({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M12 2v20" />
            <path d="M5 9l7-7 7 7" />
            <path d="M5 15l7 7 7-7" />
        </svg>
    )
}
