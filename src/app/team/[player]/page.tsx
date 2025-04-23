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
    'player-two': {
        name: 'Sem',
        slogan: 'The kind of player every team wishes they had',
        bio:
            'Sem is the definition of reliable. Always with a 90%+ hit, he delivers clean hits under any circumstance — no noise, no nonsense. Just results.',
        imageUrl: '/Vortex_Gaming_Logo.png',
        socials: [
            { platform: 'Twitter', url: 'https://twitter.com/playertwo' },
            { platform: 'Twitch', url: 'https://twitch.tv/playertwo' },
        ],
        stats: {
            'Matches Played': 50,
            'Win Rate': '68%',
            'Tournaments Won': 3,
            'Average Attack Stars': 2.7,
        },
    },
    'player-three': {
        name: 'Kenneth',
        slogan: 'No Town Hall too low, no challenge too big',
        bio:
            'Kenneth mastered low Town Halls, racking up multiple tournament wins and MVP titles. Now at TH17, he continues to dominate, bringing the same precision and strategy that made him a legend. His proudest moment? Ultimate Creative Championship S3 champion.',
        imageUrl: '/Vortex_Gaming_Logo.png',
        socials: [
            { platform: 'Twitter', url: 'https://twitter.com/playerthree' },
            { platform: 'Twitch', url: 'https://twitch.tv/playerthree' },
        ],
        stats: {
            'Matches Played': 50,
            'Win Rate': '68%',
            'Tournaments Won': 3,
            'Average Attack Stars': 2.7,
        },
    },
    'player-four': {
        name: 'Shady Dragon',
        slogan: 'When it counts, he delivers',
        bio:
            'Shady Dragon is known for his incredible clutch plays, with his standout moment being the Royal Ascension Cup triple that sealed the win. Calm, calculated, and always ready to perform when it matters most.',
        imageUrl: '/Vortex_Gaming_Logo.png',
        socials: [
            { platform: 'Twitter', url: 'https://twitter.com/playerfour' },
            { platform: 'Twitch', url: 'https://twitch.tv/playerfour' },
        ],
        stats: {
            'Matches Played': 50,
            'Win Rate': '68%',
            'Tournaments Won': 3,
            'Average Attack Stars': 2.7,
        },
    },
    'player-five': {
        name: 'Shady WarDaddy',
        slogan: 'Under pressure? He trives',
        bio:
            'Shady WarDaddy is at his best when the stakes are highest. Calm, composed, and always clutch — when it’s make or break, he steps up and delivers.',
        imageUrl: '/Vortex_Gaming_Logo.png',
        socials: [
            { platform: 'Twitter', url: 'https://twitter.com/playerfive' },
            { platform: 'Twitch', url: 'https://twitch.tv/playerfive' },
        ],
        stats: {
            'Matches Played': 50,
            'Win Rate': '68%',
            'Tournaments Won': 3,
            'Average Attack Stars': 2.7,
        },
    },
    'player-six': {
        name: 'Shady Jan',
        slogan: 'Always ready for the unexpected',
        bio:
            '???',
        imageUrl: '/Vortex_Gaming_Logo.png',
        socials: [
            { platform: 'Twitter', url: 'https://twitter.com/playersix' },
            { platform: 'Twitch', url: 'https://twitch.tv/playersix' },
        ],
        stats: {
            'Matches Played': 50,
            'Win Rate': '68%',
            'Tournaments Won': 3,
            'Average Attack Stars': 2.7,
        },
    },
    'player-seven': {
        name: 'Puf',
        slogan: 'No base too tough',
        bio:
            'There’s no base Puf can’t triple. Known for his flawless attacks and relentless precision, he’s the player you want when it’s time to lock in the perfect hit.',
        imageUrl: '/Vortex_Gaming_Logo.png',
        socials: [
            { platform: 'Twitter', url: 'https://twitter.com/playerseven' },
            { platform: 'Twitch', url: 'https://twitch.tv/playerseven' },
        ],
        stats: {
            'Matches Played': 50,
            'Win Rate': '68%',
            'Tournaments Won': 3,
            'Average Attack Stars': 2.7,
        },
    },
    'player-eight': {
        name: 'FC Wizard',
        slogan: 'When magic is needed, he delivers.',
        bio:
            'FC Wizard doesn’t need introductions — his skills speak for themselves. A true magician with his attacks, always pulling off the impossible when it counts.',
        imageUrl: '/Vortex_Gaming_Logo.png',
        socials: [
            { platform: 'Twitter', url: 'https://twitter.com/playereight' },
            { platform: 'Twitch', url: 'https://twitch.tv/playereight' },
        ],
        stats: {
            'Matches Played': 50,
            'Win Rate': '68%',
            'Tournaments Won': 3,
            'Average Attack Stars': 2.7,
        },
    },
    'player-nine': {
        name: 'Player Nine',
        slogan: 'When you need him, he\'s there.',
        bio:
            'Tetsuo is the ultimate sub — always prepared to step in and get the job done. Whether it’s a clutch moment or a backup role, you can count on him every time.',
        imageUrl: '/Vortex_Gaming_Logo.png',
        socials: [
            { platform: 'Twitter', url: 'https://twitter.com/playernine' },
            { platform: 'Twitch', url: 'https://twitch.tv/playernine' },
        ],
        stats: {
            'Matches Played': 50,
            'Win Rate': '68%',
            'Tournaments Won': 3,
            'Average Attack Stars': 2.7,
        },
    },
};

// Generate static paths for each player slug
export async function generateStaticParams(): Promise<{ player: string }[]> {
    return Object.keys(players).map((player) => ({ player }));
}

// Generate per-player metadata (async to await params)
export async function generateMetadata({ params }: { params: Promise<{ player: string }> }): Promise<Metadata> {
    const { player: slug } = await params;
    const playerData = players[slug];
    return {
        title: playerData ? `${playerData.name} – Vortex Gaming` : 'Player Not Found',
    };
}

// Player detail page component (async to await params)
export default async function PlayerPage({ params }: { params: Promise<{ player: string }> }) {
    const { player: slug } = await params;
    const playerData = players[slug];

    if (!playerData) {
        return (
            <section className="py-20 text-center">
                <p className="text-xl text-gray-700 dark:text-gray-300">Player not found.</p>
                <Link href="/team" className="mt-4 inline-block text-accent hover:underline">
                    Back to Team
                </Link>
            </section>
        );
    }

    return (
        <section className="max-w-3xl mx-auto py-12 px-4">
            <Link href="/team" className="text-accent hover:underline mb-6 inline-block">
                ← Back to Team
            </Link>

            <div className="flex flex-col items-center text-center">
                <Image
                    src={playerData.imageUrl}
                    alt={`${playerData.name} profile`}
                    width={180}
                    height={180}
                    className="rounded-full"
                />
                <h1 className="text-4xl font-bold mt-4 text-primary dark:text-white">
                    {playerData.name}
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-3">
                    {playerData.slogan}
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-800 dark:text-gray-200">
                    {playerData.bio}
                </p>

                {playerData.socials && (
                    <div className="mt-4 flex space-x-4">
                        {playerData.socials.map(({ platform, url }) => (
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

                <div className="mt-8 w-full">
                    <h2 className="text-2xl font-semibold mb-4 text-primary dark:text-white">
                        Stats
                    </h2>
                    <ul className="space-y-2">
                        {Object.entries(playerData.stats).map(([label, value]) => (
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
