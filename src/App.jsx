import "./App.css";
import BodyContainer from "./components/BodyContainer/BodyContainer";
import Educacion from "./components/Educacion/Educacion";

import Presentacion from "./components/Presentacion/Presentacion";
import Proyectos from "./components/Proyectos/Proyectos";

function App() {
  return (
    <div className="cv-container">
      <article className="cv-content">
        <Presentacion />
        <BodyContainer />
      </article>
      <Proyectos />
      <Educacion />
    </div>
  );
}

export default App;
