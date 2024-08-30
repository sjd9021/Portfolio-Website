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
                  1+ year
                  <br />
                  Software Development
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                vero fugit quia, earum quasi delectus beatae, perspiciatis omnis
                ducimus vitae error suscipit asperiores! Nesciunt quod eveniet
                laboriosam temporibus, ad iusto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
