import React from "react";
import "../../styles/Projects.modules.css";
import ProjectCard from "../projects/ProjectCard";

export default function Projects() {
  const projects = [
    {
      imgSrc: "./project-1.png",
      imgAlt: "Project 1",
      title: "Project One",
      githubLink: "https://github.com/",
      demoLink: "https://github.com/",
    },
    {
      imgSrc: "./project-2.png",
      imgAlt: "Project 2",
      title: "Project two",
      githubLink: "https://github.com/",
      demoLink: "https://github.com/",
    },
    {
      imgSrc: "./project-3.png",
      imgAlt: "Project 3",
      title: "Project three",
      githubLink: "https://github.com/",
      demoLink: "https://github.com/",
    },
  ];

  return (
    <section id="projects">
      <p className="section_text_p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
