import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

interface TextPost {
  id: number;
  name: string;
  text: string;
}

function PinkBear() {
  const [textPost, setTextPost] = useState<TextPost[] >([]);
  const [image, setImage] = useState<string>('');
  const API_URL = (import.meta.env.VITE_API_URL as string);
  
  useEffect(() => {
    const fetchData = () => {
      fetch(`https://${API_URL}/api/texts/test`)
        .then(response => response.json())
        .then(data => setTextPost(data));
    }
    const fetchPp = () => {
      fetch(`https://${API_URL}/api/portfoliobackend/profile-pictures?image=pp_bw.JPG`)
        .then(response => response.text())
        .then(data => setImage(data as string));
    }
    fetchData();
    fetchPp();
  }, []);
  return (
    <>
      <img src={`${image}`} className="image" alt="A picture of me." />
      <h1>Björn Noctiluca</h1>
      <h4>.Net Fullstack developer</h4>
        <p className="gray-text">
          More about me and my projects coming soon! <br />
        </p>
        <article>
        <p>can we reach the backend?:</p>
          {
            textPost.map(item => (
            <section key={item.id}>
              <h5>{item.name}</h5>
              <h5>{item.text}</h5>
            </section>
            ))
          } 
          </article>
    </>
  )
}

export default PinkBear
