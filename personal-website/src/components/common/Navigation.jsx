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
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/#about" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/#experience" onClick={toggleMenu}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={toggleMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/#contact" onClick={toggleMenu}>
              Contact
            </Link>
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
