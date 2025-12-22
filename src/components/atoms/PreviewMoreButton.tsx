import Link from 'next/link';
import React from 'react'

interface PreviewMoreButtonProps {
    href: string;
    label?: string;
}

export default function PreviewMoreButton({ href, label }: PreviewMoreButtonProps) {
    return (
        <div className="mt-6">
            <Link
                href={href}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium
                    bg-gradient-to-r from-indigo-400 to-indigo-600 text-white
S                hover:from-indigo-500 hover:to-indigo-700
                    dark:from-indigo-500 dark:to-indigo-700 dark:hover:from-indigo-600 dark:hover:to-indigo-800
                    shadow-sm hover:shadow-md transition-all duration-300
                    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                <span>{label || "더 알아보기"}</span>
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
      </div>
    )
}
