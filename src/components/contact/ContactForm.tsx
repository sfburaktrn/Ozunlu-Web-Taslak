'use client';

import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactForm() {
    return (
        <section className="py-24 bg-ozunlu-950 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#000080]/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#000080]/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#000080]/5 via-transparent to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-6xl font-black text-white mb-6 tracking-tight">
                        İLETİŞİM <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">AĞI</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Sorularınız, projeleriniz ve iş birlikleri için bizimle iletişime geçin.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
                    {/* Info Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="w-full lg:w-1/3 space-y-8"
                    >
                        <div className="bg-ozunlu-900/80 backdrop-blur-sm p-8 rounded-3xl border border-white/5 h-full relative overflow-hidden group">
                            {/* Hover highlight */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 relative z-10">
                                <span className="w-1.5 h-8 bg-gradient-to-b from-primary to-blue-600 rounded-full" />
                                MERKEZ OFİS
                            </h3>

                            <div className="space-y-8 relative z-10">
                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/5 group-hover:border-primary/20 transition-colors">
                                        <MapPin className="text-white" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-lg mb-1">ADRES</p>
                                        <p className="text-gray-400 leading-relaxed">
                                            Yayla, Habibler Pirinççi Köyü Yolu<br />
                                            No:62, 34270<br />
                                            Sultangazi / İstanbul
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/5 group-hover:border-primary/20 transition-colors">
                                        <Phone className="text-white" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-lg mb-1">TELEFON</p>
                                        <p className="text-gray-400 text-lg hover:text-white transition-colors">
                                            (0212) 595 46 46
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/5 group-hover:border-primary/20 transition-colors">
                                        <Mail className="text-white" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-lg mb-1">E-POSTA</p>
                                        <p className="text-gray-400 text-lg hover:text-white transition-colors">
                                            info@ozunlu.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center shrink-0 border border-white/5 group-hover:border-primary/20 transition-colors">
                                        <Clock className="text-white" size={24} />
                                    </div>
                                    <div className="w-full">
                                        <p className="text-white font-bold text-lg mb-1">ÇALIŞMA SAATLERİ</p>
                                        <p className="text-blue-500 font-bold mb-1">Hafta içi & Cumartesi</p>
                                        <p className="text-gray-400 mb-4">
                                            09:00 - 18:30
                                        </p>
                                        {/* Map Embed */}
                                        <div className="w-full h-48 rounded-xl overflow-hidden border border-white/10 shadow-lg grayscale hover:grayscale-0 transition-all duration-500">
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.6752191444284!2d28.831061975905456!3d41.1416154713321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caae14a9f0318d%3A0x62b7c453a4d806bd!2s%C3%96z%C3%BCnl%C3%BC%20Damper%20Karoser%20ve%20%C3%87elik%20Konst.%20San.Tic.Ltd.%C5%9Eti.!5e0!3m2!1str!2str!4v1767361978718!5m2!1str!2str"
                                                width="100%"
                                                height="100%"
                                                style={{ border: 0 }}
                                                allowFullScreen
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                                title="Google Maps Location"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="w-full lg:w-2/3"
                    >
                        <form className="bg-ozunlu-900/50 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/5 space-y-8 relative overflow-hidden">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-xs font-bold text-gray-400 tracking-wider">ADINIZ SOYADINIZ</label>
                                    <input
                                        type="text"
                                        className="w-full bg-ozunlu-950/50 border border-white/10 rounded-xl p-5 text-white focus:border-primary focus:bg-ozunlu-950 focus:outline-none transition-all placeholder:text-gray-600"
                                        placeholder="Ad Soyad"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-bold text-gray-400 tracking-wider">FİRMA ADI</label>
                                    <input
                                        type="text"
                                        className="w-full bg-ozunlu-950/50 border border-white/10 rounded-xl p-5 text-white focus:border-primary focus:bg-ozunlu-950 focus:outline-none transition-all placeholder:text-gray-600"
                                        placeholder="Firma Ünvanı"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-xs font-bold text-gray-400 tracking-wider">E-POSTA</label>
                                    <input
                                        type="email"
                                        className="w-full bg-ozunlu-950/50 border border-white/10 rounded-xl p-5 text-white focus:border-primary focus:bg-ozunlu-950 focus:outline-none transition-all placeholder:text-gray-600"
                                        placeholder="ornek@sirket.com"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-bold text-gray-400 tracking-wider">TELEFON</label>
                                    <input
                                        type="tel"
                                        className="w-full bg-ozunlu-950/50 border border-white/10 rounded-xl p-5 text-white focus:border-primary focus:bg-ozunlu-950 focus:outline-none transition-all placeholder:text-gray-600"
                                        placeholder="05XX XXX XX XX"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-xs font-bold text-gray-400 tracking-wider">MESAJINIZ</label>
                                <textarea
                                    rows={6}
                                    className="w-full bg-ozunlu-950/50 border border-white/10 rounded-xl p-5 text-white focus:border-primary focus:bg-ozunlu-950 focus:outline-none transition-all placeholder:text-gray-600 resize-none"
                                    placeholder="Mesajınızı buraya yazınız..."
                                />
                            </div>

                            <div className="pt-4 flex justify-end">
                                <button type="button" className="w-full md:w-auto px-12 py-5 bg-gradient-to-r from-primary to-blue-700 text-white font-bold uppercase tracking-widest rounded-xl hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-all flex items-center justify-center gap-4 group">
                                    Gönder
                                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
