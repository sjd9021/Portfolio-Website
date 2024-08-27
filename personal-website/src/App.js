import "./App.css";
import React from "react";
import Navigation from "./components/Navigation";
import Profile from "./components/Profile";
import About from "./components/About";
import Experience from "./components/Experience";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Profile />
        <About />
        <Experience />
      </div>
    </Router>
  );
}

export default App;
