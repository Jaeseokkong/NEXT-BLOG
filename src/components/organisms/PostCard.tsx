import { categoryBgColors } from "@/lib/categoryColors";
import Image from "next/image";
import Link from "next/link";
import PreviewImage from "../atoms/PreviewImage";
import PostCardBottom from "../molecules/PostCardBottom";

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
      <PostCardBottom category={post.category} title={post.title} date={post.date} />
    </Link>
  );
};

export default PostCard;
