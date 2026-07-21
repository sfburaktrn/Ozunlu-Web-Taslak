'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { localeLabels, type Locale } from '@/i18n/routing';
import LocaleFlag from '@/components/common/LocaleFlag';
import LanguagePickerPanel from '@/components/common/LanguagePickerPanel';

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

    const languageMenuTitle =
        locale === 'en' ? t('languageMenu') : `${t('languageMenu')} · Language`;

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-[130] transition-all duration-300 ${mobileMenuOpen ? 'bg-transparent border-transparent' : 'bg-[rgba(251,251,253,0.72)] backdrop-blur-2xl backdrop-saturate-[180%] border-b border-black/[0.06]'}`}
            >
                <div className="container mx-auto px-4 sm:px-6 h-[48px] flex items-center justify-between lg:justify-center gap-x-5 xl:gap-x-9 2xl:gap-x-[50px]">
                    <Link href="/" className="flex-shrink-0 relative z-50 flex items-center">
                        <div className="relative w-20 h-9">
                            <Image
                                src="/ozunlu-damper-logo.webp"
                                alt={tLabels('logoAlt')}
                                fill
                                className="object-contain object-left"
                                sizes="80px"
                                loading="eager"
                            />
                        </div>
                    </Link>

                    <div className="hidden lg:flex items-center gap-x-5 xl:gap-x-8 2xl:gap-x-[50px] whitespace-nowrap">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-[11px] xl:text-[12px] 2xl:text-[13px] font-medium text-black/80 hover:text-black transition-opacity tracking-tight"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden lg:flex items-center relative" ref={langMenuRef}>
                        <button
                            type="button"
                            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                            className={`flex items-center gap-2 ps-2.5 pe-2.5 py-1.5 rounded-full border transition-all duration-300 ${
                                isLangMenuOpen
                                    ? 'border-black/12 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)]'
                                    : 'border-black/[0.08] bg-white/70 hover:bg-white hover:border-black/12 shadow-sm hover:shadow'
                            }`}
                            aria-expanded={isLangMenuOpen}
                            aria-haspopup="listbox"
                            aria-label={t('languageMenu')}
                        >
                            <LocaleFlag locale={locale} className="w-[18px] h-[12px]" />
                            <span className="text-[12px] font-semibold text-black/75 tracking-wide">
                                {localeLabels[locale]}
                            </span>
                            <ChevronDown
                                size={12}
                                className={`text-black/35 transition-transform duration-300 ${isLangMenuOpen ? 'rotate-180' : ''}`}
                            />
                        </button>

                        <AnimatePresence>
                            {isLangMenuOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8, scale: 0.94, filter: 'blur(4px)' }}
                                    animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, y: 8, scale: 0.96, filter: 'blur(2px)' }}
                                    transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
                                    className="absolute end-0 top-full mt-3 w-[min(320px,calc(100vw-2rem))] rounded-[1.35rem] border border-white/60 bg-white/80 backdrop-blur-3xl shadow-[0_24px_80px_rgba(0,0,0,0.18),0_0_0_1px_rgba(0,0,0,0.04)]"
                                >
                                    <LanguagePickerPanel
                                        currentLocale={locale}
                                        title={languageMenuTitle}
                                        onSelect={selectLocale}
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={`lg:hidden p-2 absolute end-3 sm:end-6 z-[140] hover:bg-black/5 rounded-full transition-colors ${mobileMenuOpen ? 'text-white/90' : 'text-black/80'}`}
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
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-[120] lg:hidden bg-[#07070f] overflow-hidden"
                    >
                        {/* Soft brand wash — no center glow */}
                        <div
                            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#000552]/55 via-[#07070f] to-[#07070f]"
                            aria-hidden
                        />
                        <div
                            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            aria-hidden
                        />

                        <div
                            className="relative flex h-full flex-col pt-[4.25rem] sm:pt-24 px-5 sm:px-8 md:px-12 md:max-w-3xl md:mx-auto overflow-y-auto overscroll-contain pb-[max(1.75rem,env(safe-area-inset-bottom))]"
                            data-lenis-prevent
                        >
                            <nav className="flex flex-col" aria-label="Mobile">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -16 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            delay: 0.06 + i * 0.045,
                                            duration: 0.35,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="group flex items-baseline gap-4 sm:gap-5 border-b border-white/[0.08] py-4 sm:py-5 md:py-6 transition-colors"
                                        >
                                            <span className="w-7 shrink-0 text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-white/35 group-hover:text-[rgb(185,162,25)] transition-colors">
                                                {String(i + 1).padStart(2, '0')}
                                            </span>
                                            <span className="text-[1.65rem] sm:text-[2rem] md:text-[2.35rem] font-semibold tracking-tight text-[#f5f5f7] group-hover:text-white transition-colors">
                                                {link.label}
                                            </span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.32, duration: 0.35 }}
                                className="mt-8 sm:mt-10"
                            >
                                <Link
                                    href="/iletisim"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] sm:text-base font-bold text-[#000552] shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    {t('mobileContactQuote')}
                                </Link>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.35 }}
                                className="mt-auto pt-10 sm:pt-12"
                            >
                                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
                                    <LanguagePickerPanel
                                        currentLocale={locale}
                                        title={languageMenuTitle}
                                        onSelect={selectLocale}
                                        variant="dark"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
