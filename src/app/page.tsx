// app/page.tsx

// Page-specific metadata overrides layout metadata
export const metadata = {
    title: 'Vortex Gaming',
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/favicon.ico'
    }
};

import Image from 'next/image';

export default function HomePage() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
            <div className="text-center">
                <Image
                    src="/Vortex_Gaming_Logo.png"
                    alt="Vortex Gaming Logo"
                    width={200}
                    height={200}
                    className="mx-auto mb-8"
                />
                <h1 className="text-5xl font-bold">Vortex Gaming</h1>
                <p className="max-w-2xl mx-auto text-lg leading-relaxed">
                    Vortex Gaming isn’t just a team — it’s a tight-knit brotherhood of friends turned
                    competitors, bonded by trust, grind, and a shared love for Clash of Clans. Founded in
                    late January 2025, we train hard, compete harder — and we never forget to enjoy the ride.
                    Keeping the energy high, the vibes positive, and the goals crystal clear.
                </p>
                <p className="max-w-2xl mx-auto text-lg leading-relaxed mt-4">
                    Because when it’s match time? We bring the heat — focused, hungry, and ready to
                    outplay anyone in front of us. Every hit counts. Every base is a puzzle. And we’re here to
                    solve it — together.
                </p>
                <a
                    href="/team"
                    className="mt-8 inline-block px-6 py-3 bg-accent text-white rounded-lg hover:opacity-90"
                >
                    Meet the Roster
                </a>
            </div>
        </main>
    );
}
