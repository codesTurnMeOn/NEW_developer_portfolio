import React, { useState, useContext } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import frontend_graphic from "../images/frontend_graphic.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ThemeContext } from "../App";
import Balancer from "react-wrap-balancer";
import TechStack from "./TechStack";

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
    <div id="intro">
      <Container fluid>
        <h1>Introduction</h1>
        <div className={themeContext.theme === "light" ? "" : "darkTheme"}>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={8}>
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
                    className={`hexagon svelte ${
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
                  <div
                    className={`hexagon graphql ${
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
                </div>

                <div class="row row-moved">
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div class="hexagon"></div>
                  <div
                    className={`hexagon docker ${
                      themeContext.theme === "light"
                        ? "default_light"
                        : "default_dark"
                    }`}
                    onMouseEnter={(e) => handleMouseEnter(e.target)}
                    style={{ opacity: showBackground ? 1 : 0 }}
                  ></div>
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
            <Col xs={12} sm={12} md={12} lg={12} xl={4} className="introText">
              <Card.Body>
                <Card.Text>
                  <Balancer>
                    <p>
                      {" "}
                      I'm a budget traveller, a dog person and full-stack web
                      developer based in Melbourne Australia. I love building
                      things on web and always embrace changes.
                    </p>{" "}
                    <p>
                      After 9 years working in the bathroomware/kitchenware
                      supplies industry, I decided to return to web development
                      area where I started with a certificate IV in web design.
                    </p>
                    <p>
                      I am specialized in front-end, back-end and in between web
                      dev. Here are the technologies I was currently working
                      with:
                    </p>
                    {/* <span>
                      ["HTML","CSS","Javascript",node.js","Svelte.js","React.js","Express.js",
                      "Next.js","MongoDB","MySQL","Bootstrap0","Sass","Typescript","GraphQL","Docker","Git"]
                    </span> */}
                    <TechStack />
                  
                  </Balancer>
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
