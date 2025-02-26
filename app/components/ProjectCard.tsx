import Link from "next/link";
import Image from "next/image";
import { Project } from "../types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/portfolio/${project.id}`}
      className="block w-full overflow-hidden rounded-lg border-2 border-black dark:border-white hover:opacity-50 transition-opacity"
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium mb-2">{project.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-sm text-gray-700 dark:text-gray-300 border border-gray-700 dark:border-gray-300 rounded-full px-3 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
