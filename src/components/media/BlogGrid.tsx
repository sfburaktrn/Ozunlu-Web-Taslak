'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const articles = [
    {
        category: 'AKADEMİ',
        title: 'Damper Alırken Dikkat Edilmesi Gereken 5 Kritik Nokta',
        excerpt: 'Şasi direncinden hidrolik sistem seçimine, yatırımınızın karşılığını almak için bilmeniz gerekenler.',
        image: '/blog-1-mock.jpg',
        readTime: '5 dk okuma'
    },
    {
        category: 'TEKNOLOJİ',
        title: 'Hardox 500 Tuf: Çeliğin Evrimi',
        excerpt: 'Daha hafif, daha güçlü ve daha uzun ömürlü. Yeni nesil çelik teknolojisi taşımacılığı nasıl değiştiriyor?',
        image: '/blog-2-mock.jpg',
        readTime: '4 dk okuma'
    },
    {
        category: 'SEKTÖREL',
        title: '2026 Lojistik Trendleri ve Türkiye\'nin Rolü',
        excerpt: 'Küresel tedarik zincirindeki değişimler ve Türk damper sektörünün geleceği üzerine bir analiz.',
        image: '/blog-3-mock.jpg',
        readTime: '7 dk okuma'
    }
];

export default function BlogGrid() {
    return (
        <section className="py-24 bg-ozunlu-950">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                            ÖZÜNLÜ <span className="text-white">AKADEMİ</span>
                        </h2>
                        <p className="text-gray-400">Sektöre yön veren bilgi ve analizler.</p>
                    </div>

                    <button className="hidden md:flex items-center gap-2 text-white border border-white/20 px-6 py-3 rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all font-bold tracking-wider">
                        Tüm Yazıları Gör
                    </button>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-[16/10] bg-ozunlu-900 rounded-xl overflow-hidden mb-6 border border-white/5 group-hover:border-primary/50 transition-colors">
                                {/* Image Placeholder */}
                                <div className="absolute inset-0 bg-gray-800 group-hover:scale-105 transition-transform duration-700" />

                                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded border border-white/10">
                                    {article.category}
                                </div>
                            </div>

                            <div className="flex items-center justify-between text-xs text-gray-400 font-bold mb-3 uppercase tracking-wider">
                                <span>{article.readTime}</span>
                                <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors leading-tight">
                                {article.title}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                                {article.excerpt}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
