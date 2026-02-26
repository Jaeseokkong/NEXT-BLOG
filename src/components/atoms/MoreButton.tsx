import React from 'react'

interface MoreButtonProps {
    children: React.ReactNode;
}

export default function MoreButton({ children }: MoreButtonProps) {
    return (
        <span
            className="mt-auto pt-3 flex items-center gap-1 text-xs text-indigo-500 dark:text-indigo-400 font-medium
            opacity-70 group-hover:opacity-100 transition-all duration-300 translate-x-[1px] group-hover:translate-x-0"
        >
            {children}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
        </span>
    )
}
