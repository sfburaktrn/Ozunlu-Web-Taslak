'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import { useTranslations } from 'next-intl';

const colorKeys = ['blue', 'gray', 'navy', 'red'] as const;
const colorHex: Record<(typeof colorKeys)[number], string> = {
    blue: '#000552',
    gray: '#6b7280',
    navy: '#1e3a8a',
    red: '#dc2626',
};

const capacities = ['22 m³', '24 m³', '28 m³', '32 m³'];
const tireKeys = ['standard', 'offRoad', 'heavyDuty'] as const;

export default function Configurator() {
    const t = useTranslations('productsPage.configurator');
    const tCta = useTranslations('common.cta');

    const [config, setConfig] = useState<{
        color: (typeof colorKeys)[number];
        capacity: string;
        tire: (typeof tireKeys)[number];
    }>({
        color: colorKeys[0],
        capacity: capacities[1],
        tire: tireKeys[0],
    });

    return (
        <section className="bg-ozunlu-900 rounded-2xl p-8 border border-white/10 h-full">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-primary rounded-full" />
                {t('title')}
            </h3>

            <div className="space-y-8">
                <div>
                    <label className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-3 block">{t('bodyColor')}</label>
                    <div className="flex gap-4">
                        {colorKeys.map((key) => (
                            <button
                                key={key}
                                onClick={() => setConfig({ ...config, color: key })}
                                className={`w-10 h-10 rounded-full border-2 transition-all relative ${config.color === key ? 'border-white scale-110' : 'border-transparent hover:scale-105'}`}
                                style={{ backgroundColor: colorHex[key] }}
                                title={t(`colors.${key}`)}
                            >
                                {config.color === key && (
                                    <span className="absolute inset-0 flex items-center justify-center text-white drop-shadow-md">
                                        <Check size={16} />
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                    <p className="mt-2 text-sm text-gray-300 font-medium">{t(`colors.${config.color}`)}</p>
                </div>

                <div>
                    <label className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-3 block">{t('capacity')}</label>
                    <div className="grid grid-cols-2 gap-3">
                        {capacities.map((cap) => (
                            <button
                                key={cap}
                                onClick={() => setConfig({ ...config, capacity: cap })}
                                className={`py-2 px-4 rounded text-sm font-bold border transition-colors ${config.capacity === cap ? 'bg-primary text-white border-primary' : 'bg-transparent text-gray-300 border-gray-700 hover:border-gray-500'}`}
                            >
                                {cap}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-3 block">{t('tires')}</label>
                    <div className="space-y-2">
                        {tireKeys.map((key) => (
                            <button
                                key={key}
                                onClick={() => setConfig({ ...config, tire: key })}
                                className={`w-full text-start py-3 px-4 rounded border transition-all flex justify-between items-center ${config.tire === key ? 'bg-white/5 border-primary text-white' : 'bg-transparent border-gray-700 text-gray-400 hover:border-gray-500'}`}
                            >
                                <span className="font-bold">{t(`tireTypes.${key}`)}</span>
                                {config.tire === key && <Check size={18} className="text-white" />}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                    <button className="w-full py-4 bg-primary text-white font-black uppercase tracking-widest hover:opacity-90 transition-colors rounded">
                        {tCta('teklifAl')}
                    </button>
                </div>
            </div>
        </section>
    );
}
