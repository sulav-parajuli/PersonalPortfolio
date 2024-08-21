import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import projectsData from "../data/projects.json";
//import components
import ProjectDetail from "./ProjectDetail";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [otherProjects, setOtherProjects] = useState([]);

  const getImagePath = (filePath) => {
    try {
      const basePath = import.meta.env.BASE_URL;

      // Construct the full path
      let fullPath = `${basePath}${filePath}`;

      // Ensure GitHub Pages compatibility by adding "/PersonalPortfolio" if necessary
      if (!fullPath.includes("/PersonalPortfolio")) {
        fullPath = "/PersonalPortfolio" + fullPath;
      }

      // Return the correct path
      return new URL(`${fullPath}`, import.meta.url).href;
    } catch (error) {
      console.error("Error loading image:", error);
      return null;
    }
  };

  useEffect(() => {
    // Define the IDs for the selected projects
    const selectedProjectIds = ["a", "b", "c", "d", "e", "j"];

    // Filter projects based on whether their ID is in the selectedProjectIds array
    const selected = projectsData.filter((project) =>
      selectedProjectIds.includes(project.id)
    );
    const other = projectsData.filter(
      (project) => !selectedProjectIds.includes(project.id)
    );

    setSelectedProjects(selected);
    setOtherProjects(other);
  }, []);

  return (
    <>
      <div className="container-fluid project-container">
        <div id="project" className="reveal">
          <p id="section-text">
            <b>SELECTED PROJECTS</b>
          </p>
          <h1 id="bottom-gap" className="main-text">
            See my works
          </h1>

          {selectedProjects.map((item) => (
            <article
              key={item.id}
              className={`postcard blue text-black project-item ${item.filter}`}
              data-filter={`.${item.filter}`}
            >
              <a className="postcard__img_link" href={item.tags[1].link}>
                <img
                  className="postcard__img"
                  src={getImagePath(item.tags[0].link)}
                  alt={item.alt}
                />
              </a>
              <div className="postcard__text">
                <h1 className="postcard__title blue">
                  <a href={item.tags[1].link}>{item.title}</a>
                </h1>
                <div className="postcard__subtitle large">
                  <p>{item.subtitle}</p>
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  {item.previewText}
                  <br />
                  Technologies Used: {item.technologies}
                </div>
                <ul className="postcard__tagbox">
                  <li className="tag__item">
                    <Link
                      to={`/projects/${item.id}`}
                      onClick={() => setSelectedProject(item)}
                    >
                      <i className="fas fa-plus"></i>&nbsp;{item.tags[0].text}
                    </Link>
                  </li>
                  <li
                    className="tag__item"
                    style={{
                      display:
                        item.tags[1].link.match(/\.(mp4|webm|ogg)$/i) ||
                        item.tags[1].link === ""
                          ? "none"
                          : "block"
                    }}
                  >
                    <a href={item.tags[1].link}>
                      <i className="fas fa-external-link-alt"></i>&nbsp;
                      {item.tags[1].text}
                    </a>
                  </li>
                  <li
                    className="tag__item"
                    style={{
                      display: item.tags[2].link === "" ? "none" : "block"
                    }}
                  >
                    <a href={item.tags[2].link}>
                      <i className="fab fa-github"></i>&nbsp;{item.tags[2].text}
                    </a>
                  </li>
                </ul>
              </div>
            </article>
          ))}
          {selectedProject && <ProjectDetail {...selectedProject} />}
        </div>
      </div>
      <div className="container-fluid project-container">
        <div id="project" className="reveal">
          <p id="section-text">
            <b>GRAPHICS AND SIMPLE GAMES</b>
          </p>
          <h1 id="bottom-gap" className="main-text">
            Other Works
          </h1>

          {otherProjects.map((item) => (
            <article
              key={item.id}
              className={`postcard blue text-black project-item ${item.filter}`}
              data-filter={`.${item.filter}`}
            >
              <a className="postcard__img_link" href={item.tags[1].link}>
                <img
                  className="postcard__img"
                  src={getImagePath(item.tags[0].link)}
                  alt={item.alt}
                />
              </a>
              <div className="postcard__text">
                <h1 className="postcard__title blue">
                  <a href={item.tags[1].link}>{item.title}</a>
                </h1>
                <div className="postcard__subtitle large">
                  <p>{item.subtitle}</p>
                </div>
                <div className="postcard__bar"></div>
                <div className="postcard__preview-txt">
                  {item.previewText}
                  <br />
                  Technologies Used: {item.technologies}
                </div>
                {/* <ul className="postcard__tagbox">
                  {item.tags.map((tag, index) => (
                    <li key={index} className="tag__item">
                      <a href={tag.link}>
                        <i className={tag.icon}></i>&nbsp;{tag.text}
                      </a>
                    </li>
                  ))}
                </ul> */}
                <ul className="postcard__tagbox">
                  <li className="tag__item">
                    <Link
                      to={`/projects/${item.id}`}
                      onClick={() => setSelectedProject(item)}
                    >
                      <i className="fas fa-plus"></i>&nbsp;{item.tags[0].text}
                    </Link>
                  </li>
                  <li
                    className="tag__item"
                    style={{
                      display:
                        item.tags[1].link.match(/\.(mp4|webm|ogg)$/i) ||
                        item.tags[1].link === ""
                          ? "none"
                          : "block"
                    }}
                  >
                    <a
                      href={item.tags[1].link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt"></i>&nbsp;
                      {item.tags[1].text}
                    </a>
                  </li>
                  <li
                    className="tag__item"
                    style={{
                      display: item.tags[2].link === "" ? "none" : "block"
                    }}
                  >
                    <a href={item.tags[2].link}>
                      <i className="fab fa-github"></i>&nbsp;{item.tags[2].text}
                    </a>
                  </li>
                </ul>
              </div>
            </article>
          ))}
          {selectedProject && <ProjectDetail {...selectedProject} />}
        </div>
      </div>
    </>
  );
};

export default Projects;
