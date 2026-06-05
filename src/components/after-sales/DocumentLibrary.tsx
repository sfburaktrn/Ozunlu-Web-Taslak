'use client';



import { motion } from 'framer-motion';

import { FileText, Download, BookOpen, Search, ArrowRight } from 'lucide-react';

import { useState } from 'react';

import { useTranslations } from 'next-intl';
import { defaultRichTextHandlers } from '@/i18n/richText';



const documentKeys = ['damperManual', 'dorseManual', 'generalManual', 'damperSpec'] as const;



const documentConfig: Record<typeof documentKeys[number], { id: number; type: 'pdf' | 'docx'; size: string; path: string }> = {

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



    const filteredDocuments = documents.filter(doc =>

        doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||

        doc.desc.toLowerCase().includes(searchTerm.toLowerCase())

    );



    return (

        <section className="w-full max-w-[1600px] mx-auto py-20 px-6">

            <motion.div

                initial={{ opacity: 0, y: 40 }}

                whileInView={{ opacity: 1, y: 0 }}

                viewport={{ once: true }}

                className="bg-[#F5F5F7] rounded-[3rem] p-8 md:p-16 relative overflow-hidden"

            >

                <div className="absolute top-0 right-0 w-96 h-96 bg-gray-200 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 opacity-50" />



                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 relative z-10 gap-8">

                    <div className="max-w-xl">

                        <div className="inline-block text-sm font-bold text-[#000552]/60 mb-4 tracking-wider uppercase">{t('eyebrow')}</div>

                        <h2 className="text-4xl md:text-5xl font-black text-[#000552] mb-6 tracking-tight">

                            {t('title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#000552] to-blue-600">{t('titleHighlight')}</span>

                        </h2>

                        <p className="text-gray-500 text-lg leading-relaxed">{t.rich('description', defaultRichTextHandlers)}</p>

                    </div>



                    <div className="w-full md:w-auto relative group">

                        <div className="absolute start-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#000552] transition-colors">

                            <Search size={20} />

                        </div>

                        <input

                            type="text"

                            placeholder={t('searchPlaceholder')}

                            value={searchTerm}

                            onChange={(e) => setSearchTerm(e.target.value)}

                            className="w-full md:w-80 bg-white border border-gray-200 rounded-2xl py-4 ps-12 pe-6 text-[#000552] placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#000552]/10 transition-all shadow-sm"

                        />

                    </div>

                </div>



                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">

                    {filteredDocuments.map((doc, index) => (

                        <motion.div

                            key={doc.id}

                            initial={{ opacity: 0, y: 20 }}

                            whileInView={{ opacity: 1, y: 0 }}

                            viewport={{ once: true }}

                            transition={{ delay: index * 0.1 }}

                            className="bg-white rounded-[2rem] p-2 hover:shadow-2xl hover:shadow-[#000552]/10 transition-all duration-500 group"

                        >

                            <div className="bg-gray-50 rounded-[1.5rem] p-6 h-full flex flex-col border border-transparent group-hover:border-gray-100 transition-colors">

                                <div className="flex justify-between items-start mb-6">

                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${doc.type === 'pdf' ? 'bg-gradient-to-br from-red-500 to-red-600' : 'bg-gradient-to-br from-blue-500 to-blue-600'}`}>

                                        {doc.type === 'pdf' ? <BookOpen size={20} className="text-white" /> : <FileText size={20} className="text-white" />}

                                    </div>

                                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-white px-3 py-1 rounded-full shadow-sm">

                                        {doc.type}

                                    </span>

                                </div>



                                <h3 className="text-lg font-bold text-[#000552] mb-3 line-clamp-2 min-h-[3.5rem] group-hover:text-blue-600 transition-colors">

                                    {doc.title}

                                </h3>



                                <p className="text-sm text-gray-500 mb-8 line-clamp-3 leading-relaxed flex-grow">

                                    {doc.desc}

                                </p>



                                <a

                                    href={doc.path}

                                    target="_blank"

                                    rel="noopener noreferrer"

                                    className="w-full py-4 rounded-xl bg-white text-[#000552] text-sm font-bold flex items-center justify-center gap-2 shadow-sm hover:bg-[#000552] hover:text-white transition-all duration-300 group/btn"

                                >

                                    {doc.type === 'pdf' ? <Download size={16} /> : <FileText size={16} />}

                                    <span>{t('download')}</span>

                                    <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 rtl:group-hover/btn:-translate-x-0 transition-all rtl:rotate-180" />

                                </a>

                            </div>

                        </motion.div>

                    ))}

                </div>



                {filteredDocuments.length === 0 && (

                    <div className="text-center py-20 text-gray-400">

                        <Search size={48} className="mx-auto mb-4 opacity-20" />

                        <p>{t('noResults')}</p>

                    </div>

                )}

            </motion.div>

        </section>

    );

}


