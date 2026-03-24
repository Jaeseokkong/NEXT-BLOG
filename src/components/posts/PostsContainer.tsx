'use client';

import { useState, useEffect } from "react";
import SearchInput from "@/components/posts/SearchInput";
import PostList from "@/components/posts/PostList";
import { usePosts } from "@/hooks/usePosts";
import { PostResponse } from "@/types/post";

interface PostsContainerProps {
  initialPosts: PostResponse;
};

const PostsContainer = ({ initialPosts }: PostsContainerProps) => {
  const [searchInput, setSearchInput] = useState('');
  const [debouncedKeyword, setDebouncedKeyword] = useState('');
  const { posts, isLoading } = usePosts(1, undefined, initialPosts);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedKeyword(searchInput);
    }, 500);

    return () => clearTimeout(handler);
  }, [searchInput]);

  if(isLoading) {
    return <div></div>
  }

  return (
    <div className="flex flex-col gap-3">
      <SearchInput onSearch={setSearchInput} placeholder="검색어를 입력하세요..." />        
      {posts.length === 0 ? 
        <p className="text-center text-gray-500">검색 결과가 없습니다.</p>
       : 
        <PostList initialPosts={posts} searchKeyword={debouncedKeyword} />
      }
    </div>
  );
};

export default PostsContainer;
