'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import LocaleFlag from '@/components/common/LocaleFlag';
import { locales, localeLabels, localeNames, type Locale } from '@/i18n/routing';

type Props = {
    currentLocale: Locale;
    title: string;
    onSelect: (locale: Locale) => void;
    variant?: 'light' | 'dark';
};

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.025, delayChildren: 0.04 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 6, scale: 0.96 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.22, ease: [0.4, 0, 0.2, 1] } },
};

export default function LanguagePickerPanel({ currentLocale, title, onSelect, variant = 'light' }: Props) {
    const dark = variant === 'dark';

    return (
        <div className="overflow-hidden">
            <div
                className={`px-4 pt-3.5 pb-3 ${dark ? 'border-b border-white/10' : 'border-b border-black/[0.06]'}`}
            >
                <p
                    className={`text-[11px] font-medium tracking-wide ${
                        dark ? 'text-white/50' : 'text-black/45'
                    }`}
                >
                    {title}
                </p>
            </div>

            <motion.div
                role="listbox"
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-3 gap-1.5 p-2.5"
            >
                {locales.map((l) => {
                    const active = currentLocale === l;
                    return (
                        <motion.button
                            key={l}
                            type="button"
                            role="option"
                            aria-selected={active}
                            variants={itemVariants}
                            onClick={() => onSelect(l)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`relative flex flex-col items-center justify-center gap-1.5 rounded-2xl px-2 py-3 text-center transition-colors duration-200 ${
                                active
                                    ? dark
                                        ? 'bg-white/14 ring-1 ring-white/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]'
                                        : 'bg-[#007AFF]/10 ring-1 ring-[#007AFF]/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]'
                                    : dark
                                      ? 'hover:bg-white/8'
                                      : 'hover:bg-black/[0.03]'
                            }`}
                        >
                            <LocaleFlag locale={l} className="w-7 h-[18px] rounded-[4px]" />
                            <span
                                className={`block w-full truncate text-[11px] font-semibold leading-tight ${
                                    active
                                        ? dark
                                            ? 'text-white'
                                            : 'text-[#007AFF]'
                                        : dark
                                          ? 'text-white/80'
                                          : 'text-black/75'
                                }`}
                            >
                                {localeNames[l]}
                            </span>
                            <span
                                className={`text-[9px] font-medium uppercase tracking-wider ${
                                    dark ? 'text-white/35' : 'text-black/35'
                                }`}
                            >
                                {localeLabels[l]}
                            </span>
                            {active && (
                                <span
                                    className={`absolute top-1.5 end-1.5 flex h-4 w-4 items-center justify-center rounded-full ${
                                        dark ? 'bg-white text-[#1d1d1f]' : 'bg-[#007AFF] text-white'
                                    }`}
                                >
                                    <Check size={9} strokeWidth={3} />
                                </span>
                            )}
                        </motion.button>
                    );
                })}
            </motion.div>
        </div>
    );
}
