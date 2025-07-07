import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { serialize } from 'next-mdx-remote/serialize';

const projectsDirectory = path.join(process.cwd(), 'projects');

export async function generateStaticParams() {
  const files = fs.readdirSync(projectsDirectory);

  return files.map(filename => ({
    slug: filename.replace('.mdx', ''),
  }));
}

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const filePath = path.join(projectsDirectory, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(source);

  const mdxSource = await serialize(content, { scope: data });

  return (
    <article className="max-w-4xl mx-auto p-8 prose prose-yellow dark:prose-invert">
      <h1>{data.title}</h1>
      <MDXRemote {...mdxSource} />
    </article>
  );
}
