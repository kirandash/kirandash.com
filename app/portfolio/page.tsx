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
          Welcome to my portfolio showcasing over 10 years of web development
          experience, specializing in both frontend and full-stack development.
          From crafting pixel-perfect user interfaces to architecting complete
          web applications, I&apos;ve built solutions for enterprise clients and
          innovative startups. Each project demonstrates my expertise in
          creating scalable, user-centric applications with clean code and
          optimal performance.
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
