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
        socials: [{ platform: 'Twitter', url: 'https://twitter.com/StijnG489616' }],
    },
    {
        slug: 'player-two',
        name: 'Sem',
        one_liner: 'Consistency is key',
        imageUrl: '/Vortex_Gaming_Logo.png',
        socials: [{ platform: 'Twitter', url: 'https://twitter.com/Yhhh10617640' }],
    },
    {
        slug: 'player-three',
        name: 'Kenneth',
        one_liner: 'Low Town Hall GOAT',
        imageUrl: '/Vortex_Gaming_Logo.png',
        socials: [{ platform: 'Twitter', url: 'https://twitter.com/KennethJan6167' }],
    },
    {
        slug: 'player-four',
        name: 'Shady Dragon',
        one_liner: 'Clutch Moments',
        imageUrl: '/Vortex_Gaming_Logo.png',
        socials: [{ platform: 'Twitter', url: 'https://twitter.com/DannyPeeters17' }],
    },
    {
        slug: 'player-five',
        name: 'Shady WarDaddy',
        one_liner: 'No Pressure',
        imageUrl: '/Vortex_Gaming_Logo.png',
        socials: [{ platform: 'Twitter', url: 'https://twitter.com/' }],
    },
    {
        slug: 'player-six',
        name: 'Shady Jan',
        one_liner: 'The quiet strength',
        imageUrl: '/Vortex_Gaming_Logo.png',
        socials: [{ platform: 'Twitter', url: 'https://twitter.com/' }],
    },
    {
        slug: 'player-seven',
        name: 'Puf',
        one_liner: 'Dangerous',
        imageUrl: '/Vortex_Gaming_Logo.png',
        socials: [{ platform: 'Twitter', url: 'https://twitter.com/' }],
    },
    {
        slug: 'player-eight',
        name: 'FC Wizard',
        one_liner: 'The name says it all',
        imageUrl: '/Vortex_Gaming_Logo.png',
        socials: [{ platform: 'Twitter', url: 'https://twitter.com/' }],
    },
    {
        slug: 'player-nine',
        name: 'Tetsuo',
        one_liner: 'Always Ready',
        imageUrl: '/Vortex_Gaming_Logo.png',
        socials: [{ platform: 'Twitter', url: 'https://twitter.com/' }],
    },
]

const management = [
    {
        slug: 'manager-one',
        name: 'Roel',
        one_liner: 'Owner',
        imageUrl: '/Vortex_Gaming_Logo.png',
        socials: [{ platform: 'Twitter', url: 'https://twitter.com/RoelCOC' }],
    },
    {
        slug: 'manager-two',
        name: 'Spekkie',
        one_liner: 'Web Developer',
        imageUrl: '/Vortex_Gaming_Logo.png',
        socials: [{ platform: 'Twitter', url: 'https://twitter.com/CSpekkie' }],
    },
    {
        slug: 'manager-three',
        name: 'Spartacus',
        one_liner: 'Manager',
        imageUrl: '/Vortex_Gaming_Logo.png',
        socials: [{ platform: 'Twitter', url: 'https://twitter.com/CocSpartacus' }],
    }
]

export default function TeamPage() {
    return (
        <section className="
      bg-white dark:bg-gray-900
      text-gray-900 dark:text-gray-100
      transition-colors
      px-4 py-8
    ">
            <h2 className="text-3xl font-bold mb-6">
                Our Roster
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                            socials={p.socials}
                        />
                    </Link>
                ))}
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-4">
                Management
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {management.map((p) => (
                    <Link
                        key={p.slug}
                        href={`/team/${p.slug}`}
                        className="
              group
              focus:outline-none focus:ring-2 focus:ring-accent
              rounded
            "
                    >
                        {/* Map your tagline into the `role` prop */}
                        <MemberCard
                            name={p.name}
                            one_liner={p.one_liner}
                            imageUrl={p.imageUrl}
                            socials={p.socials}
                        />
                    </Link>
                ))}
            </div>
        </section>
    )
}
