// components/ThemeToggle.tsx
'use client';

import { useState, useEffect } from 'react';

export default function ThemeToggle() {
    const [theme, setTheme] = useState<'light'|'dark'>('light');

    // On mount: load or detect
    useEffect(() => {
        const saved = localStorage.getItem('theme');
        let initial: 'light'|'dark';
        if (saved === 'light' || saved === 'dark') {
            initial = saved;
        } else {
            initial = window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light';
        }
        applyTheme(initial);
        setTheme(initial);
    }, []);

    // helper to apply + persist
    function applyTheme(newTheme: 'light'|'dark') {
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        localStorage.setItem('theme', newTheme);
    }

    function toggle() {
        const nxt = theme === 'dark' ? 'light' : 'dark';
        applyTheme(nxt);
        setTheme(nxt);
    }

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
            {theme === 'light' ? '☀️' : '🌙'}
        </button>
    );
}
