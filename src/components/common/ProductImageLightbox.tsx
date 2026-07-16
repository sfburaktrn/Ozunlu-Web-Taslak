'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import ImageLoupe from '@/components/common/ImageLoupe';

export default function ProductImageLightbox({
    image,
    onClose,
}: {
    image: { src: string; alt: string } | null;
    onClose: () => void;
}) {
    return (
        <AnimatePresence>
            {image && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-6 md:p-10">
                    <motion.button
                        type="button"
                        aria-label="Close"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        className="relative z-10 w-full max-w-3xl max-h-[70vh] rounded-2xl overflow-hidden shadow-2xl bg-[#111] border border-white/10"
                    >
                        <ImageLoupe
                            src={image.src}
                            alt={image.alt}
                            className="w-full aspect-[16/10] max-h-[70vh] bg-[#111]"
                            imageClassName="object-contain p-3"
                            sizes="(max-width: 768px) 100vw, 768px"
                            priority
                            loupeSize={220}
                            loupeZoom={3.8}
                        />
                        <button
                            type="button"
                            onClick={onClose}
                            className="absolute top-3 right-3 z-40 w-9 h-9 rounded-full bg-white text-black flex items-center justify-center shadow-md hover:bg-black hover:text-white transition-colors"
                        >
                            <X size={18} />
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
