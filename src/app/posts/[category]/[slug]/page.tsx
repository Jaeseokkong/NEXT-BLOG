import { fetchMarkdownFile } from "@/lib/github";
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";
import "@/styles/markdown.css";
import GiscusComments from "@/components/posts/GiscusComments";
import { extractHeadings, injectHeadingAnchors } from "@/lib/utils";


type Params = {
  category: string;
  slug: string;
};

type Props = {
  params: Promise<Params>;
};

type Heading = {
	id: string;
	text: string;
	level: number;
}

export default async function PostPage({ params }: Props) {
  const { category, slug } = await params;
  const markdown = await fetchMarkdownFile(category, slug);
  
  const headings = extractHeadings(markdown);
  const markdownWithAnchors = injectHeadingAnchors(markdown);
	
	return (
    <div className="markdown prose prose-neutral max-w-4xl mx-auto dark:prose-invert prose-headings:scroll-mt-24 prose-h2:mt-12 prose-pre:bg-gray-100 dark:prose-pre:bg-gray-900 py-10 px-4 lg:px-0">
			<aside className="lg:w-1/4 w-full lg:sticky lg:top-24 bg-gray-50 dark:bg-gray-900 p-4 rounded-2xl h-fit">
        <h2 className="text-lg font-semibold mb-4">목차</h2>
        <ul className="space-y-2 text-sm">
          {headings.map((h) => (
            <li key={h.id} className={`ml-${(h.level - 1) * 4}`}>
              <a
                href={`#${h.id}`}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </aside>
      <article className="markdown prose prose-neutral max-w-4xl mx-auto dark:prose-invert prose-headings:scroll-mt-24 prose-h2:mt-12 prose-pre:bg-gray-100 dark:prose-pre:bg-gray-900 flex-1">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeHighlight]}
        >
          {markdownWithAnchors}
        </ReactMarkdown>

        <GiscusComments />
      </article>
		</div>
	)
}