'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Wrench, Settings, Truck } from 'lucide-react';

export default function EkEkipmanlarPage() {
    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
    };

    return (
        <main className="min-h-screen bg-white pt-[50px] pb-12 md:pt-[60px] md:pb-24 px-4 sm:px-6">

            {/* 1. HERO CARD */}
            <motion.section
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                className="w-full max-w-[1600px] mx-auto h-[600px] md:h-[700px] rounded-[2.5rem] relative overflow-hidden group mb-12 shadow-2xl"
            >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src="/ek-ekipman-banner.png"
                        alt="Ekipman Hero"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent md:bg-gradient-to-l md:from-black/80 md:via-black/40 md:to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 w-full h-full flex flex-col justify-center items-start p-8 md:p-16">
                    {/* Watermark - Right Aligned */}
                    <div className="hidden md:block absolute top-6 right-6 z-0 pointer-events-none select-none">
                        <span className="text-[8rem] md:text-[10rem] font-black text-white/5 leading-none tracking-tighter whitespace-nowrap">
                            ÖZÜNLÜ
                        </span>
                    </div>

                    <h1 className="relative z-10 text-4xl md:text-7xl font-bold text-white mb-6 leading-[0.9] max-w-4xl">
                        Ekipman & <br /> <span className="text-primary">Yedek Parça</span>
                    </h1>
                    <p className="relative z-10 text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed mb-8">
                        Üretimin her aşamasında kalite. Orijinal yedek parça ve üstün hidrolik sistemler ile işiniz asla yarım kalmasın.
                    </p>
                </div>
            </motion.section>


            {/* 2. GENEL ÖZELLİKLER (TEK KART AKIŞI) */}
            <div className="w-full max-w-[1600px] mx-auto space-y-8">

                {/* HİZMET KALİTESİ */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-[#F5F5F7] rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row gap-12 group hover:shadow-xl transition-all duration-500"
                >
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <h3 className="text-3xl md:text-5xl font-bold text-black mb-8">
                            Kesintisiz <br /> <span className="text-black">Operasyon</span>
                        </h3>

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                                    <span className="text-xl font-bold text-black">01</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-black">%100 Orijinal Parça</h4>
                                    <p className="text-black leading-relaxed">
                                        Ekipmanınızın ömrünü uzatan ve performansını koruyan sertifikalı orijinal yedek parçalar.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                                    <span className="text-xl font-bold text-black">02</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-black">Hızlı Tedarik Ağı</h4>
                                    <p className="text-black leading-relaxed">
                                        Geniş stok ve güçlü lojistik ağımız ile ihtiyacınız olan parçaya en kısa sürede ulaşın.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                                    <span className="text-xl font-bold text-black">03</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-black">Uzman Teknik Destek</h4>
                                    <p className="text-black leading-relaxed">
                                        Doğru parça seçimi ve montajı konusunda deneyimli ekibimizden 7/24 destek alın.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="w-full md:w-1/2 min-h-[400px] relative grayscale group-hover:grayscale-0 transition-all duration-700">
                        <Image src="/images/products/product-photo-2.png" alt="Yedek Parça Genel" fill className="object-cover rounded-[2rem]" />
                    </div>
                </motion.div>
            </div>



        </main>
    );
}
