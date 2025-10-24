// app/post/[category]/page.tsx
import PostCard from "@/components/posts/PostCard";
import { fetchFilesInCategory } from "@/lib/github";
import { parseFileName } from "@/lib/utils";

type Params = {
  title: string;
  date: string;
  slug: string;
  category?: string;
  excerpt: string;
  image?: string;
};

type Props = {
  params: Promise<Params>;
};

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  if (!category) {
    return <p>Category not found.</p>;
  }

  const files = await fetchFilesInCategory(category);

  const posts = files.map((file) => {
    const { date, title, slug } = parseFileName(file.name);
    return {
      title,
      date,
      slug,
      category: category,
      // excerpt: "클릭하여 자세히 보기 →",
      image: undefined,
    };
  });

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8 capitalize text-zinc-900 dark:text-zinc-100">
        🗂 {category}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
