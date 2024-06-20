import './style.css';


const About = ({ intro }) => {
  return(
    <div className="introduction">

      <div className='sticky'>  
        <h4>About</h4>
      </div>
      
      <div className="content">
        <p className="intro-p">{intro[0]}</p>
        <p className="intro-p">{intro[1]}</p>
        <span className="intro-p job-pls">{intro[2]}</span>
      </div>
      
    </div>
  )
}

export default About;