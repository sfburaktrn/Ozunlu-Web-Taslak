import AfterSalesHero from '@/components/after-sales/AfterSalesHero';
import DocumentLibrary from '@/components/after-sales/DocumentLibrary';
import MapPreview from '@/components/home/MapPreview';

export default function AfterSalesPage() {
    return (
        <main className="min-h-screen bg-white pt-24 pb-12 md:pt-32 md:pb-24 px-4 sm:px-6">
            <AfterSalesHero />
            <DocumentLibrary />
            <MapPreview />
        </main>
    );
}
