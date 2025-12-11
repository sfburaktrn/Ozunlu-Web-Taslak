'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, Sun, Moon } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [lang, setLang] = useState('TR');
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        // Initial check or preference logic could go here
        if (typeof document !== 'undefined' && document.documentElement.classList.contains('dark')) {
            setIsDark(true);
        } else {
            setIsDark(false);
        }

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when the mobile menu is open to prevent background scrolling.
    useEffect(() => {
        if (typeof document === "undefined") return;
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = mobileMenuOpen ? "hidden" : originalOverflow || "";
        return () => {
            document.body.style.overflow = originalOverflow || "";
        };
    }, [mobileMenuOpen]);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            setIsDark(true);
        }
    };

    const navLinks = [
        { href: "/kurumsal", label: "KURUMSAL" },
        { href: "/urunler", label: "ÜRÜNLER" },
        { href: "/cozumler", label: "ÇÖZÜMLER" },
        { href: "/teknoloji", label: "TEKNOLOJİ" },
        { href: "/medya", label: "MEDYA" },
        { href: "/kariyer", label: "KARİYER" },
        { href: "/iletisim", label: "İLETİŞİM" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-[120] transition-all duration-300 ${isScrolled || mobileMenuOpen
                ? "bg-black backdrop-blur-md shadow-lg border-b border-white/10 py-4"
                : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-3 md:px-5 flex items-center justify-between">
                <Link
                    href="/"
                    className="relative z-50 transition-transform hover:scale-105 -ml-6 md:-ml-8"
                >
                    <div className="relative w-40 h-10 md:w-48 md:h-12">
                        <Image
                            src="/ozunlu-logo.png"
                            alt="Özünlü Damper Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <NavLink key={link.href} href={link.href} label={link.label} />
                    ))}

                    {/* Language & Theme Controls */}
                    <div className="flex items-center gap-4 border-l border-white/20 pl-6 ml-2">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="text-gray-400 hover:text-primary transition-colors"
                        >
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </button>

                        {/* Language */}
                        <div className="flex items-center gap-2">
                            <Globe size={16} className="text-primary" />
                            <button
                                onClick={() => setLang('TR')}
                                className={`text-xs font-bold transition-colors ${lang === 'TR' ? 'text-white' : 'text-gray-500 hover:text-white'}`}
                            >
                                TR
                            </button>
                            <span className="text-gray-600 text-[10px]">|</span>
                            <button
                                onClick={() => setLang('EN')}
                                className={`text-xs font-bold transition-colors ${lang === 'EN' ? 'text-white' : 'text-gray-500 hover:text-white'}`}
                            >
                                EN
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="lg:hidden p-2 text-white z-50"
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="fixed inset-0 bg-black opacity-100 z-[120] lg:hidden"
                                onClick={() => setMobileMenuOpen(false)}
                            />

                            {/* Drawer */}
                            <motion.aside
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "100%" }}
                                transition={{ type: "tween", duration: 0.3 }}
                                className="fixed top-0 right-0 h-full w-full bg-black z-[130] lg:hidden flex flex-col"
                            >
                                <div className="flex items-center justify-between px-6 pt-5 pb-0 border-b border-white/10">
                                    <Link
                                        href="/"
                                        className="relative w-36 h-10 -ml-3"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <Image
                                            src="/ozunlu-logo.png"
                                            alt="Özünlü Damper Logo"
                                            fill
                                            className="object-contain"
                                            priority
                                        />
                                    </Link>
                                    <button
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="p-2 text-white hover:text-primary transition-colors"
                                        aria-label="Menüyü kapat"
                                    >
                                        <X size={26} />
                                    </button>
                                </div>

                                {/* Quick actions (theme + language) */}
                                <div className="px-6 py-4 bg-black border-b border-white/10 flex items-center justify-between gap-4">
                                    <button
                                        onClick={toggleTheme}
                                        className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors"
                                    >
                                        {isDark ? <><Sun size={18} /> Aydınlık Mod</> : <><Moon size={18} /> Karanlık Mod</>}
                                    </button>
                                    <div className="flex items-center gap-3 text-white">
                                        <Globe size={18} className="text-primary" />
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => setLang('TR')}
                                                className={`text-sm font-black ${lang === 'TR' ? 'text-primary' : 'text-gray-400'}`}
                                            >
                                                TR
                                            </button>
                                            <span className="text-gray-600">/</span>
                                            <button
                                                onClick={() => setLang('EN')}
                                                className={`text-sm font-black ${lang === 'EN' ? 'text-primary' : 'text-gray-400'}`}
                                            >
                                                EN
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1 px-6 pt-6 pb-8 flex flex-col items-center justify-start space-y-8 bg-black">
                                    <div className="flex flex-col items-center space-y-4 w-full">
                                        {navLinks.map((link) => (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className="text-xl font-bold text-white tracking-[0.08em] px-4 py-2 rounded-lg hover:text-primary transition-colors"
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                    </div>

                                    <Link
                                        href="/iletisim"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="w-full max-w-xs text-center bg-primary text-black font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                                    >
                                        Teklif Al
                                    </Link>
                                </div>
                            </motion.aside>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}

function NavLink({ href, label }: { href: string; label: string }) {
    return (
        <Link
            href={href}
            className="text-sm font-bold text-gray-300 hover:text-primary transition-colors tracking-wider"
        >
            {label}
        </Link>
    );
}
