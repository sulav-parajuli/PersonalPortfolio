// Import FontAwesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div>
        <p className="text-white text-center">
          Copyright ©2024 Sulav Parajuli.
        </p>
        <p className="text-white text-center  mb-0">
          Made with <FontAwesomeIcon icon={faHeart} /> in Pokhara, Nepal
        </p>
      </div>
    </footer>
  );
}

export default Footer;
