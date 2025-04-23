// components/Navbar.tsx
'use client';

import Link from 'next/link'
import Image from 'next/image'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
    return (
        <nav className="
      flex items-center justify-between
      bg-white dark:bg-gray-800
      px-6 py-4
      transition-colors
    ">
            <Link href="/" className="flex items-center">
                <Image
                    src="/Vortex_Gaming_Logo.png"
                    alt="Vortex Gaming Logo"
                    width={40}
                    height={40}
                />
                <span className="ml-2 text-xl font-bold text-gray-900 dark:text-gray-100">
          Vortex Gaming
        </span>
            </Link>

            <div className="flex items-center space-x-6">
                <Link href="/" className="text-gray-700 dark:text-gray-300 hover:underline">
                    Home
                </Link>
                <Link href="/team" className="text-gray-700 dark:text-gray-300 hover:underline">
                    Team
                </Link>
                <Link href="/accomplishments" className="text-gray-700 dark:text-gray-300 hover:underline">
                    Accomplishments
                </Link>
            </div>
        </nav>
    )
}
