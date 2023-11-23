import React, { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Sylinn_full_stack_1 from "../images/Sylinn_full_stack_1.png";
import Sylinn_full_stack_2 from "../images/Sylinn_full_stack_2.png";
import Sylinn_full_stack_3 from "../images/Sylinn_full_stack_3.png";
import Sylinn_full_stack_4 from "../images/Sylinn_full_stack_4.png";
import Sylinn_full_stack_5 from "../images/Sylinn_full_stack_5.png";
import UseScrollTrigger from "../components/UseScrollTrigger.js";

//  iamges slider for project
const images = [Sylinn_full_stack_1, Sylinn_full_stack_2, Sylinn_full_stack_3, Sylinn_full_stack_4,Sylinn_full_stack_5];

function Sylinn_full_stack() {
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
                <i>Sylinn Bathroom&Kitchen Supplies Full Stack, 2023</i>
              </h4>
            </Card.Title>
            <Card.Text className=" w-75 mx-auto">
              Sylinn_full_stack is a full-stack application built with React and
              Vanilla Extract, a CSS-in-TypeScript framework. The server-side is
              constructed using Express.js and is supported by a Google
              Firestore database. This application will serve as the official
              site for a sub-brand of my current employer. Its primary purpose
              is for display, providing a secure login endpoint for users and
              administrators. Administrators have access to on-page endpoints
              for CRUD operations. Development work is currently ongoing, and
              the application is expected to be fully functional with real
              product data populated by the end of 2023
            </Card.Text>
            <Card.Text></Card.Text>
            <a href="https://sylinn.com.au/" target="_blank" rel="noreferrer">
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

export default Sylinn_full_stack;
