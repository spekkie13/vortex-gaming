// app/team/page.tsx

import { Metadata } from 'next'
import Link from 'next/link'
import MemberCard from '../../components/MemberCard'
import { squad } from '../../../data/playerData'

export const metadata: Metadata = {
    title: 'Team – Vortex Gaming',
}

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

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
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
