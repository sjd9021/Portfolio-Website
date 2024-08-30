import React from "react";
import Profile from "../components/home/Profile";
import About from "../components/home/About";
import Experience from "../components/home/Experience";
import Projects from "../components/home/Projects";
import ContactMe from "../components/home/ContactMe";

const HomePage = () => {
  return (
    <div className="home-page">
      <Profile />
      <About />
      <Experience />
      <Projects />
      <ContactMe />
    </div>
  );
};

export default HomePage;
