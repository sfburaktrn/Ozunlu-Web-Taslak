'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import HeroSection from '@/components/home/HeroSection';
import StatsCounter from '@/components/home/StatsCounter';
import DamperHero from '@/components/home/DamperHero';
import TrailerHero from '@/components/home/TrailerHero';
import EquipmentHero from '@/components/home/EquipmentHero';
import PartnersSlider from '@/components/home/PartnersSlider';
import AboutSection from '@/components/home/AboutSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';

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
