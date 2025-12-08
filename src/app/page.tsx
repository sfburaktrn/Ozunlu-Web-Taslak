import Image from 'next/image'

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-900 overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px]" />
                <div className="absolute top-[40%] -left-[10%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 h-screen flex flex-col lg:flex-row items-center justify-center relative z-10">

                {/* Left Content */}
                <div className="lg:w-1/2 flex flex-col items-start space-y-8 pt-20 lg:pt-0">
                    <h2 className="text-blue-500 font-semibold tracking-widest uppercase text-sm animate-fade-in-up">
                        Profesyonel Çözümler
                    </h2>
                    <h1 className="text-7xl lg:text-9xl font-black text-white tracking-tighter leading-[0.85] animate-fade-in-up delay-100">
                        ÖZ<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">ÜN</span>LÜ
                    </h1>
                    <p className="text-slate-400 text-lg max-w-md animate-fade-in-up delay-200">
                        Yüksek mühendislik standartlarında üretilen damper ve dorse sistemleri ile yükünüzü hafifletiyoruz.
                    </p>

                    <div className="flex space-x-4 animate-fade-in-up delay-300">
                        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-blue-600/25">
                            Ürünlerimizi İnceleyin
                        </button>
                        <button className="px-8 py-4 bg-transparent border border-slate-700 hover:border-slate-500 text-white rounded-full font-medium transition-all">
                            İletişime Geçin
                        </button>
                    </div>
                </div>

                {/* Right Content - Hero Image */}
                <div className="lg:w-1/2 h-full flex items-center justify-center relative mt-10 lg:mt-0">
                    <div className="relative w-full max-w-[800px] aspect-[4/3] animate-fade-in-right">
                        <Image
                            src="/damper.png"
                            alt="Özünlü Damper"
                            fill
                            style={{ objectFit: 'contain' }}
                            className="drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out"
                            priority
                        />
                    </div>

                    {/* Floating specs card example */}
                    <div className="absolute bottom-20 right-10 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl hidden lg:block animate-fade-in-up delay-500">
                        <div className="flex items-center space-x-4">
                            <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-white font-bold">Premium Kalite</h3>
                                <p className="text-slate-400 text-xs">Uluslararası standartlar</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}
