import Link from 'next/link';

interface Post {
  title: string;
  date: string;
  slug: string;
  category: string;
  excerpt?: string;
}

const PostList = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
    {posts.map((post) => (
      <Link
        key={`${post.category}/${post.slug}`}
        href={`/post/${post.category}/${post.slug}`}
        className="block p-4 border rounded-2xl shadow-md hover:shadow-lg transition bg-white dark:bg-zinc-900"
      >
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
          📅 {post.date} | 📂 {post.category}
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-sm">{post.excerpt}</p>
      </Link>
    ))}
  </div>
  )
}

export default PostList