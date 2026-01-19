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
        <main className="min-h-screen bg-white pt-24 pb-12 md:pt-32 md:pb-24 px-4 sm:px-6">

            {/* 1. HERO CARD */}
            <motion.section
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                className="w-full max-w-[1600px] mx-auto bg-[#FDFBF7] rounded-[2.5rem] p-8 md:p-16 mb-8 relative overflow-hidden group"
            >
                <div className="relative z-10 max-w-3xl">
                    <span className="inline-block py-2 px-4 rounded-full bg-white border border-black/5 text-xs font-bold tracking-widest uppercase text-black mb-6">
                        Tam Destek
                    </span>
                    <h1 className="text-4xl md:text-7xl font-bold text-black mb-6 leading-[0.9]">
                        Ekipman & <br /> <span className="text-black">Yedek Parça</span>
                    </h1>
                    <p className="text-lg md:text-xl text-black max-w-xl leading-relaxed">
                        Üretimin her aşamasında kalite. Orijinal yedek parça ve üstün hidrolik sistemler ile işiniz asla yarım kalmasın.
                    </p>
                </div>

                {/* Hero Image */}
                <div className="md:absolute md:top-1/2 md:-translate-y-1/2 md:right-[-5%] w-full md:w-[60%] h-[300px] md:h-[100%] mt-8 md:mt-0 relative pointer-events-none">
                    <Image
                        src="/ozunlu-ek-ekipmanlar-ve-yedek-parca.png"
                        alt="Ekipman Hero"
                        fill
                        className="object-contain"
                    />
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
                    className="bg-[#FDFBF7] rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row gap-12 group hover:shadow-xl transition-all duration-500"
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
