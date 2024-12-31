// import { AiFillFileText } from "react-icons/ai";

import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import realProfile from "../assets/img/profile1.jpeg";
import { Helmet, HelmetProvider } from "react-helmet-async";

import "./CSS/Home.css";

function Home() {
  

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Diksha - Home</title>
        </Helmet>
      </HelmetProvider>
      <Container fluid className="home-wrapper">
        <div className="home-left animate__animated animate__fadeInLeft">
          <h3>
            Hello ! My name is
          </h3>
          <h2>
            <span className="name-hover">Diksha</span>
            {/* <span className="name-hover">Goyal</span> */}
          </h2>
          <NavLink to="/contact" className="btn-download text-center">
            Let's Connect
          </NavLink>
        </div>
        <div className="home-right animate__animated animate__fadeIn animate__slower">
          <img
            className="home-image"
            src={realProfile}
            alt="Avatar"
          />
        </div>
      </Container>
    </>
  );
}

export default Home;
