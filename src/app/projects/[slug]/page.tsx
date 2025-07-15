import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { MdxComponents } from "@/components/mdx/MdxComponents";

type ProjectMeta = {
  title: string;
  date: string;
  description: string;
  tech: string[];
  github?: string;
};

type Params = {
  slug: string;
};

type Props = {
  params: Promise<Params>;
};

const projectsDirectory = path.join(process.cwd(), "src/projects");

export async function generateStaticParams() {
  const filenames = fs.readdirSync(projectsDirectory);
  return filenames
    .filter((name) => name.endsWith(".mdx"))
    .map((name) => ({
      slug: name.replace(/\.mdx$/, ""),
    }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { content, frontmatter } = await compileMDX<ProjectMeta>({
    source: fileContents,
    options: {
      parseFrontmatter: true,
    },
    components: MdxComponents, // 🔥 여기 추가
  });


  return (
    <section className="max-w-4xl mx-auto mt-5 px-6 py-10 prose dark:prose-invert bg-white dark:bg-zinc-900 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-700">
      <header className="mb-8 border-b border-zinc-300 dark:border-zinc-700 pb-4">
        <h1 className="text-4xl font-extrabold text-yellow-600 dark:text-yellow-400">{frontmatter.title}</h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{frontmatter.date}</p>
      </header>

      {frontmatter.description && (
        <p className="mb-10 text-lg leading-relaxed text-zinc-800 dark:text-zinc-200">
          {frontmatter.description}
        </p>
      )}

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3 text-zinc-900 dark:text-zinc-100">기술 스택</h2>
        <ul className="flex flex-wrap gap-3">
          {frontmatter.tech?.map((tech) => (
            <li
              key={tech}
              className="px-3 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300 font-medium text-sm shadow-sm"
            >
              {tech}
            </li>
          ))}
        </ul>
      </section>

      {frontmatter.github && (
        <a
          href={frontmatter.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mb-12 text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-600 transition"
        >
          GitHub 저장소 보기 &rarr;
        </a>
      )}

      <article className="prose prose-zinc dark:prose-invert max-w-none">
        {content}
      </article>
    </section>
  );
}
