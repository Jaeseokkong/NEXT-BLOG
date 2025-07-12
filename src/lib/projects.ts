import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type ProjectMeta = {
  title: string;
  description: string;
  date?: string;
  tech?: string[];
  thumbnail?: string;
}

const projectDirectory = path.join(process.cwd(), 'src/projects');

export function getAllProjects(): (ProjectMeta & { slug: string })[] {
  const fileNames = fs.readdirSync(projectDirectory);   

  const projects = fileNames
    .filter((file) => file.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(projectDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      const metadata = data as ProjectMeta;

      return {
        ...metadata,
        slug,
      }
    })

  return projects;
} 
