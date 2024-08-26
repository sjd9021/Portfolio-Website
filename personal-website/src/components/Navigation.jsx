import React from "react";
import "./Navigation.modules.css";

export default function Navigation() {
  return (
    <nav id="desktop-nav">
      <div className="nav-logo">Samvit Jatia</div>
      <div>
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
