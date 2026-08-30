import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'CV', href: '/cv' },
  { label: 'Posts', href: '/posts' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#070b14]/95 backdrop-blur-md shadow-lg' : 'bg-[#070b14]/80 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-2 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/">
          <span className="text-4xl font-bold bg-gradient-to-r from-sky-400 to-sky-700 bg-clip-text text-transparent -ml-4">
            Portfolio
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 mr-27">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`transition-colors duration-200 text-xl font-bold ${
                location.pathname === link.href
                  ? 'text-white border-b-2 border-blue-400'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0f1e]/95 backdrop-blur-md px-6 pb-6 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`transition-colors duration-200 ${
                location.pathname === link.href
                  ? 'text-white font-bold'
                  : 'text-gray-300 hover:text-white'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar