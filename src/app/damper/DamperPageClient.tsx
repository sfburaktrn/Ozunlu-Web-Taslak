'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import ProposalForm from '@/components/proposal/ProposalForm';
import HardoxInline from '@/components/common/HardoxInline';
import { heroRichTextHandlers } from '@/i18n/richText';

interface ReadyProduct {
    id: string;
    name: string;
    code: string;
    image: string;
    description: React.ReactNode;
    shortFeatures: string[];
    detailedInfo: {
        title: string;
        content: string;
    }[];
}

const PRODUCT_KEYS = ['d24', 'd30', 'd21'] as const;

const PRODUCT_META: Record<
    (typeof PRODUCT_KEYS)[number],
    { id: string; code: string; image: string; detailKeys: string[] }
> = {
    d24: {
        id: 'd1',
        code: 'ÖZ-D24',
        image: '/products/new-product-damper-1.png',
        detailKeys: ['hardox', 'sasi', 'bosaltim', 'verimlilik'],
    },
    d30: {
        id: 'd2',
        code: 'ÖZ-D30',
        image: '/products/new-product-damper-2.png',
        detailKeys: ['kapasite', 'dayanim', 'donanim', 'uyumluluk'],
    },
    d21: {
        id: 'd3',
        code: 'ÖZ-D21',
        image: '/products/new-product-damper-3.png',
        detailKeys: ['kullanim', 'agirlik', 'maliyet', 'performans'],
    },
};

interface ProductModalProps {
    product: ReadyProduct | null;
    isOpen: boolean;
    onClose: () => void;
    onSelect: (product: ReadyProduct) => void;
    tCommon: ReturnType<typeof useTranslations<'common'>>;
}

