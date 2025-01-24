import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillMail } from "react-icons/ai";
import "./CSS/Footer.css";

function Footer() {
  return (
    <>
      <footer className="px-4">
        <div className="foot-left d-flex">
          <p><a style={{color:"black",textDecoration:"none"}} href="https://www.linkedin.com/in/diksha1singla">Diksha</a> &copy; 2024</p>
        </div>
        <div className="foot-right d-flex">
          <a
            href="https://github.com/Diksha1Singla"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="foot-icon" />
            &nbsp;&nbsp;GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/diksha1singla"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className="foot-icon" />
            &nbsp;&nbsp;Linkedin
          </a>
          <a
            href="mailto:diksha34020@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillMail className="foot-icon" />
            &nbsp;&nbsp;Gmail
          </a>
          <a
            href="https://www.instagram.com/singla_dikshaa"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram className="foot-icon" />
            &nbsp;&nbsp;Instagram
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
