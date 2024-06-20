import './style.css';
import { MdOutlineArrowOutward } from "react-icons/md";


const Education = ({ edu, skills }) => {
  return(
    <div className="education">

          <div className='sticky'>  
            <h4>Education</h4>
          </div>

          <div className="content">
            <div className="institute">
              <a href="https://mimo.org/" target="_blank" rel="noreferrer">{edu.name}</a>
            </div>
            <div className="certification">
              <a href={edu.certificate} target="_blank" rel="noreferrer">{edu.grade}</a>
            </div>
            <div>
              <p>This curriculum provides:</p> 
              {edu.description.map((desc) => <p className='eduDesc'>{desc}</p>)}
            </div>
            <div>
              <a className="certification-link" href={edu.certificate} target="_blank" rel="noreferrer">View certification <MdOutlineArrowOutward /></a>
            </div>
          </div>

          <h4>Skills</h4>
          <div className="content">
            <div className="skill-category">
              {skills.map((skill) => (
                <span className="skills" key={skill}>{skill}</span>
              ))}
            </div>
          </div>

        </div>
  )
}

export default Education;