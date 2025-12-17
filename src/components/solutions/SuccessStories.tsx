'use client';

import { motion } from 'framer-motion';

const stories = [
    {
        client: 'MEGA YAPI A.Ş.',
        project: 'Kuzey Marmara Otoyolu Projesi',
        result: '%20 Zaman Tasarrufu',
        testimonial: 'Özünlü damperlerinin hızlı boşaltma özelliği sayesinde günde fazladan 2 tur atarak projenin 3 ay erken bitmesini sağladık.',
        stat: '150+',
        statLabel: 'Damper Kullanıldı'
    },
    {
        client: 'GLOBAL LOGISTICS',
        project: 'Avrupa İhracat Filosu',
        result: '%12 Yakıt Verimliliği',
        testimonial: 'Hafifletilmiş şasi tasarımı, her seferde 1.5 ton daha fazla yük taşımamızı sağladı. Bu yıllık kârımızda devasa bir artış demek.',
        stat: '5M km',
        statLabel: 'Sorunsuz Yol'
    }
];

export default function SuccessStories() {
    return (
        <section className="py-24 bg-ozunlu-900 border-t border-white/5">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-16">
                    BAŞARI <span className="text-white">HİKAYELERİ</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {stories.map((story, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-ozunlu-950 p-8 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-primary/30 transition-colors"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-9xl text-white select-none">
                                &ldquo;
                            </div>

                            <div className="relative z-10">
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-white mb-1">{story.client}</h3>
                                    <p className="text-white text-sm font-bold uppercase tracking-wider">{story.project}</p>
                                </div>

                                <blockquote className="text-gray-300 text-lg italic mb-8 leading-relaxed">
                                    &ldquo;{story.testimonial}&rdquo;
                                </blockquote>

                                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                                    <div>
                                        <span className="block text-3xl font-bold text-white">{story.stat}</span>
                                        <span className="text-xs text-gray-500 uppercase font-bold">{story.statLabel}</span>
                                    </div>
                                    <div className="text-right">
                                        <span className="block text-xl font-bold text-white">{story.result}</span>
                                        <span className="text-xs text-gray-500 uppercase font-bold">KAZANIM</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
