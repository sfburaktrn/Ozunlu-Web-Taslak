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
import { openCookieSettings } from '@/components/common/CookieConsent';

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
    const tCookie = useTranslations('common.cookieConsent');
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
        { href: '/karla-mucadele' as const, label: tNav('karlaMucadele') },
        { href: '/satis-sonrasi' as const, label: tNav('satisSonrasi') },
        { href: '/iletisim' as const, label: tNav('iletisim') },
    ];

    return (
        <footer className="relative z-[40] bg-white text-black border-t border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 py-10 md:py-14">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] gap-10 md:gap-x-10 md:gap-y-12 lg:gap-20">
                    <div className="space-y-5 md:col-span-2 lg:col-span-1 md:pb-2 lg:pb-0 md:border-b md:border-gray-100 lg:border-0">
                        <div className="flex flex-wrap items-center gap-3">
                            <div className="relative w-32 sm:w-40 h-14 sm:h-16">
                                <Image
                                    src="/ozunlu-damper-logo.png"
                                    alt={t('logoAlt')}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xs uppercase tracking-[0.3em] text-black font-medium">Since 1977</span>
                        </div>
                        <p className="text-black text-sm leading-relaxed max-w-md md:max-w-2xl lg:max-w-md font-medium">
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

                    <div className="md:pr-4 lg:pr-0">
                        <h3 className="text-sm font-bold text-black mb-6 uppercase tracking-[0.12em] border-b border-primary/20 pb-2 inline-block">
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
                        <h3 className="text-sm font-bold text-black mb-6 uppercase tracking-[0.12em] border-b border-primary/20 pb-2 inline-block">
                            {t('contact')}
                        </h3>
                        <div className="space-y-4 text-sm text-black font-medium">
                            <div className="flex items-start gap-4 group">
                                <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-primary/5 transition-colors shrink-0">
                                    <MapPin size={18} className="text-[#000552]" />
                                </div>
                                <p className="leading-relaxed">{t('address')}</p>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-primary/5 transition-colors shrink-0">
                                    <Phone size={18} className="text-[#000552]" />
                                </div>
                                <a href="tel:+902125954646" className="hover:text-[#000552] transition-colors title-font font-bold">
                                    (0212) 595 46 46
                                </a>
                            </div>
                            {contactEmail && (
                                <div className="flex items-center gap-4 group">
                                    <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-primary/5 transition-colors shrink-0">
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
                <div className="container mx-auto px-4 md:px-6 py-5 md:py-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-4 lg:gap-8 text-xs md:text-[11px] lg:text-sm text-black font-medium">
                    <p className="text-center md:text-start text-black/70 md:shrink-0 md:whitespace-nowrap">
                        {t('copyright', { year })}
                    </p>
                    <nav className="flex flex-wrap items-center justify-center md:justify-end md:flex-nowrap gap-y-2">
                        {legalLinks.map((link, index) => (
                            <span key={link.pathname} className="inline-flex items-center shrink-0">
                                {index > 0 && (
                                    <span className="mx-1.5 md:mx-2 lg:mx-2.5 text-black/20 select-none" aria-hidden>
                                        ·
                                    </span>
                                )}
                                <NextLink
                                    href={getLocalizedPathname(locale, link.pathname)}
                                    className="rounded-md px-0.5 py-1 text-black/80 hover:text-[#000552] transition-colors whitespace-nowrap"
                                >
                                    {link.label}
                                </NextLink>
                            </span>
                        ))}
                        <span className="mx-1.5 md:mx-2 lg:mx-2.5 text-black/20 select-none" aria-hidden>
                            ·
                        </span>
                        <button
                            type="button"
                            onClick={openCookieSettings}
                            className="rounded-md px-0.5 py-1 text-black/80 hover:text-[#000552] transition-colors whitespace-nowrap shrink-0"
                        >
                            {tCookie('managePreferences')}
                        </button>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
