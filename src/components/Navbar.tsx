"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-4"
                    : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link
                    href="/"
                    className={`text-2xl font-bold tracking-tighter ${isScrolled ? "text-slate-900" : "text-white"
                        }`}
                >
                    ÖZÜNLÜ
                </Link>

                <div className="hidden md:flex items-center space-x-8">
                    <NavLink href="/hakkimizda" label="Hakkımızda" isScrolled={isScrolled} />
                    <NavLink href="/urunler" label="Ürünler" isScrolled={isScrolled} />
                    <NavLink href="/iletisim" label="İletişim" isScrolled={isScrolled} />
                </div>

                <button className="md:hidden p-2 text-gray-600">
                    {/* Mobile menu icon placeholder */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${isScrolled ? "text-slate-900" : "text-white"}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}

function NavLink({ href, label, isScrolled }: { href: string; label: string; isScrolled: boolean }) {
    return (
        <Link
            href={href}
            className={`text-sm font-medium transition-colors hover:text-blue-500 ${isScrolled ? "text-slate-600" : "text-white/90"
                }`}
        >
            {label}
        </Link>
    )
}
