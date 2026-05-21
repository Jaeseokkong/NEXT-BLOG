import PreviewSection from "@/components/organisms/PreviewSection";
import { PostItem } from "@/types/post";
import PreviewPostCard from "./PreviewPostCard";

interface PostsPreviewProps {
  initialPosts: PostItem[];
}

export default function PostsPreview({ initialPosts }: PostsPreviewProps) {
  return (
    <PreviewSection
      title="📌 최신 포스트"
      context="최근 작성한 포스트들을 소개합니다. 기술 이야기, 개발 일지 등을 기록하고 있어요."
      moreButton={{ href: "/posts", label: "전체 글 보기" }}
    >
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {initialPosts.slice(0, 6).map((post) => (
          <PreviewPostCard key={post.name} post={post}/>
        ))}
      </ul>
    </PreviewSection>
  );
}
