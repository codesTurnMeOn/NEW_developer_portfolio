import React, { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import mptm_1 from "../images/mptm_1.png";
import mptm_2 from "../images/mptm_2.png";
import mptm_3 from "../images/mptm_3.png";
import mptm_4 from "../images/mptm_4.png";
import mptm_5 from "../images/mptm_5.png";

import UseScrollTrigger from "../components/UseScrollTrigger.js";

//  iamges slider for project
const images = [mptm_1, mptm_2, mptm_3, mptm_4, mptm_5];

function MPTM() {
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
            <img src={images[currentIndex]} alt="MPTM" className="w-100" />
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
                <i>Melbourne Public Toilet Map (MPTM), 2023</i>
              </h4>
            </Card.Title>
            <Card.Text className=" w-75 mx-auto">
              This is an Express.js application that empowered by ApolloServer
              with GraphQL fetching and sending data to a MongoDB database. And
              the backend uses JWT and Bcrypt to secure the routes. The frontend
              is again built with React, and integrated with Google Map API.
              User entered data are being validated by Joi. The backend is
              deployed with Render and the frontend is with Netlify as this
              portfolio. By clicking the "Live Site" button below, you are
              welcome to log in using the username "admin@admin.com" and
              password "123456" to interact with this application.
            </Card.Text>
            <Card.Text></Card.Text>
            <a
              href="https://mel-public-toilet-map-mptm-frontend.onrender.com/"
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

export default MPTM;
