import { fetchMarkdownFile } from "@/lib/github";
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";
import "@/styles/markdown.css";
import GiscusComments from "@/components/posts/GiscusComments";
import { extractHeadings, injectHeadingAnchors } from "@/lib/utils";
import TOC from "@/components/posts/TOC";


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

  const headings = extractHeadings(markdown);
  const markdownWithAnchors = injectHeadingAnchors(markdown);
	
	return (
    <div className="prose prose-neutral relative 2xl:flex-row-reverse max-w-4xl mx-auto dark:prose-invert prose-headings:scroll-mt-24 prose-h2:mt-12 prose-pre:bg-gray-100 dark:prose-pre:bg-gray-900 py-10 px-4 lg:px-0">
			<aside className="hidden 2xl:block fixed top-[40%] right-50 w-60 h-fit text-sm text-gray-600 dark:text-gray-300 toc">
        <TOC headings={headings} />
      </aside>

      <article className="markdown prose prose-neutral dark:prose-invert flex-1 max-w-4xl mx-auto prose-headings:scroll-mt-24 prose-h2:mt-12 prose-pre:bg-gray-100 dark:prose-pre:bg-gray-900">
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