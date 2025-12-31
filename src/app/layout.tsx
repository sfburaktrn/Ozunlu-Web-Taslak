import './globals.css'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const manrope = Manrope({ subsets: ['latin'] })

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
            <body className={manrope.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
