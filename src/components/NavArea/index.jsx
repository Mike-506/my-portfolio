import './style.css';


const NavArea = ({ activeSection, handleSectionActive }) => {
  return(
    <div className="section-area">  

    <a className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}
    href="#about"
    onClick={() => handleSectionActive('about')}>
      <span className="line"></span>
      <p>ABOUT</p>
    </a>

    <a className={`nav-item ${activeSection === 'education' ? 'active' : ''}`}
    href="#education"
    onClick={() => handleSectionActive('education')}>
      <span className="line"></span>
      <p href='#education'>EDUCATION</p>
    </a>

    <a className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}
    href="#projects"
    onClick={() => handleSectionActive('projects')}>
      <span className="line"></span>
      <p>PROJECTS</p>
    </a>

  </div>
  )
}

export default NavArea;