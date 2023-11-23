import React, { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import nutsnews1 from "../images/nutsnews1.png";
import nutsnews2 from "../images/nutsnews2.png";
import nutsnews3 from "../images/nutsnews3.png";
import nutsnews4 from "../images/nutsnews4.png";
import UseScrollTrigger from "../components/UseScrollTrigger.js";


//  iamges slider for project
const images = [nutsnews1, nutsnews2, nutsnews3, nutsnews4];

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
                <i>Nuts News, 2023</i>
              </h4>
            </Card.Title>
            <Card.Text className=" w-75 mx-auto">
              Nuts News is a server-side rendering website meticulously crafted
              for optimal performance and enhanced Search Engine Optimization
              (SEO). Developed with the Next.js framework, this site leverages
              Client-Side Rendering (CSR), Static Site Generation (SSG), and
              Server-Side Rendering (SSR) techniques. The use of these advanced
              rendering strategies ensures superior SEO capabilities, optimized
              image loading, and overall improved user experience. In addition
              to Next.js, the technological stack includes HTML5, CSS3,
              JavaScript, Bootstrap, and CSS modules with Sass. This
              comprehensive blend of technologies contributes to the
              professional and polished design of the Nuts News website,
              delivering a seamless and feature-rich platform for users.
            </Card.Text>
            <Card.Text></Card.Text>
            <a
              href="https://newsapi-nextjs-two.vercel.app/"
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

export default NutsNews;
