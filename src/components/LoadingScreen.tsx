"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// LightBeam component defined outside
const LightBeam = ({ isOn, direction }: { isOn: boolean; direction: 'left' | 'right' }) => (
  <>
    {/* Core Bulb Flare */}
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: isOn ? 1 : 0, scale: isOn ? [1, 1.2, 1] : 0.5 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`absolute bottom-[20%] ${direction === 'left' ? 'left-[5%]' : 'right-[5%]'} w-[10%] h-[15%] bg-white rounded-full blur-[20px] mix-blend-screen z-20`}
    />

    {/* Volumetric Fog Beam */}
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{
        opacity: isOn ? 0.5 : 0,
        scaleX: isOn ? 1 : 0
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
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

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [rightLightOn, setRightLightOn] = useState(false);
  const [leftLightOn, setLeftLightOn] = useState(false);
  const [showCenter, setShowCenter] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const runSequence = async () => {
      // 0. Mobile Check - Skip loading on mobile
      if (typeof window !== 'undefined' && window.innerWidth < 768) {
        onComplete();
        return;
      }

      // 1. Initial Delay
      await new Promise(r => setTimeout(r, 200));

      // 2. Right Light
      const audio1 = new Audio('/sounds/light-switch.mp3');
      audio1.volume = 0.5;
      audio1.play().catch(e => console.log('Audio play failed', e));
      setRightLightOn(true);

      // 3. Short Delay
      await new Promise(r => setTimeout(r, 200));

      // 4. Left Light
      const audio2 = new Audio('/sounds/light-switch.mp3');
      audio2.volume = 0.5;
      audio2.play().catch(e => console.log('Audio play failed', e));
      setLeftLightOn(true);

      // Show Text
      setShowCenter(true);

      // 7. Hold before finishing
      await new Promise(r => setTimeout(r, 1500));

      // 8. Complete
      onComplete();
    };

    runSequence();

    // Fallback
    timer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="hidden md:flex fixed inset-0 z-[100] bg-black overflow-hidden items-center justify-center"
    >
      {/* Background Image - Factory Interior */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/loading/final_bg.png"
          alt="Factory Background"
          fill
          className="object-cover opacity-100"
          priority
        />
        {/* Overlay */}
        <motion.div
          initial={{ background: "radial-gradient(circle, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.95) 100%)" }}
          animate={{
            background: (rightLightOn || leftLightOn)
              ? "radial-gradient(circle, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)"
              : "radial-gradient(circle, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.95) 100%)"
          }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        />
      </div>

      {/* Container for the Scene */}
      <div className="relative w-full h-full max-w-[1920px] mx-auto perspective-[1000px] z-10 flex items-center justify-center">

        {/* RIGHT TRUCK */}
        <div className="absolute right-[-5%] bottom-0 h-[70vh] w-[45vw] md:w-[35vw] flex items-end justify-center pointer-events-none">
          <div className="relative w-full h-full transition-all duration-500"
            style={{ filter: rightLightOn ? 'brightness(1.1) contrast(1.1)' : 'brightness(0.3)' }}>
            <Image
              src="/images/loading/truck_user.png"
              alt="Right Truck"
              fill
              className="object-contain object-bottom"
              priority
            />
            <LightBeam isOn={rightLightOn} direction="left" />
          </div>
        </div>

        {/* LEFT TRUCK */}
        <div className="absolute left-[-5%] bottom-0 h-[70vh] w-[45vw] md:w-[35vw] flex items-end justify-center pointer-events-none">
          <div className="relative w-full h-full transition-all duration-500"
            style={{ filter: leftLightOn ? 'brightness(1.1) contrast(1.1)' : 'brightness(0.3)' }}>
            <Image
              src="/images/loading/truck_user.png"
              alt="Left Truck"
              fill
              className="object-contain object-bottom transform -scale-x-100"
              priority
            />
            <LightBeam isOn={leftLightOn} direction="right" />
          </div>
        </div>

        {/* CENTER LOGO & TITLE */}
        <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{
              opacity: showCenter ? 1 : 0,
              scale: showCenter ? 1 : 0.9,
              y: showCenter ? 0 : 20
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center justify-center"
          >
            <div className="relative w-[300px] h-[100px] md:w-[400px] md:h-[130px] mb-4">
              <Image
                src="/images/loading/ozunlu_logo_text.png"
                alt="Özünlü Logo"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>

            <div className="h-[1px] w-24 mx-auto bg-gradient-to-r from-transparent via-white/50 to-transparent mb-4" />

            <h2 className="text-lg md:text-xl font-medium tracking-[0.25em] text-gray-200 uppercase">
              Dünyasına Hoş Geldiniz
            </h2>
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
}
