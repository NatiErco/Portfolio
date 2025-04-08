import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faBootstrap,
  faReact,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { faExternalLink, faServer } from "@fortawesome/free-solid-svg-icons";

function Proyects() {
  return (
    <section
      id="Proyects"
      className="section  p-4 rounded shadow-lg w-75 w-75 mb-5 mx-auto text-center"
      style={{
        border: "1px solid rgba(216, 211, 211, 0.05)", // Borde casi invisible
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Sombra leve
      }}
    >
    <h2 className="fw-bold montserrat">Proyectos</h2>
      <div
        className="card-proyect bg-dark text-white mb-4 p-3 text-start"
        style={{ maxWidth: "500px!important" }}
      >
        <h3 className="fw-bold text-center">Poke-Test</h3>
        <p>
          Aplicación web que permite a los usuarios buscar y explorar
          información sobre Pokémon, utilizando la API de PokeAPI.
        </p>
        <div className="d-flex gap-4 mt-2">

        <FontAwesomeIcon icon={faHtml5} className="icon-tech" title="HTML5" />
        <FontAwesomeIcon icon={faCss3Alt} className="icon-tech" title="CSS3" />
        <FontAwesomeIcon icon={faJs} className="icon-tech" title="JavaScript" />
        <FontAwesomeIcon icon={faBootstrap} className="icon-tech" title="Bootstrap" />
          <a
            href="https://poke-memotest.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="boton"
          >
            Ver Demo <FontAwesomeIcon icon={faExternalLink} className="ms-1" />
          </a>
        </div>
      </div>

      <div className="card-proyect bg-dark text-white mb-4 p-3 text-start">
        <h3 className="fw-bold text-center">Freelance-Hub</h3>
        <p>
          Creación de una plataforma que conecta freelancers con potenciales
          clientes, permitiendo la búsqueda de servicios y la interacción entre
          usuarios.
        </p>
        <div className="d-flex gap-4 mt-2">
          <FontAwesomeIcon icon={faReact} className="icon-tech" title="React"/>
          <FontAwesomeIcon icon={faJs} className="icon-tech" title="JavaScript" />
          <FontAwesomeIcon icon={faNodeJs} className="icon-tech"title="Node.js"/>
          <FontAwesomeIcon icon={faServer} className="icon-tech" title="Express"/>
          <a
          href="https://freelancehub-4tr0.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="boton"
        >
          Ver Demo <FontAwesomeIcon icon={faExternalLink} className="ms-1" />
        </a>
        </div>
      
      </div>
    </section>
  );
}

export default Proyects;
