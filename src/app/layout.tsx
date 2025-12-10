import './globals.css'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import Navbar from '@/components/Navbar'

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Next.js Taslak',
    description: 'Proje Taslağı',
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
            </body>
        </html>
    )
}
