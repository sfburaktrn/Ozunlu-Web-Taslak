'use client';

import { useTranslations } from 'next-intl';
import View360 from '@/components/products/View360';
import Configurator from '@/components/products/Configurator';
import TechSpecs from '@/components/products/TechSpecs';

export default function ProductsPageContent() {
    const t = useTranslations('productsPage');

    return (
        <main className="pt-24 min-h-screen bg-ozunlu-950">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
                        {t('title')}{' '}
                        <span className="text-primary">{t('titleHighlight')}</span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">{t('description')}</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-8 mb-16">
                    <div className="w-full lg:w-2/3">
                        <View360 />
                    </div>
                    <div className="w-full lg:w-1/3">
                        <Configurator />
                    </div>
                </div>
                <TechSpecs />
            </div>
        </main>
    );
}
