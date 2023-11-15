import React from "react";

function TechStack({ isLoaded }) {
  // if (isLoaded === true) {
  //   const typingElement = document.getElementById("typing");
  //   // typingElement.style.animationPlayState = "running";
  // } else return;

  const vsCodeOrange = "#d69d85";
  const vsCodePurple = "#a348a4";
  const vsCodeBlue = "#3992db";
  const vsCodeGreen = "#4caf50";

  const codeThemeStyle = {
    lineHeight: 1.6,
  };

  const arrayStyle = {
    padding: "5px",
    borderRadius: "5px",
    fontSize: "1.1rem",
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
    color: vsCodePurple,
  };

  const categoryStyle = {
    color: vsCodeBlue,
  };

  const bracketStyle = {
    color: vsCodeGreen,
  };

  const textStyle = {
    color: vsCodeOrange,
  };
  return (
    <div className="container">
      <div style={codeThemeStyle}>
        <span style={arrayStyle}>
          <span style={bracketStyle}>{"{"}</span>
          <br />
          <span style={categoryStyle}>{'"Front-end": '}</span>
          {"["}
          <span style={textStyle}>"HTML"</span>
          <span style={textStyle}>, </span>
          <span style={textStyle}>"CSS"</span>
          <span style={textStyle}>, </span>
          <span style={textStyle}>"Javascript"</span>
          <span style={textStyle}>, </span>
          <span style={textStyle}>"Svelte.js"</span>
          <span style={textStyle}>, </span>
          <span style={textStyle}>"React.js"</span>
          <span style={textStyle}>, </span>
          <span style={textStyle}>"Bootstrap"</span>
          <span style={textStyle}>, </span>
          <span style={textStyle}>"Sass"</span>
          <span style={textStyle}>, </span>
          <span style={textStyle}>"Vanilla Extract"</span>
          <span style={textStyle}>, </span>
          <span style={textStyle}>"Typescript"</span>
          <span style={textStyle}>, </span>
          <span style={textStyle}>"EJS"</span>
          {"]"}
          <br />
          <span style={categoryStyle}>{'"Back-end": '}</span>
          {"["}
          <span style={textStyle}>"Node.js"</span>
          <span style={textStyle}>, </span>
          <span style={textStyle}>"PHP"</span>
          <span style={textStyle}>, </span>
          <span style={textStyle}>"Express.js"</span>
          <span style={textStyle}>, </span>
          <span style={textStyle}>"Next.js"</span>
          <span style={textStyle}>, </span>
          <span style={textStyle}>"GraphQL"</span>
          {"]"}
          <br />
          <span style={categoryStyle}>{'"Data base": '}</span>
          {"["}
          <span style={textStyle}>"MongoDB"</span>
          <span style={textStyle}>, </span>
          <span style={textStyle}>"MySQL"</span>{" "}
          <span style={textStyle}>, </span>
          <span style={textStyle}>"Firestore"</span>
          {"]"}
          <br />
          {/* Dev Tools */}
          <span style={categoryStyle}>{'"Dev Tools": '}</span>
          {"[ "}
          <span style={textStyle}>"Docker"</span>
          <span style={textStyle}>, </span>
          <span style={textStyle}>"Github"</span>
          <span style={textStyle}>, </span>
          <span style={textStyle}>"Dreamweaver"</span>
          {" ]"}
          <br />
          {/* AWS category */}
          <span style={categoryStyle}>{'"AWS": '}</span>
          {"[ "}
          <span style={textStyle}>"Cloud Practitioner"</span>
          <span style={textStyle}>, </span>
          <span style={textStyle}>"Solutions Architect-Associate"</span>
          {" ]"}
          <br />
          <span style={categoryStyle}>{'"Graphic": '}</span>
          {"[ "}
          <span style={textStyle} className={isLoaded ? "typing" : ""}>
            {isLoaded ? "Photoshop" : ""}
          </span>
          {" ]"}
          <br />
          <span style={bracketStyle}>{"}"}</span>
        </span>
      </div>
    </div>
  );
}

export default TechStack;
