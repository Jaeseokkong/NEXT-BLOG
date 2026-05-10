"use client";

import { Category } from '@/constants/category';
import React from 'react'
import { twMerge } from 'tailwind-merge';

interface SideBarButtonProps {
	category: Category;
	handleClick: (category: Category) => void;
	selected: boolean;
}

export default function SidebarButton({ category, handleClick, selected }: SideBarButtonProps) {
	return (
		<li 
			className={
				twMerge(
					
					`block px-4 py-2 rounded-lg bg-zinc-100 w-full text-left cursor-pointer
					dark:bg-zinc-800 hover:bg-indigo-100 dark:hover:bg-indigo-300/20 text-zinc-800 
					dark:text-zinc-100 font-medium transition-colors duration-200`,
					selected && "bg-indigo-100 dark:bg-indigo-300/20"
				)
			}
			key={category} onClick={() => handleClick(category)}>
			{category}
		</li>
	)
}
