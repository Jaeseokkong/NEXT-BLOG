'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Logo from '../atoms/Logo';
import ThemeToggle from '../atoms/ThemeToggle';
import HeaderLink from '../atoms/HeaderLink';

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
                    <HeaderLink name="About" href="/about"/>
                    <HeaderLink name="Posts" href="/posts"/>
                    <HeaderLink name="Projects" href="/projects"/>
                    {mounted && (
                        <ThemeToggle />
                    )}
                </div>
            </div>
        </header>
    );
}
