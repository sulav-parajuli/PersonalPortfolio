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
            className={`hamburger-toggler hamburger hamburger--spin ${
              isNavbarOpen ? "is-active" : ""
            }`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={isNavbarOpen}
            aria-label="Toggle navigation"
            onClick={handleToggleNavbar}
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
          <div
            className={`collapse navbar-collapse navbaritems ${
              isNavbarOpen ? "show" : ""
            }`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav item me-auto mb-lg-0">
              {/* <li className="nav-item ms-5">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li> */}
              <li className="nav-item ms-5">
                <a href="/#project" className="nav-link active">
                  Projects
                </a>
              </li>
              <li className="nav-item ms-5">
                <Link to="/about" className="nav-link active">
                  About Me
                </Link>
              </li>
              <li className="nav-item ms-5">
                <Link to="/skills" className="nav-link active">
                  Skills
                </Link>
              </li>
              <li className="nav-item ms-5">
                <Link to="/contact" className="nav-link active">
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav item ms-auto mb-lg-0">
              <li className="nav-item ms-5 mr-5">
                <Link to="" className="nav-link active">
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
