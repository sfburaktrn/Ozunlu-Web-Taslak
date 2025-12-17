'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef, useEffect } from 'react';

// Partner logos
const partners = [
    { name: 'Ford Trucks', logo: '/images/partners/ford-trucks.png' },
    { name: 'Isuzu', logo: '/images/partners/isuzu.png' },
    { name: 'Habas', logo: '/images/partners/habas.png' },
    { name: 'MAN', logo: '/images/partners/man.png' },
    { name: 'Iveco', logo: '/images/partners/iveco.png' },
    { name: 'Mercedes-Benz', logo: '/images/partners/mercedes.png' },
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
            const gridSize = 40;
            const dotSize = 1;

            // Draw Dots
            for (let x = 0; x < canvas.width; x += gridSize) {
                for (let y = 0; y < canvas.height; y += gridSize) {
                    // Calculate distance to mouse
                    const dx = x - mouseX;
                    const dy = y - mouseY;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const maxDistance = 200;

                    let alpha = 0.1; // Base visibility
                    let size = dotSize;

                    if (distance < maxDistance) {
                        const intensity = 1 - (distance / maxDistance);
                        alpha = 0.1 + (intensity * 0.4);
                        size = dotSize + (intensity * 1.5);

                        // Draw connection line if close enough
                        ctx.beginPath();
                        ctx.moveTo(x, y);
                        ctx.lineTo(mouseX, mouseY);
                        ctx.strokeStyle = `rgba(2, 34, 71, ${intensity * 0.5})`; // Navy Blue with alpha
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
        // We will attach mouse move to the section container via the window listener logic used in StatsCounter
        // But here let's stick to the canvas container logic or global if needed.
        // The implementation in StatsCounter used: window.addEventListener('mousemove', onMouseMove);
        // Let's copy that for consistency as it was working for the user.
        window.addEventListener('mousemove', onMouseMove);

        resize();
        drawGrid();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section className="relative bg-[#000000] py-24 border-y border-white/5 overflow-hidden">
            {/* Interactive Background */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
            />

            <div className="container mx-auto px-4 mb-16 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        REFERANSLARIMIZ
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full" />
                </motion.div>
            </div>

            <div className="flex overflow-hidden relative z-10 before:absolute before:left-0 before:top-0 before:z-20 before:h-full before:w-[150px] before:bg-gradient-to-r before:from-[#000000] before:to-transparent after:absolute after:right-0 after:top-0 after:z-20 after:h-full after:w-[150px] after:bg-gradient-to-l after:from-[#000000] after:to-transparent">
                <motion.div
                    className="flex flex-nowrap"
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30, // Slower for elegance
                        ease: "linear",
                    }}
                    style={{ display: 'flex', gap: '4rem', width: 'max-content' }}
                >
                    {/* Quadruple the partners list for smooth infinite scroll */}
                    {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 relative group cursor-pointer"
                        >
                            <div className="w-[200px] h-[100px] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center p-4 transition-all duration-500 group-hover:bg-white/10 group-hover:border-primary/30 group-hover:shadow-[0_0_40px_rgba(0,5,82,0.1)] group-hover:-translate-y-1">
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    width={200}
                                    height={100}
                                    className="max-w-full max-h-full object-contain filter grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                                />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
