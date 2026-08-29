import { FaGithub, FaLinkedin } from 'react-icons/fa'
import photo from '../assets/myphoto.jpeg'

function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col px-6 pt-25">
      <div className="container mx-auto">

        {/* Section header */}
        <div className="text-center mb-16 ">
          <h2 className="text-4xl font-bold text-white mb-4 -ml-15">
            About{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 ml-173 mt-4 rounded-full" />
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-12 items-center max-w-5xl mx-auto">

          {/* Photo */}
          <div className="md:w-1/3 flex justify-center shrink-0">
            <div className="w-56 h-56 rounded-full ">
              <img
                src={photo}
                alt="Emiliano Padilla"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="md:w-2/3 flex flex-col gap-6">
            <p className="text-gray-300 leading-relaxed text-lg">
              I'm a Full Stack Developer based in Puerto Vallarta, Mexico. I come from an
              unconventional path — Earth Sciences at UNAM, teaching, and technical support
              at Pandora — which shaped how I think about systems, communication, and
              problem-solving.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              I transitioned into software through hands-on building, not bootcamps.
              What I enjoy most is designing clean APIs, thinking through data models,
              and building products that work end to end — from database to deployed UI.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              Currently open to junior backend, full stack, or SRE opportunities. Remote-friendly.
            </p>

            {/* Details */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { label: 'Location', value: 'Puerto Vallarta, Mexico' },
                { label: 'Email', value: 'emilianopadillarobles@gmail.com' },
                { label: 'Languages', value: 'Spanish, English, French' },
                { label: 'Availability', value: 'Open to opportunities' },
              ].map((item) => (
                <div key={item.label}>
                  <span className="text-blue-400 font-medium text-sm">{item.label}: </span>
                  <span className="text-gray-400 text-sm">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com/EmilianoPadilla"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <FaGithub className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/emiliano-padilla-robles"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About