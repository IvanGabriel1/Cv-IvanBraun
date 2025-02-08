import React from "react";
import imgCV from "../../assets/Foto-Cv.jpg";
import "./presentacion.css";
import Contacto from "../Contacto/Contacto";

const Presentacion = () => {
  return (
    <div className="presentacion-container">
      <img src={imgCV} alt="foto de curriculum Ivan Braun" />
      <section className="presentacion-info-content">
        <span className="presentacion-info-datos">
          <h1>CV - Iván Braun</h1>
          <h2>
            Desarrolador Web <br />
            Front - End
          </h2>
        </span>
      </section>
      <hr />
      <Contacto />
    </div>
  );
};

export default Presentacion;
