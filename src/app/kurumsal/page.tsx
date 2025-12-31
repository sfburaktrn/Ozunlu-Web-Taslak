import CorporateHero from '@/components/corporate/CorporateHero';
import CorporateValues from '@/components/corporate/CorporateValues';
import ProductionPhilosophy from '@/components/corporate/ProductionPhilosophy';
import LeaderMessage from '@/components/corporate/LeaderMessage';
import Timeline from '@/components/corporate/Timeline';
import FacilitiesMap from '@/components/corporate/FacilitiesMap';

export default function CorporatePage() {
    return (
        <main className="min-h-screen bg-ozunlu-950">
            <CorporateHero />
            <CorporateValues />
            <ProductionPhilosophy />
            <LeaderMessage />
            <Timeline />
            <FacilitiesMap />
        </main>
    );
}
