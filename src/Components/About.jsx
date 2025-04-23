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
          Desarrolladora Full Stack con experiencia en crear aplicaciones
          robustas usando <strong>JavaScript, React y Node.js.</strong> Tras
          años en el mundo contable, he encontrado mi pasión en la programación,
          combinando lógica y creatividad para desarrollar proyectos que
          importan. <br />
          <br />
          Me encanta aprender y colaborar, aportando siempre valor con empatía y
          compromiso. Mi objetivo es seguir creciendo profesionalmente mientras
          ayudo a otros a hacer realidad sus sueños digitales. 🚀
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
