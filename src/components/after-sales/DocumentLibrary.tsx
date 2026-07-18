'use client';

import { motion } from 'framer-motion';
import { FileText, Download, Search } from 'lucide-react';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { defaultRichTextHandlers } from '@/i18n/richText';

const documentKeys = ['damperManual', 'dorseManual', 'generalManual', 'damperSpec'] as const;

const documentConfig: Record<
    (typeof documentKeys)[number],
    { id: number; type: 'pdf' | 'docx'; size: string; path: string }
> = {
    damperManual: {
        id: 1,
        type: 'pdf',
        size: '1.4 MB',
        path: '/satis-sonrasi/Damper-Kullanma-Kilavuzu (1).pdf',
    },
    dorseManual: {
        id: 2,
        type: 'pdf',
        size: '1.3 MB',
        path: '/satis-sonrasi/Dorse-Kullanma-Kilavuzu-.pdf',
    },
    generalManual: {
        id: 3,
        type: 'docx',
        size: '3.8 MB',
        path: '/satis-sonrasi/User-Manual_UM-01.docx',
    },
    damperSpec: {
        id: 4,
        type: 'docx',
        size: '3.8 MB',
        path: '/satis-sonrasi/User-Manual_UM-02.docx',
    },
};

export default function DocumentLibrary() {
    const t = useTranslations('afterSales.documents');
    const [searchTerm, setSearchTerm] = useState('');

    const documents = documentKeys.map((key) => ({
        key,
        ...documentConfig[key],
        title: t(`${key}.title`),
        desc: t(`${key}.desc`),
    }));

    const filteredDocuments = documents.filter(
        (doc) =>
            doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doc.desc.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="bg-white py-4 md:py-8">
            <div className="container mx-auto px-3 sm:px-4">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative bg-[#f5f5f7] rounded-[1.75rem] md:rounded-[2.5rem] py-12 md:py-20 lg:py-24 overflow-hidden isolate shadow-sm"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,5,82,0.04),_transparent_45%)] pointer-events-none" />

                    <div className="px-5 sm:px-6 md:px-10 relative z-10">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6 md:gap-8">
                            <div className="max-w-xl">
                                <p className="text-xs md:text-sm font-semibold tracking-[0.25em] text-primary uppercase mb-4">
                                    {t('eyebrow')}
                                </p>
                                <h2 className="text-3xl md:text-[2.75rem] font-bold text-ozunlu-950 tracking-tight leading-[1.1] mb-4">
                                    {t('title')} {t('titleHighlight')}
                                </h2>
                                <p className="text-base md:text-lg text-gray-600 font-normal leading-relaxed">
                                    {t.rich('description', defaultRichTextHandlers)}
                                </p>
                            </div>

                            <div className="w-full md:w-auto relative group">
                                <div className="absolute start-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
                                    <Search size={18} strokeWidth={1.75} />
                                </div>
                                <input
                                    type="text"
                                    placeholder={t('searchPlaceholder')}
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full md:w-80 bg-white border border-gray-200 rounded-full py-3.5 ps-11 pe-5 text-sm text-ozunlu-950 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/15 focus:border-primary/30 transition-all shadow-sm"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                            {filteredDocuments.map((doc, index) => (
                                <motion.div
                                    key={doc.id}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.06 }}
                                    className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200/80 shadow-sm hover:shadow-md hover:border-primary/15 transition-all duration-300 flex flex-col group"
                                >
                                    <div className="flex justify-between items-start mb-5">
                                        <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                            <FileText size={20} strokeWidth={1.75} />
                                        </div>
                                        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500">
                                            {doc.type}
                                        </span>
                                    </div>

                                    <h3 className="text-base md:text-lg font-semibold text-ozunlu-950 mb-2 tracking-tight leading-snug sm:min-h-[2.75rem] break-words">
                                        {doc.title}
                                    </h3>

                                    <p className="text-sm text-gray-600 font-normal leading-relaxed mb-6 flex-grow">
                                        {doc.desc}
                                    </p>

                                    <a
                                        href={doc.path}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
                                    >
                                        <Download size={16} strokeWidth={1.75} />
                                        <span className="normal-case tracking-normal">{t('download')}</span>
                                    </a>
                                </motion.div>
                            ))}
                        </div>

                        {filteredDocuments.length === 0 && (
                            <div className="text-center py-16 text-gray-500">
                                <Search size={36} className="mx-auto mb-3 opacity-30" strokeWidth={1.5} />
                                <p className="text-sm font-normal">{t('noResults')}</p>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
