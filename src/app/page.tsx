import HeroSection from '@/components/home/HeroSection';
import StatsCounter from '@/components/home/StatsCounter';
import PartnersSlider from '@/components/home/PartnersSlider';
import AboutSection from '@/components/home/AboutSection';
import ProductsSection from '@/components/home/ProductsSection';
import NewsFeed from '@/components/home/NewsFeed';
import MapPreview from '@/components/home/MapPreview';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-ozunlu-950">
            <HeroSection />
            <StatsCounter />
            <AboutSection />
            <PartnersSlider />       
            <ProductsSection />
            <MapPreview />
            <NewsFeed />
        </main>
    );
}
