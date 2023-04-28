import React, { useRef, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import mures from "../images/mures.jpg";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Mures() {


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

  return (
    <>
      <Container className="container">
        <Card className="card" ref={ref}>
          <Card.Img src={mures} alt="Card image" />
          <Card.Header>
            <Card.Title>
              <h4>
                <i>Mures Tasminia, 2013</i>
              </h4>{" "}
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

export default Mures;
