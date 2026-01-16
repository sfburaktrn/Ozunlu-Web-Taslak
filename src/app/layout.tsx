import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/common/SmoothScroll'



export const metadata: Metadata = {
    title: 'ÖZÜNLÜ - Hız ve Kalite',
    description: 'Yarım asırlık tecrübe ile ağır ticari araç üst yapı sektöründe güven ve kalitenin adresi.',
    icons: {
        icon: '/ozunlu-logo.png',
        shortcut: '/ozunlu-logo.png',
        apple: '/ozunlu-logo.png',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="tr" className="dark">
            <body className="font-sans antialiased">
                <SmoothScroll>
                    <Navbar />
                    {children}
                    <Footer />
                </SmoothScroll>
            </body>
        </html>
    )
}
