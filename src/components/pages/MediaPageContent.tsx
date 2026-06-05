import ImageGallery from '@/components/media/ImageGallery';
import MediaHero from '@/components/media/MediaHero';
import IndustryInsights from '@/components/media/IndustryInsights';

export default function MediaPageContent() {
    return (
        <main className="min-h-screen bg-ozunlu-950">
            <MediaHero />
            <ImageGallery />
            <IndustryInsights />
        </main>
    );
}
