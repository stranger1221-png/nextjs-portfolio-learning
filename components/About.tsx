/**
 * About.tsx
 * Simple reusable About section for your portfolio.
 */

type AboutProps = {
  title?: string
  content?: string // You could make this ReactNode for more flex!
}

export default function About({
  title = "About Me",
  content = "Hello! I'm passionate about building modern web apps with Next.js, React, and Tailwind CSS. I enjoy learning, teaching, and solving real-world problems with code.",
}: AboutProps) {
  return (
    <section className="w-full py-12 bg-white dark:bg-neutral-950 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-200">{title}</h2>
      <p className="text-lg max-w-2xl text-gray-700 dark:text-gray-300 text-center">{content}</p>
    </section>
  )
}

/**
 * Usage:
 * - Import About in app/page.tsx.
 * - Optionally pass title/content props for easy customizability!
 */