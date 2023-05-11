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
              <Accordion.Body className="darkTheme">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header className="accordionHeader">
                Certificate IV of Design (Web Design)
              </Accordion.Header>
              <Accordion.Body className="darkTheme">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header className="accordionHeader">
                Master of Business (International Business)
              </Accordion.Header>
              <Accordion.Body className="darkTheme">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header className="accordionHeader">
                Bachelor of Art (Trade and Marketing)
              </Accordion.Header>
              <Accordion.Body className="darkTheme">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Container>
    </div>
  );
}

export default Qualification;
