'use client';

import Image from 'next/image';

/** Saf beyaz kar zeminli kış ormanı — biriken kar ile aynı ton */
export default function WinterForestBackdrop() {
    return (
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#f7fafc]">
            <Image
                src="/images/karla-mucadele/ozunlu-karla-mucadele-kis-orman.webp"
                alt=""
                fill
                priority={false}
                className="object-cover object-[center_82%]"
                sizes="100vw"
            />
            <div className="absolute inset-x-0 top-0 h-[40%] bg-gradient-to-b from-black/15 via-transparent to-transparent" />
        </div>
    );
}
