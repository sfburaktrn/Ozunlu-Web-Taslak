'use client';

import { motion } from 'framer-motion';

export default function ProductionPhilosophy() {
    return (
        <section className="py-24 bg-ozunlu-950 relative overflow-hidden">
            {/* Decorative Background Element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/[0.03] to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Column: Typographic Art */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <div className="relative">
                            <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white/20 via-white/5 to-transparent leading-[0.9] tracking-tighter opacity-40 select-none absolute -top-12 -left-8 w-full z-0 whitespace-nowrap">
                                ÖZÜNLÜ
                            </h2>
                            <h2 className="text-4xl md:text-5xl font-black text-white relative z-10 leading-tight">
                                SADECE ÇELİK DEĞİL, <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
                                    GÜVEN İŞLİYORUZ.
                                </span>
                            </h2>
                            <div className="relative mt-8 h-2">
                                {/* White Light/Glow Effect Behind */}
                                <motion.div
                                    initial={{ width: 0, opacity: 0 }}
                                    whileInView={{ width: "8rem", opacity: 0.6 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="absolute top-1/2 left-0 -translate-y-1/2 h-4 bg-white/40 blur-xl rounded-full pointer-events-none"
                                />
                                {/* Main Navy Line */}
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "6rem" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="absolute top-1/2 left-0 -translate-y-1/2 h-1 bg-gradient-to-r from-[#000080] to-transparent shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-1/2"
                    >
                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
                            <p>
                                <strong className="text-white font-semibold">1977&apos;den bugüne,</strong> üretim bandımızdan çıkan sadece bir damper değil; yarım asırlık bir tecrübenin, mühendislik tutkusunun ve inovasyonun somut halidir. Bizim için kalite, bir kontrol aşaması değil, üretim kültürümüzün ta kendisidir.
                            </p>
                            <p>
                                Zorlu coğrafyalar ve ağır yükler altında test edilen ürünlerimiz, en ince detayına kadar <span className="text-white border-b border-white/20 pb-0.5">dayanıklılık</span> ve <span className="text-white border-b border-white/20 pb-0.5">performans</span> odaklı tasarlanır. Hardox çeliğinin sağlamlığını, Türk mühendisliğinin kıvrak zekasıyla birleştiriyor; sektöre yön veren standartları belirliyoruz.
                            </p>
                            <blockquote className="border-l-4 border-white/50 pl-6 py-2 italic text-gray-400 my-8">
                                &quot;Her kaynak dikişinde, her montajda ve her teslimatta tek bir amacımız var: İş ortağımızın gücüne güç katmak.&quot;
                            </blockquote>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
