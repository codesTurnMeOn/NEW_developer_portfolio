import React, { useEffect, useRef } from "react";
import Mures from "../portfolios/Mures";
import Saddler from "../portfolios/Saddler";
import Choice from "../portfolios/Choice";
import Sylinn from "../portfolios/Sylinn";
import FoodRanger from "../portfolios/FoodRanger";

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
      {/* MURES */}
      <Mures />

      {/* TENTERFIELD SADDLER */}
      <Saddler />

      {/* CHOICE BATHROOMS */}
      <Choice />

      {/* SLINN BATHROOMS */}
      <Sylinn />

      {/* FOOD RANGER.CO */}
      <FoodRanger />
    </div>
  );
}
