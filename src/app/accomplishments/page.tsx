// app/accomplishments/page.tsx

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Accomplishments – Vortex Gaming',
};

const achievements = [
    { year: '2025', event: 'Royal Ascension Cup',    result: '🏆 Champions'      },
    { year: '2025', event: 'Clash Worlds',           result: '🌍 Top 32'         },
    { year: '2025', event: 'Ultimate Creative Cup',  result: '🔥 Quarterfinalists' },
    // …add more as needed
];

export default function AccomplishmentsPage() {
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-6 max-w-xl mx-auto text-center">
                Accomplishments
            </h2>

            <div className="max-w-xl mx-auto overflow-x-auto">
                <table className="w-full table-auto border-collapse">
                    {/* Invisible header row for screen readers */}
                    <thead className="sr-only">
                    <tr>
                        <th>Tournament</th>
                        <th>Year</th>
                        <th>Placement</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {achievements.map((a, idx) => (
                        <tr key={idx}>
                            <td className="py-3 px-2 text-left font-semibold text-[8px] md:text-[16px]">
                                {a.event}
                            </td>
                            <td className="py-3 px-2 text-left font-semibold text-[8px] md:text-[16px]">
                                {a.year}
                            </td>
                            <td className="py-3 px-2 text-left font-semibold text-[8px] md:text-[16px]">
                                {a.result}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
