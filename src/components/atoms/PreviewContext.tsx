import React from 'react'

export default function PreviewContext({ context }: { context: string; }) {
    return (
        <p className="text-zinc-700 dark:text-zinc-300 mb-3 whitespace-pre-line">
            {context}
        </p>
    )
}
