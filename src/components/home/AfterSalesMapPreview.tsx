'use client';

import { useTranslations } from 'next-intl';
import { defaultRichTextHandlers } from '@/i18n/richText';
import MapPreview from './MapPreview';

export default function AfterSalesMapPreview() {
    const t = useTranslations('afterSales.map');
    return (
        <MapPreview
            title={t('title')}
            description={t.rich('description', defaultRichTextHandlers)}
        />
    );
}
