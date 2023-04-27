import { Routes, Route } from 'react-router-dom'
import './App.css'
import PinkBear from './PinkBear'
import About from './About'
import Projects from './Projects'

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<PinkBear />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  )
}

export default App
