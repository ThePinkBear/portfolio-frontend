import { Link } from 'react-router-dom'
import './App.css'
import './PinkBear.css'

const About = () => {

  return (
    <>
      <article className='pinkBear-content'>
        <Link to="/">back</Link>
        <h3>About me:</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium neque nulla, aspernatur debitis totam ipsam vel qui explicabo repellendus sapiente iusto tempora iure, dolorem distinctio quas commodi quidem architecto illo consequatur. Molestias enim, ducimus assumenda ratione iusto animi beatae distinctio quisquam voluptate adipisci aspernatur qui labore quae, corporis nesciunt. Iusto exercitationem cumque pariatur modi provident ullam quaerat tenetur enim fuga expedita, doloremque quidem libero sint alias quas dolorem optio aliquid quam eveniet aspernatur ipsam! Ipsam, totam! Commodi, natus at quas mollitia laboriosam totam quisquam fugiat temporibus non, voluptatum sit enim quibusdam rem culpa laborum sunt est ullam itaque in sint.
        </p>
      </article>
    </>
  )
}

export default About
