// app/layout.tsx

import './globals.css'
import { Metadata } from 'next'
import Navbar from '../components/navbar'

export const metadata: Metadata = {
    title: 'Vortex Gaming – Esports Organisation',
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/favicon.ico'
    }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
            {children}
        </main>
        </body>
        </html>
    )
}
