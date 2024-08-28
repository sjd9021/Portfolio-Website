import React from "react";

const ProjectCard = ({ imgSrc, imgAlt, title, githubLink, demoLink }) => {
  return (
    <div className="details-container color-container">
      <div className="article-container">
        <img src={imgSrc} alt={imgAlt} className="project-img" />
      </div>
      <h2 className="details-title project-title">{title}</h2>
      <div className="btn-container">
        <button
          className="btn btn-color-2 project-btn"
          onClick={() => (window.location.href = githubLink)}
        >
          Github
        </button>
        <button
          className="btn btn-color-2 project-btn"
          onClick={() => (window.location.href = demoLink)}
        >
          Live Demo
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
