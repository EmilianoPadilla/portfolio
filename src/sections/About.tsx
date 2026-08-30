import { FaGithub, FaLinkedin } from 'react-icons/fa'
import photo2 from '../assets/photo2.jpeg'
import photo4 from '../assets/photo4.jpeg'
import photo5 from '../assets/photo5.jpeg'
import photo6 from '../assets/photo6.jpeg'
import photo8 from '../assets/photo8.jpeg'
import photo9 from '../assets/photo9.jpeg'
import photo10 from '../assets/photo10.jpeg'
import photo11 from '../assets/photo11.jpeg'

const photos = [
  { src: photo9, alt: 'Emiliano Padilla' },
  { src: photo2, alt: 'Emiliano Padilla' },
  { src: photo6, alt: 'Emiliano Padilla' },
  { src: photo5, alt: 'Emiliano Padilla' },
  { src: photo10, alt: 'Emiliano Padilla' },
  { src: photo8, alt: 'Emiliano Padilla' },
  { src: photo11, alt: 'Emiliano Padilla' },
  { src: photo4, alt: 'Emiliano Padilla' },
]

function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col pt-24 pb-10">

      {/* Mobile layout */}
      <div className="md:hidden flex flex-col px-6 gap-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            About{' '}
            <span className="bg-gradient-to-r from-sky-400 to-sky-700 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-44 h-1 bg-gradient-to-r from-sky-400 to-sky-700 mx-auto mt-4 rounded-full" />
        </div>

        {/* Mobile photos — horizontal scroll carousel with fade hint */}
        {/* Mobile photos — horizontal scroll with partial photo hint */}
        <div className="flex gap-2 overflow-x-auto pb-0 snap-x snap-mandatory scrollbar-hide px-0">
          {photos.map((photo, index) => (
            <div key={index} className="w-28 h-28 rounded-full bg-gradient-to-r from-sky-300 to-sky-700 p-[2px] shadow-lg shrink-0 snap-center">
              <img src={photo.src} alt={photo.alt} className="w-full h-full rounded-full object-cover" />
            </div>
          ))}
        </div>
        <p className="text-gray-500 text-xm text-right pr-6 -mt-4">swipe →</p>

        {/* Mobile text */}
        <div className="flex flex-col gap-4">
          <p className="text-gray-300 leading-relaxed">
            I'm a Full Stack Developer based in Puerto Vallarta, Mexico. I come from an
            unconventional path — Earth Sciences at UNAM, teaching, and technical support
            at Pandora — which shaped how I think about systems, communication, and problem-solving.
          </p>
          <p className="text-gray-300 leading-relaxed">
            I transitioned into software through hands-on building, not bootcamps.
            What I enjoy most is designing clean APIs, thinking through data models,
            and building products that work end to end — from database to deployed UI.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Currently open to junior backend, full stack, or SRE opportunities. Remote-friendly.
          </p>

          <div className="grid grid-cols-1 gap-3 pt-2">
            {[
              { label: 'Location', value: 'Puerto Vallarta, Mexico' },
              { label: 'Email', value: 'emilianopadillarobles@gmail.com' },
              { label: 'Languages', value: 'Spanish, English, French' },
              { label: 'Availability', value: 'Open to opportunities' },
            ].map((item) => (
              <div key={item.label}>
                <span className="text-sky-400 font-medium text-sm">{item.label}: </span>
                <span className="text-gray-400 text-sm">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-4 pt-2">
            <a href="https://github.com/EmilianoPadilla" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <FaGithub className="w-5 h-5" /> GitHub
            </a>
            <a href="https://linkedin.com/in/emiliano-padilla-robles" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              <FaLinkedin className="w-5 h-5" /> LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:flex flex-col flex-1">

        {/* Section header */}
        <div className="text-left mb-8 ml-190 pl-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            About{' '}
            <span className="bg-gradient-to-r from-sky-400 to-sky-700 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-44 h-1 bg-gradient-to-r from-sky-400 to-sky-700 mt-4 rounded-full" />
        </div>

        {/* Desktop content */}
        <div className="flex flex-row flex-1">

          {/* Left side — zigzag photos */}
          <div className="w-72 shrink-0 flex flex-col items-start -mt-20 pl-30">
            {photos.map((photo, index) => (
              <div
                key={index}
                className={`-mt-28 first:mt-0 ${index % 2 === 0 ? 'ml-0' : 'ml-55'}`}
              >
                <div className="w-80 h-80 rounded-full bg-gradient-to-r from-sky-300 to-sky-700 p-[3px] shadow-lg">
                  <img src={photo.src} alt={photo.alt} className="w-full h-full rounded-full object-cover" />
                </div>
              </div>
            ))}
          </div>

          {/* Right side — text */}
          <div className="flex-1 flex flex-col gap-6 pt-0 pl-130 pr-100">
            <p className="text-gray-300 leading-relaxed text-lg">
              I'm a Full Stack Developer based in Puerto Vallarta, Mexico. I come from an
              unconventional path — Earth Sciences at UNAM, teaching, and technical support
              at Pandora — which shaped how I think about systems, communication, and problem-solving.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              I transitioned into software through hands-on building, not bootcamps.
              What I enjoy most is designing clean APIs, thinking through data models,
              and building products that work end to end — from database to deployed UI.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              Currently open to junior backend, full stack, or SRE opportunities. Remote-friendly.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { label: 'Location', value: 'Puerto Vallarta, Mexico' },
                { label: 'Email', value: 'emilianopadillarobles@gmail.com' },
                { label: 'Languages', value: 'Spanish, English, French' },
                { label: 'Availability', value: 'Open to opportunities' },
              ].map((item) => (
                <div key={item.label}>
                  <span className="text-sky-400 font-medium text-sm">{item.label}: </span>
                  <span className="text-gray-400 text-sm">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-2">
              <a href="https://github.com/EmilianoPadilla" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <FaGithub className="w-5 h-5" /> GitHub
              </a>
              <a href="https://linkedin.com/in/emiliano-padilla-robles" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <FaLinkedin className="w-5 h-5" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About