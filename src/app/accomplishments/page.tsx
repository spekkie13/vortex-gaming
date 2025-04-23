import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Accomplishments – Vortex Gaming',
};

/*
🏆 Royal Ascension Cup Champions
🌍 Top 32 finish in Clash Worlds
🔥 Quarterfinalists – Ultimate Creative Cup
 */
const achievements = [
    { year: '2025', event: 'Royal Ascension Cup', result: '🏆 Champions' },
    { year: '2025', event: 'Clash Worlds', result: '🌍 Top 32'},
    { year: '2025', event: 'Ultimate Creative Cup', result: '🔥 Quarterfinalists'}
    // ... add more
];

export default function AccomplishmentsPage() {
    return (
        <section>
            <h2 className="text-3xl font-bold text-primary dark:text-white mb-6">Accomplishments</h2>
            <ul className="space-y-4">
                {achievements.map((a, idx) => (
                    <li key={idx} className="border-b pb-2 flex justify-between">
                        <span className="font-semibold">{a.event}</span>
                        <span className="text-gray-600 dark:text-gray-300">{a.year} – {a.result}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
