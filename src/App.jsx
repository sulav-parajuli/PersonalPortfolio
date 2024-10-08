import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Import other components
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import ProjectDetail from "./components/ProjectDetail.jsx";
import Footer from "./components/Footer.jsx";
import Error from "./components/Error.jsx";
// Import FontAwesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
//Import projects.json file
import projects from "./data/projects.json"; // Import the JSON file

const App = () => {
  const [showToTopButton, setShowToTopButton] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to show/hide the "to the top" button
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // You can adjust the threshold value as needed
      const showButtonThreshold = 300;

      setShowToTopButton(scrollY > showButtonThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToTopClick = () => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Home />} />
            <Route path="/PersonalPortfolio/projects" element={<Home />} />
            <Route path="/PersonalPortfolio" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/PersonalPortfolio/about" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/PersonalPortfolio/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/PersonalPortfolio/skills" element={<Skills />} />
            <Route
              path="/projects/:id"
              element={<ProjectDetail projects={projects} />}
            />
            <Route
              path="/PersonalPortfolio/projects/:id"
              element={<ProjectDetail projects={projects} />}
            />
            {/* Catch-all other routes for displaying an error page */}
            <Route path="*" element={<Error />} />
          </>
        </Routes>
        {/* "To the Top" button */}
        {showToTopButton && (
          <button className="btn to-top-button" onClick={handleToTopClick}>
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        )}
        <Footer />
      </BrowserRouter>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
