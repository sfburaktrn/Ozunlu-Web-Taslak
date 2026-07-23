'use client';

import Snowfall from '@/components/karla-mucadele/Snowfall';

type Props = {
    title: string;
    comingSoon: string;
};

export default function KarlaMucadeleClient({ title, comingSoon }: Props) {
    return (
        <main className="relative flex min-h-[calc(100dvh-60px)] flex-col items-center justify-center overflow-hidden bg-[#000552] px-6 pt-[60px] pb-24 text-center">
            <div
                aria-hidden
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        'radial-gradient(ellipse 70% 45% at 50% 0%, rgba(255,255,255,0.08), transparent 55%), linear-gradient(180deg, #000552 0%, #00033a 100%)',
                }}
            />

            <Snowfall />

            <div className="relative z-[2] max-w-xl">
                <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl">{title}</h1>
                <p className="mt-4 text-base text-white/75 md:text-lg">{comingSoon}</p>
            </div>
        </main>
    );
}
