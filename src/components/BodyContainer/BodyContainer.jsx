import "./body-container.css";
import Contacto from "../Contacto/Contacto";
import HardSkills from "../Hard-Skills/HardSkills";
import PerfilProfesional from "../Perfil-Profesional/PerfilProfesional";

const BodyContainer = () => {
  return (
    <div className="body-container">
      <Contacto />
      <PerfilProfesional />
      <HardSkills />
    </div>
  );
};

export default BodyContainer;
