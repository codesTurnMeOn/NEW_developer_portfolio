import React, { useState, useEffect, useContext } from "react";
import linkedin from "../images/linkedin.png";
import facebook from "../images/facebook.png";
import github from "../images/github.png";
import { Navbar, Container, Nav } from "react-bootstrap";
import ThemeToggler from "../components/ThemeToggler";
import { textColorContext } from "../pages/Home";
import back_to_top from "../images/back_to_top.png";

export default function NavBar() {
  const textColor = useContext(textColorContext);

  console.log(textColor);
  //use scroll position to change Navbar background color
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setScrollPos(window.pageYOffset + 1);
  };

  return (
  
    <>
      <div id="navbar">
        <Container fluid>
          <Navbar
            collapseOnSelect
            expand="lg"
            z-index="1"
            sticky="top"
            variant="dark"
            onClick={handleClick}
            style={{
              position: "fixed",
              width: "100%",
              alignItems: "center",
            }}
            className={
              scrollPos > 0
                ? "scrolled  not_found_bg shadow"
                : "transparent  not_found_bg"
            }
          >
            <Container fluid>
              <Navbar.Brand href="#home">
                <div className="navbarBrand">
                  <a
                    href="https://github.com/codesTurnMeOn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={github} alt="github"></img>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/lei-wang-99045267"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={linkedin} alt="linkedin"></img>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100062636119270"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={facebook} alt="facebook"></img>
                  </a>
                  <ThemeToggler />
                </div>
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
                style={{ color: "white" }}
              />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link
                    href="#qualification"
                    className={textColor ? "text-light" : "text-color"}
                  >
                    Qualifications
                  </Nav.Link>
                  <Nav.Link
                    href="#projects"
                    className={textColor ? "text-light" : "text-color"}
                  >
                    Projects
                  </Nav.Link>
                  <Nav.Link
                    href="/*"
                    className={textColor ? "text-light" : "text-color"}
                  >
                    Contact
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      </div>
      <div
        id="backToTopBtn"
        style={scrollPos > 1000 ? { display: "block" } : { display: "none" }}
      >
        <a href="#header_container">
          <img src={back_to_top} alt="back to top" />
        </a>
      </div>
    </>
  );
}
