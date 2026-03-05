import { fetchAllPosts } from "@/lib/github";
import PostsContainer from "@/components/posts/PostsContainer";

interface Props {
  params: { category: string };
}

export default async function CategoryPage({ params }: Props) {
  const allPosts = await fetchAllPosts();

  const filtered = allPosts.filter(
    (post) => post.category === params.category
  );

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">
        📂 {params.category}
      </h1>

      <PostsContainer initialPosts={filtered} />
    </main>
  );
}