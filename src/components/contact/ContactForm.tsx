'use client';

import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactForm() {
    return (
        <section className="w-full max-w-[1600px] mx-auto h-[calc(100vh-8rem)] flex items-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full bg-[#F5F5F7] rounded-[2.5rem] p-6 md:p-10"
            >
                {/* Header - Compact */}
                <div className="text-center mb-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">
                        İLETİŞİM
                    </h1>
                    <p className="text-black/60 text-sm md:text-base">
                        Sorularınız ve projeleriniz için bizimle iletişime geçin.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Info Panel - Compact */}
                    <div className="w-full lg:w-1/3">
                        <div className="bg-white p-5 rounded-2xl border border-black/5 h-full">
                            <h3 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
                                <span className="w-1 h-6 bg-primary rounded-full" />
                                MERKEZ OFİS
                            </h3>

                            <div className="space-y-4 text-sm">
                                <div className="flex items-start gap-3">
                                    <MapPin className="text-black/60 shrink-0 mt-0.5" size={18} />
                                    <div>
                                        <p className="font-bold text-black">Adres</p>
                                        <p className="text-black/60 leading-snug">
                                            Yayla, Habibler Pirinççi Köyü Yolu No:62, 34270 Sultangazi / İstanbul
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Phone className="text-black/60 shrink-0" size={18} />
                                    <div>
                                        <p className="font-bold text-black">Telefon</p>
                                        <p className="text-black/60">(0212) 595 46 46</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Mail className="text-black/60 shrink-0" size={18} />
                                    <div>
                                        <p className="font-bold text-black">E-posta</p>
                                        <p className="text-black/60">info@ozunlu.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Clock className="text-black/60 shrink-0" size={18} />
                                    <div>
                                        <p className="font-bold text-black">Çalışma Saatleri</p>
                                        <p className="text-black/60">Hafta içi & Cmt: 09:00 - 18:30</p>
                                    </div>
                                </div>

                                {/* Compact Map */}
                                <div className="w-full h-28 rounded-xl overflow-hidden border border-black/10 mt-2">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.6752191444284!2d28.831061975905456!3d41.1416154713321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caae14a9f0318d%3A0x62b7c453a4d806bd!2s%C3%96z%C3%BCnl%C3%BC%20Damper%20Karoser%20ve%20%C3%87elik%20Konst.%20San.Tic.Ltd.%C5%9Eti.!5e0!3m2!1str!2str!4v1767361978718!5m2!1str!2str"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Google Maps"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form - Compact */}
                    <div className="w-full lg:w-2/3">
                        <form className="bg-white p-5 md:p-8 rounded-2xl border border-black/5 space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-bold text-black/50 pl-1 mb-1 block">AD SOYAD</label>
                                    <input
                                        type="text"
                                        className="w-full bg-gray-50 border border-black/10 rounded-xl p-3 text-black text-sm focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition-all placeholder:text-black/30"
                                        placeholder="Adınız Soyadınız"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-black/50 pl-1 mb-1 block">FİRMA</label>
                                    <input
                                        type="text"
                                        className="w-full bg-gray-50 border border-black/10 rounded-xl p-3 text-black text-sm focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition-all placeholder:text-black/30"
                                        placeholder="Firma Ünvanı"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-bold text-black/50 pl-1 mb-1 block">E-POSTA</label>
                                    <input
                                        type="email"
                                        className="w-full bg-gray-50 border border-black/10 rounded-xl p-3 text-black text-sm focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition-all placeholder:text-black/30"
                                        placeholder="ornek@sirket.com"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-black/50 pl-1 mb-1 block">TELEFON</label>
                                    <input
                                        type="tel"
                                        className="w-full bg-gray-50 border border-black/10 rounded-xl p-3 text-black text-sm focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition-all placeholder:text-black/30"
                                        placeholder="05XX XXX XX XX"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-bold text-black/50 pl-1 mb-1 block">MESAJ</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-gray-50 border border-black/10 rounded-xl p-3 text-black text-sm focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition-all placeholder:text-black/30 resize-none"
                                    placeholder="Mesajınızı buraya yazınız..."
                                />
                            </div>

                            <div className="flex justify-end pt-2">
                                <button type="button" className="px-10 py-3 bg-primary text-white font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-primary/80 transition-all flex items-center gap-3 group">
                                    Gönder
                                    <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
