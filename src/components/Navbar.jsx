import React from 'react';
import './Navbar.css';
import { FaSun, FaMoon } from 'react-icons/fa';

function Navbar({ darkMode, setDarkMode }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
        <div className="logo" onClick={() => scrollTo('home')}>
            &lt;Cheikh Lo/&gt;
        </div>
      <ul>
        <li><a href="#home" onClick={() => scrollTo('home')}>Home</a></li>
        <li><a href="#about" onClick={() => scrollTo('about')}>About</a></li>
        <li><a href="#projects" onClick={() => scrollTo('projects')}>Projects</a></li>
        <li><a href="#contact" onClick={() => scrollTo('contact')}>Contact</a></li>
      </ul>
      <div className="toggle-mode" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </div>
    </nav>
  );
}

export default Navbar;