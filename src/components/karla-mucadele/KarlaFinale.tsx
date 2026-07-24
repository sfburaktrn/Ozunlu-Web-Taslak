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
 * beyaz ray + koyu metalik lacivert kutu
 */
export default function KarlaFinale() {
    const t = useTranslations('karlaMucadele.finale');
    const textDir = useTextDirection();

    const pillars = [t('pillars.0'), t('pillars.1'), t('pillars.2')];

    return (
        <section id="karla-finale" className="relative bg-white py-4 md:py-8">
            <div className="container mx-auto px-3 sm:px-4">
                <div className="relative isolate overflow-hidden rounded-[1.75rem] bg-[linear-gradient(155deg,#0a1436_0%,#142148_42%,#0c183c_78%,#08112e_100%)] py-14 shadow-[0_20px_50px_rgba(0,5,82,0.22)] md:rounded-[2.5rem] md:py-20 lg:py-24">
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,rgba(180,200,230,0.1)_0%,transparent_40%),radial-gradient(ellipse_90%_60%_at_80%_15%,rgba(255,255,255,0.08),transparent_55%),radial-gradient(ellipse_50%_40%_at_10%_90%,rgba(0,0,0,0.35),transparent_55%)]"
                    />
                    <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/10"
                    />
                    <div
                        aria-hidden
                        className="pointer-events-none absolute -start-24 top-1/3 h-[420px] w-[420px] rounded-full bg-white/[0.03] blur-3xl"
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
                                className="pb-4 md:pb-6 lg:pb-8"
                            >
                                <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.3em] text-white/45">
                                    {t('eyebrow')}
                                </p>

                                <h2 className="max-w-2xl font-[Georgia,'Times_New_Roman',serif] text-[clamp(2.75rem,9vw,5.5rem)] font-medium italic leading-[0.98] tracking-tight text-white">
                                    <span className="block text-white/40">{t('line1')}</span>
                                    <span className="mt-1 block">{t('line2')}</span>
                                </h2>

                                <p className="mt-7 max-w-md text-base leading-relaxed text-white/70 md:text-lg">
                                    {t('subtitle')}
                                </p>

                                <ul className="mt-10 flex flex-wrap items-center gap-x-0 gap-y-3">
                                    {pillars.map((label, i) => (
                                        <li key={label} className="flex items-center">
                                            {i > 0 && (
                                                <span
                                                    aria-hidden
                                                    className="mx-4 h-3 w-px bg-white/25 sm:mx-5"
                                                />
                                            )}
                                            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/70 sm:text-xs">
                                                {label}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/iletisim"
                                    className="group mt-12 inline-flex items-center gap-2 border-b-2 border-white pb-1.5 text-base font-bold text-white transition-opacity hover:opacity-70"
                                >
                                    {t('cta')}
                                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 icon-directional" />
                                </Link>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 1,
                                    delay: 0.1,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="relative mx-auto w-full max-w-lg lg:max-w-none lg:justify-self-end"
                            >
                                <div className="relative aspect-[5/4] w-full lg:aspect-auto lg:h-[min(52vh,460px)]">
                                    <Image
                                        src={TRUCK}
                                        alt={t('truckAlt')}
                                        fill
                                        className="object-contain object-bottom drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
                                        sizes="(max-width: 1024px) 90vw, 45vw"
                                        priority={false}
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
