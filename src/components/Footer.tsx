'use client';

import Image from 'next/image';
import { Mail, MapPin, Phone, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';
import NextLink from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { getLocalizedPathname, type AppPathname } from '@/i18n/pathnames';
import { footerRichTextHandlers } from '@/i18n/richText';
import type { Locale } from '@/i18n/routing';
import { getPublicEmail } from '@/lib/siteEmails';
import EmailLink from '@/components/common/EmailLink';

const socials = [
    { href: 'https://www.linkedin.com/company/ozunlu-damper/', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://www.facebook.com/OzunluDamper/', icon: Facebook, label: 'Facebook' },
    { href: 'https://www.instagram.com/ozunludamper/', icon: Instagram, label: 'Instagram' },
    { href: 'https://www.youtube.com/@ozunludamper588', icon: Youtube, label: 'YouTube' },
];

export default function Footer() {
    const locale = useLocale() as Locale;
    const t = useTranslations('common.footer');
    const tNav = useTranslations('common.nav');
    const tLabels = useTranslations('common.labels');
    const year = new Date().getFullYear();
    const contactEmail = getPublicEmail('contact');

    const legalLinks: { pathname: AppPathname; label: string }[] = [
        { pathname: '/kvkk', label: t('kvkk') },
        { pathname: '/aydinlatma-metni', label: t('aydinlatmaMetni') },
        { pathname: '/cerez-politikasi', label: t('cerezPolitikasi') },
    ];

    const quickLinks = [
        { href: '/damper' as const, label: tNav('damper') },
        { href: '/yari-romork' as const, label: tNav('yariRomork') },
        { href: '/ek-ekipmanlar' as const, label: tNav('ekEkipmanlar') },
        { href: '/satis-sonrasi' as const, label: tNav('satisSonrasi') },
        { href: '/iletisim' as const, label: tNav('iletisim') },
    ];

    return (
        <footer className="bg-white text-black border-t border-gray-200">
            <div className="container mx-auto px-3 md:px-5 py-14">
                <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr] gap-10 lg:gap-20">
                    <div className="space-y-5">
                        <div className="flex items-center gap-3 -ms-6 md:-ms-8">
                            <div className="relative w-40 h-10">
                                <Image
                                    src="/ozunlu-logo-new.png"
                                    alt={t('logoAlt')}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xs uppercase tracking-[0.3em] text-black font-medium">Since 1977</span>
                        </div>
                        <p className="text-black text-sm leading-relaxed max-w-md font-medium">
                            {t.rich('about', footerRichTextHandlers)}
                        </p>
                        <div className="flex flex-wrap items-center gap-3">
                            {socials.map(({ href, icon: Icon, label }) => (
                                <a
                                    key={href}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 bg-gray-50 hover:bg-[#000552] hover:border-[#000552] hover:text-white transition-all duration-300 text-black"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="typo-eyebrow text-black mb-6 border-b border-primary/20 pb-2 inline-block">
                            {t('quickAccess')}
                        </h3>
                        <div className="space-y-3 text-sm text-black font-medium">
                            {quickLinks.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="flex items-center gap-2 hover:text-[#000552] hover:translate-x-1 rtl:hover:-translate-x-1 transition-all"
                                >
                                    <span className="h-px w-3 bg-black" />
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="typo-eyebrow text-black mb-6 border-b border-primary/20 pb-2 inline-block">
                            {t('contact')}
                        </h3>
                        <div className="space-y-4 text-sm text-black font-medium">
                            <div className="flex items-start gap-4 group">
                                <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-primary/5 transition-colors">
                                    <MapPin size={18} className="text-[#000552]" />
                                </div>
                                <p className="leading-relaxed">{t('address')}</p>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-primary/5 transition-colors">
                                    <Phone size={18} className="text-[#000552]" />
                                </div>
                                <a href="tel:+902125954646" className="hover:text-[#000552] transition-colors title-font font-bold">
                                    (0212) 595 46 46
                                </a>
                            </div>
                            {contactEmail && (
                                <div className="flex items-center gap-4 group">
                                    <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-primary/5 transition-colors">
                                        <Mail size={18} className="text-[#000552]" />
                                    </div>
                                    <EmailLink
                                        email={contactEmail}
                                        className="hover:text-[#000552] transition-colors"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-200 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-black font-medium">
                    <p>{t('copyright', { year })}</p>
                    <div className="flex items-center gap-6">
                        {legalLinks.map((link) => (
                            <NextLink
                                key={link.pathname}
                                href={getLocalizedPathname(locale, link.pathname)}
                                className="hover:text-[#000552] transition-colors"
                            >
                                {link.label}
                            </NextLink>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
