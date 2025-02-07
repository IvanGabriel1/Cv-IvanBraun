import "./App.css";

import MenuCv from "./components/MenuCv/MenuCv";

import Presentacion from "./components/Presentacion/Presentacion";

function App() {
  return (
    <div className="cv-container">
      <article className="cv-content">
        <Presentacion />
        <MenuCv />
      </article>
    </div>
  );
}

export default App;
