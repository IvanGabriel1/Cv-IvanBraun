import "./perfil-profesional.css";
import HardSkills from "../Hard-Skills/HardSkills";

const PerfilProfesional = () => {
  return (
    <div className="perfil-profesional-container">
      <section className="perfil-profesional-section">
        <h3 className="perfil-title">Perfil Profesional</h3>

        <p className="perfil-text">
          Desarrollador Front-End con experiencia en React, JavaScript, HTML,
          CSS y Firebase. Constante y orientado a resultados, con compromiso en
          el aprendizaje continuo y en la aplicación de buenas prácticas.
          Disponible para integrarme a un equipo aportando dedicación y solidez
          técnica.
        </p>

        <div className="perfil-hardskills-wrapper">
          <HardSkills />
        </div>
      </section>
    </div>
  );
};

export default PerfilProfesional;
