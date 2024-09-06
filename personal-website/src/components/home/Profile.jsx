import React from "react";
import "../../styles/Profile.modules.css";

export default function Profile() {
  return (
    <section className="profile">
      <div className="profile-grid"></div>
      <div className="section_pic-container">
        <img
          className="profile-pic"
          src="profile-pic.jpeg"
          alt="Samvit profile"
        />
      </div>
      <div className="section_text">
        <p className="section_text_p1">Hello, I'm</p>
        <h1 className="title animated-title">Samvit Jatia</h1>
        <p className="section_text_p2">Software Developer</p>
        <div className="btn-container">
          {/* Download CV Button */}
          <button
            className="btn btn-color-2"
            onClick={() => window.open("resume-example.pdf", "_blank")}
          >
            Download CV
          </button>

          {/* Contact Info Button */}
          {/* Contact Info Button */}
          <a href="#contact">
            <button className="btn btn-color-1">Contact Info</button>
          </a>
        </div>

        <div id="socials-container">
          {/* LinkedIn Profile */}
          <img
            src="linkedin.png"
            alt="My LinkedIn profile"
            className="icon"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/samvit-jatia-5816a7206/",
                "_blank"
              )
            }
          />

          {/* GitHub Profile */}
          <img
            src="github.png"
            alt="My GitHub profile"
            className="icon"
            onClick={() => window.open("https://github.com/sjd9021", "_blank")}
          />
        </div>
      </div>
    </section>
  );
}
