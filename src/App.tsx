import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import './index.css'
import PinkBear from './PinkBear'
import About from './About'
import Projects from './Projects'
import { useState, useEffect } from 'react'
import { Token } from './Interfaces'



const App = () => {
  const [token, setToken] = useState<Token>({} as Token);
  const logo = `${import.meta.env.VITE_API_LOGO_TOKEN}` as string;
  const background = `${import.meta.env.VITE_API_BACKGROUND_IMAGE_TOKEN}` as string;

  const tokenAvailable = () => true /*Boolean(token.access_token*/;
  
  
  useEffect(() => {
    const element = document.getElementById('background');
    if(element){
      element.style.backgroundImage = `url(${background})`;
    }
    
  }, []);
  
  return tokenAvailable() ? 
  (
    <>
    <div className='header-overlay'></div>
      <header className="header">
        <img src={`${logo}`} className="logo" alt="PinkBear logo"/>
        <nav className="nav">
          <Link to="/" className='active'>Home</Link>
          <Link to="/about">About me</Link>
          <Link to="/projects">Projects</Link>
        </nav>
      </header>
      <main className="main" id="body">
          <Routes>
            <Route path="/" element={<PinkBear token={token.access_token} />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
      </main>
    </>
  ) 
  :
  (
    <main className="main">
      <h1>loading...</h1>
    </main>
  )
}

export default App
