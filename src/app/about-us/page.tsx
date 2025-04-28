// app/about-us/page.tsx

import Link from "next/link";
import MemberCard from "@/components/MemberCard";

export default function AboutUs() {
    const management = [
        {
            slug: 'manager-one',
            name: 'Roel',
            one_liner: 'Owner',
            imageUrl: '/Vortex_Gaming_Logo.png',
        },
        {
            slug: 'manager-two',
            name: 'Spekkie',
            one_liner: 'Web Developer',
            imageUrl: '/Vortex_Gaming_Logo.png',
        },
        {
            slug: 'manager-three',
            name: 'Spartacus',
            one_liner: 'Manager',
            imageUrl: '/Vortex_Gaming_Logo.png',
        },
    ];

    return (
        <section
            className="
        min-h-screen
        bg-white dark:bg-gray-900
        text-gray-900 dark:text-gray-100
        transition-colors
        px-4 py-8
      "
        >
            {/* Header & Text */}
            <div className="max-w-3xl mx-auto space-y-6 mb-12">
                <h2 className="
          text-3xl font-bold text-primary dark:text-white
          mb-4
          text-center
        ">
                    About Us
                </h2>
                <p className="text-justify text-lg leading-relaxed">
                    Vortex Gaming isn’t just a team — it’s a tight-knit brotherhood of friends turned
                    competitors, bonded by trust, grind, and a shared love for Clash of Clans. Founded in
                    late January 2025, we train hard, compete harder — and we never forget to enjoy the ride.
                    Keeping the energy high, the vibes positive, and the goals crystal clear.
                    Because when it’s match time? We bring the heat — focused, hungry, and ready to
                    outplay anyone in front of us. Every hit counts. Every base is a puzzle. And we’re here to
                    solve it — together.
                </p>
            </div>

            {/* Management Cards */}
            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {management.map((p) => (
                    <Link
                        key={p.slug}
                        href={`/team/${p.slug}`}
                        className="group focus:outline-none focus:ring-2 focus:ring-accent rounded"
                    >
                        <MemberCard
                            name={p.name}
                            one_liner={p.one_liner}
                            imageUrl={p.imageUrl}
                        />
                    </Link>
                ))}
            </div>
        </section>
    );
}
