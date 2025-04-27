// app/team/[player]/page.tsx

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

interface CardBase {
    name: string;
    bio: string;
    imageUrl: string;
    socials?: { platform: string; url: string }[];
}

interface Player extends CardBase {
    slogan: string;
    stats: Record<string, string | number>;
}

interface Manager extends CardBase {
    role: string;
}

// Mock roster data keyed by slug
const players: Record<string, Player> = {
    'player-one': {
        name: 'Lord Savage',
        slogan: 'Cold Hands. Hot Hits. Get Lorded',
        bio:
            'With an 80% hit rate at Worlds and multiple #1 NL finishes, Lord Savage brings precision, calm, and pure impact to every war.',
        imageUrl: '/Vortex_Gaming_Logo.png',
        socials: [
            { platform: 'Twitter', url: 'https://twitter.com/StijnG489616' },
        ],
        stats: {
            'Matches Played': 50,
            'Win Rate': '68%',
            'Tournaments Won': 3,
            'Average Attack Stars': 2.7,
        },
    },
    // …other players
};

const managers: Record<string, Manager> = {
    'manager-one': {
        name: 'Roel',
        role: 'Owner',
        bio:
            'After competing in eSports myself for two years, I discovered my true passion lies in management. While I enjoyed my time as a player, I found even more fulfillment in building, guiding, and supporting teams behind the scenes. Over the years, I have organized multiple tournaments, worked as an admin, and steadily built up valuable experience in the competitive scene. Though I am always learning and growing, I am proud of how far we have come - and even more excited about what is ahead. This is what I love to do.',
        imageUrl: '/Vortex_Gaming_Logo.png',
        socials: [{ platform: 'Twitter', url: 'https://twitter.com/RoelCOC' }],
    },
    // …other managers
};

export async function generateStaticParams(): Promise<{ player: string }[]> {
    return [
        ...Object.keys(players).map((slug) => ({ player: slug })),
        ...Object.keys(managers).map((slug) => ({ player: slug })),
    ];
}

export async function generateMetadata({ params }: { params: Promise<{ player: string }> }): Promise<Metadata> {
    const { player: slug } = await params;
    const person = players[slug] || managers[slug];
    return { title: person ? `${person.name} – Vortex Gaming` : 'Not Found' };
}

export default async function PersonPage({ params }: { params: Promise<{ player: string }> }) {
    const { player: slug } = await params;
    const player = players[slug];
    const manager = managers[slug];

    if (player) {
        return (
            <section className="
        bg-white dark:bg-gray-900
        text-gray-900 dark:text-gray-100
        transition-colors
        px-4 py-8
      ">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <Link href="/team" className="inline-block text-accent hover:underline">
                        ← Back to Team
                    </Link>

                    <Image
                        src={player.imageUrl}
                        alt={`${player.name} profile`}
                        width={180}
                        height={180}
                        className="mx-auto rounded-full"
                    />

                    <h1 className="text-4xl font-bold text-primary dark:text-white">
                        {player.name}
                    </h1>
                    <p className="text-lg italic text-gray-700 dark:text-gray-300">
                        {player.slogan}
                    </p>

                    <p className="text-base leading-relaxed text-gray-800 dark:text-gray-200">
                        {player.bio}
                    </p>

                    {player.socials && (
                        <div className="flex justify-center space-x-4">
                            {player.socials.map(({ platform, url }) => (
                                <a
                                    key={platform}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline text-gray-500 dark:text-gray-400"
                                >
                                    {platform}
                                </a>
                            ))}
                        </div>
                    )}

                    <div className="w-full">
                        <h2 className="text-2xl font-semibold text-primary dark:text-white mb-2">
                            Stats
                        </h2>
                        <ul className="space-y-2">
                            {Object.entries(player.stats).map(([label, value]) => (
                                <li
                                    key={label}
                                    className="flex justify-between border-b pb-2 text-gray-700 dark:text-gray-300"
                                >
                                    <span className="font-medium">{label}</span>
                                    <span>{value}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        );
    }

    if (manager) {
        return (
            <section className="
        bg-white dark:bg-gray-900
        text-gray-900 dark:text-gray-100
        transition-colors
        px-4 py-8
      ">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <Link href="/team" className="inline-block text-accent hover:underline">
                        ← Back to Team
                    </Link>

                    <Image
                        src={manager.imageUrl}
                        alt={`${manager.name} profile`}
                        width={180}
                        height={180}
                        className="mx-auto rounded-full"
                    />

                    <h1 className="text-4xl font-bold text-primary dark:text-white">
                        {manager.name}
                    </h1>
                    <p className="text-lg italic text-gray-700 dark:text-gray-300">
                        {manager.role}
                    </p>

                    <p className="text-base leading-relaxed text-gray-800 dark:text-gray-200">
                        {manager.bio}
                    </p>

                    {manager.socials && (
                        <div className="flex justify-center space-x-4">
                            {manager.socials.map(({ platform, url }) => (
                                <a
                                    key={platform}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline text-gray-500 dark:text-gray-400"
                                >
                                    {platform}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        );
    }

    return (
        <section className="py-20 text-center">
            <p className="text-xl text-gray-700 dark:text-gray-300">Person not found.</p>
            <Link href="/team" className="mt-4 inline-block text-accent hover:underline">
                Back to Team
            </Link>
        </section>
    );
}
