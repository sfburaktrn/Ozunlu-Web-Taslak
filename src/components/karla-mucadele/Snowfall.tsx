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
    const r = 2.8 + Math.random() * 6.5;
    return {
        x: Math.random() * width,
        y: fromTop ? -16 - Math.random() * 70 : Math.random() * height * 0.55,
        r,
        speedY: 0.65 + Math.random() * 1.45 + r * 0.05,
        drift: (Math.random() - 0.5) * 0.75,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.012 + Math.random() * 0.025,
        opacity: 0.72 + Math.random() * 0.28,
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
        // Alçak ama görünür tepecikler (~%8 viewport, bıçağın altında)
        const MAX_PILE_RATIO = heavySeed ? 0.48 : softSeed ? 0.08 : 0.36;
        const SETTLE_EVERY = 8;

        let width = 0;
        let height = 0;
        let flakes: Flake[] = [];
        let spray: Spray[] = [];
        let pile = new Float32Array(0);
        let bladeX: number | null = null;
        let lastBladeX: number | null = null;
        let accumulate = accumulateProp;
        // Yağarken de hafif birikim görünsün
        let growth = softSeed ? 0.35 : 1;
        let pileSeeded = false;
        let frame = 0;
        let raf = 0;
        let running = true;
        let wind = 0;
        let windTarget = 0;

        const flakeCount = () => {
            const area = width * height;
            const base = Math.round((area / 6500) * density);
            return Math.min(240, Math.max(80, base));
        };

        const colCount = () => Math.max(1, Math.ceil(width / COL_W));

        // softSeed: başta da tepecik var, scroll ile biraz büyür ama tavan düşük
        const maxHNow = () =>
            height * MAX_PILE_RATIO * (softSeed ? 0.55 + 0.45 * growth : 0.06 + 0.94 * growth);

        const hillWave = (i: number) => {
            // Birkaç frekans → doğal tepecikler
            return (
                0.62 +
                0.22 * Math.sin(i * 0.085) +
                0.12 * Math.sin(i * 0.19 + 1.2) +
                0.08 * Math.sin(i * 0.41 + 0.4)
            );
        };

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
            const n = Math.min(22, Math.max(8, Math.round(amount / 6) + 6));
            for (let k = 0; k < n; k++) {
                const burst = Math.random();
                spray.push({
                    x: x + (Math.random() - 0.1) * 22,
                    y: y - Math.random() * 16,
                    vx: 1.4 + Math.random() * 4.2 + burst * 1.5,
                    vy: -1.6 - Math.random() * 3.4 - burst * 1.2,
                    r: 1.8 + Math.random() * 3.8,
                    life: 1,
                    maxLife: 0.45 + Math.random() * 0.55,
                });
            }
            if (spray.length > 140) spray.splice(0, spray.length - 140);
        };

        /** Bıçak ilerledikçe temizle — önünde belirgin ince sırt + sprey */
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
                    if (x < bladeX - 10) {
                        pile[i] = Math.min(pile[i], maxH * 0.06);
                    } else if (x >= bladeX - 10 && x <= bladeX + 36) {
                        // Bıçak önünde belirgin ince sırt
                        const t = (x - (bladeX - 10)) / 46;
                        pile[i] = Math.min(pile[i], maxH * (0.28 + 0.2 * Math.sin(t * Math.PI)));
                    }
                }
                // Hareket azken de hafif sprey
                if (frame % 4 === 0) {
                    spawnSpray(bladeX + 8, height - Math.max(18, maxH * 0.45), maxH * 0.8);
                }
                return;
            }

            const from = Math.min(lastBladeX, bladeX);
            const to = Math.max(lastBladeX, bladeX);
            let scooped = 0;

            for (let i = 0; i < pile.length; i++) {
                const x = i * COL_W + COL_W * 0.5;
                if (x >= from - 10 && x <= to + 6) {
                    scooped += pile[i];
                    pile[i] = Math.min(pile[i] * 0.08, maxH * 0.05);
                } else if (x > to && x < to + 56) {
                    // Bıçağın hemen önünde görünen küçük tepecik
                    const t = (x - to) / 56;
                    const front = maxH * (0.32 + 0.22 * Math.sin(t * Math.PI));
                    pile[i] = Math.min(Math.max(pile[i] * 0.55, front * 0.85), front);
                }
            }

            if (scooped > 0.15) {
                spawnSpray(bladeX + 6, height - Math.max(18, maxH * 0.5), scooped * 0.85 + 8);
            } else {
                spawnSpray(bladeX + 6, height - Math.max(16, maxH * 0.4), 10);
            }

            for (let i = 0; i < pile.length; i++) {
                const x = i * COL_W;
                if (x < bladeX - 14) {
                    pile[i] = Math.min(pile[i] * 0.92, maxH * 0.07);
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
                    v = Math.min(v, maxH * 0.07);
                }
                next[i] = Math.min(maxH, v < 0 ? 0 : v);
            }
            pile = next;
        };

        const drawPile = () => {
            if (!accumulate || !pile.length) return;
            const last = pile.length - 1;

            // Kirli beyaz — saf beyaz arka planda belli olsun
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

            ctx.filter = 'blur(0.8px)';
            const g = ctx.createLinearGradient(0, height - height * MAX_PILE_RATIO, 0, height);
            g.addColorStop(0, 'rgba(198, 208, 220, 0.72)');
            g.addColorStop(0.35, 'rgba(214, 222, 232, 0.9)');
            g.addColorStop(0.7, 'rgba(226, 232, 240, 0.96)');
            g.addColorStop(1, 'rgba(236, 240, 246, 1)');
            ctx.fillStyle = g;
            ctx.fill();

            // Üst kenarda hafif gölge — kontrast
            ctx.filter = 'blur(1.5px)';
            ctx.globalAlpha = 0.35;
            ctx.strokeStyle = 'rgba(160, 174, 192, 0.55)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(0, height - pile[0]);
            for (let i = 1; i < pile.length; i++) {
                const prev = height - pile[i - 1];
                const curr = height - pile[i];
                const cpx = (i - 0.5) * COL_W;
                ctx.quadraticCurveTo(cpx, (prev + curr) / 2, i * COL_W, curr);
            }
            ctx.stroke();
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
                const maxH = maxHNow();
                const deep = softSeed ? 0.78 : heavySeed ? 0.72 : 0.48;
                for (let i = 0; i < pile.length; i++) {
                    pile[i] = maxH * Math.min(1, deep * hillWave(i));
                }
                pileSeeded = true;
                lastBladeX = null;
            }
        };

        const growTowardScroll = () => {
            if (!softSeed || !accumulate || !pile.length) return;
            const maxH = maxHNow();
            for (let i = 0; i < pile.length; i++) {
                const target = maxH * Math.min(1, 0.7 + 0.3 * hillWave(i));
                if (pile[i] < target) {
                    pile[i] += (target - pile[i]) * 0.04;
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
                ctx.arc(f.x, f.y, f.r * 1.55, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(170,184,204,${f.opacity * 0.28})`;
                ctx.fill();
                ctx.beginPath();
                ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(248,250,252,${f.opacity})`;
                ctx.fill();
            }

            drawPile();

            // Küreme spreyi — daha belirgin
            for (let i = spray.length - 1; i >= 0; i--) {
                const s = spray[i];
                s.life -= 0.022;
                s.x += s.vx;
                s.y += s.vy;
                s.vy += 0.14;
                s.vx *= 0.985;
                if (s.life <= 0) {
                    spray.splice(i, 1);
                    continue;
                }
                const a = (s.life / s.maxLife) * 0.95;
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r * 1.35, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(180,192,208,${a * 0.35})`;
                ctx.fill();
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(245,248,252,${a})`;
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
