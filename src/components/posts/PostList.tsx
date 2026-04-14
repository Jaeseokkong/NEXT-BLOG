'use client';

import { useEffect, useState, useRef } from "react";
import PostCard from "../organisms/PostCard";
import { useSearchParams } from "next/navigation";
import { usePosts } from "@/hooks/usePosts";
import { MainCategory } from "@/constants/category";
import { PostItem } from "@/types/post";

const Spinner = () => (
  <div className="col-span-full flex justify-center py-6">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-500" />
  </div>
);

type PostListProps = {
  initialPosts: PostItem[];
  searchKeyword?: string;
};

const PostList = ({ initialPosts, searchKeyword = "" }: PostListProps) => {
  const [posts, setPosts] = useState<PostItem[]>(initialPosts);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const category = searchParams.get('category') as MainCategory;

  useEffect(() => {
    if (!searchKeyword) {
      setPosts(initialPosts);
      setPage(1);
      setHasMore(true);
      return;
    }

    const controller = new AbortController();
  
    const fetchSearchResults = async () => {
      try {
        setIsLoading(true);
  
        const res = await fetch(
          `/api/posts?search=${encodeURIComponent(searchKeyword)}`,
          { signal: controller.signal }
        );
  
        const { posts } = await res.json();
        setPosts(posts);
        setHasMore(false);
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchSearchResults();
  
    return () => controller.abort();
  }, [searchKeyword, category]);

  // 페이지 변경 시 무한 스크롤 데이터 로드
  const {posts: newPosts, more, isLoading: isFetching} = usePosts(page, category, searchKeyword);

  useEffect(() => {
    if (page <= 1 || searchKeyword) return;
    if (!hasMore) return;

    if (newPosts && newPosts.length> 0) {
      setPosts((prev) => [...prev, ...newPosts]);
    }

    setHasMore(more);
  }, [page, hasMore, searchKeyword]);

  useEffect(() => {
    if (searchKeyword) return;
  
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isFetching && hasMore) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );
  
    const currentRef = loaderRef.current;
    if (currentRef) observer.observe(currentRef);
  
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [isFetching, hasMore, searchKeyword]);

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.title} post={post} />
      ))}
      {isLoading && <Spinner />}
      {!searchKeyword && <div ref={loaderRef} />}
    </div>
  );
};

export default PostList;
