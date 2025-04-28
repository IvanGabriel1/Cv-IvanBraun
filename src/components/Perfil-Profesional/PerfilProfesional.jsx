import React from "react";
import "./perfil-profesional.css";
import HardSkills from "../Hard-Skills/HardSkills";
import Video from "../Video/Video";

const PerfilProfesional = () => {
  return (
    <div className="perfil-profesional-container">
      <section className="perfil-profesional-section">
        <p lang="es" aria-label="Descripción del perfil profesional">
          Profesional enfocado en el cumplimiento de objetivos, constante y
          disciplinado para enfrentar desafíos hasta su finalización.
          Comprometido con el aprendizaje continuo y dispuesto a asumir nuevos
          retos que impulsen mi crecimiento personal y profesional. Cuento con
          disponibilidad inmediata para integrarme a tu equipo, aportando
          dedicación y compromiso para alcanzar los objetivos que se propongan.
        </p>

        <div className="hardskills-qr-container">
          <HardSkills />
          <div className="qr-container">
            <Video videoId={`ytzu5VEFbOc`} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PerfilProfesional;
