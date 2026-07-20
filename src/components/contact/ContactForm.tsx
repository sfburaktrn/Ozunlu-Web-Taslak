'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Clock, Check, ArrowUpRight } from 'lucide-react';
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

const fieldClass =
    'w-full bg-white border border-[#000552]/12 rounded-xl px-3.5 py-2.5 text-[#0a0a1a] text-sm focus:border-[#000552] focus:ring-2 focus:ring-[#000552]/15 focus:outline-none transition-all placeholder:text-[#000552]/30';

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
        <section className="w-full max-w-[1600px] mx-auto min-w-0">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border border-[#000552]/10 shadow-[0_24px_80px_-32px_rgba(0,5,82,0.35)]"
            >
                <motion.div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(0,5,82,0.08),_transparent_50%)]" />

                <motion.div className="relative grid grid-cols-1 lg:grid-cols-[0.95fr_1.15fr] lg:max-h-[calc(100svh-5rem)] overflow-hidden min-w-0">
                    {/* Sol: kurumsal bilgi paneli */}
                    <motion.div className="relative bg-[#000552] text-white px-5 py-5 sm:px-7 sm:py-6 md:px-8 md:py-7 flex flex-col overflow-hidden min-h-0 min-w-0">
                        <div className="pointer-events-none absolute inset-0 overflow-hidden">
                            <div className="absolute -top-24 -right-16 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
                        </div>
                        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/35 to-transparent" />

                        <div className="relative z-10 flex flex-col h-full gap-4 sm:gap-5 min-h-0">
                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/80 mb-2">
                                    Özünlü
                                </p>
                                <h1 className="text-2xl sm:text-3xl md:text-[2.1rem] font-bold leading-[1.1] tracking-tight mb-2">
                                    {t('title')}
                                </h1>
                                <p className="text-white/70 text-sm leading-relaxed max-w-md">
                                    {t('subtitle')}
                                </p>
                            </div>

                            <div>
                                <h2 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45 mb-2.5">
                                    {t('headOffice')}
                                </h2>
                                <ul className="space-y-0.5">
                                    <li className="flex items-start gap-3 rounded-xl px-2.5 py-2 hover:bg-white/[0.06] transition-colors">
                                        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 border border-white/10">
                                            <MapPin size={15} className="text-white" />
                                        </span>
                                        <p className="text-sm text-white/80 leading-snug pt-1">
                                            {t('address')}
                                        </p>
                                    </li>

                                    <li>
                                        <a
                                            href="tel:+902125954646"
                                            className="flex items-center gap-3 rounded-xl px-2.5 py-2 hover:bg-white/[0.06] transition-colors group"
                                        >
                                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 border border-white/10">
                                                <Phone size={15} className="text-white" />
                                            </span>
                                            <div className="min-w-0 flex-1">
                                                <p className="text-[10px] uppercase tracking-[0.18em] text-white/45 font-semibold">
                                                    {t('phone')}
                                                </p>
                                                <p className="text-sm font-semibold text-white group-hover:text-white/80 transition-colors">
                                                    (0212) 595 46 46
                                                </p>
                                            </div>
                                            <ArrowUpRight
                                                size={15}
                                                className="text-white/30 group-hover:text-white/70 transition-colors shrink-0"
                                            />
                                        </a>
                                    </li>

                                    {contactEmail && (
                                        <li className="flex items-center gap-3 rounded-xl px-2.5 py-2 hover:bg-white/[0.06] transition-colors">
                                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 border border-white/10">
                                                <Mail size={15} className="text-white" />
                                            </span>
                                            <div className="min-w-0">
                                                <p className="text-[10px] uppercase tracking-[0.18em] text-white/45 font-semibold">
                                                    {t('email')}
                                                </p>
                                                <EmailLink
                                                    email={contactEmail}
                                                    className="text-sm font-semibold text-white hover:text-white/80 transition-colors break-all"
                                                />
                                            </div>
                                        </li>
                                    )}

                                    <li className="flex items-center gap-3 rounded-xl px-2.5 py-2">
                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 border border-white/10">
                                            <Clock size={15} className="text-white" />
                                        </span>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-[0.18em] text-white/45 font-semibold">
                                                {t('hours')}
                                            </p>
                                            <p className="text-sm font-semibold text-white/90">
                                                {t('hoursValue')}
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-auto pt-1 hidden lg:block">
                                <div className="relative h-28 rounded-xl overflow-hidden border border-white/15 shadow-lg shadow-black/30">
                                    <iframe
                                        src={getMapEmbedUrl(locale)}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title={t('mapTitle')}
                                        className="grayscale-[30%] contrast-[1.05] w-full max-w-full block"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Sağ: form */}
                    <div className="bg-[#f7f7f9] px-5 py-5 sm:px-7 sm:py-6 md:px-8 md:py-7 flex flex-col justify-center overflow-hidden min-h-0 min-w-0">
                        {isSuccess ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.96 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center text-center min-h-[240px] px-4"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-[#000552]/10 border border-[#000552]/15 flex items-center justify-center mb-5">
                                    <Check className="text-[#000552]" size={28} strokeWidth={2.5} />
                                </div>
                                <h2 className="text-2xl font-bold text-[#000552] mb-2">{t('successTitle')}</h2>
                                <p className="text-[#000552]/60 mb-8 max-w-sm">{t('successMessage')}</p>
                                <button
                                    type="button"
                                    onClick={() => setIsSuccess(false)}
                                    className="px-8 py-3.5 bg-[#000552] text-white font-semibold text-sm rounded-xl hover:bg-[#000552]/90 transition-all"
                                >
                                    {t('submit')}
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-3.5 w-full max-w-xl mx-auto lg:mx-0 lg:max-w-none">
                                <div className="mb-1">
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#000552]/45 mb-1">
                                        {t('submit')}
                                    </p>
                                    <h2 className="text-lg sm:text-xl font-bold text-[#000552] tracking-tight">
                                        {t('subtitle')}
                                    </h2>
                                </div>

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

                                <div className="grid sm:grid-cols-2 gap-3">
                                    <div>
                                        <label className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#000552]/55 ps-0.5 mb-1.5 block">
                                            {t('name')}
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className={fieldClass}
                                            placeholder={t('namePlaceholder')}
                                        />
                                    </div>
                                    <div>
                                        <label className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#000552]/55 ps-0.5 mb-1.5 block">
                                            {t('company')}
                                        </label>
                                        <input
                                            type="text"
                                            value={company}
                                            onChange={(e) => setCompany(e.target.value)}
                                            className={fieldClass}
                                            placeholder={t('companyPlaceholder')}
                                        />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-3">
                                    <div>
                                        <label className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#000552]/55 ps-0.5 mb-1.5 block">
                                            {t('email')}
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className={fieldClass}
                                            placeholder={t('emailPlaceholder')}
                                        />
                                    </div>
                                    <div>
                                        <label className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#000552]/55 ps-0.5 mb-1.5 block">
                                            {t('phone')}
                                        </label>
                                        <input
                                            type="tel"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className={fieldClass}
                                            placeholder={t('phonePlaceholder')}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#000552]/55 ps-0.5 mb-1.5 block">
                                        {t('message')}
                                    </label>
                                    <textarea
                                        rows={3}
                                        required
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className={`${fieldClass} resize-none`}
                                        placeholder={t('messagePlaceholder')}
                                    />
                                </div>

                                {submitError && (
                                    <p className="text-sm text-red-600 text-center sm:text-start">{submitError}</p>
                                )}

                                <div className="pt-1">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full sm:w-auto inline-flex justify-center items-center gap-2.5 px-7 py-3 bg-[#000552] text-white font-semibold text-sm rounded-xl hover:bg-[#000442] hover:-translate-y-0.5 transition-all shadow-lg shadow-[#000552]/25 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 group"
                                    >
                                        {isSubmitting ? t('submitting') : t('submit')}
                                        <Send
                                            size={16}
                                            className="group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform"
                                        />
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
