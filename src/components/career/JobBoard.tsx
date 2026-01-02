'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Briefcase } from 'lucide-react';

const positions: any[] = []; // Leave empty to trigger the "No Active Jobs" state
const KARIYER_NET_URL = 'https://www.kariyer.net/firma-profil/ozunlu-damper-ltd-sti-52915-211659';
const LINKEDIN_URL = 'https://www.linkedin.com/company/ozunlu-damper/';

export default function JobBoard() {
    const hasJobs = positions.length > 0;

    return (
        <section className="py-24 bg-ozunlu-900 border-t border-white/5 relative overflow-hidden">
            {/* Background glow for this section too */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                        SENİ <span className="text-white">BEKLİYORUZ</span>
                    </h2>
                    <p className="text-gray-400">Geleceği şekillendiren ekibin bir parçası ol.</p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {hasJobs ? (
                        <div className="grid gap-4">
                            {positions.map((job, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-ozunlu-950 p-6 rounded-xl border border-white/5 flex flex-col md:flex-row items-center justify-between group hover:border-primary/50 transition-colors cursor-pointer"
                                    onClick={() => window.open(KARIYER_NET_URL, '_blank')}
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
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-ozunlu-950 p-12 rounded-2xl border border-white/5 text-center relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 flex flex-col items-center">
                                {/* Icon with Glow */}
                                <div className="relative mb-8 group-hover:scale-110 transition-transform duration-300">
                                    <div className="absolute inset-0 bg-primary/40 blur-xl rounded-full" />
                                    <div className="relative w-24 h-24 bg-ozunlu-900 border border-white/10 rounded-full flex items-center justify-center text-primary shadow-2xl">
                                        <Briefcase size={36} className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4">
                                    Şu anda açık pozisyonumuz bulunmamaktadır
                                </h3>
                                <p className="text-gray-400 max-w-lg mx-auto mb-8 leading-relaxed">
                                    Ancak yetenekli profesyonellerle tanışmak için her zaman heyecanlıyız.
                                    Genel başvuru yapmak için CV&apos;nizi bize gönderebilir veya sosyal medya hesaplarımızı takip edebilirsiniz.
                                </p>

                                <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto justify-center flex-wrap">
                                    <a
                                        href="mailto:info@ozunlu.com"
                                        className="px-8 py-4 bg-white text-black font-bold uppercase rounded hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 min-w-[200px]"
                                    >
                                        info@ozunlu.com
                                        <ArrowRight size={18} />
                                    </a>
                                    <a
                                        href={KARIYER_NET_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-8 py-4 bg-[#830051] text-white font-bold uppercase rounded hover:bg-[#60003c] transition-colors flex items-center justify-center gap-2 min-w-[200px]"
                                    >
                                        Kariyer.net
                                        <ArrowRight size={18} />
                                    </a>
                                    <a
                                        href={LINKEDIN_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-8 py-4 bg-[#0077b5] text-white font-bold uppercase rounded hover:bg-[#005582] transition-colors flex items-center justify-center gap-2 min-w-[200px]"
                                    >
                                        LinkedIn
                                        <ArrowRight size={18} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
}
