import React, { useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import UseScrollTrigger from "../components/UseScrollTrigger.js";

function Qualification() {
  const QualificationRef = useRef(null);
  useEffect(() => {
    const anchorName = localStorage.getItem("anchor");

    if (anchorName === "qualification") {
      const projectsElement = QualificationRef.current;

      setTimeout(() => {
        projectsElement.scrollIntoView({ behavior: "smooth" });
      }, 500);

      localStorage.removeItem("anchor");
    }
  }, []);

  //gsap/ScrollTrigger effect
  const ref = useRef(null);
  UseScrollTrigger(ref);

  return (
    <div id="qualification" ref={QualificationRef}>
      <Container>
        <Container>
          <h1>Qualifications</h1>
        </Container>
        <div ref={ref}>
          <Accordion defaultActiveKey="0" flush className="shadow my-accordion">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="accordionHeader">
                Diploma of IT (Front End and Back End Web Development)
              </Accordion.Header>
              <Accordion.Body className="darkTheme holmesglen ">
                <p>
                  {" "}
                  I have acquired the skills to effectively work with a diverse
                  range of technologies for rapid website prototyping and
                  development. On the front end, I am proficient in React.js,
                  JavaScript, object-oriented programming principles,
                  asynchronous programming, TypeScript, unit testing, GIT,
                  Node.js, NPM, SASS, HTML5, CSS3, responsive design, user
                  interface and user experience design, as well as SEO and
                  accessibility essentials.
                  <br />
                  On the back end, my expertise extends to Node.js for
                  server-side scripting, utilizing NPM and Express.js. I am
                  experienced in database design, encompassing MongoDB, MySQL,
                  and Firebase, and can confidently design Restful APIs. I have
                  basic knowledge of Docker, and proficiency in cloud deployment
                  techniques as a certified AWS cloud practioner and Solutions
                  Architect-Associate(to be acquired in Sept 2023). With this
                  comprehensive skill set, I am well-equipped to contribute
                  effectively to web development projects and ensure their
                  successful execution across the web stack.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header className="accordionHeader">
                Certificate IV of Design (Web Design)
              </Accordion.Header>
              <Accordion.Body className="darkTheme oc">
                <p>
                  Throughout my journey towards this certificate, I've attained
                  expertise in a comprehensive range of skills vital to web
                  design. These encompass Introduction to Web Design, HTML and
                  CSS, Responsive Web Design, User Experience (UX) Design, Web
                  Graphics and Visual Design, Typography, JavaScript
                  Fundamentals, Web Development Tools, Web Design Principles,
                  Usability and Accessibility, and more. This diverse skill set
                  equips me to create impactful and user-centered web
                  experiences.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header className="accordionHeader">
                Master of Business (International Business)
              </Accordion.Header>
              <Accordion.Body className="darkTheme utas">
                <p>
                  During my journey at UTAS, I have gained substantial knowledge
                  in key areas. These include a comprehensive understanding of
                  international business strategies, global market dynamics,
                  cross-cultural management, international trade and finance, as
                  well as supply chain management in a global context.
                  Furthermore, I have honed analytical skills through case
                  studies and real-world scenarios, enabling me to make informed
                  decisions in complex international business environments. This
                  program has equipped me with a solid foundation to navigate
                  the intricacies of the global business landscape and
                  contribute effectively to international business endeavors.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header className="accordionHeader">
                Bachelor of Art (Trade and Marketing)
              </Accordion.Header>
              <Accordion.Body className="darkTheme sisu">
                <p>
                  Studying Economics and English at the English Department of
                  Economics and Trade at SISU, I've developed sharp analytical skills and gained
                  insights into economic theories, international trade dynamics,
                  and financial principles. This experience has enhanced my
                  readiness for the complexities of the global business
                  landscape.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Container>
    </div>
  );
}

export default Qualification;
