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
import { notFound } from "next/navigation";


type Params = {
  category: string;
  slug: string;
};

type Props = {
  params: Params;
};


export default async function PostPage({ params }: Props) {
  const { category, slug } = await params;

  let markdown = "";
  try {
    markdown = await fetchMarkdownFile(category, slug);
  } catch (error) {
    console.error(error);
    notFound();
  }

  const headings = extractHeadings(markdown);
  const markdownWithAnchors = injectHeadingAnchors(markdown);
	
	return (
    <div className="flex flex-col xl:flex-row xl:justify-between max-w-6xl mx-auto py-10 px-4 md:px-8 lg:px-12">
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