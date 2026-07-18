'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useTextDirection } from '@/i18n/useTextDirection';

export default function ContactCtaSection() {
    const t = useTranslations('home.contactCta');
    const tCommon = useTranslations('common');
    const textDir = useTextDirection();

    return (
        <section className="bg-white py-4 md:py-8">
            <div className="container mx-auto px-3 sm:px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="relative rounded-[1.75rem] md:rounded-[2.5rem] overflow-hidden min-h-[420px] md:min-h-[380px] shadow-2xl layout-fixed"
                >
                    <Image
                        src="/images/ozunlu-mavi-cekici-sari-damperli-yari-romork-banner.webp"
                        alt={t('imageAlt')}
                        fill
                        className="object-cover object-[70%_center] md:object-center"
                        sizes="(max-width: 1536px) 100vw, 1536px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/15 md:bg-gradient-to-r md:from-black/90 md:via-black/55 md:to-black/10" />

                    <div dir={textDir} className="relative z-10 flex h-full min-h-[420px] md:min-h-[380px] flex-col justify-end md:justify-center px-5 py-10 sm:px-8 md:px-16 md:py-16 max-w-3xl text-left">
                        <span className="inline-flex w-fit mb-5 rounded-full border border-white/25 bg-black/35 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
                            {t('badge')}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]">
                            {t('title')}
                        </h2>
                        <p className="text-sm sm:text-base md:text-xl text-white/90 mb-7 md:mb-8 max-w-xl leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
                            {t('description')}
                        </p>
                        <div>
                            <Link
                                href="/iletisim"
                                className="inline-flex w-full sm:w-auto justify-center items-center gap-2 bg-white text-[#000552] hover:bg-white/95 px-6 sm:px-8 py-4 rounded-xl font-bold text-base md:text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                {tCommon('cta.iletisimeGecin')}
                                <ArrowRight className="w-5 h-5 icon-directional" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
