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
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[140] p-3 sm:p-4 md:p-6">
            <div
                role="dialog"
                aria-modal="false"
                aria-labelledby={titleId}
                className="pointer-events-auto mx-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_20px_60px_rgba(0,5,82,0.18)]"
            >
                <div className="flex items-start justify-between gap-3 border-b border-black/[0.06] px-4 py-3 sm:px-5">
                    <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#000552]/55">
                            {t('eyebrow')}
                        </p>
                        <h2 id={titleId} className="mt-1 text-base font-bold text-[#000552] sm:text-lg">
                            {mode === 'settings' ? t('settingsTitle') : t('title')}
                        </h2>
                    </div>
                    {mode === 'settings' && (
                        <button
                            type="button"
                            onClick={() => setMode(readCookieConsent() ? 'hidden' : 'banner')}
                            className="rounded-lg p-1.5 text-black/40 transition-colors hover:bg-black/5 hover:text-black"
                            aria-label={t('close')}
                        >
                            <X size={18} />
                        </button>
                    )}
                </div>

                <div className="max-h-[min(70vh,32rem)] space-y-4 overflow-y-auto px-4 py-4 sm:px-5">
                    <p className="text-sm leading-relaxed text-black/70">{t('description')}</p>
                    <p className="text-sm text-black/60">
                        {t.rich('policyLink', {
                            policy: (chunks) => (
                                <Link
                                    href="/cerez-politikasi"
                                    className="font-semibold text-[#000552] underline underline-offset-2 hover:text-[#000552]/80"
                                >
                                    {chunks}
                                </Link>
                            ),
                        })}
                    </p>

                    {mode === 'settings' && (
                        <div className="space-y-3">
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
                    )}
                </div>

                <div className="flex flex-col gap-2 border-t border-black/[0.06] bg-[#f8f8fb] px-4 py-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end sm:gap-2 sm:px-5">
                    {mode === 'banner' ? (
                        <>
                            <button
                                type="button"
                                onClick={() => setMode('settings')}
                                className="inline-flex items-center justify-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm font-semibold text-[#000552] transition-colors hover:bg-black/[0.03] sm:order-1 sm:mr-auto"
                            >
                                <Settings2 size={16} />
                                {t('settings')}
                            </button>
                            <button
                                type="button"
                                onClick={rejectAll}
                                className="rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm font-semibold text-black/70 transition-colors hover:bg-black/[0.03] sm:order-2"
                            >
                                {t('rejectAll')}
                            </button>
                            <button
                                type="button"
                                onClick={acceptAll}
                                className="rounded-xl bg-[#000552] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#000552]/90 sm:order-3"
                            >
                                {t('acceptAll')}
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                type="button"
                                onClick={rejectAll}
                                className="rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm font-semibold text-black/70 transition-colors hover:bg-black/[0.03] sm:mr-auto"
                            >
                                {t('rejectAll')}
                            </button>
                            <button
                                type="button"
                                onClick={acceptAll}
                                className="rounded-xl border border-[#000552]/20 bg-white px-4 py-2.5 text-sm font-semibold text-[#000552] transition-colors hover:bg-[#000552]/[0.04]"
                            >
                                {t('acceptAll')}
                            </button>
                            <button
                                type="button"
                                onClick={saveSettings}
                                className="rounded-xl bg-[#000552] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#000552]/90"
                            >
                                {t('save')}
                            </button>
                        </>
                    )}
                </div>
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
        <div className="rounded-xl border border-black/[0.08] bg-white p-3.5 sm:p-4">
            <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-[#000552]">{title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-black/55 sm:text-sm">{description}</p>
                </div>
                {locked ? (
                    <span className="shrink-0 rounded-full bg-[#000552]/8 px-2.5 py-1 text-[11px] font-semibold text-[#000552]">
                        {lockedLabel}
                    </span>
                ) : (
                    <button
                        type="button"
                        role="switch"
                        aria-checked={checked}
                        onClick={() => onChange?.(!checked)}
                        className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${
                            checked ? 'bg-[#000552]' : 'bg-black/15'
                        }`}
                    >
                        <span
                            className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform ${
                                checked ? 'translate-x-5' : 'translate-x-0.5'
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
