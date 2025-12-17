'use client';

import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';
import ContactTabs, { contactDepartments } from './ContactTabs';

export default function ContactForm() {
    const [activeTab, setActiveTab] = useState('sales');

    const currentDept = contactDepartments.find(d => d.id === activeTab);

    return (
        <section className="py-24 bg-ozunlu-950">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                        İLETİŞİM <span className="text-white">AĞI</span>
                    </h2>
                    <p className="text-gray-400">
                        Sorularınız, projeleriniz ve iş birlikleri için doğru departmanla iletişime geçin.
                    </p>
                </div>

                <ContactTabs activeTab={activeTab} setActiveTab={setActiveTab} />

                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                    {/* Info Panel */}
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="w-full lg:w-1/3 space-y-8"
                    >
                        <div className="bg-ozunlu-900 p-8 rounded-2xl border border-white/5">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <div className="w-2 h-8 bg-primary rounded-full" />
                                MERKEZ OFİS
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <MapPin className="text-white mt-1" />
                                    <div>
                                        <p className="text-white font-bold">ANKARA</p>
                                        <p className="text-gray-400 text-sm">
                                            Ostim OSB Mahallesi, 1234. Cadde No: 56<br />
                                            Yenimahalle / ANKARA
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Phone className="text-white" />
                                    <div>
                                        <p className="text-white font-bold">+90 (312) 123 45 67</p>
                                        <p className="text-gray-500 text-xs">Hafta içi 08:30 - 18:00</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Mail className="text-white" />
                                    <div>
                                        <p className="text-white font-bold">{currentDept?.email}</p>
                                        <p className="text-gray-500 text-xs">{currentDept?.label} DEPARTMANI</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Dynamic Form */}
                    <div className="w-full lg:w-2/3">
                        <form className="bg-ozunlu-900/50 p-8 md:p-12 rounded-2xl border border-white/5 space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-400">ADINIZ SOYADINIZ</label>
                                    <input type="text" className="w-full bg-ozunlu-950 border border-white/10 rounded-lg p-4 text-white focus:border-primary focus:outline-none transition-colors" placeholder="Ad Soyad" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-400">FİRMA ADI</label>
                                    <input type="text" className="w-full bg-ozunlu-950 border border-white/10 rounded-lg p-4 text-white focus:border-primary focus:outline-none transition-colors" placeholder="Firma Ünvanı" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-400">E-POSTA</label>
                                    <input type="email" className="w-full bg-ozunlu-950 border border-white/10 rounded-lg p-4 text-white focus:border-primary focus:outline-none transition-colors" placeholder="ornek@sirket.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-400">TELEFON</label>
                                    <input type="tel" className="w-full bg-ozunlu-950 border border-white/10 rounded-lg p-4 text-white focus:border-primary focus:outline-none transition-colors" placeholder="05XX XXX XX XX" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-400">MESAJINIZ</label>
                                <textarea rows={5} className="w-full bg-ozunlu-950 border border-white/10 rounded-lg p-4 text-white focus:border-primary focus:outline-none transition-colors resize-none" placeholder={`Sayın ${currentDept?.label} yetkilisi...`} />
                            </div>

                            <div className="pt-4">
                                <button type="button" className="w-full md:w-auto px-10 py-4 bg-primary text-white font-black uppercase tracking-widest rounded hover:opacity-90 transition-colors flex items-center justify-center gap-3">
                                    <Send size={20} />
                                    Gönder
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
