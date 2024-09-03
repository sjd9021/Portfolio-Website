import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Projects.modules.css";
import ProjectPageCard from "../projects/ProjectPageCard";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Attention Transformer",
      description:
        "Deep learning transformer built and trained from scratch using PyTorch to learn and generate new shakespeare like text",
      imageSrc: "capstone.png",
      githubLink: "https://github.com/sjd9021/Attention-Transformer",
      demoLink: "https://project-one-demo.com",
      type: "View Paper",
    },
    {
      title: "AshokaCoin",
      description:
        "Cryptocurrency built on the Ethereum network, designed to simulate an Initial Coin Offering (ICO). Coded in Solidity.",
      imageSrc: "project-13.png",
      githubLink: "https://github.com/sjd9021/AshokaCoin",
      demoLink: "https://project-one-demo.com",
      type: "Live Demo",
    },
    {
      title: "Clipaha",
      description:
        "Client side hashing algorithm for IOT devices to offload server's computational costs",
      imageSrc: "clipaha-img.png",
      githubLink: "https://github.com/sjd9021/Clipaha-hashing",
      demoLink: "clipaha.pdf",
      type: "View Paper",
    },
  ];

  return (
    <section id="projects">
      <p className="section_text_p1">Browse My</p>
      <div className="title-container">
        <h1 className="title">Top Projects</h1>
        <Link to="/projects" className="view-all-arrow">
          <ArrowRight size={30} />
        </Link>
      </div>
      <div className="experience-details-container">
        <div className="about-containers">
          {projects.map((project, index) => (
            <ProjectPageCard key={index} {...project} />
          ))}
        </div>
      </div>
      <Link to="/projects" className="view-all-link">
        <a>View All Projects</a>
      </Link>
    </section>
  );
}
