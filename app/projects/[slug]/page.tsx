import { notFound } from 'next/navigation';

const PROJECTS = [
  {
    slug: 'my-portfolio',
    title: 'My Portfolio',
    description: 'This site, built with Next.js, React, and Tailwind.',
    url: 'https://github.com/stranger1221-png/nextjs-portfolio-learning'
  },
  {
    slug: 'cool-app',
    title: 'Cool App',
    description: 'A web app that does something amazing.',
    url: 'https://example.com'
  }
];

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find(p => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-10">
      <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
      <p className="mb-4 text-lg">{project.description}</p>
      <a href={project.url} className="text-blue-700 underline" target="_blank" rel="noopener">View Project</a>
    </main>
  );
}