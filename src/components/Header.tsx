'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-white dark:bg-zinc-900 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="w-14 h-14 bg-[#f7df1e] flex items-center justify-center rounded-sm relative">
            <span className="text-black font-bold text-sm absolute bottom-0 right-0 mb-0 mr-1.5">
              <div className="text-blue-500 text-lg font-extrabold"><span>H</span><span className="text-black">JS</span></div>
            </span>
          </div>
        </Link>
        <nav className="flex items-center space-x-6 font-medium text-sm text-zinc-700 dark:text-zinc-200">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/posts" className="hover:underline">Posts</Link>
          <Link href="/projects" className="hover:underline">Projects</Link>
        </nav>
      </div>
    </header>
    )
}