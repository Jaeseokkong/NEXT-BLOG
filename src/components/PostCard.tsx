import { categoryBgColors } from "@/lib/categoryColors";
import Image from "next/image";
import Link from "next/link";

interface Props {
  post: Post;
}

interface Post {
  title: string;
  date: string;
  slug: string;
  category: string;
  excerpt?: string;
  image?: string;
}

const PostCard = ({ post }: Props) => {
  return (
    <Link
      href={`/post/${post.category}/${post.slug}`}
      className="
        group block rounded-2xl overflow-hidden
        shadow-md hover:shadow-lg
        dark:shadow-md dark:hover:shadow-xl
        bg-white dark:bg-zinc-900
        border border-gray-100 dark:border-zinc-700
        hover:bg-zinc-100 dark:hover:bg-zinc-800
      ">
      <div className="
        relative flex-1 h-[150px] rounded-t-2xl flex overflow-hidden
      group-hover:bg-zinc-700 dark:group-hover:bg-zinc-700
      ">
        {post.image ? (
          <>
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-5 transition-opacity" />
          </>
        ) : (
          <div
            className={`${categoryBgColors[post.category]} flex flex-col w-full h-full px-2 text-center justify-center break-keep relative rounded-t-2xl overflow-hidden`}
          >
            <span className="font-extrabold text-lg" style={{ color: 'black' }}>
              {post.title}
            </span>
            <span className="text-xs font-semibold" style={{ color: 'black' }}>
              {post.category}
            </span>
          <div
              className="
                absolute inset-0 bg-gray-300 bg-opacity-20
                dark:bg-gray-900 dark:bg-opacity-20
                opacity-0 group-hover:opacity-20
                transition-opacity rounded-t-2xl
                pointer-events-none
              "
            />
          </div>
        )}
      </div>
      <div className="py-2 px-4">
        <h3 className="text-sm font-semibold mb-2">{post.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
          📅 {post.date} | 📂 {post.category}
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-3">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
};

export default PostCard; 