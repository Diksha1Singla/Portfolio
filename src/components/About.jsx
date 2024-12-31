import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import "./CSS/About.css";

function About() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Diksha - About</title>
        </Helmet>
      </HelmetProvider>
      <Container fluid className="about-wrapper">
        <div className="about-left animate__animated animate__zoomIn">
          <h3>About</h3>
          <h4>
            ───&nbsp;&nbsp;Page <strong>02</strong>
          </h4>
        </div>
        <div className="about-right animate__animated animate__fadeIn animate__slower py-3">
          <p>
            Hello! My name is Diksha and I'm a Pre-final year student pursuing
            Bachelor of Engineering in Computer Science, from Thapar
            University, Patiala. During my academic journey, I have enthusiastically
            explored the field of engineering, always curious to learn more and
            eager to gain knowledge. This has led me to acquire a diverse set of
            skills and achieve significant accomplishments, making my
            engineering experience truly exciting and fulfilling.
          </p>
          <p>
            My fascination with web development led me to explore the dynamic
            world of the MERN stack (MongoDB, Express.js, React, and Node.js). I
            find this technology stack incredibly versatile and scalable,
            allowing me to create responsive and innovative web applications.
          </p>
          <p>
            {/* One of my proudest achievements is successfully filling a patent. */}
            Solving problems and creating solutions that can make a real
            difference has taught me the importance of protecting intellectual
            property and valuing originality in engineering.
          </p>
          <p>
            I possess a robust understanding of Object-Oriented Programming
            (OOPs) principles, allowing me to design modular and maintainable
            software systems. Additionally, my proficiency in Data Structures
            and Algorithms (DSA) empowers me to optimize performance and
            efficiency in code implementations.With a keen eye for data
            organization and management, I am well-versed in Database Management
            Systems (DBMS).
          </p>
          <p>
            As I approach the crossroads of my academic journey, I am excited to
            embrace new challenges and collaborate with industry professionals
            who share my passion for technological innovation. I am eager to
            contribute my skills and knowledge to meaningful projects that leave
            a lasting impact.
          </p>
          <p>
            Thank you for visiting my portfolio. I look forward to engaging in
            discussions and exploring opportunities that align with my interests
            and aspirations.
          </p>
          <br/>
        </div>
      </Container>
    </>
  );
}

export default About;
