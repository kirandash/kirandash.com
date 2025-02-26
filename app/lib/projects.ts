import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Project, ProjectMeta } from "../types/project";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export async function getAllProjects(): Promise<Project[]> {
  // Ensure the directory exists
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory);
  const projects = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const id = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        id,
        ...(data as Omit<Project, "id">),
      };
    })
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

  return projects;
}

export async function getProjectById(id: string): Promise<Project | null> {
  try {
    const fullPath = path.join(projectsDirectory, `${id}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      id,
      ...(data as Omit<Project, "id">),
      content,
    };
  } catch (error) {
    return null;
  }
}
