import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { MdxComponents } from "@/components/mdx/MdxComponents";
import Title from "@/components/atoms/Title";

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
    components: MdxComponents,
  });


  return (
    <section className="max-w-4xl mx-auto my-10 px-6 py-10 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-700 transition-all duration-300">
      <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
        <span className="hover:text-indigo-500 transition">Projects</span> /{" "}
        <Title level={4} className="text-zinc-700 dark:text-zinc-200">
          {frontmatter.title}
        </Title>
      </div>
      <header className="mb-8 pb-6 border-b border-zinc-300 dark:border-zinc-700">
        <Title level={1} className="bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
          {frontmatter.title}
        </Title>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
          {frontmatter.date}
        </p>

        {frontmatter.description && (
          <p className="mt-5 text-lg leading-relaxed text-zinc-800 dark:text-zinc-200">
            {frontmatter.description}
          </p>
        )}
      </header>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-zinc-900 dark:text-zinc-100">
          기술 스택
        </h2>
        <ul className="flex flex-wrap gap-2">
          {frontmatter.tech?.map((tech) => (
            <li
              key={tech}
              className="px-3 py-1 rounded-full bg-gradient-to-r from-indigo-100 to-indigo-200 dark:from-indigo-900 dark:to-indigo-800 text-indigo-800 dark:text-indigo-200 font-medium text-sm hover:scale-105 hover:shadow transition-transform duration-200"
            >
              {tech}
            </li>
          ))}
        </ul>
      </section>

      <article className="prose prose-zinc dark:prose-invert max-w-none prose-img:rounded-xl prose-img:shadow-lg prose-img:transition-transform hover:prose-img:scale-105">
        {content}
      </article>
    </section>
  );
}
