import Sidebar from "@/components/Sidebar";
import { fetchCategories } from "@/lib/github";

export default async function Home() {
  const data = await fetchCategories()
  console.log(data);

  return (
    <div>
      <Sidebar/>
    </div>
  );
}
