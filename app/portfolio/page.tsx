import { getAllProjects } from "../lib/projects";
import ProjectCard from "../components/ProjectCard";

export const metadata = {
  title: "Portfolio | Kiran Dash",
  description: "Check out my latest projects and work.",
};

export default async function PortfolioPage() {
  const projects = await getAllProjects();

  return (
    <main>
      <article className="container mx-auto max-w-2xl mt-8 md:mt-20 px-4">
        <div className="my-8">
          <span className="text-xl font-medium">Projects</span>
          <h1 className="text-4xl mt-1 font-bold tracking-wide">Portfolio</h1>
        </div>
        <p className="my-8 text-gray-700 dark:text-gray-300">
          Here are some of the projects I&apos;ve worked on. Each project
          represents a unique challenge and solution in web development.
        </p>

        <div className="grid gap-6 my-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </article>
    </main>
  );
}
