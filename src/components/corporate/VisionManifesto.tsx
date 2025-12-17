'use client';

import { motion } from 'framer-motion';

export default function VisionManifesto() {
    return (
        <section className="py-24 bg-ozunlu-950 text-white border-b border-white/5">
            <div className="container mx-auto px-4 text-center max-w-4xl">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-black mb-12 tracking-tighter"
                >
                    KLASİK BİR &quot;HAKKIMIZDA&quot; YAZISINDAN <span className="text-white">FAZLASI</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-8 text-lg md:text-xl text-gray-300 font-light leading-relaxed"
                >
                    <p>
                        1980 yılında küçük bir atölyede yanan o ilk kaynak kıvılcımı, bugün
                        3 kıtada, 50’den fazla ülkede ağır sanayinin yükünü taşıyan dev bir güce dönüştü.
                    </p>
                    <p>
                        Biz sadece damper üretmiyoruz. Biz, inşaat devlerinin projelerini zamanında
                        yetiştirmesini sağlayan hızı, maden ocaklarının zorlu şartlarına direnen
                        dayanıklılığı ve lojistik sektörünün kârlılığını artıran mühendisliği tasarlıyoruz.
                    </p>
                    <p className="text-white font-semibold">
                        Özünlü Damper, çeliğe sadece şekil vermiyor; ona bir karakter, bir misyon yüklüyor.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
