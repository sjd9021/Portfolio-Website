import React from "react";
import "../../styles/ProjectPageCard.modules.css";

const ProjectPageCard = ({
  title,
  description,
  imageSrc,
  githubLink,
  demoLink,
}) => {
  return (
    <div className="color-container project-page-card">
      <div className="article-container">
        <img
          src={imageSrc}
          alt={title}
          className="project-img project-page-img"
        />
      </div>
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="btn-container">
        <img
          src="github.png"
          alt="My Project code"
          className="icon"
          onClick={() => window.open(githubLink, "_blank")}
        ></img>
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="project-page-button"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectPageCard;
