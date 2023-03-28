import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import videoSource from "../images/istockphoto-1345482395-640_adpp_is.mp4";
import header_bg_dark from "../images/header_bg_dark.png";
import header_bg_light from "../images/header_bg_light.png";
import selfie from "../images/selfie.png";
import text2 from "../images/text2.png";
import NavBar from "./NavBar";
import { ThemeContext } from "../App";

export default function Header(props) {
  const themeContext = useContext(ThemeContext);

  return (
    <div id="header_container">
      <Container fluid>
        <div id="header_bg">
          <img
            src={
              themeContext.theme === "light" ? header_bg_light : header_bg_dark
            }
            alt="background"
            className="img-fluid"
          />
          <video autoPlay muted loop>
            <source src={videoSource} type="video/mp4" />
          </video>
        </div>
        <NavBar />
        <div id="title" className="position-relative">
          <div class="text">
            <img src={selfie} height="auto" alt="selfie" />
            <span>Hi, I'm Lei</span>
          </div>
          <div class="text2">
            <img src={text2} alt="I MAKE WEBSITES" className="img-fluid" />
          </div>
        </div>
      </Container>
    </div>
  );
}
