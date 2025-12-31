import AfterSalesHero from '@/components/after-sales/AfterSalesHero';
import DocumentLibrary from '@/components/after-sales/DocumentLibrary';
import MapPreview from '@/components/home/MapPreview'; // Reusing the map component as requested

export default function AfterSalesPage() {
    return (
        <main className="min-h-screen bg-ozunlu-950">
            <AfterSalesHero />
            <DocumentLibrary />
            <MapPreview />
        </main>
    );
}
