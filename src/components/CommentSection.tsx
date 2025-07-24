"use client";

import React, { useEffect, useState } from 'react'

function CommentSection({ slug }: { slug: string }) { 
  const [comments, setComments] = useState<{ name: string; text: string }[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(`/api/comments?slug=${slug}`);
        const data = await res.json();
        console.log(data);
        setComments(data);
      } catch (error) {
        console.error("Failed to fetch comments:", error);
      }
    };
  
    fetchComments();
  }, [slug]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("api/comments", {
      method: "POST",
      headers: { "Contenxt-Type": "application/json" },
      body: JSON.stringify({ slug, name, text })
    })
    setName("");
    setText("");
    const res = await fetch(`/api/comments?slug=${slug}`);
    const data = await res.json();
    setComments(data);
  }

  return (
    <div className="mt-12">
      <h2 className="text-xl font-semibold mb-4">댓글</h2>
      <form onSubmit={handleSubmit} className="mb-6 space-y-2">
        <input 
          className="w-full border p-2 rounded"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
         <input 
          className="w-full border p-2 rounded"
          placeholder="댓글을 입력하세요."
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
          등록
        </button>
      </form>
      <div>
        {comments.map((c, idx) => (
          <div key={idx} className="border p-3 rounded">
            <p className="font-semibold">{c.name}</p>
            <p>{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommentSection