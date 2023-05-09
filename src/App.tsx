import { Routes, Route } from 'react-router-dom'
import './App.css'
import PinkBear from './PinkBear'
import About from './About'
import Projects from './Projects'

const App = () => {

  return (
    <main className="main">
      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About me</a></li>
          <li><a href="/projects">Projects</a></li>
        </ul>
      </nav>
      <section className="section">
        <Routes>
          <Route path="/" element={<PinkBear />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </section>
    </main>
  )
}

export default App
