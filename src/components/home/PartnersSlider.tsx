'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

// Partner logos
const partners = [
    { name: 'MAN', logo: '/images/partners/man.png', padding: 'p-4' },
    { name: 'Volvo', logo: '/images/partners/volvo.png', padding: 'p-2' },
    { name: 'Scania', logo: '/images/partners/scania.png', padding: 'p-6' },
    { name: 'Renault', logo: '/images/partners/renault.png', padding: 'p-2' },
    { name: 'Mercedes-Benz', logo: '/images/partners/mercedes.png', padding: 'p-1' },
    { name: 'Ford Trucks', logo: '/images/partners/ford-trucks.png', padding: 'p-5' },
];

export default function PartnersSlider() {
    // const canvasRef = useRef<HTMLCanvasElement>(null); removed


    const ozunluRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
    const [allPaths, setAllPaths] = useState<{ start: { x: number, y: number }, end: { x: number, y: number } }[]>([]);

    useEffect(() => {
        const calculatePaths = () => {
            if (!ozunluRef.current || !containerRef.current) return;
            const containerRect = containerRef.current.getBoundingClientRect();
            const ozunluRect = ozunluRef.current.getBoundingClientRect();

            // Target point: Top center of the Özünlü Logo area
            const targetX = ozunluRect.left + ozunluRect.width / 2 - containerRect.left;
            const targetY = ozunluRect.top - containerRect.top; // Slightly above the logo container

            // We want all arrows to point to roughly the same spot, but maybe spread slightly to avoid 100% overlap clashing
            // But usually "pointing to the logo" implies a single convergence point.
            // Let's stick to a single target point for the arrowheads to meet.

            const newPaths = partners.map((_, index) => {
                const item = itemsRef.current[index];
                if (!item) return null;
                const itemRect = item.getBoundingClientRect();

                // Start point: Bottom center of each partner card
                const startX = itemRect.left + itemRect.width / 2 - containerRect.left;
                const startY = itemRect.bottom - containerRect.top;

                return { start: { x: startX, y: startY }, end: { x: targetX, y: targetY } };
            }).filter((p): p is { start: { x: number, y: number }, end: { x: number, y: number } } => p !== null);

            setAllPaths(newPaths);
        };

        // Recalculate on resize and initial load
        calculatePaths();
        window.addEventListener('resize', calculatePaths);
        const timer = setTimeout(calculatePaths, 500); // Safety delay for layout shifts

        return () => {
            window.removeEventListener('resize', calculatePaths);
            clearTimeout(timer);
        };
    }, []);

    // Simple Quadratic Bezier for a smooth "Gravity" curve
    // Pulls the line down before curving to the center
    const getPathDefinition = (start: { x: number, y: number }, end: { x: number, y: number }) => {
        // Control point: Horizontal center, but vertically lower than the start to give a "hanging" or "directed" feel
        // Actually for pointing arrows, a direct curve is best.
        // Control point x = halfway
        // Control point y = halfway vertical? Or favoring the bottom?

        // Let's try a cubic curve that goes down then in.
        const cp1x = start.x;
        const cp1y = start.y + 50; // Go down first

        const cp2x = end.x;
        const cp2y = end.y - 80; // Valid approach from top

        return `M ${start.x} ${start.y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${end.x} ${end.y - 10}`; // End slightly above target to show arrow
    };

    return (
        <section className="bg-white py-8">
            <div className="container mx-auto px-4">
                <div ref={containerRef} className="relative bg-[#f5f5f7] rounded-[2.5rem] py-16 overflow-hidden isolate shadow-sm">

                    {/* Connection Lines Layer */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
                        <defs>
                            <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#1e40af" stopOpacity="1" />
                            </linearGradient>
                            {/* Define Arrow Marker */}
                            <marker
                                id="arrowhead"
                                markerWidth="6"
                                markerHeight="4"
                                refX="5"
                                refY="2"
                                orient="auto"
                            >
                                <polygon points="0 0, 6 2, 0 4" fill="#1e40af" />
                            </marker>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                        <AnimatePresence>
                            {allPaths.map((coords, i) => (
                                <motion.path
                                    key={i}
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 + (i * 0.1) }}
                                    d={getPathDefinition(coords.start, coords.end)}
                                    fill="none"
                                    stroke="url(#arrowGradient)"
                                    strokeWidth="1.5"
                                    markerEnd="url(#arrowhead)" // Add arrowhead here
                                    style={{ filter: 'url(#glow)' }}
                                />
                            ))}
                        </AnimatePresence>
                    </svg>


                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-8"
                        >
                            <h2 className="text-3xl md:text-5xl font-bold text-black mb-2">
                                REFERANSLARIMIZ
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full" />
                            <p className="text-gray-800 max-w-2xl mx-auto mt-3 text-lg font-light leading-relaxed">
                                Sektörün öncü markalarıyla kurduğumuz güçlü iş birlikleri sayesinde, kalite ve güveni her teslimatta bir adım öteye taşıyoruz.
                            </p>
                        </motion.div>

                        {/* Grid Layout */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
                            {partners.map((partner, index) => (
                                <motion.div
                                    key={index}
                                    ref={el => { itemsRef.current[index] = el }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group"
                                >
                                    <div className={`h-[100px] md:h-[120px] bg-white border border-gray-200 rounded-xl flex items-center justify-center ${partner.padding} transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-[0_0_40px_rgba(0,5,82,0.1)] group-hover:-translate-y-2 relative z-10 shadow-sm`}>
                                        <div className="relative w-full h-full p-1">
                                            <Image
                                                src={partner.logo}
                                                alt={partner.name}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Footer Text */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="mt-10 flex flex-col items-center relative z-30"
                        >
                            <div ref={ozunluRef} className="relative w-40 h-14 mb-1">
                                <Image
                                    src="/ozunlu-logo-new.png"
                                    alt="Özünlü Logo"
                                    fill
                                    className="object-contain opacity-90"
                                />
                            </div>
                            <p className="text-lg md:text-xl text-primary uppercase tracking-[0.2em] font-normal border-t border-gray-200 inline-block pt-2 px-8 text-center">
                                Onaylı Üst Yapı Tedarikçisi
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
