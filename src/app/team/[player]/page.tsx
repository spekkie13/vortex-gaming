// app/team/[player]/page.tsx

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

interface Player {
    name: string;
    slogan: string;
    bio: string;
    imageUrl: string;
    socials?: { platform: string; url: string }[];
    stats: Record<string, string | number>;
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
            { platform: 'Twitter', url: 'https://twitter.com/playerone' },
            { platform: 'Twitch', url: 'https://twitch.tv/playerone' },
        ],
        stats: {
            'Matches Played': 50,
            'Win Rate': '68%',
            'Tournaments Won': 3,
            'Average Attack Stars': 2.7,
        },
    },
    // …add more players here
};

export async function generateStaticParams(): Promise<{ player: string }[]> {
    return Object.keys(players).map((player) => ({ player }));
}

export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ player: string }>;
}): Promise<Metadata> {
    const { player: slug } = await params;
    const playerData = players[slug];
    return {
        title: playerData ? `${playerData.name} – Vortex Gaming` : 'Player Not Found',
    };
}

export default async function PlayerPage({
                                             params,
                                         }: {
    params: Promise<{ player: string }>;
}) {
    const { player: slug } = await params;
    const p = players[slug];

    if (!p) {
        return (
            <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors px-4 py-8 text-center">
                <p className="text-xl mb-4">Player not found.</p>
                <Link
                    href="/team"
                    className="inline-block text-accent hover:underline"
                >
                    ← Back to Team
                </Link>
            </section>
        );
    }

    return (
        <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors px-4 py-8">
            <div className="max-w-3xl mx-auto text-center">
                <Link
                    href="/team"
                    className="inline-block mb-6 text-accent hover:underline"
                >
                    ← Back to Team
                </Link>

                <Image
                    src={p.imageUrl}
                    alt={`${p.name} profile`}
                    width={180}
                    height={180}
                    className="mx-auto rounded-full"
                />

                <h1 className="text-4xl font-bold mt-4 mb-2 text-primary dark:text-white">
                    {p.name}
                </h1>
                <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                    {p.slogan}
                </p>
                <p className="text-base leading-relaxed text-gray-800 dark:text-gray-200 mb-6">
                    {p.bio}
                </p>

                {p.socials && (
                    <div className="flex justify-center space-x-4 mb-8">
                        {p.socials.map(({ platform, url }) => (
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
                    <h2 className="text-2xl font-semibold mb-4 text-primary dark:text-white">
                        Stats
                    </h2>
                    <ul className="space-y-2">
                        {Object.entries(p.stats).map(([label, value]) => (
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
