'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Briefcase } from 'lucide-react';

const positions = [
    { title: 'Makine Mühendisi', type: 'Tam Zamanlı', location: 'Ankara', dept: 'Ar-Ge' },
    { title: 'Kaynak Operatörü', type: 'Tam Zamanlı', location: 'Eskişehir', dept: 'Üretim' },
    { title: 'İhracat Satış Uzmanı', type: 'Tam Zamanlı', location: 'İstanbul', dept: 'Satış' },
    { title: 'Kalite Kontrol Teknikeri', type: 'Tam Zamanlı', location: 'Aksaray', dept: 'Kalite' },
];

export default function JobBoard() {
    return (
        <section className="py-24 bg-ozunlu-900 border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                        SENİ <span className="text-white">BEKLİYORUZ</span>
                    </h2>
                    <p className="text-gray-400">Geleceği şekillendiren ekibin bir parçası ol.</p>
                </div>

                <div className="grid gap-4 max-w-4xl mx-auto">
                    {positions.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-ozunlu-950 p-6 rounded-xl border border-white/5 flex flex-col md:flex-row items-center justify-between group hover:border-primary/50 transition-colors cursor-pointer"
                        >
                            <div className="flex items-center gap-4 w-full md:w-auto mb-4 md:mb-0">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-white">
                                    <Briefcase size={20} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white group-hover:text-white transition-colors">{job.title}</h4>
                                    <div className="flex gap-3 text-sm text-gray-400 mt-1">
                                        <span className="font-semibold">{job.dept}</span>
                                        <span>•</span>
                                        <span>{job.location}</span>
                                        <span>•</span>
                                        <span>{job.type}</span>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full md:w-auto px-6 py-3 bg-white text-black font-bold uppercase rounded hover:bg-primary transition-colors flex items-center justify-center gap-2">
                                Başvur
                                <ArrowRight size={18} />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
