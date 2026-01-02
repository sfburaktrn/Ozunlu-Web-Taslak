'use client';

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Clock, Linkedin, Facebook, Instagram, Youtube, ArrowUpRight } from "lucide-react";

const quickLinks = [
    { href: "/kurumsal", label: "Kurumsal" },
    { href: "/urunler", label: "Ürünler" },
    { href: "/satis-sonrasi", label: "Satış Sonrası" },
    { href: "/medya", label: "Medya" },
    { href: "/kariyer", label: "Kariyer" },
    { href: "/iletisim", label: "İletişim" },
];

const services = [
    "Ağır hizmet damper çözümleri",
    "Özel proje tasarım ve üretim",
    "Satış sonrası servis ve yedek parça",
    "Uluslararası lojistik desteği",
];

const socials = [
    { href: "https://www.linkedin.com/company/ozunlu-damper/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://www.facebook.com/OzunluDamper/", icon: Facebook, label: "Facebook" },
    { href: "https://www.instagram.com/ozunludamper/", icon: Instagram, label: "Instagram" },
    { href: "https://www.youtube.com/@ozunludamper588", icon: Youtube, label: "YouTube" },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#060608] text-white border-t border-white/10">
            <div className="container mx-auto px-3 md:px-5 py-14">
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_1fr] gap-10 lg:gap-12">
                    {/* Brand / About */}
                    <div className="space-y-5">
                        <div className="flex items-center gap-3 -ml-6 md:-ml-8">
                            <div className="relative w-40 h-10">
                                <Image
                                    src="/ozunlu-logo.png"
                                    alt="Özünlü Damper Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xs uppercase tracking-[0.3em] text-white">Since 1977</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Ağır hizmet taşımacılık çözümlerinde 45 yılı aşkın deneyim. Tasarımdan üretime, satış sonrası destekten dijital servislerimize kadar uçtan uca güven inşa ediyoruz.
                        </p>
                        <div className="flex flex-wrap items-center gap-3">
                            {socials.map(({ href, icon: Icon, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    aria-label={label}
                                    className="w-10 h-10 flex items-center justify-center rounded-full border border-white/15 bg-white/5 hover:border-primary hover:text-white transition-colors"
                                >
                                    <Icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-200 mb-4 uppercase tracking-[0.12em]">Menü</h3>
                            <div className="space-y-3 text-sm text-gray-300">
                                {quickLinks.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="flex items-center gap-2 hover:text-white transition-colors"
                                    >
                                        <span className="h-px w-4 bg-white/25" />
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-200 mb-4 uppercase tracking-[0.12em]">Hizmetler</h3>
                            <div className="space-y-3 text-sm text-gray-300">
                                {services.map((item) => (
                                    <div key={item} className="flex items-center gap-2">
                                        <ArrowUpRight size={16} className="text-white" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-gray-200 mb-2 uppercase tracking-[0.12em]">İletişim</h3>
                        <div className="space-y-3 text-sm text-gray-300">
                            <div className="flex items-start gap-3">
                                <MapPin size={18} className="text-white mt-0.5" />
                                <p>Yayla, Habibler Pirinççi Köyü Yolu No:62, 34270 Sultangazi / İstanbul</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={18} className="text-white" />
                                <Link href="tel:+902125954646" className="hover:text-white transition-colors">(0212) 595 46 46</Link>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={18} className="text-white" />
                                <Link href="mailto:info@ozunlu.com" className="hover:text-white transition-colors">info@ozunlu.com</Link>
                            </div>
                            <div className="flex items-start gap-3">
                                <Clock size={18} className="text-white mt-0.5" />
                                <div>
                                    <p>Hafta içi & Cumartesi</p>
                                    <p className="font-semibold text-white">09:00 - 18:30</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10 bg-black/60">
                <div className="container mx-auto px-4 md:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-400">
                    <p>© {year} Özünlü Damper. Tüm hakları saklıdır.</p>
                    <div className="flex items-center gap-4">
                        <Link href="/kvkk" className="hover:text-white transition-colors">KVKK</Link>
                        <Link href="/aydinlatma-metni" className="hover:text-white transition-colors">Aydınlatma Metni</Link>
                        <Link href="/cerez-politikasi" className="hover:text-white transition-colors">Çerez Politikası</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
