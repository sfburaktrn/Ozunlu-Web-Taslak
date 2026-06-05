'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Check } from 'lucide-react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { locales, localeLabels, localeNames, type Locale } from '@/i18n/routing';
import LocaleFlag from '@/components/common/LocaleFlag';

export default function Navbar() {
    const t = useTranslations('common.nav');
    const tLabels = useTranslations('common.labels');
    const locale = useLocale() as Locale;
    const pathname = usePathname();
    const router = useRouter();

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const langMenuRef = useRef<HTMLDivElement>(null);

    const navLinks = [
        { href: '/damper' as const, label: t('damper') },
        { href: '/yari-romork' as const, label: t('yariRomork') },
        { href: '/ek-ekipmanlar' as const, label: t('ekEkipmanlar') },
        { href: '/satis-sonrasi' as const, label: t('satisSonrasi') },
        { href: '/iletisim' as const, label: t('iletisim') },
    ];

    const selectLocale = (nextLocale: Locale) => {
        router.replace(pathname, { locale: nextLocale });
        setIsLangMenuOpen(false);
        setMobileMenuOpen(false);
        document.cookie = `NEXT_LOCALE=${nextLocale};path=/;max-age=31536000;SameSite=Lax`;
    };

    useEffect(() => {
        const handleScroll = () => {};
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (typeof document === 'undefined') return;
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = mobileMenuOpen ? 'hidden' : originalOverflow || '';
        return () => {
            document.body.style.overflow = originalOverflow || '';
        };
    }, [mobileMenuOpen]);

    useEffect(() => {
        if (!isLangMenuOpen) return;
        const handleClickOutside = (e: MouseEvent) => {
            if (langMenuRef.current && !langMenuRef.current.contains(e.target as Node)) {
                setIsLangMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isLangMenuOpen]);

    const langButtonClass = (active: boolean, dark = false) =>
        `flex items-center gap-2.5 w-full px-3 py-2.5 rounded-xl text-start transition-all duration-200 ${
            active
                ? dark
                    ? 'bg-white/15 text-white'
                    : 'bg-[#000552]/8 text-[#000552]'
                : dark
                  ? 'text-white/70 hover:bg-white/10 hover:text-white'
                  : 'text-black/70 hover:bg-black/[0.04] hover:text-black'
        }`;

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-[130] transition-all duration-300 ${mobileMenuOpen ? 'bg-transparent border-transparent' : 'bg-[rgba(251,251,253,0.8)] backdrop-blur-xl backdrop-saturate-[180%] border-b border-black/[0.08]'}`}
            >
                <div className="container mx-auto px-6 h-[48px] flex items-center justify-center gap-x-[50px]">
                    <Link href="/" className="flex-shrink-0 relative z-50 flex items-center">
                        <div className="relative w-20 h-5">
                            <Image
                                src="/ozunlu-logo-new.png"
                                alt={tLabels('logoAlt')}
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                    </Link>

                    <div className="hidden lg:flex items-center space-x-[50px]">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-[13px] font-medium text-black/80 hover:text-black transition-opacity tracking-tight"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden lg:flex items-center relative" ref={langMenuRef}>
                        <button
                            type="button"
                            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                            className="flex items-center gap-2 ps-2.5 pe-2 py-1.5 rounded-full border border-black/10 bg-white/60 hover:bg-white hover:border-black/15 shadow-sm hover:shadow transition-all duration-200"
                            aria-expanded={isLangMenuOpen}
                            aria-haspopup="listbox"
                            aria-label="Language"
                        >
                            <LocaleFlag locale={locale} />
                            <span className="text-[12px] font-semibold text-black/80 tracking-wide">
                                {localeLabels[locale]}
                            </span>
                            <ChevronDown
                                size={12}
                                className={`text-black/40 transition-transform duration-200 ${isLangMenuOpen ? 'rotate-180' : ''}`}
                            />
                        </button>

                        <AnimatePresence>
                            {isLangMenuOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                                    transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
                                    className="absolute end-0 top-full mt-2 w-[200px] bg-white/95 backdrop-blur-2xl border border-black/8 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] overflow-hidden p-1.5"
                                    role="listbox"
                                >
                                    <p className="px-3 pt-2 pb-1 text-[10px] font-bold uppercase tracking-[0.14em] text-black/35">
                                        Dil / Language
                                    </p>
                                    {locales.map((l) => (
                                        <button
                                            key={l}
                                            type="button"
                                            role="option"
                                            aria-selected={locale === l}
                                            onClick={() => selectLocale(l)}
                                            className={langButtonClass(locale === l)}
                                        >
                                            <LocaleFlag locale={l} />
                                            <span className="flex-1 min-w-0">
                                                <span className="block text-[12px] font-semibold leading-tight">
                                                    {localeNames[l]}
                                                </span>
                                                <span className="block text-[10px] text-black/40 font-medium mt-0.5">
                                                    {localeLabels[l]}
                                                </span>
                                            </span>
                                            {locale === l && (
                                                <Check size={14} className="text-[#000552] shrink-0" strokeWidth={2.5} />
                                            )}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={`lg:hidden p-2 absolute end-6 z-[140] hover:bg-black/5 rounded-full transition-colors ${mobileMenuOpen ? 'text-white/90' : 'text-black/80'}`}
                        aria-label="Toggle Menu"
                    >
                        {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[120] lg:hidden bg-[#1d1d1f]/95 backdrop-blur-2xl overflow-hidden"
                    >
                        <div className="flex flex-col pt-24 px-10 h-full overflow-y-auto pb-10">
                            <div className="flex flex-col space-y-6">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + i * 0.05, ease: [0.4, 0, 0.2, 1] }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="text-[28px] font-semibold text-[#f5f5f7] hover:text-white block border-b border-white/5 pb-4"
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + navLinks.length * 0.05 }}
                                    className="pt-4"
                                >
                                    <Link
                                        href="/iletisim"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-[19px] font-medium text-[#2997ff] hover:underline"
                                    >
                                        {t('mobileContactQuote')}
                                    </Link>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + (navLinks.length + 1) * 0.05 }}
                                    className="pt-8 border-t border-white/10"
                                >
                                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/40 mb-3">
                                        Dil / Language
                                    </p>
                                    <div className="grid grid-cols-2 gap-2">
                                        {locales.map((l) => (
                                            <button
                                                key={l}
                                                type="button"
                                                onClick={() => selectLocale(l)}
                                                className={langButtonClass(locale === l, true)}
                                            >
                                                <LocaleFlag locale={l} />
                                                <span className="flex-1 min-w-0 text-start">
                                                    <span className="block text-[12px] font-semibold leading-tight">
                                                        {localeNames[l]}
                                                    </span>
                                                </span>
                                                {locale === l && (
                                                    <Check size={13} className="text-white shrink-0" strokeWidth={2.5} />
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
