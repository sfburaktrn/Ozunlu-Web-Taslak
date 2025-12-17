'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

const options = {
    colors: [
        { name: 'Özünlü Mavisi', hex: '#000552' },
        { name: 'Kuvars Gri', hex: '#6b7280' },
        { name: 'Gece Mavisi', hex: '#1e3a8a' },
        { name: 'Alev Kırmızısı', hex: '#dc2626' },
    ],
    capacities: ['22 m³', '24 m³', '28 m³', '32 m³'],
    tires: ['Standart', 'Off-Road', 'Heavy Duty'],
};

export default function Configurator() {
    const [config, setConfig] = useState({
        color: options.colors[0],
        capacity: options.capacities[1],
        tire: options.tires[0],
    });

    return (
        <section className="bg-ozunlu-900 rounded-2xl p-8 border border-white/10 h-full">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-primary rounded-full" />
                KONFİGÜRATÖR
            </h3>

            <div className="space-y-8">
                {/* Color Selection */}
                <div>
                    <label className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-3 block">Gövde Rengi</label>
                    <div className="flex gap-4">
                        {options.colors.map((c) => (
                            <button
                                key={c.name}
                                onClick={() => setConfig({ ...config, color: c })}
                                className={`w-10 h-10 rounded-full border-2 transition-all relative ${config.color.name === c.name ? 'border-white scale-110' : 'border-transparent hover:scale-105'}`}
                                style={{ backgroundColor: c.hex }}
                                title={c.name}
                            >
                                {config.color.name === c.name && (
                                    <span className="absolute inset-0 flex items-center justify-center text-white drop-shadow-md">
                                        <Check size={16} />
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                    <p className="mt-2 text-sm text-gray-300 font-medium">{config.color.name}</p>
                </div>

                {/* Capacity Selection */}
                <div>
                    <label className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-3 block">Hacim Kapasitesi</label>
                    <div className="grid grid-cols-2 gap-3">
                        {options.capacities.map((cap) => (
                            <button
                                key={cap}
                                onClick={() => setConfig({ ...config, capacity: cap })}
                                className={`py-2 px-4 rounded text-sm font-bold border transition-colors ${config.capacity === cap
                                        ? 'bg-primary text-white border-primary'
                                        : 'bg-transparent text-gray-300 border-gray-700 hover:border-gray-500'
                                    }`}
                            >
                                {cap}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tire Selection */}
                <div>
                    <label className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-3 block">Lastik Tipi</label>
                    <div className="space-y-2">
                        {options.tires.map((tire) => (
                            <button
                                key={tire}
                                onClick={() => setConfig({ ...config, tire: tire })}
                                className={`w-full text-left py-3 px-4 rounded border transition-all flex justify-between items-center ${config.tire === tire
                                        ? 'bg-white/5 border-primary text-white'
                                        : 'bg-transparent border-gray-700 text-gray-400 hover:border-gray-500'
                                    }`}
                            >
                                <span className="font-bold">{tire}</span>
                                {config.tire === tire && <Check size={18} className="text-white" />}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Summary / CTA */}
                <div className="pt-6 border-t border-white/10">
                    <button className="w-full py-4 bg-primary text-white font-black uppercase tracking-widest hover:opacity-90 transition-colors rounded">
                        TEKLİF OLUŞTUR
                    </button>
                </div>
            </div>
        </section>
    );
}
