'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react'; // 또는 다른 아이콘

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="w-full bg-white dark:bg-zinc-900 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="w-14 h-14 bg-[#f7df1e] flex rounded-sm relative">
            <div className="text-blue-500 text-lg font-extrabold absolute bottom-0 right-1">
              <span>H</span><span className="text-black">JS</span>
            </div>
          </div>
        </Link>

        <div className="flex items-center space-x-6 font-medium text-sm text-zinc-700 dark:text-zinc-200">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/posts" className="hover:underline">Posts</Link>
          <Link href="/projects" className="hover:underline">Projects</Link>
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle Dark Mode"
              className="text-xl"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
