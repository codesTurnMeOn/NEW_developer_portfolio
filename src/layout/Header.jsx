import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import particlesJS from "../../node_modules/particles.js/particles"; //must be here
import TsParticles from "../components/TsParticles";
import selfie from "../images/selfie.png";
import text2 from "../images/text2.png";
import NavBar from "./NavBar";
import { ThemeContext } from "../App";

export default function Header(props) {
  const themeContext = useContext(ThemeContext);


  // particale effect when loading
  useEffect(() => {
    let clause = window.innerWidth < 1000;
    TsParticles.particles.number.value = clause ? 40 : 80;
    window.particlesJS("particle", TsParticles);
  }, []);

  console.log("themeContext.scrollTop in header is: ", themeContext.scrollTop);

  return (
    <div id="header_container">
      {" "}
      <Container fluid>
        <div id="header_bg">
          {/* particle goes here */}
          <div className="wallpaper">
            <div
              id="particle"
              className={
                themeContext.theme === "light" ? "bg_light" : "bg_dark"
              }
            ></div>
          </div>
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

        <div className={themeContext.scrollTop > 150 ? "noShow" : "scrollIcon"}>
          <i className="scroll"></i>
        </div>
      </Container>
    </div>
  );
}
