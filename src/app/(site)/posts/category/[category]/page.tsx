import PostsContainer from "@/components/posts/PostsContainer";
import { fetchPostsByCategory } from "@/lib/api/posts";

export default async function CategoryPage({ params }: { params: Promise<{ category: string }>}) {
  const { category } = await params;
  const initialPosts = await fetchPostsByCategory({ page: 1, category });

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">
        📂 {category}
      </h1>

      <PostsContainer initialPosts={initialPosts} />
    </main>
  );
}