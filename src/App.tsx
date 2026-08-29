import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import CV from './sections/CV'
import Posts from './sections/Posts'
import About from './sections/About'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="bg-[#0a0f1e] min-h-screen text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <CV />
        <Posts />
        <About />
        <Contact />
      </main>
    </div>
  )
}

export default App