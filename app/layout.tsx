/**
 * RootLayout: The global layout for your Next.js app using the App Router.
 * This is a Server Component by default — it only renders on the server,
 * so you can safely include things like HTML, metadata, or fonts.
 */

import './globals.css' // Imports global styles (like Tailwind preflight/reset)
import type { ReactNode } from 'react'

// Metadata for SEO, browser tabs, social, etc.
export const metadata = {
  title: 'My Next.js Portfolio',
  description: 'A developer portfolio built with modern Next.js, for learning React & Next concepts hands-on.',
  icons: {
    icon: '/favicon.ico', // Put your favicon in /public
  }
}

// The layout function is special: it wraps every route/page in your app.
// Children is your page content. You can put navbars, footers, providers here.
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Automatic metadata taken care of by Next.js' <Head /> */}
      </head>
      <body className="bg-white text-black dark:bg-neutral-900 dark:text-white transition-colors">
        {children}
      </body>
    </html>
  )
}

/**
 * Why do this?
 * - Ensures all pages use consistent layout and global styles.
 * - This is *required* in every Next.js app with the /app router.
 */