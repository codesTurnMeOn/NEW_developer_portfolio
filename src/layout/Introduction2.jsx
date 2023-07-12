import React, { useState, useContext } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import frontend_graphic from "../images/frontend_graphic.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ThemeContext } from "../App";

function Introduction2() {
  const themeContext = useContext(ThemeContext);

  // const [showCursor, setShowCursor] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  // shower background image when hovering over
  const handleMouseEnter = (target) => {
    console.log("target is ", target);
    // replace default background with individual background of skill image
    if (target.classList.contains("default_light")) {
      target.classList.remove("default_light");
    } else if (target.classList.contains("default_dark")) {
      target.classList.remove("default_dark");
    } else return;
    target.style.opacity = 1;
  };

  console.log("showBackground is set to:", showBackground);

  return (
    <div id="intro" >
      <Container fluid>
        <h1>Introduction</h1>
        <div className={themeContext.theme === "light" ? "" : "darkTheme"}>
          <Row >
            <Col xs={12} sm={12} md={12} lg={8}>
              <div className="hexagonGrid">
                <div id="cursor"></div>

                <div class="row">
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                </div>

                <div class="row row-moved">
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div
                    className={`hexagon html_css_js ${
                      themeContext.theme === "light"
                        ? "default_light"
                        : "default_dark"
                    }`}
                    onMouseEnter={(e) => handleMouseEnter(e.target)}
                    style={{ opacity: showBackground ? 1 : 0 }}
                  ></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                </div>

                <div class="row">
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div
                    className={`hexagon nodejs ${
                      themeContext.theme === "light"
                        ? "default_light"
                        : "default_dark"
                    }`}
                    onMouseEnter={(e) => handleMouseEnter(e.target)}
                    style={{ opacity: showBackground ? 1 : 0 }}
                  ></div>
                  <div
                    className={`hexagon react ${
                      themeContext.theme === "light"
                        ? "default_light"
                        : "default_dark"
                    }`}
                    onMouseEnter={(e) => handleMouseEnter(e.target)}
                    style={{ opacity: showBackground ? 1 : 0 }}
                  ></div>
                  <div
                    className={`hexagon express ${
                      themeContext.theme === "light"
                        ? "default_light"
                        : "default_dark"
                    }`}
                    onMouseEnter={(e) => handleMouseEnter(e.target)}
                    style={{ opacity: showBackground ? 1 : 0 }}
                  ></div>
                  <div
                    className={`hexagon next ${
                      themeContext.theme === "light"
                        ? "default_light"
                        : "default_dark"
                    }`}
                    onMouseEnter={(e) => handleMouseEnter(e.target)}
                    style={{ opacity: showBackground ? 1 : 0 }}
                  ></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                </div>

                <div class="row row-moved">
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div
                    className={`hexagon mongodb ${
                      themeContext.theme === "light"
                        ? "default_light"
                        : "default_dark"
                    }`}
                    onMouseEnter={(e) => handleMouseEnter(e.target)}
                    style={{ opacity: showBackground ? 1 : 0 }}
                  ></div>
                  <div
                    className={`hexagon bootstrap ${
                      themeContext.theme === "light"
                        ? "default_light"
                        : "default_dark"
                    }`}
                    onMouseEnter={(e) => handleMouseEnter(e.target)}
                    style={{ opacity: showBackground ? 1 : 0 }}
                  ></div>
                  <div
                    className={`hexagon sass ${
                      themeContext.theme === "light"
                        ? "default_light"
                        : "default_dark"
                    }`}
                    onMouseEnter={(e) => handleMouseEnter(e.target)}
                    style={{ opacity: showBackground ? 1 : 0 }}
                  ></div>
                  <div
                    className={`hexagon ccp ${
                      themeContext.theme === "light"
                        ? "default_light"
                        : "default_dark"
                    }`}
                    onMouseEnter={(e) => handleMouseEnter(e.target)}
                    style={{ opacity: showBackground ? 1 : 0 }}
                  ></div>
                  <div
                    className={`hexagon saa ${
                      themeContext.theme === "light"
                        ? "default_light"
                        : "default_dark"
                    }`}
                    onMouseEnter={(e) => handleMouseEnter(e.target)}
                    style={{ opacity: showBackground ? 1 : 0 }}
                  ></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                </div>
                <div class="row">
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div
                    className={`hexagon mysql ${
                      themeContext.theme === "light"
                        ? "default_light"
                        : "default_dark"
                    }`}
                    onMouseEnter={(e) => handleMouseEnter(e.target)}
                    style={{ opacity: showBackground ? 1 : 0 }}
                  ></div>
                  <div
                    className={`hexagon typescript ${
                      themeContext.theme === "light"
                        ? "default_light"
                        : "default_dark"
                    }`}
                    onMouseEnter={(e) => handleMouseEnter(e.target)}
                    style={{ opacity: showBackground ? 1 : 0 }}
                  ></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                </div>

                <div class="row row-moved">
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div
                    className={`hexagon git ${
                      themeContext.theme === "light"
                        ? "default_light"
                        : "default_dark"
                    }`}
                    onMouseEnter={(e) => handleMouseEnter(e.target)}
                    style={{ opacity: showBackground ? 1 : 0 }}
                  ></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={4} className="introText">
              <Card.Body >
                <Card.Text>
                  <p >
                    Hi there, I'm a junior full-stack web developer based in
                    Melbourne. After 9 years working in the
                    bathroomware/kitchenware supplies industry, I decided to
                    return to web development area where I started with a
                    cerfificate IV in web design back in 2013. I am currently
                    studying Diploma of IT, specializing in front and back-end
                    web development at Holmesglen Institute.
                  </p>

                  <p>
                    As the ever-evolving field of web, my stack will be
                    constantly building and <span>expanding......</span>
                  </p>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Introduction2;
