import React, { useState } from "react";
import "./accordion-educacion.css";

import certificadoEgg from "../../assets/Certificado-egg.jpeg";
import certificadoJs from "../../assets/Certificado-coder-js.png";
import certificadoReact from "../../assets/Certificado-coder-react.png";
import certificadoTesting from "../../assets/Certificado-coder-testingQA.png";
import certificadoDesarrolloApp from "../../assets/Certificado-coder-desarrolloApp.png";
import cursoSQL from "../../assets/Curso-SQL.png";
import logoEgg from "../../assets/logo-egg.jpg";
import logoCoder from "../../assets/coderhouse-logo.png";

const AccordionEducacion = () => {
  const [openModal, setOpenModal] = useState(null);

  const toggleModal = (index) => {
    setOpenModal(openModal === index ? null : index);
  };

  const closeModal = () => {
    setOpenModal(null);
  };

  return (
    <div className="educacion-container">
      <div
        className={`modal-content ${openModal === null ? ` ` : `open-modal`}`}
      >
        <button className="close-modal" onClick={closeModal}></button>
        {openModal === 1 && (
          <img
            src={cursoSQL}
            alt="Fecha de inicio de curso y comisión."
            className="modal-img"
          />
        )}
        {openModal === 2 && (
          <img
            src={certificadoDesarrolloApp}
            alt="Certificado React"
            className="modal-img"
          />
        )}
        {openModal === 3 && (
          <img
            src={certificadoReact}
            alt="Certificado React"
            className="modal-img"
          />
        )}
        {openModal === 4 && (
          <img
            src={certificadoJs}
            alt="Certificado JavaScript"
            className="modal-img"
          />
        )}
        {openModal === 5 && (
          <img
            src={certificadoTesting}
            alt="Certificado Testing QA"
            className="modal-img"
          />
        )}
        {openModal === 6 && (
          <img
            src={certificadoEgg}
            alt="Certificado Programacion desde Cero"
            className="modal-img"
          />
        )}
      </div>

      <article className="article-ed" onClick={() => toggleModal(1)}>
        <img src={logoCoder} alt="Logo de Coderhouse" />
        <h5>SQL</h5>
        <img src={cursoSQL} alt="Fecha de inicio de curso y comisión." />
      </article>

      <article className="article-ed" onClick={() => toggleModal(2)}>
        <img src={logoCoder} alt="Logo de Coderhouse" />
        <h5>Desarrollo de Aplicaciones</h5>
        <img
          src={certificadoDesarrolloApp}
          alt="Certificado desarrollo de aplicaciones en Coderhouse."
        />
      </article>

      <article className="article-ed" onClick={() => toggleModal(3)}>
        <img src={logoCoder} alt="Logo de Coderhouse" />
        <h5>React JS</h5>
        <img
          src={certificadoReact}
          alt="Certificado React.js, en Coderhouse."
        />
      </article>

      <article className="article-ed" onClick={() => toggleModal(4)}>
        <img src={logoCoder} alt="Logo de Coderhouse" />
        <h5>JavaScript</h5>
        <img src={certificadoJs} alt="Certificado JavaScript, en Coderhouse." />
      </article>

      <article className="article-ed" onClick={() => toggleModal(5)}>
        <img src={logoCoder} alt="Logo de Coderhouse" />
        <h5>Testing QA Manual</h5>
        <img
          src={certificadoTesting}
          alt="Certificado Testing QA Manual, en Coderhouse."
        />
      </article>

      <article className="article-ed" onClick={() => toggleModal(6)}>
        <img src={logoEgg} alt="Logo de Egg corporation" />
        <h5>Programacción desde Cero</h5>
        <img
          src={certificadoEgg}
          alt="Certificado Programacion desde 0, en egg."
        />
      </article>
    </div>
  );
};

export default AccordionEducacion;
