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
            setIsScrolled(window.scrollY > 0);
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
        // { href: "/kurumsal", label: "Kurumsal" },
        // { href: "/urunler", label: "Ürünler" },
        { href: "/damper", label: "Damper" },
        { href: "/yari-romork", label: "Yarı Römork" },
        { href: "/ek-ekipmanlar", label: "Ek Ekipmanlar" },
        { href: "/satis-sonrasi", label: "Satış Sonrası" },
        // { href: "/medya", label: "Medya" },
        // { href: "/kariyer", label: "Kariyer" },
        { href: "/iletisim", label: "İletişim" },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-[130] transition-all duration-300 ${mobileMenuOpen ? "bg-transparent border-transparent" : "bg-[rgba(251,251,253,0.8)] backdrop-blur-xl backdrop-saturate-[180%] border-b border-black/[0.08]"
                    }`}
            >
                <div className="container mx-auto px-6 h-[48px] flex items-center justify-center gap-x-[50px]">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex-shrink-0 relative z-50 flex items-center"
                    >
                        <div className="relative w-20 h-5">
                            <Image
                                src="/ozunlu-logo-new.png"
                                alt="Özünlü Damper"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-[50px]">
                        {navLinks.map((link) => (
                            <NavLink key={link.href} href={link.href} label={link.label} />
                        ))}
                    </div>

                    {/* Right Side - Language Selector */}
                    <div className="hidden lg:flex items-center relative">
                        <button
                            onClick={toggleLangMenu}
                            className="flex items-center gap-1 text-[12px] font-medium text-black/60 hover:text-black transition-colors"
                        >
                            {lang}
                            <ChevronDown size={10} className={`transition-transform duration-200 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
                        </button>

                        <AnimatePresence>
                            {isLangMenuOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 5 }}
                                    className="absolute right-0 top-full mt-2 w-16 bg-white/95 backdrop-blur-xl border border-black/10 rounded-lg shadow-xl overflow-hidden p-1"
                                >
                                    {['TR', 'EN'].map((l) => (
                                        <button
                                            key={l}
                                            onClick={() => selectLang(l)}
                                            className={`w-full text-center px-2 py-1.5 text-[11px] rounded-md transition-colors ${lang === l ? 'text-black bg-black/10' : 'text-black/60 hover:bg-black/5'}`}
                                        >
                                            {l}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Mobile Menu Toggle - Stays on top */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={`lg:hidden p-2 absolute right-6 z-[140] hover:bg-black/5 rounded-full transition-colors ${mobileMenuOpen ? 'text-white/90' : 'text-black/80'}`}
                        aria-label="Toggle Menu"
                    >
                        {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay - Outside nav for better stacking */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[120] lg:hidden bg-[#1d1d1f]/95 backdrop-blur-2xl overflow-hidden"
                    >
                        <div className="flex flex-col pt-24 px-10 h-full">
                            <div className="flex flex-col space-y-6">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: 0.1 + i * 0.05,
                                            ease: [0.4, 0, 0.2, 1]
                                        }}
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
                                        İletişim & Teklif Al
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

function NavLink({ href, label }: { href: string; label: string }) {
    return (
        <Link
            href={href}
            className="text-[13px] font-medium text-black/80 hover:text-black transition-opacity tracking-tight"
        >
            {label}
        </Link>
    );
}
