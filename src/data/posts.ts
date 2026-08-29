export interface Post {
  date: string
  content: string
  tags?: string[]
}

export const posts: Post[] = [
  {
    date: 'August 2025',
    content: `Heyyooo!! Excited to share that Obolus is live! 

Over the past few months I've been building a full stack e-commerce marketplace from scratch — and it's finally deployed.

Features: product browsing, real-time search, category filtering, persistent cart, JWT authentication, and seller functionality.

Tech stack: React · TypeScript · FastAPI · PostgreSQL · Supabase · Tailwind CSS

Check it out: https://obolus-by-emilianopadilla.vercel.app`,
    tags: ['#FullStack', '#React', '#FastAPI', '#OpenToWork'],
  },
]