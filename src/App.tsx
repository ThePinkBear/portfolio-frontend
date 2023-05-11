import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import PinkBear from './PinkBear'
import About from './About'
import Projects from './Projects'
import { useState, useEffect } from 'react'
import { Token } from './Interfaces'


const App = () => {
  const [token, setToken] = useState<Token>({} as Token);
  const logo = `${import.meta.env.VITE_API_LOGO_TOKEN}` as string;
  const API_URL = (import.meta.env.VITE_API_URL as string);

  const tokenAvailable = () => {
    if (token.access_token) {
      return true;
    } else {
      return false;
    }
  }

  const getToken = async () => {
    const tokenRequestConfig = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: `${import.meta.env.VITE_API_CLIENT_ID}`,
        client_secret: `${import.meta.env.VITE_API_CLIENT_SECRET}`,
        audience: `${import.meta.env.VITE_API_AUTH0_AUDIENCE}`,
        grant_type: 'client_credentials'
      }),
    };
  
    try {
      fetch('https://dev-cvwatk46okr8v6q2.uk.auth0.com/oauth/token', tokenRequestConfig)
        .then(response => response.json())
        .then(data => setToken(data));

    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getToken();
  }, []);
  
  return tokenAvailable() ? 
  (
    <>
      <header className="header">
        <img src={`${logo}`} className="logo" alt="PinkBear logo"/>
        <nav className="nav">
          <Link to="/" className='active'>Home</Link>
          <Link to="/about">About me</Link>
          <Link to="/projects">Projects</Link>
        </nav>
      </header>
      <main className="main">
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
