import React, { useEffect, useRef } from "react";
import Mures from "../portfolios/Mures";
import Saddler from "../portfolios/Saddler";
import Choice from "../portfolios/Choice";
import Sylinn from "../portfolios/Sylinn";
// import FoodRanger from "../portfolios/FoodRanger";
import MPTM from "../portfolios/MPTM";
import NutsNews from "../portfolios/NutsNews";
import Mogush from "../portfolios/Mogush.jsx";
import Allyoucan from "../portfolios/Allyoucan";
import Sylinn_full_stack from "../portfolios/Sylinn_full_stack";

export default function Projects() {
  const projectsRef = useRef(null);
  useEffect(() => {
    const anchorName = localStorage.getItem("anchor");

    if (anchorName === "projects") {
      const projectsElement = projectsRef.current;

      setTimeout(() => {
        projectsElement.scrollIntoView({ behavior: "smooth" });
      }, 500);

      localStorage.removeItem("anchor");
    }
  }, []);

  return (
    <div id="projects" ref={projectsRef}>
      <h1>Projects</h1>
      <Sylinn_full_stack/>
   
      <Allyoucan />
      
      <NutsNews />
    
      <MPTM />
       
      <Mogush />
     
      {/* <FoodRanger /> */}
 
      <Sylinn />
 
      <Saddler />
 
      <Choice />
    
      <Mures />
    </div>
  );
}
