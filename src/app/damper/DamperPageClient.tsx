'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import ProposalForm from '@/components/proposal/ProposalForm';
import HardoxInline from '@/components/common/HardoxInline';
import ProductCardImage from '@/components/common/ProductCardImage';
import ProductImageLightbox from '@/components/common/ProductImageLightbox';
import HeroAccentText from '@/components/common/HeroAccentText';
import { heroRichTextHandlers } from '@/i18n/richText';
import { useTextDirection } from '@/i18n/useTextDirection';

const PRODUCT_KEYS = ['d24', 'd30', 'd21'] as const;

const DAMPER_HERO_IMAGES = [
    '/images/ozunlu-sari-hardox-damper-cozumleri-studyo.webp',
    '/images/ozunlu-turuncu-hardox-damper-cozumleri-studyo.webp',
    '/images/ozunlu-siyah-hardox-damper-cozumleri-studyo.webp',
] as const;

const PRODUCT_META: Record<(typeof PRODUCT_KEYS)[number], { id: string; image: string }> = {
    d24: {
        id: 'd1',
        image: '/images/ozunlu-oz-d24-sari-hardox-damper.webp',
    },
    d30: {
        id: 'd2',
        image: '/images/ozunlu-oz-d30-kirmizi-hardox-damper-studyo.webp',
    },
    d21: {
        id: 'd3',
        image: '/images/ozunlu-oz-d21-beyaz-hardox-damper.webp',
    },
};

function displayProductName(name: string) {
    return name.replace(/^ÖZ-[A-Z0-9]+\s*/i, '').trim() || name;
}

