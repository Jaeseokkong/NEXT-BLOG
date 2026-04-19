"use client";

import { MainCategory } from '@/constants/category';
import { useRouter } from 'next/navigation';
import React from 'react'

type Category = MainCategory | "ALL";

export default function SidebarButton({ category }: { category: Category }) {
	const router = useRouter();
	
	const handleClick = () => {
		if (category === "ALL") {
			router.push('posts')
		} else {
			router.push(`posts?category=${category}`)
		}
	}

	return (
		<li 
			className="block px-4 py-2 rounded-lg bg-zinc-100 w-full text-left cursor-pointer
					dark:bg-zinc-800 hover:bg-indigo-100 dark:hover:bg-indigo-300/10 text-zinc-800 
					dark:text-zinc-100 font-medium transition-colors duration-200"
			key={category} onClick={handleClick}>
			{category}
		</li>
	)
}
