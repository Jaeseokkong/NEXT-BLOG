import { fetchMarkdownFileByPath } from "@/lib/github";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";
import "@/styles/markdown.css";
import { notFound } from "next/navigation";

interface PostPageProps {
  params: Promise<{ path: string[] }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { path } = await params;
  const pathStr = path.join("/")

  let markdown = "";

  try {
    markdown = await fetchMarkdownFileByPath(pathStr);
  } catch {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto py-10 px-4">
      <article className="markdown prose prose-neutral dark:prose-invert max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeHighlight]}
        >
          {markdown}
        </ReactMarkdown>
      </article>
    </main>
  );
}