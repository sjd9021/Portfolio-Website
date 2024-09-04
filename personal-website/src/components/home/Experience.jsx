import React from "react";
import "../../styles/Experience.modules.css";
const SkillCard = ({ title, level }) => (
  <div className="skill-card">
    <div className="skill-icon">✓</div>
    <div className="skill-info">
      <h3 className="skill-title">{title}</h3>
      <p className="skill-level">{level}</p>
    </div>
  </div>
);

const SkillSection = ({ title, skills }) => (
  <div className="skill-section">
    <h2 className="section-title">{title}</h2>
    <div className="skills-grid">
      {skills.map((skill, index) => (
        <SkillCard key={index} title={skill.title} level={skill.level} />
      ))}
    </div>
  </div>
);

const Experience = () => {
  const frontendSkills = [
    { title: "HTML", level: "Intermediate" },
    { title: "CSS", level: "Intermediate" },
    { title: "JavaScript", level: "Intermediate" },
    { title: "React", level: "Intermediate" },
    { title: "EJS", level: "Intermediate" },
  ];

  const backendSkills = [
    { title: "Node.js", level: "Intermediate" },
    { title: "Express", level: "Intermediate" },
    { title: "PostgreSQL", level: "Intermediate" },
    { title: "SQL", level: "Intermediate" },
    { title: "Axios", level: "Intermediate" },
    { title: "Flask", level: "Intermediate" },
    { title: "TypeScript", level: "Intermediate" },
    { title: "Solidity", level: "Intermediate" },
  ];

  const machineLearningSkills = [
    { title: "Python", level: "Experienced" },
    { title: "TensorFlow", level: "Intermediate" },
    { title: "PyTorch", level: "Beginner" },
    { title: "Scikit-learn", level: "Beginner" },
    { title: "LLaMa", level: "Experienced" },
    { title: "HuggingFace", level: "Experienced" },
    { title: "NER", level: "Beginner" },
    { title: "SpaCy", level: "Intermediate" },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h1 className="main-title">Tech Stack</h1>
        <p className="subtitle">Explore My Skills</p>
        <div className="skills-container">
          <SkillSection
            title="Machine Learning"
            skills={machineLearningSkills}
          />
          <SkillSection title="Backend Development" skills={backendSkills} />
          <SkillSection title="Frontend Development" skills={frontendSkills} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
