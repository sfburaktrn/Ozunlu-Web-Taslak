type LenisLike = {
    scrollTo: (target: number | string, options?: { duration?: number }) => void;
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
