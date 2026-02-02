import { useState } from "react";
import "./accordion-proyectos.css";
import svgButtonUp from "../../assets/chevron-up-solid.svg";
import svgButtondown from "../../assets/chevron-down-solid.svg";

const AccordionProyectos = () => {
  const [openAccordion, setOpenAccordion] = useState(1); //pasar a null si hay mas proyectos que quiera mostrar

  const toggleAccPr = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="accordion-proyectos-container">
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
          Notis
        </button>
        <div
          className={`accordion-pr-content ${
            openAccordion === 1 ? "open-pr" : ""
          }`}
        >
          <h5>
            App de notificaciones - React Native y Expo (Bare Workflow / Dev
            Client)
          </h5>
          <p>
            Notis es una aplicación de notificaciones simples, claras y
            personalizables. Permite programar notificaciones únicas indicando
            hora y minutos específicos, y recibirlas correctamente incluso
            cuando la aplicación se encuentra en segundo plano o cerrada. Está
            pensada para usuarios que necesitan recordatorios puntuales, sin
            complejidad innecesaria y con una experiencia visual cuidada.
          </p>
          <section>
            Tecnologías utilizadas: React Native, Expo (Bare / Dev Client), Expo
            Notifications, Expo Task Manager & Background Fetch, Expo AV, React
            Navigation, Context API, AsyncStorage, EAS Build.
          </section>
          <a target="_blank" href="https://github.com/IvanGabriel1/notis">
            🔗
            <u>Ver repositorio</u>
          </a>
        </div>
      </article>
      {/* Proyecto 1 */}
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
          DespertApp
        </button>
        <div
          className={`accordion-pr-content ${
            openAccordion === 2 ? "open-pr" : ""
          }`}
        >
          <h5>Despertador - React Native</h5>
          <p>
            Desarrollé una aplicación móvil de alarmas utilizando React Native y
            Expo. Implementé creación, edición y borrado de alarmas, selección
            de sonidos personalizados y notificaciones locales programadas.
            Incorporé manejo de estado global mediante Context API y generé
            builds para Android con EAS Build.
          </p>
          <section>
            Tecnologías utilizadas: React Native, Expo, Context API, Expo
            Notifications, Expo AV, GitHub
          </section>
          <a target="_blank" href="https://github.com/IvanGabriel1/despertApp">
            🔗 <u>Ver repositorio</u>
          </a>
        </div>
      </article>

      {/* Proyecto 2 */}
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
          Aiskely’s Bakes
        </button>
        <div
          className={`accordion-pr-content ${
            openAccordion === 3 ? "open-pr" : ""
          }`}
        >
          <h5>E-commerce</h5>
          <p>
            Desarrollo de una tienda online que permite a los usuarios
            registrarse, filtrar productos por categoría, administrar un carrito
            de compras y realizar pedidos en tiempo real.
          </p>
          <section>
            <b>Tecnologías utilizadas: </b>
            React, Firebase (Storage, Database, Authentication), Redux Toolkit,
            EmailJS, CSS, HTML, GitHub.
          </section>
          <a target="_blank" href="https://aiskelys-bakes.vercel.app/">
            🔗
            <u>Ver proyecto</u>
          </a>
        </div>
      </article>
    </div>
  );
};

export default AccordionProyectos;
