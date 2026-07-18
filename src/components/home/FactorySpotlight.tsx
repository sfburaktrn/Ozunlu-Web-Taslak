'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import ScrollHint from '@/components/common/ScrollHint';

function LightBeam({ isOn, direction }: { isOn: boolean; direction: 'left' | 'right' }) {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: isOn ? 1 : 0, scale: isOn ? [1, 1.2, 1] : 0.5 }}
                transition={{ duration: 2.5, ease: 'easeInOut' }}
                className={`absolute bottom-[20%] ${direction === 'left' ? 'left-[5%]' : 'right-[5%]'} w-[10%] h-[15%] bg-white rounded-full blur-[20px] mix-blend-screen z-20`}
            />
            <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: isOn ? 0.5 : 0, scaleX: isOn ? 1 : 0 }}
                transition={{ duration: 2.5, ease: 'easeOut' }}
                className={`absolute bottom-[18%] ${direction === 'left' ? 'right-[85%]' : 'left-[85%]'} w-[25vw] h-[150px] z-10`}
                style={{
                    background:
                        direction === 'left'
                            ? 'linear-gradient(-90deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.05) 70%, transparent 100%)'
                            : 'linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.05) 70%, transparent 100%)',
                    transformOrigin: direction === 'left' ? 'right center' : 'left center',
                    filter: 'blur(20px)',
                    mixBlendMode: 'plus-lighter',
                }}
            />
        </>
    );
}

export default function FactorySpotlight() {
    const [active, setActive] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    const springProgress = useSpring(scrollYProgress, {
        stiffness: 50,
        damping: 30,
        mass: 0.8,
        restDelta: 0.001,
    });

    // Scroll ilerledikçe kamera damperin arka kısmına doğru hafifçe yaklaşır
    const bgScale = useTransform(springProgress, [0.1, 0.9], [1, 1.35]);
    // Yandaki çekiciler dışarı kayarak "aralarından geçiyormuş" hissi verir
    const truckShift = useTransform(springProgress, [0.1, 0.9], ['0%', '30%']);
    const truckShiftLeft = useTransform(springProgress, [0.1, 0.9], ['0%', '-30%']);
    // Galeri bölümündeki gibi: sahne ekranı kaplayacak şekilde büyür, çıkışta eski haline döner
    const stageScale = useTransform(springProgress, [0, 0.18, 0.82, 1], [0.94, 1, 1, 0.94]);
    const stageRadius = useTransform(springProgress, [0, 0.18, 0.82, 1], ['1.5rem', '0rem', '0rem', '1.5rem']);
    const hintOpacity = useTransform(springProgress, [0.02, 0.3], [1, 0]);

    return (
        <section className="hidden lg:block pt-2 pb-12 bg-white" aria-hidden="true">
            <div ref={containerRef} className="relative h-[220vh]">
                <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ scale: stageScale, borderRadius: stageRadius }}
                    className="relative w-full h-full overflow-hidden bg-black will-change-transform"
                    onViewportEnter={() => {
                        if (!active) setActive(true);
                    }}
                    viewport={{ amount: 0.45, once: true }}
                >
                    <div className="absolute inset-0 z-0">
                        <motion.div
                            className="absolute inset-0"
                            style={{ scale: bgScale, transformOrigin: '50% 58%' }}
                        >
                            <Image
                                src="/images/ozunlu-sari-hardox-damper-gece-cekiciler-sahne.webp"
                                alt=""
                                fill
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, 1200px"
                                className="object-cover"
                            />
                        </motion.div>
                        <motion.div
                            initial={{
                                background:
                                    'radial-gradient(circle, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.95) 100%)',
                            }}
                            animate={{
                                background: active
                                    ? 'radial-gradient(circle, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)'
                                    : 'radial-gradient(circle, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.95) 100%)',
                            }}
                            transition={{ duration: 2.5 }}
                            className="absolute inset-0 z-0"
                        />
                    </div>

                    <div className="relative w-full h-full z-10">
                        <motion.div
                            className="absolute right-[-5%] bottom-[6%] h-[68%] w-[38%] 2xl:bottom-[8%] 2xl:h-[62%] pointer-events-none"
                            style={{ x: truckShift }}
                        >
                            <div
                                className="relative w-full h-full transition-all duration-[2500ms] ease-out"
                                style={{ filter: active ? 'brightness(1.1) contrast(1.1)' : 'brightness(0.3)' }}
                            >
                                <Image
                                    src="/images/loading/truck_user.png"
                                    alt=""
                                    fill
                                    loading="lazy"
                                    sizes="40vw"
                                    className="object-contain object-bottom"
                                />
                                <LightBeam isOn={active} direction="left" />
                            </div>
                        </motion.div>

                        <motion.div
                            className="absolute left-[-5%] bottom-[6%] h-[68%] w-[38%] 2xl:bottom-[8%] 2xl:h-[62%] pointer-events-none"
                            style={{ x: truckShiftLeft }}
                        >
                            <div
                                className="relative w-full h-full transition-all duration-[2500ms] ease-out"
                                style={{ filter: active ? 'brightness(1.1) contrast(1.1)' : 'brightness(0.3)' }}
                            >
                                <Image
                                    src="/images/loading/truck_user.png"
                                    alt=""
                                    fill
                                    loading="lazy"
                                    sizes="40vw"
                                    className="object-contain object-bottom -scale-x-100"
                                />
                                <LightBeam isOn={active} direction="right" />
                            </div>
                        </motion.div>
                    </div>

                    <ScrollHint opacity={hintOpacity} />
                </motion.div>
                </div>
            </div>
        </section>
    );
}
