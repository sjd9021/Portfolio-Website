import React from "react";
import "../../styles/Experience.modules.css";
import ArticleCard from "./ArticleCard";

export default function Experience() {
  const frontendSkills = [
    { title: "HTML", level: "Intermediate", iconSrc: "./checkmark.png" },
    { title: "CSS", level: "Intermediate", iconSrc: "./checkmark.png" },
    { title: "JavaScript", level: "Intermediate", iconSrc: "./checkmark.png" },
    { title: "React", level: "Intermediate", iconSrc: "./checkmark.png" },
    { title: "EJS", level: "Intermediate", iconSrc: "./checkmark.png" },
    // Add more skills as needed
  ];

  const backendSkills = [
    { title: "Node.js", level: "Intermediate", iconSrc: "./checkmark.png" },
    { title: "Express", level: "Intermediate", iconSrc: "./checkmark.png" },
    { title: "PostgreSql", level: "Intermediate", iconSrc: "./checkmark.png" },
    { title: "SQL", level: "Intermediate", iconSrc: "./checkmark.png" },
    { title: "Axios", level: "Intermediate", iconSrc: "./checkmark.png" },
    { title: "Flask", level: "Intermediate", iconSrc: "./checkmark.png" },
    { title: "Typescript", level: "Intermediate", iconSrc: "./checkmark.png" },

    // Add more skills as needed
  ];

  const machineLearning = [
    { title: "Python", level: "Experienced", iconSrc: "./checkmark.png" },
    { title: "Tensorflow", level: "Intermediate", iconSrc: "./checkmark.png" },
    { title: "Pytorch", level: "Beginner", iconSrc: "./checkmark.png" },
    {
      title: "Scikit-learn",
      level: "Beginner",
      iconSrc: "./checkmark.png",
    },
    { title: "LLaMa", level: "Experienced", iconSrc: "./checkmark.png" },
    { title: "HuggingFace", level: "Experienced", iconSrc: "./checkmark.png" },
    // Add more
  ];
  return (
    <section className="experience" id="experience">
      <p className="section_text_p1">Explore My</p>
      <h1 className="title">Tech Stack</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="details-title">Frontend Development</h2>
            <div className="article-container">
              {frontendSkills.map((skill, index) => (
                <ArticleCard
                  key={index}
                  iconSrc={skill.iconSrc}
                  title={skill.title}
                  level={skill.level}
                />
              ))}
            </div>
          </div>
          <div className="details-container">
            <h2 className="details-title">Backend Development</h2>
            <div className="article-container">
              {backendSkills.map((skill, index) => (
                <ArticleCard
                  key={index}
                  iconSrc={skill.iconSrc}
                  title={skill.title}
                  level={skill.level}
                />
              ))}
            </div>
          </div>
          <div className="details-container">
            <h2 className="details-title">Machine Learning</h2>
            <div className="article-container">
              {machineLearning.map((skill, index) => (
                <ArticleCard
                  key={index}
                  iconSrc={skill.iconSrc}
                  title={skill.title}
                  level={skill.level}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
