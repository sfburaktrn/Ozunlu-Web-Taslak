'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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
                    className="h-full w-full object-cover"
                >
                    <source src="/banner-video-new.mp4" type="video/mp4" />
                </video>
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

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 1 }}
                    className="flex flex-col sm:flex-row gap-4 mt-10 md:mt-12"
                >
                    <Link
                        href="/damper#teklif-formu"
                        className="group relative px-8 py-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-[#002349] font-bold tracking-widest uppercase overflow-hidden transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:border-white/40 shadow-lg shadow-black/10"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            Damper Teklifi <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    </Link>

                    <Link
                        href="/yari-romork#teklif-formu"
                        className="group relative px-8 py-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-[#002349] font-bold tracking-widest uppercase overflow-hidden transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:border-white/40 shadow-lg shadow-black/10"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            Yarı Römork Teklifi <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    </Link>
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
