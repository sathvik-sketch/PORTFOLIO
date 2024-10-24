// src/components/Dropdown.js
import React from 'react';

function Dropdown({ handleScrollToSection }) {
  return (
    <div className="dropdown">
      <button className="dropbtn">About Me</button>
      <div className="dropdown-content">
        <button onClick={() => handleScrollToSection('Experiences')}>Jobs</button>
        <button onClick={() => handleScrollToSection('education')}>Education</button>
        <button onClick={() => handleScrollToSection('projects')}>Projects</button>
        <button onClick={() => handleScrollToSection('skills')}>Skills</button>
      </div>
    </div>
  );
}

export default Dropdown;
