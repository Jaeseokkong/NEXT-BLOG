import { categoryBgColors } from "@/lib/categoryColors";
import Image from "next/image";
import Link from "next/link";
import PreviewImage from "../atoms/PreviewImage";

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
      href={`/posts/${post.category}/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-700 
      bg-white dark:bg-zinc-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <PreviewImage image={post.image} title={post.title} category={post.category} />
      <div className="flex flex-col p-4 flex-1">
        <span className="text-xs text-indigo-500 dark:text-indigo-400 font-medium uppercase tracking-wide mb-1">
          {post.category}
        </span>

        <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 line-clamp-2 group-hover:text-indigo-500 transition-colors">
          {post.title}
        </h3>

        <div className="mt-auto pt-4 flex justify-between items-center text-xs text-zinc-400">
          <span>📅 {post.date}</span>

          <span
            className="flex items-center gap-1 text-indigo-500 dark:text-indigo-400 font-medium 
            opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 
            transition-all duration-300"
          >
            더 보기
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-3.5 h-3.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
