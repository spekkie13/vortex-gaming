// app/team/page.tsx

import { Metadata } from 'next'
import Link from 'next/link'
import MemberCard from '../../components/MemberCard'

export const metadata: Metadata = {
    title: 'Team – Vortex Gaming',
}

const squad = [
    {
        slug: 'player-one',
        name: 'Lord Savage',
        one_liner: 'Get Lorded',
        imageUrl: '/Vortex_Gaming_Logo.png',
    },
    {
        slug: 'player-two',
        name: 'Sem',
        one_liner: 'Consistency is key',
        imageUrl: '/Vortex_Gaming_Logo.png',
    },
    {
        slug: 'player-three',
        name: 'Kenneth',
        one_liner: 'Low Town Hall GOAT',
        imageUrl: '/Vortex_Gaming_Logo.png',
    },
    {
        slug: 'player-four',
        name: 'Shady Dragon',
        one_liner: 'Clutch Moments',
        imageUrl: '/Vortex_Gaming_Logo.png',
    },
    {
        slug: 'player-five',
        name: 'Shady WarDaddy',
        one_liner: 'No Pressure',
        imageUrl: '/Vortex_Gaming_Logo.png',
    },
    {
        slug: 'player-six',
        name: 'Shady Jan',
        one_liner: 'The quiet strength',
        imageUrl: '/Vortex_Gaming_Logo.png',
    },
    {
        slug: 'player-seven',
        name: 'Puf',
        one_liner: 'Dangerous',
        imageUrl: '/Vortex_Gaming_Logo.png',
    },
    {
        slug: 'player-eight',
        name: 'FC Wizard',
        one_liner: 'The name says it all',
        imageUrl: '/Vortex_Gaming_Logo.png',
    },
    {
        slug: 'player-nine',
        name: 'Tetsuo',
        one_liner: 'Always Ready',
        imageUrl: '/Vortex_Gaming_Logo.png',
    },
]

export default function TeamPage() {
    return (
        <section className="
      min-h-screen
      bg-white dark:bg-gray-900
      text-gray-900 dark:text-gray-100
      transition-colors
      px-4 py-8
    ">
            <h2 className="
        text-3xl font-bold mb-6
        max-w-xl mx-auto text-center
        text-gray-900 dark:text-gray-100
      ">
                Our Roster
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {squad.map((p) => (
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
    )
}
