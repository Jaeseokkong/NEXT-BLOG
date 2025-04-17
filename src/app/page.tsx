import { fetchCategories } from "@/lib/github";
import Image from "next/image";

export default async function Home() {
  const data = await fetchCategories()
  console.log(data);

  return (
    <div>
    </div>
  );
}
