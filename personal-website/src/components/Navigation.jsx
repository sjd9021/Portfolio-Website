import React, { useState } from "react";
import "./Navigation.modules.css";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="nav-logo">Samvit Jatia</div>
      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#about" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#experience" onClick={toggleMenu}>
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggleMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}
