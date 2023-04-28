import React, { useRef, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import choice1 from "../images/choice1.png";
import choice2 from "../images/choice2.png";
import choice3 from "../images/choice3.png";
import choice4 from "../images/choice4.png";
import choice5 from "../images/choice5.png";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const images = [choice1, choice2, choice3, choice4, choice5];

function Choice() {
  //gsap/ScrollTrigger effect
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.from(ref.current, {
      opacity: 0,
      duration: 2,
      ease: "easeInOut",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        once: false,
        onEnter: () => {
          gsap.to(ref.current, {
            opacity: 1,
            duration: 2,
          });
        },
        onLeaveBack: () => {
          gsap.to(ref.current, {
            opacity: 0,
            duration: 2,
          });
        },
      },
    });
  }, []);

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
              alt="choice bathrooms"
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
                <i>Choice Bathroom and Kitchen Supplies, 2014</i>
              </h4>{" "}
            </Card.Title>
            <Card.Text className=" w-75 mx-auto">
              Choice bathrooms and kitchen supplies, my 1st live website in full
              working condition and accessible by the public. It is primitive
              and nasty, but considering it earned me butter and bread for the
              1st time, it deserves its position in this portfolio. Tools used
              are Dreamweaver, Photoshop. Technologies are HTML5,CSS3 and vanila
              JavaScript.
            </Card.Text>
            <Card.Text>Last updated 2016</Card.Text>
          </Card.Header>
        </Card>
      </Container>
    </>
  );
}

export default Choice;
