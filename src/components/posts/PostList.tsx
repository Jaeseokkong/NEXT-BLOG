'use client';

import { useEffect, useState, useRef } from "react";
import { PostMeta } from "@/lib/github";
import PostCard from "../organisms/PostCard";

const Spinner = () => (
  <div className="col-span-full flex justify-center py-6">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-500" />
  </div>
);

type PostListProps = {
  initialPosts: PostMeta[];
  searchKeyword?: string; // 검색 키워드 prop
};

const PostList = ({ initialPosts, searchKeyword = "" }: PostListProps) => {
  const [posts, setPosts] = useState<PostMeta[]>(initialPosts);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);

  // 검색어가 바뀌면 첫 페이지 데이터로 리셋
  useEffect(() => {
    if (!searchKeyword) {
      setPosts(initialPosts);
      setPage(1);
      setHasMore(true);
      return;
    }

    const fetchSearchResults = async () => {
      setIsLoading(true);
      const res = await fetch(`/api/posts?search=${encodeURIComponent(searchKeyword)}`);
      const { posts: searchedPosts } = await res.json();
      setPosts(searchedPosts);
      setHasMore(false); // 검색 모드에서는 무한스크롤 비활성화
      setIsLoading(false);
    };

    fetchSearchResults();
  }, [searchKeyword, initialPosts]);

  // 페이지 변경 시 무한 스크롤 데이터 로드
  useEffect(() => {
    if (page <= 1 || searchKeyword) return; // 검색 중이면 무한스크롤 건너뜀
    if (!hasMore) return;

    const loadPosts = async () => {
      setIsLoading(true);
      const res = await fetch(`/api/posts?page=${page}`);
      const { posts: newPosts, more } = await res.json();

      if (newPosts.length > 0) {
        setPosts((prev) => [...prev, ...newPosts]);
      }

      setHasMore(more);
      setIsLoading(false);
    };

    loadPosts();
  }, [page, hasMore, searchKeyword]);

  // IntersectionObserver 등록
  useEffect(() => {
    if (searchKeyword) return; // 검색 중이면 옵저버 비활성화

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading && hasMore) {
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
  }, [isLoading, hasMore, searchKeyword]);

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
      {isLoading && <Spinner />}
      {!searchKeyword && <div ref={loaderRef} />}
    </div>
  );
};

export default PostList;
