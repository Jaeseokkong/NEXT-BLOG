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
  const [filteredPosts, setFilteredPosts] = useState<PostMeta[]>(initialPosts);

  useEffect(() => {
    if (!searchInput.trim()) {
      setFilteredPosts(initialPosts);
    } else {
      setFilteredPosts(
        initialPosts.filter(post =>
          post.title.toLowerCase().includes(searchInput.toLowerCase())
        )
      );
    }
  }, [searchInput, initialPosts]);

  return (
    <div className="flex flex-col gap-6">
      <SearchInput onSearch={setSearchInput} placeholder="검색어를 입력하세요..." />
      <PostList initialPosts={filteredPosts} searchKeyword={searchInput} />
      {filteredPosts.length === 0 && (
        <p className="text-center text-gray-500">검색 결과가 없습니다.</p>
      )}
    </div>
  );
};

export default PostsContainer;
