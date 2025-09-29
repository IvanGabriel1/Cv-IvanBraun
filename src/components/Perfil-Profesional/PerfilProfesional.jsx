import "./perfil-profesional.css";
import HardSkills from "../Hard-Skills/HardSkills";

const PerfilProfesional = () => {
  return (
    <div className="perfil-profesional-container">
      <section className="perfil-profesional-section">
        <p lang="es" aria-label="Descripción del perfil profesional">
          Desarrollador Front-End con experiencia en React, JavaScript, HTML,
          CSS y Firebase. Constante y disciplinado en el cumplimiento de
          objetivos, con compromiso en el aprendizaje continuo y la aplicación
          de buenas prácticas de desarrollo. Disponibilidad inmediata para
          integrarme a un equipo, aportando dedicación y conocimientos técnicos
          para alcanzar los objetivos propuestos.
        </p>

        <div className="hardskills-qr-container">
          <HardSkills />
        </div>
      </section>
    </div>
  );
};

export default PerfilProfesional;
