import type { ReactNode } from 'react';
import HardoxInline from '@/components/common/HardoxInline';

type RichTextOptions = {
    hardoxClassName?: string;
    hardoxWidth?: number;
    hardoxHeight?: number;
    strongClassName?: string;
};

export function createRichTextHandlers(options: RichTextOptions = {}) {
    const {
        hardoxClassName,
        hardoxWidth = 80,
        hardoxHeight = 20,
        strongClassName = 'font-bold',
    } = options;

    return {
        strong: (chunks: ReactNode) => (
            <strong className={strongClassName}>{chunks}</strong>
        ),
        hardox: () => (
            <HardoxInline
                className={hardoxClassName}
                width={hardoxWidth}
                height={hardoxHeight}
            />
        ),
        durability: (chunks: ReactNode) => (
            <span className="font-semibold">{chunks}</span>
        ),
        performance: (chunks: ReactNode) => (
            <span className="font-semibold">{chunks}</span>
        ),
    };
}

export const defaultRichTextHandlers = createRichTextHandlers();

export const footerRichTextHandlers = createRichTextHandlers({
    hardoxClassName: 'inline-block rounded-lg w-14 md:w-20 h-auto mx-0.5 align-middle',
});

export const heroRichTextHandlers = createRichTextHandlers({
    hardoxClassName: 'inline-block rounded-lg w-14 md:w-20 h-auto mx-0.5 align-middle',
});
