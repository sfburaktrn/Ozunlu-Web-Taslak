'use client';

import { useEffect } from 'react';
import { useLocale } from 'next-intl';
import { useRouter } from '@/i18n/navigation';

/** Eski /ek-ekipmanlar → Satış Sonrası (Ek Ekipmanlar bölümü) */
export default function EkEkipmanlarRedirectPage() {
    const router = useRouter();
    const locale = useLocale();

    useEffect(() => {
        router.replace({ pathname: '/satis-sonrasi', hash: 'ek-ekipmanlar' });
    }, [router, locale]);

    return (
        <main className="flex min-h-[50vh] items-center justify-center bg-white pt-[60px]">
            <p className="text-sm text-gray-500">Yönlendiriliyor…</p>
        </main>
    );
}
