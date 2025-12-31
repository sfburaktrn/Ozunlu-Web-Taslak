'use client';

import { motion } from 'framer-motion';
import { FileText, Download, BookOpen, FileCheck } from 'lucide-react';
import Link from 'next/link';

const documents = [
    {
        id: 1,
        title: 'Damper Kullanım Kılavuzu',
        type: 'pdf',
        size: '1.4 MB',
        path: '/satis-sonrasi/Damper-Kullanma-Kilavuzu (1).pdf',
        desc: 'Damper ürün grubu için temel kullanım ve güvenlik talimatları.'
    },
    {
        id: 2,
        title: 'Dorse ve Yarı Römork Kılavuzu',
        type: 'pdf',
        size: '1.3 MB',
        path: '/satis-sonrasi/Dorse-Kullanma-Kilavuzu-.pdf',
        desc: 'Genel yarı römork ürünleri için standart kullanım kılavuzu.'
    },
    {
        id: 3,
        title: 'Genel Ürün & Bakım El Kitabı (TR/EN)',
        type: 'docx',
        size: '3.8 MB',
        path: '/satis-sonrasi/User-Manual_UM-01.docx',
        desc: 'Tüm dorse modelleri için kapsamlı bakım, garanti ve teknik detaylar. (Çift Dilli)'
    },
    {
        id: 4,
        title: 'Damper Teknik Şartnamesi (TR/EN)',
        type: 'docx',
        size: '3.8 MB',
        path: '/satis-sonrasi/User-Manual_UM-02.docx',
        desc: 'Damperli araçlar için özel teknik spesifikasyonlar ve detaylı kullanım prosedürleri. (Çift Dilli)'
    }
];

export default function DocumentLibrary() {
    return (
        <section className="py-24 bg-ozunlu-950 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        TEKNİK <span className="text-white">DOKÜMANLAR</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl text-lg">
                        Ürünlerinizden maksimum verim almanız için hazırladığımız kullanım kılavuzları ve teknik dokümanlara buradan ulaşabilirsiniz.
                        Dosyalarımız, kullanım kolaylığı için PDF ve Word formatlarında sunulmaktadır.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {documents.map((doc, index) => (
                        <motion.div
                            key={doc.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            {doc.type === 'pdf' ? (
                                // PDF - Book Style Look
                                <div className="relative h-full bg-white/[0.03] border border-white/10 rounded-xl p-6 hover:bg-white/[0.05] transition-all duration-300 flex flex-col group-hover:-translate-y-2">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/5 to-transparent rounded-tr-xl rounded-bl-[100px] pointer-events-none" />

                                    <div className="w-16 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-lg shadow-lg mb-6 flex items-center justify-center relative overflow-hidden">
                                        <div className="absolute inset-0 bg-black/20" />
                                        <BookOpen className="text-white relative z-10" size={32} />
                                        <div className="absolute bottom-2 right-2 text-[10px] text-white/50 font-bold">PDF</div>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                        {doc.title}
                                    </h3>
                                    <p className="text-sm text-gray-400 mb-6 flex-grow leading-relaxed">
                                        {doc.desc}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                        <span className="text-xs text-gray-500 font-mono">{doc.size}</span>
                                        <Link
                                            href={doc.path}
                                            target="_blank"
                                            className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors"
                                        >
                                            <Download size={16} />
                                            İNDİR
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                // Word/Other - Card Style
                                <div className="relative h-full bg-white/[0.02] border border-white/5 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 flex flex-col group-hover:-translate-y-2">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="p-3 bg-blue-600/20 text-blue-500 rounded-lg">
                                            <FileText size={24} />
                                        </div>
                                        <span className="text-xs font-bold text-gray-500 bg-white/5 px-2 py-1 rounded">DOCX</span>
                                    </div>

                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                        {doc.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 mb-6 flex-grow">
                                        {doc.desc}
                                    </p>

                                    <Link
                                        href={doc.path}
                                        target="_blank"
                                        className="w-full py-3 rounded-lg border border-white/10 flex items-center justify-center gap-2 text-sm font-bold text-gray-300 hover:bg-white/5 hover:text-white transition-all"
                                    >
                                        <FileCheck size={16} />
                                        Görüntüle
                                    </Link>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
