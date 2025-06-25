import React, { useEffect, useState } from 'react';
import './ProjectsSection.css';

function ProjectsSection() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="projects">
      <h2>Our Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.imageUrl} alt={project.name} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <button>Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsSection;
