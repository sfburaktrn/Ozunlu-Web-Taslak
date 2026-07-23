type LenisLike = {
    scrollTo: (
        target: number | string,
        options?: { duration?: number; immediate?: boolean },
    ) => void;
    destroy: () => void;
};

let lenisInstance: LenisLike | null = null;

export function setLenisInstance(instance: LenisLike | null) {
    lenisInstance = instance;
}

export function scrollToTop() {
    if (lenisInstance) {
        lenisInstance.scrollTo(0, { duration: 1.15 });
        return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function scrollToY(
    y: number,
    options?: { duration?: number; immediate?: boolean },
) {
    if (lenisInstance) {
        lenisInstance.scrollTo(y, options);
        return;
    }
    if (options?.immediate) {
        window.scrollTo(0, y);
        return;
    }
    window.scrollTo({ top: y, behavior: 'smooth' });
}
