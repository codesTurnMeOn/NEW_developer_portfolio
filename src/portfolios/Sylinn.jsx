import React, { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import sylinn1 from "../images/sylinn1.png";
import sylinn2 from "../images/sylinn2.png";
import sylinn3 from "../images/sylinn3.png";
import sylinn4 from "../images/sylinn4.png";
import sylinn5 from "../images/sylinn5.png";
import sylinn6 from "../images/sylinn6.png";
import sylinn7 from "../images/sylinn7.png";
import UseScrollTrigger from "../components/UseScrollTrigger.js";

const images = [sylinn1, sylinn2, sylinn3, sylinn4, sylinn5, sylinn6, sylinn7];

function Sylinn() {
  //gsap/ScrollTrigger effect
  const ref = useRef(null);
  UseScrollTrigger(ref);

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
        <Card className="card" ref={ref}>
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
                <i>Sylinn Bathroom and Kitchen Supplies, 2022</i>
              </h4>{" "}
            </Card.Title>
            <Card.Text className=" w-75 mx-auto">
              Sylinn bathrooms is my last project before professional front-end
              study, and also the last project without any UI framework or JS
              library. Mostly likely it will be re-built with frameworks for
              better viewport responsiveness and stability.Tools used are VS
              Code, Dreamweaver, Photoshop. Technologies are HTML5,CSS3 and
              vanilla JavaScript. And it is also integrated with Google&#8482;
              search and Google Map&#8482;.
            </Card.Text>
            <Card.Text>Last updated 02/2023</Card.Text>
            <a
              href="https://github.com/coolkidsclubvip/sylinn_website"
              target="_blank"
              rel="noreferrer"
            >
              <button>
                <span>View Detail</span>
              </button>
            </a>
          </Card.Header>
        </Card>
      </Container>
    </>
  );
}

export default Sylinn;
