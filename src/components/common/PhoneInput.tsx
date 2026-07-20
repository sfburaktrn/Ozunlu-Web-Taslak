'use client';

import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { useLocale } from 'next-intl';
import type { Locale } from '@/i18n/routing';
import CountryFlag from '@/components/common/CountryFlag';
import {
    filterPhoneCountries,
    formatPhoneValue,
    getDefaultCountryForLocale,
    parsePhoneValue,
    phoneSearchLabels,
    type PhoneCountry,
} from '@/lib/phoneCountries';

type PhoneInputProps = {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    required?: boolean;
    id?: string;
    variant?: 'contact' | 'proposal';
    className?: string;
};

export default function PhoneInput({
    value,
    onChange,
    placeholder,
    required,
    id,
    variant = 'contact',
    className = '',
}: PhoneInputProps) {
    const locale = useLocale() as Locale;
    const listId = useId();
    const searchId = useId();
    const rootRef = useRef<HTMLDivElement>(null);
    const searchRef = useRef<HTMLInputElement>(null);
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [country, setCountry] = useState<PhoneCountry>(() => getDefaultCountryForLocale(locale));
    const [national, setNational] = useState('');
    const countryCodeRef = useRef(country.code);

    countryCodeRef.current = country.code;

    useEffect(() => {
        const parsed = parsePhoneValue(value, countryCodeRef.current);
        if (parsed) {
            setCountry(parsed.country);
            setNational(parsed.national);
            return;
        }

        if (!value.trim()) {
            setCountry(getDefaultCountryForLocale(locale));
            setNational('');
        }
    }, [value, locale]);

    useEffect(() => {
        const handlePointerDown = (event: MouseEvent) => {
            if (!rootRef.current?.contains(event.target as Node)) {
                setOpen(false);
                setQuery('');
            }
        };

        document.addEventListener('mousedown', handlePointerDown);
        return () => document.removeEventListener('mousedown', handlePointerDown);
    }, []);

    useEffect(() => {
        if (open) {
            searchRef.current?.focus();
        } else {
            setQuery('');
        }
    }, [open]);

    const updateValue = (nextCountry: PhoneCountry, nextNational: string) => {
        setCountry(nextCountry);
        setNational(nextNational);
        onChange(formatPhoneValue(nextCountry, nextNational));
    };

    const handleCountrySelect = (nextCountry: PhoneCountry) => {
        updateValue(nextCountry, national);
        setOpen(false);
        setQuery('');
    };

    const handleNationalChange = (nextNational: string) => {
        updateValue(country, nextNational);
    };

    const filteredCountries = useMemo(() => filterPhoneCountries(query), [query]);
    const labels = phoneSearchLabels[locale];

    const isContact = variant === 'contact';
    const inputPlaceholder = placeholder ?? country.placeholder;

    return (
        <div ref={rootRef} className={`relative ${className}`}>
            <div
                className={
                    isContact
                        ? 'flex w-full overflow-hidden rounded-xl border border-[#000552]/12 bg-white focus-within:border-[#000552] focus-within:ring-2 focus-within:ring-[#000552]/15 transition-all'
                        : 'flex w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-50 focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10 transition-all'
                }
            >
                <button
                    type="button"
                    onClick={() => setOpen((prev) => !prev)}
                    className={
                        isContact
                            ? 'flex shrink-0 items-center gap-1.5 border-e border-[#000552]/12 px-2.5 sm:px-3 text-[#000552] hover:bg-[#000552]/[0.03] transition-colors'
                            : 'flex shrink-0 items-center gap-1.5 border-e border-gray-200 px-3 text-ozunlu-950 hover:bg-white/70 transition-colors'
                    }
                    aria-expanded={open}
                    aria-haspopup="listbox"
                    aria-controls={listId}
                >
                    <CountryFlag code={country.code} />
                    <span className="text-sm font-semibold tabular-nums">{country.dial}</span>
                    <ChevronDown
                        size={14}
                        className={`opacity-50 transition-transform ${open ? 'rotate-180' : ''}`}
                    />
                </button>

                <input
                    id={id}
                    type="tel"
                    required={required}
                    value={national}
                    onChange={(e) => handleNationalChange(e.target.value)}
                    placeholder={inputPlaceholder}
                    className={
                        isContact
                            ? 'min-w-0 flex-1 bg-transparent px-3.5 py-2.5 text-sm text-[#0a0a1a] placeholder:text-[#000552]/30 focus:outline-none'
                            : 'min-w-0 flex-1 bg-transparent px-4 py-4 text-sm font-medium text-ozunlu-950 placeholder:text-gray-400 focus:outline-none'
                    }
                    autoComplete="tel-national"
                />
            </div>

            {open && (
                <div className="absolute left-0 right-0 top-[calc(100%+0.35rem)] z-50 overflow-hidden rounded-xl border border-[#000552]/10 bg-white shadow-xl shadow-[#000552]/10">
                    <div className="sticky top-0 border-b border-[#000552]/8 bg-white p-2">
                        <label htmlFor={searchId} className="sr-only">
                            Search countries
                        </label>
                        <div className="relative">
                            <Search
                                size={16}
                                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#000552]/35"
                            />
                            <input
                                ref={searchRef}
                                id={searchId}
                                type="search"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder={labels.search}
                                className="w-full rounded-lg border border-[#000552]/10 bg-[#000552]/[0.02] py-2 pl-9 pr-3 text-sm text-[#0a0a1a] placeholder:text-[#000552]/35 focus:border-[#000552]/25 focus:outline-none focus:ring-2 focus:ring-[#000552]/10"
                            />
                        </div>
                    </div>

                    <ul id={listId} role="listbox" className="max-h-56 overflow-y-auto py-1">
                        {filteredCountries.length > 0 ? (
                            filteredCountries.map((item) => (
                                <li key={item.code} role="option" aria-selected={item.code === country.code}>
                                    <button
                                        type="button"
                                        onClick={() => handleCountrySelect(item)}
                                        className={`flex w-full items-center gap-3 px-3 py-2.5 text-left text-sm transition-colors hover:bg-[#000552]/[0.04] ${
                                            item.code === country.code ? 'bg-[#000552]/[0.06] font-semibold' : ''
                                        }`}
                                    >
                                        <CountryFlag code={item.code} />
                                        <span className="min-w-0 flex-1 truncate text-[#0a0a1a]">{item.name}</span>
                                        <span className="shrink-0 tabular-nums text-[#000552]/55">{item.dial}</span>
                                    </button>
                                </li>
                            ))
                        ) : (
                            <li className="px-3 py-4 text-center text-sm text-[#000552]/45">{labels.empty}</li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
}
