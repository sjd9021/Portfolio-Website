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
        <img src={imageSrc} alt={title} className="project-img" />
      </div>
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <div className="btn-container">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-color-2"
        >
          GitHub
        </a>
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-color-2"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectPageCard;
