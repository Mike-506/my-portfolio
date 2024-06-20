import './style.css';
import { useEffect } from 'react';

import About from '../About';
import Education from '../Education';
import Projects from '../Projects';


const Right = ({ intro, edu, skills, projects, setActiveSection }) => {

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      const educationSection = document.getElementById('education');
      const projectsSection = document.getElementById('projects');
  
      const scrollY = window.scrollY;
  
      if (scrollY >= aboutSection.offsetTop && scrollY < educationSection.offsetTop) {
        setActiveSection('about');
      } else if (scrollY >= educationSection.offsetTop && scrollY < projectsSection.offsetTop) {
        setActiveSection('education');
      } else if (scrollY >= projectsSection.offsetTop) {
        setActiveSection('projects');
      }

      // Get the window height
      const windowHeight = window.innerHeight;

      // Logical scroll down/up handling for each heading in each section
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const stickyElement = section.querySelector('.sticky');
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (window.scrollY > sectionTop && window.scrollY < sectionBottom - windowHeight) {
          stickyElement.classList.add('is-sticky');
        } else {
          stickyElement.classList.remove('is-sticky');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setActiveSection]);

  return(
    <div className="right">

      <section id="about">
        <About intro={intro} />
      </section>

      <section id="education">
        <Education edu={edu} skills={skills} />
      </section> 

      <section id="projects">
        <Projects projects={projects} />
      </section>  


      <div className='portfolio-desc'>
        Coded in Visual Studio Code. Built with ReactJS. Inspired on <a href="https://brittanychiang.com/" target="_blank" rel="noreferrer">Brittany Chiang's</a> portfolio.
      </div>

    </div>
  );
}

export default Right;