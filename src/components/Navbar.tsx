'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [lang, setLang] = useState('TR');
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

    const toggleLangMenu = () => setIsLangMenuOpen(!isLangMenuOpen);
    const selectLang = (language: string) => {
        setLang(language);
        setIsLangMenuOpen(false);
    };

    useEffect(() => {
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



    const navLinks = [
        { href: "/kurumsal", label: "KURUMSAL" },
        { href: "/urunler", label: "ÜRÜNLER" },
        { href: "/satis-sonrasi", label: "SATIŞ SONRASI" },
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


                        {/* Language */}
                        {/* Language */}
                        <div className="relative">
                            <button
                                onClick={toggleLangMenu}
                                className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
                            >
                                <Globe size={18} />
                                <span className="text-sm font-bold">{lang}</span>
                                <ChevronDown size={14} className={`transition-transform duration-200 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {isLangMenuOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute right-0 mt-2 w-24 bg-black border border-white/20 rounded-lg shadow-xl overflow-hidden py-1 z-50"
                                    >
                                        {['TR', 'EN'].map((l) => (
                                            <button
                                                key={l}
                                                onClick={() => selectLang(l)}
                                                className={`w-full text-left px-4 py-2 text-sm font-bold hover:bg-white/10 transition-colors ${lang === l ? 'text-primary' : 'text-white'}`}
                                            >
                                                {l}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
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
                                        className="p-2 text-white hover:text-white transition-colors"
                                        aria-label="Menüyü kapat"
                                    >
                                        <X size={26} />
                                    </button>
                                </div>

                                {/* Quick actions (theme + language) */}
                                <div className="px-6 py-4 bg-black border-b border-white/10 flex items-center justify-between gap-4">

                                    <div className="flex items-center gap-3 text-white">
                                        <div className="relative">
                                            <button
                                                onClick={toggleLangMenu}
                                                className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors px-3 py-2 rounded-lg bg-white/5"
                                            >
                                                <Globe size={18} />
                                                <span className="text-sm font-bold">{lang}</span>
                                                <ChevronDown size={14} className={`transition-transform duration-200 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
                                            </button>

                                            <AnimatePresence>
                                                {isLangMenuOpen && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: 10 }}
                                                        className="absolute left-0 mt-2 w-full min-w-[100px] bg-white/10 border border-white/20 rounded-lg shadow-xl overflow-hidden py-1 z-50"
                                                    >
                                                        {['TR', 'EN'].map((l) => (
                                                            <button
                                                                key={l}
                                                                onClick={() => selectLang(l)}
                                                                className={`w-full text-left px-4 py-2 text-sm font-bold hover:bg-white/10 transition-colors ${lang === l ? 'text-primary' : 'text-white'}`}
                                                            >
                                                                {l}
                                                            </button>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
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
                                                className="text-xl font-bold text-white tracking-[0.08em] px-4 py-2 rounded-lg hover:text-white transition-colors"
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                    </div>

                                    <Link
                                        href="/iletisim"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="w-full max-w-xs text-center bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
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
            className="text-sm font-bold text-gray-300 hover:text-white transition-colors tracking-wider"
        >
            {label}
        </Link>
    );
}
