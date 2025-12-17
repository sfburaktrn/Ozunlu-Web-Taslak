'use client';

export const contactDepartments = [
    { id: 'sales', label: 'SATIŞ & PAZARLAMA', email: 'satis@ozunlu.com' },
    { id: 'service', label: 'SATIŞ SONRASI HİZMETLER', email: 'servis@ozunlu.com' },
    { id: 'export', label: 'İHRACAT', email: 'export@ozunlu.com' },
    { id: 'hr', label: 'İNSAN KAYNAKLARI', email: 'ik@ozunlu.com' }
];

interface ContactTabsProps {
    activeTab: string;
    setActiveTab: (id: string) => void;
}

export default function ContactTabs({ activeTab, setActiveTab }: ContactTabsProps) {
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {contactDepartments.map((dept) => (
                <button
                    key={dept.id}
                    onClick={() => setActiveTab(dept.id)}
                    className={`px-6 py-3 rounded-full text-sm font-bold tracking-wider transition-all border ${activeTab === dept.id
                            ? 'bg-primary text-white border-primary scale-105 shadow-glow'
                            : 'bg-transparent text-gray-400 border-gray-700 hover:border-gray-500 hover:text-white'
                        }`}
                >
                    {dept.label}
                </button>
            ))}
        </div>
    );
}
