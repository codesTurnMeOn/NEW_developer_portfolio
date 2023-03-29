import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import foodranger1 from "../images/foodranger1.png";
import foodranger2 from "../images/foodranger2.png";
import foodranger3 from "../images/foodranger3.png";
import foodranger4 from "../images/foodranger4.png";

const images = [foodranger1, foodranger2, foodranger3, foodranger4];

function FoodRanger() {
  // project images slider
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };
  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
  };

  return (
    <>
      <Container className="container">
        <Card className="card">
          <div className="card-slider">
            <img
              src={images[currentIndex]}
              alt="sylinn bathrooms"
              className="w-100"
            />
            <button className="btn-prev" onClick={handlePrev}>
              &#8678;
            </button>
            <button className="btn-next" onClick={handleNext}>
              &#8680;
            </button>
          </div>
          <Card.Header>
            <Card.Title>
              <h4>
                <i>Food Ranger.co, 2023</i>
              </h4>{" "}
            </Card.Title>
            <Card.Text className=" w-75 mx-auto">
              Food Ranger.co is a study assignment.It fetches data from a
              cuisine API and renders them on the webpage. User is able to
              search by any food keyword and number of recipes to be displayed
              on the page. It also involves a dark/light mode switch, and name
              stored locally for simple personalization. A react-hook-from is
              used to collected user data and is self-validated.Tools used are
              VS Code, Photoshop. Technologies are HTML5,CSS3,
              JavaScript,React.js,Bootstrap5.
            </Card.Text>
            <Card.Text>Last updated 02/2023</Card.Text>
            <a
              href="https://github.com/codesTurnMeOn/hg_apiPortfolio"
              target={"_blank"}
            >
              <button>Details</button>
            </a>
          </Card.Header>
        </Card>
      </Container>
    </>
  );
}

export default FoodRanger;
