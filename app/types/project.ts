export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  publishedAt: string;
  content?: string;
}

export type ProjectMeta = Omit<Project, "content">;
