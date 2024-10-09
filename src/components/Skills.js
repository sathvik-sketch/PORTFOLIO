import React from 'react';
import './Skills.css'; // This should be the correct path to your custom CSS

const Skills = () => {
  return (
    <div className="skills-section">
      <h2>Skills</h2>
      <ul className="skills-list">
        <li><strong>Programming Languages:</strong> Java, J2EE, PL/SQL, Python, C, C++, .NET, ASP.NET, C#, Power BI, Salesforce, SAP, Swift</li>
        <li><strong>Cloud Services:</strong> Amazon Web Services (AWS), Azure, GCP</li>
        <li><strong>Scripting Languages:</strong> XML, XHTML, HTML, CSS, JavaScript, AJAX, jQuery, JSON, Angular, Bootstrap, Node.js, React.js, TypeScript</li>
        <li><strong>Frameworks:</strong> Struts, Spring, JSF, JPA, EJB, Hibernate, JMS</li>
        <li><strong>Web Services:</strong> SOAP, UDDI, WSDL, JAX-RS, JAX-WS, RESTful, AWS Microservices</li>
        <li><strong>Databases:</strong> Oracle, MySQL, PostgreSQL, DB2, MongoDB, Cassandra</li>
        <li><strong>DevOps and CI/CD:</strong> Docker, Kubernetes, Jenkins, Git, GitHub, GitLab, Bitbucket</li>
        <li><strong>Version Control:</strong> Git, Tortoise SVN, CVS, Bamboo</li>
        <li><strong>Tools:</strong> Junit, Selenium Web Driver, TestNG, Protractor, Mockito</li>
        <li><strong>Debugging Tools:</strong> JIRA, Jenkins, CHEFF</li>
        <li><strong>IDE Tools:</strong> Eclipse, NetBeans, IntelliJ, IBM RAD, Maven, STS, Visual Studio</li>
        <li><strong>Application Development:</strong> Agile Methodologies (Scrum, Kanban), Test-Driven Development (TDD), Behavior-Driven Development (BDD)</li>
        <li><strong>Web/App/DB Servers:</strong> IBM WebSphere, WebLogic, Apache Tomcat, JBoss</li>
      </ul>
    </div>
  );
};

export default Skills;