function ProductModal({ product, isOpen, onClose, onSelect, tCommon }: ProductModalProps) {
    if (!product || !isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 h-screen w-screen overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 30 }}
                        transition={{ type: 'spring', duration: 0.5 }}
                        className="relative bg-white w-full max-w-6xl rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-50 w-10 h-10 bg-white text-black hover:bg-black hover:text-white rounded-full flex items-center justify-center transition-all shadow-md border border-gray-100"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        <div className="w-full md:w-5/12 relative h-[250px] md:h-auto bg-gray-100 shrink-0">
                            <Image src={product.image} alt={product.name} fill className="object-cover" />
                            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg">
                                <span className="text-primary font-black text-base tracking-wider">{product.code}</span>
                            </div>
                        </div>

                        <div className="w-full md:w-7/12 p-6 md:p-8 lg:p-10 flex flex-col h-full overflow-hidden">
                            <div className="shrink-0">
                                <h3 className="text-3xl md:text-4xl font-black text-ozunlu-950 mb-3 leading-tight">
                                    {product.name}
                                </h3>
                                <p className="text-gray-500 text-lg font-medium mb-6 border-l-4 border-primary pl-4 py-1 line-clamp-2 md:line-clamp-none">
                                    {product.description}
                                </p>
                            </div>

                            {product.detailedInfo.length > 0 && (
                                <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                                        {product.detailedInfo.map((info, idx) => (
                                            <div key={idx} className="group">
                                                <h4 className="font-bold text-base text-ozunlu-950 mb-1 flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                    {info.title}
                                                </h4>
                                                <p className="text-gray-600 text-sm leading-relaxed pl-3.5 border-l border-gray-100 group-hover:border-primary/30 transition-colors">
                                                    {info.content}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="pt-6 mt-4 border-t border-gray-100 shrink-0">
                                <button
                                    onClick={() => onSelect(product)}
                                    className="w-full py-4 bg-ozunlu-950 text-white rounded-xl font-bold text-lg hover:bg-primary transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-primary/30 transform hover:-translate-y-0.5"
                                >
                                    {tCommon('cta.hemenTeklifAl')} <ArrowRight size={20} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

export default function DamperPageClient() {
    const t = useTranslations('damper');
    const tCommon = useTranslations('common');
    const [selectedProduct, setSelectedProduct] = React.useState<ReadyProduct | null>(null);
    const [detailProduct, setDetailProduct] = React.useState<ReadyProduct | null>(null);

    const products = React.useMemo(
        () =>
            PRODUCT_KEYS.map((key) => {
                const meta = PRODUCT_META[key];
                const prefix = `items.${key}`;

                return {
                    id: meta.id,
                    code: meta.code,
                    image: meta.image,
                    name: t(`${prefix}.name`),
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
                    shortFeatures: t.raw(`${prefix}.features`) as string[],
                    detailedInfo: meta.detailKeys.map((detailKey) => ({
                        title: t(`${prefix}.details.${detailKey}.title`),
                        content: t(`${prefix}.details.${detailKey}.content`),
                    })),
                };
            }),
        [t]
    );

    const handleProductSelect = (product: ReadyProduct) => {
        setSelectedProduct(product);
        setDetailProduct(null);
        setTimeout(() => {
            const formElement = document.getElementById('teklif-formu');
            if (formElement) formElement.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const handleClearSelection = () => {
        setSelectedProduct(null);
    };

    return (
        <main className="min-h-screen bg-white pt-[50px] pb-12 md:pt-[60px] md:pb-24 px-4 sm:px-6">
            {/* HERO */}
            <section className="relative w-full h-[600px] md:h-[700px] rounded-[2.5rem] overflow-hidden mb-12 group mx-auto max-w-full shadow-2xl">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/damper-hero.png"
                        alt={t('hero.imageAlt')}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        priority
                    />
                </div>

                <div className="relative h-full flex flex-col justify-end md:justify-center items-start px-6 pb-32 md:pb-6 md:px-16 lg:px-24">
                    <div className="absolute top-32 left-6 md:hidden z-0 pointer-events-none select-none">
                        <span className="text-6xl font-black text-white/5 leading-none tracking-tighter whitespace-nowrap">
                            ÖZÜNLÜ
                        </span>
                    </div>

                    <div className="max-w-3xl relative text-left z-10 w-full">
                        <div className="hidden md:block absolute -top-32 -left-10 z-0 pointer-events-none select-none">
                            <span className="md:text-[12rem] font-black text-white/5 leading-none tracking-tighter whitespace-nowrap">
                                ÖZÜNLÜ
                            </span>
                        </div>

                        <motion.h1
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="relative z-10 text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-[0.95] tracking-tight"
                        >
                            {t('hero.titleLine1')} <br />
                            <span className="text-[#000552]">{t('hero.titleLine2')}</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-sm md:text-xl text-gray-300 mb-8 leading-relaxed mr-auto max-w-2xl"
                        >
                            {t.rich('hero.description', heroRichTextHandlers)}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4 justify-start"
                        >
                            <a
                                href="#teklif-formu"
                                onClick={() => setSelectedProduct(null)}
                                className="inline-flex items-center justify-center gap-2 bg-[#000552] hover:bg-[#000552]/90 text-white px-8 py-4 text-base rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-primary/20"
                            >
                                {tCommon('cta.teklifAlin')}
                                <ArrowRight size={20} className="icon-directional" />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* PRODUCTS */}
            <section className="w-full max-w-[1600px] mx-auto mb-12 px-4 sm:px-0">
                <div className="text-center mb-16">
                    <span className="inline-block py-2 px-4 rounded-full bg-ozunlu-50 text-primary text-xs font-bold tracking-widest uppercase mb-4">
                        {tCommon('labels.modellerimiz')}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-ozunlu-950">{t('products.title')}</h2>
                    <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">{t('products.subtitle')}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group bg-[#F5F5F7] hover:bg-white rounded-[2rem] p-4 pb-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer flex flex-col h-full border border-transparent hover:border-gray-100"
                            onClick={() => setDetailProduct(product)}
                        >
                            <div className="relative w-full aspect-[3/2] rounded-[1.5rem] overflow-hidden mb-4 bg-white shadow-sm">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-ozunlu-950 shadow-sm">
                                    {product.code}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            <div className="px-2 flex-1 flex flex-col">
                                <h3 className="text-xl font-black text-ozunlu-950 mb-2 group-hover:text-primary transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-gray-500 mb-6 line-clamp-3 text-xs font-medium leading-relaxed">
                                    {product.description}
                                </p>

                                <div className="mb-6 flex-grow">
                                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">{tCommon('labels.oneCikanlar')}</h4>
                                    <ul className="space-y-2">
                                        {product.shortFeatures.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2 text-xs text-gray-600 font-bold">
                                                <div className="w-1 h-1 rounded-full bg-primary" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-col gap-2 mt-auto">
                                    <button className="w-full py-3 bg-white border-2 border-gray-100 text-ozunlu-950 font-bold text-sm rounded-xl flex items-center justify-center gap-2 group-hover:border-primary/20 group-hover:bg-primary/5 group-hover:text-primary transition-all">
                                        {tCommon('cta.incele')}
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleProductSelect(product);
                                        }}
                                        className="w-full py-3 bg-ozunlu-950 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/30 transition-all transform group-hover:-translate-y-1"
                                    >
                                        {tCommon('cta.teklifAl')} <ArrowRight size={16} />
                                    </button>
                                </div>
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
                    className="bg-[#F5F5F7] rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row gap-12 group hover:shadow-xl transition-all duration-500"
                >
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <h3 className="text-3xl md:text-5xl font-bold text-black mb-8">
                            {t('features.titleLine1')} <br /> <span className="text-black">{t('features.titleLine2')}</span>
                        </h3>

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                                    <span className="text-xl font-bold text-black">01</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-black">{t('features.item01Title')}</h4>
                                    <p className="text-black leading-relaxed">
                                        {t.rich('features.item01Content', heroRichTextHandlers)}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                                    <span className="text-xl font-bold text-black">02</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-black">{t('features.item02Title')}</h4>
                                    <p className="text-black leading-relaxed">{t.rich('features.item02Content', heroRichTextHandlers)}</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                                    <span className="text-xl font-bold text-black">03</span>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-black">{t('features.item03Title')}</h4>
                                    <p className="text-black leading-relaxed">{t.rich('features.item03Content', heroRichTextHandlers)}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <a
                                href="#teklif-formu"
                                onClick={() => setSelectedProduct(null)}
                                className="inline-flex items-center gap-3 px-8 py-4 bg-[#000552] text-white border-2 border-[#000552] rounded-full font-bold hover:bg-[#000552]/90 hover:text-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                {tCommon('cta.teklifAlin')} <ArrowRight size={18} className="icon-directional" />
                            </a>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 min-h-[400px] relative transition-all duration-700">
                        <Image
                            src="/products/damper-feature-new.jpg"
                            alt={t('features.imageAlt')}
                            fill
                            className="object-cover rounded-[2rem]"
                        />
                    </div>
                </motion.div>
            </div>

            {/* MODAL */}
            <ProductModal
                product={detailProduct}
                isOpen={!!detailProduct}
                onClose={() => setDetailProduct(null)}
                onSelect={(product) => handleProductSelect(product)}
                tCommon={tCommon}
            />

            {/* CONFIGURATOR */}
            <ProposalForm
                initialProduct="damper"
                selectedProduct={selectedProduct}
                onClearSelection={handleClearSelection}
                configuratorTitle={t('configurator.title')}
                configuratorSubtitle={t('configurator.subtitle')}
            />
        </main>
    );
}
