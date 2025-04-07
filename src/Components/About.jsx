import React from "react";

function About() {
  return (
    <section
      id="about-me"
      className="section  p-4 rounded shadow-lg w-75 w-75 mb-5 text-center d-flex flex-column justify-content-left"
      style={{
        border: "1px solid rgba(216, 211, 211, 0.05)", // Borde casi invisible
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Sombra leve
      }}
    >
      <h2 className="fw-bold montserrat">Sobre mí</h2>
      <p className="text-light fs-6 mt-4">
        ¡Hola! Soy Natalia Ercolano, desarrolladora web apasionada por la
        tecnología. Me especializo en JavaScript, React y Node.js, y utilizo mi
        experiencia en análisis de datos para crear aplicaciones dinámicas. Mi
        objetivo es seguir creciendo, colaborar con equipos multidisciplinarios
        y mantenerme siempre actualizada con las últimas tendencias del sector.
      </p>
      <div className="botones-container mt-4 d-flex gap-3 justify-content-center">
        <button
          className="boton"
          onClick={() => window.open("/cv.pdf", "_blank")}
        >
          CV Español{" "}
        </button>
        <button
          className="boton"
          onClick={() => (window.location.href = "#Contactame")}
        >
          Contactame{" "}
        </button>
      </div>
    </section>
  );
}

export default About;
