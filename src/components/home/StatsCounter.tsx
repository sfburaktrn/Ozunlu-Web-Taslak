'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
    { label: 'Üretim Üssü', value: 3, suffix: '' },
    { label: 'İhracat Ülkesi', value: 50, suffix: '+' },
    { label: 'Yıllık Çelik İşleme (Ton)', value: 12000, suffix: '' },
    { label: 'Yıllık Tecrübe', value: 45, suffix: '' },
];

const Counter = ({ from, to, duration }: { from: number; to: number; duration: number }) => {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true });

    useEffect(() => {
        if (!inView) return;

        const node = nodeRef.current;
        if (!node) return;

        let startTime: number;

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

            node.textContent = Math.floor(progress * (to - from) + from).toLocaleString();

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    }, [inView, from, to, duration]);

    return <span ref={nodeRef} />;
};

export default function StatsCounter() {
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
        window.addEventListener('mousemove', onMouseMove); // Global mouse move for smoother effect or container specific
        // Better to attach to canvas parent or keep global if we want effect when entering section
        // Let's stick to canvas 'mousemove' if possible, but cleaner is adding listener to `canvas` if it covers area.
        // But since canvas is absolute, we can add listener to window or specific container.
        // Actually, let's attach to the section logic via the canvas ref's parent if possible, 
        // but `window` is easiest for "mouse moves over that surface" if we calculate relative.
        // For simplicity, let's just use the canvas's mouse move which will bubble or capture.
        // Wait, the previous listener was on window, let me fix onMouseMove to be relative to canvas for sure.

        // Correcting mouse listener strategy:
        // Use a listener on the canvas/container. 
        // But since we want it to react "when mouse moves on that surface", let's modify the useEffect to bind to the container.

        resize();
        drawGrid();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section className="relative bg-[#000000] py-20 border-y border-white/5 overflow-hidden">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
            />

            <div className="container mx-auto px-4 relative z-10" onMouseMove={(e) => {
                // Optional: Localize mouse tracking to this container if we don't use window listener
            }}>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="text-center group"
                        >
                            <div className="text-4xl md:text-6xl font-black text-white mb-2 flex justify-center items-center gap-1 transition-colors duration-300 group-hover:text-white">
                                <Counter from={0} to={stat.value} duration={2} />
                                <span className="text-white">{stat.suffix}</span>
                            </div>
                            <p className="text-gray-400 uppercase tracking-widest text-sm font-semibold transition-colors duration-300 group-hover:text-white">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
