import React from "react";
import "../../styles/ContactMe.modules.css";

export default function ContactMe() {
  return (
    <section id="contact">
      <p className="section_text_p1">Get in touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img src="./email.png" alt="email" class="icon contact-icon"></img>
          <p>
            <a href="mailto:samvit@hotmail.com">samvit@hotmail.com</a>
          </p>
        </div>
        <div className="contact-info-container">
          <img
            src="./linkedin.png"
            alt="linkedin"
            class="icon contact-icon"
          ></img>
          <p>
            <a href="https://www.linkedin.com/in/samvit-jatia-5816a7206">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
