import { Link } from "react-router-dom";
import "./pagenotfound.css";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h2>404</h2>
      <p>Página no encontrada</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
};

export default PageNotFound;
