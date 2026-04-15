/**
 * Projects.tsx
 * Displays a list of projects — shows how to handle arrays, typing, props, and Tailwind layouts.
 */

type Project = {
  title: string
  description: string
  url: string
}

// Props: accepts any array of Project objects
type ProjectsProps = {
  projects: Project[]
  sectionTitle?: string
}

export default function Projects({
  projects,
  sectionTitle = "Featured Projects"
}: ProjectsProps) {
  return (
    <section className="w-full py-12 bg-blue-50 dark:bg-neutral-900">
      <h2 className="text-2xl font-bold mb-8 text-blue-800 dark:text-blue-300 text-center">
        {sectionTitle}
      </h2>
      <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <a
            key={project.url}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg bg-white dark:bg-neutral-800 shadow p-6 hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-200">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  )
}

/**
 * Usage:
 * - Import Projects in app/page.tsx.
 * - Pass in a list/array of project data as a prop!
 */