import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export const MdxComponents: MDXComponents = {
  h1: (props) => <h1 className="text-3xl font-bold mt-8 mb-4 text-yellow-600 dark:text-yellow-400" {...props} />,
  h2: (props) => <h2 className="text-2xl font-semibold mt-6 mb-3 text-zinc-800 dark:text-zinc-200" {...props} />,
  p: (props) => <p className="leading-relaxed my-4 text-zinc-700 dark:text-zinc-300" {...props} />,
  ul: (props) => <ul className="list-disc pl-6 my-4" {...props} />,
  ol: (props) => <ol className="list-decimal pl-6 my-4" {...props} />,
  code: (props) => <code className="bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded text-sm font-mono" {...props} />,
  pre: (props) => <pre className="bg-zinc-900 text-zinc-100 p-4 rounded-lg overflow-x-auto my-4" {...props} />,
  a: (props) => <Link className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800" {...props} />,
  blockquote: (props) => (
    <blockquote className="border-l-4 border-yellow-500 pl-4 italic text-zinc-600 dark:text-zinc-300" {...props} />
  ),
};
