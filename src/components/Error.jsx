import React from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Error = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    // Use the navigate function to go back to the previous page
    navigate(-1); // or navigate("back")
  };

  return (
    <div className="container text-center mt-5" style={{ paddingTop: "86px" }}>
      <div className="container-fluid" style={{ paddingBottom: "5%" }}>
        <h1 className="main-text" style={{ textAlign: "center" }}>
          404
        </h1>
        <h1>Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <button
          className="icon-move-right main-button color-white"
          onClick={handleGoBack}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          {""} Back
        </button>
      </div>
    </div>
  );
};

export default Error;
