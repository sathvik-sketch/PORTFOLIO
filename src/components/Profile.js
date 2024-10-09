import React from 'react';
import profileImage from '../images/gradwalk.jpg'; // Ensure this path is correct
import linkedinIcon from '../images/linkedin.png'; // Path to your LinkedIn image
import emailIcon from '../images/email.png'; // Path to your Email image
import githubIcon from '../images/github.png'; // Path to your GitHub image
import './Profile.css'; // Ensure your CSS file exists

const Profile = () => {
  return (
    <div className="profile">
      <img
        src={profileImage}
        alt="Profile"
        className="profile-photo"
      />
      <h2>Ganesh Sathvik Palempati</h2>

      {/* Social Icons */}
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/ganeshsathvik-palempati/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} alt="LinkedIn" className="icon" />
        </a>
        <a
          href="mailto:sathvikganesh2001@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={emailIcon} alt="Email" className="icon" />
        </a>
        <a
          href="https://github.com/sathvik-sketch"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="GitHub" className="icon" />
        </a>
      </div>

      {/* Summary */}
      <div className="summary-container">
        <p className="profile-summary">
          I am a dedicated <span className="highlight">Java Full Stack Developer</span> with around 4 years of experience in building and managing enterprise web applications. My expertise includes cloud platforms like <span className="highlight">AWS and Azure</span>, along with proficiency in frameworks such as <span className="highlight">Spring</span> and <span className="highlight">Hibernate</span>, and front-end technologies like <span className="highlight">AngularJS</span> and <span className="highlight">React.js</span>. I excel in cloud-native development, microservices, and DevOps, with hands-on experience in <span className="highlight">CI/CD</span> and <span className="highlight">Agile methodologies</span>. Currently pursuing a <span className="highlight">Master's in Computer Science</span> at Wichita State University, I’m passionate about delivering scalable, high-quality software solutions. Let's connect to explore potential collaborations!
        </p>
      </div>
    </div>
  );
};

export default Profile;
