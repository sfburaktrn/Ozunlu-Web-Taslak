'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryImages = [
    '/career-1-mock.jpg',
    '/career-2-mock.jpg',
    '/career-3-mock.jpg',
    '/career-4-mock.jpg'
];

export default function LifeAtOzunlu() {
    return (
        <section className="py-24 bg-ozunlu-950">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
                    <div className="w-full md:w-1/2 text-left">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                            BİZDE <span className="text-white">HAYAT</span>
                        </h2>
                        <div className="h-1 w-24 bg-primary mb-8" />
                        <p className="text-xl text-gray-300 font-light leading-relaxed">
                            Özünlü ailesi olarak, sadece en iyi damperleri üretmekle kalmıyor,
                            en mutlu çalışanlara sahip olmayı da hedefliyoruz. İnovasyon,
                            sürekli gelişim ve takım ruhu DNA&apos;mızda var.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        {/* Video/Image Collage Placeholder */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="aspect-square bg-ozunlu-800 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-500">
                                    <div className="w-full h-full bg-gray-700 animate-pulse" />
                                </div>
                                <div className="aspect-[4/3] bg-ozunlu-900 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-500">
                                    <div className="w-full h-full bg-gray-600 animate-pulse" />
                                </div>
                            </div>
                            <div className="space-y-4 pt-12">
                                <div className="aspect-[4/3] bg-ozunlu-900 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-500">
                                    <div className="w-full h-full bg-gray-600 animate-pulse" />
                                </div>
                                <div className="aspect-square bg-ozunlu-800 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-500">
                                    <div className="w-full h-full bg-gray-700 animate-pulse" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
