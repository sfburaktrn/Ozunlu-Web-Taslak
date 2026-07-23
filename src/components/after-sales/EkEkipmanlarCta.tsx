'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function EkEkipmanlarCta() {
    const t = useTranslations('ekEkipmanlar');
    const tCommon = useTranslations('common');

    return (
        <section id="contact" className="mx-auto mb-16 max-w-[1600px] md:mb-24">
            {/* Mobile: stacked. Tablet+: overlay */}
            <div className="layout-fixed relative overflow-hidden rounded-[1.75rem] shadow-2xl md:aspect-[5/4] md:rounded-[2.5rem] lg:hidden">
                <div className="relative aspect-[16/11] sm:aspect-[16/10] md:absolute md:inset-0 md:aspect-auto">
                    <Image
                        src="/images/ozunlu-yedek-parca-banner.webp"
                        alt={t('cta.title')}
                        fill
                        className="object-cover object-[95%_40%] sm:object-[72%_38%] md:object-[95%_38%]"
                        sizes="100vw"
                    />
                    <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-b from-black/50 via-transparent to-black/45 md:block" />
                </div>

                <div className="relative z-10 flex flex-col gap-5 bg-[#0c0c0e] px-5 py-6 text-left sm:px-8 md:absolute md:inset-0 md:gap-0 md:justify-between md:bg-transparent md:px-12 md:pb-10 md:pt-8">
                    <div className="max-w-[26rem] md:max-w-[22rem]">
                        <span className="mb-4 inline-flex w-fit rounded-full border border-white/25 bg-black/35 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
                            {t('hero.badge')}
                        </span>
                        <h2 className="mb-2 text-3xl font-bold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)] md:mb-1.5 md:text-[2.15rem]">
                            {t('cta.title')}
                        </h2>
                        <p className="text-sm leading-relaxed text-gray-300 sm:text-base md:text-[0.95rem] md:leading-snug md:text-white/90 md:drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
                            {t('cta.description')}
                        </p>
                    </div>
                    <div className="self-start">
                        <Link
                            href="/iletisim"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-base font-bold text-[#000552] shadow-lg transition-all hover:-translate-y-1 hover:bg-white/95 hover:shadow-xl sm:w-auto sm:px-8"
                        >
                            {tCommon('cta.iletisimeGecin')}
                            <ArrowRight className="h-5 w-5 rtl:rotate-180" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="relative hidden min-h-[380px] overflow-hidden rounded-[2.5rem] shadow-2xl lg:block">
                <Image
                    src="/images/ozunlu-yedek-parca-banner.webp"
                    alt={t('cta.title')}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1600px) 100vw, 1600px"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/55 to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15" />

                <div className="relative z-10 flex h-full max-w-[30rem] flex-col justify-center px-16 py-20 xl:max-w-[36rem]">
                    <span className="mb-5 inline-flex w-fit rounded-full border border-white/25 bg-black/35 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
                        {t('hero.badge')}
                    </span>
                    <h2 className="mb-4 text-4xl font-bold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)] xl:text-5xl">
                        {t('cta.title')}
                    </h2>
                    <p className="mb-8 max-w-xl text-xl leading-relaxed text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
                        {t('cta.description')}
                    </p>
                    <div>
                        <Link
                            href="/iletisim"
                            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-bold text-[#000552] shadow-lg transition-all hover:-translate-y-1 hover:bg-white/95 hover:shadow-xl"
                        >
                            {tCommon('cta.iletisimeGecin')}
                            <ArrowRight className="h-5 w-5 rtl:rotate-180" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
