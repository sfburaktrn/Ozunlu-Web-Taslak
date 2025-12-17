'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const videos = [
    { title: 'Fabrika Tanıtım Filmi 2024', duration: '03:45' },
    { title: 'Hardox Kesim Teknolojisi', duration: '01:20' },
    { title: 'Damper Güvenlik Testleri', duration: '02:15' },
    { title: 'Müşteri Teslimat Töreni', duration: '01:50' },
];

export default function VideoGallery() {
    return (
        <section className="py-24 bg-ozunlu-900 border-t border-b border-white/5">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-12">
                    ÖZÜNLÜ <span className="text-white">TV</span>
                </h2>

                {/* Featured Video (Netflix Hero Style) */}
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black mb-12 group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                    {/* Use a placeholder image/div */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                        <Play className="w-20 h-20 text-white fill-white opacity-50 group-hover:scale-110 group-hover:opacity-100 transition-all" />
                    </div>

                    <div className="absolute bottom-10 left-10 right-10 z-10">
                        <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded inline-block mb-3">
                            YENİ
                        </span>
                        <h3 className="text-4xl font-bold text-white mb-2">Global Marka Yolculuğu</h3>
                        <p className="text-gray-300 max-w-xl text-lg mb-6">
                            Anadolu&apos;nun kalbinden dünyaya uzanan 45 yıllık serüvenin belgeseli.
                        </p>
                        <button className="bg-white text-black px-8 py-3 rounded font-bold hover:bg-primary transition-colors flex items-center gap-2">
                            <Play size={20} className="fill-black" />
                            Hemen İzle
                        </button>
                    </div>
                </div>

                {/* Video Strip */}
                <h4 className="text-white font-bold mb-6 text-xl">Sizin İçin Seçtiklerimiz</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {videos.map((vid, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="relative aspect-video bg-ozunlu-800 rounded-lg overflow-hidden mb-3 border border-white/5 group-hover:border-primary/50 transition-all">
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                                    <Play size={30} className="text-white fill-white" />
                                </div>
                                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] px-1 rounded font-bold">
                                    {vid.duration}
                                </div>
                            </div>
                            <h5 className="text-gray-200 font-bold group-hover:text-white transition-colors text-sm">
                                {vid.title}
                            </h5>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
