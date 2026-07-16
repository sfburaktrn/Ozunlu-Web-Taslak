'use client';

import React from 'react';
import Image from 'next/image';

type ImageLoupeProps = {
    src: string;
    alt: string;
    className?: string;
    imageClassName?: string;
    sizes?: string;
    priority?: boolean;
    loupeSize?: number;
    loupeZoom?: number;
    onClick?: () => void;
};

export default function ImageLoupe({
    src,
    alt,
    className = '',
    imageClassName = 'object-contain object-center p-2',
    sizes = '(max-width: 768px) 100vw, 33vw',
    priority = false,
    loupeSize = 152,
    loupeZoom = 4.5,
    onClick,
}: ImageLoupeProps) {
    const frameRef = React.useRef<HTMLDivElement>(null);
    const [loupe, setLoupe] = React.useState<{ x: number; y: number; px: number; py: number } | null>(null);

    const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const frame = frameRef.current;
        if (!frame) return;
        const rect = frame.getBoundingClientRect();
        const px = event.clientX - rect.left;
        const py = event.clientY - rect.top;
        const x = Math.min(Math.max((px / rect.width) * 100, 0), 100);
        const y = Math.min(Math.max((py / rect.height) * 100, 0), 100);
        setLoupe({ x, y, px, py });
    };

    return (
        <div
            ref={frameRef}
            className={`relative overflow-hidden ${loupe ? 'cursor-none' : onClick ? 'cursor-zoom-in' : 'cursor-crosshair'} ${className}`}
            onMouseMove={handleMove}
            onMouseLeave={() => setLoupe(null)}
            onClick={onClick}
            role={onClick ? 'button' : undefined}
            tabIndex={onClick ? 0 : undefined}
            onKeyDown={
                onClick
                    ? (event) => {
                          if (event.key === 'Enter' || event.key === ' ') {
                              event.preventDefault();
                              onClick();
                          }
                      }
                    : undefined
            }
        >
            <Image src={src} alt={alt} fill className={imageClassName} sizes={sizes} priority={priority} />

            {loupe && (
                <div
                    className="pointer-events-none absolute z-30 hidden md:block"
                    style={{
                        width: loupeSize,
                        height: loupeSize,
                        left: loupe.px - loupeSize / 2,
                        top: loupe.py - loupeSize / 2,
                    }}
                >
                    <div
                        className="relative h-full w-full rounded-full border-[3px] border-white overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.4)] ring-2 ring-[#000552]/25"
                        style={{
                            backgroundImage: `url(${src})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: `${loupeZoom * 100}%`,
                            backgroundPosition: `${loupe.x}% ${loupe.y}%`,
                        }}
                    >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/35 via-transparent to-black/20" />
                        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/80 bg-white/20" />
                    </div>
                </div>
            )}
        </div>
    );
}
