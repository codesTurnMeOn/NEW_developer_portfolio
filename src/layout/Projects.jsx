import React from "react";
import Mures from "../portfolios/Mures";
import Saddler from "../portfolios/Saddler";
import Choice from "../portfolios/Choice";
import Sylinn from "../portfolios/Sylinn";
import FoodRanger from "../portfolios/FoodRanger";



export default function Projects() {
  return (
    <div id="projects">
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
