import './style.css';
import { IoLogoGithub, IoIosMail } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { TbFileCv } from "react-icons/tb";
import pdf from './resume.pdf';

const SocialLinks = ({ githubURL, linkedinURL, mailTo, resumeURL }) => {
  return(
    <div className="social-links">
      <a href={githubURL} target="_blank" rel="noreferrer"><IoLogoGithub className="social-icon" /></a>
      <a href={linkedinURL}  target="_blank" rel="noreferrer"><IoLogoLinkedin className="social-icon" /></a>
      <a href={mailTo} target="_blank" rel="noreferrer"><IoIosMail className="social-icon mail" /></a>
      <a href={pdf} target="_blank" rel="noreferrer"><TbFileCv className="social-icon"/></a>
    </div>
  )
}

export default SocialLinks;