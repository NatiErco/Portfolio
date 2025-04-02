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
      className="sidebar d-flex flex-column align-items-center p-4 m-4 bg-dark text-light top-0 bottom-0 position-fixed top-0 start-0 rounded-end shadow-lg"
      style={{
        width: "300px",
        height: "calc(100vh - 40px)", // Ajusta altura con margen
       background: "linear-gradient(180deg, #1b1b2f, #23234e)", // Degradado oscuro
        borderRadius: "20px",
        boxShadow: "0 0 15px rgba(177, 156, 217, 0.5)", // Brillo violeta
        color: "#d8b9ff", // Texto lila claro
      }}
    >
      <img
        src="perfil.jpeg"
        alt="Perfil"
        className="rounded-circle mb-3"
        width="200"
        height="200"
        style={{ border: "3px solid #b19cd9",
        marginTop: "20px",
        boxShadow: "0 0 10px rgba(177, 156, 217, 0.7)",}} // Brillo en imagen 
      />
      <h2 className="text-center fw-bold fs-8 mb-3 mt-3" style={{ color: "#d8b9ff" }}>
        Natalia Ercolano
      </h2>
      <h3 className="text-light fs-6">Jr. FullStack Developer</h3>

      <Nav className="flex-column mt-4 w-100 p-4">
        <Nav.Link
          href="#sobre-mi"
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
          href="#Proyectos"
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
