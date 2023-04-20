import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useState, useEffect } from 'react'
import './App.css'

interface Item {
  id: number;
  text: string;
}

function App() {

  const [myApi, setMyApi] = useState<Item | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch("https://pinkbear-portfolio-backend.azurewebsites.net/portfoliobackend")
      .then(response => response.json())
      .then(data => setMyApi(data));
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <div>
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Björn Noctiluca</h1>
      <div className="card">
        <h2>
          .Net Fullstack developer
        </h2>
      </div>
      <p className="read-the-docs">
        This portfolio page is under construction, check back later!
      </p>
        <p>can we reach the backend?:</p>
      <div>
        {myApi && (
          <div>
            <h2>{myApi.text}</h2>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
