'use client';

import { useEffect, useRef, type MutableRefObject } from 'react';

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

type Spray = {
    x: number;
    y: number;
    vx: number;
    vy: number;
    r: number;
    life: number;
    maxLife: number;
};

function createFlake(width: number, height: number, fromTop: boolean): Flake {
    const r = 2 + Math.random() * 5;
    return {
        x: Math.random() * width,
        y: fromTop ? -14 - Math.random() * 60 : Math.random() * height * 0.55,
        r,
        speedY: 0.55 + Math.random() * 1.25 + r * 0.05,
        drift: (Math.random() - 0.5) * 0.65,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.01 + Math.random() * 0.02,
        opacity: 0.5 + Math.random() * 0.45,
    };
}

export type SnowfallApi = {
    setBladeX: (bladeX: number | null) => void;
    setAccumulate: (on: boolean) => void;
    /** 0–1: aşağı indikçe kar yüksekliği artsın */
    setGrowth: (growth: number) => void;
};

type Props = {
    className?: string;
    apiRef?: MutableRefObject<SnowfallApi | null>;
    enabled?: boolean;
    accumulate?: boolean;
    density?: number;
    /** Başlangıçta derin birikmiş kar */
    heavySeed?: boolean;
    /** Sayfa boyunca büyüyen hafif başlangıç birikimi */
    softSeed?: boolean;
};

