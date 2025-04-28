// components/Navbar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="relative flex items-center justify-between bg-white dark:bg-gray-800 px-6 py-4 transition-colors">
            {/* Logo + Title */}
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

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-6">
                <Link href="/" className="text-gray-700 dark:text-gray-300 hover:underline">
                    Home
                </Link>
                <Link href="/about-us" className="text-gray-700 dark:text-gray-300 hover:underline">
                    About Us
                </Link>
                <Link href="/team" className="text-gray-700 dark:text-gray-300 hover:underline">
                    Team
                </Link>
                <Link
                    href="/accomplishments"
                    className="text-gray-700 dark:text-gray-300 hover:underline"
                >
                    Accomplishments
                </Link>
                <ThemeToggle />
            </div>

            {/* Mobile Hamburger */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                className="md:hidden p-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-accent rounded"
            >
                {menuOpen ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                    </svg>
                )}
            </button>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute inset-x-0 top-full bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-md flex flex-col space-y-2 px-6 py-4 md:hidden">
                    <Link
                        href="/"
                        onClick={() => setMenuOpen(false)}
                        className="hover:underline"
                    >
                        Home
                    </Link>
                    <Link
                        href="/about-us"
                        onClick={() => setMenuOpen(false)}
                        className="hover:underline"
                    >
                        About Us
                    </Link>
                    <Link
                        href="/team"
                        onClick={() => setMenuOpen(false)}
                        className="hover:underline"
                    >
                        Team
                    </Link>
                    <Link
                        href="/accomplishments"
                        onClick={() => setMenuOpen(false)}
                        className="hover:underline"
                    >
                        Accomplishments
                    </Link>
                    <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                        <ThemeToggle />
                    </div>
                </div>
            )}
        </nav>
    );
}
