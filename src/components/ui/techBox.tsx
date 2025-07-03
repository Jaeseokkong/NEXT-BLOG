import React from 'react'

interface TechBoxProps {
  techName: string;
}

export default function TechBox({ techName }: TechBoxProps) {
  return (
    <span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-700 rounded" key={techName} >{techName}</span>
  )
}