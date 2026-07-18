'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Clock, Check } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import type { Locale } from '@/i18n/routing';
import { submitForm } from '@/lib/submitForm';
import { getPublicEmail } from '@/lib/siteEmails';
import EmailLink from '@/components/common/EmailLink';

const MAP_EMBED_BASE =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.6752191444284!2d28.831061975905456!3d41.1416154713321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caae14a9f0318d%3A0x62b7c453a4d806bd!2s%C3%96z%C3%BCnl%C3%BC%20Damper%20Karoser%20ve%20%C3%87elik%20Konst.%20San.Tic.Ltd.%C5%9Eti.!5e0!3m2!1s';

function getMapEmbedUrl(locale: Locale) {
    const lang = locale;
    return `${MAP_EMBED_BASE}${lang}!2s${lang}!4v1767361978718!5m2!1s${lang}!2s${lang}`;
}

export default function ContactForm() {
    const t = useTranslations('contact.form');
    const locale = useLocale() as Locale;

    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [website, setWebsite] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const contactEmail = getPublicEmail('contact');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError(null);

        const result = await submitForm({
            type: 'contact',
            name,
            company,
            email,
            phone,
            message,
            website,
        });

        setIsSubmitting(false);

        if (!result.success) {
            setSubmitError(t('submitError'));
            return;
        }

        setIsSuccess(true);
        setName('');
        setCompany('');
        setEmail('');
        setPhone('');
        setMessage('');
    };

    return (
        <section className="w-full max-w-[1600px] mx-auto min-h-[calc(100svh-8rem)] flex items-center py-4 md:py-8">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full bg-[#F5F5F7] rounded-[1.75rem] md:rounded-[2.5rem] p-4 sm:p-6 md:p-10"
            >
                <div className="text-center mb-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">
                        {t('title')}
                    </h1>
                    <p className="text-black/60 text-sm md:text-base">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
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

                                {contactEmail && (
                                    <div className="flex items-center gap-3">
                                        <Mail className="text-black/60 shrink-0" size={18} />
                                        <div>
                                            <p className="font-bold text-black">{t('email')}</p>
                                            <EmailLink
                                                email={contactEmail}
                                                className="text-black/60 hover:text-[#000552] transition-colors"
                                            />
                                        </div>
                                    </div>
                                )}

                                <div className="flex items-center gap-3">
                                    <Clock className="text-black/60 shrink-0" size={18} />
                                    <div>
                                        <p className="font-bold text-black">{t('hours')}</p>
                                        <p className="text-black/60">{t('hoursValue')}</p>
                                    </div>
                                </div>

                                <div className="w-full h-44 sm:h-52 lg:h-32 rounded-xl overflow-hidden border border-black/10 mt-2">
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
                        {isSuccess ? (
                            <div className="bg-white p-8 md:p-12 rounded-2xl border border-black/5 flex flex-col items-center justify-center text-center min-h-[320px]">
                                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                                    <Check className="text-green-600" size={32} />
                                </div>
                                <h2 className="text-2xl font-bold text-black mb-2">{t('successTitle')}</h2>
                                <p className="text-black/60 mb-6">{t('successMessage')}</p>
                                <button
                                    type="button"
                                    onClick={() => setIsSuccess(false)}
                                    className="px-8 py-3 bg-primary text-white font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-primary/80 transition-all"
                                >
                                    {t('submit')}
                                </button>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="bg-white p-4 sm:p-5 md:p-8 rounded-2xl border border-black/5 space-y-4"
                            >
                                <input
                                    type="text"
                                    name="website"
                                    value={website}
                                    onChange={(e) => setWebsite(e.target.value)}
                                    className="hidden"
                                    tabIndex={-1}
                                    autoComplete="off"
                                    aria-hidden
                                />

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-xs font-bold text-black ps-1 mb-1 block">{t('name')}</label>
                                        <input
                                            type="text"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="w-full bg-gray-50 border border-black/10 rounded-xl p-3 text-black text-sm focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition-all placeholder:text-black/30"
                                            placeholder={t('namePlaceholder')}
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold text-black ps-1 mb-1 block">{t('company')}</label>
                                        <input
                                            type="text"
                                            value={company}
                                            onChange={(e) => setCompany(e.target.value)}
                                            className="w-full bg-gray-50 border border-black/10 rounded-xl p-3 text-black text-sm focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition-all placeholder:text-black/30"
                                            placeholder={t('companyPlaceholder')}
                                        />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-xs font-bold text-black ps-1 mb-1 block">{t('email')}</label>
                                        <input
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full bg-gray-50 border border-black/10 rounded-xl p-3 text-black text-sm focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition-all placeholder:text-black/30"
                                            placeholder={t('emailPlaceholder')}
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold text-black ps-1 mb-1 block">{t('phone')}</label>
                                        <input
                                            type="tel"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className="w-full bg-gray-50 border border-black/10 rounded-xl p-3 text-black text-sm focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition-all placeholder:text-black/30"
                                            placeholder={t('phonePlaceholder')}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs font-bold text-black ps-1 mb-1 block">{t('message')}</label>
                                    <textarea
                                        rows={4}
                                        required
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="w-full bg-gray-50 border border-black/10 rounded-xl p-3 text-black text-sm focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition-all placeholder:text-black/30 resize-none"
                                        placeholder={t('messagePlaceholder')}
                                    />
                                </div>

                                {submitError && (
                                    <p className="text-sm text-red-600 text-center">{submitError}</p>
                                )}

                                <div className="flex justify-stretch sm:justify-end pt-2">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full sm:w-auto justify-center px-8 sm:px-10 py-3 bg-primary text-white font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-primary/80 transition-all flex items-center gap-3 group disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? t('submitting') : t('submit')}
                                        <Send size={16} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
