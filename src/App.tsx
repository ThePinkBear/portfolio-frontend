import { Routes, Route } from 'react-router-dom'
import './App.css'
import PinkBear from './PinkBear'
import About from './About'
import Projects from './Projects'
import { useState, useEffect } from 'react'
interface Token {
  access_token: string;
  scope: string;
  expires_in: number;
  token_type: string;
}

const App = () => {
  const [token, setToken] = useState<Token>({} as Token);

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
      const response = await fetch('https://dev-cvwatk46okr8v6q2.uk.auth0.com/oauth/token', tokenRequestConfig);
      const data = await response.json();
      setToken(data);

    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getToken();
  }, []);
  
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
          <Route path="/" element={<PinkBear token={token.access_token} />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </section>
    </main>
  )
}

export default App
