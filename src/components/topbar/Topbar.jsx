import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Front-end Developer
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span><a href="tel:+48-509-225-968">+48-509-225-968</a></span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span><a href="mailto:jakubjangala@gmail.com">jakubjangala@gmail.com</a></span>
          </div>
          <div className="itemContainer">
            <LinkedInIcon className="icon" />
            <span><a href="https://www.linkedin.com/in/jakub-gala" target="_blank" rel="noreferrer">Linkedin</a></span>
          </div>
          <div className="itemContainer">
            <GitHubIcon className="icon" />
            <span><a href="https://github.com/JakGi" target="_blank" rel="noreferrer">GitHub</a></span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
