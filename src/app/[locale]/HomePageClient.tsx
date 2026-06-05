'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import HeroSection from '@/components/home/HeroSection';

const StatsCounter = dynamic(() => import('@/components/home/StatsCounter'));
const AboutSection = dynamic(() => import('@/components/home/AboutSection'));
const TrailerHero = dynamic(() => import('@/components/home/TrailerHero'));
const DamperHero = dynamic(() => import('@/components/home/DamperHero'));
const EquipmentHero = dynamic(() => import('@/components/home/EquipmentHero'));
const PartnersSlider = dynamic(() => import('@/components/home/PartnersSlider'));
const WhyChooseUsSection = dynamic(() => import('@/components/home/WhyChooseUsSection'));
const MapPreview = dynamic(() => import('@/components/home/MapPreview'), { ssr: false });
const GallerySection = dynamic(() => import('@/components/home/GallerySection'));

export default function HomePageClient() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="flex min-h-screen flex-col bg-white">
            <HeroSection />
            <StatsCounter />
            <AboutSection />
            <TrailerHero />
            <DamperHero />
            <EquipmentHero />
            <PartnersSlider />
            <WhyChooseUsSection />
            <MapPreview />
            <GallerySection />
        </main>
    );
}
