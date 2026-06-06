'use client';

import { useLocale } from 'next-intl';

export function useTextDirection(): 'rtl' | 'ltr' {
    const locale = useLocale();
    return locale === 'ar' ? 'rtl' : 'ltr';
}
