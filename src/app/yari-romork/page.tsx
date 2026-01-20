'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ProposalForm from '@/components/proposal/ProposalForm';

export default function YariRomorkPage() {
    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
    };

    return (
        <main className="min-h-screen bg-white pt-[50px] pb-12 md:pt-[60px] md:pb-24 px-4 sm:px-6">

            {/* 1. HERO SECTION (CARD STYLE) */}
            <section className="relative w-full h-[600px] md:h-[700px] rounded-[2.5rem] overflow-hidden mb-12 group mx-auto max-w-full shadow-2xl">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/yari-romork-hero-new.png"
                        alt="Özünlü Yarı Römork"
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        priority
                    />
                    {/* Gradient Overlay Removed as requested */}
                </div>

                {/* Content - Aligned to Left */}
                <div className="relative h-full flex flex-col justify-end md:justify-center items-start px-6 pb-32 md:pb-6 md:px-16 lg:px-24">
                    {/* Mobile Watermark */}
                    <div className="absolute top-32 left-6 md:hidden z-0 pointer-events-none select-none">
                        <span className="text-6xl font-black text-white/5 leading-none tracking-tighter whitespace-nowrap">
                            ÖZÜNLÜ
                        </span>
                    </div>

                    <div className="max-w-3xl relative text-left z-10 w-full">
                        {/* Desktop Watermark - Relative to text (Left aligned) */}
                        <div className="hidden md:block absolute -top-32 -left-10 z-0 pointer-events-none select-none">
                            <span className="md:text-[12rem] font-black text-white/5 leading-none tracking-tighter whitespace-nowrap">
                                ÖZÜNLÜ
                            </span>
                        </div>

                        <motion.h1
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="relative z-10 text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-[0.95] tracking-tight"
                        >
                            YARI RÖMORK <br />
                            <span className="text-primary">ÇÖZÜMLERİ</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-sm md:text-xl text-gray-300 mb-8 leading-relaxed mr-auto max-w-lg"
                        >
                            Ağır taşımacılığın yükünü hafifletin. Dayanıklılık, güvenlik ve verimlilik bir arada.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="flex justify-start"
                        >
                            <Link
                                href="#teklif-formu"
                                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-600 text-white px-8 py-4 text-base rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-primary/20"
                            >
                                Teklif Alın
                                <ArrowRight size={20} />
                            </Link>
                        </motion.div>
                    </div>
                </div>


            </section>


            {/* 2. GENEL ÖZELLİKLER (TEK KART AKIŞI) */}
            <div className="w-full max-w-[1600px] mx-auto space-y-8">

                {/* ÖNE ÇIKAN ÖZELLİKLER */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-[#F5F5F7] rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row gap-12 group hover:shadow-xl transition-all duration-500"
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
                                        Lowbed&apos;den konteyner taşıyıcıya, her türlü lojistik ihtiyaca uygun adaptasyon.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <Link href="#teklif-formu" className="inline-flex items-center gap-3 px-8 py-4 bg-transparent text-black border-2 border-black rounded-full font-bold hover:bg-black hover:text-white transition-all">
                                Teklif Alın <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 min-h-[400px] relative grayscale group-hover:grayscale-0 transition-all duration-700">
                        <Image src="/products/gallery-4.jpg" alt="Yarı Römork Genel" fill className="object-cover rounded-[2rem]" />
                    </div>
                </motion.div>
            </div>

            {/* 3. PROPOSAL FORM */}
            <ProposalForm initialProduct="dorse" />

        </main >
    );
}
