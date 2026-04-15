import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'

export default function HomePage() {
  const myProjects = [
    {
      title: "My Portfolio",
      description: "This site, built with Next.js, React, and Tailwind.",
      url: "https://github.com/stranger1221-png/nextjs-portfolio-learning"
    },
    {
      title: "Cool App",
      description: "A web app that does something amazing.",
      url: "https://example.com"
    }
  ]

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <Hero
        heading="Hi, I'm [Your Name]!"
        subheading="I build modern web apps with Next.js, React, and Tailwind CSS."
        avatarUrl="/avatar.png"
      />
      <About
        title="About Me"
        content="Hello! I'm passionate about building modern web apps with Next.js, React, and Tailwind CSS. I enjoy learning, teaching, and solving real-world problems with code."
      />
      <Projects projects={myProjects} sectionTitle="My Portfolio Projects" />
    </main>
  )
}