/** Yuvarlak kar + gerçekçi küreme (öne/yana sırt + sprey) */
export default function Snowfall({
    className,
    apiRef,
    enabled = true,
    accumulate: accumulateProp = false,
    density = 1,
    heavySeed = false,
    softSeed = false,
}: Props) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !enabled) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        const COL_W = 4;
        // Bıçak üstünü geçmesin — viewport’un ~%10’u kadar
        const MAX_PILE_RATIO = heavySeed ? 0.48 : softSeed ? 0.1 : 0.36;
        const SETTLE_EVERY = 8;

        let width = 0;
        let height = 0;
        let flakes: Flake[] = [];
        let spray: Spray[] = [];
        let pile = new Float32Array(0);
        let bladeX: number | null = null;
        let lastBladeX: number | null = null;
        let accumulate = accumulateProp;
        let growth = softSeed ? 0.05 : 1;
        let pileSeeded = false;
        let frame = 0;
        let raf = 0;
        let running = true;
        let wind = 0;
        let windTarget = 0;

        const flakeCount = () => {
            const area = width * height;
            const base = Math.round((area / 8500) * density);
            return Math.min(180, Math.max(55, base));
        };

        const colCount = () => Math.max(1, Math.ceil(width / COL_W));

        const maxHNow = () => height * MAX_PILE_RATIO * (0.06 + 0.94 * growth);

        const pileAt = (x: number) => {
            const i = Math.max(0, Math.min(pile.length - 1, (x / COL_W) | 0));
            return pile[i] ?? 0;
        };

        const deposit = (x: number, amount: number) => {
            if (!accumulate || !pile.length) return;
            const i = Math.max(0, Math.min(pile.length - 1, (x / COL_W) | 0));
            if (bladeX != null && x < bladeX - 30) return;
            const maxH = maxHNow();
            let add = amount;
            if (softSeed && pile[i] > maxH * 0.92) add *= 0.25;
            pile[i] = Math.min(maxH, pile[i] + add);
            if (i > 0) pile[i - 1] = Math.min(maxH, pile[i - 1] + add * 0.35);
            if (i < pile.length - 1) pile[i + 1] = Math.min(maxH, pile[i + 1] + add * 0.35);
        };

        const spawnSpray = (x: number, y: number, amount: number) => {
            const n = Math.min(8, Math.max(2, Math.round(amount / 14)));
            for (let k = 0; k < n; k++) {
                spray.push({
                    x: x + (Math.random() - 0.15) * 14,
                    y: y - Math.random() * 10,
                    vx: 0.6 + Math.random() * 2.2,
                    vy: -0.8 - Math.random() * 2,
                    r: 1.2 + Math.random() * 2.4,
                    life: 1,
                    maxLife: 0.35 + Math.random() * 0.35,
                });
            }
            if (spray.length > 80) spray.splice(0, spray.length - 80);
        };

        /** Bıçak ilerledikçe karı temizle — önde yığılma yok */
        const plowAdvance = () => {
            if (bladeX == null || !pile.length) return;

            if (lastBladeX == null) {
                lastBladeX = bladeX - 2;
            }

            const delta = bladeX - lastBladeX;
            const maxH = maxHNow();

            if (Math.abs(delta) < 0.35) {
                for (let i = 0; i < pile.length; i++) {
                    const x = i * COL_W + COL_W * 0.5;
                    if (x < bladeX + 12) pile[i] *= 0.86;
                }
                return;
            }

            const from = Math.min(lastBladeX, bladeX);
            const to = Math.max(lastBladeX, bladeX);
            let scooped = 0;

            for (let i = 0; i < pile.length; i++) {
                const x = i * COL_W + COL_W * 0.5;
                if (x >= from - 16 && x <= to + 14) {
                    scooped += pile[i];
                    pile[i] *= 0.05;
                } else if (x > to && x < to + 70) {
                    const t = 1 - (x - to) / 70;
                    pile[i] *= 1 - t * 0.35;
                }
            }

            if (scooped > 0.3) {
                spawnSpray(bladeX, height - 22, scooped * 0.4);
            }

            for (let i = 0; i < pile.length; i++) {
                const x = i * COL_W;
                if (x < bladeX - 12) {
                    pile[i] *= 0.9;
                    if (pile[i] < 2) pile[i] = Math.min(pile[i], maxH * 0.025);
                }
            }

            lastBladeX = bladeX;
        };

        if (apiRef) {
            apiRef.current = {
                setBladeX: (x) => {
                    if (x == null) lastBladeX = null;
                    bladeX = x;
                },
                setAccumulate: (on) => {
                    accumulate = on;
                },
                setGrowth: (g) => {
                    growth = Math.max(0, Math.min(1, g));
                },
            };
        }

        const settlePile = () => {
            if (!accumulate || pile.length < 3) return;
            const next = new Float32Array(pile.length);
            const maxH = maxHNow();
            for (let i = 0; i < pile.length; i++) {
                const l = pile[i > 0 ? i - 1 : i];
                const c = pile[i];
                const r = pile[i < pile.length - 1 ? i + 1 : i];
                let v = c * 0.78 + l * 0.11 + r * 0.11;
                if (bladeX != null && i * COL_W < bladeX - 20) {
                    v = Math.min(v, maxH * 0.05);
                }
                next[i] = Math.min(maxH, v < 0 ? 0 : v);
            }
            pile = next;
        };

        const drawPile = () => {
            if (!accumulate || !pile.length) return;
            const last = pile.length - 1;

            // Fotoğraftaki kar zeminiyle birleşsin: sert gölge/kenar yok, yumuşak yüzey
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(0, height + 2);
            ctx.lineTo(0, height - pile[0]);
            for (let i = 1; i < pile.length; i++) {
                const prev = height - pile[i - 1];
                const curr = height - pile[i];
                const cpx = (i - 0.5) * COL_W;
                ctx.quadraticCurveTo(cpx, (prev + curr) / 2, i * COL_W, curr);
            }
            ctx.lineTo(width, height - pile[last]);
            ctx.lineTo(width, height + 2);
            ctx.closePath();

            // Üst kenarı soft blur ile foto karına karıştır
            ctx.filter = 'blur(1.2px)';
            const g = ctx.createLinearGradient(0, height - height * MAX_PILE_RATIO, 0, height);
            g.addColorStop(0, 'rgba(255,255,255,0.5)');
            g.addColorStop(0.4, 'rgba(255,255,255,0.88)');
            g.addColorStop(0.8, 'rgba(255,255,255,0.96)');
            g.addColorStop(1, 'rgba(255,255,255,1)');
            ctx.fillStyle = g;
            ctx.fill();

            ctx.filter = 'blur(2.5px)';
            ctx.globalAlpha = 0.4;
            ctx.fillStyle = 'rgba(255,255,255,0.85)';
            ctx.fill();
            ctx.restore();
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
                if (old.length && pileSeeded) {
                    for (let i = 0; i < cols; i++) {
                        pile[i] = old[Math.min(((i / cols) * old.length) | 0, old.length - 1)];
                    }
                } else {
                    pileSeeded = false;
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

            if (accumulate && pile.length && !pileSeeded) {
                // Girişte çok düşük — scroll ile büyür
                const maxH = maxHNow();
                const deep = softSeed ? 0.4 : heavySeed ? 0.72 : 0.48;
                for (let i = 0; i < pile.length; i++) {
                    const wave = 0.7 + 0.3 * Math.sin(i * 0.11) + 0.12 * Math.sin(i * 0.37);
                    pile[i] = maxH * Math.min(1, deep * wave);
                }
                pileSeeded = true;
                lastBladeX = null;
            }
        };

        const growTowardScroll = () => {
            if (!softSeed || !accumulate || !pile.length) return;
            const maxH = maxHNow();
            for (let i = 0; i < pile.length; i++) {
                const wave = 0.72 + 0.28 * Math.sin(i * 0.11) + 0.1 * Math.sin(i * 0.37);
                const target = maxH * (0.55 + 0.45 * wave);
                if (pile[i] < target) {
                    pile[i] += (target - pile[i]) * 0.045;
                } else if (pile[i] > maxH) {
                    pile[i] = maxH;
                }
            }
        };

        const draw = () => {
            if (!running) return;
            ctx.clearRect(0, 0, width, height);
            frame++;

            if (frame % 100 === 0) windTarget = (Math.random() - 0.5) * 0.55;
            wind += (windTarget - wind) * 0.02;
            if (accumulate && frame % SETTLE_EVERY === 0) settlePile();
            if (accumulate && softSeed && frame % 3 === 0) growTowardScroll();
            if (accumulate) plowAdvance();

            for (let i = 0; i < flakes.length; i++) {
                const f = flakes[i];
                f.wobble += f.wobbleSpeed;
                f.x += f.drift + Math.sin(f.wobble) * 0.32 + wind;
                f.y += f.speedY;

                if (f.x < -4) f.x = width + 4;
                else if (f.x > width + 4) f.x = -4;

                const ground = accumulate ? height - pileAt(f.x) : height + 8;
                if (f.y + f.r >= ground) {
                    if (accumulate) {
                        deposit(
                            f.x,
                            f.r * (softSeed ? 0.85 : heavySeed ? 1.15 : 0.7) + (softSeed ? 0.85 : 1.2),
                        );
                    }
                    Object.assign(f, createFlake(width, height, true));
                    continue;
                }

                ctx.beginPath();
                ctx.arc(f.x, f.y, f.r * 1.25, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,255,255,${f.opacity * 0.28})`;
                ctx.fill();
                ctx.beginPath();
                ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,255,255,${f.opacity})`;
                ctx.fill();
            }

            drawPile();

            // Küreme spreyi
            for (let i = spray.length - 1; i >= 0; i--) {
                const s = spray[i];
                s.life -= 0.028;
                s.x += s.vx;
                s.y += s.vy;
                s.vy += 0.12;
                s.vx *= 0.99;
                if (s.life <= 0) {
                    spray.splice(i, 1);
                    continue;
                }
                const a = (s.life / s.maxLife) * 0.85;
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,255,255,${a})`;
                ctx.fill();
            }

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
            if (apiRef) apiRef.current = null;
        };
    }, [apiRef, enabled, accumulateProp, density, heavySeed, softSeed]);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden
            className={className ?? 'pointer-events-none absolute inset-0 z-[1] h-full w-full'}
        />
    );
}
