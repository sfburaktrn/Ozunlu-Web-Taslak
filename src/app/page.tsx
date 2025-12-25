"use client";

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';
import HeroSection from '@/components/home/HeroSection';
import StatsCounter from '@/components/home/StatsCounter';
import PartnersSlider from '@/components/home/PartnersSlider';
import AboutSection from '@/components/home/AboutSection';
import ProductsSection from '@/components/home/ProductsSection';
import GallerySection from '@/components/home/GallerySection';
import NewsFeed from '@/components/home/NewsFeed';
import MapPreview from '@/components/home/MapPreview';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';

export default function Home() {
    const [loading, setLoading] = useState(true);

    return (
        <>
            <AnimatePresence mode="wait">
                {loading && (
                    <LoadingScreen onComplete={() => setLoading(false)} />
                )}
            </AnimatePresence>

            {!loading && (
                <main className="flex min-h-screen flex-col bg-ozunlu-950">
                    <HeroSection />
                    <StatsCounter />
                    <AboutSection />
                    <WhyChooseUsSection />
                    <ProductsSection />
                    <PartnersSlider />
                    <MapPreview />
                    <GallerySection />
                    {/* <NewsFeed /> */}
                </main>
            )}
        </>
    );
}
