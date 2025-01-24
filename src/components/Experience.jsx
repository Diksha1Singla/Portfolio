import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import "./CSS/About.css";
import "./CSS/Experience.css";

function Experience() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Tarun Goyal - Experience</title>
        </Helmet>
      </HelmetProvider>
      <Container fluid className="about-wrapper">
        <div className="about-left animate__animated animate__zoomIn">
          <h3>Experience</h3>
          <h4>
            ───&nbsp;&nbsp;Page <strong>03</strong>
          </h4>
        </div>
        <div className="about-right animate__animated animate__fadeIn animate__slower py-3">
          <div className="box">
            <div className="box1">
            <br/>
              <h2>BCL Industries Ltd - SDE Intern</h2>
              <p>July 2022 - Aug 2022</p>
              <p>
                <b>Tech Stack:</b> React, Node, Express, MongoDB
              </p>
              <p>
                During my internship, I had the opportunity to contribute
                significantly to the development of a dynamic and user-friendly
                real estate website. This project allowed me to apply my skills
                in web development and gain valuable practical experience in a
                real-world setting.
              </p>
              <h4>Responsibilities</h4>
              <br/>
            </div>
            <p>
              <ul>
                <li>
                  Collaborated with a team of developers to design and implement
                  new features for the website, enhancing its functionality and
                  user experience.
                </li>
                <li>
                  Utilized the MERN stack (MongoDB, Express.js, React, and
                  Node.js) to build the frontend and backend of the application.
                </li>
                <li>
                  Worked closely with UI/UX designers to ensure the website's
                  visual appeal and responsiveness met modern web standards.
                </li>
                <li>
                  Implemented advanced search functionality, allowing users to
                  easily find properties based on various criteria such as
                  location, price range, and property type.
                </li>
                <li>
                  Integrated third-party APIs (MagicBricks API) to fetch
                  real-time data on property listings, ensuring that the
                  website's information remained up-to-date.
                </li>
              </ul>
            </p>
          </div>
          <div className="box">
            <div className="box1">
            <br/>
              <h2>DIC - Web Developer </h2>
              <p>June 2023 - July 2023</p>
              <p>
                <b>Tech Stack:</b> React, Node, Express, MongoDB
              </p>
              <p>
                During my summer training, I was tasked to create a full stack
                website. My involvement in the website was a rewarding and
                enriching experience. It fueled my passion for web development.
              </p>
<br/>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Experience;
