import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Navigation.modules.css";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <Link to="/" className="nav-logo">
        Samvit Jatia
      </Link>
      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" className="links" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <a href="#about" className="links" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="links" onClick={toggleMenu}>
              Tech Stack
            </a>
          </li>
          <li>
            <Link to="/projects" className="links" onClick={toggleMenu}>
              Projects
            </Link>
          </li>
          <li>
            <a href="#contact" className="links" onClick={toggleMenu}>
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
