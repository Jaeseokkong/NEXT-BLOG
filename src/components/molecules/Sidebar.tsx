import { fetchCategories } from '@/lib/github';
import SidebarTitle from '../atoms/SidebarTitle';
import SidebarButton from '../atoms/SidebarButton';

const Sidebar = async () => {
  const categories = await fetchCategories();

  return (
    <aside className="hidden md:block w-[220px] shrink-0 p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-sm h-fit sticky top-24">
      <SidebarTitle />
      <ul className="space-y-3">
        {categories?.map((category) => <SidebarButton key={category} category={category}/>)}
      </ul>
    </aside>
  );
};

export default Sidebar;
