import React from 'react';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import mures from "../images/mures.jpg";

function Mures() {
  return (
    <>
      <Container className="container">
        <Card className=" card ">
          <Card.Img src={mures} alt="Card image" />
          <Card.Header>
            <Card.Title>
              <h4><i>Mures Tasminia, 2013</i></h4>{" "}
            </Card.Title>
            <Card.Text>
              This is a web desgin work for Cert IV of design, development tool
              was photoshop.
            </Card.Text>
            <Card.Text>Last updated 2013</Card.Text>
          </Card.Header>
        </Card>
      </Container>
    </>
  );
}

export default Mures