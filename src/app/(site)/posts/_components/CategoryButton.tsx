"use client";

import { Category } from '@/constants/category';
import React from 'react'
import { twMerge } from 'tailwind-merge';

interface CategoryButtonProps {
	category: Category;
	handleClick: (category: Category) => void;
	selected: boolean;
}

export default function CategoryButton({ category, handleClick, selected }: CategoryButtonProps) {
	return (
		<button 
			className={
				twMerge(
					`px-4 py-2 rounded-lg bg-zinc-100 whitespace-nowrap
					dark:bg-zinc-800 hover:bg-indigo-100 dark:hover:bg-indigo-300/20 text-zinc-800 
					dark:text-zinc-100 font-medium transition-colors duration-200`,
					selected && "bg-indigo-100 dark:bg-indigo-300/20"
				)
			}
			key={category} onClick={() => handleClick(category)}>
			{category}
		</button>
	)
}
