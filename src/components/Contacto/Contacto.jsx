import React from "react";
import "./contacto.css";

const Contacto = () => {
  return (
    <div className="contacto-container">
      <h3>Contacto:</h3>
      <ul className="contacto-ul">
        <li>📞 Teléfono: +541159785291</li>
        <li>✉️ Email: ivangabraun@gmail.com</li>
        <li>
          🧑‍💼
          <a href="https://linkedin.com/in/usuario">LinkedIn</a>
        </li>
        <li>
          🐈‍⬛
          <a href="https://github.com/usuario">GitHub</a>
        </li>
      </ul>
    </div>
  );
};

export default Contacto;
