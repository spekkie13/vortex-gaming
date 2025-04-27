// app/page.tsx

import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Vortex Gaming',
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/favicon.ico',
    },
};

export default function HomePage() {
    return (
        <main className="
      flex min-h-screen items-center justify-center
      bg-white dark:bg-gray-900
      text-gray-900 dark:text-gray-100
      transition-colors
      px-4
    ">
            <div className="text-center max-w-2xl space-y-6">
                <Image
                    src="/Vortex_Gaming_Logo.png"
                    alt="Vortex Gaming Logo"
                    width={200}
                    height={200}
                    className="mx-auto"
                />

                <h1 className="text-5xl font-bold">Vortex Gaming</h1>

                <p className="text-lg leading-relaxed">
                    Vortex Gaming isn’t just a team — it’s a tight-knit brotherhood of friends turned
                    competitors, bonded by trust, grind, and a shared love for Clash of Clans. Founded in
                    late January 2025, we train hard, compete harder — and we never forget to enjoy the ride.
                    Keeping the energy high, the vibes positive, and the goals crystal clear.
                </p>

                <p className="text-lg leading-relaxed">
                    Because when it’s match time? We bring the heat — focused, hungry, and ready to
                    outplay anyone in front of us. Every hit counts. Every base is a puzzle. And we’re here to
                    solve it — together.
                </p>

                <Link
                    href="/team"
                    className="
            inline-block px-6 py-3 bg-accent text-white rounded-lg
            hover:bg-opacity-90 transition-colors
          "
                >
                    Meet the Roster
                </Link>
            </div>
        </main>
    );
}
