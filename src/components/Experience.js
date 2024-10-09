import React, { useState } from 'react';

const experiences = [
  {
    title: 'Lead Java Developer at Innovative Physical Therapy',
    duration: 'May 2024 - Present · 6 months',
    description: `Design and manage the medical healthcare software, ensuring it meets the needs of the organization. 
                  Perform troubleshooting data quality issues and analyzing data requirements with high accuracy. 
                  Designed, configured, and managed public/private cloud infrastructures using AWS.`,
    shortDescription: `Design and manage medical healthcare software and troubleshoot data quality issues.`, // Shortened preview
  },
  {
    title: 'Java Full Stack Developer at CVS Health',
    duration: 'May 2023 - Apr 2024 · 1 year',
    description: `Designing and implementing front-end screens using JSP, JSTL, HTML5, JavaScript, and AngularJS. 
                  Developed dynamic, data-driven web applications with ReactJS and integrated REST APIs.`,
    shortDescription: `Designing and implementing front-end screens using JSP, JSTL, HTML5, and ReactJS.`, // Shortened preview
  },
  {
    title: 'Java Developer at HDFC Life',
    duration: 'Jan 2021 - Dec 2022 · 2 years',
    description: `Designed Class diagrams and Collaboration diagrams using UML for system architecture. 
                  Developed front-end web pages using HTML5, CSS3, JavaScript, and jQuery. 
                  Implemented CI/CD pipelines using Jenkins.`,
    shortDescription: `Designed Class diagrams and developed front-end web pages using HTML5 and JavaScript.`, // Shortened preview
  },
];

const Experience = () => {
  // State to track which description is expanded
  const [expanded, setExpanded] = useState(Array(experiences.length).fill(false));

  // Toggle function to expand or collapse the description
  const toggleDescription = (index) => {
    const updatedExpanded = [...expanded];
    updatedExpanded[index] = !updatedExpanded[index]; // Toggle the specific job's description
    setExpanded(updatedExpanded);
  };

  return (
    <div className="experience-container">
      {experiences.map((exp, index) => (
        <div key={index} className="experience">
          <h3>{exp.title}</h3>
          <p><strong>{exp.duration}</strong></p>
          {/* Conditional rendering based on the expanded state */}
          <p>{expanded[index] ? exp.description : exp.shortDescription}</p>
          <div className="experience-buttons">
            <button className="btn" onClick={() => toggleDescription(index)}>
              {expanded[index] ? 'See Less' : 'See More'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
