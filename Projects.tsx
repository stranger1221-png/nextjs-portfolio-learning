import Link from 'next/link';

// Example Project type
export type Project = {
  title: string;
  slug?: string; // Added slug property
  // Add other project properties here
};

const projects: Project[] = [
  { title: 'Project One' },
  { title: 'Project Two' },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div>
      {projects.map(project => (
        <div key={project.title}>
          {/* Generate slug from title if not provided */}
          <Link href={`/projects/${project.slug || project.title.toLowerCase().replace(/\s+/g, '-').replace(/[^-]/g, '')}`}>{project.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Projects;