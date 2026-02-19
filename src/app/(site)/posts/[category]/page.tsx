import Title from "@/components/atoms/Title";
import PostCard from "@/components/organisms/PostCard";
import { fetchFilesInCategory } from "@/lib/github";
import { parseFileName } from "@/lib/utils";

/* eslint-disable @typescript-eslint/no-explicit-any */

export default async function CategoryPage(props: any) {
  const { params } = props;
  const { category } = params as { category: string; };

  if (!category) {
    return <p>Category not found.</p>;
  }

  const files = await fetchFilesInCategory(category);

  const posts = files.map((file) => {
    const parsed = parseFileName(file.name);
    if (!parsed) return null;
    const { date, title, slug } = parsed;
    return {
      title,
      date,
      slug,
      category,
      image: undefined,
    };
  })
  .filter((post): post is NonNullable<typeof post> => post !== null);

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <Title level={1} className="mb-8 text-zinc-900 dark:text-zinc-100">
        🗂 {category}
      </Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post?.title} post={post} />
        ))}
      </div>
    </section>
  );
}
