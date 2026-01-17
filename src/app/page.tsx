"use client";

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';
import HeroSection from '@/components/home/HeroSection';
import StatsCounter from '@/components/home/StatsCounter';
import DamperHero from '@/components/home/DamperHero';
import TrailerHero from '@/components/home/TrailerHero';
import EquipmentHero from '@/components/home/EquipmentHero';
import PartnersSlider from '@/components/home/PartnersSlider';
import AboutSection from '@/components/home/AboutSection';
import ProductsSection from '@/components/home/ProductsSection';
import GallerySection from '@/components/home/GallerySection';
import NewsFeed from '@/components/home/NewsFeed';
import MapPreview from '@/components/home/MapPreview';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';

export default function Home() {
    const [loading, setLoading] = useState(true);

    // Force scroll to top on mount and when loading finishes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [loading]);

    return (
        <>
            {/* <AnimatePresence mode="wait">
                {loading && (
                    <LoadingScreen onComplete={() => setLoading(false)} />
                )}
            </AnimatePresence> */}

            <main className="flex min-h-screen flex-col bg-white">
                <HeroSection />
                <StatsCounter />
                <DamperHero />
                <TrailerHero />
                <EquipmentHero />
                <AboutSection />
                <PartnersSlider />
                <WhyChooseUsSection />
                <ProductsSection />

                <MapPreview />
                <GallerySection />
                {/* <NewsFeed /> */}
            </main>
        </>
    );
}
