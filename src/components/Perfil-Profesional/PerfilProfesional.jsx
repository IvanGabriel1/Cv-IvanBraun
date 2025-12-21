import "./perfil-profesional.css";
import HardSkills from "../Hard-Skills/HardSkills";

const PerfilProfesional = () => {
  return (
    <div className="perfil-profesional-container">
      <section className="perfil-profesional-section">
        <h3 className="perfil-title">Perfil Profesional</h3>

        <p className="perfil-text">
          Desarrollador Front-End freelance, especializado en React y React
          Native. Experiencia en el desarrollo de aplicaciones web y móviles con
          JavaScript, HTML, CSS y Firebase. Trabajo de forma autónoma, orientado
          a resultados y buenas prácticas, acompañando proyectos desde la idea
          inicial hasta su implementación, con foco en la experiencia de
          usuario.
        </p>

        <div className="perfil-hardskills-wrapper">
          <HardSkills />
        </div>
      </section>
    </div>
  );
};

export default PerfilProfesional;
