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
    role: string
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
    'player-two': {
        name: 'Sem',
        slogan: 'The kind of player every team wishes they had',
        bio:
            'Sem is the definition of reliable. Always with a 90%+ hit, he delivers clean hits under any circumstance — no noise, no nonsense. Just results.',
        imageUrl: '/Vortex_Gaming_Logo.png',
        socials: [
            { platform: 'Twitter', url: 'https://twitter.com/Yhhh10617640' },
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
            { platform: 'Twitter', url: 'https://twitter.com/KennethJan6167' },
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
            { platform: 'Twitter', url: 'https://twitter.com/DannyPeeters17' },
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
        slogan: 'Under pressure? He thrives',
        bio:
            'Shady WarDaddy is at his best when the stakes are highest. Calm, composed, and always clutch — when it’s make or break, he steps up and delivers.',
        imageUrl: '/Vortex_Gaming_Logo.png',
        socials: [
            { platform: 'Twitter', url: 'https://twitter.com/' },
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
            { platform: 'Twitter', url: 'https://twitter.com/' },
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
            { platform: 'Twitter', url: 'https://twitter.com/' },
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
            { platform: 'Twitter', url: 'https://twitter.com/' },
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
            { platform: 'Twitter', url: 'https://twitter.com/' },
        ],
        stats: {
            'Matches Played': 50,
            'Win Rate': '68%',
            'Tournaments Won': 3,
            'Average Attack Stars': 2.7,
        },
    },
};

const managers: Record<string, Manager> = {
    'manager-one': {
        name: 'Roel',
        role: 'Owner',
        bio:
            'After competing in eSports myself for two years, I discovered my true passion lies in management. While I enjoyed my time as a player, I found even more fulfillment in building, guiding, and supporting teams behind the scenes. Over the years, I have organized multiple tournaments, worked as an admin, and steadily built up valuable experience in the competitive scene. Though I am always learning and growing, I am proud of how far we have come - and even more excited about what is ahead. This is what I love to do.',
        imageUrl: '/Vortex_Gaming_Logo.png',
        socials: [
            {platform: 'Twitter', url: 'https://twitter.com/RoelCOC'},
        ],
    },
    'manager-two':{
        name: 'Spekkie',
        role: 'Web Developer',
        bio: 'N/A',
        imageUrl: '/Vortex_Gaming_Logo.png',
        socials: [
            {platform: 'Twitter', url: 'https://twitter.com/CSpekkie'},
            {platform: 'Twitch', url: 'https://twitch.tv/spekkie1313'},
        ],
    },
    'manager-three': {
        name: 'Spartacus',
        role: 'Manager',
        bio: 'After spending 5 years as a professional eSports player, I have continued my career in the field of management. I currently oversee two teams, TC Champions and Vortex Gaming. Thanks to the experience I gained during my playing years, my priority is to contribute to the strategic and mental development of these teams. My goal is not just to build winning rosters, but to establish sustainable success and a strong team culture.',
        imageUrl: '/Vortex_Gaming_Logo.png',
        socials: [
            {platform: 'Twitter', url: 'https://twitter.com/CocSpartacus'},
            {platform: 'Instagram', url: 'https://instagram.com/coc_spartacus'},
        ],
    }
}

export async function generateStaticParams(): Promise<{ player: string }[]> {
    return [
        ...Object.keys(players).map((slug) => ({ player: slug })),
        ...Object.keys(managers).map((slug) => ({ player: slug })),
    ];
}

// Generate metadata per slug
export async function generateMetadata({ params }: { params: Promise<{ player: string }> }): Promise<Metadata> {
    const { player: slug } = await params;
    const person: Player | Manager | undefined = players[slug] || managers[slug];
    return {
        title: person ? `${person.name} – Vortex Gaming` : 'Not Found',
    };
}

// Page component handling both players and managers
export default async function PersonPage({ params }: { params: Promise<{ player: string }> }) {
    const { player: slug } = await params;
    const player = players[slug];
    const manager = managers[slug];

    if (player) {
        // Render player detail
        return (
            <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors px-4 py-8">
                <div className="max-w-3xl mx-auto text-center">
                    <Link href="/team" className="inline-block mb-6 text-accent hover:underline">
                        ← Back to Team
                    </Link>
                    <Image
                        src={player.imageUrl}
                        alt={`${player.name} profile`}
                        width={180}
                        height={180}
                        className="mx-auto rounded-full"
                    />
                    <h1 className="text-4xl font-bold mt-4 mb-2 text-primary dark:text-white">
                        {player.name}
                    </h1>
                    <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        {player.slogan}
                    </p>
                    <p className="mb-6 text-base leading-relaxed text-gray-800 dark:text-gray-200">
                        {player.bio}
                    </p>
                    {player.socials && (
                        <div className="flex justify-center space-x-4 mb-8">
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
                        <h2 className="text-2xl font-semibold mb-4 text-primary dark:text-white">
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
    } else if (manager) {
        // Render manager detail
        return (
            <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors px-4 py-8">
                <div className="max-w-3xl mx-auto text-center">
                    <Link href="/team" className="inline-block mb-6 text-accent hover:underline">
                        ← Back to Team
                    </Link>
                    <Image
                        src={manager.imageUrl}
                        alt={`${manager.name} profile`}
                        width={180}
                        height={180}
                        className="mx-auto rounded-full"
                    />
                    <h1 className="text-4xl font-bold mt-4 mb-2 text-primary dark:text-white">
                        {manager.name}
                    </h1>
                    <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-4">
                        {manager.role}
                    </p>
                    <p className="mb-6 text-base leading-relaxed text-gray-800 dark:text-gray-200">
                        {manager.bio}
                    </p>
                    {manager.socials && (
                        <div className="flex justify-center space-x-4 mb-8">
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

    // Fallback: slug not found
    return (
        <section className="py-20 text-center">
            <p className="text-xl text-gray-700 dark:text-gray-300">Person not found.</p>
            <Link href="/team" className="mt-4 inline-block text-accent hover:underline">
                Back to Team
            </Link>
        </section>
    );
}
