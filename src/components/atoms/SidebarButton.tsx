import Link from 'next/link'
import React from 'react'

export default function SidebarButton({ category }: { category: string }) {
  return (
	 <li key={category}>
		<Link
			href={`/posts/${category}`}
			className="block px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-indigo-100 dark:hover:bg-indigo-300/10 text-zinc-800 dark:text-zinc-100 font-medium transition-colors duration-200"
		>
			{category}
		</Link>
	</li>
  )
}
