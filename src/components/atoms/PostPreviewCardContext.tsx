import React from 'react'

interface PostPreviewCardContextProps {
  excerpt: string;
}

export default function PostPreviewCardContext({ excerpt }: PostPreviewCardContextProps) {
  return (
    <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 line-clamp-2">
        {excerpt}
    </p>
  )
}
