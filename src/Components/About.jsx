import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <section
        id="about-me"
        className="section  p-4 rounded shadow-lg w-75 w-75 mb-5 text-center d-flex flex-column justify-content-left"
        style={{
          border: "1px solid rgba(216, 211, 211, 0.05)", // Borde casi invisible
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Sombra leve
        }}
      >
      <h2 className="fw-bold montserrat">
      Sobre Mi
    </h2>
       

        <div class="maquina">
          <span class="texto text-light">¡Hola! Soy Nati </span>
        </div>

        <p className="text-light fs-6 mt-4">
           Soy desarrolladora web fullstack, apasionada por crear aplicaciones funcionales y escalables utilizando tecnologías como <strong>JavaScript, React y Node.js.</strong> Luego de varios años trabajando en el área contable, descubrí en la programación un espacio donde puedo combinar mi lógica, creatividad y curiosidad para resolver problemas reales y construir soluciones significativas.      <br />
          <br />
          Estoy dando mis primeros pasos en este nuevo camino profesional,  buscando mi primera experiencia como desarrolladora. Me destaco por mi compromiso, capacidad de adaptación y trabajo en equipo, siempre con una actitud empática, proactiva y con mindset digital orientada al aprendizaje constante.<br />
          <br />
          Creo en el poder de la tecnología para transformar ideas en realidades, y mi objetivo es ser parte de proyectos que marquen una diferencia 🚀
        </p> 
        <div className="botones-container mt-4 d-flex gap-3 justify-content-center">
          <button
            className="boton"
            onClick={() => window.open("/cv.pdf", "_blank")}
          >
            Descargar CV {" "}
          </button>
          <button
            className="boton"
            onClick={() => (window.location.href = "#Contactame")}
          >
            Contactame{" "}
          </button>
        </div>
      </section>
    </motion.div>
  );
}

export default About;
