// app/page.tsx

// Page-specific metadata overrides layout metadata
export const metadata = {
    title: 'Vortex Gaming',
};

import Image from 'next/image';

export default function HomePage() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
            <div className="text-center">
                <Image
                    src="/Vortex_Gaming_logo-removebg-preview.png"
                    alt="Vortex Gaming Logo"
                    width={200}
                    height={200}
                    className="mx-auto mb-8"
                />
                <h1 className="text-5xl font-bold">Vortex Gaming</h1>
            </div>
        </main>
    );
}
