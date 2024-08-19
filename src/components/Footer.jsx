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
    <footer className="footer mt-auto py-4 bg-dark">
      <div className="container">
        <div className="row">
          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5 className="text-white">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/about" className="text-white text-decoration-none">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white text-decoration-none">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-white text-decoration-none">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/#project"
                  className="text-white text-decoration-none"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-md-4 mb-3 text-center">
            <h5 className="text-white">Follow Me</h5>
            <div>
              <a
                href="https://www.linkedin.com/in/sulav-parajuli/"
                className="text-white mx-2"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a
                href="https://www.facebook.com/sulav.parajuli"
                className="text-white mx-2"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a
                href="https://www.instagram.com/sulav.parajuli"
                className="text-white mx-2"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a
                href="https://github.com/sulav-parajuli"
                className="text-white mx-2"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a
                href="mailto:sulavparajuli@example.com"
                className="text-white mx-2"
              >
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </a>
            </div>
          </div>

          {/* Copyright and Made With Love */}
          <div className="col-md-4 mb-3 text-center">
            <p className="text-white">Copyright ©2024 Sulav Parajuli.</p>
            <p className="text-white mb-0">
              Made with{" "}
              <FontAwesomeIcon icon={faHeart} className="text-danger" /> in
              Pokhara, Nepal
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
