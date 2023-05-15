import { Link } from 'react-router-dom'
import './App.css'
import './PinkBear.css'
import { useState, useEffect } from 'react'
import { TextPost } from './Interfaces'

const About = () => {

  const [textPost, setTextPost] = useState<TextPost[] >([]);
  // const [authenticated, setAuthenticated] = useState<string>('');
  const API_URL = (import.meta.env.VITE_API_URL as string);
  const about = textPost.find(tp => tp.name === "about")?.text as string;
  const abouts = about.split('\n');

  const fetchData = () => {
    fetch(`https://${API_URL}/api/texts/test`)
      .then(response => response.json())
      .then(data => setTextPost(data));
  }
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <article className='pinkBear-content'>
        <Link to="/">back</Link>
        <h3>About me:</h3>
        <p>
          {abouts.map((about, index) => (
            <span key={index}>{about}<br/></span>
          ))}
        </p>
      </article>
    </>
  )
}

export default About
