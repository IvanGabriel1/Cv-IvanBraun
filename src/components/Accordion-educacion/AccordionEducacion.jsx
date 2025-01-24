import React, { useState } from "react";
import "./accordion-educacion.css";
import svgButtonUp from "../../assets/chevron-up-solid.svg";
import svgButtondown from "../../assets/chevron-down-solid.svg";
import certificadoEgg from "../../assets/Certificado-egg.jpeg";
import certificadoJs from "../../assets/Certificado-coder-js.png";
import certificadoReact from "../../assets/Certificado-coder-react.png";
import certificadoTesting from "../../assets/Certificado-coder-testingQA.png";
import logoEgg from "../../assets/logo-egg.jpg";
import logoCoder from "../../assets/coderhouse-logo.png";

const AccordionEducacion = () => {
  const [isOpenAccordionEducacion, setIsOpenAccordionEducacion] =
    useState(false);

  const toggleAccEd = () =>
    setIsOpenAccordionEducacion(!isOpenAccordionEducacion);

  const [openAccordionModal, setOpenAccordionModal] = useState(null);

  const toggleAccEdModal = (index) => {
    setOpenAccordionModal(openAccordionModal === index ? null : index);
  };

  const closeModal = () => {
    setOpenAccordionModal(null);
  };

  return (
    <div className="accordion-educacion-container">
      {openAccordionModal && (
        <article
          className={`modal-educacion ${
            openAccordionModal === null ? "" : "open-modal"
          }`}
        >
          <div className="modal-content">
            <button className="close-modal" onClick={closeModal}>
              Cerrar
            </button>
            {openAccordionModal === 1 && (
              <img
                src={certificadoReact}
                alt="Certificado React"
                className="modal-img"
              />
            )}
            {openAccordionModal === 2 && (
              <img
                src={certificadoJs}
                alt="Certificado JavaScript"
                className="modal-img"
              />
            )}
            {openAccordionModal === 3 && (
              <img
                src={certificadoTesting}
                alt="Certificado Testing QA"
                className="modal-img"
              />
            )}
            {openAccordionModal === 4 && (
              <img
                src={certificadoEgg}
                alt="Certificado Programacion desde Cero"
                className="modal-img"
              />
            )}
          </div>
        </article>
      )}

      <button
        className={`accordion-ed-button ${
          isOpenAccordionEducacion ? `open` : ` `
        }`}
        onClick={toggleAccEd}
      >
        <img
          src={isOpenAccordionEducacion ? svgButtonUp : svgButtondown}
          alt={isOpenAccordionEducacion ? "Cerrar" : "Abrir"}
        />
        {isOpenAccordionEducacion ? (
          <h4>Cerrar acordion</h4>
        ) : (
          <h4>Abrir acordion</h4>
        )}
      </button>

      <div
        className={`accordion-ed-content ${
          isOpenAccordionEducacion ? `open` : ``
        }`}
      >
        <article
          className="article-ed-accordion"
          onClick={() => toggleAccEdModal(1)}
        >
          <img src={logoCoder} alt="Logo de Coderhouse" />
          <h5>React JS</h5>
          <img
            src={certificadoReact}
            alt="Certificado React.js, en Coderhouse."
          />
        </article>

        <article
          className="article-ed-accordion"
          onClick={() => toggleAccEdModal(2)}
        >
          <img src={logoCoder} alt="Logo de Coderhouse" />
          <h5>JavaScript</h5>
          <img
            src={certificadoJs}
            alt="Certificado JavaScript, en Coderhouse."
          />
        </article>
        <article
          className="article-ed-accordion"
          onClick={() => toggleAccEdModal(3)}
        >
          <img src={logoCoder} alt="Logo de Coderhouse" />
          <h5>Testing QA Manual</h5>
          <img
            src={certificadoTesting}
            alt="Certificado Testing QA Manual, en Coderhouse."
          />
        </article>
        <article
          className="article-ed-accordion"
          onClick={() => toggleAccEdModal(4)}
        >
          <img src={logoEgg} alt="Logo de Egg corporation" />
          <h5>Programacción desde Cero</h5>
          <img
            src={certificadoEgg}
            alt="Certificado Programacion desde 0, en egg."
          />
        </article>
      </div>
    </div>
  );
};

export default AccordionEducacion;
