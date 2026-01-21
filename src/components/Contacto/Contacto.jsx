import React from "react";
import "./contacto.css";

const Contacto = () => {
  return (
    <div className="contacto-container">
      <h3>Contacto:</h3>
      <ul className="contacto-ul">
        <li className="contacto-ul-tel">
          <a href={`tel: (+54) 11-59785291`}>📞Teléfono: +54 11 5978 5291 </a>
        </li>
        <li className="contacto-ul-email">
          <a href={`mailto: ivangabraun@gmail.com`}>
            ✉️Email: ivangabraun@gmail.com
          </a>
        </li>
        <li>
          🧑‍💼
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/iv%C3%A1n-braun-a690aa17a/"
          >
            LinkedIn
          </a>
        </li>
        <li>
          🐈‍⬛
          <a target="_blank" href="https://github.com/IvanGabriel1">
            GitHub
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contacto;
