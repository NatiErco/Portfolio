import React from "react";
import { motion } from "framer-motion";
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
      <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
    <section
      id="Proyects"
      className="section  p-4 rounded shadow-lg w-75 w-75 mb-5 mx-auto text-center"
      style={{
        border: "1px solid rgba(216, 211, 211, 0.05)", // Borde casi invisible
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Sombra leve
      }}
    >
    <h2 className="fw-bold montserrat">Proyectos</h2>

    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-3 gy-4 justify-content-center mt-4">
    <div className="col d-flex">
    <div className="card-proyect bg-dark text-white p-3 text-start w-100">
      
        <h3 className="fw-bold text-center">Poke-Test</h3>
        <p>
          Aplicación web que permite a los usuarios buscar y explorar
          información sobre Pokémon, utilizando la API de PokeAPI.
        </p>
       <div className="d-flex flex-wrap gap-3 mt-2 align-items-center">

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
      </div>

      <div className="col d-flex">
       <div className="card-proyect bg-dark text-white p-3 text-start w-100">
        <h3 className="fw-bold text-center">Portfolio Personal</h3>
        <p>
        Diseño y desarrollo de portfolio web responsivo para presentar proyectos propios, CV y contacto.
        </p>
        <div className="d-flex flex-wrap gap-3 mt-2 align-items-center">
          <FontAwesomeIcon icon={faReact} className="icon-tech" title="React"/>
          <FontAwesomeIcon icon={faJs} className="icon-tech" title="JavaScript" />
          <FontAwesomeIcon icon={faBootstrap} className="icon-tech" title="Bootstrap" />

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
       </div>

       <div className="col d-flex">
        <div className="card-proyect bg-dark text-white p-3 text-start w-100">
        <h3 className="fw-bold text-center">Freelance-Hub</h3>
        <p>
          Creación de una plataforma que conecta freelancers con potenciales
          clientes, permitiendo la búsqueda de servicios y la interacción entre
          usuarios.
        </p>
        <div className="d-flex flex-wrap gap-3 mt-2 align-items-center">
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
        </div>
      </div>
    </section>
    
    </motion.div>
  );
}

export default Proyects;
