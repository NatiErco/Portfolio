import { Nav } from "react-bootstrap";
import MobileNavbar from "../Components/MobileNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdCard,
  faCode,
  faProjectDiagram,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

function Sidebar() {
  
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const sidebarClasses = `
  sidebar bg-dark text-light p-4 
  ${menuOpen ? "d-flex d-md-none" : "d-none d-md-flex"} 
  flex-column align-items-center
`;

  return (
    <>
       {/* El navbar móvil será visible solo en pantallas pequeñas */}
       <MobileNavbar toggleMenu={toggleMenu} />
      
       <div className={sidebarClasses}>
      
        <img
          src="foto.jpg"
          alt="Perfil"
          className="rounded-circle mb-3"
          width="200"
          height="200"
          style={{
            transform: "translateY(-10px)",
    boxShadow: "0 0 30px 10px rgba(255, 0, 221, 0.6)", // glow alrededor
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
        />
        <h2
          className="text-center fw-bold fs-8 mb-3 mt-3"
          style={{ color: "#d8b9ff" }}
        >
          Natalia Ercolano
        </h2>
        <h3 className="text-light fs-6">Full Stack Developer</h3>

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
            <FontAwesomeIcon icon={faProjectDiagram} className="me-2" />{" "}
            Proyectos
          </Nav.Link>
          <Nav.Link
            href="#Contactame"
            className="text-light fs-6 py-2 d-flex align-items-center"
          >
            <FontAwesomeIcon icon={faEnvelope} className="me-2" /> Contactame
          </Nav.Link>
        </Nav>
        <div className="redes d-flex gap-4 my-3">
          <a
            href="https://wa.me/34623140713?text=Hola%20Natalia%2C%20vi%20tu%20portfolio%20y%20me%20gustaría%20contactarte!"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
            style={{ fontSize: "2.0rem" }}
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a
            href="https://www.linkedin.com/in/nercolano"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
            style={{ fontSize: "2.0rem" }}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/NatiErco"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
            style={{ fontSize: "2.0rem" }}
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
