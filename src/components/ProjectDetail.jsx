import React, { useState } from "react";
import { useParams } from "react-router-dom";
import projects from "../data/projects.json"; // Import the JSON file
import Error from "./Error.jsx";

const getMediaPath = (filePath) => {
  const isGitHubPages = import.meta.env.MODE === "production";

  if (isGitHubPages) {
    // Use the raw GitHub URL for images when in GitHub Pages
    return `https://raw.githubusercontent.com/sulav-parajuli/PersonalPortfolio/main/${filePath}`;
  } else {
    const basePath = import.meta.env.BASE_URL;

    // Check if the basePath ends with "projects" or "projects/:id"
    let adjustedBasePath = basePath;
    // Remove everything after "/projects/" (including the ID)
    if (basePath.includes("/projects/")) {
      adjustedBasePath = basePath.split("/projects/")[0];
    }

    // Construct the full path
    let fullPath = `${adjustedBasePath}${filePath}`;

    // Ensure GitHub Pages compatibility by adding "/PersonalPortfolio" if necessary
    if (!fullPath.includes("/PersonalPortfolio")) {
      fullPath = "/PersonalPortfolio" + fullPath;
    }

    // Return the correct path
    return new URL(`${fullPath}`, import.meta.url).href;
  }
};

const ProjectDetail = () => {
  const { id } = useParams(); // Get the project ID from the route parameters
  const project = projects.find((proj) => proj.id === id); // Find the project details based on ID
  const [isScrollLocked, setIsScrollLocked] = useState(false); // State to manage scroll lock

  const imageSrc = getMediaPath(project.tags[0].link);
  const videoSrc = project.tags[1].link
    ? getMediaPath(project.tags[1].link)
    : null;

  if (!project) {
    return <Error />;
  }

  // Toggle scroll lock
  const toggleScrollLock = () => {
    setIsScrollLocked(!isScrollLocked);
  };

  // Check if the tag[1] link is a video file
  const isVideo = videoSrc && videoSrc.match(/\.(mp4|webm|ogg)$/i);

  const renderAssociatedWorks = () => {
    return project.tags.slice(3).map((tag, index) => {
      const mediaPath = getMediaPath(tag.link);
      const isVideo = tag.link.match(/\.(mp4|webm|ogg)$/i);
      const isImage = tag.link.match(/\.(jpg|jpeg|png|gif)$/i);
      const isExternalLink = !isVideo && !isImage;

      if (isVideo) {
        return (
          <div key={index} className="col-md-4 mb-3">
            <video
              controls
              style={{ width: "100%" }}
              src={mediaPath}
              alt={tag.text}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        );
      } else if (isImage) {
        return (
          <div key={index} className="col-md-4 col-md-6 mb-3">
            {/* Scrollable container */}
            <div
              className="scrollable-container"
              style={{
                maxHeight: "500px",
                overflowY: isScrollLocked ? "hidden" : "auto",
                border: "1px solid #ccc",
                position: "relative"
              }}
            >
              <img src={mediaPath} alt={tag.text} className="img-fluid" />
              <button
                className="scroll-lock-button main-button"
                onClick={toggleScrollLock}
                style={{
                  position: "fixed",
                  left: "20px",
                  zIndex: "1000"
                }}
              >
                {isScrollLocked ? "🔒" : "🔓"}
              </button>
            </div>
          </div>
        );
      } else if (isExternalLink) {
        return (
          <div key={index} className="col-md-4 mb-3">
            <div className="external-link-container">
              <div className="buttons">
                <a
                  href={tag.link}
                  className="main-button"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: tag.link === "" ? "none" : "block"
                  }}
                >
                  {tag.text}
                </a>
                <button
                  className="copy-button sub-button mt-2"
                  onClick={() => navigator.clipboard.writeText(tag.link)}
                >
                  Copy Link
                </button>
              </div>
              <p className="link-text mt-2 text-break">
                <small>{tag.link}</small>
              </p>
            </div>
          </div>
        );
      }

      return null;
    });
  };

  return (
    <div className="container acontainer pb-5 mx-auto">
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
                  src={videoSrc}
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
        {project.tags.length > 3 && (
          <div className="row mt-5">
            <h3>Some of my other works associated</h3>
            <div className="row">{renderAssociatedWorks()}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
