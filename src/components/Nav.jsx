import React, { useState } from 'react';
import './Nav.css';

const Nav = () => {
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <button onClick={() => scrollToSection('home')} className="nav-logo">
          <span className="logo-text">Ruchi Chawla</span>
        </button>
        <ul className="nav-menu">
          <li className="nav-item">
            <button onClick={() => scrollToSection('home')} className="nav-link">
              Home
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('about')} className="nav-link">
              About
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('acedamics')} className="nav-link">
              Publications
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('research')} className="nav-link">
              Research
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav; 