import React, { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Allyoucan_1 from "../images/Allyoucan_1.png";
import Allyoucan_2 from "../images/Allyoucan_2.png";
import Allyoucan_3 from "../images/Allyoucan_3.png";
import Allyoucan_4 from "../images/Allyoucan_4.png";
import Allyoucan_5 from "../images/Allyoucan_5.png";
import UseScrollTrigger from "../components/UseScrollTrigger.js";

//  iamges slider for project
const images = [
  Allyoucan_1,
  Allyoucan_2,
  Allyoucan_3,
  Allyoucan_4,
  Allyoucan_5,
];

function Allyoucan() {
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
                <i>Allyoucan Travel Agency, 2023</i>
              </h4>
            </Card.Title>
            <Card.Text className=" w-75 mx-auto">
              Allyoucan Travel Agency is my first agency work. It is built with
              Wordpress and Astra child theme, and is hosted with Godaddy.It is
              my First Wordpress project in production mode. It uses plugins for
              translation between English and Mandarin, and a form to send
              enquiry to admin's email address. Yoast is utilized to optimize
              SEO, and Wordfence is for website security.
            </Card.Text>
            <Card.Text></Card.Text>
            <a
              href="https://allyoucantravel.com.au/"
              target="_blank"
              rel="noreferrer"
            >
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

export default Allyoucan;
