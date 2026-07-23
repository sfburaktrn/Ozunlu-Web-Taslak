'use client';

import { useEffect } from 'react';
import { useLocale } from 'next-intl';
import { getLocalizedPathname } from '@/i18n/pathnames';
import type { Locale } from '@/i18n/routing';

/** Eski /ek-ekipmanlar → Satış Sonrası (Ek Ekipmanlar bölümü) */
export default function EkEkipmanlarRedirectPage() {
    const locale = useLocale() as Locale;

    useEffect(() => {
        // next-intl router.replace hash kabul etmiyor; tam URL ile yönlendir
        window.location.replace(`${getLocalizedPathname(locale, '/satis-sonrasi')}#ek-ekipmanlar`);
    }, [locale]);

    return (
        <main className="flex min-h-[50vh] items-center justify-center bg-white pt-[60px]">
            <p className="text-sm text-gray-500">Yönlendiriliyor…</p>
        </main>
    );
}
