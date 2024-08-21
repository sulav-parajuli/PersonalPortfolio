import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import sulav from "../assets/images/profile/sulav.png";

const Hero = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typingRef.current, {
      strings: ["Developer", "Designer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container-fluid hcontainer">
        <div className="row hero-container">
          <div className="col-md-6 text-container">
            <div className="text-block">
              <p className="mb-0 sub-text">Sulav Parajuli</p>
              <h1 className="main main-text">
                Graphic Designer and Web <br />
                <span ref={typingRef} />
              </h1>
              <p className="sub-text">
                I'm a web developer with expertise in front-end techniques,
                graphic and UI design, backend development, and creating
                visually appealing interfaces. I’m passionate about expanding my
                skills and making impactful contributions to technology.
              </p>
            </div>
            <div className="buttons">
              <Link
                to="project"
                smooth={true}
                duration={500}
                className="main-button  no-smooth-scroll"
              >
                View Projects
              </Link>
              <a
                href={`${
                  process.env.NODE_ENV === "production"
                    ? "/PersonalPortfolio"
                    : ""
                }/about`}
                className="sub-button"
              >
                Read About Me
              </a>
            </div>
          </div>
          <div className="col-md-6 image-container">
            <img src={sulav} className="main-image" alt="Sulav" title="Sulav" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
