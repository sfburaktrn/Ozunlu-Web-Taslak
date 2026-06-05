'use client';

import { useTranslations } from 'next-intl';
import LifeAtOzunlu from '@/components/career/LifeAtOzunlu';
import JobBoard from '@/components/career/JobBoard';

export default function CareerPageContent() {
    const t = useTranslations('career.hero');

    return (
        <main className="min-h-screen bg-ozunlu-950 pt-32 relative overflow-hidden">
            <div className="absolute top-0 start-1/2 -translate-x-1/2 w-full h-[1400px] pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#000080]/20 via-[#000080]/5 to-transparent opacity-80" />
                <div className="absolute top-0 start-1/2 -translate-x-1/2 w-[80%] h-[70%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent blur-3xl opacity-60" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
            </div>
            <div className="container mx-auto px-4 text-center mb-12 relative z-10">
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-tight drop-shadow-2xl">
                    {t('title')}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
                        {t('titleHighlight')}
                    </span>
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg pt-4 leading-relaxed">{t('description')}</p>
            </div>
            <LifeAtOzunlu />
            <JobBoard />
        </main>
    );
}
