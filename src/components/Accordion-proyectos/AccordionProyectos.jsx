import React, { useState } from "react";
import "./accordion-proyectos.css";
import svgButtonUp from "../../assets/chevron-up-solid.svg";
import svgButtondown from "../../assets/chevron-down-solid.svg";

const AccordionProyectos = () => {
  const [openAccordion, setOpenAccordion] = useState(null); // null para indicar que ninguno está abierto

  const toggleAccPr = (index) => {
    setOpenAccordion(openAccordion === index ? null : index); // Alternar entre abrir y cerrar
  };

  return (
    <div className="accordion-proyectos-container">
      {/* Proyecto 1 */}
      <article
        className={`accordion-pr-article ${
          openAccordion === 1 ? "open-pr" : ""
        }`}
      >
        <button className="accordion-pr-button" onClick={() => toggleAccPr(1)}>
          <img
            src={openAccordion === 1 ? svgButtonUp : svgButtondown}
            alt={openAccordion === 1 ? "Cerrar" : "Abrir"}
          />
          Aiskely`s Bakes
        </button>
        <div
          className={`accordion-pr-content ${
            openAccordion === 1 ? "open-pr" : ""
          }`}
        >
          <h5>E-commerce</h5>
          <p>
            Desarrollo de una tienda online que permite a los usuarios
            registrarse, filtrar productos por categoría, gestionar un carrito
            de compras y realizar pedidos en tiempo real.
          </p>
          <section>
            Tecnologías utilizadas: React, Firebase, Redux Toolkit, EmailJS,
            CSS, HTML
          </section>
          <a target="_blank" href="https://aiskelys-bakes.vercel.app/">
            <u>Ver proyecto</u>
          </a>
        </div>
      </article>

      {/* Proyecto 2 */}
      <article
        className={`accordion-pr-article ${
          openAccordion === 2 ? "open-pr" : ""
        }`}
      >
        <button className="accordion-pr-button" onClick={() => toggleAccPr(2)}>
          <img
            src={openAccordion === 2 ? svgButtonUp : svgButtondown}
            alt={openAccordion === 2 ? "Cerrar" : "Abrir"}
          />
          Pumba
        </button>
        <div
          className={`accordion-pr-content ${
            openAccordion === 2 ? "open-pr" : ""
          }`}
        >
          <h5>Proyecto final curso React.js | Coderhause</h5>
          <p>
            En dicho proyecto se realiza como trabajo final del curso de
            coderhause, en el cual se desarrolla un e-commerce con gestion de
            datos en firebase, permite filtrar productos por categoría, sumar al
            carrito, ver el detalle del carrito y realizar un codigo endpoint
            del pedido realizado.
          </p>
          <section>Tecnologías utilizadas: React, Firebase, CSS, HTML</section>
          <a
            target="_blank"
            href="https://e-commerce-react-lime-phi.vercel.app/"
          >
            <u>Ver proyecto</u>
          </a>
        </div>
      </article>

      {/* Proyecto 3 */}
      <article
        className={`accordion-pr-article ${
          openAccordion === 3 ? "open-pr" : ""
        }`}
      >
        <button className="accordion-pr-button" onClick={() => toggleAccPr(3)}>
          <img
            src={openAccordion === 3 ? svgButtonUp : svgButtondown}
            alt={openAccordion === 3 ? "Cerrar" : "Abrir"}
          />
          Practica final CSS - Paginá de Olé con HTML y CSS
        </button>
        <div
          className={`accordion-pr-content ${
            openAccordion === 3 ? "open-pr" : ""
          }`}
        >
          <h5>Se copía la página de ole con html y css</h5>
          <p>
            Como practica final de CSS realice una copia de su interfaz del
            diario deportivo Olé con HTML y CSS desde cero. El objetivo de este
            proyecto fue poner a prueba mis habilidades aprendidas de forma
            autodidacta.
          </p>
          <section>Tecnologías utilizadas: HTML, CSS</section>
          <a target="_blank" href="https://copiando-plantilla.vercel.app/">
            <u>Ver proyecto</u>
          </a>
        </div>
      </article>

      {/* Proyecto 4 */}
      <article
        className={`accordion-pr-article ${
          openAccordion === 4 ? "open-pr" : ""
        }`}
      >
        <button className="accordion-pr-button" onClick={() => toggleAccPr(4)}>
          <img
            src={openAccordion === 4 ? svgButtonUp : svgButtondown}
            alt={openAccordion === 4 ? "Cerrar" : "Abrir"}
          />
          Página de Practica - Megalodón
        </button>
        <div
          className={`accordion-pr-content ${
            openAccordion === 4 ? "open-pr" : ""
          }`}
        >
          <h5>Primera página realizada desde 0.</h5>
          <p>
            Proyecto de broma con tematica absurda donde se realiza una página
            web de una pagina Single Page, donde se ofrece servicios absurdos,
            opiniones de sus clientes y un formulario de contacto.
          </p>
          <section>Tecnologías utilizadas: HTML, CSS</section>
          <a target="_blank" href="https://megalodon-dun.vercel.app/">
            <u>Ver proyecto</u>
          </a>
        </div>
      </article>
    </div>
  );
};

export default AccordionProyectos;
