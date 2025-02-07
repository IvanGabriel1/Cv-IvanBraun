import React from "react";
import { Link } from "react-router-dom";
import "./pagenotfound.css";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h2>404 - Página no encontrada</h2>
      <p>Lo sentimos, no pudimos encontrar la página que buscabas.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
};

export default PageNotFound;
