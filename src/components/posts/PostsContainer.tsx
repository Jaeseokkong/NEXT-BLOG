'use client';

import { useState, useEffect } from "react";
import SearchInput from "@/components/posts/SearchInput";
import PostList from "@/components/posts/PostList";
import { PostMeta } from "@/lib/github";

type PostsContainerProps = {
  initialPosts: PostMeta[];
};

const PostsContainer = ({ initialPosts }: PostsContainerProps) => {
  const [searchInput, setSearchInput] = useState('');
  const [debouncedKeyword, setDebouncedKeyword] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedKeyword(searchInput);
    }, 500);

    return () => clearTimeout(handler);
  }, [searchInput]);


  return (
    <div className="flex flex-col gap-3">
      <SearchInput onSearch={setSearchInput} placeholder="검색어를 입력하세요..." />
      {loading ? (
        <p className="text-center text-gray-500">검색 중...</p>
      ) : (
        <PostList initialPosts={initialPosts} searchKeyword={debouncedKeyword} />
      )}
      {!loading && initialPosts.length === 0 && (
        <p className="text-center text-gray-500">검색 결과가 없습니다.</p>
      )}
    </div>
  );
};

export default PostsContainer;
