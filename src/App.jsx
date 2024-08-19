import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./components/AppContext.jsx"; // Import AppProvider
//Import other components
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
// Import FontAwesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

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
        <AppProvider>
          <Navbar />
          <Routes>
            <>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/contact" element={<Contact />} />
            </>
          </Routes>
          {/* "To the Top" button */}
          {showToTopButton && (
            <button className="btn to-top-button" onClick={handleToTopClick}>
              <FontAwesomeIcon icon={faArrowUp} />
            </button>
          )}
          <Footer />
        </AppProvider>
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
