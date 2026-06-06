'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Check } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { heroRichTextHandlers } from '@/i18n/richText';
import { useTextDirection } from '@/i18n/useTextDirection';

// Correct image paths mapped to the public/products directory
const images = [
    '/products/product-new-1.jpg',
    '/products/why-choose-new.jpg',
    '/products/product-new-2.jpg',
];

export default function WhyChooseUsSection() {
    const t = useTranslations('home.whyChooseUs');
    const textDir = useTextDirection();
    const featureKeys = ['0', '1', '2', '3', '4', '5', '6'] as const;
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % images.length);
    };

    const getCardStyle = (index: number) => {
        // Calculate position relative to active card
        const offset = (index - activeIndex + images.length) % images.length;

        if (offset === 0) {
            // Front Card
            return {
                zIndex: 30,
                scale: 1,
                rotate: 0,
                x: 0,
                y: 0,
                opacity: 1,
                filter: 'brightness(1)'
            };
        } else if (offset === 1) {
            // Middle Card (Behind Front)
            return {
                zIndex: 20,
                scale: 0.9,
                rotate: 10,
                x: 60,
                y: -20,
                opacity: 0.7,
                filter: 'brightness(0.6)'
            };
        } else {
            // Back Card (Furthest Back)
            return {
                zIndex: 10,
                scale: 0.8,
                rotate: 20,
                x: 120,
                y: -40,
                opacity: 0.4,
                filter: 'brightness(0.4)'
            };
        }
    };

    return (
        <section className="bg-white py-8">
            <div className="container mx-auto px-4">
                <div className="relative bg-[#f5f5f7] rounded-[2.5rem] py-24 overflow-hidden isolate shadow-sm">
                    {/* Background Texture */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-200 via-transparent to-transparent" />
                        <div className="absolute top-0 right-0 w-full h-full" style={{
                            backgroundImage: 'radial-gradient(#000552 0.5px, transparent 0.5px)',
                            backgroundSize: '40px 40px',
                            maskImage: 'linear-gradient(to bottom left, black, transparent)'
                        }} />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 items-center layout-fixed">

                            {/* Content - Features List */}
                            <div className="order-1 flex flex-col justify-center" dir={textDir}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="mb-10 text-center lg:text-left"
                                >
                                    <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
                                        {t('eyebrow')}
                                    </span>
                                    <h2 className="text-4xl md:text-5xl font-black text-black mb-6 leading-tight">
                                        {t('title')}
                                    </h2>
                                </motion.div>

                                <div className="space-y-4">
                                    {featureKeys.map((key, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.08 }}
                                            className="flex items-start gap-4 group justify-start"
                                        >
                                            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 group-hover:bg-primary transition-colors duration-300">
                                                <Check size={15} className="text-primary group-hover:text-white" />
                                            </div>
                                            <p className="text-gray-800 group-hover:text-primary transition-colors duration-300 text-base md:text-lg leading-snug text-left">
                                                {t.rich(`features.${key}`, {
                                                    ...heroRichTextHandlers,
                                                    hardox: heroRichTextHandlers.hardox,
                                                })}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Interactive Stacked Images */}
                            <div className="order-2 relative h-[450px] lg:h-[700px] w-full flex items-center justify-center layout-fixed">
                                <div
                                    className="relative w-[340px] h-[240px] lg:w-[750px] lg:h-[500px] cursor-pointer"
                                    onClick={handleNext}
                                >
                                    {images.map((img, index) => {
                                        const style = getCardStyle(index);
                                        return (
                                            <motion.div
                                                key={index}
                                                animate={style}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 260,
                                                    damping: 20
                                                }}
                                                className="absolute inset-0 rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl bg-ozunlu-900"
                                            >
                                                <Image
                                                    src={img}
                                                    alt={`Why Choose Us ${index + 1}`}
                                                    fill
                                                    className="object-cover"
                                                />

                                                {/* Label only visible on front card */}
                                                <motion.div
                                                    className="absolute bottom-6 left-6 right-6 z-40"
                                                    animate={{ opacity: style.zIndex === 30 ? 1 : 0 }}
                                                >
                                                    <div className="bg-white/90 backdrop-blur-md border border-white/20 rounded-xl p-4">
                                                        <p className="text-[#000080] font-bold text-center text-sm lg:text-base">{t('cardLabel')}</p>
                                                    </div>
                                                </motion.div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
