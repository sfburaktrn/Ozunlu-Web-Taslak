'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroSection() {
    const { scrollY } = useScroll();

    return (
        <div className="relative h-screen w-full overflow-hidden bg-ozunlu-950">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover opacity-60"
                >
                    <source src="/medya-hero.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-tight uppercase relative z-10">
                        HIZLI ÜRETİMLE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
                            GÜCÜ TANIMLIYORUZ
                        </span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-6 max-w-2xl"
                >
                    <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide">
                        Zamanında üretim, uzun ömürlü üst yapı çözümleri ve sahada güven veren performans
                    </p>
                </motion.div>
            </div>

            {/* Scroll Indicator - Mouse Animation */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
                style={{ opacity: useTransform(scrollY, [0, 200], [1, 0]) }}
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <div className="w-[30px] h-[50px] rounded-[15px] border-[2px] border-white/30 flex justify-center p-2">
                    <motion.div
                        animate={{
                            y: [0, 12, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="w-1 h-3 bg-white rounded-full"
                    />
                </div>
                <p className="text-white/50 text-xs uppercase tracking-widest mt-4 font-semibold animate-pulse">Kaydır</p>
            </motion.div>
        </div>
    );
}
