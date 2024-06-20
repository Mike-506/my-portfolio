import './style.css';
import { FaLaptopCode } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const Projects = ({ projects }) => {
  return (
          <div className="projects">

            <div className='sticky'>    
              <h4>Projects</h4>
            </div>  

            <div className="content">
              { projects.map((project) => {
                return (
                <div key={project.name} className="project-item">

                  <div className='project-img-container'>
                    <img src={project.img} alt={`${project.name}'s img`} />

                    <div className='projects-icons'>
                      <a href={project.url} target="_blank" rel="noreferrer"> <FaLaptopCode /> </a>
                      <a href={project.gitUrl} target="_blank" rel="noreferrer"> <FaSquareGithub /> </a>
                    </div>
                  </div>

                  <div className='project-text-area'>
                  <h5 className="project-title">{project.name}</h5>
                
                  <p className="project-desc">{project.description}</p>
                  </div>
                </div>
              )})
              }
            </div>
          </div>
  )
}

export default Projects; 