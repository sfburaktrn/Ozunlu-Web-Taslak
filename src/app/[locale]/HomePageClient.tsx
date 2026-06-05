'use client';

import { useState, useEffect } from 'react';
import HeroSection from '@/components/home/HeroSection';
import StatsCounter from '@/components/home/StatsCounter';
import DamperHero from '@/components/home/DamperHero';
import WebIntro from '@/components/home/WebIntro';
import TrailerHero from '@/components/home/TrailerHero';
import EquipmentHero from '@/components/home/EquipmentHero';
import PartnersSlider from '@/components/home/PartnersSlider';
import AboutSection from '@/components/home/AboutSection';
import MapPreview from '@/components/home/MapPreview';
import GallerySection from '@/components/home/GallerySection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';

export default function HomePageClient() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [loading]);

    return (
        <main className="flex min-h-screen flex-col bg-white">
            <HeroSection />
            <StatsCounter />
            <AboutSection />
            <TrailerHero />
            <DamperHero />
            <EquipmentHero />
            <PartnersSlider />
            <WebIntro />
            <WhyChooseUsSection />
            <MapPreview />
            <GallerySection />
        </main>
    );
}
