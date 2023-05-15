import { Link } from 'react-router-dom'
import './App.css'
import './PinkBear.css'
import { useState, useEffect } from 'react'
import { TextPost } from './Interfaces'

const About = () => {

  const [textPost, setTextPost] = useState<TextPost[] >([]);
  const [abouts, setAbouts] = useState<string[] >([]);
  const API_URL = (import.meta.env.VITE_API_URL as string);
  const profile = textPost.find(tp => tp.name === "about")?.text.split('\n') as string[];
  
  
  const fetchData = () => {
    fetch(`https://${API_URL}/api/texts/test`)
    .then(response => response.json())
    .then(data => setTextPost(data));
  }
  
  useEffect(() => {
    fetchData();
    setAbouts(profile);
  }, []);

  return (
    <>
      <article className='pinkBear-content'>
        <Link to="/">back</Link>
        <h3>About me:</h3>
        <p>
          { abouts ?
          abouts.map((about, index) => (
            <span key={index}>{about}<br/></span> 
          ))
          :
          <h1>Loading...</h1>}
        </p>
      </article>
    </>
  )
}

export default About
