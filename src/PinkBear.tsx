import { useState, useEffect } from 'react';
import './App.css';
import './PinkBear.css';
import { TextPost } from './Interfaces';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { useTypewriter, Cursor } from 'react-simple-typewriter';


function PinkBear(token: any) {
  const [image, setImage] = useState<string>('');
  const [textPost, setTextPost] = useState<TextPost[] >([]);
  const { text } :any = useTypewriter({
    words: ['Fullstack Developer', 'React Frontend Developer', '.Net Backend Developer'] as string[],
    loop: {} as any,
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  const gh = import.meta.env.VITE_API_GH_LINK as string;
  const li = import.meta.env.VITE_API_LI_LINK as string;
  const API_URL = (import.meta.env.VITE_API_URL as string);
  

  const fetchData = () => {
    fetch(`https://${API_URL}/api/texts/test`)
      .then(response => response.json())
      .then(data => setTextPost(data));
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
            <h3 className='wrapper'>
              I'm a:
              <span style={{fontWeight: 'bold', color:'pink'}}>
                {text}
              </span>
              <span style={{color: '#f98d00'}}>
                <Cursor cursorStyle='<'/>
              </span>
            </h3>
          <h5>{textPost.find((tp) => tp.name === "home")?.text}</h5> 
          <p>Socials:</p>
            <section className='rIcons'>
              <BsGithub className='gitHub' target='_blank' onClick={_ => window.location.href=gh}/>
              <BsLinkedin className='linkedIn' target='_blank' onClick={_ => window.location.href=li}/>
            </section>
        </article>
        <article className='pinkbear-image'>
        <img src={`${image}`} className="image" alt="A picture of me." />
        </article>
      </section>
    </>
  )
}

export default PinkBear
