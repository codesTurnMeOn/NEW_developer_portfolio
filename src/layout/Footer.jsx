import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import lei_logo from "../images/lei_logo.png"

function Footer() {
  return (
    <div id="footer" className="flex-column">
      <Container fluid>
        <Container>
          <Row>
            <Col>
              <div className="footerSlogan">
                Need a website? get a Lei!
                <img src={lei_logo} />
              </div>
            </Col>
          </Row>
          <Row className="my-4">
            <Col xs={12} md={4}>
              <a href="/pageNotFound">No Privacy</a>
            </Col>
            <Col xs={12} md={4} className="footerRow2">
              &#169;Lei's Web Design 2023
            </Col>
            <Col xs={12} md={4}>
              <a href="/pageNotFound">No Security</a>
            </Col>
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
