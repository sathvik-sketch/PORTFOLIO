import React, { useState } from 'react';

const educationData = [
  {
    school: 'Wichita State University',
    degree: 'Master of Computer Applications - MCA, Computer Science',
    duration: 'Jan 2023 - May 2024',
    grade: 'Grade: 3.6',
    shortSkills: 'Spring Boot, Data Science and +17 skills',
    fullSkills: ['Spring Boot', 'Data Science', 'Python', 'Java', 'React', 'Docker', 'Kubernetes', 'Microservices', 'AWS', 'Machine Learning', 'SQL', 'NoSQL Databases', 'REST APIs', 'Agile Methodologies', 'CI/CD', 'Git', 'Jenkins'],
  },
  {
    school: 'Amrita Vishwa Vidyapeetham',
    degree: 'Bachelor of Technology - BTech, Computer Science',
    duration: '2018 - 2022',
    grade: null,
    shortSkills: 'Spring Boot, Data Science and +8 skills',
    fullSkills: ['Spring Boot', 'Data Science', 'Java', 'Python', 'HTML', 'CSS', 'JavaScript', 'SQL'],
  },
];

const Education = () => {
  const [expanded, setExpanded] = useState(Array(educationData.length).fill(false));

  // Toggle function to expand or collapse the skills section
  const toggleSkills = (index) => {
    const updatedExpanded = [...expanded];
    updatedExpanded[index] = !updatedExpanded[index]; // Toggle specific education item
    setExpanded(updatedExpanded);
  };

  return (
    <div className="education-container">
      <h2>Education</h2>
      {educationData.map((edu, index) => (
        <div key={index} className="education-item">
          <h3>{edu.school}</h3>
          <p><strong>{edu.degree}</strong></p>
          <p>{edu.duration}</p>
          {edu.grade && <p>{edu.grade}</p>}
          
          {/* Show full skills list when expanded */}
          <p className="key-skills">
            <strong>Key Skills: </strong>
            {expanded[index] ? (
              <>
                {edu.fullSkills.join(', ')}
                <button className="btn" onClick={() => toggleSkills(index)}>See Less</button>
              </>
            ) : (
              <>
                {edu.shortSkills}
                <button className="btn" onClick={() => toggleSkills(index)}>See More</button>
              </>
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Education;
