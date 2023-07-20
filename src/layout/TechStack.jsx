import React from "react";

function TechStack() {
  const vsCodeText = "#d4d4d4";
//   const vsCodeEditorBackground = "#2d2d2d";
  const vsCodeString = "#eb7b4d";
//   const vsCodePunctuation = "#4ec9b0";
  const vsCodeBracket = "#3992db";

  const codeThemeStyle = {
    color: vsCodeText,
    lineHeight: 1.6,
  };

  const arrayStyle = {
    padding: "5px",
    borderRadius: "5px",
    fontSize: "1.1rem",
    whiteSpace: "pre-wrap",
    color: vsCodeBracket,
    wordwrap:"break"
  };

  const commaStyle = {
    color: vsCodeBracket,
  };

  const bracketStyle = {
    color: vsCodeString,
  };

  return (
    <div className="container">
      <div style={codeThemeStyle}>
        <span style={arrayStyle}>
          [<span style={bracketStyle}>"HTML"</span>
          <span style={commaStyle}>,</span>
          <span style={bracketStyle}>"CSS"</span>
          <span style={commaStyle}>,</span>
          <span style={bracketStyle}>"Javascript"</span>
          <span style={commaStyle}>,</span>
          <span style={bracketStyle}>"Node.js"</span>
          <span style={commaStyle}>,</span>
          <span style={bracketStyle}>"Svelte.js"</span>
          <span style={commaStyle}>,</span>
          <span style={bracketStyle}>"React.js"</span>
          <span style={commaStyle}>,</span>
          <span style={bracketStyle}>"Express.js"</span>
          <span style={commaStyle}>,</span>
          <span style={bracketStyle}>"Next.js"</span>
          <span style={commaStyle}>,</span> 
          <br />
          <span style={bracketStyle}>"MongoDB"</span>
          <span style={commaStyle}>,</span>
          <span style={bracketStyle}>"MySQL"</span>
          <span style={commaStyle}>,</span>
          <span style={bracketStyle}>"Bootstrap"</span>
          <span style={commaStyle}>,</span>
          <span style={bracketStyle}>"Sass"</span>
          <span style={commaStyle}>,</span>
          <span style={bracketStyle}>"Typescript"</span>
          <span style={commaStyle}>,</span>
          <span style={bracketStyle}>"GraphQL"</span>
          <span style={commaStyle}>,</span>
          <span style={bracketStyle}>"Docker"</span>
          <span style={commaStyle}>,</span>
          <span style={bracketStyle}>"Git"</span> ]
        </span>
      </div>
    </div>
  );
}
export default TechStack;
