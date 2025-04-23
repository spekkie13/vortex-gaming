import './globals.css';
import { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import Navbar from '../components/navbar';

export const metadata: Metadata = {
    title: 'Vortex Gaming – Esports Organisation',
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/favicon.ico',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="bg-white dark:bg-gray-900 transition-colors">
        <body>
        <ThemeProvider attribute="class">
            <Navbar />
            <main className="container mx-auto p-4">
                {children}
            </main>
        </ThemeProvider>
        </body>
        </html>
    );
}
