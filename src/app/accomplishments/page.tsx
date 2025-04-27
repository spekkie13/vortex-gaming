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
            className={
                "min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 " +
                "transition-colors px-4 py-8"
            }
        >
            <h2
                className={
                    "text-3xl font-bold text-primary dark:text-white mb-6 " +
                    "max-w-xl mx-auto text-center"
                }
            >
                Accomplishments
            </h2>

            <ul className="space-y-4 max-w-xl mx-auto">
                {achievements.map((a, idx) => (
                    <li
                        key={idx}
                        className={
                            "flex justify-between border-b pb-2 " +
                            "text-gray-900 dark:text-gray-100"
                        }
                    >
                        <span className="font-semibold">{a.event}</span>
                        <span className="text-gray-700 dark:text-gray-300">
              {a.year} – {a.result}
            </span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
