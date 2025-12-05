import React from "react";
import "./menucv.css";
import { Routes, Route, NavLink } from "react-router-dom";
import PerfilProfesional from "../Perfil-Profesional/PerfilProfesional";
import Proyectos from "../Proyectos/Proyectos";
import Educacion from "../Educacion/Educacion";
import Universidad from "../Universidad/Universidad";
import PageNotFound from "../PageNotFound/PageNotFound";

const MenuCv = () => {
  return (
    <div className="menu-cv-container">
      <div className="routes-container">
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Perfil Profesional
          </NavLink>

          <NavLink
            to="/proyectos"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Proyectos
          </NavLink>
          <NavLink
            to="/educacion"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Cursos
          </NavLink>
          <NavLink
            to="/universidad"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Educación
          </NavLink>
        </nav>
        <div className="div-routes">
          <Routes>
            <Route path="/" element={<PerfilProfesional />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/educacion" element={<Educacion />} />
            <Route path="/universidad" element={<Universidad />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default MenuCv;
