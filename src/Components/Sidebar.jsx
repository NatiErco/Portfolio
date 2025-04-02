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
    <div
      className="sidebar d-flex flex-column align-items-center p-3 bg-dark text-light vh-100 position-fixed top-0 start-0 rounded-end shadow-lg"
      style={{ width: "320px", backgroundColor: "#002b36" }}
    >
      <img
        src="perfil.jpeg"
        alt="Perfil"
        className="rounded-circle mb-3"
        width="200"
        height="200"
        style={{ border: "2px solid #007bff", marginTop: "20px" }} // Cambia el color del borde aquí
      />
      <h2 className="text-center text-info fw-bold fs-8 mb-3 mt-3">
        Natalia Ercolano
      </h2>
      <h3 className="text-light fs-6">Jr. FullStack Developer</h3>

      <Nav className="flex-column mt-4 w-100 p-4">
        <Nav.Link
          href="#sobre-mi"
          className="text-info fs-6 py-2 d-flex align-items-center"
        >
          <FontAwesomeIcon icon={faIdCard} className="me-2" /> Sobre mí
        </Nav.Link>
        <Nav.Link
          href="#Tecnologias"
          className="text-info montserrat fs-6 py-2 d-flex align-items-center"
        >
          <FontAwesomeIcon icon={faCode} className="me-2" /> Tecnologias
        </Nav.Link>
        <Nav.Link
          href="#Proyectos"
          className="text-info fs-6 py-2 d-flex align-items-center"
        >
          <FontAwesomeIcon icon={faProjectDiagram} className="me-2" /> Proyectos
        </Nav.Link>
        <Nav.Link
          href="#Contactame"
          className="text-info fs-6 py-2 d-flex align-items-center"
        >
          <FontAwesomeIcon icon={faEnvelope} className="me-2" /> Contáctame
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default Sidebar;
