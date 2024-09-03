import React from "react";
import ProjectPageCard from "../components/projects/ProjectPageCard";
import "../styles/ProjectsPage.modules.css";

const ProjectsPage = () => {
  const projects = [
    {
      title: "AshokaCoin",
      description:
        "Cryptocurrency built on the Ethereum network, designed to simulate an Initial Coin Offering (ICO). Coded in Solidity.",
      imageSrc: "project-13.png",
      githubLink: "https://github.com/sjd9021/AshokaCoin",
      demoLink: "https://ashokacoin.netlify.app/",
      type: "Live Demo",
    },
    {
      title: "ProtienBert",
      description:
        "Transformer model to predict influenza protein sequences, aiding vaccine and antiviral research.",
      imageSrc: "ProtienBert.png",
      githubLink: "https://github.com/sjd9021/ProtienBert",
      demoLink: "samvit_jatia_ISM_report.pdf",
      type: "View Paper",
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
    {
      title: "Attention Transformer",
      description:
        "Deep learning transformer built and trained from scratch to learn and generate new shakespeare like text",
      imageSrc: "capstone.png",
      githubLink: "https://github.com/sjd9021/Attention-Transformer",
      demoLink: "Attention.pdf",
      type: "View Paper",
    },
    {
      title: "Minesweeper AI",
      description:
        "Minesweeper game with an AI player making logical deductions using Minimax algorithm",
      imageSrc: "Minesweeper.png",
      githubLink: "https://github.com/sjd9021/Minesweeper-auto",
      demoLink: "https://github.com/sjd9021/Minesweeper-auto",
      type: "Live Demo",
    },
    {
      title: "Crypto Arbitrage Bot",
      description:
        "Trading bot to exploit price differences in the stablecoin prices amongst Indian crypto exchanges",
      imageSrc: "arb.png",
      githubLink: "https://github.com/sjd9021/Crypto-Arbitrage",
      demoLink: "https://github.com/sjd9021/Crypto-Arbitrage",
      type: "Live Demo",
    },
    {
      title: "PicQuery",
      description:
        "AI image parser which allows user to search and query images using descriptions and prompts.",
      imageSrc: "pic.png",
      githubLink: "https://github.com/sjd9021/PicQuery",
      demoLink: "https://github.com/sjd9021/PicQuery",
      type: "Live Demo",
    },
    {
      title: "Personality Classifier",
      description:
        "Bert Models trained to aid IPL marketting teams for either classifying a tweets sentiment or getting the overall sentiment of an IPL player based on the public perception.",
      imageSrc: "classifier.png",
      githubLink: "https://github.com/your-username/project-one",
      demoLink: "https://project-one-demo.com",
      type: "View Paper",
    },
    {
      title: "Translation App",
      description:
        "Encoder-Decoder ML model built and trained from scratch to translate English to Spanish",
      imageSrc: "encoder-decoder.png",
      githubLink: "https://github.com/sjd9021/Spanish-Translator",
      demoLink: "https://github.com/sjd9021/Spanish-Translator",
      type: "Live Demo",
    },
    {
      title: "Hotel Booking Website",
      description:
        "Fullstack project for booking hotels and managing reservations.",
      imageSrc: "project-1.png",
      githubLink: "https://github.com/sjd9021/HotelBookings",
      demoLink: "",
      type: "Live Demo",
    },
    {
      title: "E-Commerce Website",
      description:
        "Mock E-commerce website built as a part of a final project for CS-531 under Prof. Anirban Mondal",
      imageSrc: "e-commerce.png",
      githubLink: "https://github.com/sjd9021/HotelBookings",
      demoLink: "",
      type: "Live Demo",
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
