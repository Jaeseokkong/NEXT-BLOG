'use client';

import { motion } from 'framer-motion';
import Intro from "@/components/posts/Intro";
import MobileCategoryTabs from "@/components/posts/MobileCategoryTabs";
import PostsContainer from "@/components/posts/PostsContainer";
import Sidebar from "@/components/posts/Sidebar";
import { fetchPosts } from "@/lib/github";

export default async function PostsPage() {
  const { posts: initialPosts } = await fetchPosts(1);

  return (
    <motion.main
      className="max-w-7xl mx-auto px-4 py-8 md:flex gap-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Sidebar />
      <div className="flex-1 flex flex-col gap-6">
        <Intro />
        <MobileCategoryTabs />
        <PostsContainer initialPosts={initialPosts}/>
      </div>
    </motion.main>
  );
}
