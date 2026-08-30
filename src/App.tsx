import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import CV from './sections/CV'
import Posts from './sections/Posts'
import About from './sections/About'
import Contact from './sections/Contact'

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#0a0f1e] min-h-screen text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App