import { useContext } from 'react';
import { AppContext } from './components/AppContext';
import './App.css';
import myInfo from './my-info.json';
import Left from './components/Left';
import Right from './components/Right';


function App() {
  const { activeSection, setActiveSection } = useContext(AppContext);

  const handleSectionActive = (section) => {
    setActiveSection(section);
  };


  return (
    <div className="App">

      <Left
        name={myInfo.name}
        position={myInfo.position}
        description={myInfo.description}
        mailTo={myInfo.socialNet.mail}
        githubURL={myInfo.socialNet.github}
        linkedinURL={myInfo.socialNet.linkedin}
        resumeURL={myInfo.resume}
        handleSectionActive={handleSectionActive}
        activeSection={activeSection}
        pic={myInfo.photo}
      />
      
      <Right
        intro={myInfo.about}
        edu={myInfo.education}
        skills={myInfo.skills}
        projects={myInfo.projects}
        setActiveSection={setActiveSection}
      />

    </div>
  );
}

export default App;
