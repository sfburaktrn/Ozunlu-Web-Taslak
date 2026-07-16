'use client';

import ImageLoupe from '@/components/common/ImageLoupe';

export default function ProductCardImage({
    src,
    alt,
    onOpen,
}: {
    src: string;
    alt: string;
    onOpen: () => void;
}) {
    return (
        <ImageLoupe
            src={src}
            alt={alt}
            onClick={onOpen}
            className="w-full aspect-[16/10] rounded-[1.5rem] mb-4 bg-[#ebebef] shadow-sm"
            sizes="(max-width: 768px) 100vw, 33vw"
            loupeSize={152}
            loupeZoom={4.5}
        />
    );
}
