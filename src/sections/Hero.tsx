import { Mail } from 'lucide-react'
import photo from '../assets/myphoto.jpeg'
import { FaGithub, FaLinkedin } from 'react-icons/fa'


function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col px-6 pt-40 pb-8">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full">
        {/* Left side — text */}
        <div className="flex flex-col gap-6 md:w-1/2">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-2">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-sky-300 to-sky-700 bg-clip-text text-transparent">
                Emiliano
            </span>
            <span className="text-5xl md:text-6xl font-bold mb-2">
                !
            </span>
            </h1>
            <h2 className="text-2xl text-gray-300 font-medium">
              Full Stack Developer
            </h2>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed max-w-md">
            I build complete web applications from database to deployed UI.
            Passionate about clean APIs, scalable systems, and great user experiences.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
                className="bg-gradient-to-r from-sky-400 to-sky-700 text-white px-6 py-3 rounded-lg font-medium hover:opacity-70 transition-opacity"
                >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-400 text-blue-400 px-6 py-3 rounded-lg font-medium hover:bg-blue-400/20 transition-colors"
            >
              Contact Me
            </a>
          </div>

          {/* Social links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/EmilianoPadilla"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/emiliano-padilla-robles"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:emilianopadillarobles@gmail.com"
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right side — photo */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            {/* Gradient ring around photo */}
            <div className="w-72 h-72 md:w-120 md:h-120 ">
              <img
                src={photo}
                alt="Emiliano Padilla"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            {/* Decorative blur behind photo */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-300 to-sky-700 blur-3xl opacity-20 -z-10" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero