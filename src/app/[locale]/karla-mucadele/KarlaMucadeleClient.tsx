'use client';

import { useEffect, useRef, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import KarlaHero from '@/components/karla-mucadele/KarlaHero';
import SnowPlowScroll from '@/components/karla-mucadele/SnowPlowScroll';
import KarlaImageText from '@/components/karla-mucadele/KarlaImageText';
import KarlaVideoPoster from '@/components/karla-mucadele/KarlaVideoPoster';
import Snowfall, { type SnowfallApi } from '@/components/karla-mucadele/Snowfall';

export default function KarlaMucadeleClient() {
    const locale = useLocale();
    const t = useTranslations('karlaMucadele');
    const snowApi = useRef<SnowfallApi | null>(null);
    const [snowOn, setSnowOn] = useState(true);

    useEffect(() => {
        if (locale !== 'tr') return;

        const updateSnow = () => {
            const plow = document.getElementById('karla-plow-scene');
            // Plow sahnesine kadar (ve biraz içine) kar büyüsün
            const targetY = plow
                ? plow.offsetTop + Math.min(plow.offsetHeight * 0.25, window.innerHeight)
                : document.documentElement.scrollHeight * 0.65;
            const g = Math.min(1, Math.max(0, window.scrollY / Math.max(1, targetY)));
            // Ease-in: başta yavaş
            const eased = g * g;
            snowApi.current?.setGrowth(eased);

            // Footer viewport’a girer girmez karı kes (plow yüksekliği yanıltmasın)
            const footer = document.querySelector('footer');
            if (footer) {
                const footerTop = footer.getBoundingClientRect().top;
                setSnowOn(footerTop >= window.innerHeight - 1);
            } else if (plow) {
                const rect = plow.getBoundingClientRect();
                setSnowOn(rect.bottom > window.innerHeight);
            }
        };

        updateSnow();
        window.addEventListener('scroll', updateSnow, { passive: true });
        window.addEventListener('resize', updateSnow);
        return () => {
            window.removeEventListener('scroll', updateSnow);
            window.removeEventListener('resize', updateSnow);
        };
    }, [locale]);

    if (locale !== 'tr') {
        return (
            <main className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-[#f3f6fa] px-6 pt-[60px] pb-24 text-center">
                <Snowfall accumulate={false} density={0.9} className="pointer-events-none absolute inset-0 z-[1]" />
                <h1 className="relative z-[2] text-3xl font-bold tracking-tight text-[#000552] md:text-5xl">
                    {t('hero.title')}
                </h1>
                <p className="relative z-[2] mt-4 max-w-lg text-base text-[#000552]/70 md:text-lg">
                    {t('hero.comingSoon')}
                </p>
            </main>
        );
    }

    return (
        <main className="relative bg-white">
            <div
                className={`pointer-events-none fixed inset-0 z-[22] transition-opacity duration-200 ${
                    snowOn ? 'opacity-100' : 'invisible opacity-0'
                }`}
                aria-hidden={!snowOn}
            >
                <Snowfall
                    apiRef={snowApi}
                    accumulate
                    softSeed
                    density={1.2}
                    className="h-full w-full"
                />
            </div>

            <KarlaHero />

            <KarlaImageText
                imageSrc="/images/karla-mucadele/ozunlu-karla-mucadele-yan-gorunum.webp"
                imageAlt={t('sections.front.imageAlt')}
                eyebrow={t('sections.front.eyebrow')}
                title={t('sections.front.title')}
                body={t('sections.front.body')}
                points={[
                    t('sections.front.points.0'),
                    t('sections.front.points.1'),
                    t('sections.front.points.2'),
                ]}
                imageLeft
                tone="dusk"
            />
            <KarlaImageText
                imageSrc="/images/karla-mucadele/ozunlu-karla-mucadele-tuz-serici.webp"
                imageAlt={t('sections.spreader.imageAlt')}
                eyebrow={t('sections.spreader.eyebrow')}
                title={t('sections.spreader.title')}
                body={t('sections.spreader.body')}
                points={[
                    t('sections.spreader.points.0'),
                    t('sections.spreader.points.1'),
                    t('sections.spreader.points.2'),
                ]}
                imageLeft={false}
                tone="steel"
            />
            <KarlaVideoPoster />
            <KarlaImageText
                imageSrc="/images/karla-mucadele/ozunlu-karla-mucadele-on-bicak.webp"
                imageAlt={t('sections.fleet.imageAlt')}
                eyebrow={t('sections.fleet.eyebrow')}
                title={t('sections.fleet.title')}
                body={t('sections.fleet.body')}
                points={[
                    t('sections.fleet.points.0'),
                    t('sections.fleet.points.1'),
                    t('sections.fleet.points.2'),
                ]}
                imageLeft
                tone="night"
            />

            <SnowPlowScroll snowApi={snowApi} />
        </main>
    );
}
