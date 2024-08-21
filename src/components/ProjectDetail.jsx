import React from "react";
import { useParams } from "react-router-dom";
import projects from "../data/projects.json"; // Import the JSON file
import Error from "./Error.jsx";

// // Utility function to get the correct path for images and videos
// const getMediaPath = (filePath) => {
//   const isLocalEnv =
//     window.location.hostname === "localhost" ||
//     window.location.hostname === "127.0.0.1";
//   const basePath = isLocalEnv ? "" : "/PersonalPortfolio/";
//   let baseUrl = `${basePath}${filePath}`;
//   // Check if baseUrl contains "/projects" and remove it
//   if (baseUrl.includes("/projects")) {
//     baseUrl = baseUrl.replace("/projects", "");
//   }
//   return baseUrl;
// };

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

  const imageSrc = getMediaPath(project.tags[0].link);
  const videoSrc = project.tags[1].link
    ? getMediaPath(project.tags[1].link)
    : null;

  if (!project) {
    return <Error />;
  }

  // Check if the tag[1] link is a video file
  const isVideo = videoSrc && videoSrc.match(/\.(mp4|webm|ogg)$/i);

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
      </div>
    </div>
  );
};

export default ProjectDetail;
