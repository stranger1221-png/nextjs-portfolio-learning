/**
 * Home Page of your Next.js Portfolio!
 * This file exports a React component that gets rendered at the root route ('/').
 * In App Router, any /app/{segment}/page.tsx becomes a routable page.
 * 
 * This is rendered as a React *Server Component* by default.
 * You can fetch data here using async/await if needed (for SSR/SSG).
 * Client-specific logic: Use Client Components instead and import here.
 */
import Hero from '../components/Hero'
export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <Hero
        heading="Hi, I'm [Your Name]!"
        subheading="I build modern web apps with Next.js, React, and Tailwind CSS."
        avatarUrl="/avatar.png" // Place an avatar image in your /public directory!
      />
      {/* Any other sections/components can go below */}
    </main>
  )
}
/**
 * Why no `export const metadata` here?
 * The layout.tsx already sets global SEO/metadata — you can override on a page-by-page basis if needed!
 *
 * Want to make this a "Client Component"? Just add: 'use client' at the top (not needed here, since we’re not using hooks/state/side effects).
 */
