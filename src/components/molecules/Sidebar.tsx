import { CATEGORY_MAP, MainCategory } from '@/constants/category';
import SidebarButton from '../atoms/SidebarButton';
import Title from '../atoms/Title';

const Sidebar = async () => {
  const categories = Object.keys(CATEGORY_MAP) as MainCategory[];
  
  return (
    <aside className="hidden md:block w-[220px] shrink-0 p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-sm h-fit sticky top-24">
      <Title level={2} className=" text-zinc-800 dark:text-zinc-100 mb-4">
        📚 카테고리
      </Title>
      <ul className="space-y-3">
        {categories?.map((category) => <SidebarButton key={category} category={category}/>)}
      </ul>
    </aside>
  );
};

export default Sidebar;
