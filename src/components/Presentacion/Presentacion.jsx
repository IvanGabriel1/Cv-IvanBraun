import React from "react";
import imgCV from "../../assets/Foto-Cv.jpg";
import "./presentacion.css";

const Presentacion = () => {
  return (
    <div className="presentacion-container">
      <img src={imgCV} alt="foto de curriculum Ivan Braun" />
      <section className="presentacion-info-content">
        <span className="presentacion-info-datos">
          <h1>CV - Iván Braun</h1>
          <h2>
            Desarrolador web <br />
            Front - End
          </h2>
        </span>
        <div className="presentacion-qr">QR / Video</div>
      </section>
    </div>
  );
};

export default Presentacion;
