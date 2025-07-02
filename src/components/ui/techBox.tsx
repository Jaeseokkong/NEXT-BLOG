import React from 'react'

interface techBoxProps {
  techName: string;
}

export default function techBox({ techName }: techBoxProps) {
  return (
    <span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-700 rounded">{techName}</span>
  )
}