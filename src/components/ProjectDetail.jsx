import React from "react";
import { useParams } from "react-router-dom";
import projects from "../data/projects.json"; // Import the JSON file
import Error from "./Error.jsx";

const ProjectDetail = () => {
  const { id } = useParams(); // Get the project ID from the route parameters
  const project = projects.find((proj) => proj.id === id); // Find the project details based on ID

  // Dynamically import the image
  const imageSrc = new URL(`${project.tags[0].link}`, import.meta.url).href;

  if (!project) {
    return <Error />;
  }

  // Check if the tag[1] link is a video file
  const isVideo = project.tags[1].link.match(/\.(mp4|webm|ogg)$/i);

  return (
    <div className="container acontainer pb-5">
      <div className="container-fluid reveal ">
        <div className="row">
          <div className="col-md-6">
            <img src={imageSrc} alt={project.title} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2>{project.title}</h2>
            <p>{project.subtitle}</p>
            {/* <small>{project.date}</small> */}
            <p>{project.previewText}</p>
            <h5>Technologies Used:</h5>
            <ul>{project.technologies}</ul>
            <div className="mt-3 buttons pb-3">
              {isVideo ? (
                <video
                  controls
                  style={{ width: "100%" }}
                  src={new URL(`${project.tags[1].link}`, import.meta.url).href}
                  alt={project.title}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <a
                  href={project.tags[1].link}
                  className="main-button"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: project.tags[1].link === "" ? "none" : "block"
                  }}
                >
                  {project.tags[1].text}
                </a>
              )}
              <a
                href={project.tags[2].link}
                className="sub-button"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: project.tags[2].link === "" ? "none" : "block"
                }}
              >
                {project.tags[2].text}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
