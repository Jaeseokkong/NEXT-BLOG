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
    <ul className="space-y-6">
      {posts.map((post) => (
        <li key={`${post.category}/${post.slug}`} className="border-b pb-4">
          <Link href={`/post/${post.category}/${post.slug}`}>
            <h2 className="text-xl font-semibold hober:underline">{post.title}</h2>
          </Link>
          <p className="text-sm text-zinc-500">
            {post.excerpt && <p className="text-zinc-700 mt-2">{post.excerpt}</p>}
          </p>
        </li>
      ))

      }
    </ul>
  )
}

export default PostList