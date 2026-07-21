'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';
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
        transition: { staggerChildren: 0.02, delayChildren: 0.03 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 6, scale: 0.96 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] as const },
    },
};

export default function LanguagePickerPanel({ currentLocale, title, onSelect, variant = 'light' }: Props) {
    const dark = variant === 'dark';
    const [open, setOpen] = useState(false);

    if (dark) {
        return (
            <div className="overflow-hidden">
                <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-3 px-4 py-3.5 sm:px-5 text-start transition-colors hover:bg-white/[0.04]"
                >
                    <div className="flex items-center gap-3 min-w-0">
                        <LocaleFlag locale={currentLocale} className="w-7 h-[18px] rounded-[3px] shrink-0" />
                        <div className="min-w-0">
                            <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/40">
                                {title}
                            </p>
                            <p className="mt-0.5 truncate text-[15px] font-semibold text-white">
                                {localeNames[currentLocale]}
                                <span className="ms-2 text-[11px] font-medium uppercase tracking-wider text-white/35">
                                    {localeLabels[currentLocale]}
                                </span>
                            </p>
                        </div>
                    </div>
                    <ChevronDown
                        size={18}
                        className={`shrink-0 text-white/45 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                    />
                </button>

                <AnimatePresence initial={false}>
                    {open && (
                        <motion.div
                            key="lang-list"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                        >
                            <div className="h-px bg-white/10" />
                            <div
                                role="listbox"
                                className="grid grid-cols-1 gap-0.5 p-2 sm:grid-cols-2"
                            >
                                {locales.map((l) => {
                                    const active = currentLocale === l;
                                    return (
                                        <button
                                            key={l}
                                            type="button"
                                            role="option"
                                            aria-selected={active}
                                            onClick={() => {
                                                onSelect(l);
                                                setOpen(false);
                                            }}
                                            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-start transition-colors ${
                                                active
                                                    ? 'bg-white/10 text-white'
                                                    : 'text-white/75 hover:bg-white/[0.06] hover:text-white'
                                            }`}
                                        >
                                            <LocaleFlag locale={l} className="w-6 h-4 rounded-[2px] shrink-0" />
                                            <span className="min-w-0 flex-1 truncate text-sm font-medium">
                                                {localeNames[l]}
                                            </span>
                                            <span className="text-[10px] font-semibold uppercase tracking-wider text-white/30">
                                                {localeLabels[l]}
                                            </span>
                                            {active && (
                                                <Check size={14} className="shrink-0 text-white/80" strokeWidth={2.5} />
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    }

    return (
        <div className="overflow-hidden">
            <div className="px-4 pt-3.5 pb-3 border-b border-black/[0.06]">
                <p className="text-[11px] font-medium tracking-wide text-black/45">{title}</p>
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
                                    ? 'bg-[#007AFF]/10 ring-1 ring-[#007AFF]/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]'
                                    : 'hover:bg-black/[0.03]'
                            }`}
                        >
                            <LocaleFlag locale={l} className="w-7 h-[18px] rounded-[4px]" />
                            <span
                                className={`block w-full truncate text-[11px] font-semibold leading-tight ${
                                    active ? 'text-[#007AFF]' : 'text-black/75'
                                }`}
                            >
                                {localeNames[l]}
                            </span>
                            <span className="text-[9px] font-medium uppercase tracking-wider text-black/35">
                                {localeLabels[l]}
                            </span>
                            {active && (
                                <span className="absolute top-1.5 end-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#007AFF] text-white">
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
