import React, { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import saddler1 from "../images/saddler1.png";
import saddler2 from "../images/saddler2.png";
import saddler3 from "../images/saddler3.png";
import UseScrollTrigger from "../components/UseScrollTrigger.js";

//  iamges slider for project
const images = [saddler1, saddler2, saddler3];

function Saddler() {

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
        {/* ref={ref} */}
        <Card className="card" ref={ref}>
          <div className="card-slider">
            <img
              src={images[currentIndex]}
              alt="Tenterfield saddler"
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
                {" "}
                <i>Tenterfield Saddler, 2015</i>
              </h4>{" "}
            </Card.Title>
            <Card.Text className=" w-75 mx-auto">
              There are two versions of this site: a provincial look version and
              modern look one with two layers depth of field. This is a website
              develop work for Cert IV of design, development tool was
              Dreamweaver, Photoshop and Illustrator. Technologies used are
              HTML5 and CSS3.
            </Card.Text>
            <Card.Text></Card.Text>
          </Card.Header>
        </Card>
      </Container>
    </>
  );
}

export default Saddler;
