import { useState, useEffect } from 'react';
import './App.css';
import './PinkBear.css';
import { TextPost } from './Interfaces';
import { BsLinkedin, BsGithub } from 'react-icons/bs';


function PinkBear(token: any) {
  const [image, setImage] = useState<string>('');
  const [textThatChanges, setTextThatChanges] = useState<string>('');
  const [textPost, setTextPost] = useState<TextPost[] >([]);
  const gh = import.meta.env.VITE_API_GH_LINK as string;
  const li = import.meta.env.VITE_API_LI_LINK as string;
  const API_URL = (import.meta.env.VITE_API_URL as string);
  const spanText = [
    '.Net Backend Developer',
    'React Frontend Developer',
    'Fullstack Developer'
  ] as string[];
  let i = 0;
  const fetchData = () => {
    fetch(`https://${API_URL}/api/texts/test`)
      .then(response => response.json())
      .then(data => setTextPost(data));
    fetch(`https://${API_URL}/api/portfoliobackend/profile-pictures?image=pp_bw.JPG`)
      .then(response => response.text())
      .then(data => setImage(data as string));
  }

  
  useEffect(() => {
    setTextThatChanges(spanText[i] as string);
    const interval = setInterval(() => {
      if(i === spanText.length) i = 0;
      setTextThatChanges(spanText[i] as string);
      i++;
    }, 10000);
  }, []);
  
  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <>
      <section className='pinkBear'>
        <article className='pinkBear-content'>
        <h3>Hi, my name is:</h3>
        <h1>Björn Noctiluca</h1>
        <h3>I am a: <span>{textThatChanges}</span></h3>
          <h5>{textPost.find((tp) => tp.name === "home")?.text}</h5> 
            <p>Socials:</p>
          <section className='rIcons'>
            <BsGithub className='gitHub' target='_blank' onClick={_ => window.location.href=gh}/>
            <BsLinkedin className='linkedIn' target='_blank' onClick={_ => window.location.href=li}/>
          </section>
          </article>
          <img src={`${image}`} className="image" alt="A picture of me." />
      </section>
    </>
  )
}

export default PinkBear
