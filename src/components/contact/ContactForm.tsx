'use client';

import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import type { Locale } from '@/i18n/routing';

const MAP_EMBED_BASE =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.6752191444284!2d28.831061975905456!3d41.1416154713321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caae14a9f0318d%3A0x62b7c453a4d806bd!2s%C3%96z%C3%BCnl%C3%BC%20Damper%20Karoser%20ve%20%C3%87elik%20Konst.%20San.Tic.Ltd.%C5%9Eti.!5e0!3m2!1s';

function getMapEmbedUrl(locale: Locale) {
    const lang = locale;
    return `${MAP_EMBED_BASE}${lang}!2s${lang}!4v1767361978718!5m2!1s${lang}!2s${lang}`;
}

export default function ContactForm() {
    const t = useTranslations('contact.form');
    const locale = useLocale() as Locale;

    return (
        <section className="w-full max-w-[1600px] mx-auto h-[calc(100vh-8rem)] flex items-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full bg-[#F5F5F7] rounded-[2.5rem] p-6 md:p-10"
            >
                <div className="text-center mb-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">
                        {t('title')}
                    </h1>
                    <p className="text-black/60 text-sm md:text-base">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="w-full lg:w-1/3">
                        <div className="bg-white p-5 rounded-2xl border border-black/5 h-full">
                            <h3 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
                                <span className="w-1 h-6 bg-primary rounded-full" />
                                {t('headOffice')}
                            </h3>

                            <div className="space-y-4 text-sm">
                                <div className="flex items-start gap-3">
                                    <MapPin className="text-black/60 shrink-0 mt-0.5" size={18} />
                                    <div>
                                        <p className="text-black/60 leading-snug">
                                            {t('address')}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Phone className="text-black/60 shrink-0" size={18} />
                                    <div>
                                        <p className="font-bold text-black">{t('phone')}</p>
                                        <p className="text-black/60">(0212) 595 46 46</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Mail className="text-black/60 shrink-0" size={18} />
                                    <div>
                                        <p className="font-bold text-black">{t('email')}</p>
                                        <p className="text-black/60">info@ozunlu.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Clock className="text-black/60 shrink-0" size={18} />
                                    <div>
                                        <p className="font-bold text-black">{t('hours')}</p>
                                        <p className="text-black/60">{t('hoursValue')}</p>
                                    </div>
                                </div>

                                <div className="w-full h-28 rounded-xl overflow-hidden border border-black/10 mt-2">
                                    <iframe
                                        src={getMapEmbedUrl(locale)}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title={t('mapTitle')}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-2/3">
                        <form className="bg-white p-5 md:p-8 rounded-2xl border border-black/5 space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-bold text-black ps-1 mb-1 block">{t('name')}</label>
                                    <input
                                        type="text"
                                        className="w-full bg-gray-50 border border-black/10 rounded-xl p-3 text-black text-sm focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition-all placeholder:text-black/30"
                                        placeholder={t('namePlaceholder')}
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-black ps-1 mb-1 block">{t('company')}</label>
                                    <input
                                        type="text"
                                        className="w-full bg-gray-50 border border-black/10 rounded-xl p-3 text-black text-sm focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition-all placeholder:text-black/30"
                                        placeholder={t('companyPlaceholder')}
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-bold text-black ps-1 mb-1 block">{t('email')}</label>
                                    <input
                                        type="email"
                                        className="w-full bg-gray-50 border border-black/10 rounded-xl p-3 text-black text-sm focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition-all placeholder:text-black/30"
                                        placeholder={t('emailPlaceholder')}
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-black ps-1 mb-1 block">{t('phone')}</label>
                                    <input
                                        type="tel"
                                        className="w-full bg-gray-50 border border-black/10 rounded-xl p-3 text-black text-sm focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition-all placeholder:text-black/30"
                                        placeholder={t('phonePlaceholder')}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-bold text-black ps-1 mb-1 block">{t('message')}</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-gray-50 border border-black/10 rounded-xl p-3 text-black text-sm focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition-all placeholder:text-black/30 resize-none"
                                    placeholder={t('messagePlaceholder')}
                                />
                            </div>

                            <div className="flex justify-end pt-2">
                                <button type="button" className="px-10 py-3 bg-primary text-white font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-primary/80 transition-all flex items-center gap-3 group">
                                    {t('submit')}
                                    <Send size={16} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
