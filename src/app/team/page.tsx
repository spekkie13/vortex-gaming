// app/team/page.tsx

import { Metadata } from 'next'
import Link from 'next/link'
import TeamMemberCard from '../../components/TeamMemberCard'

export const metadata: Metadata = {
    title: 'Team – Vortex Gaming',
}

const squad = [
    { slug: 'player-one', name: 'Lord Savage', one_liner: 'Get Lorded', imageUrl: '/Vortex_Gaming_Logo.png', socials: [
            { platform: 'Twitter', url: 'https://twitter.com/playerone' },
        ] },
    { slug: 'player-two', name: 'Sem', one_liner: 'Consistency is key', imageUrl: '/Vortex_Gaming_Logo.png', socials: [
            { platform: 'Twitter', url: 'https://twitter.com/playerone' },
        ], },
    { slug: 'player-three', name: 'Kenneth', one_liner: 'Low Town Hall GOAT', imageUrl: '/Vortex_Gaming_Logo.png', socials: [
            { platform: 'Twitter', url: 'https://twitter.com/playerone' },
        ], },
    { slug: 'player-four', name: 'Shady Dragon', one_liner: 'Clutch Moments', imageUrl: '/Vortex_Gaming_Logo.png', socials: [
            { platform: 'Twitter', url: 'https://twitter.com/playerone' },
        ], },
    { slug: 'player-five', name: 'Shady WarDaddy', one_liner: 'No Pressure', imageUrl: '/Vortex_Gaming_Logo.png', socials: [
            { platform: 'Twitter', url: 'https://twitter.com/playerone' },
        ], },
    { slug: 'player-six', name: 'Shady Jan', one_liner: 'The quiet strength', imageUrl: '/Vortex_Gaming_Logo.png', socials: [
            { platform: 'Twitter', url: 'https://twitter.com/playerone' },
        ], },
    { slug: 'player-seven', name: 'Puf', one_liner: 'Dangerous', imageUrl: '/Vortex_Gaming_Logo.png', socials: [
            { platform: 'Twitter', url: 'https://twitter.com/playerone' },
        ], },
    { slug: 'player-eight', name: 'FC Wizard', one_liner: 'The name says it all', imageUrl: '/Vortex_Gaming_Logo.png', socials: [
            { platform: 'Twitter', url: 'https://twitter.com/playerone' },
        ], },
    { slug: 'player-nine', name: 'Tetsuo', one_liner: 'Always Ready', imageUrl: '/Vortex_Gaming_Logo.png', socials: [
            { platform: 'Twitter', url: 'https://twitter.com/playerone' },
        ], },
];

export default function TeamPage() {
    return (
        <section>
            <h2 className="text-3xl font-bold text-primary dark:text-white mb-6">
                Our Roster
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {squad.map((p) => (
                    <Link
                        key={p.slug}
                        href={`/team/${p.slug}`}
                        className="focus:outline-none focus:ring-2 focus:ring-accent rounded"
                    >
                        <TeamMemberCard
                            name={p.name}
                            one_liner={p.one_liner}
                            imageUrl={p.imageUrl}
                            socials={p.socials}
                        />
                    </Link>
                ))}
            </div>

            <h2 className="text-2xl font-bold text-primary dark:text-white mt-12 mb-4">
                Management
            </h2>
            {/* <ManagerCard /> components go here */}
        </section>
    )
}
