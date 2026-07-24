'use client';

import { useTranslations } from 'next-intl';
import KarlaHero from '@/components/karla-mucadele/KarlaHero';
import KarlaFinale from '@/components/karla-mucadele/KarlaFinale';
import KarlaImageText from '@/components/karla-mucadele/KarlaImageText';
import KarlaVideoPoster from '@/components/karla-mucadele/KarlaVideoPoster';

export default function KarlaMucadeleClient() {
    const t = useTranslations('karlaMucadele');

    return (
        <main className="relative bg-white">
            <KarlaHero />

            <KarlaImageText
                imageSrc="/images/karla-mucadele/ozunlu-karla-mucadele-on-kureme.webp"
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
                tone="frost"
            />

            <KarlaImageText
                imageSrc="/images/karla-mucadele/ozunlu-karla-mucadele-arka-serici.webp"
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
                tone="glacier"
            />

            <KarlaFinale />

            <KarlaImageText
                imageSrc="/images/karla-mucadele/ozunlu-karla-mucadele-yan-profil-hardox.webp"
                imageAlt={t('sections.profile.imageAlt')}
                eyebrow={t('sections.profile.eyebrow')}
                title={t('sections.profile.title')}
                body={t('sections.profile.body')}
                points={[
                    t('sections.profile.points.0'),
                    t('sections.profile.points.1'),
                    t('sections.profile.points.2'),
                ]}
                imageLeft
                tone="ice"
            />

            <KarlaVideoPoster />
        </main>
    );
}
