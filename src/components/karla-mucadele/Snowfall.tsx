'use client';

import { useEffect, useRef } from 'react';

type Flake = {
    x: number;
    y: number;
    r: number;
    speedY: number;
    drift: number;
    wobble: number;
    wobbleSpeed: number;
    opacity: number;
};

function createFlake(width: number, height: number, fromTop: boolean): Flake {
    // Lapa lapa: iri yumuşak yuvarlak taneler
    const r = 2.2 + Math.random() * 5.5;
    return {
        x: Math.random() * width,
        y: fromTop ? -12 - Math.random() * 50 : Math.random() * height * 0.7,
        r,
        speedY: 0.65 + Math.random() * 1.35 + r * 0.06,
        drift: (Math.random() - 0.5) * 0.7,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.01 + Math.random() * 0.022,
        opacity: 0.5 + Math.random() * 0.45,
    };
}

type Props = {
    className?: string;
};

/** Yuvarlak yumuşak kar + altta birikme — hafif canvas */
export default function Snowfall({ className }: Props) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        const COL_W = 6;
        const MAX_PILE_RATIO = 0.42;
        const SETTLE_EVERY = 12;

        let width = 0;
        let height = 0;
        let flakes: Flake[] = [];
        let pile: Float32Array = new Float32Array(0);
        let frame = 0;
        let raf = 0;
        let running = true;
        let wind = 0;
        let windTarget = 0;

        const flakeCount = () => {
            const area = width * height;
            // Yoğun ama basit çizim — kasma olmadan lapa lapa
            return Math.min(180, Math.max(80, Math.round(area / 7000)));
        };

        const colCount = () => Math.max(1, Math.ceil(width / COL_W));

        const pileAt = (x: number) => {
            const i = Math.max(0, Math.min(pile.length - 1, (x / COL_W) | 0));
            return pile[i] ?? 0;
        };

        const deposit = (x: number, amount: number) => {
            const i = Math.max(0, Math.min(pile.length - 1, (x / COL_W) | 0));
            const maxH = height * MAX_PILE_RATIO;
            pile[i] = Math.min(maxH, pile[i] + amount);
            if (i > 0) pile[i - 1] = Math.min(maxH, pile[i - 1] + amount * 0.4);
            if (i < pile.length - 1) pile[i + 1] = Math.min(maxH, pile[i + 1] + amount * 0.4);
        };

        const settlePile = () => {
            const n = pile.length;
            if (n < 3) return;
            const next = new Float32Array(n);
            const maxH = height * MAX_PILE_RATIO;
            for (let i = 0; i < n; i++) {
                const l = pile[i > 0 ? i - 1 : i];
                const c = pile[i];
                const r = pile[i < n - 1 ? i + 1 : i];
                let v = c * 0.72 + l * 0.14 + r * 0.14;
                const avg = (l + r) * 0.5;
                if (c > avg + 5) v -= (c - avg) * 0.07;
                next[i] = Math.min(maxH, v < 0 ? 0 : v);
            }
            pile = next;
        };

        const drawPile = () => {
            if (pile.length === 0) return;
            const last = pile.length - 1;

            ctx.beginPath();
            ctx.moveTo(0, height);
            ctx.lineTo(0, height - pile[0]);
            for (let i = 1; i < pile.length; i++) {
                ctx.lineTo(i * COL_W, height - pile[i]);
            }
            ctx.lineTo(width, height - pile[last]);
            ctx.lineTo(width, height);
            ctx.closePath();
            ctx.fillStyle = '#f4f8fc';
            ctx.fill();
        };

        const resize = () => {
            const parent = canvas.parentElement;
            width = parent?.clientWidth ?? window.innerWidth;
            height = parent?.clientHeight ?? window.innerHeight;
            const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
            canvas.width = (width * dpr) | 0;
            canvas.height = (height * dpr) | 0;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            const cols = colCount();
            if (pile.length !== cols) {
                const old = pile;
                pile = new Float32Array(cols);
                if (old.length) {
                    for (let i = 0; i < cols; i++) {
                        pile[i] = old[Math.min(((i / cols) * old.length) | 0, old.length - 1)];
                    }
                }
            }

            const count = flakeCount();
            if (!flakes.length) {
                flakes = Array.from({ length: count }, () => createFlake(width, height, false));
            } else if (flakes.length < count) {
                while (flakes.length < count) flakes.push(createFlake(width, height, true));
            } else {
                flakes.length = count;
            }
        };

        const draw = () => {
            if (!running) return;
            ctx.clearRect(0, 0, width, height);
            frame++;

            if (frame % 120 === 0) windTarget = (Math.random() - 0.5) * 0.7;
            wind += (windTarget - wind) * 0.015;
            if (frame % SETTLE_EVERY === 0) settlePile();

            for (let i = 0; i < flakes.length; i++) {
                const f = flakes[i];
                f.wobble += f.wobbleSpeed;
                f.x += f.drift + Math.sin(f.wobble) * 0.35 + wind;
                f.y += f.speedY;

                if (f.x < -4) f.x = width + 4;
                else if (f.x > width + 4) f.x = -4;

                if (f.y + f.r >= height - pileAt(f.x)) {
                    deposit(f.x, f.r * 0.7 + 1);
                    Object.assign(f, createFlake(width, height, true));
                    continue;
                }

                // Tek daire + hafif dış halka = yumuşak “lapa” hissi, gradient yok
                ctx.beginPath();
                ctx.arc(f.x, f.y, f.r * 1.35, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,255,255,${f.opacity * 0.28})`;
                ctx.fill();
                ctx.beginPath();
                ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,255,255,${f.opacity})`;
                ctx.fill();
            }

            drawPile();
            raf = requestAnimationFrame(draw);
        };

        resize();
        draw();

        const onResize = () => resize();
        window.addEventListener('resize', onResize);

        const onVisibility = () => {
            if (document.hidden) {
                running = false;
                cancelAnimationFrame(raf);
            } else if (!running) {
                running = true;
                raf = requestAnimationFrame(draw);
            }
        };
        document.addEventListener('visibilitychange', onVisibility);

        return () => {
            running = false;
            cancelAnimationFrame(raf);
            window.removeEventListener('resize', onResize);
            document.removeEventListener('visibilitychange', onVisibility);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden
            className={className ?? 'pointer-events-none absolute inset-0 z-[1] h-full w-full'}
        />
    );
}
