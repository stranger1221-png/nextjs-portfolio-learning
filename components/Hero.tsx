/**
 * Hero.tsx
 * The main introduction section — your portfolio’s “elevator pitch.”
 * Demonstrates: TypeScript Props, Tailwind styling, semantic HTML, and reusability.
 */

type HeroProps = {
  heading?: string          // Optional prop: fallback/default provided
  subheading?: string       // Optional prop
  avatarUrl?: string        // Optional prop for "profile" image
}

export default function Hero({
  heading = "Hi, I'm Your Name!",
  subheading = "I build modern web applications with Next.js & React.",
  avatarUrl = "/avatar.png",         // Place your image in /public/avatar.png
}: HeroProps) {
  return (
    <section className="w-full py-16 flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white dark:from-neutral-900 dark:to-neutral-950">
      <img
        src={avatarUrl}
        alt="Hero avatar"
        className="w-24 h-24 rounded-full shadow-lg mb-6 border-4 border-blue-200 dark:border-neutral-800 object-cover"
      />
      <h1 className="text-4xl md:text-5xl font-bold mb-2 text-blue-800 dark:text-blue-300 text-center">
        {heading}
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-lg text-center">
        {subheading}
      </p>
    </section>
  )
}

/**
 * Usage: 
 * - Import Hero in app/page.tsx and render it at the top.
 * - Change props to customize your intro without rewriting code!
 */