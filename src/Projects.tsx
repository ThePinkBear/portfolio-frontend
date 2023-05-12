import { Link } from 'react-router-dom'
import './App.css'
import './PinkBear.css'

const Projects = () => {

  return (
    <>
      <section className="pinkBear-content">
        <article className="pinkBear-article">
        <Link to="/">back</Link>
        <h3>GitHub Repos:</h3>
            <a href="https://github.com/ThePinkBear/portfolio-frontend.git" target="_blank">The repo for this portfolios frontend(React Typescript)</a>
          
            <a href="https://github.com/ThePinkBear/portfolio-backend.git" target="_blank">The repo for this portfolios backend(.Net c# web-api)</a>
          
            <a href="https://github.com/ThePinkBear/code-test-simpleCalculator.git" target="_blank">Recent code test. (c#)</a>
          </article>
      </section>
    </>
  )
}

export default Projects
