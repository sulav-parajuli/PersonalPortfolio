// Import FontAwesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer py-4 bg-dark">
      <div className="container text-center">
        {/* Quick Links */}
        <div className="mb-3">
          <h5 className="text-white mb-3">Quick Links</h5>
          <ul className="list-unstyled d-flex justify-content-center mb-4">
            <li>
              <Link
                to={`${
                  process.env.NODE_ENV === "production"
                    ? "/PersonalPortfolio"
                    : ""
                }/about`}
                className="text-white text-decoration-none mx-2"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to={`${
                  process.env.NODE_ENV === "production"
                    ? "/PersonalPortfolio"
                    : ""
                }/contact`}
                className="text-white text-decoration-none mx-2"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to={`${
                  process.env.NODE_ENV === "production"
                    ? "/PersonalPortfolio"
                    : ""
                }/skills`}
                className="text-white text-decoration-none mx-2"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to={`${
                  process.env.NODE_ENV === "production"
                    ? "/PersonalPortfolio"
                    : ""
                }/`}
                className="text-white text-decoration-none mx-2"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={`${
                  process.env.NODE_ENV === "production"
                    ? "/PersonalPortfolio"
                    : ""
                }/#project`}
                className="text-white text-decoration-none mx-2"
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
        <hr />

        {/* Social Links */}
        <div className="mb-3">
          <h5 className="text-white mb-3">Follow Me</h5>
          <div className="mb-4">
            <a
              href="https://www.linkedin.com/in/sulavparajuli/"
              className="text-white mx-3"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://www.facebook.com/sulav.parajuli.5/"
              className="text-white mx-3"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              href="https://www.instagram.com/_sulav_parajuli/"
              className="text-white mx-3"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              href="https://github.com/sulav-parajuli"
              className="text-white mx-3"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="mailto:sulavparajuli82@gmail.com"
              className="text-white mx-3"
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </div>
        </div>

        {/* Copyright and Made With Love */}
        <div>
          <p className="text-white mb-1">Copyright ©2024 Sulav Parajuli.</p>
          <p className="text-white mb-0">
            Made with <FontAwesomeIcon icon={faHeart} className="text-danger" />{" "}
            in Pokhara, Nepal
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
