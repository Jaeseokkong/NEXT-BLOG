import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import React from 'react'

export default function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	
	return (
		 <button
				onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
				aria-label="Toggle Dark Mode"
				className="text-xl cursor-pointer"
			>
			{theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
		</button>
	)
}
