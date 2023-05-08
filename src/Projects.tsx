import { Link } from 'react-router-dom'
import './App.css'

const Projects = () => {

  return (
    <>
      <Link to="/">back</Link>
      <h1>GitHub Repos:</h1>
      <ul>
        <li>
          <a href="https://github.com/ThePinkBear/portfolio-frontend.git" target="_blank">The repo for this portfolios frontend(React Typescript)</a>
        </li>
        <li>
          <a href="https://github.com/ThePinkBear/portfolio-backend.git" target="_blank">The repo for this portfolios backend(.Net c# web-api)</a>
        </li>
        <li>
          <a href="https://github.com/ThePinkBear/code-test-simpleCalculator.git" target="_blank">Recent code test. (c#)</a>
        </li>
      </ul>
    </>
  )
}

export default Projects
