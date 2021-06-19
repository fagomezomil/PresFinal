import React from "react";
import { NavLink } from "react-router-dom";

const Navbah = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor: '#aaaaaa'}}>
      <span className="navbar-brand mb-0 h1">Presentación Proyecto Final</span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <NavLink
            exact
            to="/"
            className="nav-item nav-link"
            activeClassName="nav-item nav-link active"
          >
            Presentación
          </NavLink>
          <NavLink
            exact
            to="/two"
            className="nav-item nav-link"
            activeClassName="nav-item nav-link active"
          >
            Integrantes
          </NavLink>
          <NavLink
            exact
            to="/three"
            className="nav-item nav-link"
            activeClassName="nav-item nav-link active"
          >
            El proyecto
          </NavLink>
          <NavLink
            exact
            to="/four"
            className="nav-item nav-link"
            activeClassName="nav-item nav-link active"
          >
            Agradecimientos
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbah;
