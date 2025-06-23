import { fetchMarkdownFile } from "@/lib/github";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";
import "@/styles/markdown.css";

export default async function PostPage({ params }: {
  params: { category: string; slug: string }
}) {
  const { category, slug } = params;
  const markdown = await fetchMarkdownFile(category, slug);

  return (
    <div className="markdown prose prose-neutral max-w-3xl mx-auto dark:prose-invert prose-headings:scroll-mt-24 prose-h2:mt-12 prose-pre:bg-gray-100 dark:prose-pre:bg-gray-900 py-10">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}

export function generateStaticParams(): { category: string; slug: string }[] {
  return [
    { category: "tech", slug: "my-first-post" },
    { category: "life", slug: "daily-thoughts" },
  ];
}
