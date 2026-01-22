'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, Send, CreditCard, Banknote, Building2, User, Phone, Mail, MessageSquare, Info } from 'lucide-react';

interface FormData {
    type: 'damper' | 'dorse';
    // Damper Specific
    brand: string;
    model: string;
    cargoType: string;
    // Shared / Dorse Specific
    volumeM3: string;
    thickness: string;
    quantity: string;
    axle: 'yerli' | 'yabancı' | ''; // Added Axle Option
    // Common
    paymentMethod: 'pesin' | 'vadeli' | '';
    // Contact
    companyName: string;
    contactPerson: string;
    contactPhone: string;
    email: string;
    heardFrom: string;
    message: string;
}


interface SelectedProduct {
    id: string;
    name: string;
    code: string;
    image: string;
}

interface ProposalFormProps {
    initialProduct: 'damper' | 'dorse';
    selectedProduct?: SelectedProduct | null;
    onClearSelection?: () => void;
}

export default function ProposalForm({ initialProduct, selectedProduct, onClearSelection }: ProposalFormProps) {
    const [formData, setFormData] = useState<FormData>({
        type: initialProduct,
        brand: '',
        model: '',
        cargoType: '',
        volumeM3: '',
        thickness: '',
        quantity: '1',
        axle: '', // Initial state for Axle
        paymentMethod: '',
        companyName: '',
        contactPerson: '',
        contactPhone: '',
        email: '',
        heardFrom: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Refs for auto-scroll
    const step2Ref = useRef<HTMLDivElement>(null);
    const step3Ref = useRef<HTMLDivElement>(null);
    const paymentRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    // Reset form when selectedProduct changes
    useEffect(() => {
        if (selectedProduct) {
            setFormData(prev => ({
                ...prev,
                type: initialProduct, // Keep context of the page (damper vs dorse/yari-romork)
                // Reset other fields if needed, but keep contact info if filled
            }));
        }
    }, [selectedProduct, initialProduct]);

    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    // Validation Logic
    const step1Complete = selectedProduct
        ? true // Skip step 1 if product selected
        : formData.type === 'damper'
            ? formData.brand !== '' && formData.model !== ''
            : formData.volumeM3 !== '' && formData.axle !== '';

    const step2Complete = selectedProduct
        ? true // Skip step 2 if product selected
        : formData.type === 'damper'
            ? formData.cargoType !== ''
            : formData.thickness !== '' && formData.quantity !== '';

    const step3Complete = selectedProduct
        ? true // Skip step 3 if product selected
        : formData.type === 'damper'
            ? formData.volumeM3 !== '' && formData.thickness !== '' && formData.quantity !== ''
            : true;

    const isPaymentValid = selectedProduct ? true : formData.paymentMethod !== ''; // Skip payment for quick quote? Or keep it? The user said "Contact Info" ONLY after Quantity. Let's assume payment is skipped or optional, but user said "sadece bunları dolduracak lakin kendi doldurmak istersede şuan olan haliyle kalacak".
    // Wait, re-reading: "altta adet ve sonrada İletişim Bilgileri olacak sadece bunları dolduracak". So Payment is effectively skipped or not shown.

    const isContactValid = formData.companyName && formData.contactPhone && formData.email && formData.contactPerson;

    // For selected product: Qty + Contact only.
    // So isFormValid needs to check Qty if selectedProduct.
    const isFormValid = selectedProduct
        ? formData.quantity !== '' && isContactValid
        : step1Complete && step2Complete && step3Complete && isPaymentValid && isContactValid;

    // Auto-scroll effects - only for standard flow
    useEffect(() => {
        if (!selectedProduct && step1Complete) {
            step2Ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [step1Complete, selectedProduct]);

    useEffect(() => {
        if (!selectedProduct && step2Complete) {
            if (formData.type === 'damper') {
                step3Ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                paymentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }, [step2Complete, formData.type, selectedProduct]);

    useEffect(() => {
        if (!selectedProduct && formData.type === 'damper' && step3Complete) {
            paymentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [step3Complete, formData.type, selectedProduct]);

    useEffect(() => {
        if (!selectedProduct && isPaymentValid) {
            contactRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [isPaymentValid, selectedProduct]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Include selected product info in submission log
        const submissionData = {
            ...formData,
            selectedProduct: selectedProduct ? selectedProduct.code : null
        };

        console.log('Form Submitted:', submissionData);
        setIsSuccess(true);
        setIsSubmitting(false);
    };

    const getProductImage = () => {
        if (selectedProduct) return selectedProduct.image;

        if (formData.type === 'damper') {
            if (step2Complete) return '/damper-step-3.jpg';
            if (step1Complete) return '/damper-step-2.jpg';
            return '/damper.jpg';
        } else {
            if (step2Complete) return '/dorse-step-3.jpg';
            if (step1Complete) return '/dorse-step-2.jpg';
            return '/dorse.jpg';
        }
    };

    return (


        <section className="w-full max-w-[1600px] mx-auto mt-8 mb-24" id="teklif-formu">
            <div className="bg-[#F5F5F7] rounded-[2.5rem] p-8 md:p-16">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 min-h-[800px]">

                    {/* Left Side: Sticky Image & Summary */}
                    <div className="w-full lg:w-5/12 relative">
                        <div className="lg:sticky lg:top-32 space-y-8">
                            <div className="hidden lg:block">
                                <span className="inline-block py-2 px-4 rounded-full bg-ozunlu-50 text-primary text-xs font-bold tracking-widest uppercase mb-4">
                                    {selectedProduct ? 'Seçili Ürün' : 'Konfigüratör'}
                                </span>
                                <h2 className="text-4xl font-black text-ozunlu-950 mb-2">
                                    {selectedProduct ? selectedProduct.name : (formData.type === 'damper' ? 'Damper' : 'Yarı Römork')}
                                </h2>
                                {selectedProduct && (
                                    <p className="text-primary font-bold text-xl mb-4">{selectedProduct.code}</p>
                                )}
                                <p className="text-gray-500 text-lg">
                                    {selectedProduct
                                        ? 'Seçtiğiniz ürün için teklif formunu doldurun.'
                                        : 'İhtiyaçlarınıza özel çözümler için detayları belirleyin.'}
                                </p>
                                {selectedProduct && onClearSelection && (
                                    <button
                                        onClick={onClearSelection}
                                        className="mt-4 text-sm text-gray-400 hover:text-red-500 underline flex items-center gap-2 transition-colors"
                                    >
                                        Farklı bir ürün seçin veya konfigüretörü kullanın
                                    </button>
                                )}
                            </div>

                            <motion.div
                                layoutId="product-image"
                                className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-xl"
                            >
                                <div className="absolute inset-0 p-0 flex items-center justify-center">
                                    <Image
                                        src={getProductImage()}
                                        alt={selectedProduct ? selectedProduct.name : formData.type}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="w-full lg:w-7/12">
                        {isSuccess ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-full flex flex-col items-center justify-center text-center p-12 bg-green-50 rounded-3xl border border-green-100"
                            >
                                <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-white mb-6 shadow-lg shadow-green-500/30">
                                    <Check size={48} strokeWidth={3} />
                                </div>
                                <h3 className="text-3xl font-black text-ozunlu-950 mb-4">Talebiniz Alındı!</h3>
                                <p className="text-gray-600 text-lg max-w-md mx-auto mb-8">
                                    Teklif formunuz başarıyla bize ulaştı. Satış temsilcimiz en kısa sürede sizinle iletişime geçecektir.
                                </p>
                                <button
                                    onClick={() => {
                                        setIsSuccess(false);
                                        if (selectedProduct && onClearSelection) {
                                            onClearSelection();
                                        }
                                        setFormData(prev => ({ ...prev, brand: '', model: '', cargoType: '', volumeM3: '', thickness: '', quantity: '1', axle: '', paymentMethod: '', companyName: '', contactPerson: '', contactPhone: '', email: '', message: '' }))
                                    }}
                                    className="px-8 py-3 bg-white text-ozunlu-950 font-bold rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
                                >
                                    Yeni Form Oluştur
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8 pb-24">
                                {selectedProduct ? (
                                    <>
                                        {/* SIMPLIFIED FLOW FOR SELECTED PRODUCT */}
                                        <div className="space-y-6 lg:mt-[92px]">
                                            <div className="flex items-center gap-4 mb-2">
                                                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-primary/20">1</div>
                                                <h3 className="text-2xl font-bold text-ozunlu-950">
                                                    Adet Belirleyin
                                                </h3>
                                            </div>
                                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                                <InputGroup
                                                    label="İstenen Adet"
                                                    placeholder="1"
                                                    type="number"
                                                    value={formData.quantity}
                                                    onChange={(v) => handleInputChange('quantity', v)}
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-6 pt-4">
                                            <div className="flex items-center gap-4 mb-2">
                                                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-primary/20">2</div>
                                                <h3 className="text-2xl font-bold text-ozunlu-950">
                                                    İletişim Bilgileri
                                                </h3>
                                            </div>
                                            {/* Reuse Check for contact validity not block visually but for submit */}
                                            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm grid md:grid-cols-2 gap-6">
                                                <InputGroup
                                                    label="Firma Adı"
                                                    icon={<Building2 size={18} />}
                                                    placeholder="Firma Ünvanı"
                                                    value={formData.companyName}
                                                    onChange={(v) => handleInputChange('companyName', v)}
                                                />
                                                <InputGroup
                                                    label="Yetkili Kişi"
                                                    icon={<User size={18} />}
                                                    placeholder="Ad Soyad"
                                                    value={formData.contactPerson}
                                                    onChange={(v) => handleInputChange('contactPerson', v)}
                                                />
                                                <InputGroup
                                                    label="Telefon"
                                                    icon={<Phone size={18} />}
                                                    placeholder="05XX..."
                                                    value={formData.contactPhone}
                                                    onChange={(v) => handleInputChange('contactPhone', v)}
                                                    type="tel"
                                                />
                                                <InputGroup
                                                    label="E-posta"
                                                    icon={<Mail size={18} />}
                                                    placeholder="mail@sirket.com"
                                                    value={formData.email}
                                                    onChange={(v) => handleInputChange('email', v)}
                                                    type="email"
                                                />
                                                <div className="md:col-span-2">
                                                    <InputGroup
                                                        label="Bizi Nereden Duydunuz?"
                                                        icon={<MessageSquare size={18} />}
                                                        placeholder="Google, Sosyal Medya, Referans..."
                                                        value={formData.heardFrom}
                                                        onChange={(v) => handleInputChange('heardFrom', v)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        {/* STANDARD FLOW - STEP 1 */}
                                        <div className="space-y-6">
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-primary/20">1</div>
                                                <h3 className="text-2xl font-bold text-ozunlu-950">
                                                    {formData.type === 'damper' ? 'Araç Bilgisi' : 'Dorse Özellikleri'}
                                                </h3>
                                            </div>

                                            {formData.type === 'damper' ? (
                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <InputGroup
                                                        label="Araç Markası"
                                                        placeholder="Örn: Mercedes, Ford"
                                                        value={formData.brand}
                                                        onChange={(v) => handleInputChange('brand', v)}
                                                    />
                                                    <InputGroup
                                                        label="Araç Modeli"
                                                        placeholder="Örn: 4140, Cargo"
                                                        value={formData.model}
                                                        onChange={(v) => handleInputChange('model', v)}
                                                    />
                                                </div>
                                            ) : (
                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <InputGroup
                                                        label="İstenen Hacim (m³)"
                                                        placeholder="Örn: 30"
                                                        value={formData.volumeM3}
                                                        onChange={(v) => handleInputChange('volumeM3', v)}
                                                        type="text"
                                                    />
                                                    {/* Axle Option - Dingil Seçeneği */}
                                                    <div className="space-y-2">
                                                        <label className="text-sm font-bold text-gray-600 block pl-1">Dingil Seçeneği</label>
                                                        <div className="grid grid-cols-2 gap-4">
                                                            <button
                                                                type="button"
                                                                onClick={() => handleInputChange('axle', 'yerli')}
                                                                className={`p-4 rounded-xl font-bold transition-all border-2 
                                                                ${formData.axle === 'yerli'
                                                                        ? 'border-primary bg-primary/10 text-primary'
                                                                        : 'border-gray-200 bg-gray-50 text-gray-400 hover:border-gray-300'}`}
                                                            >
                                                                Yerli
                                                            </button>
                                                            <button
                                                                type="button"
                                                                onClick={() => handleInputChange('axle', 'yabancı')}
                                                                className={`p-4 rounded-xl font-bold transition-all border-2
                                                                ${formData.axle === 'yabancı'
                                                                        ? 'border-primary bg-primary/10 text-primary'
                                                                        : 'border-gray-200 bg-gray-50 text-gray-400 hover:border-gray-300'}`}
                                                            >
                                                                Yabancı
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* STANDARD FLOW - STEP 2 */}
                                        <motion.div
                                            ref={step2Ref}
                                            initial={{ opacity: 0.5, y: 20 }}
                                            animate={{ opacity: step1Complete ? 1 : 0.5, y: 0, pointerEvents: step1Complete ? 'auto' : 'none', filter: step1Complete ? 'blur(0px)' : 'blur(2px)' }}
                                            className="space-y-6 pt-8 border-t border-gray-100"
                                        >
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors ${step1Complete ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-gray-100 text-gray-400'}`}>2</div>
                                                <h3 className={`text-2xl font-bold transition-colors ${step1Complete ? 'text-ozunlu-950' : 'text-gray-300'}`}>
                                                    {formData.type === 'damper' ? 'Yük Tipi' : 'Ölçüler & Adet'}
                                                </h3>
                                            </div>

                                            {formData.type === 'damper' ? (
                                                <InputGroup
                                                    label="Taşınacak Yük"
                                                    placeholder="Örn: Hafriyat, Kum, Asfalt"
                                                    value={formData.cargoType}
                                                    onChange={(v) => handleInputChange('cargoType', v)}
                                                />
                                            ) : (
                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <InputGroup
                                                        label="Taban/Yan Kalınlık (mm)"
                                                        placeholder="Örn: 5mm / 4mm"
                                                        value={formData.thickness}
                                                        onChange={(v) => handleInputChange('thickness', v)}
                                                    />
                                                    <InputGroup
                                                        label="Adet"
                                                        placeholder="1"
                                                        type="number"
                                                        value={formData.quantity}
                                                        onChange={(v) => handleInputChange('quantity', v)}
                                                    />
                                                </div>
                                            )}
                                        </motion.div>

                                        {/* STANDARD FLOW - STEP 3 (Only for Damper - Dimensions) */}
                                        {formData.type === 'damper' && (
                                            <motion.div
                                                ref={step3Ref}
                                                initial={{ opacity: 0.5, y: 20 }}
                                                animate={{ opacity: step2Complete ? 1 : 0.5, y: 0, pointerEvents: step2Complete ? 'auto' : 'none', filter: step2Complete ? 'blur(0px)' : 'blur(2px)' }}
                                                className="space-y-6 pt-8 border-t border-gray-100"
                                            >
                                                <div className="flex items-center gap-4 mb-6">
                                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors ${step2Complete ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-gray-100 text-gray-400'}`}>3</div>
                                                    <h3 className={`text-2xl font-bold transition-colors ${step2Complete ? 'text-ozunlu-950' : 'text-gray-300'}`}>
                                                        Ölçüler & Adet
                                                    </h3>
                                                </div>

                                                <div className="grid md:grid-cols-3 gap-6">
                                                    <InputGroup
                                                        label="Hacim (m³)"
                                                        placeholder="Örn: 24"
                                                        value={formData.volumeM3}
                                                        onChange={(v) => handleInputChange('volumeM3', v)}
                                                        type="text"
                                                    />
                                                    <InputGroup
                                                        label="Kalınlık (mm)"
                                                        placeholder="Örn: 8/6"
                                                        value={formData.thickness}
                                                        onChange={(v) => handleInputChange('thickness', v)}
                                                    />
                                                    <InputGroup
                                                        label="Adet"
                                                        placeholder="1"
                                                        type="number"
                                                        value={formData.quantity}
                                                        onChange={(v) => handleInputChange('quantity', v)}
                                                    />
                                                </div>
                                            </motion.div>
                                        )}

                                        {/* PAYMENT METHOD - Standard only */}
                                        <motion.div
                                            ref={paymentRef}
                                            initial={{ opacity: 0.5, y: 20 }}
                                            animate={{
                                                opacity: (formData.type === 'damper' ? step3Complete : step2Complete) ? 1 : 0.5,
                                                y: 0,
                                                pointerEvents: (formData.type === 'damper' ? step3Complete : step2Complete) ? 'auto' : 'none',
                                                filter: (formData.type === 'damper' ? step3Complete : step2Complete) ? 'blur(0px)' : 'blur(2px)'
                                            }}
                                            className="space-y-6 pt-8 border-t border-gray-100"
                                        >
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors ${(formData.type === 'damper' ? step3Complete : step2Complete) ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-gray-100 text-gray-400'}`}>
                                                    <CreditCard size={20} />
                                                </div>
                                                <h3 className={`text-2xl font-bold transition-colors ${(formData.type === 'damper' ? step3Complete : step2Complete) ? 'text-ozunlu-950' : 'text-gray-300'}`}>
                                                    Ödeme Yöntemi
                                                </h3>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-4">
                                                <PaymentOption
                                                    icon={<Banknote size={24} />}
                                                    title="Peşin / Havale"
                                                    description="Nakit ödemelerde özel indirim fırsatı"
                                                    selected={formData.paymentMethod === 'pesin'}
                                                    onClick={() => handleInputChange('paymentMethod', 'pesin')}
                                                />
                                                <PaymentOption
                                                    icon={<Building2 size={24} />}
                                                    title="Vadeli / Çek"
                                                    description="Vade ve taksitlendirme seçenekleri"
                                                    selected={formData.paymentMethod === 'vadeli'}
                                                    onClick={() => handleInputChange('paymentMethod', 'vadeli')}
                                                />
                                            </div>
                                        </motion.div>

                                        {/* CONTACT INFO - Standard Flow */}
                                        <motion.div
                                            ref={contactRef}
                                            initial={{ opacity: 0.5, y: 20 }}
                                            animate={{ opacity: isPaymentValid ? 1 : 0.5, y: 0, pointerEvents: isPaymentValid ? 'auto' : 'none', filter: isPaymentValid ? 'blur(0px)' : 'blur(2px)' }}
                                            className="space-y-6 pt-8 border-t border-gray-100"
                                        >
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors ${isPaymentValid ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-gray-100 text-gray-400'}`}>
                                                    <User size={20} />
                                                </div>
                                                <h3 className={`text-2xl font-bold transition-colors ${isPaymentValid ? 'text-ozunlu-950' : 'text-gray-300'}`}>
                                                    İletişim Bilgileri
                                                </h3>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-6">
                                                <InputGroup
                                                    label="Firma Adı"
                                                    icon={<Building2 size={18} />}
                                                    placeholder="Firma Ünvanı"
                                                    value={formData.companyName}
                                                    onChange={(v) => handleInputChange('companyName', v)}
                                                />
                                                <InputGroup
                                                    label="Yetkili Kişi"
                                                    icon={<User size={18} />}
                                                    placeholder="Ad Soyad"
                                                    value={formData.contactPerson}
                                                    onChange={(v) => handleInputChange('contactPerson', v)}
                                                />
                                                <InputGroup
                                                    label="Telefon"
                                                    icon={<Phone size={18} />}
                                                    placeholder="05XX..."
                                                    value={formData.contactPhone}
                                                    onChange={(v) => handleInputChange('contactPhone', v)}
                                                    type="tel"
                                                />
                                                <InputGroup
                                                    label="E-posta"
                                                    icon={<Mail size={18} />}
                                                    placeholder="mail@sirket.com"
                                                    value={formData.email}
                                                    onChange={(v) => handleInputChange('email', v)}
                                                    type="email"
                                                />
                                                <div className="md:col-span-2">
                                                    <InputGroup
                                                        label="Bizi Nereden Duydunuz?"
                                                        icon={<MessageSquare size={18} />}
                                                        placeholder="Google, Sosyal Medya, Referans..."
                                                        value={formData.heardFrom}
                                                        onChange={(v) => handleInputChange('heardFrom', v)}
                                                    />
                                                </div>
                                            </div>
                                        </motion.div>
                                    </>
                                )}

                                <div className="pt-8">
                                    <button
                                        type="submit"
                                        disabled={!isFormValid || isSubmitting}
                                        className={`w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all transform hover:scale-[1.01] active:scale-[0.99]
                                            ${isFormValid && !isSubmitting
                                                ? 'bg-primary text-white shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40'
                                                : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
                                    >
                                        {isSubmitting ? (
                                            <>Gönderiliyor...</>
                                        ) : (
                                            <>
                                                TEKLİF İSTE
                                                <Send size={20} />
                                            </>
                                        )}
                                    </button>
                                    <p className="text-center text-gray-400 text-sm mt-4 flex items-center justify-center gap-2">
                                        <Info size={14} />
                                        Kişisel verileriniz KVKK kapsamında korunmaktadır.
                                    </p>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>

    );
}

// Sub-components for cleaner code
function InputGroup({ label, placeholder, value, onChange, type = "text", icon }: { label: string, placeholder: string, value: string, onChange: (v: string) => void, type?: string, icon?: React.ReactNode }) {
    return (
        <div className="space-y-2">
            <label className="text-sm font-bold text-gray-600 block pl-1">{label}</label>
            <div className="relative group">
                {icon && (
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors">
                        {icon}
                    </div>
                )}
                <input
                    type={type}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    className={`w-full bg-gray-50 border border-gray-200 rounded-xl p-4 ${icon ? 'pl-12' : 'pl-4'} text-ozunlu-950 font-medium 
                    placeholder:text-gray-400 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all`}
                />
            </div>
        </div>
    );
}

function PaymentOption({ icon, title, description, selected, onClick }: { icon: React.ReactNode, title: string, description: string, selected: boolean, onClick: () => void }) {
    return (
        <div
            onClick={onClick}
            className={`p-6 rounded-2xl border-2 cursor-pointer transition-all relative overflow-hidden group
            ${selected ? 'border-primary bg-primary/5' : 'border-gray-100 bg-white hover:border-gray-200 hover:bg-gray-50'}`}
        >
            <div className="flex items-start gap-4 relative z-10">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors
                    ${selected ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200'}`}>
                    {icon}
                </div>
                <div>
                    <h4 className={`font-bold text-lg mb-1 ${selected ? 'text-primary' : 'text-ozunlu-950'}`}>{title}</h4>
                    <span className="text-xs text-gray-500 font-medium">{description}</span>
                </div>
            </div>
            {selected && (
                <div className="absolute top-4 right-4 text-primary">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white">
                        <Check size={14} strokeWidth={3} />
                    </div>
                </div>
            )}
        </div>
    );
}
