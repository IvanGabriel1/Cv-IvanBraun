import "./perfil-profesional.css";
import HardSkills from "../Hard-Skills/HardSkills";

const PerfilProfesional = () => {
  return (
    <div className="perfil-profesional-container">
      <section className="perfil-profesional-section">
        <h3 className="perfil-title">Perfil Profesional</h3>

        <p className="perfil-text">
          Desarrollador Front-End especializado en React y React Native, con
          experiencia en el desarrollo de aplicaciones web y móviles utilizando
          JavaScript, HTML, CSS y Firebase. Trabajo de forma autónoma, con
          enfoque en resultados y buenas prácticas. Me especializo en crear
          interfaces funcionales, escalables y orientadas a la experiencia de
          usuario, acompañando proyectos desde la idea inicial hasta su
          implementación.
        </p>

        <div className="perfil-hardskills-wrapper">
          <HardSkills />
        </div>
      </section>
    </div>
  );
};

export default PerfilProfesional;
