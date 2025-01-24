import React from "react";
import "./proyectos.css";
import AccordionProyectos from "../Accordion-proyectos/AccordionProyectos";

const Proyectos = () => {
  return (
    <div className="proyectos-container">
      <h3>Proyectos:</h3>
      <AccordionProyectos />
    </div>
  );
};

export default Proyectos;
