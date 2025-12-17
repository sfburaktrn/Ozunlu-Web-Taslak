'use client';

import { motion } from 'framer-motion';
import { Timer, Scale, ShieldCheck, Zap } from 'lucide-react';

const benefits = [
    {
        icon: Timer,
        title: '2 Dakikada Boşaltım',
        desc: 'Optimize edilmiş hidrolik sistem ile rekor sürede tahliye.'
    },
    {
        icon: Scale,
        title: '%15 Daha Hafif',
        desc: 'Özel alaşımlı tasarım sayesinde daha fazla yük taşıma kapasitesi.'
    },
    {
        icon: ShieldCheck,
        title: 'Hardox 450 Gövde',
        desc: 'Aşınmaya ve darbeye karşı maksimum dirençli İsveç çeliği.'
    },
    {
        icon: Zap,
        title: 'Akıllı Denge Sistemi',
        desc: 'Zorlu arazilerde devrilmeyi önleyen aktif sensör teknolojisi.'
    },
];

export default function TechSpecs() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12">
            {benefits.map((benefit, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-ozunlu-900/50 p-6 rounded-lg border border-white/5 hover:border-primary/50 transition-colors group"
                >
                    <div className="w-12 h-12 bg-ozunlu-800 rounded-full flex items-center justify-center mb-4 text-white group-hover:bg-primary group-hover:text-white transition-colors">
                        <benefit.icon size={24} />
                    </div>
                    <h4 className="text-white font-bold mb-2">{benefit.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
                </motion.div>
            ))}
        </div>
    );
}
