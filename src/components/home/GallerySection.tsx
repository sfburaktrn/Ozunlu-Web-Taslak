'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

const galleryImages = [
    { id: 1, src: '/images/ozunlu-turuncu-damper-santiye.webp', alt: 'Özünlü turuncu damper şantiye', w: 400, h: 300, x: "-35vw", y: "-25vh", r: -15 },
    { id: 2, src: '/images/ozunlu-kirmizi-damper-gece.webp', alt: 'Özünlü kırmızı damper gece', w: 400, h: 300, x: "35vw", y: "-30vh", r: 10 },
    { id: 3, src: '/images/ozunlu-siyah-hardox-damper-endustriyel.webp', alt: 'Özünlü siyah Hardox damper endüstriyel', w: 400, h: 300, x: "-38vw", y: "20vh", r: -5 },
    { id: 4, src: '/images/ozunlu-sari-damper-saha.webp', alt: 'Özünlü sarı damper saha', w: 400, h: 300, x: "38vw", y: "25vh", r: 12 },
    { id: 5, src: '/images/ozunlu-gri-damper-dag-yolu.webp', alt: 'Özünlü gri damper dağ yolu', w: 400, h: 300, x: "0vw", y: "-38vh", r: 5 },
];

export default function GallerySection() {
    const t = useTranslations('home.gallery');
    const tCommon = useTranslations('common');
    const tLabels = useTranslations('common.labels');
    const targetRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });

    const springProgress = useSpring(scrollYProgress, {
        stiffness: 50,
        damping: 30,
        mass: 0.8,
        restDelta: 0.001
    });

    const contentOpacity = useTransform(springProgress, [0.1, 0.3], [0, 1]);
    const contentScale = useTransform(springProgress, [0.1, 0.3], [0.9, 1]);
    const contentBlur = useTransform(springProgress, [0.1, 0.3], ["10px", "0px"]);

    return (
        <section className="bg-white pb-8">

            <div ref={targetRef} className="relative h-[200vh]">

                <div className="sticky top-0 h-screen w-full flex items-center justify-center">

                    <div className="container mx-auto px-4 w-full">
                    <div className="relative w-full h-[90vh] rounded-3xl bg-black overflow-hidden shadow-2xl perspective-[1000px] flex items-center justify-center">

                        <motion.div
                            style={{ opacity: contentOpacity, scale: contentScale, filter: `blur(${contentBlur})` }}
                            className="relative z-10 flex flex-col items-center justify-center text-center mix-blend-difference"
                        >
                            <div className="relative w-32 h-16 mb-4 md:w-64 md:h-32 md:mb-6">
                                <Image
                                    src="/ozunlu-logo-new.png"
                                    alt={tLabels('logoAlt')}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            <h2 className="typo-h2-on-dark">
                                {t('slogan')}
                            </h2>

                            <Link
                                href="/iletisim"
                                className="mt-4 text-[10px] md:text-xs font-bold tracking-[0.3em] text-white/50 hover:text-white uppercase border-b border-white/20 pb-1 hover:border-white transition-all"
                            >
                                {tCommon('cta.kesfet')}
                            </Link>
                        </motion.div>


                        {galleryImages.map((img, i) => {
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const x = useTransform(springProgress, [0, 0.8], ["0%", img.x]);
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const y = useTransform(springProgress, [0, 0.8], ["0%", img.y]);
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const rotate = useTransform(springProgress, [0, 0.8], [`${i % 2 === 0 ? -15 : 15}deg`, `${img.r}deg`]);

                            return (
                                <motion.div
                                    key={img.id}
                                    style={{ x, y, rotate }}
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
                                            loading="lazy"
                                            quality={75}
                                            className="object-cover"
                                            sizes="(max-width: 768px) 40vw, 400px"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                                    </div>
                                </motion.div>
                            );
                        })}


                    </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
