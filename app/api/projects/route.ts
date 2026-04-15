import { NextResponse } from 'next/server';

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

export async function GET() {
  return NextResponse.json(PROJECTS);
}