'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const galleryImages = [
    { id: 1, src: '/products/gallery-1.jpg?v=2', alt: 'Özünlü Damper', w: 300, h: 400, x: -350, y: -200, r: -15 },
    { id: 2, src: '/products/gallery-2.jpg?v=2', alt: 'Özünlü Damper', w: 400, h: 300, x: 300, y: -250, r: 10 },
    { id: 3, src: '/products/gallery-3.jpg?v=2', alt: 'Özünlü Damper', w: 320, h: 420, x: -400, y: 150, r: -5 },
    { id: 4, src: '/products/gallery-4.jpg?v=2', alt: 'Özünlü Damper', w: 280, h: 350, x: 350, y: 200, r: 12 },
    { id: 5, src: '/products/gallery-5.jpg?v=2', alt: 'Özünlü Damper', w: 350, h: 250, x: 0, y: -350, r: 5 },
    { id: 6, src: '/products/gallery-6.jpg?v=2', alt: 'Özünlü Damper', w: 300, h: 300, x: 0, y: 350, r: -8 },
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

            {/* SCROLL TRIGGER (TRACK) - DESKTOP ONLY */}
            <div ref={targetRef} className="relative h-[200vh] hidden md:block">

                {/* STICKY CONTAINER: Ekran boyunca sabit kalır */}
                <div className="sticky top-0 h-screen w-full flex items-center justify-center p-4">

                    {/* VISUAL BLACK CARD: Görünen siyah kart bu elemandır */}
                    <div className="relative w-full max-w-[95%] h-[90vh] rounded-[3rem] bg-black overflow-hidden shadow-2xl perspective-[1000px] flex items-center justify-center">

                        {/* --- MERKEZİ İÇERİK: LOGO & SLOGAN --- */}
                        <motion.div
                            style={{ opacity: contentOpacity, scale: contentScale, filter: `blur(${contentBlur})` }}
                            className="relative z-10 flex flex-col items-center justify-center text-center mix-blend-difference"
                        >
                            {/* LOGO */}
                            <div className="relative w-48 h-24 mb-6 md:w-64 md:h-32">
                                <Image
                                    src="/ozunlu-logo-new.png"
                                    alt="Özünlü Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* SLOGAN */}
                            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-widest font-sans">
                                En İyilerin Tercihi
                            </h2>

                            <Link
                                href="/medya"
                                className="mt-8 text-xs font-bold tracking-[0.3em] text-white/50 hover:text-white uppercase border-b border-white/20 pb-2 hover:border-white transition-all"
                            >
                                Keşfet
                            </Link>
                        </motion.div>


                        {/* --- DAĞILAN GÖRSELLER --- */}
                        {galleryImages.map((img, i) => {
                            // Spread mesafelerini ve dönüşlerini spring'e bağla
                            // useTransform hook'ları doğrudan render içinde kullanılabilir (Framer Motion best practice)
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const x = useTransform(springProgress, [0, 0.8], ["0%", `${img.x}px`]);
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const y = useTransform(springProgress, [0, 0.8], ["0%", `${img.y}px`]);
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
                                        className="relative overflow-hidden bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm" // Hafif cam efekti çerçeve
                                        style={{ width: img.w, height: img.h }}
                                    >
                                        <Image
                                            src={img.src}
                                            alt={img.alt}
                                            fill
                                            className="object-cover"
                                            sizes="400px"
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

            {/* MOBILE FALLBACK (Basitleştirilmiş Kart Görünümü) */}
            <div className="md:hidden px-4 py-8 bg-white">
                <div className="bg-black rounded-[2rem] p-8 text-center overflow-hidden relative">
                    <div className="relative w-32 h-16 mx-auto mb-4">
                        <Image src="/ozunlu-logo-new.png" alt="Logo" fill className="object-contain brightness-0 invert" />
                    </div>
                    <h2 className="text-xl font-bold text-white mb-8">En İyilerin Tercihi</h2>

                    <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory -mx-8 px-8 pb-4 no-scrollbar">
                        {galleryImages.map((img) => (
                            <div key={img.id} className="snap-center shrink-0 w-[70vw] aspect-[3/4] relative rounded-xl overflow-hidden border border-white/10">
                                <Image src={img.src} alt={img.alt} fill className="object-cover" />
                            </div>
                        ))}
                    </div>

                    <Link href="/medya" className="inline-block mt-8 text-white/70 text-sm tracking-widest border-b border-white/30 pb-1">TÜM GALERİ</Link>
                </div>
            </div>

        </section>
    );
}
