'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useTextDirection } from '@/i18n/useTextDirection';

const TRUCK = '/images/karla-mucadele/ozunlu-karla-mucadele-kureme-araci.png';

/**
 * Tipografik manifesto kapanışı —
 * koyu foto+panel CTA’dan farklı: açık zemin, büyük yazı, ürün silüeti
 */
export default function KarlaFinale() {
    const t = useTranslations('karlaMucadele.finale');
    const textDir = useTextDirection();

    const pillars = [t('pillars.0'), t('pillars.1'), t('pillars.2')];

    return (
        <section
            id="karla-finale"
            className="relative overflow-hidden bg-[#f2f5f9] pt-20 pb-0 md:pt-28 lg:pt-32"
        >
            {/* Soğuk ambient */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_80%_20%,rgba(0,5,82,0.05),transparent_55%)]"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -start-24 top-1/3 h-[420px] w-[420px] rounded-full bg-[#000552]/[0.03] blur-3xl"
            />

            <div className="container relative z-10 mx-auto px-5 sm:px-8 lg:px-12">
                <div
                    dir={textDir}
                    className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-8"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                        className="pb-10 md:pb-16 lg:pb-24"
                    >
                        <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.3em] text-[#000552]/45">
                            {t('eyebrow')}
                        </p>

                        <h2 className="max-w-2xl font-[Georgia,'Times_New_Roman',serif] text-[clamp(2.75rem,9vw,5.5rem)] font-medium italic leading-[0.98] tracking-tight text-[#000552]">
                            <span className="block text-[#000552]/35">{t('line1')}</span>
                            <span className="mt-1 block">{t('line2')}</span>
                        </h2>

                        <p className="mt-7 max-w-md text-base leading-relaxed text-[#000552]/65 md:text-lg">
                            {t('subtitle')}
                        </p>

                        <ul className="mt-10 flex flex-wrap items-center gap-x-0 gap-y-3">
                            {pillars.map((label, i) => (
                                <li key={label} className="flex items-center">
                                    {i > 0 && (
                                        <span
                                            aria-hidden
                                            className="mx-4 h-3 w-px bg-[#000552]/20 sm:mx-5"
                                        />
                                    )}
                                    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#000552]/70 sm:text-xs">
                                        {label}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <Link
                            href="/iletisim"
                            className="group mt-12 inline-flex items-center gap-2 border-b-2 border-[#000552] pb-1.5 text-base font-bold text-[#000552] transition-opacity hover:opacity-70"
                        >
                            {t('cta')}
                            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 icon-directional" />
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="relative mx-auto w-full max-w-lg lg:max-w-none lg:justify-self-end"
                    >
                        <div className="relative aspect-[5/4] w-full lg:aspect-auto lg:h-[min(62vh,520px)]">
                            <Image
                                src={TRUCK}
                                alt={t('truckAlt')}
                                fill
                                className="object-contain object-bottom drop-shadow-[0_30px_60px_rgba(0,5,82,0.14)]"
                                sizes="(max-width: 1024px) 90vw, 45vw"
                                priority={false}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Alt zemin bandı — footer’a yumuşak geçiş */}
            <div
                aria-hidden
                className="h-10 bg-gradient-to-b from-transparent to-white md:h-14"
            />
        </section>
    );
}
