import { useState, useEffect } from 'react';
import './App.css';
import './PinkBear.css';
import { TextPost } from './Interfaces';

function PinkBear(token: any) {
  const [image, setImage] = useState<string>('');
  const [textPost, setTextPost] = useState<TextPost[] >([]);
  const [authenticated, setAuthenticated] = useState<string>('');
  const API_URL = (import.meta.env.VITE_API_URL as string);
  const options = {
    headers: {Authorization: `Bearer ${token.token}`}
  };

  const fetchData = () => {
    fetch(`https://${API_URL}/api/texts/test`)
      .then(response => response.json())
      .then(data => setTextPost(data));
    fetch(`https://${API_URL}/api/portfoliobackend/private`, options)
      .then(response => response.text())
      .then(data => setAuthenticated(data as string));
    fetch(`https://${API_URL}/api/portfoliobackend/profile-pictures?image=pp_bw.JPG`)
      .then(response => response.text())
      .then(data => setImage(data as string));
  }
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className='pinkBear'>
        <article className='pinkBear-content'>
        <h3>Hi, my name is:</h3>
        <h1>Björn Noctiluca</h1>
        <h3>.Net Fullstack developer</h3>
          <p>More about me and my projects coming soon!</p>
        <p>can we reach the backend?:</p>
          {
            textPost.map(item => (
              <section key={item.id}>
              <h5>{item.name}</h5>
              <h5>{item.text}</h5>
              </section>
            ))
          } 
          <h3>{authenticated}</h3>
          </article>
            <img src={`${image}`} className="image" alt="A picture of me." />
      </section>
    </>
  )
}

export default PinkBear
