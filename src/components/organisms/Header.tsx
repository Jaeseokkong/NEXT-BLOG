'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Logo from '../atoms/Logo';
import ThemeToggle from '../molecules/ThemeToggle';

export default function Header() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    return (
        <header className="w-full bg-white dark:bg-zinc-900 border-b border-zinc-300 dark:border-zinc-600 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center">
                    <Logo/>
                </Link>

                <div className="flex items-center space-x-6 font-medium text-sm text-zinc-700 dark:text-zinc-200">
                    <Link href="/about" className="hover:underline">About</Link>
                    <Link href="/posts" className="hover:underline">Posts</Link>
                    <Link href="/projects" className="hover:underline">Projects</Link>
                    {mounted && (
                        <ThemeToggle />
                    )}
                </div>
            </div>
        </header>
    );
}
