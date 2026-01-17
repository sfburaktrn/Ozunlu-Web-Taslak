'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Reusing LightBeam component
const LightBeam = ({ isOn, direction }: { isOn: boolean; direction: 'left' | 'right' }) => (
    <>
        {/* Core Bulb Flare */}
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: isOn ? 1 : 0, scale: isOn ? [1, 1.2, 1] : 0.5 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className={`absolute bottom-[20%] ${direction === 'left' ? 'left-[5%]' : 'right-[5%]'} w-[10%] h-[15%] bg-white rounded-full blur-[20px] mix-blend-screen z-20`}
        />

        {/* Volumetric Fog Beam */}
        <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{
                opacity: isOn ? 0.5 : 0,
                scaleX: isOn ? 1 : 0
            }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className={`absolute bottom-[18%] ${direction === 'left' ? 'right-[85%]' : 'left-[85%]'} w-[25vw] h-[150px] z-10`}
            style={{
                background: direction === 'left'
                    ? 'linear-gradient(-90deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.05) 70%, transparent 100%)'
                    : 'linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.05) 70%, transparent 100%)',
                transformOrigin: direction === 'left' ? 'right center' : 'left center',
                filter: 'blur(20px)',
                mixBlendMode: 'plus-lighter'
            }}
        />
    </>
);

export default function WebIntro() {
    const [active, setActive] = useState(false);

    return (
        <section className="hidden md:block pt-2 pb-12 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    className="relative w-full h-[600px] rounded-3xl overflow-hidden border border-white/10 bg-black group"
                    onViewportEnter={() => {
                        if (!active) setActive(true);
                    }}
                    viewport={{ amount: 0.5, once: true }}
                >
                    {/* Background Image - Factory Interior */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/loading/final_bg.png"
                            alt="Factory Background"
                            fill
                            className="object-cover opacity-100"
                        />
                        {/* Overlay */}
                        <motion.div
                            initial={{ background: "radial-gradient(circle, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.95) 100%)" }}
                            animate={{
                                background: active
                                    ? "radial-gradient(circle, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)"
                                    : "radial-gradient(circle, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.95) 100%)"
                            }}
                            transition={{ duration: 2.5 }}
                            className="absolute inset-0 z-0"
                        />
                    </div>

                    {/* Container for the Scene */}
                    <div className="relative w-full h-full max-w-[1920px] mx-auto perspective-[1000px] z-10 flex items-center justify-center">

                        {/* Top Left Watermark */}
                        <div className="absolute top-24 left-4 md:top-32 md:left-10 z-0 pointer-events-none select-none opacity-50">
                            <span className="text-4xl md:text-6xl font-black text-white/5 leading-none tracking-tighter whitespace-nowrap">
                                ÖZÜNLÜ
                            </span>
                        </div>

                        {/* Top Right Watermark */}
                        <div className="absolute top-24 right-4 md:top-32 md:right-10 z-0 pointer-events-none select-none opacity-50">
                            <span className="text-4xl md:text-6xl font-black text-white/5 leading-none tracking-tighter whitespace-nowrap">
                                ÖZÜNLÜ
                            </span>
                        </div>

                        {/* RIGHT TRUCK */}
                        <div className="absolute right-[-5%] bottom-0 h-[80%] w-[40%] flex items-end justify-center pointer-events-none">
                            <div className="relative w-full h-full transition-all duration-[2500ms] ease-out"
                                style={{ filter: active ? 'brightness(1.1) contrast(1.1)' : 'brightness(0.3)' }}>
                                <Image
                                    src="/images/loading/truck_user.png"
                                    alt="Right Truck"
                                    fill
                                    className="object-contain object-bottom"
                                />
                                <LightBeam isOn={active} direction="left" />
                            </div>
                        </div>

                        {/* LEFT TRUCK */}
                        <div className="absolute left-[-5%] bottom-0 h-[80%] w-[40%] flex items-end justify-center pointer-events-none">
                            <div className="relative w-full h-full transition-all duration-[2500ms] ease-out"
                                style={{ filter: active ? 'brightness(1.1) contrast(1.1)' : 'brightness(0.3)' }}>
                                <Image
                                    src="/images/loading/truck_user.png"
                                    alt="Left Truck"
                                    fill
                                    className="object-contain object-bottom transform -scale-x-100"
                                />
                                <LightBeam isOn={active} direction="right" />
                            </div>
                        </div>

                        {/* CENTER SLOGAN - TOP POSITIONED */}
                        <div className="absolute inset-0 flex items-start justify-center z-30 pointer-events-none pt-4 md:pt-8">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: -20 }}
                                animate={{
                                    opacity: active ? 1 : 0,
                                    scale: active ? 1 : 0.9,
                                    y: active ? 0 : -20
                                }}
                                transition={{ duration: 2.5, ease: "easeOut" }}
                                className="flex flex-col items-center justify-center"
                            >
                                <h2 className="text-2xl md:text-5xl font-bold text-white drop-shadow-lg text-center font-sans">
                                    En İyilerin Tercihi
                                </h2>
                                <div className="h-[2px] w-24 mx-auto bg-primary mt-4" />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
