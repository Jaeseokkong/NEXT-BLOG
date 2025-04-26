import { fetchMarkdownFile } from "@/lib/github";
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";

interface Props {
	params: {
		category: string;
		slug: string;
	}
}

export default async function PostPage({ params }: Props) {
	const { category, slug } = params;
  const markdown = await fetchMarkdownFile(category, slug);

	return (
    <div className="prose prose-zinc dark:prose-invert max-w-3xl mx-auto py-8 px-4">
			<ReactMarkdown
				remarkPlugins={[remarkGfm]}
				rehypePlugins={[rehypeRaw, rehypeHighlight]}
			>
				{markdown}
			</ReactMarkdown>
		</div>
	)
}