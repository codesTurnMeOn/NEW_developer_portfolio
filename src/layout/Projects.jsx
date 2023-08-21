import React, { useEffect, useRef } from "react";
import Mures from "../portfolios/Mures";
import Saddler from "../portfolios/Saddler";
import Choice from "../portfolios/Choice";
import Sylinn from "../portfolios/Sylinn";
import FoodRanger from "../portfolios/FoodRanger";
import NutsNews from "../portfolios/NutsNews";
import Mogush from "../portfolios/Mogush.jsx";

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
      {/* Nuts News */}
      <NutsNews />
      {/* Mogush_vet EMR */}
      <Mogush />
      {/* FOOD RANGER.CO */}
      <FoodRanger />
      {/* SLINN BATHROOMS */}
      <Sylinn />

      {/* MURES */}
      <Mures />

      {/* TENTERFIELD SADDLER */}
      <Saddler />

      {/* CHOICE BATHROOMS */}
      <Choice />
    </div>
  );
}
