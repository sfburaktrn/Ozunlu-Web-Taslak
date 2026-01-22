'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const galleryImages = [
    { id: 1, src: '/products/ford-sari-damper-insaat.jpg', alt: 'Ford Sarı Damper İnşaat Sahası', w: 400, h: 300, x: "-35vw", y: "-25vh", r: -15 },
    { id: 2, src: '/products/kirmizi-havuz-damper-gece.jpg', alt: 'Kırmızı Havuz Damper Gece Çekimi', w: 400, h: 300, x: "35vw", y: "-30vh", r: 10 },
    { id: 3, src: '/products/siyah-hardox-damper-arka.jpg', alt: 'Siyah Hardox Damper Arka Görünüm', w: 400, h: 300, x: "-38vw", y: "20vh", r: -5 },
    { id: 4, src: '/products/ford-sari-damper-yol.jpg', alt: 'Ford Sarı Damper Yol', w: 400, h: 300, x: "38vw", y: "25vh", r: 12 },
    { id: 5, src: '/products/gri-damper-modeli.jpg', alt: 'Gri Damper Modeli', w: 400, h: 300, x: "0vw", y: "-38vh", r: 5 },
];

export default function GallerySection() {
    const targetRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });

    // Scroll mesafesini kısalttık (300vh -> 200vh)
    // Böylece "boş siyah ekran" hissi azalacak ve animasyon daha çabuk tamamlanacak
    const springProgress = useSpring(scrollYProgress, {
        stiffness: 50,
        damping: 30,
        mass: 0.8,
        restDelta: 0.001
    });

    // Logo ve Slogan Opaklığı
    const contentOpacity = useTransform(springProgress, [0.1, 0.3], [0, 1]);
    const contentScale = useTransform(springProgress, [0.1, 0.3], [0.9, 1]);
    const contentBlur = useTransform(springProgress, [0.1, 0.3], ["10px", "0px"]);

    return (
        <section className="bg-white pb-8"> {/* Ana zemin kurumsal beyaz */}

            {/* SCROLL TRIGGER (TRACK) */}
            <div ref={targetRef} className="relative h-[200vh]">

                {/* STICKY CONTAINER: Ekran boyunca sabit kalır */}
                <div className="sticky top-0 h-screen w-full flex items-center justify-center p-4">

                    {/* VISUAL BLACK CARD: Görünen siyah kart bu elemandır */}
                    <div className="relative w-full max-w-[95%] h-[90vh] rounded-[2rem] md:rounded-[3rem] bg-black overflow-hidden shadow-2xl perspective-[1000px] flex items-center justify-center">

                        {/* --- MERKEZİ İÇERİK: LOGO & SLOGAN --- */}
                        <motion.div
                            style={{ opacity: contentOpacity, scale: contentScale, filter: `blur(${contentBlur})` }}
                            className="relative z-10 flex flex-col items-center justify-center text-center mix-blend-difference"
                        >
                            {/* LOGO */}
                            <div className="relative w-32 h-16 mb-4 md:w-64 md:h-32 md:mb-6">
                                <Image
                                    src="/ozunlu-logo-new.png"
                                    alt="Özünlü Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* SLOGAN */}
                            <h2 className="text-xl md:text-5xl font-bold text-white tracking-widest font-sans">
                                En İyilerin Tercihi
                            </h2>

                            <Link
                                href="/medya"
                                className="mt-4 text-[10px] md:text-xs font-bold tracking-[0.3em] text-white/50 hover:text-white uppercase border-b border-white/20 pb-1 hover:border-white transition-all"
                            >
                                Keşfet
                            </Link>
                        </motion.div>


                        {/* --- DAĞILAN GÖRSELLER --- */}
                        {galleryImages.map((img, i) => {
                            // Spread mesafelerini ve dönüşlerini spring'e bağla
                            // useTransform hook'ları doğrudan render içinde kullanılabilir (Framer Motion best practice)
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const x = useTransform(springProgress, [0, 0.8], ["0%", img.x]);
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const y = useTransform(springProgress, [0, 0.8], ["0%", img.y]);
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const rotate = useTransform(springProgress, [0, 0.8], [`${i % 2 === 0 ? -15 : 15}deg`, `${img.r}deg`]);
                            // İPTAL: Opacity kalktı. Görseller son ana kadar ekranda kalsın.
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            // const opacity = useTransform(springProgress, [0.85, 1], [1, 0]); 

                            return (
                                <motion.div
                                    key={img.id}
                                    style={{ x, y, rotate }} // Opacity prop'u kaldırıldı
                                    className="absolute z-20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                                >
                                    <div
                                        className="relative overflow-hidden bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm transition-all w-[40vw] h-[55vw] md:w-[var(--d-w)] md:h-[var(--d-h)]"
                                        style={{
                                            '--d-w': `${img.w}px`,
                                            '--d-h': `${img.h}px`,
                                        } as React.CSSProperties}
                                    >
                                        <Image
                                            src={img.src}
                                            alt={img.alt}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 40vw, 400px"
                                        />
                                        {/* Parlama efekti */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                                    </div>
                                </motion.div>
                            );
                        })}

                        {/* Arka Plan Efektleri */}
                        <div className="absolute inset-0 pointer-events-none z-50 mix-blend-overlay opacity-[0.03] bg-[url('/noise.png')]" />

                    </div>
                </div>
            </div>

        </section>
    );
}
