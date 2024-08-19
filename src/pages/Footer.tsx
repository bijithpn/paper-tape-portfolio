// UI Components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Images
import logo from "../assets/images/logo.png";

// Icons
import {
  faFacebookF,
  faTwitter,
  faBehance,
  faDribbble,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

// ---------------

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content center-relative">
        {/* <div className="footer-logo">
          <img src={logo} alt="Meelo" />
        </div> */}

        <div className="footer-mail">
          <a href="mailto:hello@papertape.io">hello@papertape.io</a>
        </div>

        <div className="footer-phone">
          <a href="tel:+91 8113864689">+91 8113864689</a>
        </div>

        <div className="social-holder">
          <a href="#">
            <FontAwesomeIcon icon={faX} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faBehance} />
          </a>
          <a href="https://www.instagram.com/papertape_pictures/?igsh=MW40b2dwbTk3NnE1">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>

        <div className="copyright-holder">
          © {new Date().getFullYear()} Paper Tape Studios{" "}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
