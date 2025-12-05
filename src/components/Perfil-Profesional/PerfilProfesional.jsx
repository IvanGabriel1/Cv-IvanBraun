import "./perfil-profesional.css";
import HardSkills from "../Hard-Skills/HardSkills";

const PerfilProfesional = () => {
  return (
    <div className="perfil-profesional-container">
      <section className="perfil-profesional-section">
        <h3 className="perfil-title">Perfil Profesional</h3>

        <p className="perfil-text">
          Desarrollador Front-End con experiencia en React, React Native,
          JavaScript, HTML, CSS y Firebase. Autodidacta, constante y orientado a
          resultados, con foco en crear interfaces funcionales y bien
          estructuradas. Cuento con disponibilidad inmediata y busco integrarme
          a un equipo donde aportar dedicación, responsabilidad y crecimiento
          continuo.
        </p>

        <div className="perfil-hardskills-wrapper">
          <HardSkills />
        </div>
      </section>
    </div>
  );
};

export default PerfilProfesional;
