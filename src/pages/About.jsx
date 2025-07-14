import React from "react";
import "./About.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
      <section className="about-container" id="about">
        <h2>À propos</h2>

        <div className="about-content">
          <div className="about-image">
            <img
                src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
                alt="avatar"
            />
          </div>

          <div className="about-text">
            <p>
              Je suis Cheikh Lo, développeur front-end junior avec une solide base technique et une vraie passion pour le clean code.
              Je conçois des interfaces modernes, responsives et bien architecturées, avec une attention particulière à l’expérience utilisateur.
            </p>

            <p>
              Je travaille principalement avec React.js et du CSS pur pour construire des interfaces efficaces et esthétiques.
              J’ai également des compétences back-end solides avec Java, PHP, C#, et MySQL, ce qui me permet de comprendre toute la chaîne de développement d’un projet.
            </p>

            <h3>🛠️ Stack technique</h3>
            <ul className="skills-list">
              <li>React.js, JavaScript ES6+</li>
              <li>CSS pur, animations, responsive design</li>
              <li>Java, PHP, C#</li>
              <li>MySQL, gestion de base de données</li>
              <li>Git, GitHub, clean code & bonnes pratiques</li>
            </ul>

            <div className="about-links">
              <a href="/cv_cheikh_lo.pdf" download className="cv-btn">
                📄 Télécharger mon CV
              </a>
              <a
                  href="https://github.com/cheikhlo17"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                <FaGithub className="icon" />
              </a>
              <a
                  href="https://linkedin.com/in/cheikhlo17"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                <FaLinkedin className="icon" />
              </a>
            </div>
          </div>
        </div>
      </section>
  );
};

export default About;
