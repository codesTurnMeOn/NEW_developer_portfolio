import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import frontend_graphic from "../images/frontend_graphic.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Introduction() {
  return (
    <div id="intro">
      <Container>
        <h1>Introduction</h1>
        <div className="darkTheme">
          <Row>
            <Card className="d-flex flex-row flex-way flex-wrap shadow darkTheme">
              {/* <Card.Img src={intro_bg} /> */}

              <Col xs={12} sm={12} md={3}>
                <Card.Img src={frontend_graphic} />
              </Col>
              <Col xs={12} sm={12} md={9}>
                <Card.Body>
                  {/* <Card.Title className="cardTitle"></Card.Title> */}

                  <Card.Text>
                    <p>
                      Welcome to my online portoflio! I'm currently doing
                      diploma of IT (Front end and back end develop) at
                      Holmesglen Institute. I will soon be a qualified programer
                      that also process the concept of web design. Have a browse
                      and check below see what I can do.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Col>
            </Card>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Introduction;
