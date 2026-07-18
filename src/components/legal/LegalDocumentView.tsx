'use client';

import { motion } from 'framer-motion';
import type { LegalDocument } from '@/content/legal/types';

type Props = {
    document: LegalDocument;
};

export default function LegalDocumentView({ document }: Props) {
    return (
        <main className="min-h-screen bg-white pt-24 md:pt-28 pb-16">
            <div className="container mx-auto px-4 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="break-words [overflow-wrap:anywhere]"
                >
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#000552]/60 mb-4">
                        {document.lastUpdated}
                    </p>
                    <h1 className="text-3xl md:text-4xl font-black text-black mb-6 leading-tight">
                        {document.title}
                    </h1>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-10 border-s-4 border-[#000552] ps-5">
                        {document.intro}
                    </p>

                    <div className="space-y-10">
                        {document.sections.map((section) => (
                            <section key={section.title}>
                                <h2 className="text-lg md:text-xl font-bold text-[#000552] mb-4">
                                    {section.title}
                                </h2>
                                {section.paragraphs?.map((p) => (
                                    <p
                                        key={p.slice(0, 40)}
                                        className="text-gray-700 text-sm md:text-base leading-relaxed mb-3"
                                    >
                                        {p}
                                    </p>
                                ))}
                                {section.items && (
                                    <ul className="list-disc list-outside ms-5 space-y-2 text-gray-700 text-sm md:text-base leading-relaxed">
                                        {section.items.map((item) => (
                                            <li key={item.slice(0, 40)}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </section>
                        ))}
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
