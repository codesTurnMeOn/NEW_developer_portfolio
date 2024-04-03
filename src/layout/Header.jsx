import React, { useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import particlesJS from "particles.js"; //must be here
import TsParticles from "../components/TsParticles";
import selfie from "../images/selfie.png";
import text2 from "../images/text2.png";
import NavBar from "./NavBar";
import { ThemeContext } from "../App";
import heroVideo from "../images/heroVideo.mp4";

export default function Header(props) {
  const themeContext = useContext(ThemeContext);

  // // particale effect when loading
  // useEffect(() => {
  //   let clause = window.innerWidth < 1000;
  //   TsParticles.particles.number.value = clause ? 40 : 80;
  //   window.particlesJS("particle", TsParticles);
  // }, []);

  // console.log("themeContext.scrollTop in header is: ", themeContext.scrollTop);

  return (
    <div
      id="header_container"
      className={`overlay ${
        themeContext.theme === "light" ? "overlay_light" : "overlay_dark"
      }`}
    >
      <Container fluid>
        <div id="header_bg">
          <video autoPlay loop muted class="video">
            <source src={heroVideo} type="video/mp4" />
          </video>
          {/* <div
            id="particle"
            className={themeContext.theme === "light" ? "bg_light" : "bg_dark"}
          ></div> */}
        </div>
        <NavBar />

        <div className={themeContext.scrollTop > 150 ? "noShow" : "scrollIcon"}>
          <i className="scroll"></i>
        </div>
      </Container>
    </div>
  );
}
