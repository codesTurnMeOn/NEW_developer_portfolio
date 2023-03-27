import React from "react";
import NavBar from "../layout/NavBar";
import Footer from "../layout/Footer";
import Container from "react-bootstrap/Container";
// import "../scss/pages/_pageNotFound.scss";


function PageNotFound() {
  return (
    <>
      <NavBar />
      <div>
        <Container id="_404container"></Container>
        <div className="_404text">
          <span>
            You don't belong here, go{" "}
            <a href="/">
              <button className="btn">HOME</button>
            </a>
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PageNotFound;
