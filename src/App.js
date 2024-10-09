import React, { useState, useRef } from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Dropdown from './components/Dropdown'; // Import the Dropdown component

function App() {
  const [selectedSection, setSelectedSection] = useState(null);
  const jobsRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);

  const handleScrollToSection = (section) => {
    setSelectedSection(section);
    if (section === 'jobs' && jobsRef.current) {
      jobsRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'education' && educationRef.current) {
      educationRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'projects' && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'skills' && skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Header />
      <Profile />

      {/* Add Dropdown Component for Navigation */}
      <Dropdown handleScrollToSection={handleScrollToSection} />

      {/* Job Experiences Section */}
      <div ref={jobsRef}>
        {selectedSection === 'jobs' && (
          <div>
            <h2>Job Experiences</h2>
            <Experience />
          </div>
        )}
      </div>

      {/* Education Section */}
      <div ref={educationRef}>
        {selectedSection === 'education' && (
          <div>
            <h2>Education</h2>
            <Education />
          </div>
        )}
      </div>

      {/* Projects Section */}
      <div ref={projectsRef}>
        {selectedSection === 'projects' && (
          <div>
            <h2>Projects</h2>
            <Projects />
          </div>
        )}
      </div>

      {/* Skills Section */}
      <div ref={skillsRef}>
        {selectedSection === 'skills' && (
          <div>
            <h2>Skills</h2>
            <Skills />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
