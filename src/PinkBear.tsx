import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

interface Item {
  id: number;
  name: string;
  text: string;
}

function PinkBear() {
  const [myApi, setMyApi] = useState<Item[] >([]);
  const API_URL = (import.meta.env.VITE_API_URL as string);
  const IMAGE_URL : string = `https://mknawqiahttnfewbzfzq.supabase.co/storage/v1/object/sign/portfolio-images-pinkbear/pp_bw.JPG?token=${import.meta.env.VITE_API_BUCKET_TOKEN}`;
  useEffect(() => {
    const fetchData = () => {
      fetch(`https://${API_URL}/test`)
        .then(response => response.json())
        .then(data => setMyApi(data));
    }
    fetchData();
  }, []);    
  return (
    <div className="App">
      <div>
      <img src={`${IMAGE_URL}`} className="image" alt="A picture of me." />
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
        
         {
          myApi.map(item => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <h2>{item.text}</h2>
          </div>
        ))} 
        
      </div>
    </div>
  )
}

export default PinkBear
