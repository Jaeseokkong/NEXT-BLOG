'use client';

import { useEffect, useState, useRef } from "react";
import { PostMeta } from "@/lib/github"; 
import PostCard from "./PostCard";

const PostList = () => {
  const [posts, setPosts] = useState<PostMeta[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadPosts = async () => {
      setIsLoading(true);
      const res = await fetch(`/api/posts?page=${page}`);
      const newPosts = await res.json();
      setPosts((prev) => [...prev, ...newPosts]);
      setIsLoading(false);
    }

    loadPosts();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    }
  }, [loaderRef.current, isLoading]);


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post, idx) => (
       <PostCard key={`${post.slug}-${idx}`} post={post} />
      ))}
  </div>
  )
}

export default PostList