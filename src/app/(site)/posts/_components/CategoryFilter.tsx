"use client";

import { Category, CATEGORY_MAP } from '@/constants/category';
import { useRouter, useSearchParams } from 'next/navigation';
import CategoryButton from './CategoryButton';

const CategoryFilter = () => {
  const categories = Object.keys(CATEGORY_MAP) as Category[];
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectCategory = searchParams.get("category");
  
  const handleClick = (category: Category) => {
		if (category === "ALL") {
			router.push('posts')
		} else {
			router.push(`posts?category=${category}`)
		}
	}

  return (
    <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
      <CategoryButton key="ALL" category="ALL" handleClick={handleClick} selected={selectCategory === null} />
      {categories?.map((category) => <CategoryButton key={category} category={category} handleClick={handleClick} selected={selectCategory === category} />)}
    </div>
  );
};

export default CategoryFilter;
