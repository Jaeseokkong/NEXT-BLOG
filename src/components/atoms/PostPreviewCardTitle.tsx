import React from 'react'

interface PostPreviewCardTitleProps {
  title: string;
}

export default function PostPreviewCardTitle({ title }: PostPreviewCardTitleProps) {
  return (
    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 line-clamp-1">
      {title}
    </h3>
  )
}
