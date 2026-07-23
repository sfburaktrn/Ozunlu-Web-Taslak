'use client';

import { useRef, useState, type MutableRefObject } from 'react';
import Image from 'next/image';
import {
    motion,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform,
    useMotionValueEvent,
} from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import type { SnowfallApi } from '@/components/karla-mucadele/Snowfall';
import WinterForestBackdrop from '@/components/karla-mucadele/WinterForestBackdrop';
import { useTextDirection } from '@/i18n/useTextDirection';

const PLOW_SRC = '/images/karla-mucadele/ozunlu-karla-mucadele-kureme-araci.png';

type Props = {
    snowApi: MutableRefObject<SnowfallApi | null>;
};

export default function SnowPlowScroll({ snowApi }: Props) {
    const t = useTranslations('karlaMucadele.snowScroll');
    const textDir = useTextDirection();
    const sectionRef = useRef<HTMLElement>(null);
    const truckRef = useRef<HTMLDivElement>(null);
    const [sceneLive, setSceneLive] = useState(false);
    /** Üst section’dan aşağı inince true; footer’dan yukarı çıkınca false */
    const armedRef = useRef(true);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end'],
    });

    /** Animasyon ilerlemesi — footer’dan geri gelince ters oynamaz */
    const playProgress = useMotionValue(0);

    const smooth = useSpring(playProgress, {
        stiffness: 70,
        damping: 32,
        mass: 0.45,
        restDelta: 0.0003,
    });

    // Viewport’a göre: soldan tamamen dışarı → sağdan tamamen dışarı
    const truckX = useTransform(smooth, [0.05, 0.88], ['-58vw', '108vw']);
    const truckOpacity = useTransform(smooth, [0.04, 0.09, 0.86, 0.93], [0, 1, 1, 0]);
    const truckTilt = useTransform(smooth, (v) => Math.sin(v * Math.PI * 5) * 0.7);
    const truckRotate = useTransform(truckTilt, (d) => `${d}deg`);
    const hintOpacity = useTransform(smooth, [0.06, 0.12, 0.22], [0, 1, 0]);
    const copyOpacity = useTransform(smooth, [0.32, 0.48, 0.78], [0, 1, 1]);
    const copyY = useTransform(smooth, [0.32, 0.48], [40, 0]);
    const copyScale = useTransform(smooth, [0.32, 0.48], [0.92, 1]);
    const ctaOpacity = useTransform(smooth, [0.42, 0.55, 0.78], [0, 1, 1]);
    const ctaY = useTransform(smooth, [0.42, 0.55], [16, 0]);
    const overlayOpacity = useTransform(smooth, [0, 0.04, 0.9, 0.97], [0, 1, 1, 0]);

    useMotionValueEvent(scrollYProgress, 'change', (progress) => {
        if (progress <= 0.02) {
            // Üst section’a çıktık → bir sonraki iniş için hazırla
            armedRef.current = true;
            playProgress.jump(0);
        } else if (progress >= 0.94) {
            // Alta / footer’a indik → araç sağda kayboldu; yukarı dönüşte ters oynatma
            armedRef.current = false;
            playProgress.jump(1);
        } else if (armedRef.current) {
            // Normal: üstten inince soldan sağa
            playProgress.set(progress);
        } else {
            // Footer’dan yukarı: araç gizli kalsın (aşağıdan yukarı gelmesin)
            playProgress.jump(1);
        }

        const live = armedRef.current && progress > 0.03 && progress < 0.94;
        setSceneLive(live);

        if (!snowApi.current) return;
        if (!live || progress > 0.86) {
            snowApi.current.setBladeX(null);
            return;
        }

        const truck = truckRef.current;
        if (!truck) return;

        snowApi.current.setAccumulate(true);
        const truckBox = truck.getBoundingClientRect();
        snowApi.current.setBladeX(truckBox.left + truckBox.width * 0.88);
    });

    return (
        <section id="karla-plow-scene" ref={sectionRef} className="relative h-[360vh] bg-[#f7fafc]">
            <div className="sticky top-0 z-[15] h-[100svh] overflow-hidden">
                <WinterForestBackdrop />
            </div>

            <motion.div
                style={{ opacity: overlayOpacity }}
                className={`fixed inset-0 z-[32] ${
                    sceneLive ? '' : 'pointer-events-none invisible'
                }`}
                aria-hidden={!sceneLive}
            >
                <motion.p
                    style={{ opacity: hintOpacity }}
                    className="pointer-events-none absolute inset-x-0 top-[14%] text-center text-xs font-semibold uppercase tracking-[0.3em] text-[#000552]/45"
                >
                    {t('hint')}
                </motion.p>

                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6">
                    <motion.div
                        dir={textDir}
                        style={{
                            opacity: copyOpacity,
                            y: copyY,
                            scale: copyScale,
                        }}
                        className="max-w-3xl text-center"
                    >
                        <h2 className="font-[Georgia,'Times_New_Roman',serif] text-[clamp(2.5rem,7.5vw,4.5rem)] font-medium italic leading-[1.12] tracking-tight text-[#000552]">
                            {t('title')}
                        </h2>
                    </motion.div>

                    <motion.div
                        style={{ opacity: ctaOpacity, y: ctaY }}
                        className="pointer-events-auto mt-7"
                    >
                        <Link
                            href="/iletisim"
                            className="group inline-flex items-center gap-2 border-b border-[#000552]/35 pb-1 text-sm font-medium tracking-wide text-[#000552]/85 transition-colors hover:border-[#000552] hover:text-[#000552]"
                        >
                            {t('cta')}
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 icon-directional" />
                        </Link>
                    </motion.div>
                </div>

                <motion.div
                    ref={truckRef}
                    style={{
                        x: truckX,
                        rotate: truckRotate,
                        opacity: truckOpacity,
                    }}
                    className="pointer-events-none absolute bottom-0 left-0 w-[min(62vw,380px)] origin-bottom will-change-transform md:w-[min(48vw,420px)]"
                >
                    <Image
                        src={PLOW_SRC}
                        alt={t('truckAlt')}
                        width={851}
                        height={420}
                        className="h-auto w-full drop-shadow-[0_14px_32px_rgba(0,20,60,0.28)]"
                        sizes="(max-width: 768px) 62vw, 420px"
                        priority={false}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
