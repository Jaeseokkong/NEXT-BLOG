"use client";

import { MainCategory } from '@/constants/category';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function SidebarButton({ category }: { category: MainCategory }) {
	const router = useRouter();
	
	const handleClick = (category: MainCategory) => {
		console.log(category)
		router.push(`posts?category=${category}`)
	}

	return (
		<li 
			className="block px-4 py-2 rounded-lg bg-zinc-100 w-full text-left cursor-pointer
					dark:bg-zinc-800 hover:bg-indigo-100 dark:hover:bg-indigo-300/10 text-zinc-800 
					dark:text-zinc-100 font-medium transition-colors duration-200"
			key={category} onClick={() => handleClick(category)}>
			{category}
		</li>
	)
}
