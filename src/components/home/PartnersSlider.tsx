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
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let mouseX = -1000;
        let mouseY = -1000;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const onMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        };

        const drawGrid = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Grid settings
            const gridSize = 40; // Same grid size
            const dotSize = 1;

            // Draw Dots
            for (let x = 0; x < canvas.width; x += gridSize) {
                for (let y = 0; y < canvas.height; y += gridSize) {
                    const dx = x - mouseX;
                    const dy = y - mouseY;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const maxDistance = 200;

                    let alpha = 0.1;
                    let size = dotSize;

                    if (distance < maxDistance) {
                        const intensity = 1 - (distance / maxDistance);
                        alpha = 0.1 + (intensity * 0.4);
                        size = dotSize + (intensity * 1.5);

                        ctx.beginPath();
                        ctx.moveTo(x, y);
                        ctx.lineTo(mouseX, mouseY);
                        ctx.strokeStyle = `rgba(2, 34, 71, ${intensity * 0.5})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }

                    ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
                    ctx.beginPath();
                    ctx.arc(x, y, size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            animationFrameId = requestAnimationFrame(drawGrid);
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', onMouseMove);

        resize();
        drawGrid();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    // New Partner List (6 items)
    const partners = [
        { name: 'MAN', logo: '/images/partners/man.png', padding: 'p-4' },
        { name: 'Volvo', logo: '/images/partners/volvo.png', padding: 'p-2' },
        { name: 'Scania', logo: '/images/partners/scania.png', padding: 'p-6' },
        { name: 'Renault', logo: '/images/partners/renault.png', padding: 'p-2' },
        { name: 'Mercedes-Benz', logo: '/images/partners/mercedes.png', padding: 'p-1' },
        { name: 'Ford Trucks', logo: '/images/partners/ford-trucks.png', padding: 'p-5' },
    ];

    const ozunluRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
    const [allPaths, setAllPaths] = useState<{ start: { x: number, y: number }, end: { x: number, y: number } }[]>([]);

    useEffect(() => {
        const calculatePaths = () => {
            if (!ozunluRef.current || !sectionRef.current) return;
            const sectionRect = sectionRef.current.getBoundingClientRect();
            const ozunluRect = ozunluRef.current.getBoundingClientRect();

            // Target point (Ozunlu Logo Top Center)
            const endX = ozunluRect.left + ozunluRect.width / 2 - sectionRect.left;
            const endY = ozunluRect.top - sectionRect.top;

            const newPaths = partners.map((_, index) => {
                const item = itemsRef.current[index];
                if (!item) return null;
                const itemRect = item.getBoundingClientRect();

                // Source point (Partner Logo Bottom Center)
                const startX = itemRect.left + itemRect.width / 2 - sectionRect.left;
                const startY = itemRect.bottom - sectionRect.top;

                return { start: { x: startX, y: startY }, end: { x: endX, y: endY } };
            }).filter((p): p is { start: { x: number, y: number }, end: { x: number, y: number } } => p !== null);

            setAllPaths(newPaths);
        };

        // Calculate after a short delay to ensure layout is stable
        const timer = setTimeout(calculatePaths, 500);
        window.addEventListener('resize', calculatePaths);
        return () => {
            window.removeEventListener('resize', calculatePaths);
            clearTimeout(timer);
        };
    }, []);

    const getPathDefinition = (start: { x: number, y: number }, end: { x: number, y: number }) => {
        // Use fixed vertical controls to ensure symmetry and consistent curve shape
        // regardless of vertical distance. This ensures bottom-row connectors look identical.
        const controlOffset = 80;
        return `M ${start.x} ${start.y} C ${start.x} ${start.y + controlOffset}, ${end.x} ${end.y - controlOffset}, ${end.x} ${end.y}`;
    };

    return (
        <section ref={sectionRef} className="relative bg-[#000000] py-8 border-y border-white/5 overflow-hidden">
            {/* Interactive Background */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
            />

            {/* Connection Lines Layer - Behind Content (z-0) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
                <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#000552" stopOpacity="0.2" />
                        <stop offset="50%" stopColor="#000552" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#000552" stopOpacity="1" />
                    </linearGradient>
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
                            transition={{ duration: 1.5, ease: "easeInOut", delay: i * 0.1 }}
                            d={getPathDefinition(coords.start, coords.end)}
                            stroke="url(#lineGradient)"
                            strokeWidth="3"
                            fill="none"
                            filter="url(#glow)"
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
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
                        REFERANSLARIMIZ
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full" />
                    <p className="text-white/60 max-w-2xl mx-auto mt-3 text-lg font-light leading-relaxed">
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
                            <div className={`h-[100px] md:h-[120px] bg-white/5 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center ${partner.padding} transition-all duration-500 group-hover:bg-white/10 group-hover:border-primary/30 group-hover:shadow-[0_0_40px_rgba(0,5,82,0.1)] group-hover:-translate-y-2 relative z-10 bg-black`}>
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
                            src="/ozunlu-logo.png"
                            alt="Özünlü Logo"
                            fill
                            className="object-contain brightness-0 invert opacity-90"
                        />
                    </div>
                    <p className="text-lg md:text-xl text-white uppercase tracking-[0.2em] font-normal border-t border-white/10 inline-block pt-2 px-8 text-center">
                        Onaylı Üst Yapı Tedarikçisi
                    </p>
                </motion.div>
            </div>
        </section >
    );
}
