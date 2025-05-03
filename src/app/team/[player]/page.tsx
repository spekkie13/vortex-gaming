// app/team/[player]/page.tsx

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { players } from '../../../../data/playerData';
import { managers } from '../../../../data/managementData';
import { fetchPlayerStats } from '../../api/api';
import { PlayerStatsResponse } from "../../../../data/models/playerStats";

type Params = { player: string };

export async function generateStaticParams(): Promise<Params[]> {
    return [
        ...Object.keys(players).map((slug) => ({ player: slug })),
        ...Object.keys(managers).map((slug) => ({ player: slug })),
    ];
}

export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<Params>;
}): Promise<Metadata> {
    const { player: slug } = await params;
    const person = players[slug] || managers[slug];
    return {
        title: person ? `${person.name} – Vortex Gaming` : 'Not Found',
    };
}

export default async function PersonPage({
                                             params,
                                         }: {
    params: Promise<Params>;
}) {
    const { player: slug } = await params;
    const player = players[slug];
    const manager = managers[slug];

    // If this slug corresponds to a real in-game player, fetch their live stats:
    let apiStats: PlayerStatsResponse | null = null;
    if (player) {
        try {
            // prepend '#' and let fetchPlayerStats encode it (%23)
            apiStats = await fetchPlayerStats('#' + slug);
        } catch (e) {
            console.error(`Failed to load stats for #${slug}`, e);
        }
    }

    // Shared container styles:
    const sectionClasses = `
    bg-white dark:bg-gray-900
    text-gray-900 dark:text-gray-100
    transition-colors
    px-4 py-8
  `;

    if (player) {
        return (
            <section className={sectionClasses}>
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

                    {/* Live stats from the API */}
                    {apiStats && (
                        <section className="w-full max-w-3xl mx-auto mt-12 space-y-6">
                            <h2 className="text-2xl font-bold text-primary dark:text-white text-center">
                                Live API Stats
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { title: 'Offense', data: apiStats.stats_offense },
                                    { title: 'Defense', data: apiStats.stats_defense }
                                ].map(({ title, data }) => (
                                    <div
                                        key={title}
                                        className="
            bg-white dark:bg-gray-800
            border border-gray-200 dark:border-gray-700
            rounded-lg p-6
            shadow-sm dark:shadow-none
            hover:shadow-md
            transition-shadow">
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                                            {title}
                                        </h3>
                                        <dl className="space-y-3 text-lg text-gray-700 dark:text-gray-300">
                                            <div className="flex justify-between">
                                                <dt>Avg Stars</dt>
                                                <dd className="font-medium">{data.avg_stars}</dd>
                                            </div>
                                            <div className="flex justify-between">
                                                <dt>Avg %</dt>
                                                <dd className="font-medium">{data.avg_perc}%</dd>
                                            </div>
                                            <div className="flex justify-between">
                                                <dt>Attacks</dt>
                                                <dd className="font-medium">{data.attacks}</dd>
                                            </div>
                                        </dl>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
                <p className="text-sm text-center mt-2 text-gray-500 dark:text-gray-400">
                    Stats provided by <a href="https://competitiveclash.network/">CCN</a>
                </p>
            </section>
        );
    }

    if (manager) {
        return (
            <section className={sectionClasses}>
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
