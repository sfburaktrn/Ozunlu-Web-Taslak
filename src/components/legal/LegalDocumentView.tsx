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
                >
                    <p className="typo-eyebrow text-[#000552]/60 mb-4">
                        {document.lastUpdated}
                    </p>
                    <h1 className="typo-h2 mb-6">
                        {document.title}
                    </h1>
                    <p className="typo-body mb-10 border-s-4 border-[#000552] ps-5 text-gray-700">
                        {document.intro}
                    </p>

                    <div className="space-y-10">
                        {document.sections.map((section) => (
                            <section key={section.title}>
                                <h2 className="typo-h3 text-primary mb-4">
                                    {section.title}
                                </h2>
                                {section.paragraphs?.map((p) => (
                                    <p
                                        key={p.slice(0, 40)}
                                        className="typo-body-sm text-gray-700 mb-3"
                                    >
                                        {p}
                                    </p>
                                ))}
                                {section.items && (
                                    <ul className="list-disc list-outside ms-5 space-y-2 typo-body-sm text-gray-700">
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
