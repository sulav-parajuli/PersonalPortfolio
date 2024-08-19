import sulav from "../assets/images/profile/sulav1.png";
import { Link } from "react-router-dom";
import CV from "../assets/other/Sulav_CV.pdf";
import html from "../assets/images/skills/html.png";
import css from "../assets/images/skills/css.png";
import js from "../assets/images/skills/js.png";
import bootstrap from "../assets/images/skills/bootstrap.png";
import jquery from "../assets/images/skills/jquery.png";
import mysql from "../assets/images/skills/mysql.png";
import laravel from "../assets/images/skills/laravel.png";
import java from "../assets/images/skills/java.png";
import nodejs from "../assets/images/skills/nodejs.png";
import wordpress from "../assets/images/skills/wordpress.png";
import php from "../assets/images/skills/php.png";
import react from "../assets/images/skills/react.png";
import etherjs from "../assets/images/skills/etherjs.png";
import solidity from "../assets/images/skills/solidity.png";
import manymore from "../assets/images/skills/andmanymore.png";

const AboutMe = () => {
  const skillSets = [
    [
      { src: html, alt: "HTML", title: "HTML" },
      { src: css, alt: "CSS", title: "CSS" },
      {
        src: js,
        alt: "JavaScript",
        title: "JavaScript"
      },
      {
        src: bootstrap,
        alt: "Bootstrap",
        title: "Bootstrap"
      },
      { src: jquery, alt: "JQuery", title: "JQuery" }
    ],
    [
      { src: mysql, alt: "MySQL", title: "MySQL" },
      {
        src: laravel,
        alt: "Laravel",
        title: "Laravel"
      },
      { src: java, alt: "Java", title: "Java" },
      {
        src: nodejs,
        alt: "Node.js",
        title: "Node.js"
      },
      {
        src: wordpress,
        alt: "WordPress",
        title: "WordPress"
      }
    ],
    [
      { src: php, alt: "PHP", title: "PHP" },
      { src: react, alt: "React", title: "React" },
      {
        src: etherjs,
        alt: "Ether.js",
        title: "Ether.js"
      },
      {
        src: solidity,
        alt: "Solidity",
        title: "Solidity"
      },
      {
        src: manymore,
        alt: "Many More",
        title: "Many More"
      }
    ]
  ];

  return (
    <div className="container-fluid acontainer pb-5">
      <div id="about" className="reveal about-container">
        <div id="profile-img">
          <img id="main-img" src={sulav} alt="Profile Image" />
          <div className="circle"></div>
        </div>
        <div className="col-md-6 mt-3 pr-2" id="profile-des">
          <p id="section-text">
            <b>ABOUT</b>
          </p>
          <h1
            className="main-text"
            id="bottom-gap"
            style={{ paddingLeft: "0px" }}
          >
            About Me
          </h1>
          <h2 id="bottom-gap">Sulav Parajuli</h2>
          <p style={{ color: "#777" }}>Developer</p>
          <p>
            Hi! I am a web developer and programmer with expertise in front-end
            techniques, UI design, and creating visually appealing and
            user-friendly interfaces. I have a strong track record in developing
            web pages, web-based applications, and mobile applications. I
            recently completed my Bachelor of Science in Computer Science and
            Information Technology at Tribhuvan University, studying at Mount
            Annapurna Campus in Pokhara. I also have experience in web and
            graphic design. I am committed to expanding my skills and
            contributing to the world of technology.
          </p>
          <div className="buttons">
            <Link className="main-button" to="/contact">
              Hire Me
            </Link>
            <a href={CV} download className=" sub-button">
              My Resume
            </a>
          </div>
        </div>
      </div>

      <div id="about_details" className="reveal about-container">
        <div id="details">
          <h2 id="bottom-gap">Details</h2>
          <p>Here is some details about me:</p>
          {/* <h3 id="bottom-gap">
            <i className="fa-solid fa-cake-candles"></i>Birthday:
          </h3>
          5th April, 2001 */}
          <h3>
            <i className="fas fa-envelope mt-0 fa-1x"></i>Email:
          </h3>
          sulavparajuli82@gmail.com
          <h3>
            <i className="fas fa-phone mt-0 fa-1x"></i>Phone:
          </h3>
          +9779816106956
          {/* <h3><i className="fa-solid fa-user"></i>Age:</h3>
          22 years old */}
          <h3>
            <i className="fas fa-map-marker-alt fa-1x"></i>Location:
          </h3>
          Pokhara, Nepal
        </div>
        <div id="skills" className="col-md-6 mt-3 pr-2">
          <h2 id="bottom-gap">Skills</h2>
          <p id="bottom-gap">
            I have a wide range of skills and ideas that I am eager to share
            with the new generation. My goal is to create something impactful
            that will leave a lasting impression on the world.
          </p>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div
                  id="skillsCarousel"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    {skillSets.map((skillSet, index) => (
                      <div
                        className={`carousel-item ${
                          index === 0 ? "active" : ""
                        }`}
                        key={index}
                      >
                        <div className="skills text-center">
                          <div className="row justify-content-center align-items-center">
                            {skillSet.map((skill, i) => (
                              <div className="col-md-2" key={i}>
                                <img
                                  src={skill.src}
                                  alt={skill.alt}
                                  title={skill.title}
                                  className="img-fluid"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#skillsCarousel"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#skillsCarousel"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div className="col-lg-12">
                <p className="text-center mt-3">
                  <small>
                    <i>
                      *These are some of the skills I have. I am always learning
                      new things and expanding my knowledge.
                    </i>
                  </small>
                </p>
                <p>Some of the other skills that i can work well with are:.</p>
                <p>
                  <ol>
                    <li>Graphic Designing</li>
                    <li>Video Editing</li>
                    <li>UI/UX</li>
                    <li>SEO etc.</li>
                  </ol>
                </p>
                <Link className="main-button">My Skills and Experience</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
