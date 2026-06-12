import PreviewSection from "@/components/common/PreviewSection";
import { PostItem } from "@/types/post";
import PreviewPostCard from "./PreviewPostCard";

interface PostsPreviewProps {
    initialPosts: PostItem[];
}

export default function PostsPreview({ initialPosts }: PostsPreviewProps) {
    return (
        <PreviewSection
            title="최신 포스트"
            moreButton={{ href: "/posts", label: "전체 글 보기" }}
        >
            <ul className="flex flex-col gap-2 mt-2">
                {initialPosts.slice(0, 15).map((post) => (
                    <PreviewPostCard key={post.name} post={post} />
                ))}
            </ul>
        </PreviewSection>
    );
}
