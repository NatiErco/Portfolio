import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdCard,
  faCode,
  faProjectDiagram,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

function Sidebar() {
  return (
    <div className="sidebar d-flex flex-column align-items-center p-4 text-light position-fixed top-0 start-0 vh-100">
      <img
        src="perfil.jpeg"
        alt="Perfil"
        className="rounded-circle mb-3"
        width="200"
        height="200"
      />
      <h2
        className="text-center fw-bold fs-8 mb-3 mt-3" style={{ color: "#d8b9ff" }}>
        Natalia Ercolano
      </h2>
      <h3 className="text-light fs-6">Jr. FullStack Developer</h3>

      <Nav className="flex-column mt-4 w-100 p-0">
        <Nav.Link
          href="#about-me"
          className="text-light fs-6 py-2 d-flex align-items-center"
        >
          <FontAwesomeIcon icon={faIdCard} className="me-2" /> Sobre mí
        </Nav.Link>
        <Nav.Link
          href="#Tecnologias"
          className="text-light montserrat fs-6 py-2 d-flex align-items-center"
        >
          <FontAwesomeIcon icon={faCode} className="me-2" /> Tecnologias
        </Nav.Link>
        <Nav.Link
          href="#Proyects"
          className="text-light fs-6 py-2 d-flex align-items-center"
        >
          <FontAwesomeIcon icon={faProjectDiagram} className="me-2" /> Proyectos
        </Nav.Link>
        <Nav.Link
          href="#Contactame"
          className="text-light fs-6 py-2 d-flex align-items-center"
        >
          <FontAwesomeIcon icon={faEnvelope} className="me-2" /> Contáctame
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default Sidebar;
