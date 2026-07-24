'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTextDirection } from '@/i18n/useTextDirection';

type Props = {
    imageSrc: string;
    imageAlt: string;
    eyebrow: string;
    title: string;
    body: string;
    points?: string[];
    /** Görsel solda mı (masaüstü) */
    imageLeft?: boolean;
    /** Koyu metalik lacivert tonları */
    tone?: 'frost' | 'glacier' | 'ice';
};

const TONE = {
    frost: {
        panel: 'bg-[linear-gradient(155deg,#0e1840_0%,#121f4a_38%,#0a1435_72%,#08112e_100%)]',
        ambient:
            'linear-gradient(125deg, rgba(180,200,230,0.12) 0%, transparent 42%), radial-gradient(ellipse 70% 55% at 18% 12%, rgba(255,255,255,0.1), transparent 55%), radial-gradient(ellipse 55% 45% at 92% 88%, rgba(0,0,0,0.35), transparent 55%)',
    },
    glacier: {
        panel: 'bg-[linear-gradient(155deg,#0c1638_0%,#15244f_40%,#0e1b42_70%,#09122f_100%)]',
        ambient:
            'linear-gradient(145deg, rgba(160,185,220,0.1) 0%, transparent 40%), radial-gradient(ellipse 65% 50% at 82% 10%, rgba(255,255,255,0.08), transparent 50%), radial-gradient(ellipse 50% 40% at 8% 90%, rgba(0,0,0,0.4), transparent 55%)',
    },
    ice: {
        panel: 'bg-[linear-gradient(155deg,#091230_0%,#111d45_45%,#0a1538_100%)]',
        ambient:
            'radial-gradient(ellipse 75% 50% at 50% 0%, rgba(200,215,240,0.1), transparent 55%)',
    },
} as const;

export default function KarlaImageText({
    imageSrc,
    imageAlt,
    eyebrow,
    title,
    body,
    points,
    imageLeft = true,
    tone = 'frost',
}: Props) {
    const textDir = useTextDirection();
    const c = TONE[tone];

    return (
        <section className="bg-white py-4 md:py-8">
            <div className="container mx-auto px-3 sm:px-4">
                <div
                    className={`relative isolate overflow-hidden rounded-[1.75rem] py-14 shadow-[0_20px_50px_rgba(0,5,82,0.22)] md:rounded-[2.5rem] md:py-20 lg:py-24 ${c.panel}`}
                >
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0"
                        style={{ backgroundImage: c.ambient }}
                    />
                    {/* İnce metalik kenar parıltısı */}
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/10"
                    />

                    <div className="container relative z-[1] mx-auto max-w-6xl px-5 md:px-8">
                        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-8 lg:gap-12">
                            <motion.div
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-10%' }}
                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                className={`relative md:col-span-7 ${
                                    imageLeft ? 'md:order-1' : 'md:order-2'
                                }`}
                            >
                                <div className="relative aspect-[5/4] overflow-hidden rounded-[1.25rem] shadow-[0_22px_55px_rgba(0,0,0,0.45)] md:aspect-[16/11] md:rounded-[1.75rem]">
                                    <Image
                                        src={imageSrc}
                                        alt={imageAlt}
                                        fill
                                        className="object-cover transition-transform duration-[1.4s] ease-out will-change-transform hover:scale-[1.03]"
                                        sizes="(max-width: 768px) 100vw, 640px"
                                    />
                                </div>
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.9, delay: 0.25 }}
                                    className={`mt-5 h-px origin-left bg-white/25 ${
                                        imageLeft ? '' : 'md:origin-right'
                                    }`}
                                />
                            </motion.div>

                            <motion.div
                                dir={textDir}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-10%' }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.08,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className={`md:col-span-5 ${imageLeft ? 'md:order-2' : 'md:order-1'}`}
                            >
                                <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-white/50">
                                    {eyebrow}
                                </p>
                                <h2 className="text-[clamp(1.75rem,4vw,2.65rem)] font-black leading-[1.08] tracking-tight text-white">
                                    {title}
                                </h2>
                                <p className="mt-5 text-base leading-relaxed text-white/75 md:text-lg">
                                    {body}
                                </p>

                                {points && points.length > 0 && (
                                    <ul className="mt-8 flex flex-col gap-2.5">
                                        {points.map((point, i) => (
                                            <motion.li
                                                key={point}
                                                initial={{
                                                    opacity: 0,
                                                    x: imageLeft ? 12 : -12,
                                                }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    delay: 0.2 + i * 0.08,
                                                    duration: 0.45,
                                                }}
                                                className="rounded-r-lg border-l-2 border-white/35 bg-white/[0.07] py-2.5 pl-4 pr-3 text-sm font-medium tracking-wide text-white/90 md:text-[15px]"
                                            >
                                                {point}
                                            </motion.li>
                                        ))}
                                    </ul>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
