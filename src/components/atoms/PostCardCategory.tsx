import React from 'react'

export default function PostCardCategory({ category }: { category: string; }) {
    return (
        <span className="text-xs text-indigo-500 dark:text-indigo-400 font-medium uppercase tracking-wide mb-1">
            {category} 
        </span>
    )
}
