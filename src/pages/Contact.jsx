import React from "react";
import NavBar from "../layout/NavBar";
import Footer from "../layout/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Contact() {
  return (
    <div id="contact">
      <NavBar />

      <Container style={{ height: "80vh" }}>
        <div className="my-5 py-5 text-center darkTheme">
          <Row>
            <Col xs={12} md={7}>
              1 of 2
            </Col>
            <Col xs={6} md={5}>
              2 of 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. In
              quibusdam amet hic commodi officia facilis sit odit eum cumque
              similique suscipit voluptate incidunt a non, animi soluta
              corporis, ex ipsum.
            </Col>
          </Row>
          <Row>
            <Col md={4}>1 of 3</Col>
            <Col md={4}>2 of 3</Col>
            <Col md={4}>3 of 3</Col>
          </Row>
        </div>
      </Container>

      <Footer />
    </div>
  );
}

export default Contact;
