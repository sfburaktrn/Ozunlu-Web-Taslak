'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ProposalForm from '@/components/proposal/ProposalForm';

export default function DamperPage() {
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
                className="w-full max-w-[1600px] mx-auto bg-[#F5F5F7] rounded-[2.5rem] p-8 md:p-16 mb-8 relative overflow-hidden group"
            >
                <div className="relative z-10 max-w-3xl">
                    <span className="inline-block py-2 px-4 rounded-full bg-white border border-black/5 text-xs font-bold tracking-widest uppercase text-black mb-6">
                        Özünlü Mühendisliği
                    </span>
                    <h1 className="text-4xl md:text-7xl font-bold text-black mb-6 leading-[0.9]">
                        Damper <br /> <span className="text-black">Çözümleri</span>
                    </h1>
                    <p className="text-lg md:text-xl text-black max-w-xl leading-relaxed">
                        Zorlu sahaların vazgeçilmezi. Dayanıklılık ve performansın mükemmel dengesiyle, yükünüz ne olursa olsun işinizi kolaylaştırın.
                    </p>
                </div>

                {/* Hero Image */}
                <div className="md:absolute md:top-1/2 md:-translate-y-1/2 md:right-[-5%] w-full md:w-[60%] h-[300px] md:h-[120%] mt-8 md:mt-0 relative pointer-events-none">
                    {/* Not: Görsel path güncellenebilir, şimdilik temsili */}
                    <Image
                        src="/ozunlu-damper-performans.png"
                        alt="Damper Hero"
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
                    className="bg-[#F5F5F7] rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row gap-12 group hover:shadow-xl transition-all duration-500"
                >
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <h3 className="text-3xl md:text-5xl font-bold text-black mb-8">
                            Güç ve Estetiğin <br /> <span className="text-black">Mükemmel Uyumu</span>
                        </h3>

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                                    <span className="text-xl font-bold text-black">01</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-black">Hardox® Gövde</h4>
                                    <p className="text-black leading-relaxed">
                                        En zorlu darbelere ve aşınmalara karşı maksimum direnç. Uzun ömürlü kullanım garantisi.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                                    <span className="text-xl font-bold text-black">02</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-black">Aerodinamik Tasarım</h4>
                                    <p className="text-black leading-relaxed">
                                        Yakıt tasarrufu sağlayan özel mühendislik. Rüzgar direncini minimize eden hatlar.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                                    <span className="text-xl font-bold text-black">03</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-black">Yüksek Tonaj</h4>
                                    <p className="text-black leading-relaxed">
                                        Hafifletilmiş şasi yapısı sayesinde daha fazla yük taşıma kapasitesi.
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
                        <Image src="/products/gallery-1.jpg" alt="Özünlü Damper Genel" fill className="object-cover rounded-[2rem]" />
                    </div>
                </motion.div>
            </div>

            {/* 3. PROPOSAL FORM */}
            <ProposalForm initialProduct="damper" />

        </main >
    );
}
