'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function YariRomorkPage() {
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
                        Lojistik Çözümleri
                    </span>
                    <h1 className="text-4xl md:text-7xl font-bold text-black mb-6 leading-[0.9]">
                        Yarı Römork <br /> <span className="text-black">Sistemleri</span>
                    </h1>
                    <p className="text-lg md:text-xl text-black max-w-xl leading-relaxed">
                        Ağır taşımacılığın yükünü hafifletin. Lowbed, tenteli ve konteyner taşıyıcı modellerimizle her yola hazırsınız.
                    </p>
                </div>

                {/* Hero Image */}
                <div className="md:absolute md:top-1/2 md:-translate-y-1/2 md:right-[-5%] w-full md:w-[65%] h-[300px] md:h-[130%] mt-8 md:mt-0 relative pointer-events-none">
                    <Image
                        src="/ozunlu-yari-romork-sistemleri.png"
                        alt="Römork Hero"
                        fill
                        className="object-contain"
                    />
                </div>
            </motion.section>


            {/* 2. GENEL ÖZELLİKLER (TEK KART AKIŞI) */}
            <div className="w-full max-w-[1600px] mx-auto space-y-8">

                {/* ÖNE ÇIKAN ÖZELLİKLER */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-[#FDFBF7] rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row gap-12 group hover:shadow-xl transition-all duration-500"
                >
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <h3 className="text-3xl md:text-5xl font-bold text-black mb-8">
                            Yolun Her Anına <br /> <span className="text-black">Hakim Olun</span>
                        </h3>

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                                    <span className="text-xl font-bold text-black">01</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-black">İleri Teknoloji Şasi</h4>
                                    <p className="text-black leading-relaxed">
                                        Robotik kaynak teknolojisi ile üretilen, esnemeye dayanıklı ve hafif şasi yapısı.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                                    <span className="text-xl font-bold text-black">02</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-black">Güvenlik Standartları</h4>
                                    <p className="text-black leading-relaxed">
                                        EBS fren sistemleri ve devrilmeye karşı RSS (Roll Stability Support) teknolojisi.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                                    <span className="text-xl font-bold text-black">03</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-black">Çok Yönlü Çözümler</h4>
                                    <p className="text-black leading-relaxed">
                                        Lowbed'den konteyner taşıyıcıya, her türlü lojistik ihtiyaca uygun adaptasyon.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <Link href="/iletisim" className="inline-flex items-center gap-3 px-8 py-4 bg-transparent text-black border-2 border-black rounded-full font-bold hover:bg-black hover:text-white transition-all">
                                Teklif Alın <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 min-h-[400px] relative grayscale group-hover:grayscale-0 transition-all duration-700">
                        <Image src="/products/gallery-4.jpg" alt="Yarı Römork Genel" fill className="object-cover rounded-[2rem]" />
                    </div>
                </motion.div>
            </div>
        </main >
    );
}
