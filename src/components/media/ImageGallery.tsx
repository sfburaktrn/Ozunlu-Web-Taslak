'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { X } from 'lucide-react';
import { useTranslations } from 'next-intl';

const galleryImages = Array.from({ length: 10 }, (_, i) => `/products/gallery-${i + 1}.jpg`);

export default function ImageGallery() {
    const t = useTranslations('mediaPage.gallery');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section className="py-24 bg-ozunlu-950">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter leading-tight">
                        {t('title')}{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
                            {t('titleHighlight')}
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">{t('description')}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {galleryImages.map((src, index) => (
                        <motion.div
                            key={src}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl bg-ozunlu-900"
                            onClick={() => setSelectedImage(src)}
                        >
                            <Image
                                src={src}
                                alt={t('imageAlt', { n: index + 1 })}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4" onClick={() => setSelectedImage(null)}>
                    <button
                        className="absolute top-8 end-8 text-white hover:text-primary transition-colors"
                        onClick={() => setSelectedImage(null)}
                        aria-label={t('detailAlt')}
                    >
                        <X size={40} />
                    </button>
                    <div className="relative h-[80vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
                        <Image src={selectedImage} alt={t('detailAlt')} fill className="object-contain" />
                    </div>
                </div>
            )}
        </section>
    );
}
