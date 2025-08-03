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
    if (searchInput === '') {
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
    <>
      <SearchInput onSearch={setSearchInput} />
      <PostList initialPosts={filteredPosts} />
    </>
  );
};

export default PostsContainer;
