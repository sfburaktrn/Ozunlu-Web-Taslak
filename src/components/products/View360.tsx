'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function View360() {
    const t = useTranslations('productsPage.view360');
    const x = useMotionValue(0);
    const rotateY = useTransform(x, [-200, 200], [-45, 45]);
    const [isDragging, setIsDragging] = useState(false);

    return (
        <section className="py-12 relative z-10">
            <div className="bg-gradient-to-t from-ozunlu-950 to-ozunlu-900 rounded-2xl border border-white/10 p-8 h-[500px] flex flex-col items-center justify-center relative overflow-hidden group cursor-grab active:cursor-grabbing">
                <div className={`absolute inset-0 pointer-events-none flex items-center justify-center transition-opacity duration-500 ${isDragging ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 text-white text-sm font-bold flex items-center gap-2">
                        <svg className="w-5 h-5 animate-pulse icon-directional" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                        {t('dragHint')}
                    </div>
                </div>

                <motion.div
                    style={{
                        rotateY,
                        cursor: 'grab',
                        backgroundColor: '#000552',
                        borderColor: '#000552',
                    }}
                    drag="x"
                    dragConstraints={{ left: -200, right: 200 }}
                    onDragStart={() => setIsDragging(true)}
                    onDragEnd={() => setIsDragging(false)}
                    whileTap={{ cursor: 'grabbing' }}
                    className="w-64 h-40 md:w-96 md:h-60 rounded-lg shadow-[0_20px_50px_rgba(0,5,82,0.3)] flex items-center justify-center text-white font-black text-2xl transform-style-3d border-b-8 border-r-8 relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
                    HARDOX 450
                    <br />
                    {t('bodyLabel')}
                    <div className="absolute -bottom-8 inset-x-4 h-8 bg-gray-800 rounded-b-lg flex justify-between px-4 items-center">
                        <div className="w-8 h-8 bg-black rounded-full border-2 border-gray-600 -mb-4" />
                        <div className="w-8 h-8 bg-black rounded-full border-2 border-gray-600 -mb-4 me-2" />
                        <div className="w-8 h-8 bg-black rounded-full border-2 border-gray-600 -mb-4" />
                    </div>
                </motion.div>

                <div className="absolute bottom-4 start-4 text-xs text-gray-500">{t('disclaimer')}</div>
            </div>
        </section>
    );
}
