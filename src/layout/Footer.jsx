import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import lei_logo from "../images/lei_logo.png";
import { AiFillHeart } from "react-icons/ai";

function Footer() {
  // Dynamic Date Function
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <div id="footer" className="flex-column">
      <Container fluid>
        <Container>
          <Row>
            <Col>
              <div className="footerSlogan">
                Your Need, My Inspiration.
                <img src={lei_logo} alt="Lei logo" />
              </div>
            </Col>
          </Row>
          <Row className="my-2">
            {/* <Col xs={12} md={4}>
              <Link to="/*">future use</Link>
            </Col> */}
            <Col xs={12} className="footerRow2">
              {getCurrentYear()} &#169; LeisWebDev
              <AiFillHeart />
            </Col>
            {/* <Col xs={12} md={4}>
              <Link to="/*">future use</Link>
            </Col> */}
          </Row>

          <Row>
            <Col></Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Footer;
