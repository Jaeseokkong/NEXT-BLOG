import Link from "next/link";


interface Props {
  key: string;
  post: Post;
}

interface Post {
  title: string;
  date: string;
  slug: string;
  category: string;
  excerpt?: string;
}

const PostCard = ({ key, post }: Props) => {
  return (
    <Link
        key={key}
        href={`/post/${post.category}/${post.slug}`}
        className="block rounded-2xl shadow-md hover:shadow-lg transition bg-white dark:bg-zinc-900"
      >
        <div className='flex-1 h-[150px] bg-amber-200 rounded-t-2xl flex'>
        </div>
        <div className="py-2 px-4">
          <h3 className="text-sm font-semibold mb-2">{post.title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
            📅 {post.date} | 📂 {post.category}
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-sm">{post.excerpt}</p>
        </div>
    </Link>
  )
}

export default PostCard