import React from 'react'

export default function PostCardDate({ date }: { date: string; }) {
    return (
        <div className="mt-auto pt-4 flex justify-between items-center text-xs text-zinc-400">
            <span>📅 {date}</span>
            <span
            className="flex items-center gap-1 text-indigo-500 dark:text-indigo-400 font-medium 
            opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 
            transition-all duration-300"
            >
            더 보기
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-3.5 h-3.5"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            </span>
        </div>
    )
}
