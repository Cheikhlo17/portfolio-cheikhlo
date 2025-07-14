import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "My Portfolio",
    description: "A responsive single-page application built with React and pure CSS.",
    tech: ["React", "CSS", "EmailJS"],
    github: "https://github.com/tonprofil/my-portfolio",
  },
  {
    title: "Todo App",
    description: "Simple and elegant task manager with localStorage support.",
    tech: ["React", "JS", "CSS"],
    github: "https://github.com/tonprofil/todo-app",
  },
  {
    title: "Weather Finder",
    description: "App that fetches real-time weather data using OpenWeatherMap API.",
    tech: ["React", "API", "CSS"],
    github: "https://github.com/tonprofil/weather-app",
  },
];

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div className="project-card fade-in" key={index}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="tech-list">
              {proj.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
            <a href={proj.github} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
