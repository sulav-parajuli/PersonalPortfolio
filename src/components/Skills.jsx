import React from "react";
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

const Skills = () => {
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

  const experiences = [
    {
      company: "MacIT Hub",
      role: "Graphic Designer and Social Media Handler",
      duration: "Oct 2023 - Aug 2024",
      details: [
        "Created graphics designs and managed social media pages.",
        "Managing and sharing Information using visuals within the club and campus by posting news, decisions, and related club activities.",
        "Worked as an executive and managed the club."
      ]
    },
    {
      company: "Pine Softwares Pvt. Ltd.",
      role: "Intern",
      duration: "April 2024 - Jun 2024",
      details: [
        `Worked in a tours and travels project named “Step by Step Treks".`,
        "Learned Laravel programming and collaborated with highly skilled developers.",
        "Learned to worked with highly skilled developers and enthusiast.",
        "Learned Laravel programming under the mentorship of Aashish Parajuli."
      ]
    },
    {
      company: "EthTix- Decentralized Event Ticketing System",
      role: "Frontend Developer",
      duration: "Feb 2024 - April 2024",
      details: [
        "Created the initial prototype using figma for the project and developed similar frontend interfaces, making them more visually appealing.",
        "Developed and managed dynamic and visually appealing frontend designs using React.js, Node.js, and Ether.js.",
        "Assisted project partners with documentation and Solidity programming.",
        "Enhanced problem-solving skills and deepened understanding of blockchain technology and React.js."
      ]
    }
    // Add more experiences similarly
  ];

  return (
    <div className="container-fluid scontainer pb-5 reveal">
      <div className="row justify-content-center mx-auto">
        <div className="col-md-10">
          <p id="section-text">
            <b>MY SKILLS AND EXPERIENCE</b>
          </p>
        </div>
        <div className="col-md-10">
          <h1 className="mb-4 main-text">Skills</h1>
          <div
            id="skillsCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {skillSets.map((skillSet, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={index}
                >
                  <div className="skills text-center">
                    <div className="row justify-content-center align-items-center">
                      {skillSet.map((skill, i) => (
                        <div className="col-6 col-md-2 mb-3" key={i}>
                          <img
                            src={skill.src}
                            alt={skill.alt}
                            title={skill.title}
                            className="img-fluid"
                          />
                          <p className="mt-2">{skill.title}</p>
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
          <div className="col-lg-12">
            <p className="text-center mt-3">
              <small>
                <i>
                  *These are some of the skills I have. I am always learning new
                  things and expanding my knowledge.
                </i>
              </small>
            </p>
            <p>Some of the other skills that i can work well with are:.</p>
            <p>
              <ol>
                <li>Graphic Designing</li>
                <li>Video Editing</li>
                <li>UI/UX</li>
                <li>API | Manual Testing </li>
                <li>SEO</li>
              </ol>
            </p>
          </div>
        </div>
      </div>

      <div className="row justify-content-center mt-5">
        <div className="col-md-10">
          <h3 className="main-text mb-4">Experience</h3>
          {experiences.map((exp, index) => (
            <div className="mb-4" key={index}>
              <h4>
                {exp.role} at {exp.company}
              </h4>
              <p>
                <strong>Duration:</strong> {exp.duration}
              </p>
              <ul>
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
