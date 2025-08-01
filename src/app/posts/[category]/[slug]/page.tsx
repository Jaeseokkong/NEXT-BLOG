import { fetchMarkdownFile } from "@/lib/github";
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";
import "@/styles/markdown.css";
import GiscusComments from "@/components/posts/GiscusComments";

type Params = {
  category: string;
  slug: string;
};

type Props = {
  params: Promise<Params>;
};

export default async function PostPage({ params }: Props) {
  const { category, slug } = await params;
  const markdown = await fetchMarkdownFile(category, slug);
	
	return (
    <div className="markdown prose prose-neutral max-w-4xl mx-auto dark:prose-invert prose-headings:scroll-mt-24 prose-h2:mt-12 prose-pre:bg-gray-100 dark:prose-pre:bg-gray-900 py-10 px-4 lg:px-0">
			<ReactMarkdown
				remarkPlugins={[remarkGfm]}
				rehypePlugins={[rehypeRaw, rehypeHighlight]}
			>
				{markdown}
			</ReactMarkdown>
			<GiscusComments />
		</div>
	)
}