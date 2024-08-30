import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/common/Navigation";
import Footer from "./components/common/Footer";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
// import ContactPage from "./pages/ContactPage";
// import "./styles/global.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          {/* <Route path="/contact" element={<ContactPage />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
