/**
 * Home Page of your Next.js Portfolio!
 * This file exports a React component that gets rendered at the root route ('/').
 * In App Router, any /app/{segment}/page.tsx becomes a routable page.
 * 
 * This is rendered as a React *Server Component* by default.
 * You can fetch data here using async/await if needed (for SSR/SSG).
 * Client-specific logic: Use Client Components instead and import here.
 */

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      {/* This <main> tag is a semantic HTML5 element for accessibility */}
      
      {/* This is a simple example — we’ll replace this with real Portfolio sections (Hero, Projects, etc.) soon! */}
      <h1 className="text-4xl font-bold mb-4 text-center">
        Welcome to My Next.js <span className="text-blue-600">Portfolio</span>
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl text-center mb-8">
        This project is built with <code>Next.js</code> using the App Router, and is fully annotated for learning modern React & Next principles, step by step.
      </p>
      {/* Add more content, components, or imported sections (Hero, About, Projects, etc). */}
    </main>
  )
}

/**
 * Why no `export const metadata` here?
 * The layout.tsx already sets global SEO/metadata — you can override on a page-by-page basis if needed!
 *
 * Want to make this a "Client Component"? Just add: 'use client' at the top (not needed here, since we’re not using hooks/state/side effects).
 */