'use client';

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Clock, Linkedin, Facebook, Instagram, Youtube, ArrowUpRight } from "lucide-react";

const quickLinks = [
    { href: "/damper", label: "Damper" },
    { href: "/yari-romork", label: "Yarı Römork" },
    { href: "/ek-ekipmanlar", label: "Ek Ekipmanlar" },
    { href: "/satis-sonrasi", label: "Satış Sonrası" },
    { href: "/iletisim", label: "İletişim" },
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
        <footer className="bg-white text-black border-t border-gray-200">
            <div className="container mx-auto px-3 md:px-5 py-14">
                <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr] gap-10 lg:gap-20">
                    {/* Brand / About */}
                    <div className="space-y-5">
                        <div className="flex items-center gap-3 -ml-6 md:-ml-8">
                            <div className="relative w-40 h-10">
                                <Image
                                    src="/ozunlu-logo-new.png"
                                    alt="Özünlü Damper Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xs uppercase tracking-[0.3em] text-black font-medium">Since 1977</span>
                        </div>
                        <p className="text-black text-sm leading-relaxed max-w-md font-medium">
                            Ağır hizmet taşımacılık çözümlerinde 45 yılı aşkın deneyim. Tasarımdan üretime, satış sonrası destekten dijital servislerimize kadar uçtan uca güven inşa ediyoruz.
                        </p>
                        <div className="flex flex-wrap items-center gap-3">
                            {socials.map(({ href, icon: Icon, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    aria-label={label}
                                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 bg-gray-50 hover:bg-[#000552] hover:border-[#000552] hover:text-white transition-all duration-300 text-black"
                                >
                                    <Icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-sm font-bold text-black mb-6 uppercase tracking-[0.12em] border-b border-primary/20 pb-2 inline-block">Hızlı Erişim</h3>
                        <div className="space-y-3 text-sm text-black font-medium">
                            {quickLinks.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="flex items-center gap-2 hover:text-[#000552] hover:translate-x-1 transition-all"
                                >
                                    <span className="h-px w-3 bg-black" />
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-bold text-black mb-6 uppercase tracking-[0.12em] border-b border-primary/20 pb-2 inline-block">İletişim</h3>
                        <div className="space-y-4 text-sm text-black font-medium">
                            <div className="flex items-start gap-4 group">
                                <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-primary/5 transition-colors">
                                    <MapPin size={18} className="text-[#000552]" />
                                </div>
                                <p className="leading-relaxed">Yayla, Habibler Pirinççi Köyü Yolu No:62, 34270 Sultangazi / İstanbul</p>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-primary/5 transition-colors">
                                    <Phone size={18} className="text-[#000552]" />
                                </div>
                                <Link href="tel:+902125954646" className="hover:text-[#000552] transition-colors title-font font-bold">(0212) 595 46 46</Link>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-primary/5 transition-colors">
                                    <Mail size={18} className="text-[#000552]" />
                                </div>
                                <Link href="mailto:info@ozunlu.com" className="hover:text-[#000552] transition-colors">info@ozunlu.com</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-200 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-black font-medium">
                    <p>© {year} Özünlü Damper. Tüm hakları saklıdır.</p>
                    <div className="flex items-center gap-6">
                        <Link href="/kvkk" className="hover:text-[#000552] transition-colors">KVKK</Link>
                        <Link href="/aydinlatma-metni" className="hover:text-[#000552] transition-colors">Aydınlatma Metni</Link>
                        <Link href="/cerez-politikasi" className="hover:text-[#000552] transition-colors">Çerez Politikası</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
