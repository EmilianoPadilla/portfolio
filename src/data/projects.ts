export interface Project {
  title: string
  description: string
  tech: string[]
  liveUrl?: string
  githubUrl?: string
  image?: string
}

export const projects: Project[] = [
  {
    title: 'Obolus — Full Stack E-Commerce Marketplace',
    description:
      'A complete full stack e-commerce marketplace where users can buy and sell products. Features include JWT authentication, real-time search, category filtering, persistent cart, and seller functionality to list and manage products.',
    tech: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Supabase', 'TanStack Query', 'Zustand', 'Tailwind CSS'],
    liveUrl: 'https://obolus-by-emilianopadilla.vercel.app',
    githubUrl: 'https://github.com/EmilianoPadilla/obolus-frontend',
  },
  {
    title: 'E-Commerce REST API',
    description:
      'A production-style RESTful API for an e-commerce platform with full CRUD operations, JWT authentication, OAuth2 authorization, and automated testing. Containerized with Docker and deployed to Render.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Docker', 'JWT', 'Pytest'],
    liveUrl: 'https://emilianopadilla-ecommerce-backend.onrender.com/docs',
    githubUrl: 'https://github.com/EmilianoPadilla',
  },
  {
    title: 'Movie Browser',
    description:
      'A multi-page movie search application consuming the OMDb REST API with real-time debounced search, infinite scroll pagination, and custom hooks for reusable logic across components.',
    tech: ['React', 'TypeScript', 'TanStack Query', 'React Router', 'Tailwind CSS', 'Zod'],
    githubUrl: 'https://github.com/EmilianoPadilla',
  },
  {
    title: 'School Management API',
    description:
      'A modular RESTful API with separate routers for students, teachers, and events. Implements CRUD operations, pagination, input validation, error handling, and environment-based configuration.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy'],
    githubUrl: 'https://github.com/EmilianoPadilla',
  },
]