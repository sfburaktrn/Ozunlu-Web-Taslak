'use client';

import { useEffect, useId, useState } from 'react';
import { Settings2, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import {
    allAcceptedPreferences,
    defaultRejectedPreferences,
    readCookieConsent,
    writeCookieConsent,
    type CookiePreferences,
} from '@/lib/cookieConsent';

type PanelMode = 'banner' | 'settings' | 'hidden';

export default function CookieConsent() {
    const t = useTranslations('common.cookieConsent');
    const titleId = useId();
    const [mode, setMode] = useState<PanelMode>('hidden');
    const [draft, setDraft] = useState<CookiePreferences>(defaultRejectedPreferences());

    useEffect(() => {
        const existing = readCookieConsent();
        if (existing) {
            setDraft(existing.preferences);
            setMode('hidden');
            return;
        }
        setMode('banner');
    }, []);

    useEffect(() => {
        const openSettings = () => {
            const existing = readCookieConsent();
            setDraft(existing?.preferences ?? defaultRejectedPreferences());
            setMode('settings');
        };

        window.addEventListener('ozunlu-open-cookie-settings', openSettings);
        return () => window.removeEventListener('ozunlu-open-cookie-settings', openSettings);
    }, []);

    const persist = (preferences: CookiePreferences) => {
        writeCookieConsent(preferences);
        setDraft(preferences);
        setMode('hidden');
    };

    const acceptAll = () => persist(allAcceptedPreferences());
    const rejectAll = () => persist(defaultRejectedPreferences());
    const saveSettings = () => persist({ ...draft, necessary: true });

    if (mode === 'hidden') return null;

    return (
        <div className="pointer-events-none fixed bottom-0 start-0 z-[140] p-2.5 sm:p-3 md:p-4">
            <div
                role="dialog"
                aria-modal="false"
                aria-labelledby={titleId}
                className="pointer-events-auto w-[min(100%,22rem)] overflow-hidden rounded-2xl border border-black/8 bg-white/95 shadow-[0_12px_40px_rgba(0,5,82,0.14)] backdrop-blur-md sm:w-full sm:max-w-sm md:max-w-md"
            >
                {mode === 'banner' ? (
                    <div className="flex flex-col gap-2.5 p-3 sm:p-3.5">
                        <div className="min-w-0">
                            <h2 id={titleId} className="text-[13px] font-bold leading-tight text-[#000552] sm:text-sm">
                                {t('title')}
                            </h2>
                            <p className="mt-0.5 text-[11px] leading-snug text-black/55 sm:text-xs">
                                {t('shortDescription')}{' '}
                                {t.rich('policyLinkShort', {
                                    policy: (chunks) => (
                                        <Link
                                            href="/cerez-politikasi"
                                            className="font-semibold text-[#000552] underline underline-offset-2"
                                        >
                                            {chunks}
                                        </Link>
                                    ),
                                })}
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-1.5">
                            <button
                                type="button"
                                onClick={() => setMode('settings')}
                                className="inline-flex items-center justify-center gap-1 rounded-lg border border-black/10 bg-white px-2 py-2 text-[11px] font-semibold text-[#000552] transition-colors hover:bg-black/[0.03] sm:text-xs"
                                aria-label={t('settings')}
                            >
                                <Settings2 size={13} className="shrink-0" />
                                <span className="truncate">{t('settingsShort')}</span>
                            </button>
                            <button
                                type="button"
                                onClick={rejectAll}
                                className="rounded-lg border border-black/10 bg-white px-2 py-2 text-[11px] font-semibold text-black/65 transition-colors hover:bg-black/[0.03] sm:text-xs"
                            >
                                {t('rejectShort')}
                            </button>
                            <button
                                type="button"
                                onClick={acceptAll}
                                className="rounded-lg bg-[#000552] px-2 py-2 text-[11px] font-semibold text-white transition-colors hover:bg-[#000552]/90 sm:text-xs"
                            >
                                {t('acceptShort')}
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="flex max-h-[min(55vh,24rem)] flex-col">
                        <div className="flex items-center justify-between gap-2 border-b border-black/[0.06] px-3 py-2.5 sm:px-4">
                            <h2 id={titleId} className="text-sm font-bold text-[#000552]">
                                {t('settingsTitle')}
                            </h2>
                            <button
                                type="button"
                                onClick={() => setMode(readCookieConsent() ? 'hidden' : 'banner')}
                                className="rounded-md p-1 text-black/40 transition-colors hover:bg-black/5 hover:text-black"
                                aria-label={t('close')}
                            >
                                <X size={16} />
                            </button>
                        </div>

                        <div className="space-y-2 overflow-y-auto px-3 py-2.5 sm:px-4">
                            <p className="text-[11px] leading-snug text-black/50 sm:text-xs">
                                {t.rich('policyLink', {
                                    policy: (chunks) => (
                                        <Link
                                            href="/cerez-politikasi"
                                            className="font-semibold text-[#000552] underline underline-offset-2"
                                        >
                                            {chunks}
                                        </Link>
                                    ),
                                })}
                            </p>
                            <CategoryRow
                                title={t('necessaryTitle')}
                                description={t('necessaryDesc')}
                                checked
                                locked
                                lockedLabel={t('alwaysOn')}
                            />
                            <CategoryRow
                                title={t('analyticsTitle')}
                                description={t('analyticsDesc')}
                                checked={draft.analytics}
                                onChange={(analytics) => setDraft((prev) => ({ ...prev, analytics }))}
                            />
                            <CategoryRow
                                title={t('marketingTitle')}
                                description={t('marketingDesc')}
                                checked={draft.marketing}
                                onChange={(marketing) => setDraft((prev) => ({ ...prev, marketing }))}
                            />
                        </div>

                        <div className="grid grid-cols-3 gap-1.5 border-t border-black/[0.06] bg-[#f8f8fb] px-3 py-2.5 sm:flex sm:justify-end sm:gap-2 sm:px-4">
                            <button
                                type="button"
                                onClick={rejectAll}
                                className="rounded-lg border border-black/10 bg-white px-2 py-2 text-[11px] font-semibold text-black/65 sm:px-3 sm:text-xs"
                            >
                                {t('rejectShort')}
                            </button>
                            <button
                                type="button"
                                onClick={acceptAll}
                                className="rounded-lg border border-[#000552]/15 bg-white px-2 py-2 text-[11px] font-semibold text-[#000552] sm:px-3 sm:text-xs"
                            >
                                {t('acceptShort')}
                            </button>
                            <button
                                type="button"
                                onClick={saveSettings}
                                className="rounded-lg bg-[#000552] px-2 py-2 text-[11px] font-semibold text-white sm:px-3.5 sm:text-xs"
                            >
                                {t('save')}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

function CategoryRow({
    title,
    description,
    checked,
    onChange,
    locked = false,
    lockedLabel,
}: {
    title: string;
    description: string;
    checked: boolean;
    onChange?: (value: boolean) => void;
    locked?: boolean;
    lockedLabel?: string;
}) {
    return (
        <div className="rounded-lg border border-black/[0.07] bg-white px-2.5 py-2 sm:px-3 sm:py-2.5">
            <div className="flex items-center justify-between gap-2">
                <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-[#000552] sm:text-[13px]">{title}</p>
                    <p className="mt-0.5 line-clamp-2 text-[10px] leading-snug text-black/45 sm:text-[11px]">
                        {description}
                    </p>
                </div>
                {locked ? (
                    <span className="shrink-0 rounded-full bg-[#000552]/8 px-2 py-0.5 text-[10px] font-semibold text-[#000552]">
                        {lockedLabel}
                    </span>
                ) : (
                    <button
                        type="button"
                        role="switch"
                        aria-checked={checked}
                        onClick={() => onChange?.(!checked)}
                        className={`relative h-6 w-10 shrink-0 rounded-full transition-colors ${
                            checked ? 'bg-[#000552]' : 'bg-black/15'
                        }`}
                    >
                        <span
                            className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                                checked ? 'translate-x-4' : 'translate-x-0.5'
                            }`}
                        />
                    </button>
                )}
            </div>
        </div>
    );
}

/** Footer / settings trigger — opens the cookie panel from anywhere */
export function openCookieSettings() {
    if (typeof window === 'undefined') return;
    window.dispatchEvent(new Event('ozunlu-open-cookie-settings'));
}
