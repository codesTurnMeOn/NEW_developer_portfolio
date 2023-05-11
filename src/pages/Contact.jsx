import React, { useContext } from "react";
import NavBar from "../layout/NavBar";
import Footer from "../layout/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import contact_img_light from "../images/contact_img_light.png";
import contact_img_dark from "../images/contact_img_dark.png";
import { SlScreenSmartphone } from "react-icons/sl";
import { SlEnvolope } from "react-icons/sl";
import { SlHome } from "react-icons/sl";
import { SlUser } from "react-icons/sl";
import { ThemeContext } from "../App";

function Contact() {
  const themeContext = useContext(ThemeContext);
  return (
    <div>
      <NavBar />

      <Container className="my-5 px-4 text-center text-color">
        <div id="contact">
          <Row className="py-5 d-flex align-items-center">
            <Col xs={12} md={7}>
              <img
                className="contact-pic"
                src={
                  themeContext.theme === "light"
                    ? contact_img_light
                    : contact_img_dark
                }
                alt="contact"
              />
            </Col>
            <Col xs={12} md={5}>
              <h1>
                {" "}
                Coming together is a beginning; keeping together is progress;
                working together is success.
              </h1>
              <p>
                <i>— Henry Ford </i>
                <p> The founder of Ford Motor</p>
              </p>
              <a href="/resume.md" target="_blank" rel="noreferrer">
                <button>
                  <span>
                    <SlUser />Download My Resume
                  </span>
                </button>
              </a>
            </Col>
          </Row>
          <Row className="py-5 contact-icon">
            <Col md={4}>
              {" "}
              <SlScreenSmartphone /> 0413354003
            </Col>
            <Col md={4}>
              {" "}
              <SlHome /> Keysborough Victoria 3173 Australia
            </Col>
            <Col md={4}>
              {" "}
              {/* <img src={email} alt="email" />{" "} */}
              <SlEnvolope />
              <a
                href="mailto:wadane@gmail.com"
                className={
                  themeContext.theme === "light" ? "text-dark" : "text-light"
                }
              >
                {" "}
                wadane@gmail.com
              </a>
            </Col>
          </Row>
        </div>
      </Container>

      <Footer />
    </div>
  );
}

export default Contact;
