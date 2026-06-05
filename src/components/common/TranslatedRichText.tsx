'use client';

import { useTranslations } from 'next-intl';
import { createRichTextHandlers } from '@/i18n/richText';
import HardoxInline from './HardoxInline';

type Props = {
    namespace: string;
    messageKey: string;
    hardoxClassName?: string;
    hardoxWidth?: number;
    hardoxHeight?: number;
    values?: Record<string, string | number>;
};

export function TranslatedRichText({
    namespace,
    messageKey,
    hardoxClassName,
    hardoxWidth,
    hardoxHeight,
    values = {},
}: Props) {
    const t = useTranslations(namespace);

    const handlers = createRichTextHandlers({
        hardoxClassName,
        hardoxWidth,
        hardoxHeight,
    });

    return <>{t.rich(messageKey, { ...values, ...handlers })}</>;
}
