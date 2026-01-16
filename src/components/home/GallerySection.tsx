'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import Image from 'next/image';

// Placeholder data - using existing images multiple times to fill 10 slots
const galleryImages = [
    { id: 1, src: '/products/gallery-1.jpg?v=2', alt: 'Özünlü Damper Galeri 1' },
    { id: 2, src: '/products/gallery-2.jpg?v=2', alt: 'Özünlü Damper Galeri 2' },
    { id: 3, src: '/products/gallery-3.jpg?v=2', alt: 'Özünlü Damper Galeri 3' },
    { id: 4, src: '/products/gallery-4.jpg?v=2', alt: 'Özünlü Damper Galeri 4' },
    { id: 5, src: '/products/gallery-5.jpg?v=2', alt: 'Özünlü Damper Galeri 5' },
    { id: 6, src: '/products/gallery-6.jpg?v=2', alt: 'Özünlü Damper Galeri 6' },
    { id: 7, src: '/products/gallery-7.jpg?v=2', alt: 'Özünlü Damper Galeri 7' },
    { id: 8, src: '/products/gallery-8.jpg?v=2', alt: 'Özünlü Damper Galeri 8' },
    { id: 9, src: '/products/gallery-9.jpg?v=2', alt: 'Özünlü Damper Galeri 9' },
    { id: 10, src: '/products/gallery-10.jpg?v=2', alt: 'Özünlü Damper Galeri 10' },
];

export default function GallerySection() {
    const [selectedImageId, setSelectedImageId] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const openLightbox = (id: number) => setSelectedImageId(id);
    const closeLightbox = () => setSelectedImageId(null);

    const selectedImageIndex = galleryImages.findIndex(img => img.id === selectedImageId);
    const selectedImage = galleryImages[selectedImageIndex];

    const sliderRef = useRef<HTMLDivElement>(null);
    const isDown = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    const isDragging = useRef(false);

    const startDragging = (e: React.MouseEvent) => {
        isDown.current = true;
        isDragging.current = false;
        if (sliderRef.current) {
            startX.current = e.pageX - sliderRef.current.offsetLeft;
            scrollLeft.current = sliderRef.current.scrollLeft;
        }
    };

    const stopDragging = () => {
        isDown.current = false;
    };

    const onDrag = (e: React.MouseEvent) => {
        if (!isDown.current || !sliderRef.current) return;

        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX.current) * 2; // Scroll speed

        if (Math.abs(walk) > 5) {
            isDragging.current = true;
        }

        sliderRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const handleImageClick = (e: React.MouseEvent, id: number) => {
        // Only open if we haven't dragged significantly
        if (!isDragging.current) {
            openLightbox(id);
        }
    };

    const navigateLightbox = (direction: 'next' | 'prev', e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImageIndex === -1) return;

        let newIndex = direction === 'next' ? selectedImageIndex + 1 : selectedImageIndex - 1;

        // Loop functionality
        if (newIndex >= galleryImages.length) newIndex = 0;
        if (newIndex < 0) newIndex = galleryImages.length - 1;

        setSelectedImageId(galleryImages[newIndex].id);
    };

    return (
        <section className="bg-white py-8">
            <div className="container mx-auto px-4">
                <div className="relative bg-[#f5f5f7] rounded-[2.5rem] py-24 overflow-hidden isolate shadow-sm">
                    {/* Background Texture */}
                    <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-gray-200 to-transparent" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        {/* Header */}
                        <div className="text-center mb-12">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-primary font-bold tracking-[0.2em] text-sm uppercase mb-4 block"
                            >
                                MEDYA & GALERİ
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl md:text-5xl font-black text-white"
                            >
                                DETAYLARDA <span className="text-primary">MÜKEMMELLİK</span>
                            </motion.h2>
                        </div>

                        {/* Slider Container */}
                        <div className="relative w-full overflow-x-hidden" ref={containerRef}>
                            {/* Draggable Area */}
                            <div
                                ref={sliderRef}
                                onMouseDown={startDragging}
                                onMouseLeave={stopDragging}
                                onMouseUp={stopDragging}
                                onMouseMove={onDrag}
                                className="flex overflow-x-auto gap-6 pb-8 pt-4 px-4 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing select-none"
                            >
                                {galleryImages.map((image, index) => (
                                    <motion.div
                                        key={image.id}
                                        initial={{ opacity: 0, x: 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-10%" }}
                                        transition={{ delay: index * 0.05, duration: 0.5 }}
                                        className="relative flex-shrink-0 w-[300px] h-[400px] md:w-[400px] md:h-[500px] snap-center group rounded-2xl overflow-hidden border border-gray-200 shadow-sm"
                                        onClick={(e) => handleImageClick(e, image.id)}
                                    >
                                        {/* Image */}
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                                            sizes="(max-width: 768px) 300px, 400px"
                                        />

                                        {/* Overlay Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity pointer-events-none" />

                                        {/* Hover Icon */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                            <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20">
                                                <ZoomIn className="text-white w-8 h-8" />
                                            </div>
                                        </div>

                                        {/* Image Number/Title (Optional) */}
                                        <div className="absolute bottom-4 left-4 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                                            <span className="text-white font-bold text-lg">Özünlü #{image.id}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Lightbox Modal */}
                    <AnimatePresence>
                        {selectedImage && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-[150] bg-black/95 backdrop-blur-2xl flex items-center justify-center"
                                onClick={closeLightbox}
                            >
                                {/* Close Button */}
                                <button
                                    onClick={closeLightbox}
                                    className="absolute top-4 right-4 md:top-8 md:right-8 text-white/50 hover:text-white transition-colors z-[160] p-2"
                                >
                                    <X size={40} />
                                </button>

                                {/* Navigation Buttons */}
                                <button
                                    onClick={(e) => navigateLightbox('prev', e)}
                                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[160] p-4 group"
                                >
                                    <ChevronLeft size={48} className="group-hover:-translate-x-1 transition-transform" />
                                </button>

                                <button
                                    onClick={(e) => navigateLightbox('next', e)}
                                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-[160] p-4 group"
                                >
                                    <ChevronRight size={48} className="group-hover:translate-x-1 transition-transform" />
                                </button>

                                {/* Main Image */}
                                <motion.div
                                    layoutId={`image-${selectedImage.id}`}
                                    className="relative w-[95vw] h-[80vh] md:w-[85vw] md:h-[90vh]"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Image
                                        src={selectedImage.src}
                                        alt={selectedImage.alt}
                                        fill
                                        className="object-contain"
                                        quality={100}
                                        priority
                                    />
                                </motion.div>

                                {/* Caption/Counter */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 font-mono text-sm tracking-widest">
                                    {selectedImageIndex + 1} / {galleryImages.length}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
