import React from "react";
import ProjectPageCard from "../components/projects/ProjectPageCard";
import "../styles/ProjectsPage.modules.css";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Better Communication",
      description: "A remote work tool for improving team communication.",
      imageSrc: "project-1.png",
      githubLink: "https://github.com/your-username/project-one",
      demoLink: "https://project-one-demo.com",
    },
    {
      title: "Better Communication",
      description: "A remote work tool for improving team communication.",
      imageSrc: "project-1.png",
      githubLink: "https://github.com/your-username/project-one",
      demoLink: "https://project-one-demo.com",
    },
    {
      title: "Better Communication",
      description: "A remote work tool for improving team communication.",
      imageSrc: "project-1.png",
      githubLink: "https://github.com/your-username/project-one",
      demoLink: "https://project-one-demo.com",
    },
    {
      title: "Better Communication",
      description: "A remote work tool for improving team communication.",
      imageSrc: "project-1.png",
      githubLink: "https://github.com/your-username/project-one",
      demoLink: "https://project-one-demo.com",
    },
    {
      title: "Better Communication",
      description: "A remote work tool for improving team communication.",
      imageSrc: "project-1.png",
      githubLink: "https://github.com/your-username/project-one",
      demoLink: "https://project-one-demo.com",
    },
    {
      title: "Better Communication",
      description: "A remote work tool for improving team communication.",
      imageSrc: "project-1.png",
      githubLink: "https://github.com/your-username/project-one",
      demoLink: "https://project-one-demo.com",
    },
    {
      title: "Better Communication",
      description: "A remote work tool for improving team communication.",
      imageSrc: "project-1.png",
      githubLink: "https://github.com/your-username/project-one",
      demoLink: "https://project-one-demo.com",
    },

    // Add more projects as needed
  ];

  return (
    <section id="projects" className="projects-page">
      <p className="section_text_p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectPageCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
