import React from "react";
import "../../styles/About.modules.css";

export default function About() {
  return (
    <section className="about" id="about">
      <p
        className="section_text_p1"
        onClick={() =>
          document
            .getElementById("about")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        Get To Know More
      </p>

      <div className="about-content">
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section_pic-container">
            <img src="about-pic (2).png" alt="Profile" className="about-pic" />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img
                  src="./experience.png"
                  alt="Experience icon"
                  className="icon"
                />
                <h3>Experience</h3>
                <p>
                  FullStack + ML developer @ RediMinds
                  <br />
                  Machine Learning Intern @ Zensar Technologies
                  <br />
                  Product Development in Blockchain @ GoodGameNation
                </p>
              </div>
              <div className="details-container">
                <img
                  src="./education.png"
                  alt="Education icon"
                  className="icon"
                />
                <h3>Education</h3>
                <p>
                  PostGraduate Diploma, Advanced Computer Science -<br />
                  Ashoka University
                  <br />
                  B.Sc Bachelors Degree - Ashoka University
                  <br />
                  Concentration - Entrepreneurship & Economics
                </p>
              </div>
            </div>
            <div className="text-container">
              <p>
                Currently working as an AI engineer at RediMinds, Inc., My
                passions lie in the field of Machine Learning, Blockchain, and
                finance. I thrive on creating innovative solutions to real-world
                problems. Driven by the challenge of applying cutting-edge
                technologies to solve complex issues, my focus is on delivering
                impactful, practical applications that creates value for
                businesses and society. Outside of work, you'll probably catch
                me scrambling to put together my FPL team, chilling with a good
                movie, planning my next trip, or hunting down the best food
                spots in town.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
