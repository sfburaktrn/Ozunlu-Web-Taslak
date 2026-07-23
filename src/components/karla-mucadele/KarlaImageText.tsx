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
    /** Karın görünsün diye daha koyu / aydınlık ton */
    tone?: 'dusk' | 'steel' | 'night';
};

const TONE = {
    dusk: {
        section: 'bg-[linear-gradient(165deg,#1a2744_0%,#243556_42%,#1e2d4a_100%)]',
        vignette:
            'radial-gradient(ellipse 90% 70% at 20% 40%, rgba(255,255,255,0.06), transparent 55%), radial-gradient(ellipse 70% 60% at 90% 80%, rgba(0,0,0,0.35), transparent 50%)',
        eyebrow: 'text-white/55',
        title: 'text-white',
        body: 'text-white/75',
        point: 'border-white/15 bg-white/8 text-white/90',
        rule: 'bg-white/25',
    },
    steel: {
        section: 'bg-[linear-gradient(165deg,#2a3348_0%,#343f56_45%,#252e42_100%)]',
        vignette:
            'radial-gradient(ellipse 80% 60% at 80% 30%, rgba(255,255,255,0.05), transparent 50%), radial-gradient(ellipse 60% 50% at 10% 90%, rgba(0,0,0,0.4), transparent 55%)',
        eyebrow: 'text-white/55',
        title: 'text-white',
        body: 'text-white/75',
        point: 'border-white/15 bg-white/8 text-white/90',
        rule: 'bg-white/25',
    },
    night: {
        section: 'bg-[linear-gradient(165deg,#0f1729_0%,#162038_40%,#121a2e_100%)]',
        vignette:
            'radial-gradient(ellipse 85% 65% at 50% 0%, rgba(255,255,255,0.07), transparent 55%), radial-gradient(ellipse 50% 40% at 50% 100%, rgba(0,0,0,0.45), transparent 60%)',
        eyebrow: 'text-white/55',
        title: 'text-white',
        body: 'text-white/75',
        point: 'border-white/15 bg-white/8 text-white/90',
        rule: 'bg-white/25',
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
    tone = 'dusk',
}: Props) {
    const textDir = useTextDirection();
    const c = TONE[tone];

    return (
        <section className={`relative overflow-hidden py-16 md:py-24 ${c.section}`}>
            {/* Atmosfer + karın okunması için gölge / vignette */}
            <div aria-hidden className="pointer-events-none absolute inset-0" style={{ backgroundImage: c.vignette }} />
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.35)]"
            />

            <div className="container relative z-[1] mx-auto max-w-6xl px-5 md:px-8">
                <div
                    className={`grid items-center gap-10 md:grid-cols-12 md:gap-8 lg:gap-12 ${
                        imageLeft ? '' : ''
                    }`}
                >
                    {/* Görsel */}
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-12%' }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className={`relative md:col-span-7 ${
                            imageLeft ? 'md:order-1' : 'md:order-2'
                        }`}
                    >
                        <div className="relative aspect-[5/4] overflow-hidden rounded-[1.5rem] shadow-[0_24px_60px_rgba(0,0,0,0.45)] md:aspect-[16/11] md:rounded-[2rem]">
                            <Image
                                src={imageSrc}
                                alt={imageAlt}
                                fill
                                className="object-cover transition-transform duration-[1.4s] ease-out will-change-transform hover:scale-[1.03]"
                                sizes="(max-width: 768px) 100vw, 640px"
                            />
                            <div
                                aria-hidden
                                className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15 ${
                                    imageLeft
                                        ? 'md:bg-gradient-to-r md:from-black/30 md:via-transparent md:to-transparent'
                                        : 'md:bg-gradient-to-l md:from-black/30 md:via-transparent md:to-transparent'
                                }`}
                            />
                        </div>

                        {/* Dekoratif ince çizgi */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, delay: 0.25 }}
                            className={`mt-5 h-px origin-left ${c.rule} ${imageLeft ? '' : 'md:origin-right'}`}
                        />
                    </motion.div>

                    {/* Metin */}
                    <motion.div
                        dir={textDir}
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-12%' }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className={`md:col-span-5 ${imageLeft ? 'md:order-2' : 'md:order-1'}`}
                    >
                        <p
                            className={`mb-4 text-[11px] font-bold uppercase tracking-[0.28em] ${c.eyebrow}`}
                        >
                            {eyebrow}
                        </p>
                        <h2
                            className={`text-[clamp(1.75rem,4vw,2.65rem)] font-black leading-[1.08] tracking-tight ${c.title}`}
                        >
                            {title}
                        </h2>
                        <p className={`mt-5 text-base leading-relaxed md:text-lg ${c.body}`}>{body}</p>

                        {points && points.length > 0 && (
                            <ul className="mt-8 flex flex-col gap-2.5">
                                {points.map((point, i) => (
                                    <motion.li
                                        key={point}
                                        initial={{ opacity: 0, x: imageLeft ? 12 : -12 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + i * 0.08, duration: 0.45 }}
                                        className={`border-l-2 border-white/35 pl-4 text-sm font-medium tracking-wide md:text-[15px] ${c.point} rounded-r-lg py-2.5 pr-3`}
                                    >
                                        {point}
                                    </motion.li>
                                ))}
                            </ul>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
