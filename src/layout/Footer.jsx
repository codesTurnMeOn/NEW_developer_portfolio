import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import lei_logo from "../images/lei_logo.png";
import {Link} from "react-router-dom";


function Footer() {
  return (
    <div id="footer" className="flex-column">
      <Container fluid>
        <Container>
          <Row>
            <Col>
              <div className="footerSlogan">
                Need a website? get a Lei!
                <img src={lei_logo} alt="Lei logo" />
              </div>
            </Col>
          </Row>
          <Row className="my-2">
            <Col xs={12} md={4}>
              <Link to="/*">No Privacy</Link>
            </Col>
            <Col xs={12} md={4} className="footerRow2">
              &#169;Lei's Web Design 2023
            </Col>
            <Col xs={12} md={4}>
              <Link to="/*">No Security</Link>
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
