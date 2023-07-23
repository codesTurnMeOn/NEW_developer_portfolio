import React from "react";

function TechStack() {
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
          <span style={textStyle}>"Typescript"</span>
          {"]"}
          <br />
          <span style={categoryStyle}>{'"Back-end": '}</span>
          {"["}
          <span style={textStyle}>"Node.js"</span>
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
          <span style={textStyle}>"MySQL"</span>
          <span style={textStyle}>, </span>
          <span style={textStyle}>"Docker"</span>
          {"]"}
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
          <span style={textStyle} id="typing">"Photoshop"</span>
          {" ]"}
          <br />
          <span style={bracketStyle}>{"}"}</span>
        </span>
      </div>
    </div>
  );
}

export default TechStack;
