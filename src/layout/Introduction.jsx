import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import intro_bg from "../images/intro_bg.png";


function Introduction() {
  return (
    <div id="intro">
      <Container>
        <h1>Introduction</h1>
        <div className="darkTheme">
          <Card className="d-flex flex-row shadow darkTheme">
            <Card.Img src={intro_bg} />
            <Card.Body>
              <Card.Title className="cardTitle"></Card.Title>
              <Card.Text>
                <p>
                  I'm currently doing diploma of IT (Front end and back end
                  develop) at Holmesglen Institute. I will soon be a qualified
                  programer who know how to design web. And that will make
                  me...employable?
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default Introduction;
