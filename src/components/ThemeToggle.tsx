'use client';

import { useState, useEffect } from 'react';

export default function ThemeToggle() {
    const [theme, setTheme] = useState<'light'|'dark'>('light');

    // On mount: read saved theme or use OS preference
    useEffect(() => {
        const saved = localStorage.getItem('theme');
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initial: 'light'|'dark' =
            saved === 'light' || saved === 'dark'
                ? (saved as 'light'|'dark')
                : (systemDark ? 'dark' : 'light');

        document.documentElement.classList.toggle('dark', initial === 'dark');
        setTheme(initial);
    }, []);

    // Toggle and persist
    const toggle = () => {
        const next = theme === 'dark' ? 'light' : 'dark';
        document.documentElement.classList.toggle('dark', next === 'dark');
        localStorage.setItem('theme', next);
        setTheme(next);
    };

    return (
        <button
            onClick={toggle}
            aria-label="Toggle Dark Mode"
            className="
        p-2 rounded-full
        bg-gray-200 dark:bg-gray-700
        hover:bg-gray-300 dark:hover:bg-gray-600
        text-gray-800 dark:text-gray-200
        transition-colors duration-200
      "
        >
            {theme === 'dark' ? '☀️' : '🌙'}
        </button>
    );
}
