import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

interface Item {
  id: number;
  text: string;
}

function PinkBear() {

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
          <img src="src/images/pp-bw.JPG" className="image" alt="A picture of me facing the camera." />
      </div>
      <h1>Björn Noctiluca</h1>
      <div className="card">
        <h2>
          .Net Fullstack developer
        </h2>
      </div>
      <p className="read-the-docs">
        More <Link to="/about">about me</Link> and my <Link to="/projects">projects</Link> coming soon! <br />
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

export default PinkBear
