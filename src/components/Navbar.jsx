import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const handleToggleNavbar = () => {
    setNavbarOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="navbar topnav navbar-expand-lg fixed-top mb-5">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand ms-5 logo">
            Sulav
          </Link>
          <button
            className="navbar-toggler navbarmenu"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleToggleNavbar}
          >
            {isNavbarOpen ? (
              // <span>&#10006;</span> //bold X
              <span style={{ width: "1.5em", height: "1.5em" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </span> //normal X
            ) : (
              <span className="navbar-toggler-icon"></span>
            )}
          </button>
          <div
            className={`collapse navbar-collapse navbaritems ${
              isNavbarOpen ? "show" : ""
            }`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav item me-auto mb-lg-0">
              <li className="nav-item ms-5">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item ms-5">
                <Link to="/events" className="nav-link active">
                  About Me
                </Link>
              </li>
              <li className="nav-item ms-5">
                <Link to="/about" className="nav-link active">
                  Skills
                </Link>
              </li>
              <li className="nav-item ms-5">
                <Link to="/about" className="nav-link active">
                  Projects
                </Link>
              </li>
              <li className="nav-item ms-5">
                <Link to="/about" className="nav-link active">
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav item ms-auto mb-lg-0">
              <li className="nav-item ms-5 mr-5">
                <Link to="/login" className="nav-link active">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* {isNavbarOpen ? <div className="Menuitem"></div> : null} */}
      </nav>
    </>
  );
};

export default Navbar;
