import { useState } from "react";
import "./accordion-universidad.css";

import tituloMartillero from "../../assets/titulo-martillero.png";
import presentacionTecnicatura from "../../assets/presentacion-tecnicatura.png";

import logoUsal from "../../assets/usal-logo.png";
import logoUTN from "../../assets/logo-utn.jpeg";

const AccordionUniversidad = () => {
  const [openModal, setOpenModal] = useState(null);

  const toggleModal = (index) => {
    setOpenModal(openModal === index ? null : index);
  };

  const closeModal = () => {
    setOpenModal(null);
  };

  return (
    <div className="universidad-container">
      <div
        className={`modal-content ${openModal === null ? ` ` : `open-modal`}`}
      >
        <button className="close-modal" onClick={closeModal}></button>
        {openModal === 1 && (
          <img
            src={presentacionTecnicatura}
            alt="Fecha de inicio de curso y comisión."
            className="modal-img"
          />
        )}
        {openModal === 2 && (
          <img
            src={tituloMartillero}
            alt="Certificado React"
            className="modal-img"
          />
        )}
      </div>

      <article className="article-un" onClick={() => toggleModal(1)}>
        <img src={logoUTN} alt="Logo de la universidad tecnologica nacional" />
        <h5>
          Tecnicatura Universitaria en Programación: {<br />} Inicio confirmado:
          Marzo 2026
        </h5>

        <img
          src={presentacionTecnicatura}
          alt="Presentacion de la tecnicatura."
        />
      </article>

      <article className="article-un" onClick={() => toggleModal(2)}>
        <img src={logoUsal} alt="Logo de la universidad del salvador" />
        <h5>Martillero Publico y Corredor Universitario</h5>
        <img
          src={tituloMartillero}
          alt="Titulo de martillero y corredor universitario."
        />
      </article>
    </div>
  );
};

export default AccordionUniversidad;
