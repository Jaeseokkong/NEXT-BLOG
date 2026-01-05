import React from 'react'

export default function PostCardTitle({ title }: { title: string; }) {
    return (
        <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 line-clamp-2 group-hover:text-indigo-500 transition-colors">
            {title}
        </h3>
    )
}
