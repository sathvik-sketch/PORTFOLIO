// src/components/Projects.js
import React from 'react';
import './App.css'; // Make sure this path is correct

function Projects() {
  return (
    <div className="projects-section">
      <h2 className="project-title">Projects</h2>

      {/* Project 1 */}
      <div className="project">
        <h3 className="project-subtitle">Research Assistant</h3>
        <p className="project-date-location">Aug 2020 – Dec 2020 | Amrita, Bengaluru, India</p>
        <p className="project-details">
          I worked as a Research Assistant for the project "RESNET-50, CNN and HNN Medical Image
          Registration Techniques for Covid-19, Pneumonia, and Other Chest Ailments Detection."
        </p>
        <ul className="project-list">
          <li>Compared patient input images to chest or lung x-ray images trained by Machine Learning algorithms.</li>
          <li>Worked on a proposed model combining a Hybrid Neural Network and CNN.</li>
          <li>Published a paper at the 13th International Conference on Computing Communication and Networking Technologies (ICCCNT).</li>
        </ul>
      </div>

      {/* Project 2 */}
      <div className="project">
        <h3 className="project-subtitle">Predicting Medical Appointments – Machine Learning</h3>
        <p className="project-date-location">Mar 2019 – Jul 2019</p>
        <ul className="project-list">
          <li>Tools and Languages: Python, Scikit-Learn, Pandas, NumPy, Matplotlib, Jupyter Notebook.</li>
          <li>Predicted attendance of patients who booked appointments in a hospital or healthcare setting.</li>
          <li>Predicted the number of absentees for the day's appointments.</li>
          <li>Helped reduce financial loss and minimize waiting times by predicting absentees.</li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