export default function DamperPageClient() {
    const t = useTranslations('damper');
    const tCommon = useTranslations('common');
    const tLabels = useTranslations('common.labels');
    const textDir = useTextDirection();
    const [heroIndex, setHeroIndex] = React.useState(0);
    const [zoomImage, setZoomImage] = React.useState<{ src: string; alt: string } | null>(null);

    React.useEffect(() => {
        const id = window.setInterval(() => {
            setHeroIndex((prev) => (prev + 1) % DAMPER_HERO_IMAGES.length);
        }, 3000);
        return () => window.clearInterval(id);
    }, []);

    React.useEffect(() => {
        if (!zoomImage) return;
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setZoomImage(null);
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [zoomImage]);

    const products = React.useMemo(
        () =>
            PRODUCT_KEYS.map((key) => {
                const meta = PRODUCT_META[key];
                const prefix = `items.${key}`;

                return {
                    id: meta.id,
                    image: meta.image,
                    name: displayProductName(t(`${prefix}.name`)),
                    description: t.rich(`${prefix}.description`, {
                        ...heroRichTextHandlers,
                        hardox: () => (
                            <HardoxInline
                                className="inline-block rounded-lg w-12 h-auto mx-0.5 align-middle"
                                width={72}
                                height={18}
                            />
                        ),
                    }),
                };
            }),
        [t]
    );

    return (
        <main className="min-h-screen bg-white pt-[50px] pb-12 md:pt-[60px] md:pb-24 px-3 sm:px-6">
            {/* HERO — mobile: image + text stacked (damper clear). Tablet+: overlay, description tight under title */}
            <section className="relative w-full rounded-[1.75rem] md:rounded-[2.5rem] overflow-hidden mb-12 group mx-auto max-w-full shadow-2xl layout-fixed md:aspect-[5/4] lg:aspect-auto lg:h-[660px]">
                <div className="relative aspect-[16/11] sm:aspect-[16/10] md:absolute md:inset-0 md:aspect-auto">
                    {DAMPER_HERO_IMAGES.map((src, index) => (
                        <Image
                            key={src}
                            src={src}
                            alt={t('hero.imageAlt')}
                            fill
                            priority={index === 0}
                            className={`object-cover object-[95%_40%] sm:object-[72%_38%] md:object-[95%_38%] lg:object-[68%_center] transition-opacity duration-700 ${
                                index === heroIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 100vw, 1400px"
                        />
                    ))}
                    <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-b from-black/50 via-transparent to-black/45 md:block lg:bg-gradient-to-r lg:from-black/85 lg:via-black/55 lg:to-black/15" />
                </div>

                <div className="relative z-10 flex flex-col gap-5 bg-[#0c0c0e] px-4 py-5 sm:px-6 sm:py-6 md:absolute md:inset-0 md:gap-0 md:justify-between md:bg-transparent md:px-8 md:pt-7 md:pb-10 lg:justify-center lg:px-10 lg:py-12">
                    <div dir={textDir} className="max-w-[33rem] md:max-w-[22rem] xl:max-w-[28rem] 2xl:max-w-[33rem] relative text-left w-full">
                        <motion.h1
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="relative z-10 text-[clamp(2rem,9vw,3.25rem)] md:text-[2.15rem] xl:text-[3.5rem] 2xl:text-[4.5rem] font-bold text-white mb-2 md:mb-1.5 leading-[0.95] tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]"
                        >
                            {t('hero.titleLine1')} <br />
                            <HeroAccentText onDark>{t('hero.titleLine2')}</HeroAccentText>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-sm sm:text-base md:text-[0.95rem] md:leading-snug xl:text-lg 2xl:text-xl leading-relaxed text-gray-300 md:text-white mr-auto max-w-[28rem] md:max-w-[22rem] 2xl:max-w-[33rem] md:drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
                        >
                            {t.rich('hero.description', heroRichTextHandlers)}
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="flex justify-start self-start lg:mt-8"
                    >
                        <a
                            href="#teklif-formu"
                            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-600 text-white px-8 py-4 text-base rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-black/40 border border-white/35"
                        >
                            {tCommon('cta.teklifAlin')}
                            <ArrowRight size={20} className="icon-directional" />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* PRODUCTS */}
            <section className="w-full max-w-[1600px] mx-auto mb-12 px-4 sm:px-0">
                <div className="text-center mb-10 md:mb-16">
                    <span className="inline-block py-2 px-4 rounded-full bg-ozunlu-50 text-primary text-xs font-bold tracking-widest uppercase mb-4">
                        {tCommon('labels.modellerimiz')}
                    </span>
                    <h2 className="text-3xl md:text-[2.75rem] font-bold tracking-tight leading-[1.1] text-ozunlu-950">{t('products.title')}</h2>
                    <p className="text-base md:text-lg text-gray-600 mt-4 max-w-2xl mx-auto">{t('products.subtitle')}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group text-left bg-[#F5F5F7] hover:bg-white rounded-[2rem] p-4 pb-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full border border-transparent hover:border-gray-100 md:last:col-span-2 md:last:w-[calc((100%-1.5rem)/2)] md:last:justify-self-center lg:last:col-span-1 lg:last:w-auto lg:last:justify-self-auto"
                        >
                            <ProductCardImage
                                src={product.image}
                                alt={product.name}
                                onOpen={() => setZoomImage({ src: product.image, alt: product.name })}
                            />

                            <div className="px-2 flex-1 flex flex-col">
                                <div className="mb-2">
                                    <Image
                                        src="/ozunlu-damper-logo.png"
                                        alt={tLabels('logoAlt')}
                                        width={96}
                                        height={28}
                                        className="h-8 w-auto object-contain object-left opacity-90"
                                    />
                                </div>
                                <p className="text-sm text-gray-600">
                                    {product.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FEATURES 01-02-03 */}
            <div className="w-full max-w-[1600px] mx-auto space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-[#F5F5F7] rounded-[1.75rem] md:rounded-[2.5rem] p-5 sm:p-8 md:p-10 lg:p-16 flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-12 group hover:shadow-xl transition-all duration-500"
                >
                    <div className="w-full lg:w-1/2 flex flex-col justify-center order-1 md:order-2 lg:order-1">
                        <h3 className="text-3xl md:text-[1.85rem] md:leading-tight lg:text-4xl xl:text-5xl font-bold text-black mb-6 md:mb-5 lg:mb-8">
                            {t('features.titleLine1')} <br /> <span className="text-ozunlu-950">{t('features.titleLine2')}</span>
                        </h3>

                        <div className="space-y-8 md:space-y-5 lg:space-y-8">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                                    <span className="text-xl md:text-base lg:text-xl font-bold text-black">01</span>
                                </div>
                                <div>
                                    <h4 className="text-xl md:text-base lg:text-xl font-bold mb-2 md:mb-1 text-black">{t('features.item01Title')}</h4>
                                    <p className="text-sm md:text-[13px] md:leading-snug lg:text-sm text-gray-700">
                                        {t.rich('features.item01Content', heroRichTextHandlers)}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                                    <span className="text-xl md:text-base lg:text-xl font-bold text-black">02</span>
                                </div>
                                <div>
                                    <h4 className="text-xl md:text-base lg:text-xl font-bold mb-2 md:mb-1 text-black">{t('features.item02Title')}</h4>
                                    <p className="text-sm md:text-[13px] md:leading-snug lg:text-sm text-gray-700">{t.rich('features.item02Content', heroRichTextHandlers)}</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                                    <span className="text-xl md:text-base lg:text-xl font-bold text-black">03</span>
                                </div>
                                <div>
                                    <h4 className="text-xl md:text-base lg:text-xl font-bold mb-2 md:mb-1 text-black">{t('features.item03Title')}</h4>
                                    <p className="text-sm md:text-[13px] md:leading-snug lg:text-sm text-gray-700">{t.rich('features.item03Content', heroRichTextHandlers)}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 md:mt-8 lg:mt-12">
                            <a
                                href="#teklif-formu"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-[#000552] text-white border-2 border-[#000552] rounded-full font-bold hover:bg-[#000552]/90 hover:text-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                {tCommon('cta.teklifAlin')} <ArrowRight size={18} className="icon-directional" />
                            </a>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 order-2 md:order-1 lg:order-2">
                        <Image
                            src="/images/ozunlu-sari-damper-yuksek-devrilme.webp"
                            alt={t('features.imageAlt')}
                            width={1536}
                            height={1024}
                            className="w-full h-auto rounded-[2rem] md:aspect-[16/11] md:object-cover md:object-[95%_center] lg:aspect-auto lg:h-auto lg:object-contain lg:object-center"
                            sizes="(max-width: 1023px) 100vw, 50vw"
                        />
                    </div>
                </motion.div>
            </div>

            {/* IMAGE ZOOM */}
            <ProductImageLightbox image={zoomImage} onClose={() => setZoomImage(null)} />

            {/* CONFIGURATOR */}
            <ProposalForm
                initialProduct="damper"
                configuratorBadge={t('configurator.badge')}
                configuratorTitle={t('configurator.title')}
                configuratorSubtitle={t('configurator.subtitle')}
            />
        </main>
    );
}
