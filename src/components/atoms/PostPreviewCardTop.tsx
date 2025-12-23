import React from 'react'

interface PostPreviewCardTopProps {
  category: string;
  date: string;
}

export default function PostPreviewCardTop({ category, date }: PostPreviewCardTopProps) {
  return (
    <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium text-indigo-500 dark:text-indigo-400 uppercase tracking-wide">
          {category}
        </span>
        <span className="text-xs text-zinc-400">📅 {date}</span>
    </div>
  )
}
