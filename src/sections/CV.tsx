import { FiDownload } from 'react-icons/fi';

function CV() {
  return (
    <section id="cv" className="min-h-screen flex flex-col px-6 pt-30 pb-10">
      <div className="relative mx-100">

        {/* Section header */}
        <div className="text-center mb-0">
          <h2 className="text-4xl font-bold text-white mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-sky-400 to-sky-700 bg-clip-text text-transparent">
              CV
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            My professional background, skills, and experience.
          </p>
          <div className="w-60 h-1 bg-gradient-to-r from-sky-400 to-sky-700 mx-auto mt-4 rounded-full" />
        </div>

        {/* Download button */}
        <div className="flex justify-end mb-8">
            <a
                href="/Emiliano_Padilla_Resume.pdf"
                download
                className="absolute -right-20.5  top-65 
                    bg-gradient-to-r from-sky-800 to-sky-400 
                    text-white px-3 py-1 
                    rounded-l-lg text-base font-bold 
                    hover:opacity-70 transition-opacity  
                    flex flex-col items-center gap-0
                    border-1 border-white/30"
                    
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                <span style={{ transform: 'rotate(180deg)', display: 'inline-block' }}>
                    <FiDownload size={24} />
                </span>
                Download  ATS 
                <span> CV
                </span>
            </a>
        </div>

        {/* CV Content */}
        <div className="bg-[#111827] border border-gray-800 rounded-xl p-8 md:p-12 flex flex-col gap-10 ">

          {/* Summary */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3 pb-2 border-b border-gray-700">
              Professional Summary
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer with a strong backend foundation in Python, FastAPI, PostgreSQL,
              SQLAlchemy, Docker, JWT authentication, and automated testing. Built and deployed Obolus,
              a full stack e-commerce marketplace with React, TypeScript, Tailwind CSS, TanStack Query,
              and Zustand. Strong understanding of distributed systems design including load balancing,
              caching, message queues, and scalability patterns.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 pb-2 border-b border-gray-700">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: 'Languages', value: 'Python, JavaScript, TypeScript, SQL' },
                { label: 'Frontend', value: 'React, TypeScript, Tailwind CSS, shadcn/ui, TanStack Query, Zustand, React Hook Form, Zod' },
                { label: 'Backend', value: 'FastAPI, REST APIs, SQLAlchemy ORM, Pydantic' },
                { label: 'Authentication', value: 'JWT, OAuth2, Password Hashing (bcrypt)' },
                { label: 'Databases', value: 'PostgreSQL, Supabase, Relational Database Design' },
                { label: 'DevOps & Deployment', value: 'Docker, Docker Compose, Render, Vercel, Git, GitHub' },
                { label: 'Testing', value: 'Pytest, Postman, Swagger/OpenAPI' },
                { label: 'System Design', value: 'Distributed systems, Redis, Kafka, load balancing, horizontal scaling' },
              ].map((skill) => (
                <div key={skill.label}>
                  <span className="text-sky-400 font-medium text-sm">{skill.label}: </span>
                  <span className="text-gray-400 text-sm">{skill.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 pb-2 border-b border-gray-700">
              Projects
            </h3>
            <div className="flex flex-col gap-6">
              {[
                {
                  title: 'Obolus — Full Stack E-Commerce Marketplace',
                  stack: 'React, TypeScript, FastAPI, PostgreSQL, Supabase, TanStack Query, Zustand, Tailwind CSS',
                  bullets: [
                    'Built and deployed a complete full stack e-commerce marketplace — live at obolus-by-emilianopadilla.vercel.app',
                    'Frontend with React and TypeScript featuring product browsing, real-time search, category filtering, and JWT authentication.',
                    'Backend with FastAPI and PostgreSQL (Supabase) with full CRUD, JWT authentication, and ownership-based authorization.',
                    'Seller functionality — any authenticated user can list, edit, and delete their own products.',
                    'Cart system persisted in the database with optimistic updates for instant UI feedback.',
                  ],
                },
                {
                  title: 'E-Commerce REST API',
                  stack: 'Python, FastAPI, PostgreSQL, SQLAlchemy, Docker, JWT, Pytest',
                  bullets: [
                    'Built and deployed a production-style RESTful API for an e-commerce platform.',
                    'Implemented JWT authentication, OAuth2 authorization, and bcrypt password hashing.',
                    'Containerized with Docker and Docker Compose; deployed to Render.',
                    'Created automated API tests using Pytest and documented via Swagger/OpenAPI.',
                  ],
                },
                {
                  title: 'Movie Browser',
                  stack: 'React, TypeScript, TanStack Query, React Router, Tailwind CSS, Zod',
                  bullets: [
                    'Multi-page movie search app consuming the OMDb REST API with debounced search.',
                    'Implemented infinite scroll pagination using TanStack Query\'s useInfiniteQuery.',
                    'Built custom hooks: useDebounce, useLocalStorage, useMediaQuery.',
                  ],
                },
              ].map((project) => (
                <div key={project.title}>
                  <h4 className="text-white font-bold">{project.title}</h4>
                  <p className="text-sky-400 text-xs italic mb-2">{project.stack}</p>
                  <ul className="flex flex-col gap-1">
                    {project.bullets.map((bullet, i) => (
                      <li key={i} className="text-gray-400 text-sm flex gap-2">
                        <span className="text-sky-400 mt-1">•</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 pb-2 border-b border-gray-700">
              Professional Experience
            </h3>
            <div className="flex flex-col gap-6">
              {[
                {
                  title: 'Teacher',
                  company: 'José Joaquín Fernández de Lizardi',
                  dates: '2023–2025',
                  bullets: [
                    'Taught Geography, Biology, and English to high school students.',
                    'Developed communication, mentoring, and problem-solving skills managing 30+ students.',
                  ],
                },
                {
                  title: 'Technical Support Specialist',
                  company: 'Pandora',
                  dates: '2021–2023',
                  bullets: [
                    'Provided technical support via live chat and email for a US-based media platform.',
                    'Coordinated team-wide incident response — resolved a critical bug in 2 days vs estimated 4-5.',
                    'QA monitoring, issue tracking through JIRA, and onboarding new team members.',
                  ],
                },
                {
                  title: 'Biologist',
                  company: 'Vallarta Botanical Gardens',
                  dates: '2020–2021',
                  bullets: [
                    'Managed environmental databases, research projects, and scientific data collection.',
                  ],
                },
              ].map((job) => (
                <div key={job.title}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-white font-bold">{job.title}</h4>
                      <p className="text-sky-400 text-sm">{job.company}</p>
                    </div>
                    <span className="text-gray-500 text-sm">{job.dates}</span>
                  </div>
                  <ul className="flex flex-col gap-1 mt-2">
                    {job.bullets.map((bullet, i) => (
                      <li key={i} className="text-gray-400 text-sm flex gap-2">
                        <span className="text-sky-400 mt-1">•</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 pb-2 border-b border-gray-700">
              Education
            </h3>
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-white font-bold">Bachelor of Science in Earth Sciences</h4>
                <p className="text-sky-400 text-sm">National Autonomous University of Mexico (UNAM)</p>
              </div>
              <span className="text-gray-500 text-sm">2014–2019</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default CV