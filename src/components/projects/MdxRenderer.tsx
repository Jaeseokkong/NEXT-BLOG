"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import "@/styles/markdown.css";

type MdxRendererProps = {
  mdxSource: MDXRemoteSerializeResult;
};

export default function MdxRenderer({ mdxSource }: MdxRendererProps) {
  return (
    <article className="markdown mx-auto py-3">
      <MDXRemote {...mdxSource} />
    </article>
  );
}
