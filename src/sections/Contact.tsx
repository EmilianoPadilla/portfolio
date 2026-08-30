import { Mail, MapPin } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col px-6 pt-25 pb-24">
      <div className="container mx-auto">

        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Get In{' '}
            <span className="bg-gradient-to-r from-sky-400 to-sky-700 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            I'm currently open to new opportunities. Whether you have a question,
            a project in mind, or just want to say hi — my inbox is always open!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-sky-700 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content */}
        <div className="max-w-2xl mx-auto flex flex-col gap-8">

          {/* Contact cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="mailto:emilianopadillarobles@gmail.com"
              className="bg-[#111827] border border-gray-800 rounded-xl p-6 flex flex-col items-center gap-3 hover:border-sky-400/50 transition-colors duration-300 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-white font-medium">Email</span>
              <span className="text-gray-400 text-xs break-all">emilianopadillarobles@gmail.com</span>
            </a>

            <a
              href="https://github.com/EmilianoPadilla"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111827] border border-gray-800 rounded-xl p-6 flex flex-col items-center gap-3 hover:border-sky-400/50 transition-colors duration-300 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                <FaGithub className="w-6 h-6 text-sky-400" />
              </div>
              <span className="text-white font-medium">GitHub</span>
              <span className="text-gray-400 text-xs">github.com/EmilianoPadilla</span>
            </a>

            <a
              href="https://linkedin.com/in/emiliano-padilla-robles"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111827] border border-gray-800 rounded-xl p-6 flex flex-col items-center gap-3 hover:border-sky-400/50 transition-colors duration-300 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                <FaLinkedin className="w-6 h-6 text-sky-400" />
              </div>
              <span className="text-white font-medium">LinkedIn</span>
              <span className="text-gray-400 text-xs">emiliano-padilla-robles</span>
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <MapPin className="w-4 h-4 text-sky-400" />
            <span>Puerto Vallarta, Jalisco, Mexico — Remote friendly</span>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="mailto:emilianopadillarobles@gmail.com"
              className="inline-block bg-gradient-to-r from-sky-400 to-sky-700 text-white px-8 py-4 rounded-lg font-medium hover:opacity-70 transition-opacity text-lg"
            >
              Send me an email
            </a>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto pt-16 text-center text-gray-600 text-sm">
        <p>© 2025 Emiliano Padilla Robles — Built with React, TypeScript & Tailwind CSS</p>
      </div>

    </section>
  )
}

export default Contact