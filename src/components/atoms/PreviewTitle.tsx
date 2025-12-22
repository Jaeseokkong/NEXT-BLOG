import React from 'react'

export default function PreviewTitle({ title }: { title: string; }) {
    return (
        <h2 className="text-2xl font-semibold mb-2 text-zinc-800 dark:text-zinc-100">
            {title}
        </h2>
    )
}
