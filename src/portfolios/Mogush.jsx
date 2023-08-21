import React, { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import mogush_1 from "../images/mogush_1.png";
import mogush_2 from "../images/mogush_2.png";
import mogush_3 from "../images/mogush_3.png";
import UseScrollTrigger from "../components/UseScrollTrigger.js";

//  iamges slider for project
const images = [mogush_1, mogush_2, mogush_3];

function NutsNews() {
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
            <img src={images[currentIndex]} alt="Nuts News" className="w-100" />
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
                <i>Mogush Veterinary Clinic EMR System, 2023</i>
              </h4>
            </Card.Title>
            <Card.Text className=" w-75 mx-auto">
              This is an Express.js application that utilizes EJS for frontend
              rendering and connects to a MongoDB database in the cloud. The
              backend is designed with a RESTful API, incorporating token-based
              authentication. The application is deployed directly on an AWS EC2
              instance. By clicking the "Live Site" button below, you can log in
              using the username "user" and password "123456" to interact with
              it with restricted permissions.
            </Card.Text>
            <Card.Text></Card.Text>
            <a href="http://13.239.119.168/" target="_blank" rel="noreferrer">
              <button>
                <span>Live Site</span>
              </button>
            </a>
          </Card.Header>
        </Card>
      </Container>
    </>
  );
}

export default NutsNews;
