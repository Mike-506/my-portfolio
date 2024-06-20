import './style.css';
import Info from '../Info';
import NavArea from "../NavArea";
import SocialLinks from '../SocialLinks';

const Left = ({ name, position, description, mailTo, githubURL, linkedinURL, resumeURL, handleSectionActive, activeSection }) => {
  
  return(
    <div className="left">
      <div className="content">

        <Info name={name} position={position} description={description}/>

        <NavArea activeSection={activeSection} handleSectionActive={handleSectionActive}/>

        <SocialLinks mailTo={mailTo} githubURL={githubURL} linkedinURL={linkedinURL} resumeURL={resumeURL}/>

      </div>

    </div>
  );
}

export default Left;