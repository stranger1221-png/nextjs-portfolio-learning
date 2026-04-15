import { notFound } from 'next/navigation';

// We use server-side fetch to always get the latest project data
export default async function ProjectPage({ params }: { params: { slug: string } }) {
  // Call our own API route to get project data
  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/projects`, {
    // Make sure Next.js always fetches fresh data (or set 'force-cache' for SSG)
    cache: 'no-store'
  });

  if (!response.ok) notFound();

  const projects = await response.json();
  const project = projects.find((p: { slug: string }) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-10">
      <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
      <p className="mb-4 text-lg">{project.description}</p>
      <a href={project.url} className="text-blue-700 underline" target="_blank" rel="noopener">
        View Project
      </a>
    </main>
  );
}