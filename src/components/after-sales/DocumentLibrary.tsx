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
        <section className="w-full max-w-[1600px] mx-auto mt-8">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#F5F5F7] rounded-[2.5rem] p-8 md:p-16"
            >
                <div className="mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">
                        TEKNİK <span className="text-black">DOKÜMANLAR</span>
                    </h2>
                    <p className="text-black/70 max-w-2xl text-lg">
                        Ürünlerinizden maksimum verim almanız için hazırladığımız kullanım kılavuzları ve teknik dokümanlara buradan ulaşabilirsiniz.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {documents.map((doc, index) => (
                        <motion.div
                            key={doc.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            {doc.type === 'pdf' ? (
                                <div className="relative h-full bg-white border border-black/5 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 flex flex-col group-hover:-translate-y-2">
                                    <div className="w-14 h-18 bg-gradient-to-br from-red-500 to-red-700 rounded-xl shadow-lg mb-6 flex items-center justify-center relative overflow-hidden">
                                        <BookOpen className="text-white relative z-10" size={28} />
                                        <div className="absolute bottom-1 right-1 text-[8px] text-white/70 font-bold">PDF</div>
                                    </div>

                                    <h3 className="text-lg font-bold text-black mb-2 group-hover:text-primary transition-colors">
                                        {doc.title}
                                    </h3>
                                    <p className="text-sm text-black/60 mb-6 flex-grow leading-relaxed">
                                        {doc.desc}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t border-black/5">
                                        <span className="text-xs text-black/40 font-mono">{doc.size}</span>
                                        <Link
                                            href={doc.path}
                                            target="_blank"
                                            className="flex items-center gap-2 text-sm font-bold text-black hover:text-primary transition-colors"
                                        >
                                            <Download size={16} />
                                            İNDİR
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                <div className="relative h-full bg-white border border-black/5 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 flex flex-col group-hover:-translate-y-2">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                                            <FileText size={24} />
                                        </div>
                                        <span className="text-xs font-bold text-black/40 bg-black/5 px-2 py-1 rounded">DOCX</span>
                                    </div>

                                    <h3 className="text-lg font-bold text-black mb-2 group-hover:text-primary transition-colors">
                                        {doc.title}
                                    </h3>
                                    <p className="text-sm text-black/60 mb-6 flex-grow">
                                        {doc.desc}
                                    </p>

                                    <Link
                                        href={doc.path}
                                        target="_blank"
                                        className="w-full py-3 rounded-xl border border-black/10 flex items-center justify-center gap-2 text-sm font-bold text-black hover:bg-black/5 transition-all"
                                    >
                                        <FileCheck size={16} />
                                        Görüntüle
                                    </Link>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
