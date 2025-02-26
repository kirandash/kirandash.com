import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getProjectById } from "../../lib/projects";
import Link from "next/link";
import { Metadata } from "next";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

// Add metadata configuration to prevent indexing
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectById(params.id);

  if (!project) {
    notFound();
  }

  return (
    <main>
      {/* Add meta tags for older browsers and additional protection */}
      <meta name="robots" content="noindex, nofollow, noarchive" />
      <meta name="googlebot" content="noindex, nofollow, noimageindex" />

      <article className="container mx-auto max-w-2xl mt-8 md:mt-20 px-4 mb-16">
        <Link
          href="/portfolio"
          className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 mb-8"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Portfolio
        </Link>

        <div className="my-8">
          <span className="text-xl font-medium">Project Details</span>
          <h1 className="text-4xl mt-1 font-bold tracking-wide">
            {project.title}
          </h1>
        </div>

        <div className="my-8 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-sm text-gray-700 dark:text-gray-300 border border-gray-700 dark:border-gray-300 rounded-full px-3 py-1"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="my-8 flex gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 border-2 border-black dark:border-white rounded-lg px-4 py-2 hover:opacity-50 transition-opacity"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 border-2 border-black dark:border-white rounded-lg px-4 py-2 hover:opacity-50 transition-opacity"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              View Demo
            </a>
          )}
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          {project.content && <MDXRemote source={project.content} />}
        </div>
      </article>
    </main>
  );
}
