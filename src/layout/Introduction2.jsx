import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ThemeContext } from "../App";
import TechStack from "./TechStack";

function Introduction2() {
  const themeContext = useContext(ThemeContext);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleSetBackGround = () => {
    const hexagons = document.querySelectorAll(".hexagon");

    for (let i = 0; i < hexagons.length; i++) {
      if (hexagons[i].classList.contains("default_light")) {
        hexagons[i].classList.remove("default_light");
      } else if (hexagons[i].classList.contains("default_dark")) {
        hexagons[i].classList.remove("default_dark");
      }
      hexagons[i].style.opacity = 1;
    }
  };

  //set a delay timer to show skill background
  const setTimer = function () {
    setIsLoaded(true);
    setTimeout(handleSetBackGround, 1000);
    return () => clearTimeout(setTimer);
  };

  return (
    <div id="intro" onMouseMove={setTimer}>
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
                  <div class="hexagon"></div>

                  <div
                    className={`hexagon html_css_js ${
                      themeContext.theme === "light"
                        ? "default_light"
                        : "default_dark"
                    }`}
                  ></div>
                  <div
                    className={`hexagon php ${
                      themeContext.theme === "light"
                        ? "default_light"
                        : "default_dark"
                    }`}
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
                  ></div>
                  <div
                    className={`hexagon react ${
                      themeContext.theme === "light"
                        ? "default_light"
                        : "default_dark"
                    }`}
                  ></div>
                  <div
                    className={`hexagon express ${
                      themeContext.theme === "light"
                        ? "default_light"
                        : "default_dark"
                    }`}
                  ></div>
                  <div
                    className={`hexagon next ${
                      themeContext.theme === "light"
                        ? "default_light"
                        : "default_dark"
                    }`}
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
                  ></div>
                  <div
                    className={`hexagon bootstrap ${
                      themeContext.theme === "light"
                        ? "default_light"
                        : "default_dark"
                    }`}
                  ></div>
                  <div
                    className={`hexagon sass ${
                      themeContext.theme === "light"
                        ? "default_light"
                        : "default_dark"
                    }`}
                  ></div>
                  <div
                    className={`hexagon dva ${
                      themeContext.theme === "light"
                        ? "default_light"
                        : "default_dark"
                    }`}
                  ></div>
                  <div
                    className={`hexagon saa ${
                      themeContext.theme === "light"
                        ? "default_light"
                        : "default_dark"
                    }`}
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
                  ></div>
                  <div
                    className={`hexagon vanillaExtract ${
                      themeContext.theme === "light"
                        ? "default_light"
                        : "default_dark"
                    }`}
                  ></div>
                  <div
                    className={`hexagon graphql ${
                      themeContext.theme === "light"
                        ? "default_light"
                        : "default_dark"
                    }`}
                  ></div>
                  <div
                    className={`hexagon firestore ${
                      themeContext.theme === "light"
                        ? "default_light"
                        : "default_dark"
                    }`}
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
                  <div class="hexagon"></div>
                  <div
                    className={`hexagon docker ${
                      themeContext.theme === "light"
                        ? "default_light"
                        : "default_dark"
                    }`}
                  ></div>
                  <div
                    className={`hexagon git ${
                      themeContext.theme === "light"
                        ? "default_light"
                        : "default_dark"
                    }`}
                  ></div>
                  <div
                    className={`hexagon typescript ${
                      themeContext.theme === "light"
                        ? "default_light"
                        : "default_dark"
                    }`}
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
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={4} className="introText">
              <Card.Body>
                <Card.Text>
                  {/* <Balancer> */}
                  <p>
                    {" "}
                    I'm a budget traveler, a dog person, and a passionate
                    full-stack web developer based in Melbourne. I have a
                    profound love for building things on the web and always
                    embrace positive changes.
                  </p>{" "}
                  <p>
                    After gaining 9 years of valuable experience in the
                    bathroomware supplies industry, I made the decision to
                    return to my roots in web development, starting with a
                    certificate IV in web design.
                  </p>
                  <p>
                    I specialize in front-end web dev and back-end with the help
                    of Node stack and have expertise in a wide range of
                    technologies. Here are the technologies I am currently
                    working with:
                  </p>
                  <TechStack isLoaded={isLoaded} />
                  {/* </Balancer> */}
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
