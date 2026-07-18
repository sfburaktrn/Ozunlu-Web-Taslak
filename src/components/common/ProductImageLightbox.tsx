'use client';

import { useEffect } from 'react';
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
    useEffect(() => {
        if (!image) return;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', onKeyDown);
        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [image, onClose]);

    return (
        <AnimatePresence>
            {image && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 md:p-10">
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
                        className="relative z-10 w-full max-w-3xl max-h-[min(82svh,760px)] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl bg-[#111] border border-white/10"
                    >
                        <ImageLoupe
                            src={image.src}
                            alt={image.alt}
                            className="w-full aspect-[4/3] sm:aspect-[16/10] max-h-[min(82svh,760px)] bg-[#111]"
                            imageClassName="object-contain p-3"
                            sizes="(max-width: 768px) 100vw, 768px"
                            priority
                            loupeSize={220}
                            loupeZoom={3.8}
                        />
                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="Close"
                            className="absolute top-2 right-2 sm:top-3 sm:right-3 z-40 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-md hover:bg-black hover:text-white transition-colors"
                        >
                            <X size={18} />
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
